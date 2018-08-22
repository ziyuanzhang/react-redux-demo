import React, { Component } from 'react';
import './App.css';
import {Provider} from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import store from '../../store/store'
import Headers from '../Header/Header'
import Footers from '../Footer/Footer'
import Home from '../Home/Home'
import SynchronizeS from '../../container/connectSync'
import AsynchronousS from '../../container/connectAsync'
import Error404 from '../Error404/Error404'


import { Layout } from 'antd';
const { Header, Footer,  Content } = Layout;

class App extends Component {
 
  render() {
    return (
      <Provider store={store}>
        <Router  basename="react-redux-demo" >
          <div className="App">
          <Layout>
              <Header>
                 <Headers />
              </Header>
              <Content>
                    <Switch>
                      <Route exact path="/" component={Home} />            
                      <Route path="/Synchronize" component={SynchronizeS} />
                      <Route path="/asynchronous" component={AsynchronousS} />
                      <Route  component={Error404} />
                    </Switch>
              </Content>
              <Footer>
                 <Footers />
              </Footer>
    </Layout>
           
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
