import axios from 'axios'
console.log(process.env.REACT_APP_YT_API_KEY);
const request = axios.create({
    baseURL:"https://youtube.googleapis.com/youtube/v3/",
    params:{
        key:"AIzaSyBLGvTWhe4pAphD5nTjQAl5taH04Pf0zKc",
    },
})

export default request