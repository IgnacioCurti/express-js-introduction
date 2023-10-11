function getNewId(data) {
    return data.reduce((prev, current) => (prev.id > current.id) ? prev : current).id + 1;
}

export {getNewId}