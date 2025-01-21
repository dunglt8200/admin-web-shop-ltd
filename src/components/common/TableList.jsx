import React, { useState } from "react";
import { Box, Table, TableBody, TableCell, TableContainer, TableHead,TableRow, Paper, Checkbox, Typography, TablePagination } from '@mui/material';

function TableList({ isCheck, title, headers, data, renderRowActions }) {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    // Hàm xử lý khi thay đổi trang
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    // Hàm xử lý khi thay đổi số dòng trên mỗi trang
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0); // Quay lại trang đầu tiên khi thay đổi số dòng mỗi trang
    };

    return (
        <TableContainer component={Paper} className="table-container">
            <Box className="box-title-table">
                <Typography>{title}</Typography>
            </Box>
            <Table className="table-main">
                {/* Table Header */}
                <TableHead>
                    <TableRow className="color-row-table">
                    <TableCell className="table-cell">
                        {isCheck && <Checkbox />}
                    </TableCell>
                    {headers.map((header, index) => (
                        <TableCell key={index} className="table-cell-header">
                        {header}
                        </TableCell>
                    ))}
                    {renderRowActions && (
                        <TableCell className="table-cell"></TableCell>
                    )}
                    </TableRow>
                </TableHead>

                {/* Table Body */}
                <TableBody>
                    {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => (
                    <TableRow key={index} className={`${index % 2 !== 0 ? "color-row-table" : ""}`}>
                        <TableCell> {isCheck && <Checkbox />}</TableCell>
                        {/* Render từng cell từ dữ liệu */}
                        {Object.keys(row).map((key, idx) => (
                        <TableCell key={idx} className="table-cell">
                            {row[key]}
                        </TableCell>
                        ))}

                        {/* Render hành động */}
                        {renderRowActions && (
                        <TableCell>
                            {renderRowActions(row)}
                        </TableCell>
                        )}
                    </TableRow>
                    ))}
                </TableBody>
            </Table>

            {/* Table Pagination */}
            <TablePagination
                rowsPerPageOptions={[5, 10, 25, 100]}
                component="div"
                count={data.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
            
      </TableContainer>
    )
}

export default TableList