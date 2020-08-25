import React from 'react';
import {Image, Comment, Form, Button, Header} from 'semantic-ui-react'

import 포스터 from "./포스터.jpg"
import human from "./human.png"

class Comments extends React.Component{

  render(){
    return(  <Comment.Group>
        <Header as='h3' dividing>
          Comments
        </Header>

        <Comment>
          <Comment.Avatar src={human} />
          <Comment.Content>
            <Comment.Author as='a'>Matt</Comment.Author>
            <Comment.Metadata>
              <div>Today at 5:42PM</div>
            </Comment.Metadata>
            <Comment.Text>How artistic!</Comment.Text>
            <Comment.Actions>
              <Comment.Action>Reply</Comment.Action>
            </Comment.Actions>
          </Comment.Content>
        </Comment>



        <Form reply>
          <Form.TextArea />
          <Button content='Add Reply' labelPosition='left' icon='edit' primary />
        </Form>
      </Comment.Group>)
  }
}

function App() {
  return (
      <div>
  <Image src = {포스터} centered />
  <Comments />
  </div>
  );
}

export default App;
