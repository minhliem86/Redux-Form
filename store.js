import {createStore, combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';

const allReducers = combineReducers({
    form: formReducer
});

const store = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;