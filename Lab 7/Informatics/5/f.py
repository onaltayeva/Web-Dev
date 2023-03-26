n = int(input())
a = []
for i in range(n):
    x = int(input())
    a.append(x)
cnt = 0
for i in range(1,n-1):
    if(a[i-1] < a[i] and a[i]>a[i+1]):
        cnt+=1
print(cnt)
