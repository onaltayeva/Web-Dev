d = dict()
n = int(input())
for i in range(n):
    x = input()
    if(x in d):
        d[x] += 1
    else:
        d[x] = 1                    
print(len(d))
for i,j in d.items():
    print(j, end= ' ')
    