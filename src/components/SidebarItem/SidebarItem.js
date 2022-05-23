import './SidebarItem.scss';

const SidebarItem = ({ folder }) => {
  const { title, icon } = folder;
  return (
    <div className="sidebar-item">
      <span className="material-icons">{icon}</span>
      <h4 className="item-title">{title}</h4>
    </div>
  );
};
export default SidebarItem;
