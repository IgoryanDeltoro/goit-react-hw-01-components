import css from '../statistics/Statistics.module.css';
import PropTypes from 'prop-types';

export function ItemStats({ stats }) {
  return stats.default.map(({ id, label, percentage }) => {
    return (
      <li key={id} className={`${css.item} ${css[id]}`}>
        <span className={css.label}>{label}</span>
        <span className={css.percentage}>{percentage}%</span>
      </li>
    );
  });
}

ItemStats.protoType = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }),
};
