import React, { Component } from 'react';
import {createStore} from 'redux'
import {Provider} from 'react-redux' 

import './App.css';
import PageHeader from './PageHeader'
import PageContent from './PageContent'
import reducers from './reducers'

const store = createStore(reducers)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <PageHeader />
          <PageContent />
        </div>
      </Provider>
    )
  }
}

export default App;
