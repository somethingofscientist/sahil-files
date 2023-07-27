import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Select from 'react-select';

const InterviewScheduleBoard = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  // Sample time options for selection
  const timeOptions = generateTimeOptions();

  // Function to generate time options (from current time onwards)
  function generateTimeOptions() {
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();

    const timeOptions = [];
    for (let h = hours; h <= 23; h++) {
      for (let m = h === hours ? minutes : 0; m < 60; m += 15) {
        const formattedTime = `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`;
        timeOptions.push({ value: formattedTime, label: formattedTime });
      }
    }
    return timeOptions;
  }

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleTimeChange = (time) => {
    setSelectedTime(time);
  };

  const handleScheduleInterview = () => {
    // Here you can handle the logic to save the interview schedule
    if (selectedDate && selectedTime) {
      // Perform necessary actions (e.g., API calls, saving to a database)
      console.log('Scheduled Interview:', selectedDate, selectedTime);
    } else {
      alert('Please select both date and time.');
    }
  };

  return (
    <div>
      <h1>Interview Schedule Board</h1>
      <div className="calendar-container">
        <h2>Select Interview Date:</h2>
        <Calendar onChange={handleDateChange} value={selectedDate} minDate={new Date()} />
      </div>
      <div className="time-container">
        <h2>Select Interview Time:</h2>
        <Select
          options={timeOptions}
          value={selectedTime}
          onChange={handleTimeChange}
        />
      </div>
      <button onClick={handleScheduleInterview}>Schedule Interview</button>
    </div>
  );
};

export default InterviewScheduleBoard;
