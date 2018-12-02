const baseURL = 'https://randomuser.me/api/';

function fetchData(url){
    return fetch(url).then(response => response.json())
}

let users =
module.exports = {
    getAll() {
        return fetchData('${baseURL}/todos')
    },
    getOne(id = 0) {
        return fetchData('${baseURL}/todos/${id}')
    }
}
