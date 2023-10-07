const uuidv4 = () => {

    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
        (
            c ^
            (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
        ).toString(16)
    );
};

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function generateList(amount, name, age) {

    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y'];
    const getName = (lng) => {
        if (lng == 1) {
            return `${consonants[getRandomNumber(0,consonants.length-1)]}${vowels[getRandomNumber(0,vowels.length-1)]}${consonants[getRandomNumber(0,consonants.length-1)]}`
        } else {
            return `${consonants[getRandomNumber(0,consonants.length-1)]}${vowels[getRandomNumber(0,vowels.length-1)]}${consonants[getRandomNumber(0,consonants.length-1)]}${consonants[getRandomNumber(0,consonants.length-1)]}`
        }
    }
    const array = [];

    for (let i = 0; i < amount; i++) {

        const obj = {
            id: uuidv4()
        }
        
        if(age){
            obj.age = getRandomNumber(8, 100);
        }
        if (name) {
            const num = getRandomNumber(1,3);
            let name = '';
            if(num === 1){
                name = `${getName(getRandomNumber(1,2))}`;
            }else if(num === 2){
                name = `${getName(getRandomNumber(1,2))} ${getName(getRandomNumber(1,2))}`
            }else{
                name = `${getName(getRandomNumber(1,2))} ${getName(getRandomNumber(1,2))} ${getName(getRandomNumber(1,2))}`
            }
            obj.name = name;
        }
        array.push(obj)
    }
    console.log(array)
}