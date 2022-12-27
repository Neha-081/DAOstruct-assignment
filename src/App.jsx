import { Fragment } from 'react';
import HomePage from './components/HomePage';

// Pages
import Navbar from './components/Navbar';

function App() {

  return (
    <Fragment>
          <Navbar />
          <HomePage />
    </Fragment>
  );
}

export default App;
