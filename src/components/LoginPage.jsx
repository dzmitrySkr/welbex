import { Form, Input, Button } from "antd";
import axios from "axios";
import "../styles/login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "antd/dist/antd.css";

function LoginPage() {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const onFinish = (values) => {
    axios
      .post("https://typ-back.herokuapp.com/api/auth/login", {
        login: values.username,
        password: values.password,
      })
      .then((res) => {
        if (res.data.token) {
          navigate("main");
          localStorage.setItem("token", res.data.token.split(".")[0]);
          setShow(false);
        } else {
          setShow(true);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <h2 className="enter_title">Enter</h2>
      <p className={show ? "login_error" : "login_error none"}>
        Incorrect login or password
      </p>

      <Form
        layout="vertical"
        name="basic"
        labelCol={{
          span: 26,
        }}
        wrapperCol={{
          span: 26,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input onChange={() => setShow(false)} />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 3,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>

      <p className="hint">dimas@dimas.com</p>
      <p className="hint">dimasik</p>
    </>
  );
}

export default LoginPage;
