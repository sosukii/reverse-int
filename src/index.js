module.exports = function reverse (n) {
    const param = String(n).includes('-')
        ? String(n).slice(1) 
        : String(n)
    return +(param.split('').reverse().join(''))
}
