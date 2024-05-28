import React, { useState } from "react";
import { IoIosWarning } from "react-icons/io";
import { RxDrawingPinFilled } from "react-icons/rx";

export default function Table() {
  const initialRatings = {
    1: { 1: 5, 2: 3, 3: 4, 4: 2, 5: null },
    2: { 1: 3, 2: 5, 3: 1, 4: 3, 5: 3 },
    3: { 1: 4, 2: null, 3: 4, 4: 3, 5: 5 },
    4: { 1: 3, 2: 3, 3: null, 4: 5, 5: 4 },
    5: { 1: null, 2: 5, 3: 5, 4: 2, 5: 1 },
  };

  const [ratings, setRatings] = useState(initialRatings);
  const [predictedRatings, setPredictedRatings] = useState(null);
  const [coldStartMessage, setColdStartMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSelectChange = (userId, itemId, value) => {
    setRatings((prevRatings) => ({
      ...prevRatings,
      [userId]: {
        ...prevRatings[userId],
        [itemId]: value !== "" ? parseInt(value) : null,
      },
    }));
  };

  const fetchRatings = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://127.0.0.1:5000/update", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ratings }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch ratings");
      }

      const data = await response.json();
      if (data.success) {
        setPredictedRatings(data.ratings);
        setColdStartMessage(
          data.cold_start_problem ? `Cold Start Problem detected!` : ""
        );
      }
    } catch (error) {
      console.error("Error fetching ratings:", error);
    } finally {
      setLoading(false);
    }
  };

  const renderEditableTable = () => {
    const users = Object.keys(ratings);
    const items = Array.from({ length: 5 }, (_, i) => i + 1);

    return (
      <div>
        <p
          id="user-item-ratings-table"
          className="group lg:mt-10 text-2xl font-bold lg:text-3xl text-[#23272F] dark:text-[#F6F7F9] mb-4"
        >
          <a className="flex items-center" href="#user-item-ratings-table">
            User-Item Ratings Table
            <RxDrawingPinFilled className="ml-2 text-2xl lg:text-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        </p>
        <table className="text-center">
          <thead>
            <tr>
              <th className="border text-white bg-[#1F4F8D] border-gray-400 md:px-4 md:py-2">
                User-Item
              </th>
              {items.map((itemId) => (
                <th
                  key={itemId}
                  className="bg-[#1F4F8D] text-white border border-gray-400 md:px-4 md:py-4 py-1 px-1"
                >
                  Item {itemId}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {users.map((userId) => (
              <tr key={userId}>
                <td className="bg-[#1F4F8D] font-bold text-white border border-gray-400 md:px-4 md:py-2 px-1">
                  User {userId}
                </td>
                {items.map((itemId) => {
                  const value = ratings[userId][itemId];
                  return (
                    <td key={itemId} className="border bg-white px-4 py-2">
                      <select
                        value={value === null ? "" : value}
                        onChange={(e) =>
                          handleSelectChange(userId, itemId, e.target.value)
                        }
                        className="appearance-none  border dark:text-black bg-white text-center w-full text-lg md:px-4 md:py-2 py-1 focus:outline-none"
                      >
                        <option value="">?</option>
                        {[1, 2, 3, 4, 5].map((val) => (
                          <option key={val} value={val}>
                            {val}
                          </option>
                        ))}
                      </select>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  const renderPredictedTable = () => {
    if (!predictedRatings) return null;

    const users = Object.keys(predictedRatings);
    const items = Array.from({ length: 5 }, (_, i) => i + 1);
    console.log(ratings);
    console.log(predictedRatings);

    return (
      <>
        <p className=" lg:mt-10 text-2xl font-bold lg:text-3xl text-[#23272F] dark:text-[#F6F7F9]">
          Predicted Ratings Table
        </p>

        <table className="text-center mt-4">
          <thead>
            <tr>
              <th className="border text-white bg-[#1F4F8D] border-gray-400 md:px-4 md:py-2">
                User-Item
              </th>
              {items.map((itemId) => (
                <th
                  key={itemId}
                  className="bg-[#1F4F8D] text-white border border-gray-400 md:px-4 md:py-4 py-1 px-1"
                >
                  Item {itemId}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {users.map((userId) => (
              <tr key={userId}>
                <td className="bg-[#1F4F8D] font-bold text-white border border-gray-400 md:px-4 md:py-4 px-1 py-4">
                  User {parseInt(userId)}
                </td>
                {items.map((itemId) => {
                  const userRatings = predictedRatings[userId];
                  const ratingObj = userRatings.find(
                    (r) => r[itemId] !== undefined
                  );
                  const rating = ratingObj ? ratingObj[itemId] : "?";
                  return (
                    <td
                      key={itemId}
                      className="border dark:text-black bg-white text-center text-lg md:px-4 md:py-2 py-1"
                    >
                      {rating}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  };

  return (
    <div>
      {renderEditableTable()}

      <button
        onClick={fetchRatings}
        className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 ${
          loading ? "opacity-50 cursor-not-allowed" : ""
        }`}
        disabled={loading}
      >
        Show Predictions
      </button>
      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-100 bg-opacity-50">
          <div className="loader"></div>
        </div>
      )}

      <div className="mt-6">{renderPredictedTable()}</div>
      {coldStartMessage && (
        <div className="flex flex-col p-7 rounded-xl bg-[#f8c4c4] dark:bg-[#6a3c3c] lg:mt-6 mt-6 lg:max-w-4xl text-sm lg:text-base leading-7">
          <p className="mb-5 font-bold flex">
            <IoIosWarning className="text-2xl mr-4" />
            <span>Alert</span>
          </p>
          <p>{coldStartMessage}</p>
          <a href="/learn/collaborative-filtering#cold-start-problem">
            <u>Learn more</u>
          </a>
        </div>
      )}
    </div>
  );
}
