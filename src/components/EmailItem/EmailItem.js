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
      <div className="email-info">udusad222@mail.ru</div>
      <div className="email-message">
        <p>
          <b>ЫВФВыФВ ыфв ыфв ыфв ыфв ыфвы фв ыф</b>
          <span>
            dsaddsadss dad sad sad sad sad sad d d sad sad sad sadd sa
            dsaddsadss dad sad sad sad sad sad d d sad sad sad sadd sa
            dsaddsadss dad sad sad sad sad sad d d sad sad sad sadd sa
            dsaddsadss dad sad sad sad sad sad d d sad sad sad sadd sa
            dsaddsadss dad sad sad sad sad sad d d sad sad sad sadd sa
          </span>
        </p>
      </div>
      <div className="email-data">21.05.2022</div>
    </div>
  );
};

export default EmailItem;
