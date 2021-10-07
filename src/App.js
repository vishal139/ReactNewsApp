import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router,Switch, Route,} from "react-router-dom";
export default class App extends Component {
  pageSize = 9;
  apikey = process.env.REACT_APP_API_KEY;
  render() {
    return (
      <>
      <Router>
        <div>
          <Navbar/>

          <Switch>
            <Route exact path="/"> <News key="general" pageSize = {this.pageSize} apikey={this.apikey} heading={'general'} Country={"IN"} category={'general'}/></Route>
            <Route exact path="/Business"> <News key="business" pageSize = {this.pageSize} apikey={this.apikey} heading={'business'} Country={"IN"} category={'business'}/></Route>
            <Route exact path="/Entertainment"> <News key="entertainment" pageSize = {this.pageSize} apikey={this.apikey} heading={'entertainment'} Country={"IN"} category={'entertainment'}/></Route>
            <Route exact path="/health"> <News key="health" pageSize = {this.pageSize} apikey={this.apikey} heading={'health'} Country={"IN"} category={'health'}/></Route>
            <Route exact path="/science"> <News key="science" pageSize = {this.pageSize} apikey={this.apikey} heading={'science'} Country={"IN"} category={'science'}/></Route>
            <Route exact path="/sports"> <News key="sports" pageSize = {this.pageSize} apikey={this.apikey} heading={'sports'} Country={"IN"} category={'sports'}/></Route>
            <Route exact path="/technology"> <News key="technology" pageSize = {this.pageSize} apikey={this.apikey} heading={'technology'} Country={"IN"} category={'technology'}/></Route>
          </Switch>

        </div>
      </Router>
      </>
    )
  }
}
