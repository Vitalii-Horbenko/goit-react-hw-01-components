import React from "react";
// import user from "../../user.json";
import style from "./Profile.module.css";
import PropTypes from "prop-types";

// const { name, tag, location, avatar } = user;
// const { followers, views, likes } = stats;

const Profile = ({ name, avatar, tag, location, stats }) => {
  const { followers, views, likes } = stats;

  return (
    <div className={style.container}>
      <div className={style.profile}>
        <div className={style.description}>
          <img src={avatar} alt={name} width="200" className={style.avatar} />
          <p className={style.name}>{name}</p>
          <p className={style.tag}>@{tag}</p>
          <p className={style.location}>{location}</p>
        </div>

        <ul className={style.stats}>
          <li className={style.profileItem}>
            <span className={style.label}>Followers</span>
            <span className={style.quantity}>{followers}</span>
          </li>
          <li className={style.profileItem}>
            <span className={style.label}>Views</span>
            <span className={style.quantity}>{views}</span>
          </li>
          <li className={style.profileItem}>
            <span className={style.label}>Likes</span>
            <span className={style.quantity}>{likes}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.object,
};

export default Profile;
