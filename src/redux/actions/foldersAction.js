import { ActionTypes } from '../actionTypes';
export const createFolder = (folder) => ({
  type: ActionTypes.CREATE_FOLDER,
  folder,
});

export const deleteFolder = (id) => ({ type: ActionTypes.DELETE_FOLDER, id });
export const updateFolder = (folder, id) => ({
  type: ActionTypes.UPDATE_USER,
  folder,
  id,
});
