def no_teen_sum(a, b, c):
  return fix_teen(a) + fix_teen(b) + fix_teen(c)
 
def fix_teen(n):
  #if 13 <= n <= 14 or 17 <= n <= 19:
  if n in [13, 14, 17, 18, 19]:
    return 0
  return n