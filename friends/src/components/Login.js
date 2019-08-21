import React, { useState } from "react";
import axios from "axios";

const Login = props => {
  const [auth, setAuth] = useState({
    username: "",
    password: ""
  });

  const handleChange = e => {
    setAuth({
      ...auth,
      [e.target.name]: e.target.value
    });
  };

  const login = e => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/login", auth)
      .then(res => {
        console.log(res);
        localStorage.setItem("token", res.data.payload);
        props.history.push("frienddata");
      })
      .catch(err => console.log(err.response));
  };

  return (
    <div>
      <form onSubmit={login}>
        <input
          type="text"
          name="username"
          value={auth.username}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          value={auth.password}
          onChange={handleChange}
        />
        <button>Log in</button>
      </form>
    </div>
  );
};

export default Login;
