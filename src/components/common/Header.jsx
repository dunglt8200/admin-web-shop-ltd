import { Box, Typography } from "@mui/material";
import React from "react";
import AccountCircle from '@mui/icons-material/AccountCircle';

function Header() {
    return (
        <Box className="box-header">
            <Box>
                <Typography variant="h5" sx={{ color: "white" }}> Welcome back, Admin </Typography>
            </Box>
            <Box>
                <AccountCircle sx={{ color: "white" }}/>
            </Box>
        </Box>
    )
}

export default Header