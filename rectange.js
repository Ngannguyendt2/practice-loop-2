function rec() {
    let width = Number(prompt("Import width of rectangle"));
    let height = Number(prompt("Import height of rectangle"));
    for (let rowIndex = 0; rowIndex < height; rowIndex++) {
        for (let colIndex = 0; colIndex < width; colIndex++) {
            if (colIndex == 0 || rowIndex == 0 || colIndex == width - 1 || rowIndex == height - 1) {
                document.write("*");
            } else {
                document.write("&nbsp&nbsp");
            }
        }
        document.write("<br>");
    }
}