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
    },
    async getData() {
        try {
            const res = await axios.get('https://functions.yandexcloud.net/d4e52c56im1dh44c6nk6');
            return res.data

        } catch (error) {
            console.error(error);
        }
    },
    async getConfig() {
        try {
            const res = await axios.get('https://functions.yandexcloud.net/d4e5kuegp4to1vpg2bo9');
            return res.data

        } catch (error) {
            console.error(error);
        }
    }
}


