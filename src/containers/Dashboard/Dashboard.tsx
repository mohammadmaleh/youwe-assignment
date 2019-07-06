import * as React from 'react';
import {connect} from 'react-redux';
import {AppState} from '../../redux';
import {thunkFetchDashboardData} from '../../redux/dashboard/dashboard.thunks';
import {DashboardState} from '../../types/dashboard.types';
import {Events, Header, Accordions} from '../../components';
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
    const {events} = this.props.dashboardData;

    return (
      <div className="dashboard">
        <Header />
        <div className="wrapper">
          <Accordions />
          <Events events={events} />
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
