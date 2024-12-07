import React from 'react';

const ProfilePage = () => {
  return (
    <div className="container mx-auto p-4 bg-white rounded-lg shadow-md md:p-6 lg:p-8">
      <h1 className="text-3xl font-bold mb-6 text-center md:text-4xl">User Profile</h1>
      <div className="text-center">
        <p className="text-lg mb-4">Details about the user and their tasks will be displayed here.</p>
      </div>
    </div>
  );
};

export default ProfilePage;
