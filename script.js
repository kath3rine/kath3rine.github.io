// EXPERIENCE
const role = document.getElementById("role");
const company = document.getElementById("company");
const exp1 = document.getElementById('exp1');
const exp2 = document.getElementById('exp2');
const date = document.getElementById('date');
const desc = document.getElementById('description');
const col1 = "#b5e7e5";

function exp1Clicked() {
    role.html = "Researcher"
    company.innerHTML = "@ UMD Aerospace Engineering";
    exp2.style.color = col1;
    date.innerHTML = "Jan 2023";
    desc.innerHTML = "- Software R&D for autonomous systems";
}

function exp2Clicked() {
    role.html = "Research Assistant"
    company.innerHTML = "@ UMD Computational Cognitive Neuroscience & Psychiatry Lab";
    exp2.style.color = col1;
    date.innerHTML = "Aug 2022 - Dec 2022";
    desc.innerHTML = "- Computationally modeled information processing in decision making <br><br> - Developed and implemented various machine learning classifiers in Python to analyze EEG data from recognition memory tasks";
}

