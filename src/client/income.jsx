import React, { Component } from 'react';
import { Switch,Route,Link,Redirect } from 'react-router-dom';
import Pay from './pay';
import Change from './change';
class Income extends Component {
  constructor(props){
    super(props)
    console.log(props)
  }
  render() {
    const { match } = this.props;
    return (
      <div>
        <div>income组件:
          <br/>
          <Link to={`${match.url}/pay`}>pay页面</Link>
          <br/>
          <Link to={`${match.url}/change`}>change页面</Link>
        </div>
        <div>
          <Switch>
            <Route exact path={`${match.url}/pay`} component={Pay} />
            <Route path={`${match.url}/change`} component={Change}/>
            <Redirect to={{pathname:'/income/pay'}} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default Income;
