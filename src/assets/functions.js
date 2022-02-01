

const baseURL = 'https://storage.yandexcloud.net/velomarketkoleso/images/'


export const imgURL = (img)=>{
    console.log(img)
    if (img.includes('.png')){
        return baseURL + img
    }
    return `${baseURL}noimg.png`
}


export const sortData = (data, sortParam)=>{
    data.sort((a, b)=> {
        if (a[sortParam] > b[sortParam]) {return 1}
        if (a[sortParam] < b[sortParam]) {return -1}
        return 0
    })
    return data
}