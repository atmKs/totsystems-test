import React from 'react';
import EmailItem from '../EmailItem/EmailItem';
import './EmailList.scss';

const EmailList = () => {
  return (
    <div className="email-list">
      <div className="email-container">
        <EmailItem></EmailItem>
        <EmailItem></EmailItem>
        <EmailItem></EmailItem>
      </div>
    </div>
  );
};

export default EmailList;
