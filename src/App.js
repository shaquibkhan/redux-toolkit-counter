import { Provider } from 'react-redux';
import './App.css';
import Counter from './Counter';
import appStore from './utils/appStore';
import Header from './Header';


function App() {
  return (
    <div className="App">
     <Provider store={appStore}>
     <Header />
     <Counter />
     </Provider>
    </div>
  );
}

export default App;
