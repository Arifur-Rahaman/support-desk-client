import axios  from "axios";

const API_URL = process.env.REACT_APP_API_URL+'/api/tickets/'

//Get ticket notes
const getNotes = async (ticketId, token)=>{
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        },
    }
    const response = await axios.get(API_URL + ticketId + '/notes', config)
    return response.data
}

//create ticket note
const createNote = async (text, ticketId, token)=>{
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        },
    }
    const response = await axios.post(API_URL + ticketId + '/notes',{text}, config)
    console.log(response.data)
    return response.data
}


const noteService = {
    getNotes,
    createNote
}
export default noteService

