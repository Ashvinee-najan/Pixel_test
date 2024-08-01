import React from 'react';
import './UserCard.css';

const UserCard = ({ user }) => {
  return (
    <tr className="user-card">
      <td>{user.id}</td>
      <td><img src ={user.image} alt =" "></img></td>
      <td>{user.firstName} {user.maidenName} {user.lastName}</td>
      <td>{user.age}/
      {user.gender}</td>
      <td>{user.company.title}</td>
                            <td>{user.address.country} ,
                            {user.address.city}</td>
    </tr>
  );
};

export default UserCard;
