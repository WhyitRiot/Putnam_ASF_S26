const isPalindrome = (input) =>{
    if (typeof input === "string"){
        input = input.toLowerCase().replace(/[^\p{L}\p{N}]|\s/gu, "");
        console.log(input);
        let leftPointer = 0;
        let rightPointer = input.length -1;
        while(leftPointer <= rightPointer){
            if (input.charAt(leftPointer) === input.charAt(rightPointer)){
                leftPointer++;
                rightPointer--;
            }
            else{
                return false;
            }
        }
        return true;
    }
    return false;
}

module.exports = isPalindrome;