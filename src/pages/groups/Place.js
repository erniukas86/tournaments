import { PRIMARY_COLOR, SECONDARY_COLOR } from '../../styles/theme';
import PropTypes from 'prop-types';

function Place ({ numberOfGroupQualifiers, index }) {
  return (
    <span
      style={{ backgroundColor: index + 1 > numberOfGroupQualifiers ? PRIMARY_COLOR : SECONDARY_COLOR }}
      className="numberBox">{index + 1}</span>
  );
}

Place.propTypes = {
  numberOfGroupQualifiers: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired
};

export default Place;
