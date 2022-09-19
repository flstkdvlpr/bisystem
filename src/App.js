import './App.css';

import CallTouchLeads from './components/CallTouch/CallTouch';

import CallTouchApi from './services/CallTouchAPI';

const data = new CallTouchApi();

data.getAlldata().then(res => console.log(res))

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CallTouchLeads />
      </header>
    </div>
  );
}

export default App;
