import { Button } from '@mui/material';
import CreateIcon from '@mui/icons-material/Create';
import AddIcon from '@mui/icons-material/Add';
import SidebarItem from './SidebarItem/SidebarItem';
import { useDispatch, useSelector } from 'react-redux';
import { foldersSelector, modalSelector } from '../../redux/slectors/selectors';
import { openModal } from '../../redux/actions/foldersAction';
import './Sidebar.scss';
import ModalComponent from '../../components/Modal/Modal';

const Sidebar = () => {
  const folders = useSelector(foldersSelector);
  const modalActive = useSelector(modalSelector);
  const dispatch = useDispatch();
  return (
    <div className="sidebar">
      <Button
        variant="contained"
        className="btn"
        color="primary"
        endIcon={<CreateIcon />}
      >
        Написать письмо
      </Button>
      {folders.map((folder) => (
        <SidebarItem key={folder.id} folder={folder} />
      ))}

      <Button
        variant="contained"
        className="btn"
        color="primary"
        endIcon={<AddIcon />}
        onClick={() => dispatch(openModal(true))}
      >
        Новая папка
      </Button>

      <ModalComponent modalActive={modalActive} />
    </div>
  );
};
export default Sidebar;
