import "../App.css";
import smc from "./statistics.module.css";
import React from "react";

import data from "./data.json";

function Title(props) {
  const title = props.title;
  if (title) {
    return <h2 className={smc.title}>{title}</h2>;
  } else {
    return;
  }
}

function Statistics(props) {
  const stats = props.stats;

  const listItems = stats
    .reduce((allStat, stat) => {
      allStat.push(stat);

      return allStat;
    }, [])
    .map((stat) => (
      <li className={smc.item} key={stat.id}>
        <span className="label">{stat.label}</span>
        <span className="percentage">{stat.percentage}%</span>
      </li>
    ));

  return (
    <section className={smc.statistics}>
      <Title title={props.title} />

      <ul className={smc.statList}>{listItems}</ul>
    </section>
  );
}

export default Statistics;
