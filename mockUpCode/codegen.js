module.exports = {
    generateCode: (id) => {
        const number = Math.round(Math.random()*10000) - 1; 
        const code = `ABCD-${number}-DEF${id}`
        return code
    }
}
