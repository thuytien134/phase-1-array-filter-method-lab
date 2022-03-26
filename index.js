// Code your solution here
function findMatching(driver,string){
    return driver.filter(i => i.toUpperCase() === string.toUpperCase())
}
function fuzzyMatch(driver,string){
    return driver.filter(i => i.startsWith(string))
}
function matchName(driver,string){
    return driver.filter(driver => driver.name === string)
}