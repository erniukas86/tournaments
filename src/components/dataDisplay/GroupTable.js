import * as React from 'react';
import MuiTable from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { PRIMARY_COLOR, SECONDARY_COLOR } from '../../styles/theme';
import styles from './table.module.css';
import PropTypes from 'prop-types';

export default function GroupTable ({ group }) {
  const { tournament, participants } = group;
  const { numberOfGroupQualifiers } = tournament;

  return (
    <TableContainer component={Paper}>
      <MuiTable>
        <TableHead style={{ backgroundColor: PRIMARY_COLOR }}>
          <TableRow>
            <TableCell>{group.name}</TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableHead>
          <TableRow>
            <TableCell>Place</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Won</TableCell>
            <TableCell>Lost</TableCell>
            <TableCell>For</TableCell>
            <TableCell>Against</TableCell>
            <TableCell>Diff</TableCell>
            <TableCell>Points</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {participants.sort((a, b) => b.stats.order - a.stats.order)
            .map((participant, index) => (
              <TableRow
                key={participant.id}
                hover
                className={styles.row}
              >
                <TableCell component="th" scope="row">
                  <span
                    style={{ backgroundColor: index + 1 > numberOfGroupQualifiers ? PRIMARY_COLOR : SECONDARY_COLOR }}
                    className={styles.place}>{index + 1}</span>
                </TableCell>
                <TableCell >{`${participant.firstName} ${participant.lastName}`}</TableCell>
                <TableCell >{participant.stats.won}</TableCell>
                <TableCell >{participant.stats.lost}</TableCell>
                <TableCell >{participant.stats.score}</TableCell>
                <TableCell >{participant.stats.against}</TableCell>
                <TableCell >{participant.stats.difference}</TableCell>
                <TableCell >{participant.stats.points}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </MuiTable>
    </TableContainer>
  );
}

GroupTable.propTypes = {
  group: PropTypes.shape.isRequired
};
