x =input()
d= int(input())
cnt =  0
for i in range(len(x)):
    if int(x[i]) ==d:
        cnt+=1
print(cnt)