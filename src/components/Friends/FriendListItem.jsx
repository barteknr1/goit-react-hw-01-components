import css from './FriendList.module.css';
import PropTypes from "prop-types";

const FriendListItem = ({
    avatar,
    name,
    isOnline,
    id,
}) => (
    <li className={css.item} key={id}>
        <span className={isOnline ? css.isOnline : css.isOffline}></span>
        <img className={css.avatar} src={avatar} alt={name} width="48" />
        <p className={css.name}>{name}</p>
    </li>
)

FriendListItem.propTypes = {
  friends: PropTypes.array,
}


export default FriendListItem