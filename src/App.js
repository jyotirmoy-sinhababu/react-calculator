import './App.css';

import Wrapper from './wrapper/Wrapper';
import DataProvider from './dataContext/DataProvider';

function App() {
  return (
    <DataProvider>
      <div className='App'>
        <Wrapper />
      </div>
    </DataProvider>
  );
}

export default App;
