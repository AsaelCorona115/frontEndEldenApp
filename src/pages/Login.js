import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useState } from "react";
const Login = () => {
  //States
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //handlers
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email, password);
  };

  return (
    <Container className="loginContainer">
      <Row>
        <Col
          className="text-center"
          xs={12}
          sm={{ span: 8, offset: 2 }}
          lg={{ span: 6, offset: 3 }}
        >
          <h1 className="HeaderMainText m">Rise Tarnished</h1>
          <p className="fs-3 text-light generalParagraph p-5">
            Become an Elden Lord and explore the <br /> Lands Between. <br />{" "}
            Greatness awaits
          </p>
          <form action="" onSubmit={handleSubmit}>
            <fieldset>
              <legend>Login</legend>
              <input
                type="email"
                placeholder="Email"
                className="loginInput"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
              />
              <input
                type="password"
                placeholder="Password"
                className="loginInput"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                value={password}
                required
              />
            </fieldset>

            <Button
              variant="outline-light"
              className="m-5 loginButton "
              type="submit"
            >
              Login
            </Button>
          </form>

          <p className="fs-5 text-light text-center p-5">
            Not a member yet?{" "}
            <Link to="/SignUp" className="signLink">
              Sign-up
            </Link>
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
