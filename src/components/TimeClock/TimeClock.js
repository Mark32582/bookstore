import { useEffect, useState } from "react";
import Clock from "react-clock";
import "react-clock/dist/Clock.css";

const TimeClock = () => {
  const [value, setValue] = useState(new Date());
  const [employeeId, setEmployeeId] = useState();
  const [clockIn, setClockIn] = useState();
  const [clockOut, setClockOut] = useState();
  const [clocked, setClocked] = useState();

  useEffect(() => {
    const interval = setInterval(() => setValue(new Date()), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const handleClockIn = () => {
    var d = new Date(); // for now
    setClockIn([employeeId, `${d.getHours()}:${d.getMinutes()}`]);
    setTimeout(setClocked(true), 250);
  };
  const handleClockOut = () => {
    var d = new Date(); // for now
    setClockOut([employeeId, `${d.getHours()}:${d.getMinutes()}`]);
    setTimeout(setClocked(false), 250);
  };

  return (
    <div className="employee-clock">
      <div className="clock-container">
        <div className="clock">
          <h1>Current time:</h1>
          <Clock value={value} renderNumbers size="250px" />
        </div>
        <div className="buttons">
          <input
            type="text"
            onChange={(e) => setEmployeeId(e.target.value)}
            placeholder="Enter Employee ID"
            required
          />
        </div>
        <div className="buttons">
          <button onClick={handleClockIn}>Clock In</button>
          <button onClick={handleClockOut}>Clock Out</button>
        </div>
      </div>
      <div className="employee-status">
        <h1>Clock In Status</h1>
        <div className="content">
          Employee: {clocked ? clockIn?.[0] : clockOut?.[0]}
        </div>
        {clocked ? (
          <div className="content">Clocked In at: {clockIn?.[1]}</div>
        ) : (
          <div className="content">Clocked Out at: {clockOut?.[1]} </div>
        )}
      </div>
    </div>
  );
};

export default TimeClock;
