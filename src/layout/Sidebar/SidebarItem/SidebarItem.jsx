import './SidebarItem.scss';
import { useNavigate } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import {
  deleteFolder,
  updateFolder,
} from '../../../redux/actions/foldersAction';
import { useDispatch } from 'react-redux';
const SidebarItem = ({ folder }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onDelete = (id) => {
    dispatch(deleteFolder(id));
  };

  const onUpdate = (id, folder) => {
    dispatch(updateFolder(id, folder));
  };
  const { id, title, icon, isEdit } = folder;
  return (
    <>
      {isEdit ? (
        <div className="sidebar-item" onClick={() => navigate(`/folder/${id}`)}>
          <span className="material-icons">{icon}</span>
          <h4 className="item-title">{title}</h4>
          <div className="custom-folder-icons">
            <EditIcon onClick={() => onUpdate(id, folder)}></EditIcon>
            <DeleteIcon onClick={() => onDelete(id)}></DeleteIcon>
          </div>
        </div>
      ) : (
        <div className="sidebar-item" onClick={() => navigate(`/folder/${id}`)}>
          <span className="material-icons">{icon}</span>
          <h4 className="item-title">{title}</h4>
        </div>
      )}
    </>
  );
};
export default SidebarItem;
