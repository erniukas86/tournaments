/* eslint-disable react/jsx-props-no-spreading */
import { Typography } from '@mui/material';
import { useContext } from 'react';
import { UserContext } from '../context';

export default function withEmailConfirmation (Component) {
  return function WrappedComponent (props) {
    const { isEmailConfirmed } = useContext(UserContext);

    if (!isEmailConfirmed) {
      return <Typography variant="h1">Not confirmed!</Typography>;
    }

    return <Component {...props} />;
  };
}
