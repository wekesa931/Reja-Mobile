import { combineReducers } from 'redux';
import authReducers from './AuthRedcuers'
import periodReducers from './periodPicker'
import summaryReducers from './summaryReducer'
import revenueReducers from './revenueReducers'
import transactionReducers from './transactionReducers'

export const rootReducer = combineReducers({
    authReducers,
    periodReducers,
    summaryReducers,
    revenueReducers,
    transactionReducers
});

export type RootState = ReturnType<typeof rootReducer>;
