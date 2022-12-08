import '../stylesheet/eventDetail.scss'

import Card from 'react-bootstrap/Card'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

function paintCard(markerEvent) {
  const { title, time, description, link } = markerEvent
  const message = `¿Te vienes a este evento? Es sobre ${description} `

  return (
    <Card className='card'>
      <Card.Header className='card__header'>
        <Card.Title>{title}</Card.Title>
      </Card.Header>
      <Card.Body>
        {time === '' ? '' : <h5>Horario: {time}</h5>}
        {description === '' ? (
          <Card.Text>
            Visite el siguiente
            <a href={link} target='_blank' rel='noopener noreferrer'>
              {' '}
              enlace{' '}
            </a>
            para más información
          </Card.Text>
        ) : (
          <Card.Body>
            <Card.Text>{description.length > 200 ? description.substring(0, 199) + '...' : description}</Card.Text>
            <Card.Link className='btn btn-primary' href={link} target='_blank' rel='noopener noreferrer'>
              Saber más
            </Card.Link>
            <Card.Link
              href={`https://twitter.com/intent/tweet?text=${message}%20%23FunnyEvents%20https://media.giphy.com/media/3EfgWHj0YIDrW/giphy.gif`}
              title='Comparte en twitter'
              rel='noopener noreferrer'
              target='_blank'
            >
              <i>
                <FontAwesomeIcon icon={faTwitter} />
              </i>
            </Card.Link>
          </Card.Body>
        )}
      </Card.Body>
    </Card>
  )
}

export default function EventsDetail(props) {
  return props.markerEvent === null ? <h4>No hay eventos seleccionados</h4> : paintCard(props.markerEvent)
}
