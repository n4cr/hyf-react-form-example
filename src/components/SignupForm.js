import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

class SignupForm extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      gender: "",
      agree: false,
      error: "",
    };
  }

  change = ({ target: { name, value, checked } }) => {
    console.log(value)
    if(name === 'agree') {
      this.setState({ [name]: checked});
      return
    }
    this.setState({ [name]: value });
  };

  render() {
    const error = this.state.name.length < 4 ?  <p>The name should be more than 4 chars</p>: null
    return (
      <div>
        <h2>Signup</h2>
        <Form onSubmit={() => this.props.onSignup(this.state)}>
          <FormGroup>
            <Label for="example">Name</Label>
            <Input
              type="name"
              name="name"
              placeholder="with a placeholder"
              value={ this.state.name.toUpperCase()}
              onChange={this.change}
            />
            <div>{error}</div>
          </FormGroup>
          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="with a placeholder"
              value={this.state.email}
              onChange={this.change}
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleSelect">Gender</Label>
            <Input
              type="select"
              name="gender"
              id="exampleSelect"
              value={this.state.gender}
              onChange={this.change}
            >
              <option value="">--</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label>
              <Input
                type="checkbox"
                name="agree"
                checked={this.state.agree}
                onChange={this.change}
              />{" "}
              I agree the terms
            </Label>
          </FormGroup>

          <Button>Submit</Button>
        </Form>
      </div>
    );
  }
}

export default SignupForm;
