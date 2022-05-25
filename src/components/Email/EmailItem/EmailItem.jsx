import React from 'react';
import { Checkbox } from '@mui/material';
import { IconButton } from '@mui/material';
import ReportIcon from '@mui/icons-material/Report';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';

import './EmailItem.scss';
import { useDispatch } from 'react-redux';
import {
  deleteEmail,
  spamEmail,
  readEmail,
} from '../../../redux/actions/emailActions';
const EmailItem = ({ email }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id, author, subject, message, date, noReading } = email;

  const onDelete = (id) => {
    dispatch(deleteEmail(id));
  };

  const onSpam = (id) => {
    dispatch(spamEmail(id));
  };

  const openEmail = (id) => {
    dispatch(readEmail(id));
    navigate(`/email/${id}`);
  };

  return (
    <div className={!noReading ? 'email-wrapper read' : 'email-wrapper  no-read'}>
      <div className="email-icons">
        <Checkbox />
        <IconButton onClick={() => onSpam(id)}>
          <ReportIcon></ReportIcon>
        </IconButton>
        <IconButton onClick={() => onDelete(id)}>
          <DeleteIcon></DeleteIcon>
        </IconButton>
      </div>
      <div className="email-info">{author}</div>
      <div className="email-message" onClick={() => openEmail(id)}>
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
