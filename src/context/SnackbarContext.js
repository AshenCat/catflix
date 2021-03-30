import { Snackbar } from '@material-ui/core'
import React from 'react'

const SnackbarContext = React.createContext();

export const useSnackbarContext = () => {
    return React.useContext(SnackbarContext);
}

function SnackbarProvider(props) {
    const [open, setOpen] = React.useState();
    const [anchorOrigin, setAnchorOrigin] = React.useState({vertical: 'bottom', horizontal: 'right'})
    const [message, setMessage] = React.useState('')

    return (
        <SnackbarContext.Provider value={{setOpen, setMessage, setAnchorOrigin}}>
            {props.children}
            <Snackbar
                open={open}
                anchorOrigin={anchorOrigin}
                message={message}/>
        </SnackbarContext.Provider>
    )
}

export default SnackbarProvider