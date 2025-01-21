import React from "react";
import { Box, Table, TableBody, TableCell, TableContainer, TableHead,TableRow, Paper, Checkbox, Avatar, Typography } from '@mui/material';

function TableList({ isCheck, headers, data, renderRowActions }) {
    return (
        <TableContainer component={Paper} className="table-container">
            <Table>
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
                    {data.map((row, index) => (
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
      </TableContainer>
    )
}

export default TableList