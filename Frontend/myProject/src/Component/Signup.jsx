import React from "react";
import "./Login.css";
function Signup() {
  return (
    <div>
      <div id="app">
        <section className="form-container">
          <form>
            <h1>SIGN UP </h1>
            <fieldset>
              <div className="name">
                <input type="text" placeholder="name" />
                <input type="text" placeholder="lastname" />
              </div>
              <div className="email">
                <input type="email" placeholder="email" />
                <p>You can use letters, numbers and periods</p>
              </div>
              <div className="password">
                <input type="password" placeholder="password" />
                <input type="password" placeholder="confirm" />
              </div>
            </fieldset>
            <button>Submit</button>
           
            
          </form>
        </section>
        <aside />
      </div>
    </div>
  );
}

export default Signup;
