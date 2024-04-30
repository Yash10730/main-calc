document.addEventListener('DOMContentLoaded', function() {
    // Define an array of button IDs
    var buttonIds = ['t1', 't2', 't3','t4'];

    // Iterate over the button IDs
    buttonIds.forEach(function(buttonId) {
        // Get the submit button corresponding to the ID
        var submitButton = document.getElementById(buttonId);

        // If the submit button exists, add an event listener
        if (submitButton) {
            submitButton.addEventListener('click', function() {
                // Log the button clicked
                console.log(buttonId.toUpperCase() + " Submit Button Clicked");

                // Call the respective function to read input values
                if (buttonId === 't1') {
                    readInputValues();
                } else if (buttonId === 't2') {
                    readInputValues1();
                } else if (buttonId === 't3') {
                    readInputValues2();
                } else if (buttonId === 't4') {
                    readInputValues3();
                }
            });
        }
    });
});


// Function to read all input values and log them to the console for the Theory section
function readInputValues() {
    const mst1Value = parseFloat(document.getElementById('mst1').value) || 0;
    const mst2Value = parseFloat(document.getElementById('mst2').value) || 0;
    const quizValue = parseFloat(document.getElementById('Qz').value) || 0;
    const assignmentValue = parseFloat(document.getElementById('Assign').value) || 0;
    const surpriseValue = parseFloat(document.getElementById('sur').value) || 0;
    const attendanceValue = parseFloat(document.getElementById('Attend').value) || 0;

    console.log("MST 1:", mst1Value);
    console.log("MST 2:", mst2Value);
    console.log("Quiz:", quizValue);
    console.log("Assignment:", assignmentValue);
    console.log("Surprise:", surpriseValue);
    console.log("Attendance:", attendanceValue);


    let mstmarks = ((mst1Value + mst2Value) / 40) * 20;
    let quiz = (quizValue / 4) * 4;
    let assignment = (assignmentValue / 10) * 10;
    let surprise = (surpriseValue / 12) * 4;
    let attendance = (attendanceValue / 2) * 2;


    let totalTheory=0;
    totalTheory=mstmarks+quiz+assignment+surprise+attendance;
    document.write("Your Marks for Theory Subject is: ",totalTheory," ","out of 40 !!");
}

// Function to read all input values and log them to the console for the Hybrid section
// Function to read all input values and log them to the console for the Hybrid section
function readInputValues1() {
    const mst1Value = parseFloat(document.getElementById('Mst').querySelectorAll('input')[0].value) || 0;
    const mst2Value = parseFloat(document.getElementById('Mst').querySelectorAll('input')[1].value) || 0;
    const exp1Value = parseFloat(document.getElementById('exp1').value) || 0;
    const exp2Value = parseFloat(document.getElementById('exp2').value) || 0;
    const exp3Value = parseFloat(document.getElementById('exp3').value) || 0;
    const exp4Value = parseFloat(document.getElementById('exp4').value) || 0;
    const quizValue = parseFloat(document.getElementById('Qz1').value) || 0;
    const classPerformanceValue = parseFloat(document.getElementById('ClassPerformance').value) || 0;
    const projectValue = parseFloat(document.getElementById('Project').value) || 0;
    const assignmentValue = parseFloat(document.getElementById('Assign1').value) || 0;
    const surpriseValue = parseFloat(document.getElementById('sur1').value) || 0;
    const attendanceValue = parseFloat(document.getElementById('Attend1').value) || 0;
    const externalLabValue = parseFloat(document.getElementById('ext').value) || 0;


    console.log("MST 1:", mst1Value);
    console.log("MST 2:", mst2Value);
    console.log("Experiment 1:", exp1Value);
    console.log("Experiment 2:", exp2Value);
    console.log("Experiment 3:", exp3Value);
    console.log("Experiment 4:", exp4Value);
    console.log("Quiz:", quizValue);
    console.log("Assignment:", assignmentValue);
    console.log("Surprise:", surpriseValue);
    console.log("Attendance:", attendanceValue);
    console.log("External Lab:", externalLabValue);

    let mst = ((mst1Value + mst2Value) / 40) * 10;
    let exp = ((exp1Value + exp2Value + exp3Value + exp4Value) / 120) * 20;
    let quiz = (quizValue / 4) * 2;
    let assignment = (assignmentValue / 10) * 5;
    let surprise = (surpriseValue / 12) * 2;
    let classPer = (classPerformanceValue / 10) * 2.5;
    let project = (projectValue / 10) * 7.5;
    let external = (externalLabValue / 40) * 20;
    let attend = (attendanceValue / 2) * 1;

    let totalMarks = mst + exp + quiz + assignment + surprise + classPer + project + external + attend;
    
    document.write("Your Marks for Hybrid subject is: ", totalMarks, " ","out of 70 !!");
    
}


