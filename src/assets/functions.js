const baseURL = 'https://storage.yandexcloud.net/velomarketkoleso/';
const noImgURL = baseURL + 'images/noimg.png';

export const imgURL = (path, mainImg,thumb = false)=>{
    if (path === '' && mainImg === '') {
        return noImgURL
    }
    let link = `${baseURL}images/${path}/${mainImg}`;
    if (thumb === true) {
        /*let y = mainImg.split(/\.(?=[^\.]+$)/).join('_thumb.')
        link = `${baseURL}thumbs/${path}/${y}`*/
        link = `${baseURL}thumb/${path}/${mainImg}`;
    }
    if (path && path.length > 1 && mainImg && mainImg.length > 1){
        return link
    }
}
export const imgURLerror = (e)=>{
    e.target.onerror = null;
    e.target.src = noImgURL
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
    return data.split('_').join(' ')
}

export const filterCatalogBy = (catalog, filterBy)=>{
    let filterArr = []
    const filtered = catalog.map(i => i[filterBy])
    for (let str of filtered) {
        if (!filterArr.includes(str)) {
            filterArr.push(str);
        }
    }
    return filterArr
}