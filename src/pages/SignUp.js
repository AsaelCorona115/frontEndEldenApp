import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useSignup } from "../components/customHooks/useSignup";
const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup, isLoading, error } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(email, password);
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
            Become an Elden Lord and explore the Land Between. <br /> Greatness
            awaits
          </p>
          <form onSubmit={handleSubmit}>
            <fieldset>
              <legend>Signup</legend>

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
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required
              />
            </fieldset>

            <Button
              variant="outline-light"
              className="m-5 loginButton"
              type="submit"
            >
              SignUp
            </Button>
          </form>

          {error && (
            <div className="fs-5 p-3 text-danger border border-danger">
              {error}
            </div>
          )}

          <p className="fs-5 text-light text-center p-5">
            Already a member?{" "}
            <Link to="/Login" className="signLink">
              Login
            </Link>
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default SignUp;
