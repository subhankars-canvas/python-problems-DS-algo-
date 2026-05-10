def breaking_records(scores_arr):
    highest_score = scores_arr[0]
    lowest_score = scores_arr[0]
    highest_score_count = 0
    lowest_score_count = 0

    for i in range(1, len(scores_arr)):

        if scores_arr[i] > highest_score:
            highest_score = scores_arr[i]
            highest_score_count += 1

        if scores_arr[i] < lowest_score: 
            lowest_score = scores_arr[i]
            lowest_score_count += 1
    return [highest_score_count, lowest_score_count]
print(breaking_records([10, 5 ,20, 20, 4, 5, 2, 25, 1]))