
const time = new Date();
const options = {
    weekday:'long',
    year:'numeric',
    month:'long',
    day:'numeric'
};
console.log(time.toLocaleString('en-US',options));
document.querySelector('h1').innerHTML = time.toLocaleString('en-US',options);