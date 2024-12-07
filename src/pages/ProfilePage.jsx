import React from 'react';

const ProfilePage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl mb-4">User Profile</h1>
      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-2xl mb-2">Username</h2>
        <p className="mb-4">User's tasks and profile details will be displayed here.</p>
      </div>
    </div>
  );
};

export default ProfilePage;
