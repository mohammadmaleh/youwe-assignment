// Describing the shape of the system's slice of state
export interface SystemState {
    loggedIn: boolean;
    session: string;
    userName: string;
}

export interface DashboardState {
    events: { name: string; date: string }[];
    blogs: {
        username: string;
        date: string;
        liked: boolean;
        likesCount: number;
        commentsCount: number;
        blogContent: string;
        userImage: any;
    }[];
    news: { date: string; title: string; liked: boolean; likesCount: number; newsImage: any }[];
    qualityManiual: { title: string; date: string; city: string }[];
    polls: any[];
    userLinks: any[];
    userGroups: {
        groupImage: any;
        name: string;
    }[];
    microBlogs: {
        autherImage: string;
        autherName?: string;
        numberOfResponses: number;
        blogContent: string;
        blogImage: any;
    }[];
}

// Describing the different ACTION NAMES available
export const UPDATE_SESSION = 'UPDATE_SESSION';
export const UPDATE_DASHBOARD = 'UPDATE_DASHBOARD';

interface UpdateSessionAction {
    type: typeof UPDATE_SESSION;
    payload: SystemState;
}
interface UpdateDashboardAction {
    type: typeof UPDATE_DASHBOARD;
    payload: DashboardState;
}
// interface UpdateDashboardAction {
//     type: typeof UPDATE_DASHBOARD;
//     payload: DashboardState;
// }

export type SystemActionTypes = UpdateSessionAction;
export type DashboardActionTypes = UpdateDashboardAction;
