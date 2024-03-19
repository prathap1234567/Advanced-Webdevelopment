import React, { useState } from "react";
import "./Form.css";
import { Link } from "react-router-dom";
function Form() {
  // const[name,Setname]=useState("name");
  return (
    <div>
      <>
        <div className="backimage5">
          <div id="login-page" className="container open">
            <h1>Register</h1>
            <div className="form-set">
              <div className="form-group">
                <lable className="form-label"></lable>
                <input
                  type="text"
                  placeholder="Name"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <lable className="form-label"></lable>
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <lable className="form-label"></lable>
                <input
                  type="email"
                  placeholder="Email"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <lable className="form-label"></lable>
                <input
                  type="number"
                  placeholder="Number of Persons"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <lable className="form-label"></lable>
                <input
                  type="text"
                  placeholder="Food"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <lable className="form-label"></lable>
                <select id="theme" className="form-control">
                  <option value="">Select a Theme</option>
                  <option value="casual">1st Birthday</option>
                  <option value="formal">Formal</option>
                  <option value="vintage">Vintage</option>
                  <option value="modern">Modern</option>
                  <option value="fantasy">Fantasy</option>
                </select>
              </div>
              <div className="form-group">
                <lable className="form-label"></lable>
                <input
                  type="location"
                  placeholder="Location"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <lable className="form-label"></lable>
                <input type="time" className="form-control" />
              </div>
              <div className="form-group">
                <lable className="form-label"></lable>
                <input
                  type="text"
                  placeholder="Budget"
                  className="form-control"
                />
              </div>
              <Link to="/"> 
              <button className="btn">Submit</button></Link>
            </div>
          </div>
          v
        </div>
      </>
    </div>
  );
}

export default Form;
