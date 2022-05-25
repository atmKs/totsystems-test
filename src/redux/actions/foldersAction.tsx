import { Folder } from '../../types/Interfaces/foldersInterface';
import { ActionTypes, FolderAndEmailActions } from '../actionTypes';
export const createFolder = (folder: Folder) => ({
  type: ActionTypes.CREATE_FOLDER,
  folder,
});

export const deleteFolder = (
  currentId: number | null
): FolderAndEmailActions => ({
  type: ActionTypes.DELETE_FOLDER,
  currentId,
});
export const updateFolder = (
  currentId: number | null,
  folder: Folder
): FolderAndEmailActions => ({
  type: ActionTypes.UPDATE_FOLDER,
  currentId,
  folder,
});
export const openModal = (modalAction: boolean): FolderAndEmailActions => ({
  type: ActionTypes.OPEN_MODAL,
  modalAction,
});

export const closeModal = (modalAction: boolean): FolderAndEmailActions => ({
  type: ActionTypes.CLOSE_MODAL,
  modalAction,
});

export const setCurrentFolder = (
  currentFolder: Folder | null
): FolderAndEmailActions => ({
  type: ActionTypes.SET_CURRENT_FOLDER,
  currentFolder,
});
