# Brute Force Approach

## BFA Method 1:
Time Complexity: O(n)  
Space Complexity: O(n)

Step 1: Create an Map for given array element
Step 2: Create an array `MissingNumbers`
Step 3: Loop for Kth time where `K > 0`, decreasing K each time a value is added to `missingNumbers` array
Step 4: Return the last element of an array `MissingNumbers`

## BFA Method 2:
Time Complexity: O(n)  
Space Complexity: O(1)

Step 1: Loop through the given array elements
Step 2: Increase K by 1, each time the arr[i] <= k
Step 3: Else break; the loop
Step 4: Return K

​
