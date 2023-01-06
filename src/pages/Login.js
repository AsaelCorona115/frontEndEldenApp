//React Bootstrap Components
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Spinner from "react-bootstrap/Spinner";

//React Router Imports
import { Link } from "react-router-dom";

//React Imports
import { useState, useRef, useEffect } from "react";

//Custom Hooks
import { useLogin } from "../components/customHooks/useLogin";

//Gsap Imports
import { gsap } from "gsap";

const Login = () => {
  //States
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isLoading, error } = useLogin();

  //ref for animation
  const loginRef = useRef();
  const tl = useRef();

  //handlers
  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password);
  };

  //animations
  useEffect(() => {
    let animationContext = gsap.context(() => {
      tl.current = gsap.timeline();

      tl.current.fromTo(
        ".titleImage, .continue",
        { duration: "2", opacity: "40%", yoyo: true, repeat: -1 },
        { duration: "2", opacity: "100%", yoyo: true, repeat: -1 }
      );
    }, loginRef);

    return () => {
      animationContext.revert();
    };
  }, []);

  return (
    <>
      <Container fluid ref={loginRef}>
        <Row className="d-flex justify-content-center align-items-center titleScreen">
          <Image
            src="https://c4.wallpaperflare.com/wallpaper/114/191/745/elden-ring-fromsoftware-dark-souls-hd-wallpaper-preview.jpg"
            className="titleImage"
          ></Image>
        </Row>
        <Row className="d-flex justify-content-center">
          <p className="text-light text-center mt-5 fs-3 ">CONTINUE</p>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="150"
            height="40"
            viewBox="0 0 125 23"
            fill="none"
            className="continue"
          >
            <a href="#anchor">
              <path
                d="M6.5 5L1 11.5L6.5 18L68 22L118 18L123.5 11.5L118 5L68 1L6.5 5Z"
                fill="url(#paint0_radial_104_129)"
                fillOpacity="0.19"
                stroke="black"
                strokeOpacity="0.69"
              />
              <defs>
                <radialGradient
                  id="paint0_radial_104_129"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(62.25 11.5) rotate(90) scale(10.5 61.25)"
                >
                  <stop offset="0.046875" stopColor="white" />
                  <stop offset="0.630208" stopColor="#BE9457" />
                  <stop offset="1" stopColor="#BE9457" stopOpacity="0.2" />
                </radialGradient>
              </defs>
            </a>
          </svg>
        </Row>
      </Container>
      <Container className="loginContainer">
        {/* Banner, Intro Row */}
        <Row className="mt-sm-5">
          <Col xs={{ span: 12, order: 1 }} className="py-5 ">
            <h1 className="HeaderMainText display-4 text-center" id="anchor">
              Rise tarnished
            </h1>

            <p className="fs-3  mt-4 text-light text-center">
              And be guided by grace to become an Elden Lord in the Lands
              Between. Follow the index of Sir Gideon Ofnir, the All knowing to
              collect all items, explore every corner of these lands and come to
              meet any ally or adversary these lands have to offer. Let the
              guidance of grace be brought to the Tarnished.
            </p>
          </Col>
        </Row>
        <Row>
          <Col
            className="text-center"
            xs={12}
            sm={{ span: 8, offset: 2 }}
            lg={{ span: 6, offset: 3 }}
          >
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

              <br />

              {isLoading && (
                <Spinner animation="border">
                  <span className="visually-hidden">Loading...</span>
                </Spinner>
              )}

              <br />

              <Button
                variant="outline-light"
                className="m-5 loginButton "
                type="submit"
                disabled={isLoading}
              >
                Login
              </Button>
            </form>

            {error && (
              <div className="fs-4 text-danger border border-danger">
                {error}
              </div>
            )}

            <p className="fs-5 text-light text-center p-5">
              Not a member yet?{" "}
              <Link to="/SignUp" className="signLink">
                Sign-up
              </Link>
            </p>
          </Col>
        </Row>
        <Row>
          <Col xs={12} className="text-center text-light">
            {" "}
            <p>
              Hello! My name is Victor Corona and I developed this site. <br />{" "}
              This is just a passion project of mine to practice my MERN stack
              abilities. <br />
              Feel free to use a dummy email in your credentials to test the
              site, I delete any information from the database periodically and
              I don't have access to any passwords you decide to create.
              <br /> Feel free to check my{" "}
              <a href="https://github.com/AsaelCorona115" target="_blank">
                {" "}
                GitHub{" "}
              </a>
              or contact me with any ideas on my email: victor_cg115@hotmail.com{" "}
              <br />
              Good luck tarnished!
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Login;
