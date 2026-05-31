function addGradeInput() {
  const container = document.getElementById("grades-container");

  const input = document.createElement("input");
  input.type = "number";
  input.className = "grade-input";
  input.placeholder = "Grade";

  container.appendChild(input);
}

function calculateAverage() {
  const inputs = document.querySelectorAll(".grade-input");
  let total = 0;
  let count = 0;

  inputs.forEach(input => {
    const value = parseFloat(input.value);

    if (!isNaN(value)) {
      total += value;
      count++;
    }
  });

  const result = document.getElementById("average-result");

  if (count === 0) {
    result.textContent = "Please enter at least one grade.";
    return;
  }

  const average = total / count;
  result.textContent = "Average Grade: " + average.toFixed(2);
}

function addGradeInputSpanish() {
  const container = document.getElementById("grades-container");

  const input = document.createElement("input");
  input.type = "number";
  input.className = "grade-input";
  input.placeholder = "Nota";

  container.appendChild(input);
}

function calculateAverageSpanish() {
  const inputs = document.querySelectorAll(".grade-input");
  let total = 0;
  let count = 0;

  inputs.forEach(input => {
    const value = parseFloat(input.value);

    if (!isNaN(value)) {
      total += value;
      count++;
    }
  });

  const result = document.getElementById("average-result");

  if (count === 0) {
    result.textContent = "Introduce al menos una nota.";
    return;
  }

  const average = total / count;
  result.textContent = "Nota media: " + average.toFixed(2);
}

function calculatePercentage() {

    const part =
        parseFloat(document.getElementById("part").value);

    const whole =
        parseFloat(document.getElementById("whole").value);

    if (!part || !whole) {

        document.getElementById(
            "percentage-result"
        ).innerHTML =
            "Please enter valid numbers.";

        return;
    }

    const result = (part / whole) * 100;

    document.getElementById(
        "percentage-result"
    ).innerHTML =
        result.toFixed(2) + "%";
}

function calculateFinalGrade() {
  const currentGrade = parseFloat(document.getElementById("current-grade").value);
  const finalWeight = parseFloat(document.getElementById("final-weight").value);
  const desiredGrade = parseFloat(document.getElementById("desired-grade").value);

  const result = document.getElementById("final-grade-result");

  if (isNaN(currentGrade) || isNaN(finalWeight) || isNaN(desiredGrade) || finalWeight <= 0 || finalWeight >= 100) {
    result.textContent = "Please enter valid numbers.";
    return;
  }

  const weightDecimal = finalWeight / 100;
  const currentWeight = 1 - weightDecimal;

  const neededGrade = (desiredGrade - currentGrade * currentWeight) / weightDecimal;

  result.textContent = "You need " + neededGrade.toFixed(2) + " on the final exam.";
}

function calculateFinalGradeSpanish() {

  const currentGrade =
    parseFloat(document.getElementById("current-grade-es").value);

  const finalWeight =
    parseFloat(document.getElementById("final-weight-es").value);

  const desiredGrade =
    parseFloat(document.getElementById("desired-grade-es").value);

  const result =
    document.getElementById("final-grade-result-es");

  if (
    isNaN(currentGrade) ||
    isNaN(finalWeight) ||
    isNaN(desiredGrade) ||
    finalWeight <= 0 ||
    finalWeight >= 100
  ) {
    result.textContent =
      "Por favor, introduce valores válidos.";
    return;
  }

  const weightDecimal = finalWeight / 100;
  const currentWeight = 1 - weightDecimal;

  const neededGrade =
    (desiredGrade - currentGrade * currentWeight) /
    weightDecimal;

  result.textContent =
    "Necesitas sacar un " +
    neededGrade.toFixed(2) +
    " en el examen final.";
}

function calculatePercentageSpanish() {
  const part = parseFloat(document.getElementById("part-es").value);
  const whole = parseFloat(document.getElementById("whole-es").value);

  const result = document.getElementById("percentage-result-es");

  if (isNaN(part) || isNaN(whole) || whole === 0) {
    result.textContent = "Por favor, introduce valores válidos.";
    return;
  }

  const percentage = (part / whole) * 100;

  result.textContent = percentage.toFixed(2) + "%";
}

function addGpaInput() {
  const container = document.getElementById("gpa-container");

  const input = document.createElement("input");
  input.type = "number";
  input.className = "gpa-input";
  input.placeholder = "Grade points (0-4)";

  container.appendChild(input);
}

function calculateGpa() {
  const inputs = document.querySelectorAll(".gpa-input");
  let total = 0;
  let count = 0;

  inputs.forEach(input => {
    const value = parseFloat(input.value);

    if (!isNaN(value)) {
      total += value;
      count++;
    }
  });

  const result = document.getElementById("gpa-result");

  if (count === 0) {
    result.textContent = "Please enter at least one grade.";
    return;
  }

  result.textContent = "Your GPA is: " + (total / count).toFixed(2);
}

function addGpaInputSpanish() {
  const container = document.getElementById("gpa-container-es");

  const input = document.createElement("input");
  input.type = "number";
  input.className = "gpa-input-es";
  input.placeholder = "Puntos GPA (0-4)";

  container.appendChild(input);
}

