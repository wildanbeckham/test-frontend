import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import NavAuth from "../../Component/Auth/NavAuth";

const Register = () => {
  const [id, idchange] = useState("");
  const [password, passwordchange] = useState("");
  const [email, emailchange] = useState("eve.holt@reqres.in");

  const navigate = useNavigate();

  const IsValidate = () => {
    let isproceed = true;
    let errormessage = "Please enter the value in ";
    if (password === null || password === "") {
      isproceed = false;
      errormessage += " Password";
    }
    if (email === null || email === "") {
      isproceed = false;
      errormessage += " Email";
    }

    if (!isproceed) {
      toast.warning(errormessage);
    } else {
      if (
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/.test(
          email
        )
      ) {
      } else {
        isproceed = false;
        toast.warning("Please enter the valid email");
      }
    }
    return isproceed;
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    let regobj = { id, password, email };
    if (IsValidate()) {
      //console.log(regobj);
      fetch("http://localhost:3001/users", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(regobj),
      })
        .then((res) => {
          toast.success("Registered successfully.");
          navigate("/login");
        })
        .catch((err) => {
          toast.error("Failed :" + err.message);
        });
    }
  };
  return (
    <>
      <NavAuth />
      <div className="bg-warning">
        <div className="container shadow">
          <div className="row justify-content-center d-flex align-items-center vh-100">
            <div className="col-lg-8">
              <form onSubmit={handlesubmit}>
                <div className="card shadow">
                  <div className="card-header py-5 text-center">
                    <h1>User Registeration</h1>
                  </div>
                  <div className="card-body">
                    <FloatingLabel
                      controlId="floatingText"
                      label="Full Name"
                      className="mb-3 errmsg"
                    >
                      <Form.Control
                        value={id}
                        onChange={(e) => idchange(e.target.value)}
                        type="id"
                        placeholder="Full Name"
                      />
                    </FloatingLabel>
                    <FloatingLabel
                      controlId="floatingInput"
                      label="Email address"
                      className="mb-3 errmsg"
                    >
                      <Form.Control
                        value={email}
                        onChange={(e) => emailchange(e.target.value)}
                        type="email"
                        placeholder="name@example.com"
                        disabled
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
                        onChange={(e) => passwordchange(e.target.value)}
                        placeholder="Password"
                      />
                    </FloatingLabel>
                  </div>
                  <div className="card-footer text-center py-4">
                    <button type="submit" className="btn btn-primary px-5 py-3">
                      Register
                    </button>{" "}
                    <Link to={"/login"} className="btn btn-danger px-5 py-3">
                      Close
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

export default Register;
