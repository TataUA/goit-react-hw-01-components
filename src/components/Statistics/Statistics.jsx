import PropTypes from 'prop-types';
import css from "components/Statistics/Statistics.module.css";
import {getRandomHexColor} from "utils/random-color.js";

export const Statistics = ({title, stats}) => {  
    return (
    <section className={css.statistics}>
      {title ? <h2 className={css.title} style={{
          color: getRandomHexColor()}}>{title}</h2> : ""}    
  
      <ul className={css.stat_list}>
        {stats.map(({id, label, percentage}) => (
        <li className={css.item} key={id} style={{
          backgroundColor: getRandomHexColor()
        }}>
          <span className={css.label}>{label}</span>
          <span className={css.percentage}>{percentage}%</span>
        </li>))}
       </ul>
    </section>)
};
       

Statistics.propTypes ={
  data: PropTypes.arrayOf(
    PropTypes.exact({
    title: PropTypes.string, 
    stats: PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  }),    
)};

    