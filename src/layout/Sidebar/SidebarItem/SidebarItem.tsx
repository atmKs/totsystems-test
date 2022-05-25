import './SidebarItem.scss';
import { useNavigate } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import {
  deleteFolder,
  setCurrentFolder,
} from '../../../redux/actions/foldersAction';
import { useDispatch, useSelector } from 'react-redux';
import ModalComponent from '../../../components/Modal/Modal';
import { modalSelector } from '../../../redux/slectors/selectors';
import React from 'react';
import { Folder } from '../../../types/Interfaces/foldersInterface';
import { FC } from 'react';
interface ISidebarItem {
  folder: Folder;
}
const SidebarItem: FC<ISidebarItem> = ({ folder }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const midalActive = useSelector(modalSelector);

  const onEditCurrentFolder = (folder: Folder) => {
    dispatch(setCurrentFolder(folder));
  };

  const onDelete = (id: number) => {
    dispatch(deleteFolder(id));
  };

  const { id, title, icon, isEdit } = folder;
  return (
    <>
      {isEdit ? (
        <div className="sidebar-item" onClick={() => navigate(`/folder/${id}`)}>
          <span className="material-icons">{icon}</span>
          <h4 className="item-title">{title}</h4>
          <div className="custom-folder-icons">
            <EditIcon onClick={() => onEditCurrentFolder(folder)}></EditIcon>
            <DeleteIcon onClick={() => onDelete(id)}></DeleteIcon>
          </div>
        </div>
      ) : (
        <div className="sidebar-item" onClick={() => navigate(`/folder/${id}`)}>
          <span className="material-icons">{icon}</span>
          <h4 className="item-title">{title}</h4>
        </div>
      )}
      <ModalComponent modalActive={midalActive} />
    </>
  );
};
export default SidebarItem;
