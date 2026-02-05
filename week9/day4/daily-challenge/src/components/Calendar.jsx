import { useDispatch, useSelector } from 'react-redux';
import { setSelectedDate } from '../features/planner/plannerSlice';

const Calendar = () => {
    const dispatch = useDispatch();
    const selectedDate = useSelector((state) => state.planner.selectedDate);

    return (
        <div className="calendar">
            <label htmlFor="date-picker">Select Date: </label>
            <input
                id="date-picker"
                type="date"
                value={selectedDate}
                onChange={(e) => dispatch(setSelectedDate(e.target.value))}
            />
        </div>
    );
};

export default Calendar;
