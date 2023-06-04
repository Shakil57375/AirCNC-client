import { id } from "date-fns/locale"

export const addRoom = async roomData =>{
    const res = await fetch(`${import.meta.env.VITE_API_URL}/rooms`,{
        method : "POST",
        headers :{
            "content-type" : "application/json"
        },
        body : JSON.stringify(roomData)
    })
    const data = await res.json()
    return data
}

// get all rooms
export const getAllRooms = async()=>{
    const res = await fetch(`${import.meta.env.VITE_API_URL}/rooms`)
    const data = await res.json()
    return data
}
//get single room
export const getRoom = async(id)=>{
    const res = await fetch(`${import.meta.env.VITE_API_URL}/room/${id}`)
    const data = await res.json()
    return data
}