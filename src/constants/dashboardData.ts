import {format} from 'date-fns';
import uuid from 'uuid/v1';

import blogPost from '../assets/images/blog-photo.svg';
import CuraNu from '../assets/images/CuraNu-logo.svg';
import group1 from '../assets/images/group-1.png';
import group2 from '../assets/images/group-2.png';
import news1 from '../assets/images/news-1.png';
import news2 from '../assets/images/news-2.png';
import news3 from '../assets/images/news-3.png';
import Topdesk from '../assets/images/Topdesk-logo.svg';
import user1 from '../assets/images/user-1.svg';
import user2 from '../assets/images/user-2.svg';
import youForce from '../assets/images/youForce-logo.svg';

export const dashboardData = {
  openFirstAccordion: false,
  clickingAccordionEffectOthers: true,
  events: [
    {id: uuid(), name: 'string', date: format('10/12/1988')},
    {id: uuid(), name: 'string', date: format('10/12/1988')},
    {id: uuid(), name: 'string', date: format('10/12/1988')}
  ],
  blogs: [
    {
      id: uuid(),
      username: 'string',
      date: 'string',
      liked: false,
      likesCount: 0,
      commentsCount: 0,
      blogContent: 'string',
      userImage: user1
    }
  ],
  news: [
    {
      id: uuid(),
      date: 'string',
      title: 'string',
      liked: false,
      likesCount: 1,
      newsImage: news1
    },
    {
      id: uuid(),
      date: 'string',
      title: 'string',
      liked: false,
      likesCount: 1,
      newsImage: news2
    },
    {
      id: uuid(),
      date: 'string',
      title: 'string',
      liked: false,
      likesCount: 1,
      newsImage: news3
    }
  ],
  qualityManual: [
    {id: uuid(), title: 'string', date: 'string', city: 'string'}
  ],
  polls: [],
  userLinks: ['string'],
  userGroups: [
    {id: uuid(), groupImage: group1, name: 'string'},
    {id: uuid(), groupImage: group2, name: 'string'}
  ],
  microBlog: [
    {
      id: uuid(),
      authorImage: user2,
      authorName: 'string',
      numberOfResponses: 0,
      blogContent: 'string',
      blogImage: blogPost
    }
  ],
  DirectLinks: [
    {id: uuid(), title: 'string', image: CuraNu},
    {id: uuid(), title: 'string', image: Topdesk},
    {id: uuid(), title: 'string', image: youForce}
  ]
};
