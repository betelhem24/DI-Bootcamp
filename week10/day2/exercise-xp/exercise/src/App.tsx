import { Provider } from 'react-redux';
import { store } from './store';
import UserData from './UserData';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <UserData />
      </div>
    </Provider>
  );
}

export default App;
