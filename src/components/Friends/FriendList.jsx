import css from './FriendList.module.css';
import PropTypes from "prop-types";
import FriendListItem from './FriendListItem';

const FriendList = ({ friends }) => (
  <ul className={css.friendList}>
    {friends.map(FriendListItem)}
</ul>
)

FriendList.propTypes = {
  friends: PropTypes.array,
}

export default FriendList