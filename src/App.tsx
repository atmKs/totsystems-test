import { Routes, Route } from 'react-router-dom';
import Header from './layout/Header/Header';
import Sidebar from './layout/Sidebar/Sidebar';
import EmailList from './components/Email/EmailList/EmailList';
import Homepage from './components/Homepage/Homepage';
import EmailInfo from './components/Email/EmailInfo/EmailInfo';
import { FC } from 'react';
import './App.scss';
import React from 'react';

const App: FC = () => {
  return (
    <>
      <div className="App">
        <Header />
        <div className="main">
          <Sidebar />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/folder/:id" element={<EmailList />} />
            <Route path="/email/:id" element={<EmailInfo />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default App;
