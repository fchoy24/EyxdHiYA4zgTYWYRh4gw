import React, { Component } from 'react';
import { 
  Container, 
  Row, // eslint-disable-next-line no-unused-vars
  Col, 
  Label, 
  Input, 
  FormGroup,
  Form, 
  Button 
} from 'reactstrap';
import './login.css';

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    };
    
  }

  render() {
    return (
      <div>
        <Container>
          <Form onSubmit={this.submitForm.bind(this)}>
            <div className="auth-wrapper">
              <Row>
                <Col md={{ size: 4, offset: 4 }}>
                  <div className="login-wrapper">
                    <FormGroup>
                      <Label for="username">Branch Username</Label>
                      <Input value={this.state.username} onChange={this.userName.bind(this)} type="text" placeholder=""></Input>
                    </FormGroup>
                    <FormGroup>
                      <Label for="password">Password</Label>
                      <Input value={this.state.password} onChange={this.passWord.bind(this)} type="password" id="password" placeholder=""></Input>
                    </FormGroup>
                  </div>
                </Col>
              </Row>
              <div>
                <Button style={{'display':'none'}}></Button>
              </div>
            </div>
          </Form>
        </Container>
      </div>
    );
  }

  makeid() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  
    for (var i = 0; i < 20; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  
    return text;
  }

  userName(e) {
    this.setState({username: e.target.value});
    
  }

  passWord(e) {
    this.setState({password: e.target.value});
  }

  submitForm(e) {
    e.preventDefault();
    console.log(this.makeid());
    fetch('/user/in/lg',{
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password
      })
    })
    .then(res => {return res.json()})
    .then(data => {
      console.log(data);
    }).catch(err => console.log(err));
  }

}