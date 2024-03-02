import { Provider } from 'react-redux';
import './App.css';
import Counter from './Counter';
import appStore from './utils/appStore';


function App() {
  return (
    <div className="App">
     <Provider store={appStore}>
     
     <Counter />
     </Provider>
    </div>
  );
}

export default App;
