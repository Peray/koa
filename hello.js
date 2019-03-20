const fs = require('mz/fs');

module.exports = {
    sum(...rest){
        var sum = 0;
        for (let n of rest) {
            sum += n;
        }
        return sum;
    },
    async yibu() {
        let expression = await fs.readFile('./data/data.txt', 'utf-8');
        let fn = new Function('return ' + expression);
        let r = fn();
        console.log(`Calculate: ${expression} = ${r}`);
        return r;
    }
}