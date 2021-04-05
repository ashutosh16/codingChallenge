
//Crate binary numbers for given number of digits.
//Asked in VMWARE

function binary(num) {
    if(num < 1) return null;
    if(num === 1) return ["0","1"];
    
    return binary(num-1).reduce((acc, item)=> {
        acc.push(`0${item}`);
        acc.push(`1${item}`);
        return acc;
    }, []);
}
binary(3);
//["000", "100", "010", "110", "001", "101", "011", "111"]
