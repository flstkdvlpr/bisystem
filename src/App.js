import './App.css';

import CallTouchLeads from './components/CallTouch/CallTouch';
import CallTouchApi from './services/CallTouchAPI';
import Header from './components/Header/Header';

const data = new CallTouchApi();

data.getAlldata('16/09/2022','16/09/2022').then(res => console.log(res))

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <CallTouchLeads />
    </div>
  );
}

export default App;
