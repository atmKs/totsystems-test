import React from 'react';
import { Checkbox } from '@mui/material';
import { IconButton } from '@mui/material';
import ReportIcon from '@mui/icons-material/Report';
import DeleteIcon from '@mui/icons-material/Delete';
import './EmailItem.scss';
const EmailItem = () => {
  return (
    <div className="email-wrapper">
      <div className="email-icons">
        <Checkbox />
        <IconButton>
          <ReportIcon></ReportIcon>
        </IconButton>
        <IconButton>
          <DeleteIcon></DeleteIcon>
        </IconButton>
      </div>
      <div className="email-info">dsds</div>
      <div className="email-message">
        lore 3dsadsa d - lorem3dsdsadsds sda dsa dsa ease aw ew ew ea ewa ewa
        ewa{' '}
      </div>
      <div className="email-data">21.05.2022</div>
    </div>
  );
};

export default EmailItem;
