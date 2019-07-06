import {DashboardState} from './../../types/dashboard.types';
import {Action} from 'redux';
import {ThunkAction} from 'redux-thunk';
import {updateDashboard} from './dashboard.actions';
import {AppState} from '../index';
import {dashboarData} from '../../constats';

const fetchDashboardDataAPI = () => Promise.resolve(dashboarData);

export const thunkSendMessage = (
  message: string
): ThunkAction<void, AppState, null, Action<string>> => async (dispatch) => {};
export const thunkFetchDashboardData = (): ThunkAction<
  void,
  AppState,
  null,
  Action<string>
> => async (dispatch) => {
  const asyncResp: DashboardState = await fetchDashboardDataAPI();

  dispatch(updateDashboard(asyncResp));
};
