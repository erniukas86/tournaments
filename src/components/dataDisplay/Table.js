import * as React from 'react';
import MuiTable from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { PRIMARY_COLOR } from '../../styles/theme';
import PropTypes from 'prop-types';

export default function Table ({ data, title }) {
  if (data.length === 0) {
    return null;
  }

  const headerTitles = Object.keys(data[0]);

  return (
    <TableContainer component={Paper}>
      <MuiTable>
        <TableHead style={{ backgroundColor: PRIMARY_COLOR }}>
          <TableRow>
            <TableCell colSpan={headerTitles.length}>{title}</TableCell>
          </TableRow>
        </TableHead>
        <TableHead>
          <TableRow className="row">
            {headerTitles.map(title => <TableCell key={title}>{title}</TableCell>)}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
              key={row.id}
              hover
              className="row"
            >
              {Object.entries(row)
                .map(([key, value]) => <TableCell hover key={key}>{value}</TableCell>)}
            </TableRow>
          ))}
        </TableBody>
      </MuiTable>
    </TableContainer>
  );
}

Table.propTypes = {
  group: PropTypes.shape.isRequired,
  data: PropTypes.array.isRequired,
  dataProperties: PropTypes.array.isRequired,
  title: PropTypes.string
};

Table.defaultProps = {
  title: null
};
