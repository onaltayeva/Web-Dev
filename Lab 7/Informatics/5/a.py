n = int(input())
a = []
for i in range(n):
    x = int(input())
    a.append(x)
for i in range(n):
    if(i%2==0):
        print(a[i], end = ' ')
