import Button from './Button';

const Header = ({ toggleForm, toggleBtn }) => {
  return (
    <header className='header'>
      <h1>Task Tracker</h1>
      <Button
        color={toggleBtn ? 'red' : 'green'}
        text={toggleBtn ? 'Close' : 'Add'}
        onClick={toggleForm}
      />
    </header>
  );
};

export default Header;
