const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calculateNetSalary(basicSalary, benefits) {
    
    const taxBrackets = [24000, 32333, 49333, 65833, 106667, 159167, 159168];
    const taxRates = [10, 15, 20, 25, 30, 32, 34];


    const nssfTierIRate = 0.06;  
    const nssfTierIILowerLimit = 6001;
    const nssfTierIILimit = 18000;
    const nssfTierIILowerRate = 0.06; 
    const nssfTierIIUpperRate = 0.06;  

    
    const housingLevyRate = 0.015;  

    
    const grossSalary = basicSalary + benefits;

   
    let nssfDeduction = 0;

    
    if (grossSalary <= nssfTierIILowerLimit) {
        nssfDeduction += nssfTierIRate * grossSalary;
    } else {
        
        const tierIIContribution = Math.min(nssfTierIILimit, grossSalary) - nssfTierIILowerLimit;
        nssfDeduction += (tierIIContribution * nssfTierIILowerRate) + ((grossSalary - nssfTierIILimit) * nssfTierIIUpperRate);
    }

    
    const housingLevy = housingLevyRate * grossSalary;


    const netSalary = grossSalary - nssfDeduction - housingLevy;

    return {
        "Gross Salary": grossSalary,
        "NSSF Deduction": nssfDeduction,
        "Affordable Housing Levy": housingLevy,
        "Net Salary": netSalary
    };
}


rl.question('Enter Basic Salary: ', (basicSalary) => {
    rl.question('Enter Benefits: ', (benefits) => {
        const result = calculateNetSalary(parseFloat(basicSalary), parseFloat(benefits));


        for (const key in result) {
            console.log(`${key}: ${result[key]}`);
        }

        rl.close();
    });
});
