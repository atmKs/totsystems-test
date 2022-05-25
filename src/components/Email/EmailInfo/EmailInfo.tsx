import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { emailsSelector } from '../../../redux/slectors/selectors';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './EmailInfo.scss';
const EmailInfo = () => {
  const { id } = useParams();
  const emails = useSelector(emailsSelector);
  const [{ author, message, subject, date, folderType }] = emails.filter(
    (email: { id: number; }) => email.id === Number(id)
  );

  return (
    <div className="email-info-wrapper">
      <div className="email-info-subject">
        <h2>
          <b>{subject}</b>
        </h2>
        <p className="subject-type">{folderType}</p>
      </div>
      <div className="email-info-author">
        <div className="author-profile">
          <AccountCircleIcon></AccountCircleIcon>
          <span>{author}</span>
        </div>

        <div className="email-info-date">
          <p className="date">{date}</p>
        </div>
      </div>
      <div className="email-info-massage">
        <p className="message">{message}</p>
      </div>
    </div>
  );
};

export default EmailInfo;
