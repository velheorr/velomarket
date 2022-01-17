

const baseURL = 'https://storage.yandexcloud.net/velomarketkoleso/images/'


export const imgURL = (img)=>{
    if (img.includes('.png')){
        return baseURL + img
    }
    return baseURL + 'noimg.png'
}


