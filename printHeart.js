function heart() {
    let i, j;
    let size = Number(prompt("Inport size of heart"));
    for (i = size / 2; i <= size; i = i + 2) {
        for (j = 1; j < size - i; j++) {
            document.write("&nbsp&nbsp");

        }
        for (j = 1; j < i; j++) {
            document.write("A");

        }

        for (j = 1; j <= size - i; j++) {
            document.write("&nbsp&nbsp");

        }
        for (j = 1; j <= i-1; j++) {
            document.write("A");
        }

        document.write("<br>");
    }
    for (i = size; i > 0; i--) {
        for (j = i; j < size; j++) {
            document.write("&nbsp&nbsp");
        }
        for (j = 1; j <= ((i * 2) - 1); j++) {
            document.write("B");
        }
        document.write("<br>");
    }
}