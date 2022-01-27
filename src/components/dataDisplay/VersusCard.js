import { Divider, List, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { PRIMARY_COLOR, SECONDARY_COLOR } from '../../styles/theme';
import styles from './VersusCard.module.css';

function VersusCard (props) {
  const { home, homeScore, away, awayScore } = props;

  const getColor = (score) => {
    if (score === 3) {
      return SECONDARY_COLOR;
    }

    return PRIMARY_COLOR;
  };

  return (
    <List className={styles.card}>
      <div className={styles.cardItem}>
        <Typography>{home}</Typography>
        {homeScore !== undefined && <Typography className="numberBox" style={{ backgroundColor: getColor(homeScore) }}>{homeScore}</Typography>}
      </div>
      <Divider />
      <div className={styles.cardItem}>
        <Typography>{away}</Typography>
        {awayScore !== undefined && <Typography className="numberBox" style={{ backgroundColor: getColor(awayScore) }}>{awayScore}</Typography>}
      </div>
    </List>
  );
}

VersusCard.propTypes = {
  home: PropTypes.string.isRequired,
  homeScore: PropTypes.number.isRequired,
  away: PropTypes.string.isRequired,
  awayScore: PropTypes.number.isRequired
};

export default VersusCard;
