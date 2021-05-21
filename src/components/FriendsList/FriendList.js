import React from "react";
import { FriendListItem } from "./FriendListItem";
import style from "./FriendsList.module.css";
import PropTypes from "prop-types";

const FriendList = ({ friends }) => {
  return (
    <div className={style.friendsList}>
      <ul className="friends-list">
        {friends.map(({ avatar, name, isOnline, id }) => (
          <FriendListItem
            key={id}
            avatar={avatar}
            name={name}
            isOnline={isOnline}
          />
        ))}
      </ul>
    </div>
  );
};

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};

export default FriendList;
