import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons';

function ButtonGoBack() {
  return (
    <Link to='/'>
      <Button>
        <FontAwesomeIcon icon={faChevronCircleLeft} />
        <span>Volver al inicio</span>
      </Button>
    </Link>
  );
}

export default ButtonGoBack;
