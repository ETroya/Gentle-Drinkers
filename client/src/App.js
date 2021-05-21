import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AuthProvider from "./components/Contexts/AuthContext";
import Main from "./pages/Main";
import Signup from "./components/Signup/Signup";
import { Container } from "react-bootstrap";
import Login from "./pages/Login";
import PrivateRoute from "./components/PrivateRoutes/PrivateRoutes";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import UpdateProfile from "./components/UpdateProfile/UpdateProfile";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div>
          <PrivateRoute exact path={"/"} component={Main} />
          <PrivateRoute
            exact
            path={"/updateprofile"}
            component={UpdateProfile}
          />
          <Route exact path={"/signup"}>
            <Container
              className="d-flex algin-items-center justify-content-center mt-5"
              style={{ minHeight: "100vh" }}
            >
              <div
                className="w-100 text-secondary"
                style={{ maxWidth: "400px" }}
              >
                <Signup />
              </div>
            </Container>
          </Route>
          <Route exact path={"/login"}>
            <Container
              className="d-flex algin-items-center justify-content-center mt-5"
              style={{ minHeight: "100vh" }}
            >
              <div
                className="w-100 text-secondary"
                style={{ maxWidth: "400px" }}
              >
                <Login />
              </div>
            </Container>
          </Route>
          <Route exact path={"/forgot-password"}>
            <Container
              className="d-flex algin-items-center justify-content-center mt-5"
              style={{ minHeight: "100vh" }}
            >
              <div
                className="w-100 text-secondary"
                style={{ maxWidth: "400px" }}
              >
                <ForgotPassword />
              </div>
            </Container>
          </Route>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
