import React from 'react';
import UserCard from './UserCard';


const UserList = ({ users, loading , currentPost }) => {
  return (
    <table className="user-list">
      <thead>
        <tr>
          <th>ID</th>
          <th>Image</th>
          <th> Full Name</th>
          <th>Demography</th>
          <th>Designation</th>
          <th>Location</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <UserCard key={user.id} user={user


          } />
        ))}
        {loading && (
          <tr>
            <td colSpan="5">Loading...</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default UserList;
