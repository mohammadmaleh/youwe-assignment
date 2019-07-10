import * as React from 'react';
import { connect } from 'react-redux';

import { Accordions, Events, Header, MicroBlog, News, TelephoneBook, UsersGroups, UsersLinks } from '../../components';
import { AppState } from '../../redux';
import { thunkFetchDashboardData } from '../../redux/dashboard/dashboard.thunks';
import { DashboardState } from '../../types/dashboard.types';

interface AppProps {
  thunkFetchDashboardData: any;
  dashboardData: DashboardState;
}

class App extends React.Component<AppProps> {
  public componentDidMount() {
    const {thunkFetchDashboardData} = this.props;
    thunkFetchDashboardData();
  }

  public render() {
    const {
      events,
      news,
      userLinks,
      userGroups,
      microBlog,
      openFirstAccordion,
      clickingAccordionEffectOthers
    } = this.props.dashboardData;

    return (
      <div className="dashboard">
        <Header />
        <div className="wrapper">
          <Accordions
            openFirstAccordion={openFirstAccordion}
            clickingAccordionEffectOthers={clickingAccordionEffectOthers}
          />
          <Events events={events} />
          <TelephoneBook />
          <News news={news} />
          <UsersLinks userLinks={userLinks} />
          <MicroBlog microBlog={microBlog} />
          <UsersGroups userGroups={userGroups} />
          {/*<DirectLinks directLinks={DirectLinks} />*/}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  dashboardData: state.dahsboard
});

export default connect(
  mapStateToProps,
  {thunkFetchDashboardData}
)(App);
