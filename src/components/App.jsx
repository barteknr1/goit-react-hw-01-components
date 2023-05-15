import Profile from './Profile/Profile';
import user from '../data/user';
import Statistics from './Statistics/Statistics';
import data from '../data/data';
import FriendList from './Friends/FriendList';
import friends from '../data/friends'
import TransactionHistory from './Transactions/TransactionHistory';
import transactions from '../data/transactions';

const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics
        title="Upload stats"
        stats={data}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  )
};

export default App;