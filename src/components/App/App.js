import React from "react";
import Profile from "../Profile/Profile";
import FriendList from '../FriendsList/FriendList'
import Statistics from "../Statistics/Statistics";
import TransactionHistory from '../TransactionHistory/TransactionHistory'

import statisticalData from "../../data/statistical-data.json";
import user from "../../data/user.json";
import friends from "../../data/friends.json";
import transactions from '../../data/transactions.json'

const { name, tag, location, avatar, stats } = user;




const App = () => {
  return (
    <div>
      <Profile name={name} tag={tag} location={location} avatar={avatar} stats={stats}/>
      <Statistics title="Upload stats" stats={statisticalData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />;
    </div>
  );
};

export default App;
