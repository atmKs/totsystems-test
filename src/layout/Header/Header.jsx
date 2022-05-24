import { IconButton } from '@mui/material';
import { SearchIcon, RadioButtonUncheckedIcon } from '@mui/icons-material';
import './Header.scss';
const Header = () => {
  return (
    <header className="top-nav">
      <div className="header-logo">
        <p>
          T<RadioButtonUncheckedIcon color="primary"></RadioButtonUncheckedIcon>
          T
        </p>
        <span>Systems</span>
      </div>

      <div className="header-search">
        <div className="search-area">
          <IconButton>
            <SearchIcon></SearchIcon>
          </IconButton>
          <input type="text" placeholder="Search mail" />
        </div>
      </div>
      <div className="header-account">Account</div>
    </header>
  );
};

export default Header;