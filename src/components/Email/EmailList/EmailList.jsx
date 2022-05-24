import React from 'react';
import EmailItem from '../EmailItem/EmailItem';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { emailsSelector } from '../../../redux/slectors/selectors';

import './EmailList.scss';

const EmailList = () => {
  const { id } = useParams();
  const emails = useSelector(emailsSelector);
  const folderEmails = emails.filter((email) => email.folderId === Number(id));
  return (
    <div className="email-list">
      <div className="email-container">
        {folderEmails.map((email) => (
          <EmailItem email={email} key={email.id}></EmailItem>
        ))}
      </div>
      <div></div>
    </div>
  );
};

export default EmailList;
