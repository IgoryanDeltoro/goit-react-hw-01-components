import { Profile } from './profile/Profile';
import { Statistics } from './statistics/Statistics';
import { user, data, friends, transactions } from '../backand-json/reExport';
import { FriendsList } from './friendList/FriendList';
import { TransactionHistory } from './transactionHistory/TransactionHistory';

export function App() {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics stats={data} title={'Upload stats'} />
      <FriendsList friends={friends} />
      <TransactionHistory items={transactions} />;
    </>
  );
}
