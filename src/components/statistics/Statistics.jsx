import css from '../statistics/Statistics.module.css';
import { ItemStats } from './StatsItem';
import PropTypes from 'prop-types';

export function Statistics({ stats, title }) {
  return (
    <section>
      <div className={css.statistics}>
        <div className={css.titleBox}>
          {title && <h2 className={css.title}>{title}</h2>}
        </div>
        <ul className={css.statList}>
          <ItemStats stats={stats} />
        </ul>
      </div>
    </section>
  );
}

Statistics.protoType = {
  title: PropTypes.string.isRequired,
};
