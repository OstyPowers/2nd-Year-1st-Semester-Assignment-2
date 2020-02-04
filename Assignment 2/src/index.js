class MathCalculations {
	
  constructor(inputArray) {
    this.inputArray = inputArray
    this.correlation = 0
    this.regression = { beta0: 0, beta1: 0 }
    this.sumXTimesX = 0
    this.sumXTimesY = 0
    this.arrayLength = 0
    this.avgSumX = 0
    this.avgSumY = 0
  }



  initCalculations() {
    let nestedArray = this.inputArray
    this.sumOfX = this.calcSum(nestedArray[0])
    this.sumOfY = this.calcSum(nestedArray[1])
    this.arrayLength = nestedArray[0].length
    this.sumYTimesY = 0
    this.sumXTimesX = 0
    this.sumXTimesY = 0

    for (let i = 0; i < this.arrayLength; i++) {
      this.sumXTimesX += nestedArray[0][i] * nestedArray[0][i]
      this.sumYTimesY += nestedArray[1][i] * nestedArray[1][i]
      this.sumXTimesY += nestedArray[0][i] * nestedArray[1][i]
    }
    this.calcRegression()
    this.calcCorrelation()
  }

  calcSum(array) {
    let sum = (a, b) => a + b
    return array.reduce(sum)
  }

  calcRegression() {
    this.avgSumX = this.sumOfX / this.arrayLength
    this.avgSumY = this.sumOfY / this.arrayLength
    let beta1 =
      (this.sumXTimesY - this.arrayLength * this.avgSumX * this.avgSumY) /
      (this.sumXTimesX - this.arrayLength * this.avgSumX * this.avgSumX)
    let beta0 = this.avgSumY - beta1 * this.avgSumX

    this.regression = { beta1: beta1, beta0: beta0 }
  }

  calcCorrelation() {
    let topLine = this.arrayLength * this.sumXTimesY - this.sumOfX * this.sumOfY
    let bottomLine = Math.sqrt(
      (this.arrayLength * this.sumXTimesX - this.sumOfX * this.sumOfX) *
        (this.arrayLength * this.sumYTimesY - this.sumOfY * this.sumOfY)
    )
    let rxy = topLine / bottomLine
    let r2 = rxy * rxy
    this.correlation = r2
  }


  getCorrelation() {
    return this.correlation
  }

  getRegression() {
    return this.regression
  }

  getAllResults() {
    return {
      correlation: this.getCorrelation(),
      regression: this.getRegression()
    }
  }
}

function calculate( xArray = [ 83, 116, 186, 81, 114], yArray = [ 11.2, 9.3, 21.6, 6.9, 10.2] ) {
const array = [xArray ,yArray
    
  ]
  let mathCalculations = new MathCalculations(array)
  mathCalculations.initCalculations()
  let results = mathCalculations.getAllResults()
  
  
  console.log(
    results.correlation,
	results.regression
  )
}

calculate()
