import axios from 'axios';



export default axios.create({
  baseURL: "http://3.137.195.184:8080",
  headers: {
    "Content-type": "application/json",
    "Accept":"application/json"
  }
})

//baseURL: "http://3.137.195.184/report/",