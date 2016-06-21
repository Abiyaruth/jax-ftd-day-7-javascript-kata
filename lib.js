/*
  TODO: Implement empty function bodies according to their requirements
*/

function createGrowthModel (lengthToWingspan, leavesEatenToWeight) {
  return {
    lengthToWingspan,
    leavesEatenToWeight
  }
}

/**
 * Given an array of growth models, this function finds their average and returns
 * this result as a new growth model object
 *
 * @param growthModels [Array<GrowthModel>] the growth models to average.
 *                                          If empty or undefined, return
 *                                          an undefined growth model
 *
 * @return a GrowthModel object
 */
function averageGrowthModel (arr) {
// const arr = ({lengthToWingspan: lengthToWingspan, leavesEatenToWeight: leavesEatenToWeight})
    if (arr.length > 0) {
      const added = arr.reduce(
        (acc, next) =>
        {
          acc.lengthToWingspan += next.lengthToWingspan
          acc.leavesEatenToWeight += next.leavesEatenToWeight
          return acc
        },
        /*  createGrowthModel(
            acc.lengthToWingspan + next.lengthToWingspan,
            acc.leavesEatenToWeight + next.leavesEatenToWeight
          ),*/
          createGrowthModel(0, 0)
      )
      added.lengthToWingspan /= arr.length
      added.leavesEatenToWeight /= arr.length
      return added
      /*const mid = createGrowthModel(
        added.lengthToWingspan / arr.length,
        added.leavesEatenToWeight / arr.length
      )
      return mid*/
    } else {
      return undefined
    }
  }
  // TODO: implement using Array.prototype.reduce()

module.exports = {
  createGrowthModel,
  averageGrowthModel
}
