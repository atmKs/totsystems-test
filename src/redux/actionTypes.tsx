import { Folder } from '../types/Interfaces/foldersInterface';

export enum ActionTypes {
  CREATE_FOLDER = '[Create] Create Folder',
  DELETE_FOLDER = '[Delete] Delete Folder',
  UPDATE_FOLDER = '[Update] Update Folder',
  SHOW_EMAIL = '[Show] Show Email',
  OPEN_MODAL = '[Open] Open Modal',
  CLOSE_MODAL = '[Close] Close Modal',
  SET_CURRENT_FOLDER = '[Set] Set curren folder',

  DELETE_EMAIL = '[Delete] Delete email',
  SPAM_EMAIL = '[Spam] Spam email',
  SEARCH_EMAIL = '[Search] Search email',
  READ_EMAIL = '[Read] Read email',
}

interface CreateFolderAction {
  type: ActionTypes.CREATE_FOLDER;
  folder: Folder;
}

interface DeleteFolderAction {
  type: ActionTypes.DELETE_FOLDER;
  currentId: number | null;
}
interface UpdateFolderAction {
  type: ActionTypes.UPDATE_FOLDER;
  currentId: number | null;
  folder: Folder;
}
interface OpenModalAction {
  type: ActionTypes.OPEN_MODAL;
  modalAction: boolean;
}
interface CloseModalrAction {
  type: ActionTypes.CLOSE_MODAL;
  modalAction: boolean;
}

interface SetCurrentFolderAction {
  type: ActionTypes.SET_CURRENT_FOLDER;
  currentFolder: Folder | null;
}

interface DeleteEmailAction {
  type: ActionTypes.DELETE_EMAIL;
  currentId: number | null;
}

interface SpamEmailAction {
  type: ActionTypes.SPAM_EMAIL;
  currentId: number | null;
}

interface SearchEmailAction {
  type: ActionTypes.SEARCH_EMAIL;
  text: string;
}

interface ReadEmailAction {
  type: ActionTypes.READ_EMAIL;
  currentId: number | null;
}

export type FolderAndEmailActions =
  | CreateFolderAction
  | DeleteFolderAction
  | UpdateFolderAction
  | OpenModalAction
  | CloseModalrAction
  | SetCurrentFolderAction
  | DeleteEmailAction
  | SpamEmailAction
  | SearchEmailAction
  | ReadEmailAction;
