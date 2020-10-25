function calculator(state) {
    if (state === "turnOff") {
        document.getElementById('led').style.opacity = "40%"
        document.getElementById('led').style.boxShadow = "none"
        document.getElementById('result').style.color = "rgba(0,0,0,0)"
        document.getElementById('result').style.textShadow = "none"
        document.getElementById('result').value = ""
    } else {
        document.getElementById('led').style.opacity = "100%"
        document.getElementById('led').style.boxShadow = "0 1px 8px red"
        document.getElementById('result').style.color = "black"
        document.getElementById('result').style.textShadow = "1px 1px 1px #333"
        document.getElementById('result').value = ""
    }
}

function calculate(type, value) {
    let finalResult = document.getElementById('result').value

    if (type === 'regValue') {
        document.getElementById('result').value += value
    } else if (type === 'action') {
        if (value === "C") {
            document.getElementById('result').value = ''
        } else if (value === "+" || value === "-" || value === "*" || value === "/" || value === ".") {
            document.getElementById('result').value += value   
        } else if (value === "√") {
            document.getElementById('result').value = Math.sqrt(eval(finalResult))
        } else if (value === "=") {
            document.getElementById('result').value = eval(finalResult)
        }
    }
}