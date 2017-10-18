export function addnumber(number) {
    return {
        type:"ADD",
        payload:number
    };
}

export function subnumber(number) {
    return {
        type:"SUB",
        payload:number
    };
}