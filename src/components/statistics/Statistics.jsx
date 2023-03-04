import css from '../statistics/Statistics.module.css';
import { ItemStats } from './StatsItem';

export function Statistics({ stats, title = 'Upload stats' }) {
  return (
    <section>
      <div className={css.statistics}>
        <h2 className={css.title}>{title}</h2>
        <ul className={css.statList}>
          <ItemStats stats={stats} />
        </ul>
      </div>
    </section>
  );
}
