import React, { useState, useEffect } from "react";
import { Form, Input, Button, Alert } from "antd";
import Icon from "@ant-design/icons";
import { connect, useDispatch } from "react-redux";
import { login, logout } from "../actions/authAction";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const { isAuthenticated, error, errorMessage } = this.props;
  const { getFieldDecorator } = this.props.form;
  if (isAuthenticated) this.props.history.push("/");

  useEffect(() => {
    dispatch(logout);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { dispatch } = this.props;

    //const { username, password } = this.state;
    dispatch(login(username, password));
    setUsername("");
    setPassword("");
  };

  const handleChange = (e) => {
    setUsername(e.target.value);
    setPassword(e.target.value);
    /* this.setState({
      [e.target.name]: e.target.value,
    }); */
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Form onSubmit={handleSubmit} className="login-form">
        <h1 style={{ textAlign: "center" }}>Login</h1>
        <Form.Item>
          {getFieldDecorator(
            { username },
            {
              rules: [
                { required: true, message: "Please input your username!" },
              ],
            }
          )(
            <Input
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="Username"
              onChange={handleChange}
              required
              name="username"
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator(
            { password },
            {
              rules: [
                { required: true, message: "Please input your Password!" },
              ],
            }
          )(
            <Input
              prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
              type="password"
              name="password"
              required
              placeholder="Password"
              onChange={handleChange}
            />
          )}
        </Form.Item>
        <Form.Item style={{ textAlign: "center" }}>
          <Button
            style={{ marginLeft: "auto", marginRight: "auto" }}
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Login
          </Button>
        </Form.Item>
        {isAuthenticated ? (
          <Alert
            style={{ textAlign: "center" }}
            message="Login Success"
            type="success"
            closable
          />
        ) : null}
        {error && !isAuthenticated ? (
          <Alert
            style={{ textAlign: "center" }}
            message={errorMessage}
            type="error"
            closable
          />
        ) : null}
      </Form>
    </div>
  );
}

//export default Login;

const mapStateToProps = (state) => {
  const { isAuthenticated, error, errorMessage, user } = state.auth;
  return {
    isAuthenticated,
    error,
    errorMessage,
    user,
  };
};

const WrappedLogin = Form(Login);
export default connect(mapStateToProps)(WrappedLogin);
