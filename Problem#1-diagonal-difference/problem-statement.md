# Diagonal Difference

Given a square matrix, calculate the absolute difference between the sums of its two diagonals.

## Example

Consider the following 3 × 3 matrix:

```text
1 2 3
4 5 6
9 8 9
```

* Primary diagonal (left to right): `1 + 5 + 9 = 15`
* Secondary diagonal (right to left): `3 + 5 + 9 = 17`

Absolute difference:

```text
|15 - 17| = 2
```

---

## Function Description

Complete the function `diagonalDifference` with the following parameter:

* `arr`: a 2D array of integers representing a square matrix

### Returns

* An integer representing the absolute difference between the sums of the matrix's two diagonals.

---

## Input Format

* The first line contains a single integer `n`, the number of rows and columns in the square matrix.
* Each of the next `n` lines contains `n` space-separated integers representing the rows of the matrix.

---

## Constraints

* The matrix is guaranteed to be square (`n × n`).

---

## Sample Input

```text
3
11 2 4
4 5 6
10 8 -12
```

---

## Sample Output

```text
15
```

---

## Explanation

### Primary Diagonal

Elements:

```text
11
   5
     -12
```

Sum:

```text
11 + 5 + (-12) = 4
```

### Secondary Diagonal

Elements:

```text
     4
   5
10
```

Sum:

```text
4 + 5 + 10 = 19
```

### Absolute Difference

```text
|4 - 19| = 15
```

Therefore, the output is:

```text
15
```
