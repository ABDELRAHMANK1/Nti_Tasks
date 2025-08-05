
function gatherEmployeeData() {
    const name = prompt("Enter employee's name:");
    const age = parseInt(prompt("Enter employee's age:"));
    const yearsOfExperience = parseInt(prompt("Enter years of experience:"));
    const selfRating = parseInt(prompt("Enter self-rating (1 to 10):"));

    return { name, age, yearsOfExperience, selfRating };
}


function determineJobCategory(yearsOfExperience) {
    if (yearsOfExperience < 2) {
        return "Junior";
    } else if (yearsOfExperience >= 2 && yearsOfExperience <= 5) {
        return "Mid-Level";
    } else if (yearsOfExperience > 5 && yearsOfExperience <= 10) {
        return "Senior";
    } else {
        return "Expert";
    }
}


function determinePerformanceLevel(selfRating) {
    switch (true) {
        case selfRating >= 9:
            return "Excellent";
        case selfRating >= 7:
            return "Good";
        case selfRating >= 5:
            return "Average";
        default:
            return "Needs Improvement";
    }
}


function calculateBonus(yearsOfExperience, baseSalary) {
    let bonusPercentage;
    if (yearsOfExperience < 3) {
        bonusPercentage = 0.10;
    } else if (yearsOfExperience >= 3 && yearsOfExperience <= 5) {
        bonusPercentage = 0.15;
    } else {
        bonusPercentage = 0.20;
    }
    return baseSalary * bonusPercentage;
}

function determineWorkShift() {
    const currentHour = new Date().getHours();
    if (currentHour >= 9 && currentHour < 18) {
        return "Day Shift";
    } else {
        return "Night Shift";
    }
}


function evaluateEmployee() {
    const baseSalary = 50000; // Example base salary
    const employeeData = gatherEmployeeData();
    
    const jobCategory = determineJobCategory(employeeData.yearsOfExperience);
    const performanceLevel = determinePerformanceLevel(employeeData.selfRating);
    const bonus = calculateBonus(employeeData.yearsOfExperience, baseSalary);
    const finalSalary = baseSalary + bonus;
    const workShift = determineWorkShift();

    // Display results
    const result = `
        Employee Name: ${employeeData.name}
        Age: ${employeeData.age}
        Years of Experience: ${employeeData.yearsOfExperience}
        Job Category: ${jobCategory}
        Performance Level: ${performanceLevel}
        Base Salary: $${baseSalary}
        Bonus: $${bonus.toFixed(2)}
        Final Salary: $${finalSalary.toFixed(2)}
        Work Shift: ${workShift}
    `;

    console.log(result);
    alert(result);
    document.getElementById("employeeReport").innerText = result;
}


evaluateEmployee();
