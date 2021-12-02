
const arr = ['\r| ', '\r/ ', '\r- ', '\r\\ ', '\r| ', '\r+_> ', '\r-%*< '];
let start = 100;
for (const char of arr) {
  
  setTimeout(() => {
    // print the char here
    process.stdout.write(char);
  }, start); // <= 1s delay to make it noticeable. Can dial it down later.
    start += 200;
}

/*Spinner 1 


setTimeout(() => {
  process.stdout.write('\r|   ');
}, 100);

setTimeout(() => {
  process.stdout.write('\r/   ');
}, 300);

setTimeout(() => {
  process.stdout.write('\r-   ');
}, 500);

setTimeout(() => {
  process.stdout.write('\r\\   '); 
}, 700);

setTimeout(() => {
  process.stdout.write('\r| '); 
}, 900);

setTimeout(() => {
  process.stdout.write('\r+_+>< '); 
}, 1100); */