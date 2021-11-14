const host = 'http://localhost:5000';

let token;
//login hospital function
export const loginHospital = async (email, password) => {
    const url = `${host}/api/hospital/login`;
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email, password: password })
    })

    const json = await response.json();
    const resCode = await response.statusCode;
    if (resCode === 200) {
        token = json
    }
    return json;
}

//create hospital function
export const signupHospital = async (email, password, name, regID, phone) => {
    let url = `${host}/api/hospital/createuser`
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: name, email: email, password: password, regID: regID, phone: phone })
    });
    const json = await response.json();
    const resCode = await response.statusCode;
    if (resCode === 200) {
        token = json
    }
    return json;
}

//Get user
export const getUser = async () => {
    // if (token !== null) {
    //todo api call
    //API call
    const url = `${host}/api/hospital/getuser`
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'auth-token': `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJob3NVc2VyIjp7ImlkIjoiNjE5MTAyMTljODlmMWQzY2IyNmY1NjAyIn0sImlhdCI6MTYzNjg5MzkwNX0.cvsZ0QdVh3F6wmxH8S_8YqwgQov4PDxgGZZ3VwIzXgI`
        },
    });
    const json = await response.json();
    // console.log(json)
    const user = json;
    return user;
    // }
   
}