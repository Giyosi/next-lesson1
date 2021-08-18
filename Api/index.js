import axios from "axios"

export const getPosts = async () => {
    try {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
        return { success: true, data: res.data };

    } catch (error) {
        console.error(error);
    }
}