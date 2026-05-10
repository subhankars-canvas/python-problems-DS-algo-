#brutforce solution
def divisable_sum_pairs(length_array, divider, main_array): 
    valid_pair_count = 0
    for i in range(length_array):
        for j in range(i+1, length_array): 
            if (main_array[i]+main_array[j]) % divider == 0:
                valid_pair_count += 1
    return valid_pair_count

print(divisable_sum_pairs(6,3,[1, 3, 2, 6, 1, 2]))