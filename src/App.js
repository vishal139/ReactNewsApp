import React from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router,Switch, Route,} from "react-router-dom";
const  App = () => {
  const pageSize = 9;
  const apikey = process.env.REACT_APP_API_KEY;
  return (
      <>
      <Router>
        <div>
          <Navbar/>

          <Switch>
            <Route exact path="/"> <News key="general" pageSize = {pageSize} apikey={apikey} heading={'general'} Country={"IN"} category={'general'}/></Route>
            <Route exact path="/Business"> <News key="business" pageSize = {pageSize} apikey={apikey} heading={'business'} Country={"IN"} category={'business'}/></Route>
            <Route exact path="/Entertainment"> <News key="entertainment" pageSize = {pageSize} apikey={apikey} heading={'entertainment'} Country={"IN"} category={'entertainment'}/></Route>
            <Route exact path="/health"> <News key="health" pageSize = {pageSize} apikey={apikey} heading={'health'} Country={"IN"} category={'health'}/></Route>
            <Route exact path="/science"> <News key="science" pageSize = {pageSize} apikey={apikey} heading={'science'} Country={"IN"} category={'science'}/></Route>
            <Route exact path="/sports"> <News key="sports" pageSize = {pageSize} apikey={apikey} heading={'sports'} Country={"IN"} category={'sports'}/></Route>
            <Route exact path="/technology"> <News key="technology" pageSize = {pageSize} apikey={apikey} heading={'technology'} Country={"IN"} category={'technology'}/></Route>
          </Switch>

        </div>
      </Router>
      </>
    )
  }

export default App;  


