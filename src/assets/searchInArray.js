export function searchInArray(array, searchString, keys) {
    return array.filter(item => {
        return keys.some(key => {
            if (item[key] && typeof item[key] === 'string') {
                return item[key].toLowerCase().includes(searchString.toLowerCase());
            }
            return false;
        });
    });
}

export const easySearch = (array, searchString)=>{
    return array.filter(item =>{
        return item.toLowerCase().includes(searchString.toLowerCase());
    })
}


/*
*  пример использования
* const keysToSearch = ["name", "phone", 'dep', 'position', 'org'];  - создаит массив в каких полях искать
   const searchedData = searchInArray(phonebook, search, keysToSearch); - запустить поиск
*
*
* */