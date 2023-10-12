

const mybox = document.getElementById('my-box');


for (let i = 1; i <= 100; i++) {

        const div = document.createElement("div")
        div.classList.add('my-small-box')
        let text, bg;

        if (i % 3 == 0 && i % 5 == 0) {
                console.log('FizzBuzz')
                bg = 'bgfizzbuzz';
                text = `FizzBuzz`;
        } else if (i % 5 == 0) {
                console.log('Buzz')
                bg = 'bgbuzz';
                text = `Buzz`;
        } else if (i % 3 == 0) {
                console.log('Fizz')
                bg = 'bgfizz';
                text = `Fizz`;
        } else {
                console.log('i')
                bg = 'bgdefault';
                text = (i);
        }
  div.classList.add(bg);
  div.innerText = text;
  mybox.append(div);

}

