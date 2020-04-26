var low, high, i, flag;
low =10,high=20;
console.log("THE PRIME NUMBERS BETWEEN THE GIVEN RANGE ARE");
    while (low < high)
     {
        flag = 0;

        // if low is a non-prime number, flag will be 1
        for (i = 2; i <= low / 2; ++i) {
            if (low % i == 0) {
                flag = 1;
                break;
            }
        }

        if (flag == 0)
            console.log(low);
        ++low;
    }