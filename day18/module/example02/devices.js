const printTitle = "CodePrinter";

function print(value) {
  console.log(value);
}

const scannerTitle = "CodeScanner";

function scanner(value) {
  const scanValue = `scan: ${value}`;
  console.log(scanValue);
  return scanValue;
}

const userValue = "스캔해야할 값";

// 스캔해야할 값을 스캔하고
const scanValue = scanner(userValue);
console.log("scanner title : ", scannerTitle);

// 스캔한 결과를 프린트한다.
print(scanValue);
console.log("printer title : ", printTitle);

export default {
  printTitle,
  print,
  scannerTitle,
  scanner,
};
