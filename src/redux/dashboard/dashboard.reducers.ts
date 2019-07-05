import { DashboardState, UPDATE_DASHBOARD, DashboardActionTypes } from './dashboard.types';

const initialState: DashboardState = {
    events: [],
    blogs: [],
    news: [],
    qualityManiual: [],
    polls: [],
    userLinks: [],
    userGroups: [],
    microBlogs: [],
};

export function dashboardReducer(state = initialState, action: DashboardActionTypes): DashboardState {
    switch (action.type) {
        case UPDATE_DASHBOARD: {
            return {
                ...state,
                ...action.payload,
            };
        }
        default:
            return state;
    }
}
