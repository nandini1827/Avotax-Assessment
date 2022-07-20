function numberOfBinaryTreeToplogies(n){
    function calculateFactorial(n)
    {
        let ans = 1;
 
        for (let i = 1; i <= n; ++i)
        {
            ans *= i;
        }
 
        return ans;
    }
 
    function calculateBinomialCoeffient(n, k)
    {
        let bCoeff = 1;
 
        if (k > n - k)
            k = n - k;

        for (let i = 0; i < k; ++i)
        {
            bCoeff *= (n - i);
            bCoeff /= (i + 1);
        }
 
        return bCoeff;
    }
 

    function catalan(n)
    {
         let c = calculateBinomialCoeffient(2 * n, n);
 
        return c / (n + 1);
    }
    let count = catalan(n);
    let ans = count * calculateFactorial(n);
    return ans;
    }

exports.numberOfBinaryTreeToplogies = numberOfBinaryTreeToplogies;
