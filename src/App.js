import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './components/home';
import Footer from './components/footer';
import Grocery from './bodynav/grocery/Grocery';
import Appliences from './bodynav/applience/Appliences';
import Travel from './bodynav/travel/Travel';
import TopOffers from './bodynav/topoffers/TopOffers';
import ViewAllElectronics from './viewAllProducts/viewallelectronics/ViewAllElectronics';
import Mobile from './bodynav/mobile/Mobile';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/grocery" component={Grocery}/>
        <Route exact path="/mobiles" component={Mobile}/>
        <Route exact path="/appliences" component={Appliences}/>
        <Route exact path="/travel" component={Travel}/>
        <Route exact path="/topOffers" component={TopOffers}/>
        <Route exact path="/BestOfElectronins" component={ViewAllElectronics}/>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
