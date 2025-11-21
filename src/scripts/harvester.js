export const harvestPlants = (plantsArray) => {
    let seedsHarvested = [];

    for (const plant of plantsArray) {
        if (plant.type === "Corn") {
            for (let i = (plant.output/2); i > 0; i--) {
                seedsHarvested.push(plant);
            }
        } else {
            for (let i = plant.output; i > 0; i--) {
                seedsHarvested.push(plant);
            }
        }
    }

    return structuredClone(seedsHarvested)
}