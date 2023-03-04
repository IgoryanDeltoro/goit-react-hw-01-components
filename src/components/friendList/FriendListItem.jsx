import css from './FriendList.module.css';
import PropTypes from 'prop-types';
import clsx from 'clsx';

export function FriendsListItem({ children }) {
  return children.default.map(({ avatar, name, isOnline, id }) => {
    return (
      <li key={id} className={css.item}>
        <span className={clsx(css.status, !isOnline && css.isOutlined)}></span>
        <img className={css.avatar} src={avatar} alt="User avatar" width="60" />
        <p className={css.name}>{name}</p>
      </li>
    );
  });
}

FriendsListItem.protoType = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};
