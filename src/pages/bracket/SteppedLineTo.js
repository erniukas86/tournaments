// import { PRIMARY_COLOR } from '../../styles/theme';
import { SteppedLineTo as SteppedLine } from 'react-lineto';
import PropTypes from 'prop-types';

function SteppedLineTo ({ from, to }) {
  return <SteppedLine
    borderColor="black"
    borderWidth={4}
    orientation="h"
    delay={10}
    fromAnchor="100% 50%"
    from={from}
    to={to}
    toAnchor="0% 50%"
  />;
}

SteppedLineTo.propTypes = {
  from: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired
};

export default SteppedLineTo;
