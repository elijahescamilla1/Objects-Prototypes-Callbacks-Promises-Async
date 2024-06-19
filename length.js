function checkStringLength(str) {
    return new Promise((resolve, reject) => {
        if (typeof str !== 'string') {
            reject(new Error('Input must be a string'));
        } else if (str.length > 10) {
            resolve('Big word');
        } else {
            resolve('Small Number');
        }
    });
}

// Example usage
checkStringLength('Hello World')
    .then(message => console.log(message))  // Output: Big word
    .catch(error => console.error(error));

checkStringLength('Hi')
    .then(message => console.log(message))  // Output: Small Number
    .catch(error => console.error(error));
