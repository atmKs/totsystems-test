import { ActionTypes } from '../../actionTypes';

const initialState = {
  folders: [
    { id: 1, title: 'Входящие', icon: 'arrow_forward_ios', isEdit: false },
    { id: 2, title: 'Отправленные', icon: 'outgoing_mail', isEdit: false },
    { id: 3, title: 'Черновики', icon: 'edit_note', isEdit: false },
    { id: 4, title: 'Удаленные', icon: 'delete', isEdit: false },
    { id: 5, title: 'Спам', icon: 'report', isEdit: false },
  ],
};

const folderReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.CREATE_FOLDER:
      const { title } = action.folder;
      return {
        ...state,
        folders: [
          ...state.folders,
          {
            id: Math.random(),
            title,
            isEdit: true,
          },
        ],
      };

    case ActionTypes.DELETE_FOLDER:
      return {
        ...state,
        folders: state.folders.filter(
          (folder) => folder.id !== action.currentId
        ),
      };

    case ActionTypes.UPDATE_FOLDER:
      return {
        ...state,
        folders: state.folders.map((folder) => {
          const { currentId } = action,
            title = action.folder.title;
          if (folder.id === currentId) return { id: currentId, title };
          return folder;
        }),
      };

    default:
      return state;
  }
};

export default folderReducer;
