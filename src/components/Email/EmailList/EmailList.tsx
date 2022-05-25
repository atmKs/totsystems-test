import React from 'react';
import EmailItem from '../EmailItem/EmailItem';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { emailsSelector } from '../../../redux/slectors/selectors';
import { searchTextSelector } from '../../../redux/slectors/selectors';
import './EmailList.scss';
import { Email } from '../../../types/Interfaces/emailInterface';
import { FC } from 'react';

const EmailList: FC = () => {
  const text = useSelector(searchTextSelector);
  const { id } = useParams();
  const emails = useSelector(emailsSelector);
  const folderEmails = emails.filter(
    (email: Email) => email.folderId === Number(id)
  );
  return (
    <div className="email-list">
      <div className="email-container">
        {folderEmails
          .filter((email: Email) => email.subject.includes(text))
          .map((email: Email) => (
            <EmailItem email={email} key={email.id} />
          ))}
      </div>
      <div></div>
    </div>
  );
};

export default EmailList;
