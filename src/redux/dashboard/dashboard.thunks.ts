import {Action} from 'redux';
import {ThunkAction} from 'redux-thunk';
import {updateDashboard} from './dashboard.actions';
import {AppState} from '../index';
import {dashboardData} from '../../constats';

const fetchDashboardDataAPI = () =>
  new Promise((resolve: Function) => setTimeout(resolve(dashboardData), 3000));

export const thunkSendMessage = (
  message: string
): ThunkAction<void, AppState, null, Action<string>> => async (dispatch) => {};
export const thunkFetchDashboardData = (): ThunkAction<
  void,
  AppState,
  null,
  Action<string>
> => async (dispatch) => {
  try {
    const asyncResp: unknown = await fetchDashboardDataAPI();
    dispatch(updateDashboard(asyncResp));
  } catch (err) {
    console.log('Error: ', err.message);
  }
};
