import { combineReducers } from 'redux';
import authReducers from './AuthRedcuers'

export const rootReducer = combineReducers({
    authReducers
});

export type RootState = ReturnType<typeof rootReducer>;
