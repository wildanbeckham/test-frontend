import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import NavAuth from "../../Component/Auth/NavAuth";

const Login = () => {
  const [username, usernameupdate] = useState("");
  const [password, passwordupdate] = useState("");

  const usenavigate = useNavigate();

  useEffect(() => {
    sessionStorage.clear();
  }, []);

  const ProceedLogin = (e) => {
    e.preventDefault();
    if (validate()) {
      ///implentation
      // console.log('proceed');
      fetch("http://localhost:3001/users/" + username)
        .then((res) => {
          return res.json();
        })
        .then((resp) => {
          //   console.log(resp);
          if (Object.keys(resp).length === 0) {
            toast.error("Please Enter valid username");
          } else {
            if (resp.password === password) {
              toast.success("Success");
              sessionStorage.setItem("username", username);
              usenavigate("/list-proflie");
            } else {
              toast.error("Please Enter valid credentials");
            }
          }
        })
        .catch((err) => {
          toast.error("Login Failed due to :" + err.message);
        });
    }
  };

  const validate = () => {
    let result = true;
    if (username === "" || username === null) {
      result = false;
      toast.warning("Please Enter username");
    }
    if (password === "" || password === null) {
      result = false;
      toast.warning("Please Enter Password");
    }
    return result;
  };
  return (
    <>
      <NavAuth />
      <div className="bg-warning">
        <div className="container shadow">
          <div className="row justify-content-center d-flex align-items-center vh-100">
            <div className="col-lg-8">
              <form onSubmit={ProceedLogin}>
                <div className="card shadow">
                  <div className="card-header py-5 text-center">
                    <h1>User Login</h1>
                  </div>
                  <div className="card-body">
                    <FloatingLabel
                      controlId="floatingText"
                      label="Full Name"
                      className="mb-3 errmsg"
                    >
                      <Form.Control
                        value={username}
                        onChange={(e) => usernameupdate(e.target.value)}
                        type="id"
                        placeholder="Full Name"
                      />
                    </FloatingLabel>
                    <FloatingLabel
                      className="errmsg mb-3"
                      controlId="floatingPassword"
                      label="Password"
                    >
                      <Form.Control
                        type="password"
                        value={password}
                        onChange={(e) => passwordupdate(e.target.value)}
                        placeholder="Password"
                      />
                    </FloatingLabel>
                  </div>
                  <div className="card-footer text-center">
                    <button type="submit" className="btn btn-primary px-5 py-3">
                      Login
                    </button>{" "}
                    <Link
                      className="btn btn-warning px-5 py-3"
                      to={"/register"}
                    >
                      Register
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
