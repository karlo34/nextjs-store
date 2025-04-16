export let ime = 'Valentina';

const Navbar = ({ currentValue, onValueChange }) => {
  return (
    <div>
      <h1 onClick={() => onValueChange('home')} id="home">H</h1>
      <h1 onClick={() => onValueChange('login')} id="login">L</h1>
      <h1 onClick={() => onValueChange('cart')} id="cart">C</h1>
      <h1 onClick={() => onValueChange('aboutUs')} id="aboutUs">A</h1>
    </div>
  );
};

export default Navbar;