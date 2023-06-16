const maxAttempts = 5;  // Maximum number of retry attempts
const initialDelay = 1000;  // Initial delay before the first retry (in milliseconds)
let currentAttempt = 1;  // Current attempt count

function makeHttpRequest(url, options) {
  return new Promise((resolve, reject) => {
    const retry = () => {
      setTimeout(() => {
        console.log(`Retrying request. Attempt ${currentAttempt} of ${maxAttempts}`);
        currentAttempt++;
        makeHttpRequest(url, options)
          .then(resolve)
          .catch(reject);
      }, getDelay());
    };

    fetch(url, options)
      .then(response => {
        if (response.ok) {
          resolve(response.json());
        } else {
          if (currentAttempt <= maxAttempts) {
            retry();
          } else {
            reject(new Error(`Maximum number of retry attempts reached. Failed to fetch ${url}`));
          }
        }
      })
      .catch(error => {
        if (currentAttempt <= maxAttempts) {
          retry();
        } else {
          reject(new Error(`Maximum number of retry attempts reached. Failed to fetch ${url}`));
        }
      });
  });
}

function getDelay() {
  // Exponential backoff with randomization to prevent thundering herd problem
  const baseDelay = initialDelay * Math.pow(2, currentAttempt - 1);
  const randomizationFactor = 0.5;  // Randomization factor (adjust as needed)
  const randomDelay = Math.random() * baseDelay * randomizationFactor;
  return baseDelay + randomDelay;
}

// Usage example
const url = 'https://retoolapi.dev/lfaPzW/dogs';
const options = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json'
  }
};

makeHttpRequest(url, options)
  .then(data => {
    console.log('Received data:', data);
  })
  .catch(error => {
    console.error('Error:', error.message);
  });
