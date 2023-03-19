//Speed detector//
def calculate_demerit_points(speed):
    speed_limit = 70
    demerit_points = 0
    if speed <= speed_limit:
        print("Ok")
    else:
        demerit_points = (speed - speed_limit) // 5
        if demerit_points > 12:
            print("License suspended")
        else:
            print(f"Points: {demerit_points}")