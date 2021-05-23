import React from "react";
import style from "./FriendsListItem.module.css";
import PropTypes from "prop-types";

export const FriendListItem = ({ name, avatar, isOnline }) => {
  return (
    <li className={style.item}>
      
        <span className={`${style.status} ${isOnline ? style.active : style.notActive} ` }></span>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className={name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
