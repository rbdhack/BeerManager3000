// Create redux store with history
import configureStore from './configureStore'
import history from './utils/history'

const initialState = {};
const store = configureStore(initialState, history);

export default store;
