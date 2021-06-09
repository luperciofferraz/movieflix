import { ToastContainer } from 'react-toastify';
import Routes from './Routes';
import './core/assets/styles/custom.scss';
import './app.scss';

const App = () => {

  return (
      <>
          <Routes />
          <ToastContainer />
      </>
  );
}

export default App;
