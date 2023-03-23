# Project Title is Week 1 Code challenge
This project consists of student grade generator which is to grade marks, speed checker which is to calculate the speed of vehicles and either give demerit points or suspend liscence and net salary calculator which is to calculate the salary based on the KRA,NSSF and NHIF.
## Getting Started
To get a copy of this project you'll need to clone it from this github depository(https://github.com/ron-nieb/WK1-Code-Challenge)
### Prerequisites
You will also be required to have installed visual studio code on your computer for development and testing purposes.
## Running the tests
Use console on chrome or use console.log on Visual studio code
## Tests
# Grade Calculator

This simple program calculates the grade of a student based on their marks.

## How it works

The user enters their marks into an input field and clicks the "Calculate" button. The program then checks if the entered marks are valid (between 0 and 100). If the marks are invalid, an error message is displayed. If the marks are valid, the program calculates the grade based on the following criteria:

- Marks >= 80: Grade A
- Marks >= 60: Grade B
- Marks >= 50: Grade C
- Marks >= 40: Grade D
- Marks < 40: Grade E

The calculated grade is then displayed to the user.

## Usage

To use this program, you will need to create an HTML file with an input field for the user to enter their marks and a button to trigger the calculation. You will also need to include JavaScript code in your HTML file.
# Speed Checker

This simple program checks if a driver is speeding and calculates the number of demerit points they would receive.

## How it works

The user enters their speed into an input field and clicks the "Check" button. The program then checks if the entered speed is above the speed limit (70 km/h). If the speed is within the limit, an "Ok" message is displayed. If the speed is above the limit, the program calculates the number of demerit points based on how much faster than the limit they were driving (1 point for every 5 km/h above the limit).

If the calculated number of points is 12 or more, a "License suspended" message is displayed. Otherwise, the number of points is displayed to the user.

## Usage

To use this program, you will need to create an HTML file with an input field for the user to enter their speed and a button to trigger the check. You will also need to include this JavaScript code in your HTML file.
# Net Salary Calculator

This program calculates the net salary of an employee based on their gross salary and benefits.

## How it works

The user enters their gross salary and benefits into a form and submits it. The program then calculates the net salary by subtracting the benefits and NSSFDeducts from the gross salary to get the grossSalaryNSSF. It then calculates the PAYE (Pay As You Earn) tax and NHIF (National Hospital Insurance Fund) deductions based on predefined income brackets. Finally, it calculates the net salary by subtracting these deductions from the grossSalaryNSSF.

## Usage

To use this program, you will need to create an HTML file with a form for the user to enter their gross salary and benefits. You will also need to include JavaScript code in your HTML file.

## Authors
* **Ronald Ongoro Barasa** - [Ron-nieb](https://github.com/ron-nieb)
