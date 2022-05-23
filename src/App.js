import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import EmailList from './components/EmailList/EmailList';
import './App.scss';
const App = () => {
  return (
    <div className="App">
      <Header></Header>
      <div className="main">
        <Sidebar></Sidebar>
        <EmailList></EmailList>
      </div>
    </div>
  );
};

export default App;
