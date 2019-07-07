import { DashboardActionTypes, DashboardState, UPDATE_DASHBOARD } from '../../types/dashboard.types';

const initialState: DashboardState = {
  events: null,
  blogs: [],
  news: [],
  qualityManual: [],
  polls: [],
  userLinks: [],
  userGroups: [],
  microBlog: []
};

export function dashboardReducer(
  state = initialState,
  action: DashboardActionTypes
): DashboardState {
  switch (action.type) {
    case UPDATE_DASHBOARD: {
      return {
        ...state,
        ...action.payload
      };
    }
    default:
      return state;
  }
}
