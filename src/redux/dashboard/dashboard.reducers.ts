import { DashboardActionTypes, DashboardState, UPDATE_DASHBOARD } from '../../types/dashboard.types';

const initialState: DashboardState = {
  openFirstAccordion: false,
  clickingAccordionEffectOthers: true,
  events: null,
  blogs: [],
  news: [],
  qualityManual: [],
  polls: [],
  userLinks: [],
  userGroups: [],
  microBlog: [],
  DirectLinks: []
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
