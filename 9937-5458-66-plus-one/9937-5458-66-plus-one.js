/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let carrier = 0;
    let length = digits.length;

    for (let rev = digits.length - 1; rev >= 0; rev--) {
        if (digits[rev] === 9) {
            digits[rev] = 0;
            carrier = 1;
        } else if (digits[rev] != 9) {
            if (carrier === 1) {
                digits.splice(rev, 1, digits[rev] + 1);
                carrier = 0;
            }
            else {
                digits[rev] += 1;
            }

            break;
        }
    }

    if (carrier === 1) {
        digits.splice(0, 0, 1);
        carrier = 0;
    }

    return digits;
};