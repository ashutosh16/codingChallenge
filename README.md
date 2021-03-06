# codingChallenge

# Challenge 1 
Write a function which take two arguments, return the 2 elemens from array 'a', whose sum is equal to second parameter of function.

# Challenge 2
A = [{ type:'car', name:'camry', color:'red'}, {type: 'Tv', price:'$1200', color:'black'}, {color:'green', name:'chilly'},....];

B = [['type', 'car'], ['color', 'green'], ['price':'$2000']];

Write a function which will return array of objects from 'A' which are not macing condition from 'B'.

# Challenge 3
Given array representing one day share value of compony.
Array index represent the time within that day.
Find the maximum profit will beachived if we buy and sell shares at what time.

Shares = [10, 100, 500, 8, 20]

output { buyIndex: 0, sellIndex: 2 }

# Challenge 4
Write a function which will remove the nth node from end of the link-list. With O(n) complexity.

eg.
conside below is given link list.

10 --> 4 --> 3 --> 17 --> 50 --> 100

removeNthNodeFromEnd(head, n){
//Write the code.
}

removeNthNodeFromEnd(head, 2);
//10 --> 4 --> 3 --> 17 --> 100

# Challenge 5
Sort a Rotated Sorted Array

Input : [3, 4, 1, 2] 
Output : [1, 2, 3, 4]

Input : [2, 3, 4, 1]
Output : [1, 2, 3, 4]


# Challenge 6
Find shotest path from source to destination in multistage graph.

# Challenge 7
Solve Nqueen problem with backtracking method.

# Challenge 8
Dijstras algoritham to find shotest path from source to destination.

O(n^2)

Drawback: May or may not work for -ve edge graph.

# Challenge 9
Bellman ford algoritham.
Find shortest path from source to all other vertex even there is -ve edge in graph.

O(n^3)

Drawback: wll not work if there is -ve weight cycle in graph.

# Challenge 10
Graph coloring problem.

Try to color given graph with given color such that all adjacent vertex will have the different color.

Time complexity of this program is O(c^n) 'c' = no of colors and 'n' no of vertex.

Time complexity 

T(n) = c[1 + T(n + 1)]

T(n) = c + c[c + c*T(n + 2)]

T(n) = c + c^2 + c^2 * T(n + 2)

T(n) = c + c ^ 2 + c ^ 2 + ... c^k * T(n + k)

T(n) = c ^ 1 + c ^ 2 + c ^ 2 + ... + c ^ k

GP series = (c^(k-1)) - 1

Object(c^k);


# Challenge 11
Find closest common ancester node of given two nodes of binery tree.

# Tower of Hanoi
Move 3 disks from Tower A to Tower B using Tower C. We can move only 1 disk at a time. small disk can not keep on top of large disk.

# Egg Dropping Puzzle
The following is a description of the instance of this famous puzzle involving n=2 eggs and a building with k=36 floors.
Suppose that we wish to know which stories in a 36-story building are safe to drop eggs from, and which will cause the eggs to break on landing. We make a few assumptions:

1.An egg that survives a fall can be used again.

2.A broken egg must be discarded.

3.The effect of a fall is the same for all eggs.

4.If an egg breaks when dropped, then it would break if dropped from a higher floor.

5.If an egg survives a fall then it would survive a shorter fall.

6.It is not ruled out that the first-floor windows break eggs, nor is it ruled out that the 36th-floor do not cause an egg to break.

# Largest Sum Contiguous Subarray
Largest Sum Contiguous Subarray
Write an efficient program to find the sum of contiguous subarray within a one - dimensional array of numbers which has the largest sum.
 
 Time complexity O(n)

# Next greater Element for an element in array
Given an array, print the Next Greater Element (NGE) for every element.
The Next greater Element for an element x is the first greater element on the right side of x in array.
Elements for which no greater element exist, consider next greater element as -1.

# Implement two stacks in an array
Create a data structure twoStacks that represents two stacks. Implementation of twoStacks should use only one array, i.e., both stacks should use the same array for storing elements. Following functions must be supported by twoStacks.

push1(int x) ???> pushes x to first stack
push2(int x) ???> pushes x to second stack

pop1() ???> pops an element from first stack and return the popped element
pop2() ???> pops an element from second stack and return the popped element

Implementation of twoStack should be space efficient.

# Delete all occurrences of a given key in a linked list
Given a singly linked list, delete all occurrences of a given key in it. 

For example, consider the following list.

Input: 2 -> 2 -> 1 -> 8 -> 2 ->  3 ->  2 -> 7
       Key to delete = 2
Output:  1 -> 8 -> 3 -> 7 
