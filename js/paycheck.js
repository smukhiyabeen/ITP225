// This script calculates a paycheck

// Function called when the form is submitted.
// Function performs the calculation and returns false.
function calculate() {
	'use strict';

    // these are the user inputs
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var regularHoursWorked = document.getElementById('regularHoursWorked').value;
    var overtimeHoursWorked = document.getElementById('overtimeHoursWorked').value;
    var hourlyRate = document.getElementById('hourlyRate').value;
    var ficaTaxRate = document.getElementById('ficaTaxRate').value;
    var stateTaxRate = document.getElementById('stateTaxRate').value;
    var federalTaxRate = document.getElementById('federalTaxRate').value;

    // all calculations for the outputs
    var regularPay = (regularHoursWorked * hourlyRate);
    var overtimePay = (overtimeHoursWorked * (hourlyRate * 1.5));
    var grossPay = ((regularPay + overtimePay));
    var totalTaxes = (((ficaTaxRate/100)*grossPay) + ((stateTaxRate/100)*grossPay) + ((federalTaxRate/100)*grossPay));
    var employeeName = `${firstName}  ${lastName}`;
    var netPay = (grossPay - totalTaxes);
	
    document.getElementById('regularPay').value = regularPay.toFixed(2);
    document.getElementById('overtimePay').value = overtimePay.toFixed(2);
    document.getElementById('grossPay').value = grossPay.toFixed(2);
    document.getElementById('totalTaxes').value = totalTaxes.toFixed(2);
    document.getElementById('employeeName').value = employeeName;
    document.getElementById('netPay').value = netPay.toFixed(2);
	return false;
} // End of calculate() function.

function init() {
	'use strict';
	document.getElementById('theForm').onsubmit = calculate;
} // End of init() function.
window.onload = init;