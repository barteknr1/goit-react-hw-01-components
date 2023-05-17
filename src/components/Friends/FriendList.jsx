import css from './FriendList.module.css';
import PropTypes from "prop-types";
import FriendListItem from './FriendListItem';

const FriendList = ({ friends }) => (
  <ul className={css.friendList}>
    {friends.map(({ avatar, name, isOnline, id }) => (
    <FriendListItem key={id} avatar={avatar} id={id} isOnline={isOnline} name={name} />))}
  </ul>
)

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired).isRequired,
};

export default FriendList