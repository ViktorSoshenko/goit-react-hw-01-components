// import "../App.css";
import React from "react";

import data from "./data.json";

function Title(props) {
  const title = props.title;
  if (title) {
    return <h2 className="title">{title}</h2>;
  } else {
    return;
  }
}

function Statistics(props) {
  const stats = props.stats;

  const listItems = stats
    .reduce((allStat, stat) => {
      if (stat.label !== ".pdf") {
        console.log(stat);
        allStat.push(stat);
      }
      return allStat;
    }, [])
    .map((stat) => (
      <li className="item" key={stat.id}>
        <span className="label">{stat.label}</span>
        <span className="percentage">{stat.percentage}%</span>
      </li>
    ));

  return (
    <section className="statistics">
      <Title title={props.title} />

      <ul className="stat-list">{listItems}</ul>
    </section>
  );
}

export default Statistics;
