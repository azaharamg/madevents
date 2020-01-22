import React from 'react';
import { Link } from 'react-router-dom';
import Calendar from './landingComponents/Calendar';

function Landing() {
  return (
    <main>
      <h1>¿ Qué planes hay ?</h1>
      <Calendar />
      <Link to='/main'>
        <h2>Ver en el mapa</h2>
      </Link>
      <section>
        <h2>MadEvents</h2>
        <p>
          Es una aplicación web para consultar los eventos en Madrid y poder filtrarlos por distrito o categotías, asi
          encontrarás facilmente nuevos eventos a los que asistir !!!
        </p>
      </section>
    </main>
  );
}

export default Landing;
