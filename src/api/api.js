import * as axios from "axios";

// Подключаем модуль
var EasyYandexS3 = require("easy-yandex-s3");

// Инициализация
var s3 = new EasyYandexS3({
    auth: {
        accessKeyId: "aje56mpkbjl0j62hms36",
        secretAccessKey: "AQVNxTWzRc6gmYUbcGbum31aA8SG1wuV6geCf9md",
    },
    Bucket: "velomarketkoleso", // например, "my-storage",
    debug: false // Дебаг в консоли, потом можете удалить в релизе
});


  async function get() {
      var list = await s3.GetList('/data');
      return list
  }


/*https://storage.yandexcloud.net/velomarketkoleso/images/Concept-180-2019.png*/
const baseURL = 'https://storage.yandexcloud.net/velomarketkoleso/'


export const api = {
    async getImg(img){
        let res = await axios.get(`${baseURL}images/${img}`)
        return res
    },
    async getData(){


    }

}


