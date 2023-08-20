import { useSelector } from "react-redux";
import React, { useState, useEffect } from 'react';
import axios from "axios";
import './competition.css'
import 'bootstrap/dist/css/bootstrap.min.css';
const SERVER_API_URL = process.env.REACT_APP_SERVER_API_URL;
const USERS_URL = `${SERVER_API_URL}/users`;
const calculateStatistics = (products) => {
    if (!products.length) return {};

    const prices = products.map(product => parseFloat(product.price)).sort((a, b) => a - b);

    const average = (prices.reduce((acc, val) => acc + val, 0) / prices.length).toFixed(2);


    let median = 0;
    const middle = Math.floor(prices.length / 2);
    if (prices.length % 2 === 0) {
        median = ((prices[middle - 1] + prices[middle]) / 2).toFixed(2);
    } else {
        median = prices[middle].toFixed(2);
    }

    const frequency = {};
    let maxFrequency = 0;
    let mode = [];
    for (let price of prices) {
        frequency[price] = (frequency[price] || 0) + 1;
        if (frequency[price] > maxFrequency) {
            maxFrequency = frequency[price];
            mode = [price];
        } else if (frequency[price] === maxFrequency) {
            mode.push(price);
        }
    }
    mode = mode.map(price => price.toFixed(2));

    return { average, median, mode: mode.join(', ') };
};

function CompetitionScreen() {
    const { currentUser } = useSelector((state) => state.user);
    const { tuits, loading } = useSelector(state => state.tuits);
    const [users, setUsers] = useState([]);
    const merchants = users.filter(user => user.role === 'Merchant');
    const allProducts = merchants.flatMap(merchant => merchant.products);
    const { average, median, mode } = calculateStatistics(allProducts);
    const calculateAveragePrice = (products) => {
        if (!products.length) return 0;
        return (products.reduce((acc, product) => acc + parseFloat(product.price), 0) / products.length).toFixed(2);
    }

    // Get the average price of currentUser's products
    const currentUserAveragePrice = calculateAveragePrice(currentUser.data.products);



    useEffect(() => {
        // Step 2: Fetch data

        const fetchUsers = async () => {
            try {
                const response = await fetch(USERS_URL);  // Assuming you are calling your backend on the same domain
                if (!response.ok) {
                    throw new Error('Failed to fetch users');
                }
                const data = await response.json();

                // Step 3: Update state with fetched data
                setUsers(data);
            } catch (error) {
                console.error("There was an error fetching the users:", error);
            }
        };

        fetchUsers();
    }, []);
    console.log(users)
    return (
        <div className="container mt-4 bg-light p-4 rounded">
            <h1><i className="fa fa-tachometer-alt mr-2 margin-right-icon"></i>Competition Dashboard</h1>
            
            {merchants.map(merchant => (
                <div key={merchant._id} className="card my-3">
                    <div className="card-header">
                        <strong>{merchant.username}</strong>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-8">
                                <i className="fa fa-user mr-2 margin-right-icon"></i><strong>Name:</strong> {merchant.firstName} {merchant.lastName} <br />
                                <i className="fa fa-boxes mr-2 margin-right-icon"></i><strong>Products:</strong>
                                <ul>
                                    {merchant.products.map(product => (
                                        <li key={product._id}>{product.name} - ${product.price}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="col-md-4">
                                <i className="fa fa-chart-line mr-2 margin-right-icon"></i><strong>Competition Avg Price:</strong> ${calculateAveragePrice(merchant.products)}<br />
                                <i className="fa fa-chart-line mr-2 margin-right-icon"></i><strong>Your Avg Price:</strong> ${currentUserAveragePrice}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
    
            <div className="card mt-4">
                <div className="card-header">
                    <h2><i className="fa fa-chart-bar mr-2"></i>Competition Price Statistics</h2>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><i className="fa fa-dollar-sign mr-2 margin-right-icon"></i><strong>Average:</strong> ${average}</li>
                    <li className="list-group-item"><i className="fa fa-dollar-sign mr-2 margin-right-icon"></i><strong>Median:</strong> ${median}</li>
                </ul>
            </div>
        </div>
    );
    
}

export default CompetitionScreen;
