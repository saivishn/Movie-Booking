import axios from 'axios'


export const ApiCalls = async () => {
    try {
        const response = await axios.get('https://api.tvmaze.com/search/shows?q=all');
        console.log(response.data);
        if (response.data) {
            return { 
                response: response.data
            }
        }
        throw new Error("Something Wrong with Data")
    }
    catch (error) {
        console.log(error,'error at apiCalls')
        return Error("Something Wrong with Api", error)
    }
}
