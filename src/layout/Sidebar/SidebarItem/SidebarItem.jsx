import './SidebarItem.scss';
import { useNavigate } from 'react-router-dom';

const SidebarItem = ({ folder }) => {
  const navigate = useNavigate();
  const { id, title, icon } = folder;
  return (
    <div className="sidebar-item" onClick={() => navigate(`/folder/${id}`)}>
      <span className="material-icons">{icon}</span>
      <h4 className="item-title">{title}</h4>
    </div>
  );
};
export default SidebarItem;
