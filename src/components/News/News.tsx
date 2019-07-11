import * as React from 'react';

import { ActivityIndicator } from '..';
import cancelIcon from '../../assets/images/cancel.svg';
import { NewSType } from '../../types/dashboard.types';
import Widget from '../HOC/Widget/Widget';

interface NewsProps {
  news: NewSType[] | null;
}
const News: React.FunctionComponent<NewsProps> = (props) => {
  const {news} = props;
  if (!news || news === null) return <ActivityIndicator size="mid" />;

  const renderNews = () => {
    if (!news) return false;
    return news.map((newsItem: NewSType) => (
      <li className="news-item widget-item" key={newsItem.id}>
        <img src={newsItem.newsImage} alt="" />
        <div className="news-description">
          <p className="date">{newsItem.date}</p>
          <p className="title">{newsItem.title}</p>
        </div>
      </li>
    ));
  };
  return (
    <Widget title="Nieuws" icon={cancelIcon} footerText={'Meer nieuws'}>
      <div className="news">
        <ul className="news-holder">{renderNews()}</ul>
      </div>
    </Widget>
  );
};

export default News;
