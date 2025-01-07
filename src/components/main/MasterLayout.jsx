import React from "react";
import { Box } from '@mui/material';
import Menu from "../common/Menu";
import Header from "../common/Header";

function MasterLayout({children}) {
    return (
        <Box>
            <Menu />
            <Header />
            {children}
        </Box>
    )
}

export default MasterLayout