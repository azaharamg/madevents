import React from 'react';
import '../stylesheet/eventDetail.scss';

const paintCard = markerEvent => {
	const { title, time, description, link } = markerEvent;
	return (
		<div className='card'>
			<div className='card-header'>
				{title}
				<button type='button' className='close' data-dismiss='modal' aria-label='Close'>
					<span aria-hidden='true'>&times;</span>
				</button>
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
							{description.length > 100 ? description.substring(0, 99) + '...' : description}
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
