const KRA_PERSONAL_RELIEF = 2400;
        
const KRA_INSURANCE_RELIEF = 5000;
        
const KRA_PENSION_LIMIT = 20000;
        
const KRA_AH_RELIEF = 9000;
        
const KRA_OOI_LIMIT = 25000;
        
const KRA_DISABILITY_EXEMPTION = 150000;
        
const NHIF_RATES = [
        
 {gross: 5999, deduction: 150},
        
 {gross: 7999, deduction: 300},
        
 {gross: 11999, deduction: 400},
        
 {gross: 14999, deduction: 500},
        
 {gross: 19999, deduction: 600},
        
 {gross: 24999, deduction: 750},
        
 {gross: 29999, deduction: 850},
        
 {gross: 34999, deduction: 900},
        
 {gross: 39999, deduction: 950},
        
 {gross: 44999, deduction: 1000},
        
 {gross: 49999, deduction: 1100},
        
 {gross: 59999, deduction: 1200},
        
 {gross: 69999, deduction: 1300},
        
 {gross: 79999, deduction: 1400},
        
 {gross: 89999, deduction: 1500},
        
 {gross: 99999, deduction: 1600},
        
 {gross: 999999999, deduction: 1700}
        
];
        
const NSSF_PENSIONABLE_PAY_LIMITS = [
        
 {tier: "I", limit: 6000},
        
 {tier: "II", limit: 18000}
        
];
        
const NSSF_RATE = 0.06;        
// Define a function to calculate PAYE
        
function calculatePAYE(basicSalary, taxablePay) {
        
 let annualTaxablePay = taxablePay * 12;
        
 let annualReliefs = KRA_PERSONAL_RELIEF + KRA_INSURANCE_RELIEF + KRA_PENSION_LIMIT;
        
 let ahRelief = KRA_AH_RELIEF;
        
 let ooiLimit = KRA_OOI_LIMIT;
        
 let disabilityExemption = KRA_DISABILITY_EXEMPTION;
     
 let annualChargeablePay = annualTaxablePay - annualReliefs - ahRelief - ooiLimit - disabilityExemption;
        
 if (annualChargeablePay <= 0) {
        
 return 0;
        
 }
        
 let paye = 0;
        
 if (annualChargeablePay <= 288000) {
        
 paye = annualChargeablePay * 0.1;
        
 } else if (annualChargeablePay <= 388000) {
        
 paye = 28800 + (annualChargeablePay - 288000) * 0.25;
        
 } else {
        
 paye = 67200 + (annualChargeablePay - 388000) * 0.3;
        
 }

 return paye / 12;
        
}      
// Define a function to calculate NHIF deduction
        
function calculateNHIF(grossSalary) {
        
 let nhifDeduction = 0;
        
 for (let i = 0; i < NHIF_RATES.length; i++) {
        
 if (grossSalary <= NHIF_RATES[i].gross) {
        
 nhifDeduction = NHIF_RATES[i].deduction;
        
 break;
        
 }
        
 }
        
 return nhifDeduction;
        
}