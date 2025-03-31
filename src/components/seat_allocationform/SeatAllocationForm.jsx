import { useState, useEffect } from "react";

const SeatAllocationForm = ({ onSearch }) => {
  const [passengerName, setPassengerName] = useState("");
  const [startStop, setStartStop] = useState("");
  const [endStop, setEndStop] = useState("");
  const [stops, setStops] = useState([]); // State to store fetched stops

  // Fetch stops from backend when component mounts
  useEffect(() => {
    fetch("http://127.0.0.1:8000/seatallocs/get-stops/")
      .then((response) => response.json())
      .then((data) => {
        setStops(data.stops); // Assuming the backend response is {"stops": ["Stop1", "Stop2", ...]}
      })
      .catch((error) => console.error("Error fetching stops:", error));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    onSearch(passengerName, startStop, endStop);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded shadow-lg">
      <div>
        <label>Passenger Name:</label>
        <input
          type="text"
          value={passengerName}
          onChange={(e) => setPassengerName(e.target.value)}
          required
          className="border p-2 rounded w-full"
        />
      </div>
      <div>
        <label>Start Stop:</label>
        <select
          value={startStop}
          onChange={(e) => setStartStop(e.target.value)}
          required
          className="border p-2 rounded w-full"
        >
          <option value="">Select Start Stop</option>
          {stops.map((stop, index) => (
            <option key={index} value={stop}>
              {stop}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>End Stop:</label>
        <select
          value={endStop}
          onChange={(e) => setEndStop(e.target.value)}
          required
          className="border p-2 rounded w-full"
        >
          <option value="">Select End Stop</option>
          {stops.map((stop, index) => (
            <option key={index} value={stop}>
              {stop}
            </option>
          ))}
        </select>
      </div>
      <button type="submit" className="bg-blue-500 text-white p-2 mt-3 rounded">
        Search Buses
      </button>
    </form>
  );
};

export default SeatAllocationForm;
