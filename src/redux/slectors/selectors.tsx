import { Email } from '../../types/Interfaces/emailInterface';
import { Folder } from '../../types/Interfaces/foldersInterface';

export const foldersSelector = (state: {
  folderItems: { folders: Folder[] };
}) => state.folderItems.folders;
export const emailsSelector = (state: { emailItems: { emails: Email[] } }) =>
  state.emailItems.emails;
export const modalSelector = (state: {
  folderItems: { modalActive: boolean };
}) => state.folderItems.modalActive;
export const currentFolderSelector = (state: {
  folderItems: { currentFolder: Folder | null };
}) => state.folderItems.currentFolder;
export const searchTextSelector = (state: {
  emailItems: { searchText: string };
}) => state.emailItems.searchText;
