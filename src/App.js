import React from "react";
import firebase from "firebase";
import {
  Button,
  Image,
  Divider,
  Header,
  Icon,
  Grid,
  Input,
  Menu,
} from "semantic-ui-react";

import Comments from "./comment.js";
import Buttons from "./buttons.js";
import VisitorsModal from "./modal.js";
import auth from "./fb.js";

import 포스터 from "./포스터.jpg";

var provider = new firebase.auth.GoogleAuthProvider();

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userName: "방문자",
      isModalOpen: false,
      visitors: ["Susan", "Mina", "John"],
    };
  }

  toggleModal = () =>
    this.setState((prevState) => {
      return { isModalOpen: !prevState.isModalOpen };
    });

  render() {
    return (
      <div style={{ backgroundColor: "black" }}>
        <VisitorsModal
          isOpen={this.state.isModalOpen}
          closeModal={this.toggleModal}
          visitorsList={this.state.visitors}
        />
        <h2 style={{ color: "white", textAlign: "center", paddingtop: "15px" }}>
          {" "}
          COPYCAT{" "}
        </h2>
        <Menu inverted widths={3}>
          <Menu.Item>Menu</Menu.Item>
          <Menu.Item>{`반가워요,  ${this.state.userName}님.`} </Menu.Item>
          <Menu.Item
            onClick={() => {
              firebase
                .auth()
                .signInWithPopup(provider)
                .then(function (result) {
                  // This gives you a Google Access Token. You can use it to access the Google API.
                  var token = result.credential.accessToken;
                  // The signed-in user info.
                  var user = result.user;
                  return user.displayname;
                  // ...
                })
                .then((result) => this.setState({ userName: result }))
                .catch(function (error) {
                  // Handle Errors here.
                  var errorCode = error.code;
                  var errorMessage = error.message;
                  // The email of the user's account used.
                  var email = error.email;
                  // The firebase.auth.AuthCredential type that was used.
                  var credential = error.credential;
                  // ...
                });
            }}
          >
            Login
          </Menu.Item>
        </Menu>
        <Divider horizontal>
          <Header as="h4" style={{ color: "white" }}>
            <Icon name="microchip" style={{ color: "white" }} />
            Contact Me
          </Header>
        </Divider>
        <br />
        <div>
          <Grid centered>
            <Button
              circular
              color="facebook"
              icon="facebook"
              style={{ marginLeft: 10 }}
              onClick={() => alert("준비중입니다.")}
            />
            <Button
              circular
              color="instagram"
              icon="instagram"
              style={{ marginLeft: 20 }}
              onClick={() => window.open("https://www.instagram.com/?hl=ko")}
            />
            <Button
              circular
              color="youtube"
              icon="youtube"
              style={{ marginLeft: 20 }}
              onClick={() =>
                window.open(
                  "https://www.youtube.com/channel/UCxnaK0xpB3Xu6OZb7svT5mw?view_as=subscriber"
                )
              }
            />
            <Button
              circular
              color="google plus"
              icon="google plus"
              style={{ marginLeft: 20 }}
              onClick={() => alert("준비중입니다.")}
            />
          </Grid>
        </div>
        <br />
        <Divider horizontal>
          <Header as="h4" style={{ color: "white" }}>
            <Icon name="paperclip" style={{ color: "white" }} />
            My Project
          </Header>
        </Divider>
        <Grid centered>
          <Grid.Row>
            <Image src={포스터} centered />
          </Grid.Row>
          <Grid.Row>
            <Buttons
              openModal={this.toggleModal}
              visitors={this.state.visitors.length}
            />
          </Grid.Row>
        </Grid>
        <br />

        <Divider horizontal>
          <Header as="h4" style={{ color: "white" }}>
            <Icon name="comment alternate" style={{ color: "white" }} />
            댓글을 입력하세요
          </Header>
        </Divider>
        <Grid centered columns={3}>
          <Grid.Column>
            <Comments userName={this.state.userName} />
          </Grid.Column>
        </Grid>
        <Divider horizontal>
          <Header as="h4" style={{ color: "white" }}>
            <Icon name="home" style={{ color: "white" }} />
          </Header>
        </Divider>
        <br />
        <Grid centered>
          <p style={{ color: "white" }}>
            {" "}
            copyright @ yujin park, all rights reserved{" "}
          </p>
        </Grid>
        <br />
        <br />
      </div>
    );
  }
}

export default App;
