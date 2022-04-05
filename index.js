function findMatching(array,target){
    const result = array.filter(e => e.toLowerCase() == target.toLowerCase())
    return result
}

function fuzzyMatch(array,target){
    const result = array.filter(e => e.slice(0,target.length).toLowerCase() == target.toLowerCase())
    return result
}

function matchName(array,target){
    const result = array.filter(e => e.name.toLowerCase() == target.toLowerCase())
    return result 
}