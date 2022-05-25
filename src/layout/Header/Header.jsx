import { IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';

import './Header.scss';
import { useDispatch } from 'react-redux';
import { searchEmail } from '../../redux/actions/emailActions';

const Header = () => {
  const dispatch = useDispatch();

  const searchEvent = (event) => {
    event.preventDefault();
    dispatch(searchEmail(event.target.value));
  };
  return (
    <header className="top-nav">
      <div className="header-logo">
        <p className="header-logo-text">
          T<RadioButtonUncheckedIcon color="primary"></RadioButtonUncheckedIcon>
          T<span>Systems</span>
        </p>
      </div>

      <div className="header-search">
        <div className="search-area">
          <IconButton>
            <SearchIcon color="primary"></SearchIcon>
          </IconButton>
          <input
            type="text"
            placeholder="Search mail"
            onChange={(event) => searchEvent(event)}
          />
        </div>
      </div>
      <div className="header-account">Account</div>
    </header>
  );
};

export default Header;
