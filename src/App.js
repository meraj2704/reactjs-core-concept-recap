import logo from './logo.svg';
import './App.css';
import District from './Component/District/District';
import LoadPost from './Component/LoadPost/LoadPost';

function App() {
  return (
    <div className="App">
      <District name="Lakshmipur" special="narikel supari"></District>
      <District name="Chandpur" special="River"></District>
      <LoadPost></LoadPost>
    </div>
    
  );
}

export default App;
