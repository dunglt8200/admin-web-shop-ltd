import { Box,Typography } from "@mui/material";
import React from "react";
import { alpha } from '@mui/system';

function BoxItemCount({icon, title, value, bgColor }) {
    return (
       <Box className="box-item-count">
            <Box className="box-icon-item-count" sx={{ backgroundColor: alpha(bgColor || '#000000', 0.1), }}>
                {icon}
            </Box>            
            <Box>
                <Typography sx={{color: "white"}}>{title}</Typography>
                <Typography sx={{color: "white"}}>{value}</Typography>
            </Box>      
       </Box>
    )
}

export default BoxItemCount