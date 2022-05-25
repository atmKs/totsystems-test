import { combineReducers } from 'redux';
import folderReducer from './folderReducer/folderDeducer';
import emailReducer from './emailReducer/emailReducer';
const rootReducers = combineReducers({
  folderItems: folderReducer,
  emailItems: emailReducer,
});
export default rootReducers;
