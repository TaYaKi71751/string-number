# __SUB_INTEGER__ (a - b) (a == 0 || b == 0)

## (a == 0,b == 0) would be (r == 0)
### result = 0
### (0) - (0) = 0

# (a == 0,b != 0)
## (a == 0,b > 0) would be (r < 0,r == -(|b|))
### result = __SET_SIGN__(|b|,__SIGN_NEGATIVE__())
### (0) - (4) = -4

## (a == 0,b < 0) would be (r > 0,r == +(|b|))
### result = __SET_SIGN__(|b|,__SIGN_POSITIVE__())
### (0) - (-4) = +4

# (a != 0,b == 0)
## (a > 0,b == 0) would be (r > 0,r == +(|a|))
### result = __SET_SIGN__(|a|,__SIGN_POSITIVE__())
### (4) - (0) = +4

## (a < 0,b == 0) would be (r < 0,r == -(|a|))
### result = __SET_SIGN__(|a|,__SIGN_NEGATIVE__())
### (-4) - (0) = -4