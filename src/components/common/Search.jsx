import React from "react";
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

function Search() {
    return (
        <Paper className="paper-search-menu">       
            <IconButton type="button" aria-label="search" sx={{ color: "#AEB9E1" }}>
              <SearchIcon />
            </IconButton>
            <InputBase sx={{ color: "#AEB9E1" }} placeholder="Tìm kiếm ..."/>
        </Paper>
    )
}

export default Search