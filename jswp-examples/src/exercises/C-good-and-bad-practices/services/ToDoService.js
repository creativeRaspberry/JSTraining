const baseURL = 'https://randomuser.me/api/';

function fetchData(url){
    return fetch(url).then(response => response.json())
}

let cachedUsers = [];
module.exports = {
    getAll() {
        if (!cachedUsers.length) {
            return fetchData('${baseURL}/users')
                .then(responseUsers => {
                    cachedUsers = responseUsers;
                    return cachedUsers;
                })
        }
        return Promise.resolve(cachedUsers);

    }
}
