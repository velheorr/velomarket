import React from "react";

const baseURL = 'https://storage.yandexcloud.net/velomarketkoleso/';
export const noImgURL = baseURL + 'images/noimg.png';


export const imgURL = (path, mainImg,thumb = false)=>{
    if (path === '' && mainImg === '') {
        return noImgURL
    }
    let link = `${baseURL}images/${path}/${mainImg}`;
    if (thumb === true) {
        link = `${baseURL}images/${path}/${mainImg}`;
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
export const sortArr = (arr) => {
    let x = arr.sort( (a, b)=> {
        if (a > b) {return 1}
        if (a < b) {return -1}
        return 0
    })
    return x
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

// cat page х-ки товара
export const splitAndSHowParagraph = (text)=>{
    return text.split('\n').map((item, i) => <p key={i}>{item}</p>)
}

// cat filt container scroll top func
export const scrollTop = ()=>{
    window.scrollTo(0, 0)
}

