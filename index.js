function findMatching(arr,target){
    const result = arr.filter(e => e.toLowerCase() == target.toLowerCase())
    return result
}

function fuzzyMatch(arr,target){
    const result = arr.filter(e => e.slice(0,target.length).toLowerCase() == target.toLowerCase())
    return result
}

function matchName(arr,target){
    const result = arr.filter(e => e.name.toLowerCase() == target.toLowerCase())
    return result 
}