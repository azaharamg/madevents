import React from 'react';
import '../stylesheet/footer.scss';

function Footer() {
  return (
    <footer className='footer'>
      <p className='footer--information'>{`MadEvents ${new Date().getFullYear()}`}</p>
    </footer>
  );
}

export default Footer;
