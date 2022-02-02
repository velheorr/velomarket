

const baseURL = 'https://storage.yandexcloud.net/velomarketkoleso/images/'


export const imgURL = (img)=>{
    return  baseURL + img
}
export const imgURLerror = (e)=>{
    e.target.onerror = null;
    e.target.src = baseURL + 'noimg.png'
}

export const sortData = (data, sortParam)=>{
    data.sort((a, b)=> {
        if (a[sortParam] > b[sortParam]) {return 1}
        if (a[sortParam] < b[sortParam]) {return -1}
        return 0
    })
    return data
}