import { Box,Typography } from "@mui/material";
import React from "react";
import NorthEastIcon from '@mui/icons-material/NorthEast';
import SouthEastIcon from '@mui/icons-material/SouthEast';

function BoxItemCountHome({icon, title, value, isIncrease, percentValue }) {
    return (
      <Box className="box-item-count-home">
        <Box className="box-title-icon-count-home">
            {icon}
            <Typography sx={{ color: "#AEB9E1" }}>{title}</Typography>
        </Box>
        <Box className="box-text-percent-home">
            <Typography className="text-value-count-item-home">{value}</Typography>
            <Box className="box-percent-count-home" 
                sx={{ 
                    backgroundColor: isIncrease ? "#0A3942" : "#3C2442",
                    color: isIncrease ? "#1a9953" : "red"
                }}>
                {percentValue} {isIncrease ? <NorthEastIcon /> : <SouthEastIcon />}
            </Box>
        </Box>        
      </Box>
    )
}

export default BoxItemCountHome