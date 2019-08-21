import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import FriendForm from "./FriendForm";

const FriendData = () => {
  const [friends, setFriends] = useState([]);

  const getData = () => {
    axiosWithAuth()
      .get("http://localhost:5000/api/friends")
      .then(res => {
        console.log(res);
        setFriends(res.data);
      })
      .catch(err => console.log(err.response));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <FriendForm getData={getData} />
      {friends.map(friend => {
        return <h1 key={friend.id}>{friend.name}</h1>;
      })}
    </div>
  );
};

export default FriendData;
