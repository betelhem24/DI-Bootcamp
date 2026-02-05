import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedDate, selectSelectedDate } from '../features/planner/plannerSlice';

const Calendar = () => {
    const dispatch = useDispatch();
    const selectedDate = useSelector(selectSelectedDate);

    const handleDateChange = (e) => {
        dispatch(setSelectedDate(e.target.value));
    };

    return (
        <div className="calendar-container">
            <h2>Select Day</h2>
            <input
                type="date"
                value={selectedDate}
                onChange={handleDateChange}
                className="date-picker"
            />
        </div>
    );
};

export default Calendar;
