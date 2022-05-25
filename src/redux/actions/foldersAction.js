import { ActionTypes } from '../actionTypes';
export const createFolder = (folder) => ({
  type: ActionTypes.CREATE_FOLDER,
  folder,
});

export const deleteFolder = (currentId) => ({
  type: ActionTypes.DELETE_FOLDER,
  currentId,
});
export const updateFolder = (currentId, folder) => ({
  type: ActionTypes.UPDATE_FOLDER,
  currentId,
  folder,
});
export const openModal = (modalAction) => ({
  type: ActionTypes.OPEN_MODAL,
  modalAction,
});

export const closeModal = (modalAction) => ({
  type: ActionTypes.CLOSE_MODAL,
  modalAction,
});

export const setCurrentFolder = (currentFolder) => ({
  type: ActionTypes.SET_CURRENT_FOLDER,
  currentFolder,
});
