import { useSelector } from "react-redux";
import React, { useState, useEffect } from 'react';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
const SERVER_API_URL = process.env.REACT_APP_SERVER_API_URL;
const USERS_URL = `${SERVER_API_URL}/users`;

function ClientScreen() {
    const [users, setUsers] = useState([]);
    
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch(USERS_URL);
                if (!response.ok) {
                    throw new Error('Failed to fetch users');
                }
                const data = await response.json();
                setUsers(data);
            } catch (error) {
                console.error("There was an error fetching the users:", error);
            }
        };

        fetchUsers();
    }, []);

    return (
        <div className="container mt-4 bg-light p-4 rounded">
            <h1><i className="fa fa-paw mr-2 margin-right-icon"></i>Potential Client Dashboard</h1>

            {users.filter(user => user.role === "Owner").map(user => (
                <div key={user.id} className="card my-3">
                    <div className="card-header">
                        <i className="fa fa-user mr-2 margin-right-icon"></i><strong>{user.firstName} {user.lastName}</strong>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-8">
                                <i className="fa fa-dog mr-2 margin-right-icon"></i><strong>Dogs Owned:</strong>
                                <ul>
                                    {user.dogs.map(dog => (
                                        <li key={dog._id}><i className="fa fa-bone mr-2 margin-right-icon"></i>{dog.name} - {dog.breed}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="col-md-4">
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ClientScreen;
