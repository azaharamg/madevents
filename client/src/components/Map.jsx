import { useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import EventsDetail from './EventsDetail'
import '../stylesheet/map.scss'

const BASE_CLASS = 'map-container'

export default function Map({ filteredEvents }) {
  const [marker, setMarker] = useState(null)

  return (
    <MapContainer className={BASE_CLASS} center={[40.416775, -3.70379]} zoom={12}>
      <TileLayer
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />

      {filteredEvents?.map((event) => (
        <Marker
          id={event.id}
          data={event}
          key={event.id}
          eventHandlers={{
            click: (e) => {
              setMarker(e.target.options.data)
            }
          }}
          position={[event.location.latitude, event.location.longitude]}
        >
          <Popup>
            <EventsDetail markerEvent={marker} />
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  )
}
