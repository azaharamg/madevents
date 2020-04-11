# ❇️ MadEvents ❇️

MadEvents is a Web application that allows users to search events in Madrid filtering by districts and / or categories so that it is easy to discover new events to attend.

## 🔸 Description

Get data of the events for the next 100 days in Madrid, through an API provided by the city council. Save the data and filter it based on user needs, it can be filtered by district and by category.

It will also allow you to see all the events on a map and interact by clicking on each one of them to obtain more information about the event of interest.

Users can share the events in social media, too.

## 🔸 Technical tools

- ReactJS responsive application
- Requests to [Google Maps](https://developers.google.com/maps/documentation/javascript/tutorial?hl=es)
- Requests to Madrid Council [`Actividades Culturales y de Ocio Municipal en los próximos 100 días`](https://datos.madrid.es/nuevoMadrid/swagger-ui-master-2.2.10/dist/index.html?url=/egobfiles/api.datos.madrid.es.json#!/Actividades32Culturales32y32de32Ocio32Municipal32en32los32pr243ximos3210032d237as/agenda_eventos_culturales_100_json)
- Layout with Boostrap 4 and Sass
- Express to avoid CORS
- Heroku to deploy the application

## 🔸 Installation

To use the project in local, you need to install the dependencies of the project with `npm install` and start a local server with `npm start` in client folder. Also you need to execute `npm start` in the project's root folder to run the express server.
