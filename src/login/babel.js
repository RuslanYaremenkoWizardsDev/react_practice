async function request() {
    return Promise.resolve('Request is working...');
}

request().then(console.log);
