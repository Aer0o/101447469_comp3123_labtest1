// Function to create a resolved promise
const resolvedPromise = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            let success = { 'message': 'delayed success!' };
            resolve(success);
        }, 500);
    });
};

// Function to create a rejected promise
const rejectedPromise = () => {
    return new Promise((_, reject) => {
        setTimeout(() => {
            let error = new Error('error: delayed exception!');
            reject(error);
        }, 500);
    });
};

// Call both promises and handle results
resolvedPromise()
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.error(error);
    });

rejectedPromise()
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.error({ error: error.message });
    });