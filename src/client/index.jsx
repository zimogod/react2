import React, { Component } from 'react';
import { Switch,Route,Link,Redirect } from 'react-router-dom';
import Pay from './pay';
import Change from './change';
import Type1 from './type1';
import Type2 from './type2';
class Indexcc extends Component {
  constructor(props){
    super(props)
    console.log(props)
  }
  render() {
    const {match} = this.props;
    return (
      <div>
        index组件:  
        <br/>
        <div>
          <Link to='/index/type1'>type1页面</Link>
          <br/>
          <Link to='/index/type2'>type2页面</Link>
        </div>
        <Switch>
          <Route exact path='/index/type1' component={Type1} />
          <Route path='/index/type2' component={Type2}/>
          <Redirect to={{pathname:'/index/type1'}} />
        </Switch>      
      </div>
    );
  }
}

export default Indexcc;
