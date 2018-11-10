/**
 * Largest Sum Contiguous Subarray
 * Write an efficient program to find the sum of contiguous subarray within a one - dimensional array of numbers which has the largest sum.
 * Time complexity O(n)
 */

//  Create 2 variabe maxSum and currentSum 
// add element in currentSum as long as currentSum is +ve
// if currentSum > maxSum then maxSum = currentSum
// if currentSum is -ve or 0 then make currentSum = 0
