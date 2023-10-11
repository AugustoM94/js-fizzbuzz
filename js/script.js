

const wrapperEl = document.getElementById('boxWrapper');
let element;


for (let i = 1; i <= 100; i++) {
    let bgBox;
	if (i % 3 == 0 && i % 5 == 0) {
        console.log("FizzBuzz");
	} else if (i % 5 == 0) {
        console.log("Buzz");
	} else if (i % 3 == 0) {
		console.log("Fizz");
	} else {
	     element = (i);
        console.log(i)


 const boxEl = document.createElement('div');
boxEl.className = `box ${bgBox} d-flex justify-content-center align-items-center m-2`;
boxEl.innerHTML =  i;
wrapperEl.append(boxEl);
	}
}


