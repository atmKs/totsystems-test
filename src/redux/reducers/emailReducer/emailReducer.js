import { ActionTypes } from '../../actionTypes';
const initialState = {
  emails: [
    {
      id: 1,
      folderId: 1,
      folderType: 'Входящие',
      author: 'saddaa_3232@mail.ru',
      subject: 'Labore non voluptate',
      message:
        'Labore non voluptate fugiat commodo sunt. Aute nisi sunt occaecat eiusmod consequat minim sit ut Lorem irure mollit quis. Elit laborum esse ullamco Lorem. Ipsum commodo officia in labore fugiat in. Nisi tempor magna cupidatat cillum magna officia ad sint qui sit aliqua nulla occaecat commodo. Magna sit occaecat labore fugiat culpa ut non Lorem et consequat velit id',
      date: '03.01.2022',
      noReading: true,
    },
    {
      id: 2,
      folderId: 1,
      folderType: 'Входящие',
      author: 'al862@yopmail.com',
      subject: 'Consequat minim',
      message:
        'Consequat minim excepteur cupidatat duis consequat. Lorem incididunt ullamco irure adipisicing consequat enim ipsum nulla ullamco. Anim excepteur laborum minim eu officia Lorem consectetur sint sunt fugiat voluptate. Cillum tempor cillum id mollit minim minim proident tempor sint irure. Duis elit deserunt tempor nulla irure ex laborum occaecat id pariatur sint voluptate minim. Excepteur cupidatat est eu sit voluptate aliqua cupidatat occaecat et eu cupidatat commodo. Qui ad veniam anim do cillum eiusmod Lorem.',
      date: '03.01.2022',
      noReading: true,
    },
    {
      id: 3,
      folderId: 1,
      folderType: 'Входящие',
      author: 'qua3450@yopil.com',
      subject: 'Est pariatur',
      message:
        'Est pariatur aute pariatur duis exercitation dolore ipsum. Deserunt in tempor duis cupidatat proident sunt adipisicing. Ea incididunt dolore commodo consequat deserunt elit culpa magna nostrud in esse. Est ullamco eu tempor laboris tempor magna eu ut ullamco magna culpa reprehenderit. Do excepteur officia adipisicing nostrud nulla aute in ut voluptate dolor. Ullamco reprehenderit magna labore eiusmod.',
      date: '03.01.2022',
      noReading: true,
    },
    {
      id: 4,
      folderId: 1,
      folderType: 'Входящие',
      author: '111@mail.ru',
      subject: 'Nisi sunt ad dolor proident',
      message:
        'Laboris laboris excepteur elit Lorem nisi do magna officia consequat commodo sint nisi. Proident mollit officia aute Lorem ad irure occaecat duis dolor proident velit. Est sit occaecat labore sit dolore cupidatat eiusmod magna cillum nisi excepteur quis commodo occaecat. Labore commodo sunt enim qui in eu excepteur pariatur aliqua veniam. Exercitation sit amet dolor et. Ullamco ut minim cillum exercitation duis ut cillum minim proident fugiat quis aute mollit. Dolore minim exercitation qui commodo incididunt sit non.',
      date: '03.01.2022',
      noReading: true,
    },
    {
      id: 5,
      folderId: 2,
      folderType: 'Отправленные',
      author: 'wupe-3690@yopmail.com',
      subject: 'Esse commodo dolore aliquip',
      message:
        'Esse commodo dolore aliquip amet veniam ullamco labore nisi officia non officia duis. Nisi ad quis laboris dolore velit incididunt fugiat fugiat. Proident esse aliquip consectetur aute ut aute tempor. Cillum eiusmod irure ea aliqua qui aliqua nulla pariatur eu exercitation ut id. Pariatur ea excepteur cillum enim cillum laboris culpa dolore consectetur dolor. Qui pariatur Lorem sint duis minim consectetur elit Lorem enim officia minim.',
      date: '03.01.2022',
    },
    {
      id: 6,
      folderId: 2,
      author: 'equei-9051@yopmail.com',
      folderType: 'Отправленные',
      subject: 'Nisi sunt ad dolor',
      message:
        'Nisi sunt ad dolor proident. Sint quis nulla officia voluptate nostrud incididunt sint id Lorem anim labore. Voluptate consectetur ea sint commodo mollit qui sit qui excepteur labore nostrud officia est. Sunt nostrud non id exercitation dolore velit cillum aute. Consequat labore est ad sunt sit proident anim. Esse est ullamco laborum nostrud dolore veniam fugiat ullamco tempor qui Lorem.',
      date: '03.01.2022',
    },
    {
      id: 7,
      folderId: 2,
      folderType: 'Отправленные',
      author: 'equei-9051@yopmail.com',
      subject: 'Velit nulla consectetur',
      message:
        'Velit nulla consectetur ut incididunt excepteur irure qui excepteur. Ipsum in aliqua ullamco Lorem fugiat sint pariatur anim ad cillum ut fugiat occaecat cupidatat. Cillum pariatur eu est quis dolor cupidatat elit elit non nulla pariatur ex nulla ut. Esse enim eu reprehenderit fugiat mollit tempor sunt occaecat aute exercitation. Nostrud ad irure anim do.',
      date: '11.05.2022',
    },
    {
      id: 8,
      folderId: 2,
      folderType: 'Отправленные',
      author: 'e43ei-9051@yopmail.com',
      subject: 'Nisi sunt ad dolor proident',
      message:
        'Amet dolore qui exercitation esse in magna ex proident. Consequat qui velit commodo sint consectetur ex elit elit mollit mollit velit. Eu sit eiusmod non id sunt eu non sunt consectetur cillum. Proident elit ex anim sunt anim.',
      date: '03.01.2022',
    },

    {
      id: 9,
      folderId: 3,
      folderType: 'Черновик',
      author: 'dsadas9051@yopmail.com',
      subject: 'DAdsae  ew rewr',
      message:
        'DAdsae  ew rewr eererer commodo sint consectetur ex elit elit mollit mollit velit. Eu sit eiusmod non id sunt eu non sunt consectetur cillum. Proident elit ex anim sunt anim.',
      date: '03.01.2022',
    },
    {
      id: 10,
      folderId: 4,
      folderType: 'Удаленые',
      author: 'qevrevas90r51@yopmail.com',
      subject: 'Krewewjr ewkrewr eererer',
      message:
        'Krewewjr ewkrewr eererer commodo sint consectetur ex elit elit mollit mollit velit. Eu sit eiusmod non id sunt eu non sunt consectetur cillum. Proident elit ex anim sunt anim.',
      date: '03.01.2022',
    },

    {
      id: 11,
      folderId: 5,
      folderType: 'Спам',
      author: 'mtr_251@yopmail.com',
      subject: 'qqqqq',
      message:
        'Kt elit mollit mollit velit. Eu sit eiusmod non id sunt eu non sunt consectetur cillum. Proident elit ex anim sunt anim.',
      date: '03.01.2022',
    },
    {
      id: 12,
      folderId: 5,
      folderType: 'Спам',
      author: 'mt43_251@yopmail.com',
      subject: 'qqqq',
      message:
        'Eewe  e wr ewr ewewewew wen sunt consectetur cillum. Proident elit ex anim sunt anim.',
      date: '03.01.2022',
    },
  ],
  currentId: null,
  searchText: '',
};

const emailReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.DELETE_EMAIL:
      return {
        ...state,
        emails: state.emails.map((email) =>
          email.id === action.currentId
            ? { ...email, folderId: 4, folderType: 'Удаленные' }
            : email
        ),
      };

    case ActionTypes.SPAM_EMAIL:
      return {
        ...state,
        emails: state.emails.map((email) =>
          email.id === action.currentId
            ? { ...email, folderId: 5, folderType: 'Спам' }
            : email
        ),
      };

    case ActionTypes.READ_EMAIL:
      return {
        ...state,
        emails: state.emails.map((email) =>
          email.id === action.currentId ? { ...email, noReading: false } : email
        ),
      };

    case ActionTypes.SEARCH_EMAIL:
      return {
        ...state,
        searchText: action.text,
      };

    default:
      return state;
  }
};

export default emailReducer;
