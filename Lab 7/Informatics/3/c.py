import math
def is_perfect_square(n):
    s = int(math.sqrt(n))
    if s**2 == n:
        return True
    return False
a = int(input())
b = int(input())
for i in range(a,b):
    if is_perfect_square(i):
        print(i)
