function lowerCaseWords(mixedArray) {
    return new Promise((resolve, reject) => {
        // Check if the input is an array
        if (!Array.isArray(mixedArray)) {
            return reject(new Error("Input must be an array"));
        }

        const lowerCasedWords = mixedArray
            .filter(item => typeof item === 'string') 
            .map(word => word.toLowerCase()); 

        // Resolve with the processed array
        resolve(lowerCasedWords);
    });
}

const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];

lowerCaseWords(mixedArray)
    .then(result => {
        console.log(result); 
    })
    .catch(error => {
        console.error(error);
    });