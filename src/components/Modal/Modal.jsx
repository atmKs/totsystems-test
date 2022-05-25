import './Modal.scss';
import { Modal, Button, Form } from 'react-bootstrap';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
  createFolder,
  closeModal,
  updateFolder,
} from '../../redux/actions/foldersAction';
import { currentFolderSelector } from '../../redux/slectors/selectors';
const ModalComponent = ({ modalActive }) => {
  const dispatch = useDispatch();
  const currentFolder = useSelector(currentFolderSelector);
  const { reset, handleSubmit, register, setValue } = useForm();

  useEffect(() => {
    setValue('title', currentFolder ? `${currentFolder.title}` : '');
  }, [currentFolder, setValue]);

  const onSubmit = (data) => {
    currentFolder
      ? dispatch(updateFolder(currentFolder.id, data))
      : dispatch(createFolder(data));
    reset();
  };

  return (
    <Modal show={modalActive}>
      <Modal.Header>
        <Modal.Title>
          {currentFolder ? 'Имзенить папку' : 'Создать папку'}
        </Modal.Title>
        <IconButton onClick={() => dispatch(closeModal(true))}>
          <CloseIcon />
        </IconButton>
      </Modal.Header>

      <Modal.Body>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <div className="form">
            <Form.Control
              defaultValue={currentFolder ? currentFolder.title : ''}
              placeholder={
                currentFolder
                  ? 'Введите новое имя папки'
                  : 'Введите название папки'
              }
              {...register('title', {
                required: true,
                minLength: 4,
                maxLength: 15,
              })}
            />
            <Button
              variant="primary"
              type="submit"
              className="d-flex mt-3 m-auto "
            >
              {currentFolder ? 'Update' : 'Create'}
            </Button>
          </div>
        </Form>
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  );
};
export default ModalComponent;
