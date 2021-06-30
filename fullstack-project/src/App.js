import './App.css';
import LoginForm from './LoginForm';
import Dashborad from './Dashboard';
import{BrowserRouter, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div className="page">
        <div className="content">
          <div>
            <BrowserRouter>
              <Route path='/' exact={true} component={LoginForm}/>
              <Route path='/Dashboard' exact={true} component={Dashborad}/>
            </BrowserRouter>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
