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
  public state = {
    message: ''
  };

  public componentDidMount() {
    const {thunkFetchDashboardData} = this.props;
    thunkFetchDashboardData();
  }

  public render() {
    return (
      <div className="parent">
        <Header />
        <Widget icon="" title={'Evenementen'} footerText={'dsdsds'}>
          <p>dsadsaddsa</p>
        </Widget>
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
