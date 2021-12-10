const USER_URL = "http://localhost:3001/user"

exports.addUser = async (user) => {
    const res = await fetch(USER_URL, {
        method: "POST",
        body : JSON.stringify(user),
        headers : {
            'content-Type' : 'application/json'
        }
    });
    return await res.json();
}