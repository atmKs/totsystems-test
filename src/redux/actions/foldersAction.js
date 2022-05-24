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
  type: ActionTypes.UPDATE_USER,
  currentId,
  folder,
});
