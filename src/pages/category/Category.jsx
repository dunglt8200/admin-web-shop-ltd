import { Box, Button, Typography } from "@mui/material";
import React from "react";
import Search from "../../components/common/Search";
import BoxItemCount from "../../components/common/BoxItemCount";
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import PreviewIcon from '@mui/icons-material/Preview';

function Category() {
    return (
        <Box>
            <Box className="box-category-title">
                <Box className="box-category-title-search">
                    <Typography className="text-title-category">Danh Mục</Typography>
                    <Search />
                </Box>
                <Button variant="contained">Thêm mới</Button>        
            </Box>

            <Box className="box-item-count-category">
                <BoxItemCount icon={<BookmarkAddedIcon className="icon-item-count" sx={{color: "yellow"}}/>} title={"Tổng danh mục"} value={10} bgColor={"#FFFF00"}/>
                <BoxItemCount icon={<LocalFireDepartmentIcon className="icon-item-count" sx={{color: "green"}}/>} title={"Danh mục bán chạy"} value={2} bgColor={"#008000"}/>
                <BoxItemCount icon={<PreviewIcon className="icon-item-count" sx={{color: "orange"}}/>} title={"Danh mục xem nhiều"} value={3} bgColor={"#FFA500"}/>
            </Box>

            <Box className= "box-table-category">

            </Box>
        </Box>              
    )
}

export default Category