const {
	readFile,
	readFileSync,
	appendFileSync,
	unlinkSync,
	existsSync
} = require('fs')
const C = require('./src/index.js')
console.log(C)
var XFile = process.argv[2]
var YFile = process.argv[3]
var outFile = process.argv[4]
var XString = readFileSync(XFile, 'utf8')
var YString = readFileSync(YFile, 'utf8')
var X = XString.split('\r\n').map((line) => Number(line))
var Y = YString.split('\r\n').map((line) => Number(line))
console.log('array X:', X)
console.log('array Y:', Y)
let send = [X,Y]
var caclulation =  new C.Math(send)
caclulation.initCalculations()
console.log(caclulation)

var b1 = caclulation.regression.beta1
var b0 = caclulation.regression.beta0
var coefficient = caclulation.correlation

appendFileSync(outFile,
`Correlation Coefficient: ${coefficient}\r\n
Beta1: ${b1}\r\n
Beta0: ${b0}`
)