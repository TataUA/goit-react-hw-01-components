import PropTypes from 'prop-types';
import css from "components/TransactionHistory/TransactionHistory.module.css";

export const TransactionHistory = ({items}) => {
    
    return (
        <table className={css.transaction_history}>
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>

            <tbody>
                {items
                // .sort(function(a, b){
                //     let typeA=a.type.toLowerCase(), typeB=b.type.toLowerCase()
                //     if (typeA < typeB) 
                //       return -1
                //     if (typeA > typeB)
                //       return 1
                //     return 0 
                //     })
                .map(({id, type, amount, currency}) => (
                    <tr key={id}>
                    <td>{type}</td>
                    <td>{amount}</td>
                    <td>{currency}</td>
                </tr>
                ))}
            </tbody>
        </table>)
};



TransactionHistory.propTypes ={
    items: PropTypes.arrayOf(
      PropTypes.exact({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
        })
    )};