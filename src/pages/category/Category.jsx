import { Box, Button, Typography } from "@mui/material";
import React from "react";
import Search from "../../components/common/Search";
import BoxItemCount from "../../components/common/BoxItemCount";
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import PreviewIcon from '@mui/icons-material/Preview';
import TableList from "../../components/common/TableList";
import RowActions from "../../components/common/RowActions";

const headers = ['Mã', 'Tên danh mục'];
const data = [
    {
      id: 'TYPE 1',
      name: 'Nike',
    },
    {
        id: 'TYPE 2',
        name: 'Adidas',
    },
    {
        id: 'TYPE 3',
        name: 'Puma',
    },
    {
        id: 'TYPE 4',
        name: 'Reebok',
    },
]

function Category() {
    const handleEdit = (row) => {
        console.log('Edit:', row);
      };
    
      const handleDelete = (row) => {
        console.log('Delete:', row);
      };

    return (
        <Box className="box-main-category">
            <Box className="box-category-title">
                <Box className="box-category-title-search">
                    <Typography className="text-title-category">Danh Mục</Typography>
                    <Search />
                </Box>
                <Button variant="contained">Thêm mới</Button>        
            </Box>

            <Box className="box-item-count-category">
            <BoxItemCount icon={<PreviewIcon className="icon-item-count" sx={{color: "orange"}}/>} title={"Danh mục xem nhiều"} value={3} bgColor={"#FFA500"}/>
                <BoxItemCount icon={<BookmarkAddedIcon className="icon-item-count" sx={{color: "yellow"}}/>} title={"Tổng danh mục"} value={10} bgColor={"#FFFF00"}/>
                <BoxItemCount icon={<LocalFireDepartmentIcon className="icon-item-count" sx={{color: "green"}}/>} title={"Danh mục bán chạy"} value={2} bgColor={"#008000"}/>
                <BoxItemCount icon={<PreviewIcon className="icon-item-count" sx={{color: "orange"}}/>} title={"Danh mục xem nhiều"} value={3} bgColor={"#FFA500"}/>
                <BoxItemCount icon={<PreviewIcon className="icon-item-count" sx={{color: "orange"}}/>} title={"Danh mục xem nhiều"} value={3} bgColor={"#FFA500"}/>
            </Box>

            <Box className= "box-table-category">
                <TableList
                        isCheck={false}
                        title={"Tất cả danh mục"}
                        headers={headers}
                        data={data}
                        renderRowActions={(row) => (
                            <RowActions
                            onEdit={() => handleEdit(row)}
                            onDelete={() => handleDelete(row)}
                            />
                        )}
                />
            </Box>
        </Box>              
    )
}

export default Category