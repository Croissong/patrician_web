import React, { Component, PropTypes } from 'react';
import { Router } from 'react-router';
import { Provider } from 'react-redux';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class AppContainer extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
    routes: PropTypes.object.isRequired,
    store: PropTypes.object.isRequired
  }

  render () {
    const { history, routes, store } = this.props;

    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <Provider store={store}>
          <div style={{ height: '100%' }}>
            <Router history={history} children={routes} />
          </div>
        </Provider>
      </MuiThemeProvider>
    );
  }
}

export default AppContainer;
