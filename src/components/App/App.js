import React from "react";
import Profile from "../Profile/Profile";
import Statistics from "../Statistics/Statistics";
import statisticalData from "../Statistics/statistical-data.json";
import user from "../../user.json";

const {name, tag, location, avatar, stats} = user;



const App = () => {
  return (
    <div>
      <Profile name={name} tag={tag} location={location} avatar={avatar} stats={stats}/>
      <Statistics title="Upload stats" stats={statisticalData}/>
    </div>
  );
};

export default App;
