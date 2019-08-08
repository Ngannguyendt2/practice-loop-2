function rightTriangle() {
    let number = Number(prompt("Import colum"));
    let i = 0;
    for (let i = 0; i < number; i++) {
        for(let j=number;j>number-i;j--)
        {
            document.write("0");

        }
        document.write("<br>");
    }
    document.write("<br>");

    while (i < number) {
        let j = i;
        while (j < number) {
            document.write('0');
            j++;
        }
        document.write('<br>');
        i++;
    }
    document.write('<br>');

    for(let i=number;i>0;i--) {
        for (let j = number; j >= number-i; j--) {
            document.write("&nbsp;&nbsp;");
        }
        for (let k = 0; k <= number-i ; k++) {
            document.write("0");
        }
        document.write("<br>");
    }
    document.write("<br>");
    for(let i=0;i<number;i++) {
        for (let j = number; j >= number-i; j--) {
            document.write("&nbsp;&nbsp;");
        }
        for (let k = 1; k <= number-i ; k++) {
            document.write("0");
        }
        document.write("<br>");
    }
}