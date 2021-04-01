import { Snackbar } from '@material-ui/core'
import React from 'react'
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const SnackbarContext = React.createContext();

export const useSnackbarContext = () => {
    return React.useContext(SnackbarContext);
}

function SnackbarProvider(props) {
    const [open, setOpen] = React.useState();
    const [anchorOrigin, setAnchorOrigin] = React.useState({vertical: 'bottom', horizontal: 'right'})
    const [message, setMessage] = React.useState('')

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setOpen(false);
      };

    return (
        <SnackbarContext.Provider value={{setOpen, setMessage, setAnchorOrigin}}>
            {props.children}
            <Snackbar
                open={open}
                anchorOrigin={anchorOrigin}
                message={message}
                autoHideDuration={2500}
                onClose={handleClose}
                action={
                    <React.Fragment>
                      <IconButton
                        aria-label="close"
                        color="inherit"
                        onClick={handleClose}
                        
                      >
                        <CloseIcon />
                      </IconButton>
                    </React.Fragment>
                  }
                />
        </SnackbarContext.Provider>
    )
}

export default SnackbarProvider