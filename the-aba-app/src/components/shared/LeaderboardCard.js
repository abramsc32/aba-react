import React from "react";

export const LeaderboardCard = (props) => {
  return <div className="LeaderboardCard">
      <h1>Points Leaders</h1>
      <p value={props.first}>1.</p>
      <p value={props.second}>2.</p>
      <p value={props.third}>3.</p>
      <p value={props.fourth}>4.</p>
      <p value={props.fifth}>5.</p>

  </div>;
};
