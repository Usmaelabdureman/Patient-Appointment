import { Button, Form, Input } from "antd";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import toast from "react-hot-toast";
import { hideLoading, showLoading } from "../redux/alertsSlice";
import logo from "../Assets/sign-upimg.svg";

function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onFinish = async (values) => {
    try {
      dispatch(showLoading());
      const response = await axios.post("/api/user/register", values);
      dispatch(hideLoading());
      if (response.data.success) {
        toast.success(response.data.message);
        navigate("/login");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="container">
      <div className="row ">
        <div className="column">
          <img
            className="img"
            src={logo}
            alt=".."
            max-height="100%"
            width="80%"
            id="image-section"
          />
        </div>
        <div className="column">
          <div className="authentication">
            <div className="authentication-form card p-3">
              <h1 className="card-title">Create An Account</h1>
              <Form layout="vertical" onFinish={onFinish}>
                <div className="rowc">
                  <div className="columnc">
                  <Form.Item label="First Name" name="fname">
                  <Input placeholder="First Name" />
                </Form.Item>
                  </div>
                  <div className="columnc">
                  <Form.Item label="Last Name" name="lname">
                  <Input placeholder="Last Name" />
                </Form.Item>
                  </div>
                  
                </div>
                
                
                
                <Form.Item label="Email" name="email">
                  <Input placeholder="Email" />
                </Form.Item>
                <Form.Item label="Password" name="password">
                  <Input placeholder="Password" type="password" />
                </Form.Item>

                <Button
                  className="primary-button my-2 full-width-button"
                  htmlType="submit"
                >
                  Sign Up
                </Button>

                <Link to="/login" className="anchor mt-2">
                  have an account? Sign In
                </Link>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
