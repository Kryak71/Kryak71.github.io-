function calculateD(a, b) {
    const denominator = 2.55 * a + 0.7 * b;

    if (denominator === 0) {
        alert("Ошибка: Произошло деление на ноль! Знаменатель (2.55 * a + 0.7 * b) равен 0.");
        return null; 
    }

    const numerator = Math.abs(a * (5 * Math.pow(b, 2) - 7.8 * b) - a);
    return numerator / denominator;
}

function runCalculation() {
    const aInput = parseFloat(document.getElementById("param-a").value);
    const bInput = parseFloat(document.getElementById("param-b").value);
    const resultDiv = document.getElementById("output-task4");

    if (isNaN(aInput) || isNaN(bInput)) {
        resultDiv.innerHTML = "<span style='color: red;'>Ошибка: Пожалуйста, введите корректные числовые значения для a и b.</span>";
        return;
    }

    const result = calculateD(aInput, bInput);

    if (result !== null) {
        resultDiv.innerHTML = `<strong>Результат расчета d:</strong> ${result.toFixed(4)}`;
    } else {
        resultDiv.innerHTML = "<span style='color: red;'>Ошибка расчета (см. диалоговое окно alert).</span>";
    }
}