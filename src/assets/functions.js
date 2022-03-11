

const baseURL = 'https://storage.yandexcloud.net/velomarketkoleso/images/'

export const imgURL = (path, mainImg)=>{
    if (path === '' && mainImg === '') {
        return baseURL + 'noimg.png'
    }
    /*console.log(path)
    console.log(mainImg)*/
    if (path && path.length > 1 && mainImg && mainImg.length > 1){
        return (`${baseURL}${path}/${mainImg}`)
    }
}
export const imgURLerror = (e)=>{
    e.target.onerror = null;
    e.target.src = baseURL + 'noimg.png'
}

export const sortData = (data, sortParam, direction = '+')=>{
    if (direction === '+'){
        data.sort((a, b)=> {
            if (a[sortParam] > b[sortParam]) {return 1}
            if (a[sortParam] < b[sortParam]) {return -1}
            return 0
        })
    } else {
        data.sort((a, b)=> {
            if (a[sortParam] < b[sortParam]) {return 1}
            if (a[sortParam] > b[sortParam]) {return -1}
            return 0
        })
    }

    return data
}

export const clearSymbol = (data)=>{
    const x = data.split('_').join(' ')
    return x
}