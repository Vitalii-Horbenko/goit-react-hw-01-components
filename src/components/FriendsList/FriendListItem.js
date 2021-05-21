import React from "react";
import style from "./FriendsListItem.module.css";
import PropTypes from "prop-types";

export const FriendListItem = ({ name, avatar, isOnline }) => {
  return (
    <li className={style.item}>
      {isOnline ? (
        <span className={`${style.active} ${style.status}`}></span>
      ) : (
        <span className={`${style.notActive} ${style.status}`}></span>
      )}
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className={name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  name: PropTypes.string,
  avatar: PropTypes.string,
  isOnline: PropTypes.bool,
};
