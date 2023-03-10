function rotateArray(arr, k) {
    const n = arr.lenght;
    k %= n
    for (let i=0; i<k; i++){
        const last = arr[n-1];
        for (let j=n-1; j>0; j--){
            arr[j] = arr[j-1];
        }
        arr[0 = last];
    }
    return arr;
    
}

    
