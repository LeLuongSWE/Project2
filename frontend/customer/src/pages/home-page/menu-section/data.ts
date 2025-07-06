import api from "../../../api/index"

async function GetMenuItemsForHomePage(){
    try {
        const res = await api.get("/menu/home-page")
        return res.data
    }
    catch (error) {
        console.error('Error fetching menu:', error)
        return []
    } 
} 

export default GetMenuItemsForHomePage