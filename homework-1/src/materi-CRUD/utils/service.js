import storageManager from "./storageManager"

const addCourse = (payload) => {
    const currentItem = storageManager.get();
    if (currentItem) {
        const newCourse = [...currentItem, payload];
        storageManager.set(newCourse);
    } else {
        storageManager.set([payload]);
    }
    console.log(payload)
    return {
        data: payload
    }
}

const getCourses = () => {
    const currentItem = storageManager.get();
    const response = {
        data: currentItem !== null ? currentItem : [],
    }
    return response;
}

const updateCourse = (payload) => {
    storageManager.update(payload);
}

const deleteCourse = (payload) => {
    const currentItem = storageManager.get();
    if (currentItem) {
        const newCourse = currentItem.filter((item) => item.id !== payload.id);
        storageManager.set(newCourse);
    }
}

const courseService = {
    add: addCourse,
    update: updateCourse,
    delete: deleteCourse,
    get: getCourses,
}

export default courseService