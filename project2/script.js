function createCounter(){
    let count = 0;
    return function increment(){
        count++;
        document.getElementById("count").innerText = count;
    };

}
const counter = createCounter();
document.getElementById("btn").addEventListener("click",counter);