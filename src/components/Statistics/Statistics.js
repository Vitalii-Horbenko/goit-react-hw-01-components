import React from "react";
import statCss from "./Statistics.module.css";


const randomColor = () => {
    return Math.floor(Math.random() * 256)};



const Statistics = ({title, stats}) => {


  return (
    <div>
      <section className={statCss.statistics}>
        <h2 className={statCss.title}>{title}</h2>

        <ul className={statCss.statList}>
          {stats.map(({id, label, percentage}) => (
            <li style={{
                backgroundColor: `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`
            }} key={id} className={statCss.item}>
              <span className={statCss.label} >{label}</span>
              <span className={statCss.percentage}>{percentage}%</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Statistics;
