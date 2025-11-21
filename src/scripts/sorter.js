export const harvestSorter = (harvestArray) => {
    let array = structuredClone(harvestArray)
    array.sort((a,b) => a.type.localeCompare(b.type))
    return array
}   