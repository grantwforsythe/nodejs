console.log('Start');

const fetchData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Done!');
        }, 1500);
    });
};

setTimeout(() => {
    console.log('Timer is done!');
    fetchData().then(text => console.log(text))
}, 2000);

console.log('End');