import PropTypes from 'prop-types';
import css from "components/FriendListItem/FriendListItem.module.css";

export const FriendListItem = ({avatar, name, isOnline}) => {
    return (
        <li className={css.friend_item}>
            <span className={css.status} style={{backgroundColor: isOnline ? 'green' : 'red'}}></span>
            <img className={css.friend_avatar} src={avatar} alt="User avatar" width="48" />
            <p className={css.friend_name}>{name}</p>
        </li>)
};

FriendListItem.propTypes ={
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
};