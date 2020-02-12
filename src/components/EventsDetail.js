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
				<h5 className='card-title'>Horario: {time}</h5>
				<p className='card-text'>Descripción: {description}</p>
				<a className='btn btn-primary' href={link} target='_blank' rel='noopener noreferrer'>
					Saber más
				</a>
			</div>
		</div>
	);
}

export default EventsDetail;
