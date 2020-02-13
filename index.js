const driver = {}; 

function updateDriverWithKeyAndValue(driver, key, value) {
    return Object.assign({}, driver, { [key]: value });
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    return Object.assign(driver, { [key]: value })
}

function deleteFromDriverByKey(driver, key) {
    let cloneDriver = Object.assign({}, driver, key)
    delete cloneDriver[key]
    return cloneDriver
}

function destructivelyDeleteFromDriverByKey(driver, key) {
    let newDriverObject = Object.assign(driver, key)
    delete newDriverObject[key]
    return newDriverObject
}