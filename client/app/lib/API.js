import axios from "axios";

export default async function fetchData() {
    const { data } = await axios(`http://localhost:3001/`);
    return data
}


export async function fetchDataId(id) {
    try {
        const { data } = await axios(`http://localhost:3001/${id}`);
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}
