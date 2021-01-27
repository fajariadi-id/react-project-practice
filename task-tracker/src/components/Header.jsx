import Button from './Button';
import { useLocation } from 'react-router-dom';

const Header = ({ toggleForm, toggleBtn }) => {
  const loc = useLocation();

  return (
    <header className='header'>
      <h1>Task Tracker</h1>

      {loc.pathname === '/' && (
        <Button
          color={toggleBtn ? 'red' : 'green'}
          text={toggleBtn ? 'Close' : 'Add'}
          onClick={toggleForm}
        />
      )}
    </header>
  );
};

export default Header;
