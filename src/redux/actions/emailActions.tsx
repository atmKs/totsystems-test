import { ActionTypes, FolderAndEmailActions } from '../actionTypes';

export const deleteEmail = (
  currentId: number | null
): FolderAndEmailActions => ({
  type: ActionTypes.DELETE_EMAIL,
  currentId,
});

export const spamEmail = (currentId: number | null): FolderAndEmailActions => ({
  type: ActionTypes.SPAM_EMAIL,
  currentId,
});

export const searchEmail = (text: string): FolderAndEmailActions => ({
  type: ActionTypes.SEARCH_EMAIL,
  text,
});

export const readEmail = (currentId: number | null): FolderAndEmailActions => ({
  type: ActionTypes.READ_EMAIL,
  currentId,
});
