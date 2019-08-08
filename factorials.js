function factori() {
    let number = parseInt(prompt("Import number"));
    let sum = 1, i;
    for (i = number; i > 0; i--) {
        sum = i * sum;
    }
    document.write("Factorial of "+number+" is "+sum);

}