function calculateGpaSpanish() {
  const inputs = document.querySelectorAll(".gpa-input-es");
  let total = 0;
  let count = 0;

  inputs.forEach(input => {
    const value = parseFloat(input.value);

    if (!isNaN(value)) {
      total += value;
      count++;
    }
  });

  const result = document.getElementById("gpa-result-es");

  if (count === 0) {
    result.textContent = "Introduce al menos una nota.";
    return;
  }

  result.textContent = "Tu GPA es: " + (total / count).toFixed(2);
}

function calculateWeightedGrade() {

  const grade1 =
    parseFloat(document.getElementById("grade1").value);

  const weight1 =
    parseFloat(document.getElementById("weight1").value);

  const grade2 =
    parseFloat(document.getElementById("grade2").value);

  const weight2 =
    parseFloat(document.getElementById("weight2").value);

  const result =
    document.getElementById("weighted-result");

  if (
    isNaN(grade1) ||
    isNaN(weight1) ||
    isNaN(grade2) ||
    isNaN(weight2)
  ) {
    result.textContent =
      "Please enter valid values.";
    return;
  }

  const weightedAverage =
    (
      grade1 * weight1 +
      grade2 * weight2
    ) /
    (
      weight1 + weight2
    );

  result.textContent =
    "Weighted Grade: " +
    weightedAverage.toFixed(2);
}

function calculateWeightedGradeSpanish() {
  const grade1 = parseFloat(document.getElementById("grade1-es").value);
  const weight1 = parseFloat(document.getElementById("weight1-es").value);
  const grade2 = parseFloat(document.getElementById("grade2-es").value);
  const weight2 = parseFloat(document.getElementById("weight2-es").value);

  const result = document.getElementById("weighted-result-es");

  if (
    isNaN(grade1) ||
    isNaN(weight1) ||
    isNaN(grade2) ||
    isNaN(weight2)
  ) {
    result.textContent = "Por favor, introduce valores válidos.";
    return;
  }

  const weightedAverage =
    (grade1 * weight1 + grade2 * weight2) /
    (weight1 + weight2);

  result.textContent =
    "Nota ponderada: " + weightedAverage.toFixed(2);
}

function calculateExamScore() {
  const correct = parseFloat(document.getElementById("exam-correct").value);
  const total = parseFloat(document.getElementById("exam-total").value);

  const result = document.getElementById("exam-score-result");

  if (isNaN(correct) || isNaN(total) || total <= 0 || correct < 0 || correct > total) {
    result.textContent = "Please enter valid values.";
    return;
  }

  const percentage = (correct / total) * 100;

  result.textContent = "Exam Score: " + percentage.toFixed(2) + "%";
}

function calculateExamScoreSpanish() {
  const correct = parseFloat(document.getElementById("exam-correct-es").value);
  const total = parseFloat(document.getElementById("exam-total-es").value);

  const result = document.getElementById("exam-score-result-es");

  if (isNaN(correct) || isNaN(total) || total <= 0 || correct < 0 || correct > total) {
    result.textContent = "Por favor, introduce valores válidos.";
    return;
  }

  const percentage = (correct / total) * 100;

  result.textContent = "Nota del examen: " + percentage.toFixed(2) + "%";
}

function addAverageInput() {
  const container = document.getElementById("average-container");

  const input = document.createElement("input");
  input.type = "number";
  input.className = "average-input";
  input.placeholder = "Number";

  container.appendChild(input);
}

function calculateAverageTool() {
  const inputs = document.querySelectorAll(".average-input");

  let total = 0;
  let count = 0;

  inputs.forEach(input => {
    const value = parseFloat(input.value);

    if (!isNaN(value)) {
      total += value;
      count++;
    }
  });

  const result = document.getElementById("average-tool-result");

  if (count === 0) {
    result.textContent = "Please enter at least one number.";
    return;
  }

  result.textContent =
    "Average: " + (total / count).toFixed(2);
}

function addAverageInputSpanish() {
  const container = document.getElementById("average-container-es");

  const input = document.createElement("input");
  input.type = "number";
  input.className = "average-input-es";
  input.placeholder = "Número";

  container.appendChild(input);
}

function calculateAverageToolSpanish() {
  const inputs = document.querySelectorAll(".average-input-es");

  let total = 0;
  let count = 0;

  inputs.forEach(input => {
    const value = parseFloat(input.value);

    if (!isNaN(value)) {
      total += value;
      count++;
    }
  });

  const result = document.getElementById("average-tool-result-es");

  if (count === 0) {
    result.textContent = "Introduce al menos un número.";
    return;
  }

  result.textContent =
    "Media: " + (total / count).toFixed(2);
}

function calculateStudyHours() {

  const subjects =
    parseFloat(document.getElementById("subjects").value);

  const hours =
    parseFloat(document.getElementById("hours").value);

  const result =
    document.getElementById("study-result");

  if (
    isNaN(subjects) ||
    isNaN(hours)
  ) {
    result.textContent =
      "Please enter valid values.";
    return;
  }

  result.textContent =
    "Recommended weekly study hours: " +
    (subjects * hours).toFixed(0);
}

function calculateStudyHoursSpanish() {
  const subjects = parseFloat(document.getElementById("subjects-es").value);
  const hours = parseFloat(document.getElementById("hours-es").value);
  const result = document.getElementById("study-result-es");

  if (isNaN(subjects) || isNaN(hours)) {
    result.textContent = "Por favor, introduce valores válidos.";
    return;
  }

  result.textContent =
    "Horas semanales recomendadas: " + (subjects * hours).toFixed(0);
}