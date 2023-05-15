import css from './TransactionHistory.module.css';
import PropTypes from "prop-types";

const TransactionHistory = ({
    items,
}) => (
    <table className={css.transactions}>
        <thead>
            <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
            </tr>
        </thead>
        <tbody>
            {items.map(({ id, type, amount, currency }) => (
                <tr key={id}>
                    <td className={css.cell}>{type}</td>
                    <td className={css.cell}>{amount}</td>
                    <td className={css.cell}>{currency}</td>
                </tr>
            ))}
        </tbody>
    </table>
)

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.objectOf(PropTypes.string.isRequired).isRequired
    ).isRequired,
};

export default TransactionHistory