import { FriendsListItem } from './FriendListItem';
import css from './FriendList.module.css';

export function FriendsList({ friends }) {
  return (
    <section>
      <ul className={css.friendList}>
        <FriendsListItem>{friends}</FriendsListItem>
      </ul>
    </section>
  );
}
