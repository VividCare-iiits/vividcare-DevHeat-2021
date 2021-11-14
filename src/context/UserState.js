import { axios } from 'axios'
const host = "http://localhost:5000"

// const [token, setToken] = useState({});
let token;
export const loginUser = async (email, password) => {
    const url = `${host}/api/auth/login`;
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

export const signupUser = async (email, password, name, aadhar, phone) => {
    let url = `${host}/api/auth/signup`
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: name, email: email, password: password, aadhar: aadhar, phone: phone })
    });
    const json = await response.json();
    const resCode = await response.statusCode;
    if (resCode === 200) {
        token = json
    }
    return json;
}

// const [user, setUser] = useState({})
//Get user
export const getUser = async () => {
    // if (token !== null) {
    //todo api call
    //API call
    const url = `${host}/api/auth/getuser`
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'auth-token': `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjE5MDlkY2IzZTRhOTIyOWJhMTVhYjIyIn0sImlhdCI6MTYzNjg2OTA0M30.01gZFWGbuflSnRaxtnOAlFBnGhDjXovhE__q6oh5B8U`
        },
    });
    const json = await response.json();
    // console.log(json)
    const user = json;
    return user;
    // }
   
}