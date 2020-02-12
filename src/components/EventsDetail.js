import React from 'react';

function EventsDetail(props) {
	const { title, time, description, link } = props.markerEvent;
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
						<p className='card-text'>Descripción: {description}</p>
						<a className='btn btn-primary' href={link} target='_blank' rel='noopener noreferrer'>
							Saber más
						</a>
					</div>
				)}
			</div>
		</div>
	);
}

export default EventsDetail;
