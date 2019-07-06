import {UPDATE_DASHBOARD} from '../../types/dashboard.types';
export function updateDashboard(dashboardData: unknown) {
  return {
    type: UPDATE_DASHBOARD,
    payload: dashboardData
  };
}
