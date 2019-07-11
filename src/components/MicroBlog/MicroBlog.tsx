import * as React from 'react';

import { ActivityIndicator, Widget } from '..';
import cancelIcon from '../../assets/images/cancel.svg';
import uploadIcon from '../../assets/images/upload-icons.svg';
import { MicroBlogType } from '../../types/dashboard.types';

interface MicroBlogProps {
  microBlog: MicroBlogType[] | null;
}

const MicroBlog: React.FunctionComponent<MicroBlogProps> = (props) => {
  const {microBlog} = props;
  if (!microBlog || microBlog === null) return <ActivityIndicator size="mid" />;

  const renderBlogs = () => {
    if (!microBlog) return false;
    return microBlog.map((blog: MicroBlogType) => (
      <div className="widget-item user-blog-item" key={blog.id}>
        <div className="blog-header">
          <img src={blog.authorImage} alt="" className="author-image" />
          <div className="author-info">
            <p className="author-name">{blog.authorName}</p>
            <p className="date">{blog.blogDate}</p>
          </div>
          <div className="likes-container"></div>
        </div>
        <div className="blog-body">
          <p className="blog-content">{blog.blogContent}</p>
          <img src={blog.blogImage} alt="" className="blog-image" />
          <p className="read-more-reactions">Lees meer en reacties (0)</p>
        </div>
      </div>
    ));
  };
  return (
    <Widget footerText="Toon meer" title="micro blog" icon={cancelIcon}>
      <div className="micro-blog">
        <div className="create-post">
          <textarea name="" id="" />
          <div className="create-post-controls">
            <div className="icons-container">
              <img src={uploadIcon} />
            </div>
            <button className="submit-button">Plaats</button>
          </div>
        </div>
        <ul className="user-blogs-container">{renderBlogs()}</ul>
      </div>
    </Widget>
  );
};

export default MicroBlog;
