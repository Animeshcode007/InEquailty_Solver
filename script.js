function solveInequality() {
    const a = parseFloat(document.getElementById('a').value);
    const b = parseFloat(document.getElementById('b').value);
    const c = parseFloat(document.getElementById('c').value);
    const operator = document.getElementById('operator').value;

    let result = "";

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        result = "Please enter valid numbers for a, b, and c.";
    } else {
        let inequality = "";
        if (a !== 0) {
            switch (operator) {
                case "<":
                    inequality = `x < ${(c - b) / a}`;
                    break;
                case "<=":
                    inequality = `x <= ${(c - b) / a}`;
                    break;
                case ">":
                    inequality = `x > ${(c - b) / a}`;
                    break;
                case ">=":
                    inequality = `x >= ${(c - b) / a}`;
                    break;
            }
        } else if (b === c) {
            inequality = "All values of x are solutions.";
        } else {
            inequality = "No solutions exist.";
        }
        result = `Solution: ${inequality}`;
    }
    document.getElementById('result').innerText = result;
}
