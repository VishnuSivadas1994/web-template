import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import SamplePage from './components/SamplePage';


import './App.css';

function App() {
  return (
    <BrowserRouter basename="/web-template">{/*basename for starting route in ghpages*/}
      <NavBar />
      <Switch>
        <Route component={Home} path='/' exact />
        <Route component={About} path='/about' />
        <Route component={SamplePage} path='/sample' />

      </Switch>
      <Footer />

    </BrowserRouter>
  )
}

export default App;
