import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Select from 'react-select';

const InterviewScheduleBoard = () => {
  const [selectedDates, setSelectedDates] = useState([]);
  const [selectedTimes, setSelectedTimes] = useState({});
  const [selectedTime, setSelectedTime] = useState(null);

  // Sample time options for selection
  const timeOptions = generateTimeOptions();

  // Function to generate time options (from current time onwards)
  function generateTimeOptions() {
    const timeOptions = [];
    const periods = ['AM', 'PM'];
  
    for (let h = 0; h < 24; h++) {
      for (let m = 0; m < 60; m += 15) {
        const hour12 = h % 12 === 0 ? 12 : h % 12;
        const formattedTime = `${String(hour12).padStart(2, '0')}:${String(m).padStart(2, '0')} ${periods[Math.floor(h / 12)]}`;
        timeOptions.push({ value: formattedTime, label: formattedTime });
      }
    }
  
    return timeOptions;
  }

  const handleDateChange = (date) => {
    const isAlreadySelected = selectedDates.some((selectedDate) =>
      isSameDay(selectedDate, date)
    );

    if (isAlreadySelected) {
      handleDateUnselect(date);
    } else if (isDateSelectable(date)) {
      setSelectedDates((prevSelectedDates) => [...prevSelectedDates, date]);
    }
  };

  const handleDateUnselect = (date) => {
    setSelectedDates((prevSelectedDates) =>
      prevSelectedDates.filter((selectedDate) => !isSameDay(selectedDate, date))
    );
    setSelectedTimes((prevSelectedTimes) => {
      const updatedTimes = { ...prevSelectedTimes };
      delete updatedTimes[date.toISOString()];
      return updatedTimes;
    });
  };

  const handleTimeChange = (time, date) => {
    setSelectedTimes((prevSelectedTimes) => ({
      ...prevSelectedTimes,
      [date.toISOString()]: { ...prevSelectedTimes[date.toISOString()], from: time },
    }));
  };

  const handleToTimeChange = (time, date) => {
    setSelectedTimes((prevSelectedTimes) => ({
      ...prevSelectedTimes,
      [date.toISOString()]: { ...prevSelectedTimes[date.toISOString()], to: time },
    }));
  };

  const handleScheduleInterview = () => {
    // Here you can handle the logic to save the interview schedule
    if (selectedDates.length > 0 && Object.keys(selectedTimes).length > 0) {
      // Perform necessary actions (e.g., API calls, saving to a database)
      console.log('Scheduled Interviews:', selectedTimes);
    } else {
      alert('Please select at least one date and time for each date.');
    }
  };

  const tileClassName = ({ date }) => {
    const isActive = selectedDates
      .slice(-5) // Get the last 5 selected dates
      .some((selectedDate) => isSameDay(selectedDate, date));

    return isActive ? 'react-calendar__tile--active' : null;
  };

  const calendarStyle = {
    padding: '10px', // Add some padding to the calendar container (optional)
  };

  const formatDate = (date) => {
    const day = String(date.getDate()).padStart(2, '0');
    const month = date.toLocaleString('default', { month: 'long' });
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
  };

  // Custom function to compare two dates
  const isSameDay = (dateA, dateB) =>
    dateA.getDate() === dateB.getDate() &&
    dateA.getMonth() === dateB.getMonth() &&
    dateA.getFullYear() === dateB.getFullYear();

  // Custom function to check if the date is selectable (max 5 dates allowed)
  const isDateSelectable = (date) =>
    !selectedDates.some((selectedDate) => isSameDay(selectedDate, date)) &&
    selectedDates.length < 5;

  return (
    <div>
       <div className="calendar-container" style={calendarStyle}>
        <Calendar
          onChange={handleDateChange}
          value={selectedDates}
          minDate={new Date()}
          tileClassName={tileClassName}
          tileDisabled={({ activeStartDate, date, view }) =>
            view === 'month' && !isDateSelectable(date)
          }
        />
      </div>

      {selectedDates.map((date) => (
        <div key={date.toISOString()} className="time-container">

          <p>{formatDate(date)}</p>
          <label>From:</label>
          <Select
            options={timeOptions}
            value={selectedTimes[date.toISOString()]?.from}
            onChange={(time) => handleTimeChange(time, date)}
          />
          <label>To:</label>
          <Select
            options={timeOptions}
            value={selectedTimes[date.toISOString()]?.to}
            onChange={(time) => handleToTimeChange(time, date)}
          />
        </div>
      ))}
      <button onClick={handleScheduleInterview}>Schedule Interview</button>
    </div>
  );
};

export default InterviewScheduleBoard;
