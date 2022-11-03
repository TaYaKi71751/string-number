# __ADD_INTEGER__ (a + b) ((a < 0 || b < 0) && (a != 0 && b != 0))

# (|a| > |b|)
## (a < 0,b < 0,|a| > |b|) would be (r < 0,r = -(|a| + |b|))
### result = __SET_SIGN__(__ADD_INTEGER__(|a|,|b|),__SIGN_NEGATIVE__())
### (-9) + (-4) = -(9 + 4) = -13

## (a > 0,b < 0,|a| > |b|) would be (r > 0,r = +(|a| - |b|))
### result = __SET_SIGN__(__SUB_INTEGER__(|a|,|b|),__SIGN_POSITIVE__())
### (9) + (-4) = +(9 - 4) = +5

## (a < 0,b > 0,|a| > |b|) would be (r < 0,r = -(|a| - |b|))
### result = __SET_SIGN__(__SUB_INTEGER__(|a|,|b|),__SIGN_NEGATIVE__())
### (-9) + (4) = -(9 - 4) = -5


# (|a| < |b|)
## (a < 0,b < 0,|a| < |b|) would be (r < 0,r = -(|a| + |b|))
### result = __SET_SIGN__(__ADD_INTEGER__(|a|,|b|),__SIGN_NEGATIVE__())
### (-4) + (-9) = -(4 + 9) = -13

## (a > 0,b < 0,|a| < |b|) would be (r < 0,r = -(|b| - |a|))
### result = __SET_SIGN__(__SUB_INTEGER__(|b|,|a|),__SIGN_NEGATIVE__())
### (4) + (-9) = -(9 - 4) = -5

## (a < 0,b > 0,|a| < |b|) would be (r > 0,r = +(|b| - |a|))
### result = __SET_SIGN__(__SUB_INTEGER__(|b|,|a|),__SIGN_POSITIVE__())
### (-4) + (9) = +(9 - 4) = +5


# (|a| == |b|)
## (a < 0,b < 0,|a| == |b|) would ve (r < 0,r = -(|a| + |b|))
### result = __SET_SIGN__(__ADD_INTEGER__(|a|,|b|),__SIGN_NEGATIVE__())
### (-9) + (-9) = -(9 + 9) = -18

## (a > 0,b < 0,|a| == |b|) would be (r == 0)
### result = 0
### (9) + (-9) = (9 - 9) = 0

## (a < 0,b > 0,|a| == |b|) would be (r == 0)
### result = 0
### (-9) + (9) = (9 - 9) = 0
