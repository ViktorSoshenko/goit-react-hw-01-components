import "../App.css";
import flmc from "./friendList.module.css";
import React from "react";
import friends from "./friends.json";
console.log(friends);
function FriendListItem(props) {
  return friends.map((friend) => (
    <li className={flmc.item} key={friend.id}>
      <span
        className={
          friend.isOnline === true ? `${flmc.status}` : `${flmc.green}`
        }
      >
        {friend.isOnline}
      </span>

      <img
        className={flmc.avatar}
        src={friend.avatar}
        alt="User avatar"
        width="100"
      />
      <p className="name">{friend.name}</p>
    </li>
  ));
}
function FriendList(props) {
  return (
    <ul className={flmc.friendList}>
      <FriendListItem />
    </ul>
  );
}
export default FriendList;
