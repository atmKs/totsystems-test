export interface Email {
  id: number;
  folderId: number;
  folderType: string;
  author: string;
  subject: string;
  message: string;
  date: string;
  noReading?: boolean;
}

export interface EmailState {
  emails: Email[];
  currentId: number | null;
  searchText: string;
}
