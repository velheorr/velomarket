import * as axios from "axios";
import noimg from "../pages/Catalog/img/noimg.png";
const EasyYandexS3 = require("easy-yandex-s3");


const instance = axios.create({
    baseURL: `https://disk.yandex.ru/i/bs3CT68dYWvZEg`,
});


/*let ddd = noimg
const getImg = async ()=>{
    /!*let response = await axios.get('https://cloud-api.yandex.net/v1/disk/public/resources?public_key=https%3A%2F%2Fdisk.yandex.ru%2Fd%2FAhRV9Bv4rrXBvA')*!/
    /!*let response = await axios.get('https://cloud-api.yandex.net/v1/disk/public/resources?public_key=https%3A%2F%2Fdisk.yandex.ru%2Fd%2FbC0wjFlOWByTMA')
    * https://disk.yandex.ru/i/bs3CT68dYWvZEg
    * *!/
    /!*let response = await axios.get('https://cloud-api.yandex.net/v1/disk/public/resources?public_key=https%3A%2F%2Fdisk.yandex.ru%2Fi%2F9qxg82YY4PIMEQ&preview_size=L')*!/
    let response = await axios.get('https://cloud-api.yandex.net/v1/disk/public/resources?public_key=https%3A%2F%2Fdisk.yandex.ru%2Fi%2F9qxg82YY4PIMEQ&preview_size=L')
    console.log(response.data.preview)
    ddd = response.data.preview

}
getImg()*/


export const catalogApi = {
    getGoods(){
        return instance.get()
    }

}

const s3 = new EasyYandexS3({
    auth: {
        accessKeyId: 'DxsrfFiuP8Lu7ip0IDdv',
        secretAccessKey: "EnlJEQPKUg3zJHOkBhvUkOAxIafjNZ9ZUVuJgBgN",
    },
    Bucket: "velomarketkoleso", // например, "my-storage",
    debug: false // Дебаг в консоли, потом можете удалить в релизе
});

export const getData = async()=>{
    //const list = await s3.GetList('images');
    //console.log(list)
    const download = await s3.Download( 'images/Concept-180-2019.png' );
    console.log(download)
}
