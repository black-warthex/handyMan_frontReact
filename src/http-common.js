import axios from 'axios';



export default axios.create({
  baseURL: "http://ec2-3-137-195-184.us-east-2.compute.amazonaws.com/report/",
  headers: {
    "Content-type": "application/json",
    "Accept":"application/json"
  }
})

//baseURL: "http://3.137.195.184/report/",