import { SystemState, UPDATE_SESSION, UPDATE_DASHBOARD, DashboardState } from './dashboard.types';

export function updateSession(newSession: SystemState) {
    return {
        type: UPDATE_SESSION,
        payload: newSession,
    };
}
export function updateDashboard(dashboarData: DashboardState) {
    return {
        type: UPDATE_DASHBOARD,
        payload: dashboarData,
    };
}
