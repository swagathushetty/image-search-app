import axios from 'axios'

// creating preconfigured instance 
export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID ocwzs9x7ARqngfX3p2tyb_6xZfXgg5KwxUJRADNZanU' //specified by unsplash API
    }
})