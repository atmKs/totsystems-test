import './SidebarItem.scss';
import { useNavigate } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
const SidebarItem = ({ folder }) => {
  const navigate = useNavigate();
  const { id, title, icon, isEdit } = folder;
  return (
    <>
      {folder.isEdit ? (
        <div className="sidebar-item" onClick={() => navigate(`/folder/${id}`)}>
          <span className="material-icons">{icon}</span>
          <h4 className="item-title">{title}</h4>
        
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
