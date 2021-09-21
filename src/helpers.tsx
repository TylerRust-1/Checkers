export function isOdd(n:number) {
    return Math.abs(n % 2) === 1;
}

export function getKeyByValue(object, value:number) {
    return Object.keys(object).find(key => object[key] === value);
}

export function getColAsInt(columns, coordinate:string) {
    return columns[coordinate.charAt(0)];
}

export function getColAsAlph(columns:object, columnInt:number) {

    for (let key in columns) {
        if (!columns.hasOwnProperty(key)) {
            continue;
        }

        if (columnInt === columns[key]) {
            return key;
        }
    }

    return false;
}

export function getRowAsInt(coordinate:string) {
    return parseInt(coordinate.charAt(1), 10);
}

export function returnPlayerName(playerBool:boolean) {
    return playerBool === true ? 'player1' : 'player2';
}