const userInputYear = prompt('input your year of birth');
const userInputTown = prompt('input your town');
const userInputSport = prompt('input your sport details');
let yearOutput = 'nothing entered';
let townOutput = 'nothing entered';

debugger
if (!userInputYear?.trim()){
    console.log(yearOutput);
}

else {
    const positiveYearStr = String(Math.abs(+userInputYear));
    const userAge = 2025 - Number(userInputYear);
    if (positiveYearStr.length === 4 && userAge < 150 && userAge > 10 ){
        console.log(userInputYear);
        console.log(userAge);
        yearOutput = userAge;
    }
    else { yearOutput = 'not a correct year'
        console.log(yearOutput);
    }
}

if (!userInputTown?.trim()){
    console.log(townOutput);
}

else {
    townOutput = userInputTown.trim().toLowerCase();

    switch (townOutput) {
        case 'kuiv': 
            alert(`You are ${yearOutput} years old. You live on the capital of Ukraine`);
        break;
        case 'vashington':
            alert(`You are ${yearOutput} years old. You live on the capital of USA`);
        break;
        case 'london': 
            alert(`You are ${yearOutput} years old. You live on the capital of England`);
        break;
        default:
            alert(`You are ${yearOutput} years old. You live in the ${townOutput}`);
        break;
    }
}