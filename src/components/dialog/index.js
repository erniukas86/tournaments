import Button from '@mui/material/Button';
import MuiDialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';
import PropTypes from 'prop-types';

export default function Dialog (props) {
  const {
    title,
    sumbit,
    children,
    activatorTitle
  } = props;

  const [open, setOpen] = useState(false);

  const close = () => {
    setOpen(false);
  };

  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        variant="contained"
        color="primary"
      >
        {activatorTitle}
      </Button>
      <MuiDialog fullWidth maxWidth="lg" open={open} onClose={close}>
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          {children}
        </DialogContent>
        <DialogActions>
          <Button onClick={close}>Cancel</Button>
          {sumbit && <Button onClick={sumbit}>Submit</Button>}
        </DialogActions>
      </MuiDialog>
    </>
  );
}

Dialog.propTypes = {
  title: PropTypes.string.isRequired,
  sumbit: PropTypes.func,
  children: PropTypes.element.isRequired,
  activatorTitle: PropTypes.string.isRequired
};

Dialog.defaultProps = {
  sumbit: undefined
};
