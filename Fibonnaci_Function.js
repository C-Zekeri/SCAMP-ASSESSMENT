function fibonnacci(n) {
    let arr = [0, 1];
    if (n<=1) {
        console.log(arr)
    }
    else {
        for (i=2; i<=n; i++) { 
            let a = arr[i-2];
            let b = arr[i-1];
        arr.push(a+b);
            }
    }
return arr; 
}
fibonnacci(8);