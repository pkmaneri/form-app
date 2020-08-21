import React from "react";
// import './App.css';
import FormData from "./component/FormData";
import LoginForm from "./component/LoginForm";

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm">
          <FormData />
        </div>
        <div className="col-sm">
          <LoginForm />
        </div>
        {/* <div className="col-sm">
          <FormData />
        </div>
        <div className="col-sm">
          <FormData />
        </div> */}
      </div>
    </div>
  );
}

export default App;
