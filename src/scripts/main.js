import { createPlan } from "./plan.js"
import { plantSeeds } from "./tractor.js"
import { createAsparagus } from "./seeds/asparagus.js"
import { addPlant, usePlants } from "./field.js"
import { harvestPlants } from "./harvester.js"
import { getCatalogHTML } from "./catalog.js"
import { renderCatalogToDOM } from "./render.js"
import { harvestSorter } from "./sorter.js"
import { harvestQuantity } from "./harvestQuantity.js"

console.log("Welcome to the main module")

// invoke createPlan from Plan
const yearlyPlan = createPlan()

// //create a seed
// const asparagusSeed = createAsparagus()
// console.log(asparagusSeed)

// addPlant(asparagusSeed)

// let fieldPlants = usePlants()

// console.log(fieldPlants)

// tractor
// invoke plant seeds from tractor
plantSeeds(yearlyPlan)

// invoke use seeds from field
const getPlantsFields = usePlants()
console.log("Planted in the field")
console.log(getPlantsFields)

// harvest
const harvest = harvestPlants(getPlantsFields)
console.log("Harvested Seeds")
console.log(harvest)

const sortedHarvest = harvestSorter(harvest)
console.log("organized")
console.log(sortedHarvest)

console.log(harvestQuantity(sortedHarvest))

const catalogHTML = getCatalogHTML(sortedHarvest)
// console.log(catalogHTML)

renderCatalogToDOM(catalogHTML)