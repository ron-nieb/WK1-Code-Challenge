//Student Grade Generator//
marks = int(input("Enter student marks (0-100): "))

if (marks > 79):
    grade = 'A'
elif 60 <= marks <= 79:
    grade = 'B'
elif 50 <= marks <= 59:
    grade = 'C'
elif 40 <= marks <= 49:
    grade = 'D'
else:
    grade = 'E'

print(f"The student's grade is: {grade}")