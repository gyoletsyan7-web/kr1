function checkYear() {
    const year = parseInt(document.getElementById('yearInput').value); 
    if (isNaN(year) || year <= 0) {
        document.getElementById('result').value = "Введите корректный год.";
        return;
    }

    const leap = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    const century = Math.floor((year - 1) / 100) + 1;
    const resultText = `Год ${year} относится к ${century} веку и ${leap ? "является" : "не является"} високосным.`;

    document.getElementById('result').value = resultText;
}

document.getElementById('verify').addEventListener('click', checkYear);
document.getElementById('send').addEventListener('click', () => {
    alert(document.getElementById('result').value);
    document.getElementById('send').addEventListener('click', function() {
  document.getElementById('UserEnter').submit();
});
});

