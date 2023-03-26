import math
def is_perfect_square(n):
    s = int(math.sqrt(n))
    if s**2 == n:
        return True
    return False
n = int(input())
i = 1
while(i<=n):
    if(is_perfect_square(i)):
        print(i)
    i+=1
