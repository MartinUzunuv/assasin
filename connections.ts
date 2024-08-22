import axios from "axios"

const backend_api = "https://assassins-backend.onrender.com";

const getUsersInfo = async function ( ) {
    const data = await axios.get(`${backend_api}/api/get-all-users`);

    if (data === null) return null;
    return data.data;
}

const getUsersById = async function ( id: string ) {
    const data = await axios.get(`${backend_api}/api/get-user-by-id`, {
        params: {id}
    });
    if (data === null) return null;
    return data.data;
}

const getUsersByCode = async function (code: string) {
    const data = await axios.get(`${backend_api}/api/get-user-by-code`, {
        params: {code}
    });
    

    if (data === null) return null;

    return data.data;
}

const killUsersById = async function (id: string) {
    await axios.post(`${backend_api}/api/kill-player`, {
        body: {
            id
        }
        
    });
    // if (data === null) return null;
    // return data.data;
}
export {getUsersInfo, getUsersById, getUsersByCode, killUsersById}