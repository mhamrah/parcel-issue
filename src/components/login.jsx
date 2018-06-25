import * as React from "react";

export default class Login extends React.Component {
  login() {
    console.log("foo");
  }
  render() {
    return <button onClick={() => this.login()}>click me</button>;
  }
}
