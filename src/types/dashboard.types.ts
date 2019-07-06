// Describing the shape of the system's slice of state
export interface SystemState {
  loggedIn: boolean;
  session: string;
  userName: string;
}

export interface EventType {
  id: string;
  name: string;
  date: string;
}
export interface BlogType {
  username: string;
  date: string;
  liked: boolean;
  likesCount: number;
  commentsCount: number;
  blogContent: string;
  userImage: any;
}
export interface NewSType {
  date: string;
  title: string;
  liked: boolean;
  likesCount: number;
  newsImage: any;
}
export interface QualityManualType {
  title: string;
  date: string;
  city: string;
}
export interface UserGroupType {
  groupImage: any;
  name: string;
}
export interface MicroBloggerType {
  authorImage: string;
  authorName: string;
  numberOfResponses: number;
  blogContent: string;
  blogImage: any;
}
export interface DashboardState {
  events: EventType[] | null;
  blogs: BlogType[];
  news: NewSType[];
  qualityManual: QualityManualType[];
  polls: any[];
  userLinks: any[];
  userGroups: UserGroupType[];
  microBlogs: MicroBloggerType[];
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
