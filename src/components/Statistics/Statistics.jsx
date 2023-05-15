import css from './Statistics.module.css'
import PropTypes from "prop-types";

const Statistics = ({
    title,
    stats}) => (
    <section className={css.statistics}>
        <h2 className={css.title}>{title}</h2>

        <ul className={css.statList}>
            {stats.map(item => (
                <li className={css.item}
                key = {item.id}>
                    <span className={css.label}>{item.label}</span>
                    <span className={css.percentage}>{item.percentage}%</span>
                </li>))
                }
        </ul>
    </section>
);

Statistics.propTypes = {
    stats: PropTypes.array,
};

export default Statistics