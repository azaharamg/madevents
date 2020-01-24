import React from 'react';
import moment from 'moment';
import '../../stylesheet/Calendar.scss';

class Calendar extends React.Component {
  constructor() {
    super();
    this.state = {
      dateObject: moment(),
      // this.state.allmonths =  ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
      allmonths: moment.months(),
      //weekdayshort = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
      weekdayshort: moment.weekdaysShort()
    };
  }

  //Get the first day position in a month
  firstDayOfMonth = () => {
    let firstDay = moment(this.state.dateObject)
      // set to the first of this month
      .startOf('month')
      //It takes a string of tokens and replaces them with their corresponding values
      .format('d');
    return firstDay;
  };

  //Get numbers of days in a month
  daysInMonth = () => moment(this.state.dateObject).daysInMonth();

  //Find currentDay
  currentDay = () => parseInt(this.state.dateObject.format('D'));

  //Find current month
  month = () => this.state.dateObject.format('MMMM');

  render() {
    //Fill with empty string until the first day position
    let blanks = [];
    for (let i = 0; i < this.firstDayOfMonth(); i++) {
      blanks.push(
        <td key={i} className='calendar-day-empty'>
          {''}
        </td>
      );
    }

    //Fill with days the calendar and fix the current day with a specific style
    let daysInMonth = [];
    for (let d = 1; d <= this.daysInMonth(); d++) {
      daysInMonth.push(
        <td
          key={Math.random()}
          className={`calendar-day ${d === this.currentDay() || d === Number(this.props.selectedDay) ? 'today' : ''}`}
          data-value={d}
          onClick={this.props.handleSelectedDay}
        >
          {d}
        </td>
      );
    }

    //Paint the month in a table
    var totalSlots = [...blanks, ...daysInMonth];
    let cells = [];
    let rows = [];
    totalSlots.forEach((row, i) => {
      if (i % 7 !== 0) {
        cells.push(row); // if index not divisible 7 that means not go to next week
      } else {
        rows.push(cells); // when reach next week we contain all td in last week to rows
        cells = []; // empty container
        cells.push(row); // in current loop we still push current row to new container
      }
      if (i === totalSlots.length - 1) {
        // when end loop we add remain date
        rows.push(cells);
      }
    });

    return (
      <React.Fragment>
        <div className='calendar-month'>{this.month()}</div>
        <table className='calendar-day'>
          <thead>
            <tr>
              {this.state.weekdayshort.map((day, index) => (
                <th key={index} className='week-day'>
                  {day}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((d, i) => (
              <tr key={i}>{d}</tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default Calendar;
