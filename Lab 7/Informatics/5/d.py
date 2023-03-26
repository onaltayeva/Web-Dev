n = int(input())
a = []
for i in range(n):
    x = int(input())
    a.append(x)
cnt = 0
for i in range(n-1):
    if(a[i]<a[i+1]):
        cnt+=1
print(cnt)