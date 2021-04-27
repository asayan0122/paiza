//C016:Leet文字列
const lines = require("fs").readFileSync("/dev/stdin", "utf8").split("\n")[0];
const convert2Leet = v => {
    return v.replace("A", 4).replace("E", 3).replace("G", 6).replace("I", 1).replace("O", 0).replace("S", 5).replace("Z", 2)
}
const result = lines.split('').reduce((v, i) => {
    return convert2Leet(v) + convert2Leet(i)
})
console.log(result)