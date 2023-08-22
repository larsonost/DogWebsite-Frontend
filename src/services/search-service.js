import axios from 'axios';

const TUITS_API = `http://localhost:4000/api/places`;

export const findPark = async ({searchContent}) => {
    await axios.delete(`${TUITS_API}/OK`)
    const response = await axios.get(`/place/findplacefromtext/json?fields=formatted_address%2Cname%2Crating%2Copening_hours%2Cgeometry%2Cplace_id%2Copening_hours%2Cphoto&input=${searchContent}&inputtype=textquery&locationbias=circle%3A2000%4043.774995180717443%2C-79.3456900605342&key=AIzaSyAdq_1MT2PfwTJ3sXELKfEX0Pt2_W0AFpk`);
    const tuits = response.data;
    return tuits;
}


export const createPark = async (park) => {
    const response = await axios.post(TUITS_API, park)
    return response.data;
}

export const findParkDetails = async () => {
    const response = await axios.get(`http://localhost:4000/api/details`);
    const tuits = response.data;
    return tuits;
}

export const deletePark = async (status) => {
    const response = await axios.delete(`${TUITS_API}/${status}`)
    return response.data
}

export const findUserDetails = async () => {
    const response = await axios.get(`http://localhost:4000/api/users`);
    const tuits = response.data;
    return tuits;
}