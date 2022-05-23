import { Button } from '@mui/material';
import CreateIcon from '@mui/icons-material/Create';
import SidebarItem from '../SidebarItem/SidebarItem';
import { useSelector } from 'react-redux';
import { foldersSelector } from '../../redux/slectors/selectors';
import './Sidebar.scss';
const Sidebar = () => {
  const folders = useSelector(foldersSelector);
  return (
    <div className="sidebar">
      <Button
        variant="contained"
        className="btn"
        color="secondary"
        endIcon={<CreateIcon />}
      >
        Написать письмо
      </Button>
      {folders.map((folder) => (
        <SidebarItem key={folder.id} folder={folder}></SidebarItem>
      ))}
    </div>
  );
};
export default Sidebar;
