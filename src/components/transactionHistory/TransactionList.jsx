import css from './TransactionHistory.module.css';
import PropTypes from 'prop-types';

export function TransactionList({ items }) {
  return items.default.map(({ id, type, amount, currency }) => {
    return (
      <tr className={css.lineOfType} key={id}>
        <td>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
      </tr>
    );
  });
}

TransactionList.protoType = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
