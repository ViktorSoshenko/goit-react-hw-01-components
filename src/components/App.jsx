import React from "react";
import ReactDOM from "react-dom/client";

import Profile from "../Profile/Profile";
import Statistics from "../Statistics/Statistics";
import FriendList from "../FriendList/FriendList";
import TransactionHistory from "../TransactionHistory/TransactionHistory";
import data from "../Statistics/data.json";
import friends from "../FriendList/friends.json";
import transactions from "../TransactionHistory/transactions.json";
const title = "Upload stats";
const stats = data;
export const App = () => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "flex-start",
        flexDirection: "column",
        alignItems: "center",
        fontSize: 40,
        backgroundColor: "#e0e0e0",
      }}
    >
      <Profile />
      <Statistics title={title} stats={stats} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />;
    </div>
  );
};
