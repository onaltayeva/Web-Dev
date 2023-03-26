n = int(input())
a = []
for i in range(n):
    x = int(input())
    a.append(x)
cnt = 0
aN = []
for i in range(n-1,-1,-1):
    aN.append(a[i])
print(aN)
