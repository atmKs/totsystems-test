import ReorderIcon from '@mui/icons-material/Reorder';
import { IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import './Header.scss';
const Header = () => {
  return (
    <header className="top-nav">
      <div className="header-logo">
        <IconButton>
          <ReorderIcon></ReorderIcon>
        </IconButton>
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
