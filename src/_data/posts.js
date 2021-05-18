const axios = require('axios');

module.exports = async () => {
    const url = `https://jsonplaceholder.typicode.com/posts`;
    try {
        const response = await axios.get(url);
        const posts = response.data;
        return posts;
    } catch(error) {
        console.log(error);
    }

}