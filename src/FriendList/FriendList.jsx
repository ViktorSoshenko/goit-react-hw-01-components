import React from "react";
import friends from "./friends.json";
console.log(friends);
function FriendListItem(props) {
  return friends.map((friend) => (
    <li className="item" key={friend.id}>
      <span className="status">{friend.isOnline}</span>
      <img
        className="avatar"
        src={friend.avatar}
        alt="User avatar"
        width="48"
      />
      <p className="name">{friend.name}</p>
    </li>
  ));
}
function FriendList(props) {
  return (
    <ul className="friend-list">
      <FriendListItem />
    </ul>
  );
}
export default FriendList;
