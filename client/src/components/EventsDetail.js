import React from 'react';
import '../stylesheet/eventDetail.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

const paintCard = markerEvent => {
  const { title, time, description, link } = markerEvent;
  const message = `¿Te vienes a este evento? Es sobre ${description} `;
  return (
    <div className='card'>
      <div className='card-header'>
        <h4 className='card-share__title'>{title}</h4>
        <a
          className='card-share__button'
          href={`https://twitter.com/intent/tweet?text=${message}%20%23FunnyEvents%20https://media.giphy.com/media/3EfgWHj0YIDrW/giphy.gif`}
          title='Comparte en twitter'
          rel='noopener noreferrer'
          target='_blank'
        >
          <i className='card-share__icon'>
            <FontAwesomeIcon icon={faTwitter} />
          </i>
        </a>
      </div>
      <div className='card-body'>
        {time === '' ? '' : <h5 className='card-title'>Horario: {time}</h5>}
        {description === '' ? (
          <p className='card-text'>
            Visite el siguiente{' '}
            <a href={link} target='_blank' rel='noopener noreferrer'>
              enlace
            </a>{' '}
            para más información
          </p>
        ) : (
          <div>
            <p className='card-text'>
              {description.length > 200 ? description.substring(0, 199) + '...' : description}
            </p>
            <a className='btn btn-primary' href={link} target='_blank' rel='noopener noreferrer'>
              Saber más
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

function EventsDetail(props) {
  return props.markerEvent === null ? <h5>No hay eventos seleccionados</h5> : paintCard(props.markerEvent);
}

export default EventsDetail;
