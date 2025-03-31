const BusList = ({ buses, onSelectBus }) => {
    return (
      <div className="mt-4 p-4 border rounded shadow-lg">
        <h2 className="text-lg font-bold">Available Buses</h2>
        {buses.length === 0 ? (
          <p>No buses available for this route.</p>
        ) : (
          <ul>
            {buses.map((bus, index) => (
              <li key={index} className="p-2 border-b">
                {bus.start} → {bus.end}{" "}
                <button
                  onClick={() => onSelectBus(bus)}
                  className="bg-green-500 text-white p-1 ml-2 rounded"
                >
                  Book Ticket
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  };
  
  export default BusList;
  