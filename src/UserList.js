import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UserList.css';

const UserList = () => {
  const [listOfUser, setListOfUser] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setListOfUser(response.data);
      })
      .catch(error => {
        console.error("Une erreur s'est produite lors de la récupération des utilisateurs !", error);
      });
  }, []);

  return (
    <div>
      <h1>Liste des Utilisateurs</h1>
      <ul>
        {listOfUser.map(user => (
          <li key={user.id}>
            <h2>{user.name}</h2>
            <p><span>Nom d'utilisateur:</span> {user.username}</p>
            <p><span>Email:</span> {user.email}</p>
            <p><span>Adresse:</span> {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}</p>
            <p><span>Téléphone:</span> {user.phone}</p>
            <p><span>Site web:</span> {user.website}</p>
            <p><span>Entreprise:</span> {user.company.name}</p>
            <p><span>Slogan:</span> {user.company.catchPhrase}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
