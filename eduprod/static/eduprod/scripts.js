document.addEventListener("DOMContentLoaded", function() {
    let currentQuestionIndex = 0;
    const questions = JSON.parse(document.getElementById('content').getAttribute('data-questions'));
    const content = document.getElementById('content');
    const true_btn = document.getElementById('trueBtn');
    const false_btn = document.getElementById('falseBtn');
    const reset_btn = document.getElementById('resetBtn');
    const result = document.getElementById('outputTxt');

    function displayQuestion() {
        if (currentQuestionIndex < questions.length) {
            const question = questions[currentQuestionIndex].fields.question_text;
            const answer = questions[currentQuestionIndex].fields.answer_text;
            content.innerHTML = `<div class='question'>Question: ${question}</div><div class='answer' style='display: none;'>Answer: ${answer}</div>`;
            true_btn.textContent = "True";
            false_btn.textContent = "False";
            reset_btn.textContent = "Reset";
            result.style.display = "none";

        } else {
            content.innerHTML = "No more questions.";
            true_btn.style.display = "none";
            false_btn.style.display = "none";
            reset_btn.style.display = "none";
            result.style.display = "none";
        }
    }

    true_btn.addEventListener("click", function() {
        const answerElement = content.querySelector('.answer');
        if (answerElement === "True") {
            true_btn.style.display = "none";
            false_btn.style.display = "none";
            reset_btn.style.display = "none";
            result.style.display = "bloak";
        } else {
            // Do stuff here
        }
        // replicate section for the 3 buttons
    });
});