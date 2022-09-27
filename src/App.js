import './App.css';

import CallTouchLeads from './components/CallTouch/CallTouch';

import CallTouchApi from './services/CallTouchAPI';

const data = new CallTouchApi();

data.getAlldata().then(res => console.log(res.length))

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
      </header>
      <CallTouchLeads />
    </div>
  );
}

export default App;
