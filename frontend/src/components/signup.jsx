import React from 'react';
import Nav from './nav'; // Import the Nav component

const Home = () => {
    return (
        <div>
            <Nav /> {/* Include the Nav component */}
            
            {/* Your Home page content */}
            <div className="container mx-auto p-4">
                <h1 className="text-2xl font-bold mb-4 pt-10">Welcome to SignUp Page</h1>
                <p>Lorem ipsum...</p>
            </div>
        </div>
    );
};

export default Home;
