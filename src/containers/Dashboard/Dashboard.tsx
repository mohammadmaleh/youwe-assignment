import * as React from 'react';
import { connect } from 'react-redux';

import { Accordions, Events, Header, News } from '../../components';
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
    const {events, news} = this.props.dashboardData;

    return (
      <div className="dashboard">
        <Header />
        <div className="wrapper">
          <Accordions />
          <Events events={events} />
          <News news={news} />
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
