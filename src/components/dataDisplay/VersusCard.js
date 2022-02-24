import { Divider, IconButton, List, TextField, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { useContext, useState } from 'react';
import { PRIMARY_COLOR, SECONDARY_COLOR } from '../../styles/theme';
import styles from './VersusCard.module.css';
import SaveIcon from '@mui/icons-material/Save';
import { UserContext } from '../../context';

function VersusCard (props) {
  const { currentResult, save } = props;
  const [result, setResult] = useState({});
  const { user } = useContext(UserContext);
  const { homeScore, awayScore, homeName, awayName, isAwayDQ, isHomeDQ } = currentResult;

  const getColor = (score) => {
    if (score === 3) {
      return SECONDARY_COLOR;
    }

    return PRIMARY_COLOR;
  };

  const updateResult = (event) => {
    const { name, value } = event.target;
    setResult({ ...result, [name]: value });
  };

  const saveResult = () => {
    save({ ...currentResult, ...result });
  };

  const isResultEntered = result.homeScore && result.awayScore;
  const isAnyoneDQ = isHomeDQ || isAwayDQ;

  return (
    <List className={styles.card} style={{ backgroundColor: isAnyoneDQ && '#bbbbbb' }}>
      <div className={styles.cardItem}>
        <Typography>{`${homeName} ${isHomeDQ ? '❗' : ''}`}</Typography>
        {homeScore !== undefined && <Typography className="numberBox" style={{ backgroundColor: getColor(homeScore) }}>{homeScore}</Typography>}
        {isResultEntered && <IconButton onClick={saveResult}><SaveIcon></SaveIcon></IconButton>}
        {homeScore === undefined && user && <TextField name="homeScore" size='small' style={{ width: 40 }} onChange={updateResult}></TextField>}
      </div>
      <Divider />
      <div className={styles.cardItem}>
        <Typography>{`${awayName} ${isAwayDQ ? '❗' : ''}`}</Typography>
        {awayScore !== undefined && <Typography className="numberBox" style={{ backgroundColor: getColor(awayScore) }}>{awayScore}</Typography>}
        {awayScore === undefined && user && <TextField name="awayScore" size='small' style={{ width: 40 }} onChange={updateResult}></TextField> }
      </div>
    </List>
  );
}

VersusCard.propTypes = {
  currentResult: PropTypes.shape.isRequired,
  save: PropTypes.func
};

VersusCard.defaultProps = {
  save: () => {}
};

export default VersusCard;
