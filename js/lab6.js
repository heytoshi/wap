const printNumberEverySec = function (from, to) {
    for(let i = from; i <= to; i++) {
        setTimeout(() => {
            console.log(i)
        }, 1000 * i, i);
    }
}