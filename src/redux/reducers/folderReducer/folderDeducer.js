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
      const { title, isEdit } = action.folder;
      return {
        ...state,
        filders: [
          ...state.folders,
          {
            id: Math.random(),
            title,
            isEdit,
          },
        ],
      };

    default:
      return state;
  }
};

export default folderReducer;
