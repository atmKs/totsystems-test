import React from 'react';
import { Checkbox } from '@mui/material';
import { IconButton } from '@mui/material';
import ReportIcon from '@mui/icons-material/Report';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';

import './EmailItem.scss';
const EmailItem = ({ email }) => {
  const navigate = useNavigate();
  const { id, author, subject, message, date } = email;
  return (
    <div className="email-wrapper" onClick={() => navigate(`/email/${id}`)}>
      <div className="email-icons">
        <Checkbox />
        <IconButton>
          <ReportIcon></ReportIcon>
        </IconButton>
        <IconButton>
          <DeleteIcon></DeleteIcon>
        </IconButton>
      </div>
      <div className="email-info">{author}</div>
      <div className="email-message">
        <p>
          <b>{subject}</b>
          <span>{message}</span>
        </p>
      </div>
      <div className="email-date">{date}</div>
    </div>
  );
};

export default EmailItem;
