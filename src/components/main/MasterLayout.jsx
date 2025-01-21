import React from "react";
import { Box } from '@mui/material';
import Menu from "../common/Menu";
import Header from "../common/Header";

function MasterLayout({children}) {
    return (
        <Box className="box-main-master-layout">
            <Menu />
            <Box className="box-main-children">
                <Header />
                {children}          
            </Box>
        </Box>
    )
}

export default MasterLayout