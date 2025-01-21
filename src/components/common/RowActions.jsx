import React from 'react';
import { IconButton, Tooltip } from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';

const RowActions = ({ onEdit, onDelete }) => {
  return (
    <>
      <Tooltip title="Edit">
        <IconButton onClick={onEdit}>
          <Edit sx={{ color: 'white' }} />
        </IconButton>
      </Tooltip>
      
      <Tooltip title="Delete">
        <IconButton onClick={onDelete}>
          <Delete sx={{ color: 'white' }} />
        </IconButton>
      </Tooltip>
    </>
  );
};

export default RowActions;
