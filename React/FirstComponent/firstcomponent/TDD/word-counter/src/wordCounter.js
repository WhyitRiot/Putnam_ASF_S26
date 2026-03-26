const wordCounter = (string)=>{
    if (string){
        words = string.replace(/[^A-Za-z0-9 ]/g, "").replace(/\s+/g, " ").split(" ")
        return words.length;
    }
    return 0;
}

module.exports = wordCounter;