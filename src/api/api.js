import * as axios from "axios";


/*https://storage.yandexcloud.net/velomarketkoleso/images/Concept-180-2019.png*/
const baseURL = 'https://storage.yandexcloud.net/velomarketkoleso/'


export const api = {
    async getImg(img){
        let res = await axios.get(`${baseURL}images/${img}`)
        return res
    },
    async sendContact(data){
        let res = await axios.get(`https://functions.yandexcloud.net/d4enchfsim84gntm625q?name=${data.name}&contact=${data.contact}&text=${data.text}`)
        return res
    }
}


