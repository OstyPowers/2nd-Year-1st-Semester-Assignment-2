describe("Unit Tests", function () {
    'use strict'
    describe("MathCalculations", function () {
        var mathCalculations
        beforeEach(function () {
            mathCalculations = new MathCalculations()
        })
        it("Check calcSum. [1,2] equal to 3", function () {
            let a = [1,2]
            let returnedValue = mathCalculations.calcSum(a)
            expect(returnedValue).toBe(3)
        })
        it("Check calcSum. [1,2] not equal to 1", function () {
            let a = [1,2]
            let returnedValue = mathCalculations.calcSum(a)
            expect(returnedValue).not.toBe(1)
        })
		
    })
})

describe("Basic Check For Original Source Code", function () {
    'use strict'
    describe("MathCalculations", function () {
        var mathCalculations
        beforeEach(function () {
            mathCalculations = new MathCalculations()
        });
        it("should have an correlation function", function () {
            expect(typeof mathCalculations.initCalculations).toBe('function')
        })
        it("should have an calcRegression function", function () {
            expect(typeof mathCalculations.calcRegression).toBe('function')
        })
        it("should have an calcCorrelation function", function () {
            expect(typeof mathCalculations.calcCorrelation).toBe('function')
        })
        it("should have an calcSum function", function () {
            expect(typeof mathCalculations.calcSum).toBe('function')
        })
    })
})

describe("Check Constructor", function () {
	'use strict'
	describe("mathCalculations", function () {
		var mathCalculations
		beforeEach(function () {
			mathCalculations = new MathCalculations()
		});
		it("should have an constructor", function () {
			expect(typeof mathCalculations.constructor).toBe('function')
		})
		it("should have an correlation attribute", function () {
			expect(typeof mathCalculations.hasOwnProperty("correlation")).toBeTruthy()
		})
		it("should have an regression attribute", function () {
			expect(typeof mathCalculations.hasOwnProperty("regression")).toBeTruthy()
		})
		it("should have an input array", function () {
			expect(typeof mathCalculations.hasOwnProperty("inputArray")).toBeTruthy()
		})
	})
})








    
