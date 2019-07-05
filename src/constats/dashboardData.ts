// import { format } from 'date-fns';
import blogUserImage from '../assets/images/Oval 2 2.png';
import news1 from '../assets/images/news-1.png';
import news2 from '../assets/images/news-2.png';
import news3 from '../assets/images/news-3.png';
import group2 from '../assets/images/group-2.png';
import group1 from '../assets/images/group-1.png';
import blogPost from '../assets/images/blog-post.png';
export const dashboarData = {
    events: [{ name: 'string', date: 'string' }],
    blogs: [
        {
            username: 'string',
            date: 'string',
            liked: false,
            likesCount: 0,
            commentsCount: 0,
            blogContent: 'string',
            userImage: blogUserImage,
        },
    ],
    news: [
        { date: 'string', title: 'string', liked: false, likesCount: 1, newsImage: news1 },
        { date: 'string', title: 'string', liked: false, likesCount: 1, newsImage: news2 },
        { date: 'string', title: 'string', liked: false, likesCount: 1, newsImage: news3 },
    ],
    qualityManiual: [{ title: 'string', date: 'string', city: 'string' }],
    polls: [],
    userLinks: ['string'],
    userGroups: [
        {
            groupImage: group1,
            name: 'string',
        },
        {
            groupImage: group2,
            name: 'string',
        },
    ],
    microBlogs: [
        {
            autherImage: blogUserImage,
            autherName: 'string',
            numberOfResponses: 0,
            blogContent: 'string',
            blogImage: blogPost,
        },
    ],
};