import React from 'react';
import { FriendListItem } from './FriendListItem';
import style from './FriendsList.module.css'



const FriendList = ({friends}) => {
    return (
        <div className={style.friendsList}>
            <ul className='friends-list'>
                {friends.map(({ avatar, name, isOnline, id}) =>
                    <FriendListItem key={id} avatar={avatar} name={name} isOnline={isOnline}/>
                )}
            </ul>
        </div>
    )
}

export default FriendList;