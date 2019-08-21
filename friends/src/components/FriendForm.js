import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const FriendForm = props => {
  const [newFriend, setNewFriend] = useState({
    name: "",
    age: "",
    email: ""
  });

  const handleChange = e => {
    setNewFriend({
      ...newFriend,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("http://localhost:5000/api/friends", newFriend)
      .then(res => {
        console.log(res);
        props.getData();
      })
      .catch(err => console.log(err.response));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="name"
          value={newFriend.name}
          onChange={handleChange}
        />
        <input
          type="number"
          name="age"
          placeholder="age"
          value={newFriend.age}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="email"
          value={newFriend.email}
          onChange={handleChange}
        />
        <button>Add Friend</button>
      </form>
    </div>
  );
};

export default FriendForm;
