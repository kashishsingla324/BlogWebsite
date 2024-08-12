import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Blog from './pages/Blog';
import Home from './pages/Home';
import  Navbar from './pages/Navbar/Navbar';
import Write from './pages/Create/Write'
import EmptyList from './components/common/EmptyList';
import About from './pages/About/About';

const App = () => {
  return (
    <div className='container'>
      <Navbar/>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/blog/:id' component={Blog} />
        <Route path="/about"><About/></Route>
        <Route path="/write"><Write/></Route>
        <Route path="/emptyList"><EmptyList/></Route>
        <Redirect to='/' />
      </Switch>
    </div>
    // <Write />

  );
};

export default App;
