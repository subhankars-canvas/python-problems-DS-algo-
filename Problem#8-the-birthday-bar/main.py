def birthday_bar_sliding_window(choclate_arr, target_sum, window_size):
    ways_count = 0

    for i in range(len(choclate_arr) - window_size+1):
        window = choclate_arr[i: i+window_size]
        if sum(window) == target_sum:
            ways_count += 1
    return ways_count
print(birthday_bar_sliding_window([1,2,1,3,2], 3, 2))