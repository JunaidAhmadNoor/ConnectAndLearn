import React, { useState, useEffect } from "react";
import AppLayout from "../../components/AppLayout";
import axios from "axios"; // Import Axios
import { Card, Button, Space, Input, Flex } from "antd"; // Import Card and Button components from Ant Design
import { Link } from "react-router-dom"; // Import Link component from React Router
import { ArrowRightOutlined } from "@ant-design/icons";
import { toast } from "react-hot-toast";

const GroupStudy = () => {
  const [inputValue, setInputValue] = useState("");
  const [spaces, setSpaces] = useState([]);

  useEffect(() => {
    // Fetch data from the backend API when the component mounts
    const fetchData = async () => {
      try {
        const response = await axios.get("/spaces");
        setSpaces(response.data.spaces);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Run this effect only once when the component mounts

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send a POST request to create a new space
      const response = await axios.post("/newSpace", { Name: inputValue });
      // If the request is successful, show success toast and update the spaces
      toast.success("Space Entered Successfully");
      setInputValue("");
      fetchSpaces(); // Fetch updated list of spaces
    } catch (error) {
      // Handle errors if any
      if (error.response && error.response.data && error.response.data.error) {
        // If the error response contains a custom error message, show it
        console.log(error.response);
        toast.error(error.response.message);
      } else {
        // If no custom error message, log the error to the console\
        console.log(error);
        console.error(error.message);
        toast.error(error.response.data.message);
      }
    }
  };

  const fetchSpaces = async () => {
    try {
      const response = await axios.get("/spaces");
      setSpaces(response.data.spaces);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <AppLayout>
      <div>
        <form onSubmit={handleSubmit} className="mt-24">
          <div className="flex items-center justify-center">
            <div className="flex items-center border border-gray-300 rounded-full overflow-hidden">
              <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Enter New Space"
                className="w-72 py-2 px-4 outline-none focus:shadow-xl"
              />
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 hover:bg-blue-600 focus:outline-none"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>

      
      <div className="grid ml-64 gap-8 md:grid-cols-3 lg:gap-12 p-6 md:p-10 mt-3">
        {spaces.map((space) => (
          <Link
            key={space._id}
            to={`/Details/${space._id}`}
            className="flex flex-col p-6 space-y-6 transition-all duration-500 bg-white border border-indigo-100 rounded-lg shadow hover:shadow-xl lg:p-8 lg:flex-row lg:space-y-0 lg:space-x-6"
          >
            <div className="flex items-center justify-center w-16 h-16 bg-green-100 border border-green-200 rounded-full shadow-inner lg:h-20 lg:w-20">
              <svg
                className="w-10 h-10 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                ></path>
              </svg>
            </div>
            <div className="flex-1">
              <h5 className="mb-3 text-xl font-bold lg:text-2xl">
                {space.Name}
              </h5>
              <span className="flex items-baseline text-lg font-bold text-indigo-600">
                View details
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </span>
            </div>
          </Link>
        ))}
      </div>
    </AppLayout>
  );
};

export default GroupStudy;
{/* <div className="grid grid-cols-3 gap-4 ml-64 mr-10 mb-4 mt-10">
        {spaces.map((space) => (
          <div key={space._id} className="rounded overflow-hidden shadow-lg">
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{space.Name}</div>
              <Link to={`/Details/${space._id}`}>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
                  OPEN <ArrowRightOutlined className="ml-1" />
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div> */}