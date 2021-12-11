const USER_URL = "https://limitless-depths-58854.herokuapp.com/user/"

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