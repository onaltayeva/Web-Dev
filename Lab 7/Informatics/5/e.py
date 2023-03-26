n = int(input())
a = []
for i in range(n):
    x = int(input())
    a.append(x)
cnt = 0
for i in range(n-1):
    if(a[i] > 0 and a[i+1]> 0 or a[i] < 0 and a[i+1] < 0):
        cnt+=1
        print("YES")
        break
if(cnt == 0):
    print("NO")        
