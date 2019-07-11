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
          <div>
            <Accordions
              openFirstAccordion={openFirstAccordion}
              clickingAccordionEffectOthers={clickingAccordionEffectOthers}
            />
            <Events events={events} />
            <News news={news} />
          </div>
          <div>
            <UsersLinks userLinks={userLinks} />
            <UsersGroups userGroups={userGroups} />
          </div>
          <div>
            <TelephoneBook />

            <MicroBlog microBlog={microBlog} />
          </div>

          {/*<DirectLinks directLinks={DirectLinks} />*/}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  dashboardData: state.dashboard
});

export default connect(
  mapStateToProps,
  {thunkFetchDashboardData}
)(App);
