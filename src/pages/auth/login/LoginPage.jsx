import LoginForm from "containers/LoginForm/LoginForm";
import { Card, Typography } from "antd";

const LoginPage = props => {
    return (
        <Card title={<Typography.Title level={1}>Login</Typography.Title>}>
            <LoginForm />
        </Card>
    )
}

export default LoginPage;