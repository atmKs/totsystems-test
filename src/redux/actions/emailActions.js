import { ActionTypes } from '../actionTypes';
export const deleteEmail = (currentId) => ({
  type: ActionTypes.DELETE_EMAIL,
  currentId,
});

export const spamEmail = (currentId) => ({
  type: ActionTypes.SPAM_EMAIL,
  currentId,
});
