import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';

import { AppState } from '..';
import { dashboardData } from '../../constants';
import { updateDashboard } from './dashboard.actions';

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
