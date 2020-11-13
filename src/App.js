import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import QrCoupons from "./pages/QrCoupons";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={QrCoupons}/>
      </Switch>
    </Router>
    
  );
}

export default App;
