import { Col, Row } from "antd";
import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "../../pages/auth/login/LoginPage";

const AuthLayout = (props) => {
  return (
    <Row justify="center" align="middle" style={{ minHeight: "100vh" }}>
      <Col xs={24} style={{ maxWidth: 360 }}>
        <Routes>
          <Route path="login" element={<LoginPage />} />
          <Route path="*" element={<Navigate to="login" replace />} />
        </Routes>
      </Col>
    </Row>
  )
}

export default AuthLayout;