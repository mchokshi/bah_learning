def findnumber(arr, k):
    """
    Find if integer k is present in array arr.
    Prints 'yes' if found, 'no' if not found.
    """
    if k in arr:
        print("yes")
    else:
        print("no")


def oddNumbers(l, r):
    """
    Print all odd numbers between l and r (inclusive).
    
    Args:
        l (int): Left boundary (inclusive)
        r (int): Right boundary (inclusive)
    """
    for num in range(l, r + 1):
        if num % 2 != 0:
            print(num)


def main():
    """
    Main method to test the findnumber and oddNumbers functions.
    """
    print("=== Testing findnumber function ===")
    # Test case 1: Example with 5 numbers
    arr1 = [1, 2, 3, 4, 5]
    k1 = 3
    print(f"Searching for {k1} in {arr1}: ", end="")
    findnumber(arr1, k1)
    
    # Test case 2: Number not found
    arr2 = [1, 2, 3, 4, 5]
    k2 = 10
    print(f"Searching for {k2} in {arr2}: ", end="")
    findnumber(arr2, k2)
    
    # Test case 3: Array with 10 numbers
    arr3 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
    k3 = 50
    print(f"Searching for {k3} in {arr3}: ", end="")
    findnumber(arr3, k3)
    
    # Test case 4: Not found in array of 10
    arr4 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
    k4 = 25
    print(f"Searching for {k4} in {arr4}: ", end="")
    findnumber(arr4, k4)
    
    print("\n=== Testing oddNumbers function ===")
    # Test case 1: Odd numbers between 1 and 10
    print("Odd numbers between 1 and 10:")
    oddNumbers(1, 10)
    
    # Test case 2: Odd numbers between 5 and 20
    print("\nOdd numbers between 5 and 20:")
    oddNumbers(5, 20)
    
    # Test case 3: Odd numbers between 2 and 9
    print("\nOdd numbers between 2 and 9:")
    oddNumbers(2, 9)


if __name__ == "__main__":
    main()
