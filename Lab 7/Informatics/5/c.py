n = int(input())
a = []
for i in range(n):
    x = int(input())
    a.append(x)
cnt = 0
for i in range(n):
    if(a[i] > 0):
        cnt+=1
print(cnt)