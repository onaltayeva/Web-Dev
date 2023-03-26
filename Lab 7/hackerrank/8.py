from collections import deque
d = deque()
n = int(input())
for i in range(n):
    x = input()
    if(x.split()[0] == 'append'):
        d.append(x.split()[1])
    if(x.split()[0] == 'appendleft'):
        d.appendleft(x.split()[1])
    if(x.split()[0] == 'pop'):
        d.pop()
    if(x.split()[0] == 'popleft'):
        d.popleft()
for i in d:
    print(i, end = ' ')