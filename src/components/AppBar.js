import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
// import IconButton from '@material-ui/core/IconButton';

export default function PrimarySearchAppBar() {

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" noWrap>
                    Zainab Azzam
                </Typography>
            </Toolbar>
        </AppBar>
    );
}
