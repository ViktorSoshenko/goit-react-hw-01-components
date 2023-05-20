import React from "react";
import transactions from "./transactions.json";
console.log(transactions);

function Transaction(props) {
  return transactions.map((transaction) => (
    <tr key={transaction.id}>
      <td>{transaction.type}</td>
      <td>{transaction.amount}</td>
      <td>{transaction.currency}</td>
    </tr>
  ));
}

function TransactionHistory(props) {
  return (
    <table className="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        <Transaction />
      </tbody>
    </table>
  );
}
export default TransactionHistory;
