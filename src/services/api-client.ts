import axios from "axios";

export default axios.create({
   baseURL: 'https://api.rawg.io/api',
   params: {
      key: '348f3158da8c4608a86eac795efb2093'
   }
})