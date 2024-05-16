import React, { useState } from "react";
import AppLayout from "../components/AppLayout";
import { Link } from 'react-router-dom';

const PaidProjects = () => {
  // Sample data for projects
  const [projects, setProjects] = useState([
    { id: 1, title: "Web Development Project", description: "Build a website using HTML, CSS, and JavaScript.", date: "2024-05-20", time: "10:00 AM", country: "USA", location: "New York" },
    { id: 2, title: "Mobile App Development Project", description: "Develop a mobile application for iOS and Android platforms.", date: "2024-05-25", time: "2:00 PM", country: "Canada", location: "Toronto" },
    { id: 3, title: "Graphic Design Project", description: "Create a logo and branding materials for a startup.", date: "2024-05-22", time: "1:00 PM", country: "UK", location: "London" },
    { id: 4, title: "Data Analysis Project", description: "Analyze a dataset using Python and visualize the results.", date: "2024-05-24", time: "11:00 AM", country: "Australia", location: "Sydney" },
    // Add more projects as needed
  ]);

  // State for search query
  const [searchQuery, setSearchQuery] = useState("");

  // State for sorting
  const [sortBy, setSortBy] = useState(null);
  
  // State for dropdown visibility
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // State for showing create project form
  const [showCreateForm, setShowCreateForm] = useState(false);

  // State for new project data
  const [newProject, setNewProject] = useState({
    title: "",
    description: "",
    time: ""
  });

  // Function to toggle dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Function to handle sorting projects
  const handleSort = (sortByValue) => {
    setSortBy(sortByValue);
  };

  // Function to handle sorting order toggle
  const toggleSortOrder = () => {
    setProjects([...projects.reverse()]);
  };

  // Function to handle bidding on a project
  const handleBid = (projectId) => {
    // Here you can implement the logic to send a bid
    // For now, we'll just show a notification
    alert("Bid sent for project with ID: " + projectId);
  };

  // Function to handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProject({
      ...newProject,
      [name]: value
    });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can implement the logic to create a new project
    // For now, we'll just log the new project data
    console.log("New Project:", newProject);
    // Reset form fields and hide the form
    setNewProject({
      title: "",
      description: "",
      time: ""
    });
    setShowCreateForm(false);
  };

  // Filter projects based on search query and sorting
  let sortedProjects = [...projects];
  if (sortBy === "title") {
    sortedProjects.sort((a, b) => a.title.localeCompare(b.title));
  } else if (sortBy === "date") {
    sortedProjects.sort((a, b) => new Date(a.date + " " + a.time) - new Date(b.date + " " + b.time));
  }

  return (
    <AppLayout>
      <div className="container mx-auto h-full flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold mt-16 mb-8 text-center">Paid Projects</h1>
        <div className="w-full max-w-screen-lg mb-8">
          <div className="flex items-center justify-between">
            <input
              type="text"
              placeholder="Search for a project..."
              className="border border-gray-300 rounded px-4 py-2 mb-4 w-full"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
            />
            <div className="dropdown">
              <label htmlFor="sortDropdown" className="dropdown__face" onClick={toggleDropdown}>
                Sort <span className="dropdown__arrow"></span>
              </label>
              <input type="checkbox" id="sortDropdown" />
              <ul className={`dropdown__items ${isDropdownOpen ? "open" : ""}`}>
                <li onClick={() => handleSort("title")}>Title A-Z</li>
                <li onClick={() => handleSort("title")}>Title Z-A</li>
                <li onClick={() => handleSort("date")}>Date</li>
                <li onClick={toggleSortOrder}>Time</li>
              </ul>
            </div>
            <button onClick={() => setShowCreateForm(true)} className="create-project-button">
            <Link to="/create" className="pr-3 pl-3 pb-2 pt-1 text-black mr-3  hover:bg-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                        
                Create Project
                    </Link>
                    </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {sortedProjects.map(project => (
              <div key={project.id} className="card">
                <div className="card__content">
                  <h2 className="text-lg font-bold mb-2">{project.title}</h2>
                  <p className="text-sm">{project.description}</p>
                  <p className="text-sm">Date: {project.date}, Time: {project.time}</p>
                  <p className="text-sm">Country: {project.country}, Location: {project.location}</p>
                  <button onClick={() => handleBid(project.id)} className="bid-button">Bid</button>
                </div>
              </div>
            ))}
          </div>
        </div>
        {showCreateForm && (
          <div className="create-form">
            <h2>Create Project</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="title">Title:</label>
                <input type="text" id="title" name="title" value={newProject.title} onChange={handleInputChange} />
              </div>
              <div className="form-group">
                <label htmlFor="description">Description:</label>
                <textarea id="description" name="description" value={newProject.description} onChange={handleInputChange} />
              </div>
              <div className="form-group">
                <label htmlFor="time">Time:</label>
                <input type="text" id="time" name="time" value={newProject.time} onChange={handleInputChange} />
              </div>
              <button type="submit">Create</button>
            </form>
          </div>
        )}
      </div>
      <style>
        {`
          .card {
            background-color: #fff;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            transition: box-shadow 0.3s ease-in-out;
            cursor: pointer;
          }

          .card:hover {
            box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
          }

          .card__content {
            padding: 20px;
          }

          .dropdown {
            position: relative;
            width: 150px;
          }

          .dropdown__face,
          .dropdown__items {
            background-color: #fff;
            margin-bottom: 14px;
            padding: 8px;
            border-radius: 8px;
            border: 1px solid #ccc;
            cursor: pointer;
          }

          .dropdown__face {
            display: block;
          }

          .dropdown__items {
            position: absolute;
            top: calc(100% + 8px);
            left: 0;
            width: 100%;
            list-style: none;
            padding: 0;
            margin: 0;
            z-index: 999;
            display: none;
          }

          .dropdown__items.open {
            display: block;
          }

          .dropdown__items li {
            padding: 8px;
            border-bottom: 1px solid #ccc;
          }

          .dropdown__items li:last-child {
            border-bottom: none;
          }

          .dropdown__items li:hover {
            background-color: #f5f5f5;
          }

          .dropdown input[type="checkbox"] {
            display: none;
          }

          .dropdown input[type="checkbox"]:checked + .dropdown__items {
            display: block;
          }

          .dropdown__arrow {
            position: absolute;
            right: 8px;
            top: 50%;
            margin-top: -4px;
            width: 0;
            height: 0;
            border-left: 4px solid transparent;
            border-right: 4px solid transparent;
            border-top: 4px solid #000;
          }

          .bid-button {
            background-color: #007bff;
            color: #fff;
            border: none;
            border-radius: 4px;
            padding: 8px 16px;
            cursor: pointer;
          }

          .bid-button:hover {
            background-color: #0056b3;
          }

          .create-project-button {
            background-color: #007bff;
            color: none;
            border: none;
            margin-bottom: 10px;
            border-radius: 11px;
            padding: 1px 10px;
            cursor: pointer;
            margin-left: 10px;
          }

          .create-project-button:hover {
            background-color: #0056b3 ;
          }

          .create-form {
            background-color: #fff;
            border-radius: 10px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            padding: 20px;
            margin-top: 20px;
          }

          .form-group {
            margin-bottom: 20px;
          }

          label {
            display: block;
            margin-bottom: 5px;
          }

          input[type="text"],
          textarea {
            width: 100%;
            padding: 8px;
            border-radius: 4px;
            border: 1px solid #ccc;
          }

          button[type="submit"] {
            background-color: #007bff;
            color: #fff;
            border: none;
            border-radius: 4px;
            padding: 8px 16px;
            cursor: pointer;
          }

          button[type="submit"]:hover {
            background-color: #0056b3;
          }
        `}
      </style>
    </AppLayout>
  );
};

export default PaidProjects;
