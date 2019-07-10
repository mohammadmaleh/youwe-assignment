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
  id: string;
}
export interface DirectLinksType {
  title: string;
  image: any;
  id: string;
}
export interface NewSType {
  date: string;
  title: string;
  liked: boolean;
  likesCount: number;
  newsImage: any;
  id: string;
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
export interface MicroBlogType {
  authorImage: string;
  authorName: string;
  numberOfResponses: number;
  blogContent: string;
  blogImage: any;
}

export interface DashboardState {
  openFirstAccordion: boolean;
  clickingAccordionEffectOthers: boolean;
  events: EventType[] | null;
  blogs: BlogType[];
  news: NewSType[];
  qualityManual: QualityManualType[];
  polls: any[];
  userLinks: string[];
  userGroups: UserGroupType[];
  microBlog: MicroBlogType[];
  DirectLinks: DirectLinksType[];
}

export const UPDATE_DASHBOARD = 'UPDATE_DASHBOARD';

interface UpdateDashboardAction {
  type: typeof UPDATE_DASHBOARD;
  payload: DashboardState;
}
// interface UpdateDashboardAction {
//     type: typeof UPDATE_DASHBOARD;
//     payload: DashboardState;
// }

export type DashboardActionTypes = UpdateDashboardAction;
