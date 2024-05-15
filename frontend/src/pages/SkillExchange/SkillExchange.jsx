import React, { useState } from "react";
import { Link } from "react-router-dom";
import AppLayout from "../../components/AppLayout";

const SkillExchange = () => {
  // Sample data for skills
  const [skills, setSkills] = useState([
    { 
        id: 1, 
        title: "Web Development", 
        description: "Web development involves building and maintaining websites. It encompasses various aspects such as front-end development" 
      },
      { 
        id: 2, 
        title: "Graphic Design", 
        description: "Graphic design is the art and practice of planning and projecting ideas and experiences with visual and textual content." 
      },
      { 
        id: 3, 
        title: "Language Learning", 
        description: "Language learning is the process of acquiring new languages through study, practice, and exposure." 
      },
      { 
        id: 4, 
        title: "Data Science", 
        description: "Data science is an interdisciplinary field that uses scientific methods, algorithms, processes, and systems to extract knowledge and insights from structured and unstructured data." 
      },
      { 
        id: 5, 
        title: "Mobile App Development", 
        description: "Mobile app development is the process of creating software applications that run on mobile devices, such as smartphones and tablets. It involves designing, building, testing, and deploying mobile apps for various platforms, including iOS and Android." 
      },
      { 
        id: 6, 
        title: "Digital Marketing", 
        description: "Digital marketing encompasses all marketing efforts that use an electronic device or the internet. Businesses leverage digital channels such as search engines, social media, email, and other websites to connect with current and prospective customers. " 
      },
      { 
        id: 7, 
        title: "Photography", 
        description: "Photography is the art, application, and practice of creating durable images by recording light, either electronically by means of an image sensor, or chemically by means of a light-sensitive material such as photographic film." 
      },
      { 
        id: 8, 
        title: "Music Production", 
        description: "Music production is the process of creating and recording music. It involves composing, arranging, recording, editing, mixing, and mastering audio tracks to produce a finished piece of music. Music producers work with artists, songwriters, and audio engineers to bring musical ideas to life and create high-quality recordings. " 
      },
      { 
        id: 9, 
        title: "Content Writing", 
        description: "Content writing is the process of planning, creating, and editing content for digital marketing purposes. It involves writing articles, blog posts, social media posts, website copy, and other types of content to engage and inform target audiences. Content writers use their writing skills, creativity, and knowledge of digital marketing ." 
      }
      // Add more skills with longer descriptions as needed
    ]);
  // State for search query
  const [searchQuery, setSearchQuery] = useState("");

  // State for sorting
  const [sortBy, setSortBy] = useState(null);

  // State for dropdown visibility
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Function to toggle dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Function to handle sorting skills
  const handleSort = (sortByValue) => {
    setSortBy(sortByValue);
  };

  // Filter skills based on search query and sorting
  let sortedSkills = [...skills];
  if (sortBy === "title") {
    sortedSkills.sort((a, b) => a.title.localeCompare(b.title));
  }

  return (
    <AppLayout>
      <div className="container mx-auto h-full flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold mt-16 mb-8 text-center">Skill Exchange Place</h1>
        <div className="w-full max-w-screen-lg mb-8">
          <div className="flex items-center justify-between">
            <input
              type="text"
              placeholder="Search for a skill..."
              className="border border-gray-300 rounded px-4 py-2 mb-4 w-full"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className="dropdown">
              <label htmlFor="sortDropdown" className="dropdown__face" onClick={toggleDropdown}>
                Sort <span className="dropdown__arrow"></span>
              </label>
              <input type="checkbox" id="sortDropdown" />
              <ul className={`dropdown__items ${isDropdownOpen ? "open" : ""}`}>
                <li onClick={() => handleSort("title")}>Title A-Z</li>
              </ul>
            </div>
            <Link to="/add-skill-request" className="create-project-button">
              Add Request
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {sortedSkills.map((skill) => (
              <div key={skill.id} className="card">
                <div className="card__content">
                  <h2 className="text-lg font-bold mb-2">{skill.title}</h2>
                  <p className="text-sm">{skill.description}</p>
                  <button className="bid-button">Exchange skill</button>
                </div>
              </div>
            ))}
          </div>
        </div>
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
            height: 300px; /* Adjust the height as needed */
          }

          .card:hover {
            box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
          }

          .card__content {
            padding: 20px;
            height: 100%; /* Make the content fill the entire card */
            display: flex;
            flex-direction: column;
            justify-content: space-between; /* Distribute space evenly */
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
            margin-bottom: 10px;

            border: none;
            border-radius: 11px;
            padding: 1px 12px;
            cursor: pointer;
            margin-left: 10px;
          }

          .create-project-button:hover {
            background-color: #0056b3;
          }
        `}
      </style>
    </AppLayout>
  );
};

export default SkillExchange;