function readInputValues2() {
    const assignmentValue1 = parseFloat(document.getElementById('Assignment1').value) || 0;
    const assignmentValue2 = parseFloat(document.getElementById('Assignment2').value) || 0;
    const assignmentValue3 = parseFloat(document.getElementById('Assignment3').value) || 0;
    const quizValue1 = parseFloat(document.getElementById('Quiz1').value) || 0;
    const quizValue2 = parseFloat(document.getElementById('Quiz2').value) || 0;
    const surpriseValue = parseFloat(document.getElementById('Surprise').value) || 0;
    const attendanceValue = parseFloat(document.getElementById('Attendance').value) || 0;

    console.log("Assignment 1:", assignmentValue1);
    console.log("Assignment 2:", assignmentValue2);
    console.log("Assignment 3:", assignmentValue3);
    console.log("Quiz 1:", quizValue1);
    console.log("Quiz 2:", quizValue2);
    console.log("Surprise:", surpriseValue);
    console.log("Attendance:", attendanceValue);

    let assignment = ((assignmentValue1 + assignmentValue2 + assignmentValue3) / 60) * 18;
    let quiz = ((quizValue1 + quizValue2) / 30) * 16; // Corrected the parenthesis
    let surprise = (surpriseValue / 10) * 4;
    let attendance = (attendanceValue / 2) * 2;

    let totalTheory = 0;
    // Assuming mstmarks is defined elsewhere and holds the MST marks
    totalTheory = quiz + assignment + surprise + attendance;
    console.log("Total Theory Marks:", totalTheory);
    // Uncomment the line below to display the result on the webpage
    document.write("Your Marks for Theory (Elective) is: ",totalTheory," ","out of 40 !!");
}


function readInputValues3() {
    const test1 = parseFloat(document.getElementById('Test1').value) || 0;
    const test2 = parseFloat(document.getElementById('Test2').value) || 0;
    const test3 = parseFloat(document.getElementById('Test3').value) || 0;
    const labMst = parseFloat(document.getElementById('MidTerm').value) || 0;

    console.log("Test 1:", test1);
    console.log("Test 2:", test2); // Corrected the typo
    console.log("Test 3:", test3);
    console.log("Mid-Term:", labMst);

    let test = ((test1 + test2 + test3) / 180) * 45;
    let mst = (labMst / 30) * 15;

    let totalTheory = test + mst;
    console.log("Total Theory Marks:", totalTheory);

    // Example of displaying the result in an element with the ID 'result'
    // Make sure to add an element with the ID 'result' in your HTML
    document.write("Your Marks for Theory (Lab) is: ",totalTheory," ","out of 60 !!");
}


const inputs = document.querySelectorAll('input[type="number"]');

    inputs.forEach((input, index) => {
        input.addEventListener('keydown', function(event) {
            if (event.key === "Enter") {
                event.preventDefault();
                const nextIndex = (index + 1) % inputs.length;
                inputs[nextIndex].focus();
            }
        })
    });

