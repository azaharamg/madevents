import { Map, GoogleApiWrapper, Marker } from 'google-maps-react'
import '../stylesheet/mapContainer.scss'
const style = {
  width: '100%',
  height: '50vh'
}

function MapContainer({ filteredEvents, google, handleShowdetails }) {
  const onHandleShowdetails = (marker) => {
    handleShowdetails(marker)
  }

  return (
    <Map
      google={google}
      className='map__containter'
      style={style}
      zoom={11}
      initialCenter={{ lat: 40.416775, lng: -3.70379 }}
    >
      {filteredEvents.map((event) => {
        const lat = event.location.latitude
        const lng = event.location.longitude
        return <Marker key={event.id} id={event.id} position={{ lat: lat, lng: lng }} onClick={onHandleShowdetails} />
      })}
    </Map>
  )
}

export default GoogleApiWrapper({
  key: process.env.REACT_APP_MAP_API_KEY
})(MapContainer)
