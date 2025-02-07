import axios from "axios"




const api=axios.create({
    baseURL:"https://api.sheetbest.com/sheets/5109cbfd-1000-4ad2-bdc3-03b3a09851cf"
})


 export const getApiData=()=>{
     return api.get()
}

