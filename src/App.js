import logo from './logo.svg';
import './App.css';
import District from './Component/District/District';

function App() {
  return (
    <div className="App">
      <District name="Lakshmipur" special="narikel supari"></District>
      <District name="Chandpur" special="River"></District>
    </div>
    
  );
}

export default App;
