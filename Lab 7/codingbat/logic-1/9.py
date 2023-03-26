def near_ten(num):
 # return 0 <= (num % 10) <= 2 or 8 <= (num % 10) <= 10
 return num % 10 in [0,1,2,8,9,10]