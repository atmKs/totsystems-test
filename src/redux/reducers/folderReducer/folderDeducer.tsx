import { FolderState } from '../../../types/Interfaces/foldersInterface';
import { ActionTypes, FolderAndEmailActions } from '../../actionTypes';

const initialState: FolderState = {
  folders: [
    { id: 1, title: 'Входящие', icon: 'arrow_forward_ios', isEdit: false },
    { id: 2, title: 'Отправленные', icon: 'outgoing_mail', isEdit: false },
    { id: 3, title: 'Черновики', icon: 'edit_note', isEdit: false },
    { id: 4, title: 'Удаленные', icon: 'delete', isEdit: false },
    { id: 5, title: 'Спам', icon: 'report', isEdit: false },
  ],

  currentFolder: null,
  modalActive: false,
};

const folderReducer = (state = initialState, action: FolderAndEmailActions) => {
  switch (action.type) {
    case ActionTypes.CREATE_FOLDER:
      let i = state.folders.length
        ? state.folders[state.folders.length - 1].id
        : 0;
      const { title } = action.folder;
      return {
        ...state,
        folders: [
          ...state.folders,
          {
            id: ++i,
            title,
            isEdit: true,
          },
        ],
        modalActive: false,
      };

    case ActionTypes.DELETE_FOLDER:
      return {
        ...state,
        folders: state.folders.filter(
          (folder) => folder.id !== action.currentId
        ),
        modalActive: false,
      };

    case ActionTypes.UPDATE_FOLDER:
      return {
        ...state,
        folders: state.folders.map((folder) => {
          const { currentId } = action,
            title = action.folder.title;
          if (folder.id === currentId)
            return { id: currentId, title, isEdit: true };
          return folder;
        }),
        modalActive: false,
        currentFolder: null,
      };

    case ActionTypes.SET_CURRENT_FOLDER:
      return {
        ...state,
        currentFolder: action.currentFolder,
        modalActive: true,
      };

    case ActionTypes.OPEN_MODAL:
      return {
        ...state,
        modalActive: action.modalAction,
      };

    case ActionTypes.CLOSE_MODAL:
      return {
        ...state,
        modalActive: !action.modalAction,
      };

    default:
      return state;
  }
};

export default folderReducer;
