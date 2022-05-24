import { Button } from '@mui/material';
import CreateIcon from '@mui/icons-material/Create';
import AddIcon from '@mui/icons-material/Add';
import SidebarItem from './SidebarItem/SidebarItem';
import { useDispatch, useSelector } from 'react-redux';
import { foldersSelector } from '../../redux/slectors/selectors';
import { Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

import { createFolder } from '../../redux/actions/foldersAction';

import './Sidebar.scss';

const Sidebar = () => {
  const folders = useSelector(foldersSelector);
  const disptatch = useDispatch();
  const { reset, handleSubmit, register } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    disptatch(createFolder(data));

    reset();
  };
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
        <SidebarItem key={folder.id} folder={folder} />
      ))}
      <div className="form">
        <Form
          onSubmit={handleSubmit((data) => {
            onSubmit(data);
          })}
        >
          <Form.Control
            type="text"
            placeholder="Создать папку"
            {...register('title', { pattern: { value: /[A-Za-z0-9]/ } })}
          />
          <Button
            variant="contained"
            color="secondary"
            type="submit"
            className="add-btn"
          >
            <AddIcon></AddIcon>
          </Button>
        </Form>
      </div>
    </div>
  );
};
export default Sidebar;
