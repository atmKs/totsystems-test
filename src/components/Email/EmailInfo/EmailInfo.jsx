import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { emailsSelector } from '../../../redux/slectors/selectors';
import './EmailInfo.scss';
const EmailInfo = () => {
  const { id } = useParams();
  const emails = useSelector(emailsSelector);
  const [{ author, message, subject, date, folderType }] = emails.filter(
    (email) => email.id === Number(id)
  );

  return (
    <div className="email-info-wrapper">
      <div className="email-info-subject">
        <p>
          <b>{subject}</b>
        </p>
        <span>{folderType}</span>
      </div>
      <div className="email-info-author">
        {author}
        {date}
      </div>
      <div className="email-info-massage">{message}</div>
    </div>
  );
};

export default EmailInfo;
