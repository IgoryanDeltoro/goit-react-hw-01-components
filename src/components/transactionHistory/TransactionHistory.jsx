import css from './TransactionHistory.module.css';
import { TransactionList } from './TransactionList';

export function TransactionHistory({ items }) {
  return (
    <section>
      <table className={css.transactionHistory}>
        <thead>
          <tr className={css.headList}>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody>
          <TransactionList items={items} />
        </tbody>
      </table>
    </section>
  );
}
