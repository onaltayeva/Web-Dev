s = input()
res = 0
for i in range(len(s)):
    res += int(s[i])*2**i
print(res)