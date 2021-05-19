import React from 'react'
import style from './FriendsListItem.module.css'

export const FriendListItem = ({name, avatar, isOnline}) => {
    return (

        <li className={style.item}>
            {isOnline ? <span className=
                {`${style.active} ${style.status}`}></span> : <span className=
                {`${style.notActive} ${style.status}`}></span>}
                <img className='avatar' src={avatar} alt={name} width="48" />
            <p className={name}>{name}</p>
</li>

    )
}
