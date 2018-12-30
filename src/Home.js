import React, { Component } from 'react';
import { Switch,Redirect,Route,Link } from 'react-router-dom';
import Index from './client/index';
import Income from './client/income';
import Content from './client/content';
import Pay from './client/pay';
import Change from './client/change';

class Home extends Component {
  constructor(props){
    super(props)
  }
  render() {
    const { match }  = this.props;
    return (
      <div>
        <div>home组件:
          <br/>
          <Link to="/index">index页面</Link>
          <br/>
          <Link to="/income">income页面</Link>
          <br/>
          <Link to="/content">content页面</Link>
        </div>
        <Switch>
          <Route path="/index" component={Index} />
          <Route path="/income" component={Income}/>
          <Route path="/content" component={Content}/>
          <Redirect to={{pathname:'/index/type1'}} />
        </Switch>
      </div>
    );
  }
}

export default Home;
