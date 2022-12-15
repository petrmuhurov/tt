const API_KEY = 'AIzaSyDUmkgUcdqSA8uiwdnfN9kRPwbHmJrQ5l8'
const URL = 'https://www.googleapis.com/customsearch/v1'

const service = {
    find: async (q: string) => {
        const response = await fetch(`${URL}?key=${API_KEY}&q=${q}&cx=44d275bfb10044449&searchType=image`)

        return await response.json()
    }
}

export default service