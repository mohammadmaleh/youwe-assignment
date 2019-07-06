import * as React from 'react';
import {connect} from 'react-redux';
import {AppState} from '../../redux';
import {thunkFetchDashboardData} from '../../redux/dashboard/dashboard.thunks';
import {DashboardState} from '../../redux/dashboard/dashboard.types';
import {Widget, Header} from '../../components';
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
    return (
      <div className="dashboard">
        <Header />
        <div className="wrapper">
          <Widget
            icon=""
            title={'Evenementen'}
            footerText={'dsdsds'}
            active={false}
          >
            <p>dsadsaddsa</p>
          </Widget>
          <Widget
            icon=""
            title={'Evenementen'}
            footerText={'dsdsds'}
            active={false}
          >
            <p>dsadsaddsa</p>
          </Widget>
          <Widget
            icon=""
            title={'Evenementen'}
            footerText={'dsdsds'}
            active={false}
          >
            <p>dsadsaddsa</p>
          </Widget>
          <Widget
            icon=""
            title={'Evenementen'}
            footerText={'dsdsds'}
            active={false}
          >
            <p>dsadsaddsa</p>
          </Widget>
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
