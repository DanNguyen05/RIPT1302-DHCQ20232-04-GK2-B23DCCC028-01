document.getElementById('sumBtn').addEventListener('click', function() {
    calculate('sum');
});

document.getElementById('subtractBtn').addEventListener('click', function() {
    calculate('subtract');
});

document.getElementById('multiplyBtn').addEventListener('click', function() {
    calculate('multiply');
});

document.getElementById('divideBtn').addEventListener('click', function() {
    calculate('divide');
});

document.getElementById('resetBtn').addEventListener('click', function() {
    document.getElementById('inputA').value = '';
    document.getElementById('inputB').value = '';
    document.getElementById('result').innerText = '';
});

function calculate(operation) {
    let a = parseFloat(document.getElementById('inputA').value);
    let b = parseFloat(document.getElementById('inputB').value);
    
    if (isNaN(a) || isNaN(b)) {
        alert('Vui lòng nhập số cho cả hai ô.');
        return;
    }

    let result;
    switch (operation) {
        case 'sum':
            result = a + b;
            break;
        case 'subtract':
            result = a - b;
            break;
        case 'multiply':
            result = a * b;
            break;
        case 'divide':
            if (b === 0) {
                alert('Số chia không được bằng 0.');
                return;
            }
            result = a / b;
            break;
        default:
            break;
    }

    document.getElementById('result').innerText = `Kết quả: ${result}`;
}
