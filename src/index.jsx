import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "components/App";
// import "./index.css";
import Profile from "./Profile/Profile";
import Statistics from "./Statistics/Statistics";
import FriendList from "./FriendList/FriendList";
import TransactionHistory from "./TransactionHistory/TransactionHistory";
import data from "./Statistics/data.json";
import friends from "./FriendList/friends.json";
import transactions from "./TransactionHistory/transactions.json";

const title = "Upload stats";
const stats = data;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <TransactionHistory items={transactions} />;
    <FriendList friends={friends} />
    <Statistics title={title} stats={stats} />
    <Profile />
  </React.StrictMode>
);

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
