
// const course = [{
//     id: 1,
//     title: 'Belajar NodeJS',
//     description: 'Belajar NodeJS dari dasar hingga mahir',
// }]

const storageName = 'courseReactJs';

const setItem = (value) => {
    console.log(value);
    // array to string
    const data = JSON.stringify(value)
    // set data to local storage
    localStorage.setItem(storageName, data)
}

const getItem = () => {
    // get data from local storage
    const data = localStorage.getItem(storageName)
    if (data) {
        // string to array
        return JSON.parse(data)
    }
    return null
}

const updateItem = (value) => {
    // get data from local storage
    const data = getItem()
    if (data) {
        // update data
        const newData = data.map((item) => {
            if (item.id === value.id) {
                return value
            }
            return item
        })
        // set data to local storage
        setItem(newData)
    }
}


const removeItem = () => {
    localStorage.removeItem(storageName)
}

const storageManager = {
    get: getItem,
    set: setItem,
    delete: removeItem,
    update: updateItem,
}

export default storageManager