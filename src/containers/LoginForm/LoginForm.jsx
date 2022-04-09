import {
  Button,
  Form, Input
} from "antd";

const LoginForm = () => {

  function handleLogin(values) {
    console.log(values);
  }

  return (
    <Form layout="vertical" onFinish={handleLogin}>
      <Form.Item label="Username" name="username" rules={[
        {
          required: true,
          message: "This field is required"
        }
      ]}>
        <Input />
      </Form.Item>
      <Form.Item label="Password" name="password" rules={[
        {
          required: true,
          message: "This field is required"
        }
      ]}>
        <Input.Password />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" block>Login</Button>
      </Form.Item>
    </Form>
  )
}

export default LoginForm;