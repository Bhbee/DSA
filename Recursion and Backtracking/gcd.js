/**
 * @input A : Integer
 * @input B : Integer
 * 
 * @Output Integer
 */
function gcd(A, B) {
    if (A == 0)
        return B;
    return gcd(B % A, A);
}