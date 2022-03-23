import {setFilteredBrand} from "../pages/Catalog/CatalogSlice";


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