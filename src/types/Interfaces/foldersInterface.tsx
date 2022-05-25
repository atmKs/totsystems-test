export interface Folder {
  id: number;
  title: string;
  icon: string;
  isEdit: boolean;
}

export interface FolderState {
  folders: Folder[];
  currentFolder: Folder | null;
  modalActive: boolean;
}
