import {useState} from 'react';
import './CalendarComponent.css'
import SvgArrowButton from "../Buttons/ArrowButton"

function daysInMonth (month, year) { // Use 1 for January, 2 for February, etc.
    return new Date(year, month, 0).getDate();
}

const CalendarComponent = () => {
    // variables for generating calendar
    const [month, setMonth] = useState(new Date().getMonth())
    const [year, setYear] = useState(new Date().getFullYear())
    const [selected_day, setSelectedDay] = useState(new Date(1, 1, 1))
    
    const updateMonth = (offset) => {
      setMonth(month + offset)
      if (month >= 12) {
        setMonth(0 + (offset - 1))
        setYear(year + 1)
      } else if (month < 0) {
        setMonth(11 + (offset + 1))
        setYear(year - 1)
      }
    }

    const selectDay = (key) => {
      key = key.split(" ")
      const identifier = key[0]
      const num = parseInt(key[1])
      
      if (identifier === "past") {
        updateMonth(-1)
      }
      else if (identifier === "day") {
        setSelectedDay(new Date(year, month, num))
      }
      else if (identifier === "future") {
        updateMonth(1)
      } else if (identifier === "selected") {
        setSelectedDay(new Date(1, 1, 1))
      }
    }

    var base_day = new Date(year, month, 1)

    // Get day list for calendar
    var days = []
    var running = true
    var total_days = 0
    var day_index;

    for (var i = 0; i < base_day.getDay(); i++) {
      day_index = daysInMonth(base_day.getMonth(), base_day.getFullYear()) - base_day.getDay() + i + 1
      days.push(
        <li 
          className='day-preview' 
          key = {"past " + day_index} 
          day-key = {"past " + day_index} 
          onClick={(props) => selectDay(props.target.getAttribute("day-key"))}
        >
          {day_index}
        </li>
      )
      total_days += 1
    }

    day_index = 1

    while (running) {
        if (day_index >= daysInMonth(base_day.getMonth() + 1, base_day.getFullYear())) {
            running = false
        }
        if (day_index === selected_day.getDate() && base_day.getMonth() === selected_day.getMonth() && base_day.getFullYear() === selected_day.getFullYear()) {
          days.push(
            <li 
              className='date-entry' 
              key = {"day " + day_index} 
              day-key = {"selected " + day_index} 
              id = "selected-day"
              onClick={(props) => selectDay(props.target.getAttribute("day-key"))}
            >
              {day_index}
          </li>
          )
        } else {
          days.push(
            <li 
              className='date-entry' 
              key = {"day " + day_index} 
              day-key = {"day " + day_index} 
              onClick={(props) => selectDay(props.target.getAttribute("day-key"))}
            >
              {day_index}
            </li>
          )
        }
        day_index += 1
    }

    day_index += -1
    total_days += day_index
    day_index = 1

    while (total_days % 7 !== 0) {
      days.push(
        <li 
          className='day-preview' 
          key = {"future " + day_index} 
          day-key = {"future " + day_index} 
          onClick={(props) => selectDay(props.target.getAttribute("day-key"))}
        >
          {day_index}
        </li>
      )
      day_index += 1
      total_days += 1
    }

    // Return Calendar
    return (
        <div className="calendar-container">
          <div className="calendar-header">
            <SvgArrowButton id="prev-button" onClick={() => updateMonth(-1)} />
            <h2 id="calendar-header">{base_day.toLocaleString('default', { month: 'long' })} {base_day.getFullYear()}</h2>
            <SvgArrowButton id="next-button" onClick={() => updateMonth(1)} />
          </div>
          <ul className="weekdays">
            <li className='weekday-name' key={"sunday"}>
              <abbr title="S">Sunday</abbr>
            </li>
            <li className='weekday-name' key={"monday"}>
              <abbr title="M">Monday</abbr>
            </li>
            <li className='weekday-name' key={"tuesday"}>
              <abbr title="T">Tuesday</abbr>
            </li>
            <li className='weekday-name' key={"wednesday"}>
              <abbr title="W">Wednesday</abbr>
            </li>
            <li className='weekday-name' key={"thursday"}>
              <abbr title="T">Thursday</abbr>
            </li>
            <li className='weekday-name' key={"friday"}>
              <abbr title="F">Friday</abbr>
            </li>
            <li className='weekday-name' key={"saturday"}>
              <abbr title="S">Saturday</abbr>
            </li>
          </ul>

          <ol className="day-grid">
            {days}
          </ol>
          <br />
        </div>
    )
}

export default CalendarComponent;