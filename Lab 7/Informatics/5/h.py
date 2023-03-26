n = int(input())
a = []
for i in range(n):
    x = int(input())
    a.append(x)
for i in range(0,n-1,2):
    temp = a[i]
    a[i] = a[i+1]
    a[i+1] = temp
print(a)
