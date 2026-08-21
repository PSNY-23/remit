export interface ProblemItem {
  id: number;
  title: string;
  url: string;
  platform: 'LeetCode' | 'GeeksforGeeks' | 'SPOJ' | 'HackerEarth' | 'Other';
  chapterId: number;
  chapterTitle: string;
  topicId: string;
  topicTitle: string;
}

export interface TopicGroup {
  id: string;
  title: string;
  expectedCount: number;
  problems: ProblemItem[];
}

export interface ChapterGroup {
  id: number;
  title: string;
  icon: string;
  expectedCount: number;
  topics: TopicGroup[];
}

export const MASTER_CHAPTERS: ChapterGroup[] = [
  {
    "id": 1,
    "title": "Arrays, Strings & Hashing",
    "expectedCount": 349,
    "icon": "📦",
    "topics": [
      {
        "id": "1.1",
        "title": "Two Pointers & Sliding Window",
        "expectedCount": 25,
        "problems": [
          {
            "id": 1,
            "title": "3Sum",
            "url": "https://leetcode.com/problems/3sum",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.1",
            "topicTitle": "Two Pointers & Sliding Window"
          },
          {
            "id": 2,
            "title": "3Sum Closest",
            "url": "https://leetcode.com/problems/3sum-closest",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.1",
            "topicTitle": "Two Pointers & Sliding Window"
          },
          {
            "id": 3,
            "title": "4Sum",
            "url": "https://leetcode.com/problems/4sum/",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.1",
            "topicTitle": "Two Pointers & Sliding Window"
          },
          {
            "id": 4,
            "title": "Boats to Save People",
            "url": "https://leetcode.com/problems/boats-to-save-people/",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.1",
            "topicTitle": "Two Pointers & Sliding Window"
          },
          {
            "id": 5,
            "title": "Check if two strings are anagram of each other",
            "url": "https://leetcode.com/problems/check-if-two-strings-are-anagram-of-each-other/",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.1",
            "topicTitle": "Two Pointers & Sliding Window"
          },
          {
            "id": 6,
            "title": "Container With Most Water",
            "url": "https://leetcode.com/problems/container-with-most-water",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.1",
            "topicTitle": "Two Pointers & Sliding Window"
          },
          {
            "id": 7,
            "title": "Count number of Nice subarrays",
            "url": "https://leetcode.com/problems/count-number-of-nice-subarrays/",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.1",
            "topicTitle": "Two Pointers & Sliding Window"
          },
          {
            "id": 8,
            "title": "Fruit Into Baskets",
            "url": "https://leetcode.com/problems/fruit-into-baskets/",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.1",
            "topicTitle": "Two Pointers & Sliding Window"
          },
          {
            "id": 9,
            "title": "Group Anagrams",
            "url": "https://leetcode.com/problems/group-anagrams",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.1",
            "topicTitle": "Two Pointers & Sliding Window"
          },
          {
            "id": 10,
            "title": "Is Subsequence",
            "url": "https://leetcode.com/problems/is-subsequence/",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.1",
            "topicTitle": "Two Pointers & Sliding Window"
          },
          {
            "id": 11,
            "title": "Max Consecutive Ones III",
            "url": "https://leetcode.com/problems/max-consecutive-ones-iii/",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.1",
            "topicTitle": "Two Pointers & Sliding Window"
          },
          {
            "id": 12,
            "title": "Minimum Size Subarray Sum",
            "url": "https://leetcode.com/problems/minimum-size-subarray-sum/",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.1",
            "topicTitle": "Two Pointers & Sliding Window"
          },
          {
            "id": 13,
            "title": "Minimum Window Subsequence",
            "url": "https://leetcode.com/problems/minimum-window-subsequence/",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.1",
            "topicTitle": "Two Pointers & Sliding Window"
          },
          {
            "id": 14,
            "title": "Move Zeroes",
            "url": "https://leetcode.com/problems/move-zeroes",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.1",
            "topicTitle": "Two Pointers & Sliding Window"
          },
          {
            "id": 15,
            "title": "Move Zeros to End",
            "url": "https://leetcode.com/problems/move-zeros-to-end/",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.1",
            "topicTitle": "Two Pointers & Sliding Window"
          },
          {
            "id": 16,
            "title": "Permutation In String",
            "url": "https://leetcode.com/problems/permutation-in-string/",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.1",
            "topicTitle": "Two Pointers & Sliding Window"
          },
          {
            "id": 17,
            "title": "Print Anagrams Together",
            "url": "https://www.geeksforgeeks.org/problems/print-anagrams-together/1",
            "platform": "GeeksforGeeks",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.1",
            "topicTitle": "Two Pointers & Sliding Window"
          },
          {
            "id": 18,
            "title": "Reverse words in a given string / Palindrome Check",
            "url": "https://leetcode.com/problems/reverse-words-in-a-given-string/",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.1",
            "topicTitle": "Two Pointers & Sliding Window"
          },
          {
            "id": 19,
            "title": "Reverse Words in a String",
            "url": "https://leetcode.com/problems/reverse-words-in-a-string",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.1",
            "topicTitle": "Two Pointers & Sliding Window"
          },
          {
            "id": 20,
            "title": "Subarrays with K Different Integers",
            "url": "https://leetcode.com/problems/subarrays-with-k-different-integers/",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.1",
            "topicTitle": "Two Pointers & Sliding Window"
          },
          {
            "id": 21,
            "title": "Trapping Rainwater",
            "url": "https://leetcode.com/problems/trapping-rain-water/",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.1",
            "topicTitle": "Two Pointers & Sliding Window"
          },
          {
            "id": 22,
            "title": "Two Sum",
            "url": "https://leetcode.com/problems/two-sum",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.1",
            "topicTitle": "Two Pointers & Sliding Window"
          },
          {
            "id": 23,
            "title": "Two sum -Pairs with 0 Sum",
            "url": "https://www.geeksforgeeks.org/problems/count-pairs-with-given-sum5022/1",
            "platform": "GeeksforGeeks",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.1",
            "topicTitle": "Two Pointers & Sliding Window"
          },
          {
            "id": 24,
            "title": "Valid Anagram",
            "url": "https://leetcode.com/problems/valid-anagram",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.1",
            "topicTitle": "Two Pointers & Sliding Window"
          },
          {
            "id": 25,
            "title": "Valid Palindrome",
            "url": "https://leetcode.com/problems/valid-palindrome",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.1",
            "topicTitle": "Two Pointers & Sliding Window"
          }
        ]
      },
      {
        "id": "1.2",
        "title": "Prefix Sums & Frequency Hashing",
        "expectedCount": 13,
        "problems": [
          {
            "id": 26,
            "title": "Basic Hashing",
            "url": "https://leetcode.com/problems/basic-hashing/",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.2",
            "topicTitle": "Prefix Sums & Frequency Hashing"
          },
          {
            "id": 27,
            "title": "Contains Duplicate",
            "url": "https://leetcode.com/problems/contains-duplicate",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.2",
            "topicTitle": "Prefix Sums & Frequency Hashing"
          },
          {
            "id": 28,
            "title": "Contiguous Array",
            "url": "https://leetcode.com/problems/contiguous-array",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.2",
            "topicTitle": "Prefix Sums & Frequency Hashing"
          },
          {
            "id": 29,
            "title": "Design HashMap",
            "url": "https://leetcode.com/problems/design-hashmap/",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.2",
            "topicTitle": "Prefix Sums & Frequency Hashing"
          },
          {
            "id": 30,
            "title": "Design HashSet",
            "url": "https://leetcode.com/problems/design-hashset/",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.2",
            "topicTitle": "Prefix Sums & Frequency Hashing"
          },
          {
            "id": 31,
            "title": "Hashing In Strings | Theory",
            "url": "https://leetcode.com/problems/hashing-in-strings-theory/",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.2",
            "topicTitle": "Prefix Sums & Frequency Hashing"
          },
          {
            "id": 32,
            "title": "Insert Delete GetRandom O(1)",
            "url": "https://leetcode.com/problems/insert-delete-getrandom-o1",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.2",
            "topicTitle": "Prefix Sums & Frequency Hashing"
          },
          {
            "id": 33,
            "title": "Longest Consecutive Sequence",
            "url": "https://leetcode.com/problems/longest-consecutive-sequence",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.2",
            "topicTitle": "Prefix Sums & Frequency Hashing"
          },
          {
            "id": 34,
            "title": "Print subarray with maximum subarray sum (extended version of above problem)",
            "url": "https://leetcode.com/problems/print-subarray-with-maximum-subarray-sum/",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.2",
            "topicTitle": "Prefix Sums & Frequency Hashing"
          },
          {
            "id": 35,
            "title": "Product of Array Except Self",
            "url": "https://leetcode.com/problems/product-of-array-except-self",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.2",
            "topicTitle": "Prefix Sums & Frequency Hashing"
          },
          {
            "id": 36,
            "title": "Random Pick with Weight",
            "url": "https://leetcode.com/problems/random-pick-with-weight",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.2",
            "topicTitle": "Prefix Sums & Frequency Hashing"
          },
          {
            "id": 37,
            "title": "Subarray Sum Equals K",
            "url": "https://leetcode.com/problems/subarray-sum-equals-k",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.2",
            "topicTitle": "Prefix Sums & Frequency Hashing"
          },
          {
            "id": 38,
            "title": "Subarray Sums Divisible by K",
            "url": "https://leetcode.com/problems/subarray-sums-divisible-by-k",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.2",
            "topicTitle": "Prefix Sums & Frequency Hashing"
          }
        ]
      },
      {
        "id": "1.3",
        "title": "Intervals & Sweep-Line",
        "expectedCount": 10,
        "problems": [
          {
            "id": 39,
            "title": "Car Pooling",
            "url": "https://leetcode.com/problems/car-pooling/",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.3",
            "topicTitle": "Intervals & Sweep-Line"
          },
          {
            "id": 40,
            "title": "Employee Free Time",
            "url": "https://leetcode.com/problems/employee-free-time",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.3",
            "topicTitle": "Intervals & Sweep-Line"
          },
          {
            "id": 41,
            "title": "Insert Interval",
            "url": "https://leetcode.com/problems/insert-interval",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.3",
            "topicTitle": "Intervals & Sweep-Line"
          },
          {
            "id": 42,
            "title": "Meeting Rooms",
            "url": "https://leetcode.com/problems/meeting-rooms",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.3",
            "topicTitle": "Intervals & Sweep-Line"
          },
          {
            "id": 43,
            "title": "Merge Intervals",
            "url": "https://leetcode.com/problems/merge-intervals",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.3",
            "topicTitle": "Intervals & Sweep-Line"
          },
          {
            "id": 44,
            "title": "Merge Overlapping Subintervals",
            "url": "https://leetcode.com/problems/merge-overlapping-subintervals/",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.3",
            "topicTitle": "Intervals & Sweep-Line"
          },
          {
            "id": 45,
            "title": "Minimum Interval to Include Each Query",
            "url": "https://leetcode.com/problems/minimum-interval-to-include-each-query/",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.3",
            "topicTitle": "Intervals & Sweep-Line"
          },
          {
            "id": 46,
            "title": "Minimum number of platforms required for a railway",
            "url": "https://leetcode.com/problems/minimum-number-of-platforms-required-for-a-railway/",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.3",
            "topicTitle": "Intervals & Sweep-Line"
          },
          {
            "id": 47,
            "title": "Minimum Platforms",
            "url": "https://www.geeksforgeeks.org/problems/minimum-platforms-1587115620/1",
            "platform": "GeeksforGeeks",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.3",
            "topicTitle": "Intervals & Sweep-Line"
          },
          {
            "id": 48,
            "title": "Overlapping Intervals",
            "url": "https://www.geeksforgeeks.org/problems/overlapping-intervals--170633/1",
            "platform": "GeeksforGeeks",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.3",
            "topicTitle": "Intervals & Sweep-Line"
          }
        ]
      },
      {
        "id": "1.4",
        "title": "2D Matrices & State Transformations",
        "expectedCount": 19,
        "problems": [
          {
            "id": 49,
            "title": "Build a Matrix With Conditions",
            "url": "https://leetcode.com/problems/build-a-matrix-with-conditions/",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.4",
            "topicTitle": "2D Matrices & State Transformations"
          },
          {
            "id": 50,
            "title": "Find A Specific Pair In Matrix",
            "url": "https://www.geeksforgeeks.org/find-a-specific-pair-in-matrix/",
            "platform": "GeeksforGeeks",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.4",
            "topicTitle": "2D Matrices & State Transformations"
          },
          {
            "id": 51,
            "title": "Find the string in grid",
            "url": "https://www.geeksforgeeks.org/problems/find-the-string-in-grid0111/1",
            "platform": "GeeksforGeeks",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.4",
            "topicTitle": "2D Matrices & State Transformations"
          },
          {
            "id": 52,
            "title": "Game of Life",
            "url": "https://leetcode.com/problems/game-of-life",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.4",
            "topicTitle": "2D Matrices & State Transformations"
          },
          {
            "id": 53,
            "title": "Given a matrix of â€˜Oâ€™ and â€˜Xâ€™, replace â€˜Oâ€™ with â€˜Xâ€™ if surrounded by â€˜Xâ€™",
            "url": "https://www.geeksforgeeks.org/given-matrix-o-x-replace-o-x-surrounded-x/",
            "platform": "GeeksforGeeks",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.4",
            "topicTitle": "2D Matrices & State Transformations"
          },
          {
            "id": 54,
            "title": "Largest Area Rectangular Sub Matrix Equal Number 1s 0s",
            "url": "https://www.geeksforgeeks.org/largest-area-rectangular-sub-matrix-equal-number-1s-0s/",
            "platform": "GeeksforGeeks",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.4",
            "topicTitle": "2D Matrices & State Transformations"
          },
          {
            "id": 55,
            "title": "Largest Rectangular Sub Matrix Whose Sum 0",
            "url": "https://www.geeksforgeeks.org/largest-rectangular-sub-matrix-whose-sum-0/",
            "platform": "GeeksforGeeks",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.4",
            "topicTitle": "2D Matrices & State Transformations"
          },
          {
            "id": 56,
            "title": "Largest square formed in a matrix",
            "url": "https://www.geeksforgeeks.org/problems/largest-square-formed-in-a-matrix0806/1",
            "platform": "GeeksforGeeks",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.4",
            "topicTitle": "2D Matrices & State Transformations"
          },
          {
            "id": 57,
            "title": "Longest Increasing Path in a Matrix",
            "url": "https://leetcode.com/problems/longest-increasing-path-in-a-matrix",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.4",
            "topicTitle": "2D Matrices & State Transformations"
          },
          {
            "id": 58,
            "title": "Longest Possible Route in a Matrix with Hurdles",
            "url": "https://www.geeksforgeeks.org/problems/longest-possible-route-in-a-matrix-with-hurdles/1",
            "platform": "GeeksforGeeks",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.4",
            "topicTitle": "2D Matrices & State Transformations"
          },
          {
            "id": 59,
            "title": "Print the matrix in spiral manner",
            "url": "https://leetcode.com/problems/print-the-matrix-in-spiral-manner/",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.4",
            "topicTitle": "2D Matrices & State Transformations"
          },
          {
            "id": 60,
            "title": "Rotate A Matrix By 90 Degree In Clockwise Direction Without Using Any Extra Space",
            "url": "https://www.geeksforgeeks.org/rotate-a-matrix-by-90-degree-in-clockwise-direction-without-using-any-extra-space/",
            "platform": "GeeksforGeeks",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.4",
            "topicTitle": "2D Matrices & State Transformations"
          },
          {
            "id": 61,
            "title": "Rotate Image",
            "url": "https://leetcode.com/problems/rotate-image",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.4",
            "topicTitle": "2D Matrices & State Transformations"
          },
          {
            "id": 62,
            "title": "Rotate matrix by 90 degrees",
            "url": "https://leetcode.com/problems/rotate-matrix-by-90-degrees/",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.4",
            "topicTitle": "2D Matrices & State Transformations"
          },
          {
            "id": 63,
            "title": "Set Matrix Zeroes",
            "url": "https://leetcode.com/problems/remove-duplicates-from-sorted-array",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.4",
            "topicTitle": "2D Matrices & State Transformations"
          },
          {
            "id": 64,
            "title": "Spiral Matrix",
            "url": "https://leetcode.com/problems/spiral-matrix",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.4",
            "topicTitle": "2D Matrices & State Transformations"
          },
          {
            "id": 65,
            "title": "Transpose Matrix",
            "url": "https://leetcode.com/problems/transpose-matrix/",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.4",
            "topicTitle": "2D Matrices & State Transformations"
          },
          {
            "id": 66,
            "title": "Unique rows in boolean matrix",
            "url": "https://www.geeksforgeeks.org/problems/unique-rows-in-boolean-matrix/1",
            "platform": "GeeksforGeeks",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.4",
            "topicTitle": "2D Matrices & State Transformations"
          },
          {
            "id": 67,
            "title": "Zig Zag or Spiral Traversal",
            "url": "https://leetcode.com/problems/zig-zag-or-spiral-traversal/",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.4",
            "topicTitle": "2D Matrices & State Transformations"
          }
        ]
      },
      {
        "id": "1.5",
        "title": "Array & String Fundamentals",
        "expectedCount": 282,
        "problems": [
          {
            "id": 68,
            "title": "A Program To Check If Strings Are Rotations Of Each Other",
            "url": "https://www.geeksforgeeks.org/a-program-to-check-if-strings-are-rotations-of-each-other/",
            "platform": "GeeksforGeeks",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 69,
            "title": "Add Binary",
            "url": "https://leetcode.com/problems/add-binary",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 70,
            "title": "AGGRCOW",
            "url": "https://www.spoj.com/problems/AGGRCOW/",
            "platform": "SPOJ",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 71,
            "title": "ANARC05B",
            "url": "https://www.spoj.com/problems/ANARC05B/",
            "platform": "SPOJ",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 72,
            "title": "Arithmetic Expression Evalution",
            "url": "https://www.geeksforgeeks.org/arithmetic-expression-evalution/#:~:text=The%20stack%20organization%20is%20very,i.e.%2C%20A%20%2B%20B\\",
            "platform": "GeeksforGeeks",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 73,
            "title": "Arithmetic Number",
            "url": "https://www.geeksforgeeks.org/problems/arithmetic-number2815/1",
            "platform": "GeeksforGeeks",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 74,
            "title": "ARRANGE",
            "url": "https://www.spoj.com/problems/ARRANGE/",
            "platform": "SPOJ",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 75,
            "title": "Array Subset",
            "url": "https://www.geeksforgeeks.org/problems/array-subset-of-another-array2317/1",
            "platform": "GeeksforGeeks",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 76,
            "title": "Backspace String Compare",
            "url": "https://leetcode.com/problems/backspace-string-compare",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 77,
            "title": "Balanced Paranthesis",
            "url": "https://leetcode.com/problems/balanced-paranthesis/",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 78,
            "title": "Beautiful Arrangement",
            "url": "https://leetcode.com/problems/beautiful-arrangement",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 79,
            "title": "Binary Subarrays With Sum",
            "url": "https://leetcode.com/problems/binary-subarrays-with-sum/",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 80,
            "title": "Boyer Moore Algorithm for Pattern Searching",
            "url": "https://www.geeksforgeeks.org/boyer-moore-algorithm-for-pattern-searching/",
            "platform": "GeeksforGeeks",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 81,
            "title": "Buy Maximum Stocks Stocks Can Bought Th Day",
            "url": "https://www.geeksforgeeks.org/buy-maximum-stocks-stocks-can-bought-th-day/",
            "platform": "GeeksforGeeks",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 82,
            "title": "Car Fleet",
            "url": "https://leetcode.com/problems/car-fleet/",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 83,
            "title": "Check if a Number is Odd or Not",
            "url": "https://leetcode.com/problems/check-if-a-number-is-odd-or-not/",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 84,
            "title": "Check if there exists a subsequence with sum K",
            "url": "https://leetcode.com/problems/check-if-there-exists-a-subsequence-with-sum-k/",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 85,
            "title": "CHOCOLA",
            "url": "https://www.spoj.com/problems/CHOCOLA/",
            "platform": "SPOJ",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 86,
            "title": "CHOCOLA - Chocolate",
            "url": "https://www.spoj.com/problems/CHOCOLA/",
            "platform": "SPOJ",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 87,
            "title": "Chocolate Distribution Problem",
            "url": "https://www.geeksforgeeks.org/problems/chocolate-distribution-problem3825/1",
            "platform": "GeeksforGeeks",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 88,
            "title": "Choose and Swap",
            "url": "https://www.geeksforgeeks.org/problems/choose-and-swap0531/1",
            "platform": "GeeksforGeeks",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 89,
            "title": "Coin Game Winner Every Player Three Choices",
            "url": "https://www.geeksforgeeks.org/coin-game-winner-every-player-three-choices/",
            "platform": "GeeksforGeeks",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 90,
            "title": "Concatenation of Array",
            "url": "https://leetcode.com/problems/concatenation-of-array/",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 91,
            "title": "Construct a BT from Preorder and Inorder",
            "url": "https://leetcode.com/problems/construct-a-bt-from-preorder-and-inorder/",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 92,
            "title": "Convert Sentence Equivalent Mobile Numeric Keypad Sequence",
            "url": "https://www.geeksforgeeks.org/convert-sentence-equivalent-mobile-numeric-keypad-sequence/",
            "platform": "GeeksforGeeks",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 93,
            "title": "Count and Say",
            "url": "https://leetcode.com/problems/count-and-say",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 94,
            "title": "Count Derangements Permutation Such That No Element Appears In Its Original Position",
            "url": "https://www.geeksforgeeks.org/count-derangements-permutation-such-that-no-element-appears-in-its-original-position/",
            "platform": "GeeksforGeeks",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 95,
            "title": "Count Good Numbers",
            "url": "https://leetcode.com/problems/count-good-numbers/",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 96,
            "title": "Count of Range Sum",
            "url": "https://leetcode.com/problems/count-of-range-sum",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 97,
            "title": "Count Palindromic Subsequences",
            "url": "https://www.geeksforgeeks.org/problems/count-palindromic-subsequences/1",
            "platform": "GeeksforGeeks",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 98,
            "title": "Count partitions with given difference",
            "url": "https://www.geeksforgeeks.org/problems/partitions-with-given-difference/1",
            "platform": "GeeksforGeeks",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 99,
            "title": "Count Squares",
            "url": "https://www.geeksforgeeks.org/problems/count-squares3649/1",
            "platform": "GeeksforGeeks",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 100,
            "title": "Count subarrays with given sum",
            "url": "https://leetcode.com/problems/count-subarrays-with-given-sum/",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 101,
            "title": "Count Subsequences Product Less K",
            "url": "https://www.geeksforgeeks.org/count-subsequences-product-less-k/",
            "platform": "GeeksforGeeks",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 102,
            "title": "Count the Number of Set Bi",
            "url": "https://leetcode.com/problems/count-the-number-of-set-bi/",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 103,
            "title": "Count the Reversals",
            "url": "https://www.geeksforgeeks.org/problems/count-the-reversals0401/1",
            "platform": "GeeksforGeeks",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 104,
            "title": "Count total nodes in a complete BT",
            "url": "https://leetcode.com/problems/count-total-nodes-in-a-complete-bt/",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 105,
            "title": "Counting Frequencies of Array Elements",
            "url": "https://leetcode.com/problems/counting-frequencies-of-array-elements/",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 106,
            "title": "Cpp Basics",
            "url": "https://leetcode.com/problems/cpp-basics/",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 107,
            "title": "Critical Connections in a Network",
            "url": "https://leetcode.com/problems/critical-connections-in-a-network",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 108,
            "title": "DEFKIN",
            "url": "https://www.spoj.com/problems/DEFKIN/",
            "platform": "SPOJ",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 109,
            "title": "Delete and Earn",
            "url": "https://leetcode.com/problems/delete-and-earn",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 110,
            "title": "Delete nodes having greater value on right",
            "url": "https://www.geeksforgeeks.org/problems/delete-nodes-having-greater-value-on-right/1",
            "platform": "GeeksforGeeks",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 111,
            "title": "Design Add and Search Words Data Structure",
            "url": "https://leetcode.com/problems/design-add-and-search-words-data-structure",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 112,
            "title": "Design In-Memory File System",
            "url": "https://leetcode.com/problems/design-in-memory-file-system",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 113,
            "title": "Detect Squares",
            "url": "https://leetcode.com/problems/detect-squares/",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 114,
            "title": "DFS",
            "url": "https://leetcode.com/problems/dfs/",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 115,
            "title": "DIEHARD",
            "url": "https://www.spoj.com/problems/DIEHARD/",
            "platform": "SPOJ",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 116,
            "title": "Different Ways to Evaluate a Boolean Expression",
            "url": "https://leetcode.com/problems/different-ways-to-evaluate-a-boolean-expression/",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 117,
            "title": "Djisktra's Algorithm",
            "url": "https://leetcode.com/problems/djisktra-s-algorithm/",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 118,
            "title": "Easy and Medium",
            "url": "https://leetcode.com/problems/easy-and-medium/",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 119,
            "title": "EKO",
            "url": "https://www.spoj.com/problems/EKO/",
            "platform": "SPOJ",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 120,
            "title": "Evaluate Division",
            "url": "https://leetcode.com/problems/evaluate-division",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 121,
            "title": "Evaluation of Postfix Expression",
            "url": "https://www.geeksforgeeks.org/problems/evaluation-of-postfix-expression1735/1",
            "platform": "GeeksforGeeks",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 122,
            "title": "Excel Sheet Column Title",
            "url": "https://leetcode.com/problems/excel-sheet-column-title",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 123,
            "title": "Extra Characters in a String",
            "url": "https://leetcode.com/problems/extra-characters-in-a-string/",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 124,
            "title": "Find Count Number Given String Present 2d Character Array",
            "url": "https://www.geeksforgeeks.org/find-count-number-given-string-present-2d-character-array/",
            "platform": "GeeksforGeeks",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 125,
            "title": "Find If There Is A Path Of More Than K Length From A Source",
            "url": "https://www.geeksforgeeks.org/find-if-there-is-a-path-of-more-than-k-length-from-a-source/",
            "platform": "GeeksforGeeks",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 126,
            "title": "Find in Mountain Array",
            "url": "https://leetcode.com/problems/find-in-mountain-array/",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 127,
            "title": "Find Maximum Meetings In One Room",
            "url": "https://www.geeksforgeeks.org/find-maximum-meetings-in-one-room/",
            "platform": "GeeksforGeeks",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 128,
            "title": "Find missing number",
            "url": "https://leetcode.com/problems/find-missing-number/",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 129,
            "title": "Find out how many times the array is rotated",
            "url": "https://leetcode.com/problems/find-out-how-many-times-the-array-is-rotated/",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 130,
            "title": "Find Pair Given Difference",
            "url": "https://www.geeksforgeeks.org/problems/find-pair-given-difference1559/1",
            "platform": "GeeksforGeeks",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 131,
            "title": "Find row with maximum 1's",
            "url": "https://leetcode.com/problems/find-row-with-maximum-1-s/",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 132,
            "title": "Find Shortest Safe Route In A Path With Landmines",
            "url": "https://www.geeksforgeeks.org/find-shortest-safe-route-in-a-path-with-landmines/",
            "platform": "GeeksforGeeks",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 133,
            "title": "Find square root of a number",
            "url": "https://leetcode.com/problems/sqrtx/",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 134,
            "title": "Find the Duplicate Number",
            "url": "https://leetcode.com/problems/find-the-duplicate-number",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 135,
            "title": "Find the Index of the First Occurrence in a String",
            "url": "https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 136,
            "title": "Find The K Th Permutation Sequence Of First N Natural Numbers",
            "url": "https://www.geeksforgeeks.org/find-the-k-th-permutation-sequence-of-first-n-natural-numbers/",
            "platform": "GeeksforGeeks",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 137,
            "title": "Find the Most Competitive Subsequence",
            "url": "https://leetcode.com/problems/find-the-most-competitive-subsequence",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 138,
            "title": "Find the number that appears once, and other numbers twice.",
            "url": "https://leetcode.com/problems/find-the-number-that-appears-once-and-other-numbers-twice/",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 139,
            "title": "Find the repeating and missing number",
            "url": "https://leetcode.com/problems/find-the-repeating-and-missing-number/",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 140,
            "title": "Find the Town Judge",
            "url": "https://leetcode.com/problems/find-the-town-judge/",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 141,
            "title": "First and last occurrence",
            "url": "https://leetcode.com/problems/first-and-last-occurrence/",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 142,
            "title": "First negative in every window of size k",
            "url": "https://www.geeksforgeeks.org/problems/first-negative-integer-in-every-window-of-size-k3345/1",
            "platform": "GeeksforGeeks",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 143,
            "title": "For loops",
            "url": "https://leetcode.com/problems/for-loops/",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 144,
            "title": "Four Sum",
            "url": "https://leetcode.com/problems/4sum",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 145,
            "title": "Function To Find Number Of Customers Who Could Not Get A Computer",
            "url": "https://www.geeksforgeeks.org/function-to-find-number-of-customers-who-could-not-get-a-computer/",
            "platform": "GeeksforGeeks",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 146,
            "title": "Functions (Pass by Reference and Value)",
            "url": "https://leetcode.com/problems/functions/",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 147,
            "title": "Game with String",
            "url": "https://www.geeksforgeeks.org/problems/game-with-string4100/1",
            "platform": "GeeksforGeeks",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 148,
            "title": "GCJ101BB",
            "url": "https://www.spoj.com/problems/GCJ101BB/",
            "platform": "SPOJ",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 149,
            "title": "Generate Binary Strings Without Consecutive 1s",
            "url": "https://leetcode.com/problems/generate-binary-strings-without-consecutive-1s/",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 150,
            "title": "GERGOVIA",
            "url": "https://www.spoj.com/problems/GERGOVIA/",
            "platform": "SPOJ",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 151,
            "title": "Given N Appointments Find Conflicting Appointments",
            "url": "https://www.geeksforgeeks.org/given-n-appointments-find-conflicting-appointments/",
            "platform": "GeeksforGeeks",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 152,
            "title": "Greatest Common Divisor of Strings",
            "url": "https://leetcode.com/problems/greatest-common-divisor-of-strings/",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 153,
            "title": "Greatest Common Divisor Traversal",
            "url": "https://leetcode.com/problems/greatest-common-divisor-traversal/",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 154,
            "title": "Guess Number Higher Or Lower",
            "url": "https://leetcode.com/problems/guess-number-higher-or-lower/",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 155,
            "title": "Hand of Straights",
            "url": "https://leetcode.com/problems/hand-of-straights/",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 156,
            "title": "Happy Number",
            "url": "https://leetcode.com/problems/happy-number/",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 157,
            "title": "Hard",
            "url": "https://leetcode.com/problems/hard/",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 158,
            "title": "Highest Occurring Element in an Array",
            "url": "https://leetcode.com/problems/highest-occurring-element-in-an-array/",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 159,
            "title": "Huffman Encoding",
            "url": "https://www.geeksforgeeks.org/problems/huffman-encoding3345/1",
            "platform": "GeeksforGeeks",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 160,
            "title": "If ElseIf",
            "url": "https://leetcode.com/problems/if-elseif/",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 161,
            "title": "Infix to Prefix Conversion",
            "url": "https://leetcode.com/problems/infix-to-prefix-conversion/",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 162,
            "title": "Input Output",
            "url": "https://leetcode.com/problems/input-output/",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 163,
            "title": "Integer Break",
            "url": "https://leetcode.com/problems/integer-break/",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 164,
            "title": "Integer to Roman",
            "url": "https://leetcode.com/problems/integer-to-roman",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 165,
            "title": "Interleaved Strings",
            "url": "https://www.geeksforgeeks.org/problems/interleaved-strings/1",
            "platform": "GeeksforGeeks",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 166,
            "title": "Island Perimeter",
            "url": "https://leetcode.com/problems/island-perimeter/",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 167,
            "title": "Isomorphic String",
            "url": "https://leetcode.com/problems/isomorphic-string/",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 168,
            "title": "K-th element of two Arrays",
            "url": "https://www.geeksforgeeks.org/problems/k-th-element-of-two-sorted-array1317/1",
            "platform": "GeeksforGeeks",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 169,
            "title": "K-th Largest Sum Contiguous Subarray",
            "url": "https://www.geeksforgeeks.org/problems/k-th-largest-sum-contiguous-subarray/1",
            "platform": "GeeksforGeeks",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 170,
            "title": "Kadane's Algorithm",
            "url": "https://www.geeksforgeeks.org/problems/kadanes-algorithm-1587115620/1",
            "platform": "GeeksforGeeks",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 171,
            "title": "KMP Algorithm or LPS array",
            "url": "https://leetcode.com/problems/kmp-algorithm-or-lps-array/",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 172,
            "title": "Kth Missing Positive Number",
            "url": "https://leetcode.com/problems/kth-missing-positive-number/",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 173,
            "title": "Largest Divisible Subset",
            "url": "https://leetcode.com/problems/largest-divisible-subset/",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 174,
            "title": "Largest Element",
            "url": "https://leetcode.com/problems/largest-element/",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 175,
            "title": "Largest Odd Number in a String",
            "url": "https://leetcode.com/problems/largest-odd-number-in-a-string/",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 176,
            "title": "Leaders in an Array",
            "url": "https://www.geeksforgeeks.org/problems/leaders-in-an-array-1587115620/1",
            "platform": "GeeksforGeeks",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 177,
            "title": "Left Rotate Array by K Places",
            "url": "https://leetcode.com/problems/left-rotate-array-by-k-places/",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 178,
            "title": "Length of Last Word",
            "url": "https://leetcode.com/problems/length-of-last-word/",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 179,
            "title": "Longest Common Prefix",
            "url": "https://leetcode.com/problems/longest-common-prefix",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 180,
            "title": "Longest happy prefix",
            "url": "https://leetcode.com/problems/longest-happy-prefix/",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 181,
            "title": "Longest Happy String",
            "url": "https://leetcode.com/problems/longest-happy-string/",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 182,
            "title": "Longest Palindrome",
            "url": "https://leetcode.com/problems/longest-palindrome",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 183,
            "title": "Longest Prefix Suffix",
            "url": "https://www.geeksforgeeks.org/problems/longest-prefix-suffix2527/1",
            "platform": "GeeksforGeeks",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 184,
            "title": "Longest Repeating Character Replacement",
            "url": "https://leetcode.com/problems/longest-repeating-character-replacement",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 185,
            "title": "Longest Repeating Subsequence",
            "url": "https://www.geeksforgeeks.org/problems/longest-repeating-subsequence2004/1",
            "platform": "GeeksforGeeks",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 186,
            "title": "Longest subarray with given sum K(positives)",
            "url": "https://leetcode.com/problems/longest-subarray-with-given-sum-k/",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 187,
            "title": "Longest subarray with sum K",
            "url": "https://leetcode.com/problems/longest-subarray-with-sum-k/",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 188,
            "title": "Longest subsequence-1",
            "url": "https://www.geeksforgeeks.org/problems/longest-subsequence-such-that-difference-between-adjacents-is-one4724/1",
            "platform": "GeeksforGeeks",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 189,
            "title": "Longest Turbulent Subarray",
            "url": "https://leetcode.com/problems/longest-turbulent-subarray/",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 190,
            "title": "M",
            "url": "https://leetcode.com/problems/m/",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 191,
            "title": "Making A Large Island",
            "url": "https://leetcode.com/problems/making-a-large-island",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 192,
            "title": "Max Area of Island",
            "url": "https://leetcode.com/problems/max-area-of-island/",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 193,
            "title": "Maximal Square",
            "url": "https://leetcode.com/problems/maximal-square",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 194,
            "title": "Maximize sum after K negations",
            "url": "https://www.geeksforgeeks.org/problems/maximize-sum-after-k-negations1149/1",
            "platform": "GeeksforGeeks",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 195,
            "title": "Maximum And Minimum In An Array",
            "url": "https://www.geeksforgeeks.org/maximum-and-minimum-in-an-array/",
            "platform": "GeeksforGeeks",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 196,
            "title": "Maximum Consecutive Ones",
            "url": "https://leetcode.com/problems/maximum-consecutive-ones/",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 197,
            "title": "Maximum Depth in BT",
            "url": "https://leetcode.com/problems/maximum-depth-in-bt/",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 198,
            "title": "Maximum Length of Pair Chain",
            "url": "https://leetcode.com/problems/maximum-length-of-pair-chain",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 199,
            "title": "Maximum Length of Repeated Subarray",
            "url": "https://leetcode.com/problems/maximum-length-of-repeated-subarray",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 200,
            "title": "Maximum Number of Visible Points",
            "url": "https://leetcode.com/problems/maximum-number-of-visible-points",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 201,
            "title": "Maximum of minimum for every window size",
            "url": "https://www.geeksforgeeks.org/problems/maximum-of-minimum-for-every-window-size3453/1",
            "platform": "GeeksforGeeks",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 202,
            "title": "Maximum Points You Can Obtain from Cards",
            "url": "https://leetcode.com/problems/maximum-points-you-can-obtain-from-cards",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 203,
            "title": "Maximum Product of Three Numbers",
            "url": "https://leetcode.com/problems/maximum-product-of-three-numbers",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 204,
            "title": "Maximum Profit in Job Scheduling",
            "url": "https://leetcode.com/problems/maximum-profit-in-job-scheduling",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 205,
            "title": "Maximum Rectangles",
            "url": "https://leetcode.com/problems/maximum-rectangles/",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 206,
            "title": "Maximum Subarray",
            "url": "https://leetcode.com/problems/maximum-subarray",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 207,
            "title": "Maximum Subsequence Sum Such That No Three Are Consecutive",
            "url": "https://www.geeksforgeeks.org/maximum-subsequence-sum-such-that-no-three-are-consecutive/",
            "platform": "GeeksforGeeks",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 208,
            "title": "Maximum Sum Absolute Difference Array",
            "url": "https://www.geeksforgeeks.org/maximum-sum-absolute-difference-array/",
            "platform": "GeeksforGeeks",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 209,
            "title": "Maximum Sum Circular Subarray",
            "url": "https://leetcode.com/problems/maximum-sum-circular-subarray/",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 210,
            "title": "Maximum Sum Combination",
            "url": "https://leetcode.com/problems/maximum-sum-combination/",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 211,
            "title": "Maximum sum of non adjacent elements",
            "url": "https://leetcode.com/problems/maximum-sum-of-non-adjacent-elements/",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 212,
            "title": "Maximum Trains Stoppage Can Provided",
            "url": "https://www.geeksforgeeks.org/maximum-trains-stoppage-can-provided/",
            "platform": "GeeksforGeeks",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 213,
            "title": "Merge Strings Alternately",
            "url": "https://leetcode.com/problems/merge-strings-alternately/",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 214,
            "title": "Merge Triplets to Form Target Triplet",
            "url": "https://leetcode.com/problems/merge-triplets-to-form-target-triplet/",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 215,
            "title": "Merge Without Extra Space",
            "url": "https://www.geeksforgeeks.org/problems/merge-two-sorted-arrays-1587115620/1",
            "platform": "GeeksforGeeks",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 216,
            "title": "Min Number of Flips",
            "url": "https://www.geeksforgeeks.org/problems/min-number-of-flips3210/1",
            "platform": "GeeksforGeeks",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 217,
            "title": "Minimize Cash Flow among a given set of friends who have borrowed money from each other",
            "url": "https://www.geeksforgeeks.org/minimize-cash-flow-among-given-set-friends-borrowed-money/",
            "platform": "GeeksforGeeks",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 218,
            "title": "Minimize Cash Flow Among Given Set Friends Borrowed Money",
            "url": "https://www.geeksforgeeks.org/minimize-cash-flow-among-given-set-friends-borrowed-money/",
            "platform": "GeeksforGeeks",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 219,
            "title": "Minimize the Heights II",
            "url": "https://www.geeksforgeeks.org/problems/minimize-the-heights3351/1",
            "platform": "GeeksforGeeks",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 220,
            "title": "Minimum Array End",
            "url": "https://leetcode.com/problems/minimum-array-end/",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 221,
            "title": "Minimum Characters Added Front Make String Palindrome",
            "url": "https://www.geeksforgeeks.org/minimum-characters-added-front-make-string-palindrome/",
            "platform": "GeeksforGeeks",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 222,
            "title": "Minimum Cost Cut Board Squares",
            "url": "https://www.geeksforgeeks.org/minimum-cost-cut-board-squares/",
            "platform": "GeeksforGeeks",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 223,
            "title": "Minimum cost to cut the stick",
            "url": "https://leetcode.com/problems/minimum-cost-to-cut-the-stick/",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 224,
            "title": "Minimum Cost to Merge Stones",
            "url": "https://leetcode.com/problems/minimum-cost-to-merge-stones",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 225,
            "title": "Minimum Deletions to Make Character Frequencies Unique",
            "url": "https://leetcode.com/problems/minimum-deletions-to-make-character-frequencies-unique",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 226,
            "title": "Minimum Edges Reverse Make Path Source Destination",
            "url": "https://www.geeksforgeeks.org/minimum-edges-reverse-make-path-source-destination/",
            "platform": "GeeksforGeeks",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 227,
            "title": "Minimum Insertion Steps to Make a String Palindrome",
            "url": "https://leetcode.com/problems/minimum-insertion-steps-to-make-a-string-palindrome",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 228,
            "title": "Minimum insertions or deletions to convert string A to B",
            "url": "https://leetcode.com/problems/minimum-insertions-or-deletions-to-convert-string-a-to-b/",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 229,
            "title": "Minimum Jumps",
            "url": "https://www.geeksforgeeks.org/problems/minimum-number-of-jumps-1587115620/1",
            "platform": "GeeksforGeeks",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 230,
            "title": "Minimum Moves to Equal Array Elements",
            "url": "https://leetcode.com/problems/minimum-moves-to-equal-array-elements-ii",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 231,
            "title": "Minimum Number of Refueling Stops",
            "url": "https://leetcode.com/problems/minimum-number-of-refueling-stops",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 232,
            "title": "Minimum Removals Array Make Max Min K",
            "url": "http://geeksforgeeks.org/minimum-removals-array-make-max-min-k/",
            "platform": "GeeksforGeeks",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 233,
            "title": "Minimum sum",
            "url": "https://www.geeksforgeeks.org/problems/minimum-sum4058/1",
            "platform": "GeeksforGeeks",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 234,
            "title": "Minimum Sum Absolute Difference Pairs Two Arrays",
            "url": "https://www.geeksforgeeks.org/minimum-sum-absolute-difference-pairs-two-arrays/",
            "platform": "GeeksforGeeks",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 235,
            "title": "Minimum swaps and K together",
            "url": "https://www.geeksforgeeks.org/problems/minimum-swaps-required-to-bring-all-elements-less-than-or-equal-to-k-together4847/1",
            "platform": "GeeksforGeeks",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 236,
            "title": "Minimum Time to Make Rope Colorful",
            "url": "https://leetcode.com/problems/minimum-time-to-make-rope-colorful",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 237,
            "title": "Missing And Repeating",
            "url": "https://www.geeksforgeeks.org/problems/find-missing-and-repeating2512/1",
            "platform": "GeeksforGeeks",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 238,
            "title": "Missing Number",
            "url": "https://leetcode.com/problems/missing-number",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 239,
            "title": "Mobile numeric keypad",
            "url": "https://www.geeksforgeeks.org/problems/mobile-numeric-keypad5456/1",
            "platform": "GeeksforGeeks",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 240,
            "title": "Move Negative Numbers Beginning Positive End Constant Extra Space",
            "url": "https://www.geeksforgeeks.org/move-negative-numbers-beginning-positive-end-constant-extra-space/",
            "platform": "GeeksforGeeks",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 241,
            "title": "Multiply Strings",
            "url": "https://leetcode.com/problems/multiply-strings/",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 242,
            "title": "N-th Tribonacci Number",
            "url": "https://leetcode.com/problems/n-th-tribonacci-number/",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 243,
            "title": "nCr",
            "url": "https://www.geeksforgeeks.org/problems/ncr1019/1",
            "platform": "GeeksforGeeks",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 244,
            "title": "Next Permutation",
            "url": "https://leetcode.com/problems/next-permutation",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 245,
            "title": "Ninja and his Friends",
            "url": "https://leetcode.com/problems/ninja-and-his-friends/",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 246,
            "title": "Ninja's training",
            "url": "https://www.geeksforgeeks.org/problems/geeks-training/1",
            "platform": "GeeksforGeeks",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 247,
            "title": "Number of Greater Elements to the Right",
            "url": "https://leetcode.com/problems/number-of-greater-elements-to-the-right/",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 248,
            "title": "Number of ways to arrive at destination",
            "url": "https://leetcode.com/problems/number-of-ways-to-arrive-at-destination/",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 249,
            "title": "Optimum Location Point Minimize Total Distance",
            "url": "https://www.geeksforgeeks.org/optimum-location-point-minimize-total-distance/#:~:text=We%20need%20to%20find%20a,set%20of%20points%20is%20minimum.&text=In%20above%20figure%20optimum%20location,is%20minimum%20obtainable%20total%20distance.",
            "platform": "GeeksforGeeks",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 250,
            "title": "Pairs with certain difference",
            "url": "https://www.geeksforgeeks.org/problems/pairs-with-specific-difference1533/1",
            "platform": "GeeksforGeeks",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 251,
            "title": "Palindrome Pairs",
            "url": "https://leetcode.com/problems/palindrome-pairs",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 252,
            "title": "Palindrome String",
            "url": "https://www.geeksforgeeks.org/problems/palindrome-string0817/1",
            "platform": "GeeksforGeeks",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 253,
            "title": "Palindromic Array",
            "url": "https://www.geeksforgeeks.org/problems/palindromic-array-1587115620/1",
            "platform": "GeeksforGeeks",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 254,
            "title": "Partition Array for Maximum Sum",
            "url": "https://leetcode.com/problems/partition-array-for-maximum-sum/",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 255,
            "title": "Partition Labels",
            "url": "https://leetcode.com/problems/partition-labels/",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 256,
            "title": "Pascal's Triangle I",
            "url": "https://leetcode.com/problems/pascal-s-triangle-i/",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 257,
            "title": "Pattern 1",
            "url": "https://leetcode.com/problems/pattern-1/",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 258,
            "title": "Pattern 20",
            "url": "https://leetcode.com/problems/pattern-20/",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 259,
            "title": "Permutation Coefficient",
            "url": "https://www.geeksforgeeks.org/permutation-coefficient/",
            "platform": "GeeksforGeeks",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 260,
            "title": "Permute two arrays such that sum of every pair is greater or equal to K",
            "url": "https://www.geeksforgeeks.org/permute-two-arrays-sum-every-pair-greater-equal-k/",
            "platform": "GeeksforGeeks",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 261,
            "title": "Phone directory",
            "url": "https://www.geeksforgeeks.org/problems/phone-directory4628/1",
            "platform": "GeeksforGeeks",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 262,
            "title": "Plus One",
            "url": "https://leetcode.com/problems/plus-one/",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 263,
            "title": "Postfix Evaluation",
            "url": "https://www.geeksforgeeks.org/problems/evaluation-of-postfix-expression1735/1",
            "platform": "GeeksforGeeks",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 264,
            "title": "Postfix to Prefix Conversion",
            "url": "https://leetcode.com/problems/postfix-to-prefix-conversion/",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 265,
            "title": "PRATA",
            "url": "https://www.spoj.com/problems/PRATA/",
            "platform": "SPOJ",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 266,
            "title": "Pre, Post, Inorder in one traversal",
            "url": "https://leetcode.com/problems/pre-post-inorder-in-one-traversal/",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 267,
            "title": "Predecessor and Successor",
            "url": "https://www.geeksforgeeks.org/problems/predecessor-and-successor/1",
            "platform": "GeeksforGeeks",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 268,
            "title": "Prefix to Infix Conversion",
            "url": "https://leetcode.com/problems/prefix-to-infix-conversion/",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 269,
            "title": "Preorder To Postorder",
            "url": "https://www.geeksforgeeks.org/problems/preorder-to-postorder4423/1",
            "platform": "GeeksforGeeks",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 270,
            "title": "Preorder Traversal",
            "url": "https://leetcode.com/problems/preorder-traversal/",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 271,
            "title": "Preorder, Inorder, and Postorder Traversal in one Traversal",
            "url": "https://leetcode.com/problems/preorder-inorder-and-postorder-traversal-in-one-traversal/",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 272,
            "title": "Print 1 to N using Recursion",
            "url": "https://leetcode.com/problems/print-1-to-n-using-recursion/",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 273,
            "title": "Print name N times using recursion",
            "url": "https://leetcode.com/problems/print-name-n-times-using-recursion/",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 274,
            "title": "Print Subsequences String",
            "url": "https://www.geeksforgeeks.org/print-subsequences-string/",
            "platform": "GeeksforGeeks",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 275,
            "title": "Product array puzzle",
            "url": "https://www.geeksforgeeks.org/problems/product-array-puzzle4525/1",
            "platform": "GeeksforGeeks",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 276,
            "title": "Program Generate Possible Valid Ip Addresses Given String",
            "url": "https://www.geeksforgeeks.org/program-generate-possible-valid-ip-addresses-given-string/",
            "platform": "GeeksforGeeks",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 277,
            "title": "Program Nth Catalan Number",
            "url": "https://www.geeksforgeeks.org/program-nth-catalan-number/",
            "platform": "GeeksforGeeks",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 278,
            "title": "Rabin Karp Algorithm",
            "url": "https://leetcode.com/problems/rabin-karp-algorithm/",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 279,
            "title": "Rabin-Karp Algorithm for Pattern Searching",
            "url": "https://www.geeksforgeeks.org/rabin-karp-algorithm-for-pattern-searching/",
            "platform": "GeeksforGeeks",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 280,
            "title": "Range Sum Query - Mutable",
            "url": "https://leetcode.com/problems/range-sum-query-mutable",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 281,
            "title": "Ransom Note",
            "url": "https://leetcode.com/problems/ransom-note",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 282,
            "title": "rasta and kheshtak",
            "url": "https://www.hackerearth.com/practice/algorithms/searching/binary-search/practice-problems/algorithm/rasta-and-kheshtak/",
            "platform": "HackerEarth",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 283,
            "title": "Rearrange characters",
            "url": "https://www.geeksforgeeks.org/problems/rearrange-characters4649/1",
            "platform": "GeeksforGeeks",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 284,
            "title": "Recursive Implementation of atoi()",
            "url": "https://leetcode.com/problems/recursive-implementation-of-atoi/",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 285,
            "title": "Remove Boxes",
            "url": "https://leetcode.com/problems/remove-boxes",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 286,
            "title": "Remove Consecutive Characters",
            "url": "https://www.geeksforgeeks.org/problems/consecutive-elements2306/1",
            "platform": "GeeksforGeeks",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 287,
            "title": "Remove Element",
            "url": "https://leetcode.com/problems/remove-element/",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 288,
            "title": "Replace Elements by Their Rank",
            "url": "https://leetcode.com/problems/replace-elements-by-their-rank/",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 289,
            "title": "Replace every element with the least greater element on its right",
            "url": "https://www.geeksforgeeks.org/problems/replace-every-element-with-the-least-greater-element-on-its-right/1",
            "platform": "GeeksforGeeks",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 290,
            "title": "Requirements needed to construct a unique BT",
            "url": "https://leetcode.com/problems/requirements-needed-to-construct-a-unique-bt/",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 291,
            "title": "Restore the Array From Adjacent Pairs",
            "url": "https://leetcode.com/problems/restore-the-array-from-adjacent-pairs",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 292,
            "title": "Reverse a number",
            "url": "https://leetcode.com/problems/reverse-a-number/",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 293,
            "title": "Reverse an array",
            "url": "https://leetcode.com/problems/reverse-an-array/",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 294,
            "title": "Reverse every word in a string",
            "url": "https://leetcode.com/problems/reverse-every-word-in-a-string/",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 295,
            "title": "Reverse Nodes in k-Group",
            "url": "https://leetcode.com/problems/reverse-nodes-in-k-group",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 296,
            "title": "Reverse Pairs",
            "url": "https://leetcode.com/problems/reverse-pairs",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 297,
            "title": "Reverse String",
            "url": "https://leetcode.com/problems/reverse-string",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 298,
            "title": "Roman Number to Integer",
            "url": "https://www.geeksforgeeks.org/problems/roman-number-to-integer3201/1",
            "platform": "GeeksforGeeks",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 299,
            "title": "Rotate Array",
            "url": "https://leetcode.com/problems/rotate-array",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 300,
            "title": "Rotate Array by One",
            "url": "https://www.geeksforgeeks.org/problems/cyclically-rotate-an-array-by-one2614/1",
            "platform": "GeeksforGeeks",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 301,
            "title": "Rotate String",
            "url": "https://leetcode.com/problems/rotate-string/",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 302,
            "title": "Row with max 1s",
            "url": "https://www.geeksforgeeks.org/problems/row-with-max-1s0023/1",
            "platform": "GeeksforGeeks",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 303,
            "title": "Searching Array Adjacent Differ K",
            "url": "https://www.geeksforgeeks.org/searching-array-adjacent-differ-k/",
            "platform": "GeeksforGeeks",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 304,
            "title": "Second Largest Element",
            "url": "https://leetcode.com/problems/second-largest-element/",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 305,
            "title": "Second most repeated string in a sequence",
            "url": "https://www.geeksforgeeks.org/problems/second-most-repeated-string-in-a-sequence0534/1",
            "platform": "GeeksforGeeks",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 306,
            "title": "Shortest common supersequence",
            "url": "https://leetcode.com/problems/shortest-common-supersequence/",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 307,
            "title": "Shortest Job First",
            "url": "https://leetcode.com/problems/shortest-job-first/",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 308,
            "title": "Shortest Palindrome",
            "url": "https://leetcode.com/problems/shortest-palindrome/",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 309,
            "title": "Sqrt(x)",
            "url": "https://leetcode.com/problems/sqrtx/",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 310,
            "title": "STL",
            "url": "https://leetcode.com/problems/stl/",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 311,
            "title": "Stream First Non-repeating",
            "url": "https://www.geeksforgeeks.org/problems/first-non-repeating-character-in-a-stream1216/1",
            "platform": "GeeksforGeeks",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 312,
            "title": "String to Integer (atoi)",
            "url": "https://leetcode.com/problems/string-to-integer-atoi",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 313,
            "title": "Subarray with 0 sum",
            "url": "https://www.geeksforgeeks.org/problems/subarray-with-0-sum-1587115621/1",
            "platform": "GeeksforGeeks",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 314,
            "title": "Sum Except First and Last",
            "url": "https://www.geeksforgeeks.org/problems/max-length-chain/1",
            "platform": "GeeksforGeeks",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 315,
            "title": "Sum Minimum Maximum Elements Subarrays Size K",
            "url": "https://www.geeksforgeeks.org/sum-minimum-maximum-elements-subarrays-size-k/",
            "platform": "GeeksforGeeks",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 316,
            "title": "Sum of nodes on the longest path",
            "url": "https://www.geeksforgeeks.org/problems/sum-of-the-longest-bloodline-of-a-tree/1",
            "platform": "GeeksforGeeks",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 317,
            "title": "Sum of Two Integers",
            "url": "https://leetcode.com/problems/sum-of-two-integers/",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 318,
            "title": "Summary Ranges",
            "url": "https://leetcode.com/problems/summary-ranges/",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 319,
            "title": "Survival",
            "url": "https://www.geeksforgeeks.org/survival/",
            "platform": "GeeksforGeeks",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 320,
            "title": "Swap and Maximize",
            "url": "https://www.geeksforgeeks.org/problems/swap-and-maximize5859/1",
            "platform": "GeeksforGeeks",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 321,
            "title": "Swap Two Numbers",
            "url": "https://leetcode.com/problems/swap-two-numbers/",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 322,
            "title": "Switch Case",
            "url": "https://leetcode.com/problems/switch-case/",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 323,
            "title": "Text Justification",
            "url": "https://leetcode.com/problems/text-justification",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 324,
            "title": "Theory with examples",
            "url": "https://leetcode.com/problems/theory-with-examples/",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 325,
            "title": "Three Sum",
            "url": "https://leetcode.com/problems/3sum",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 326,
            "title": "Three way partitioning",
            "url": "https://www.geeksforgeeks.org/problems/three-way-partitioning/1",
            "platform": "GeeksforGeeks",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 327,
            "title": "Time Based Key-Value Store",
            "url": "https://leetcode.com/problems/time-based-key-value-store",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 328,
            "title": "Transform One String To Another Using Minimum Number Of Given Operation",
            "url": "https://www.geeksforgeeks.org/transform-one-string-to-another-using-minimum-number-of-given-operation/",
            "platform": "GeeksforGeeks",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 329,
            "title": "Traversal Techniques",
            "url": "https://leetcode.com/problems/traversal-techniques/",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 330,
            "title": "Triangle",
            "url": "https://leetcode.com/problems/triangle/",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 331,
            "title": "Triplet Sum in Array",
            "url": "https://www.geeksforgeeks.org/problems/triplet-sum-in-array-1587115621/1",
            "platform": "GeeksforGeeks",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 332,
            "title": "Ugly Number II",
            "url": "https://leetcode.com/problems/ugly-number-ii",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 333,
            "title": "Understand recursion by print something N times",
            "url": "https://leetcode.com/problems/understand-recursion-by-print-something-n-times/",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 334,
            "title": "Union of Arrays with Duplicates",
            "url": "https://www.geeksforgeeks.org/problems/union-of-two-arrays3538/1",
            "platform": "GeeksforGeeks",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 335,
            "title": "Unique Number II",
            "url": "https://www.geeksforgeeks.org/problems/finding-the-numbers0215/1",
            "platform": "GeeksforGeeks",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 336,
            "title": "Valid Number",
            "url": "https://leetcode.com/problems/valid-number",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 337,
            "title": "Valid Paranthesis Checker",
            "url": "https://leetcode.com/problems/valid-paranthesis-checker/",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 338,
            "title": "Value equal to index value",
            "url": "https://www.geeksforgeeks.org/problems/value-equal-to-index-value1330/1",
            "platform": "GeeksforGeeks",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 339,
            "title": "Vertex Cover Problem Set 1 Introduction Approximate Algorithm 2",
            "url": "https://www.geeksforgeeks.org/vertex-cover-problem-set-1-introduction-approximate-algorithm-2/",
            "platform": "GeeksforGeeks",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 340,
            "title": "Water Connection Problem",
            "url": "https://www.geeksforgeeks.org/problems/water-connection-problem5822/1",
            "platform": "GeeksforGeeks",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 341,
            "title": "Weighted Job Scheduling",
            "url": "https://www.geeksforgeeks.org/problems/weighted-job-scheduling/1",
            "platform": "GeeksforGeeks",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 342,
            "title": "Weighted Job Scheduling Log N Time",
            "url": "https://www.geeksforgeeks.org/weighted-job-scheduling-log-n-time/",
            "platform": "GeeksforGeeks",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 343,
            "title": "What are arrays, strings?",
            "url": "https://leetcode.com/problems/what-are-arrays-strings/",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 344,
            "title": "While loops",
            "url": "https://leetcode.com/problems/while-loops/",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 345,
            "title": "Word Pattern",
            "url": "https://leetcode.com/problems/word-pattern/",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 346,
            "title": "Word Wrap",
            "url": "https://www.geeksforgeeks.org/problems/word-wrap1646/1",
            "platform": "GeeksforGeeks",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 347,
            "title": "Write A Program To Reverse An Array Or String",
            "url": "https://www.geeksforgeeks.org/write-a-program-to-reverse-an-array-or-string/",
            "platform": "GeeksforGeeks",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 348,
            "title": "Z function",
            "url": "https://leetcode.com/problems/z-function/",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          },
          {
            "id": 349,
            "title": "Zero Sum Subarrays",
            "url": "https://www.geeksforgeeks.org/problems/zero-sum-subarrays1825/1",
            "platform": "GeeksforGeeks",
            "chapterId": 1,
            "chapterTitle": "Arrays, Strings & Hashing",
            "topicId": "1.5",
            "topicTitle": "Array & String Fundamentals"
          }
        ]
      }
    ]
  },
  {
    "id": 2,
    "title": "Searching & Sorting",
    "expectedCount": 58,
    "icon": "🔍",
    "topics": [
      {
        "id": "2.1",
        "title": "Binary Search (Index & Answer Space)",
        "expectedCount": 19,
        "problems": [
          {
            "id": 350,
            "title": "AGGRCOW - Aggressive cows",
            "url": "https://www.spoj.com/problems/AGGRCOW/",
            "platform": "SPOJ",
            "chapterId": 2,
            "chapterTitle": "Searching & Sorting",
            "topicId": "2.1",
            "topicTitle": "Binary Search (Index & Answer Space)"
          },
          {
            "id": 351,
            "title": "Aggressive Cows",
            "url": "https://leetcode.com/problems/aggressive-cows/",
            "platform": "LeetCode",
            "chapterId": 2,
            "chapterTitle": "Searching & Sorting",
            "topicId": "2.1",
            "topicTitle": "Binary Search (Index & Answer Space)"
          },
          {
            "id": 352,
            "title": "Binary Search",
            "url": "https://leetcode.com/problems/binary-search",
            "platform": "LeetCode",
            "chapterId": 2,
            "chapterTitle": "Searching & Sorting",
            "topicId": "2.1",
            "topicTitle": "Binary Search (Index & Answer Space)"
          },
          {
            "id": 353,
            "title": "Capacity to Ship Packages Within D Days",
            "url": "https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/",
            "platform": "LeetCode",
            "chapterId": 2,
            "chapterTitle": "Searching & Sorting",
            "topicId": "2.1",
            "topicTitle": "Binary Search (Index & Answer Space)"
          },
          {
            "id": 354,
            "title": "Find Minimum in Rotated Sorted Array",
            "url": "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array",
            "platform": "LeetCode",
            "chapterId": 2,
            "chapterTitle": "Searching & Sorting",
            "topicId": "2.1",
            "topicTitle": "Binary Search (Index & Answer Space)"
          },
          {
            "id": 355,
            "title": "Find Nth root of a number",
            "url": "https://www.geeksforgeeks.org/problems/find-nth-root-of-m5843/1",
            "platform": "GeeksforGeeks",
            "chapterId": 2,
            "chapterTitle": "Searching & Sorting",
            "topicId": "2.1",
            "topicTitle": "Binary Search (Index & Answer Space)"
          },
          {
            "id": 356,
            "title": "Find Peak Element",
            "url": "https://www.geeksforgeeks.org/make-array-elements-equal-minimum-cost/",
            "platform": "GeeksforGeeks",
            "chapterId": 2,
            "chapterTitle": "Searching & Sorting",
            "topicId": "2.1",
            "topicTitle": "Binary Search (Index & Answer Space)"
          },
          {
            "id": 357,
            "title": "First Bad Version",
            "url": "https://leetcode.com/problems/first-bad-version",
            "platform": "LeetCode",
            "chapterId": 2,
            "chapterTitle": "Searching & Sorting",
            "topicId": "2.1",
            "topicTitle": "Binary Search (Index & Answer Space)"
          },
          {
            "id": 358,
            "title": "Floor and Ceil in Sorted Array",
            "url": "https://leetcode.com/problems/floor-and-ceil-in-sorted-array/",
            "platform": "LeetCode",
            "chapterId": 2,
            "chapterTitle": "Searching & Sorting",
            "topicId": "2.1",
            "topicTitle": "Binary Search (Index & Answer Space)"
          },
          {
            "id": 359,
            "title": "Koko Eating Bananas",
            "url": "https://leetcode.com/problems/koko-eating-bananas/",
            "platform": "LeetCode",
            "chapterId": 2,
            "chapterTitle": "Searching & Sorting",
            "topicId": "2.1",
            "topicTitle": "Binary Search (Index & Answer Space)"
          },
          {
            "id": 360,
            "title": "Lower Bound",
            "url": "https://leetcode.com/problems/lower-bound/",
            "platform": "LeetCode",
            "chapterId": 2,
            "chapterTitle": "Searching & Sorting",
            "topicId": "2.1",
            "topicTitle": "Binary Search (Index & Answer Space)"
          },
          {
            "id": 361,
            "title": "Minimum days to make M bouquets",
            "url": "https://leetcode.com/problems/minimum-days-to-make-m-bouquets/",
            "platform": "LeetCode",
            "chapterId": 2,
            "chapterTitle": "Searching & Sorting",
            "topicId": "2.1",
            "topicTitle": "Binary Search (Index & Answer Space)"
          },
          {
            "id": 362,
            "title": "Painter's Partition",
            "url": "https://leetcode.com/problems/painter-s-partition/",
            "platform": "LeetCode",
            "chapterId": 2,
            "chapterTitle": "Searching & Sorting",
            "topicId": "2.1",
            "topicTitle": "Binary Search (Index & Answer Space)"
          },
          {
            "id": 363,
            "title": "Search a 2D Matrix",
            "url": "https://leetcode.com/problems/search-a-2d-matrix",
            "platform": "LeetCode",
            "chapterId": 2,
            "chapterTitle": "Searching & Sorting",
            "topicId": "2.1",
            "topicTitle": "Binary Search (Index & Answer Space)"
          },
          {
            "id": 364,
            "title": "Search in Rotated Sorted Array",
            "url": "https://leetcode.com/problems/search-in-rotated-sorted-array",
            "platform": "LeetCode",
            "chapterId": 2,
            "chapterTitle": "Searching & Sorting",
            "topicId": "2.1",
            "topicTitle": "Binary Search (Index & Answer Space)"
          },
          {
            "id": 365,
            "title": "Search Insert Position",
            "url": "https://leetcode.com/problems/search-insert-position/",
            "platform": "LeetCode",
            "chapterId": 2,
            "chapterTitle": "Searching & Sorting",
            "topicId": "2.1",
            "topicTitle": "Binary Search (Index & Answer Space)"
          },
          {
            "id": 366,
            "title": "Single element in a Sorted Array",
            "url": "https://leetcode.com/problems/single-element-in-a-sorted-array/",
            "platform": "LeetCode",
            "chapterId": 2,
            "chapterTitle": "Searching & Sorting",
            "topicId": "2.1",
            "topicTitle": "Binary Search (Index & Answer Space)"
          },
          {
            "id": 367,
            "title": "Split Array Largest Sum",
            "url": "https://leetcode.com/problems/split-array-largest-sum",
            "platform": "LeetCode",
            "chapterId": 2,
            "chapterTitle": "Searching & Sorting",
            "topicId": "2.1",
            "topicTitle": "Binary Search (Index & Answer Space)"
          },
          {
            "id": 368,
            "title": "Upper Bound",
            "url": "https://leetcode.com/problems/upper-bound/",
            "platform": "LeetCode",
            "chapterId": 2,
            "chapterTitle": "Searching & Sorting",
            "topicId": "2.1",
            "topicTitle": "Binary Search (Index & Answer Space)"
          }
        ]
      },
      {
        "id": "2.2",
        "title": "Sorting Algorithms & Order Statistics",
        "expectedCount": 39,
        "problems": [
          {
            "id": 369,
            "title": "Bubble Sort",
            "url": "https://leetcode.com/problems/bubble-sort/",
            "platform": "LeetCode",
            "chapterId": 2,
            "chapterTitle": "Searching & Sorting",
            "topicId": "2.2",
            "topicTitle": "Sorting Algorithms & Order Statistics"
          },
          {
            "id": 370,
            "title": "Ceiling in a sorted array",
            "url": "https://www.geeksforgeeks.org/ceiling-in-a-sorted-array/",
            "platform": "GeeksforGeeks",
            "chapterId": 2,
            "chapterTitle": "Searching & Sorting",
            "topicId": "2.2",
            "topicTitle": "Sorting Algorithms & Order Statistics"
          },
          {
            "id": 371,
            "title": "Check if reversing a sub array make the array sorted",
            "url": "https://www.geeksforgeeks.org/check-reversing-sub-array-make-array-sorted/",
            "platform": "GeeksforGeeks",
            "chapterId": 2,
            "chapterTitle": "Searching & Sorting",
            "topicId": "2.2",
            "topicTitle": "Sorting Algorithms & Order Statistics"
          },
          {
            "id": 372,
            "title": "Check if the Array is Sorted II",
            "url": "https://leetcode.com/problems/check-if-the-array-is-sorted-ii/",
            "platform": "LeetCode",
            "chapterId": 2,
            "chapterTitle": "Searching & Sorting",
            "topicId": "2.2",
            "topicTitle": "Sorting Algorithms & Order Statistics"
          },
          {
            "id": 373,
            "title": "Common in 3 Sorted Arrays",
            "url": "https://www.geeksforgeeks.org/problems/common-elements1132/1",
            "platform": "GeeksforGeeks",
            "chapterId": 2,
            "chapterTitle": "Searching & Sorting",
            "topicId": "2.2",
            "topicTitle": "Sorting Algorithms & Order Statistics"
          },
          {
            "id": 374,
            "title": "Count Inversions",
            "url": "https://www.geeksforgeeks.org/problems/inversion-of-array-1587115620/1",
            "platform": "GeeksforGeeks",
            "chapterId": 2,
            "chapterTitle": "Searching & Sorting",
            "topicId": "2.2",
            "topicTitle": "Sorting Algorithms & Order Statistics"
          },
          {
            "id": 375,
            "title": "Count Occurrences in a Sorted Array",
            "url": "https://leetcode.com/problems/count-occurrences-in-a-sorted-array/",
            "platform": "LeetCode",
            "chapterId": 2,
            "chapterTitle": "Searching & Sorting",
            "topicId": "2.2",
            "topicTitle": "Sorting Algorithms & Order Statistics"
          },
          {
            "id": 376,
            "title": "Find First and Last Position of Element in Sorted Array",
            "url": "https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/",
            "platform": "LeetCode",
            "chapterId": 2,
            "chapterTitle": "Searching & Sorting",
            "topicId": "2.2",
            "topicTitle": "Sorting Algorithms & Order Statistics"
          },
          {
            "id": 377,
            "title": "First Missing Positive",
            "url": "https://leetcode.com/problems/first-missing-positive",
            "platform": "LeetCode",
            "chapterId": 2,
            "chapterTitle": "Searching & Sorting",
            "topicId": "2.2",
            "topicTitle": "Sorting Algorithms & Order Statistics"
          },
          {
            "id": 378,
            "title": "H-Index",
            "url": "https://leetcode.com/problems/h-index/",
            "platform": "LeetCode",
            "chapterId": 2,
            "chapterTitle": "Searching & Sorting",
            "topicId": "2.2",
            "topicTitle": "Sorting Algorithms & Order Statistics"
          },
          {
            "id": 379,
            "title": "In Place Merge Sort",
            "url": "https://www.geeksforgeeks.org/in-place-merge-sort/",
            "platform": "GeeksforGeeks",
            "chapterId": 2,
            "chapterTitle": "Searching & Sorting",
            "topicId": "2.2",
            "topicTitle": "Sorting Algorithms & Order Statistics"
          },
          {
            "id": 380,
            "title": "Insertion Sorting",
            "url": "https://leetcode.com/problems/insertion-sorting/",
            "platform": "LeetCode",
            "chapterId": 2,
            "chapterTitle": "Searching & Sorting",
            "topicId": "2.2",
            "topicTitle": "Sorting Algorithms & Order Statistics"
          },
          {
            "id": 381,
            "title": "Kth element of 2 sorted arrays",
            "url": "https://leetcode.com/problems/kth-element-of-2-sorted-arrays/",
            "platform": "LeetCode",
            "chapterId": 2,
            "chapterTitle": "Searching & Sorting",
            "topicId": "2.2",
            "topicTitle": "Sorting Algorithms & Order Statistics"
          },
          {
            "id": 382,
            "title": "Largest Number",
            "url": "https://leetcode.com/problems/largest-number",
            "platform": "LeetCode",
            "chapterId": 2,
            "chapterTitle": "Searching & Sorting",
            "topicId": "2.2",
            "topicTitle": "Sorting Algorithms & Order Statistics"
          },
          {
            "id": 383,
            "title": "Largest number in K swaps",
            "url": "https://www.geeksforgeeks.org/problems/largest-number-in-k-swaps-1587115620/1",
            "platform": "GeeksforGeeks",
            "chapterId": 2,
            "chapterTitle": "Searching & Sorting",
            "topicId": "2.2",
            "topicTitle": "Sorting Algorithms & Order Statistics"
          },
          {
            "id": 384,
            "title": "Linear Search",
            "url": "https://leetcode.com/problems/linear-search/",
            "platform": "LeetCode",
            "chapterId": 2,
            "chapterTitle": "Searching & Sorting",
            "topicId": "2.2",
            "topicTitle": "Sorting Algorithms & Order Statistics"
          },
          {
            "id": 385,
            "title": "Majority Element",
            "url": "https://leetcode.com/problems/majority-element",
            "platform": "LeetCode",
            "chapterId": 2,
            "chapterTitle": "Searching & Sorting",
            "topicId": "2.2",
            "topicTitle": "Sorting Algorithms & Order Statistics"
          },
          {
            "id": 386,
            "title": "Merge Sorted Array",
            "url": "https://leetcode.com/problems/merge-sorted-array",
            "platform": "LeetCode",
            "chapterId": 2,
            "chapterTitle": "Searching & Sorting",
            "topicId": "2.2",
            "topicTitle": "Sorting Algorithms & Order Statistics"
          },
          {
            "id": 387,
            "title": "Merge Sorting",
            "url": "https://leetcode.com/problems/merge-sorting/",
            "platform": "LeetCode",
            "chapterId": 2,
            "chapterTitle": "Searching & Sorting",
            "topicId": "2.2",
            "topicTitle": "Sorting Algorithms & Order Statistics"
          },
          {
            "id": 388,
            "title": "Merge two sorted arrays without extra space",
            "url": "https://leetcode.com/problems/merge-two-sorted-arrays-without-extra-space/",
            "platform": "LeetCode",
            "chapterId": 2,
            "chapterTitle": "Searching & Sorting",
            "topicId": "2.2",
            "topicTitle": "Sorting Algorithms & Order Statistics"
          },
          {
            "id": 389,
            "title": "Minimum Swaps to Sort",
            "url": "https://www.geeksforgeeks.org/problems/minimum-swaps/1",
            "platform": "GeeksforGeeks",
            "chapterId": 2,
            "chapterTitle": "Searching & Sorting",
            "topicId": "2.2",
            "topicTitle": "Sorting Algorithms & Order Statistics"
          },
          {
            "id": 390,
            "title": "Quick Sorting",
            "url": "https://leetcode.com/problems/quick-sorting/",
            "platform": "LeetCode",
            "chapterId": 2,
            "chapterTitle": "Searching & Sorting",
            "topicId": "2.2",
            "topicTitle": "Sorting Algorithms & Order Statistics"
          },
          {
            "id": 391,
            "title": "Radix Sort",
            "url": "https://www.geeksforgeeks.org/problems/radix-sort/1",
            "platform": "GeeksforGeeks",
            "chapterId": 2,
            "chapterTitle": "Searching & Sorting",
            "topicId": "2.2",
            "topicTitle": "Sorting Algorithms & Order Statistics"
          },
          {
            "id": 392,
            "title": "Rearrange Array Alternating Positive Negative Items O1 Extra Space",
            "url": "https://www.geeksforgeeks.org/rearrange-array-alternating-positive-negative-items-o1-extra-space/",
            "platform": "GeeksforGeeks",
            "chapterId": 2,
            "chapterTitle": "Searching & Sorting",
            "topicId": "2.2",
            "topicTitle": "Sorting Algorithms & Order Statistics"
          },
          {
            "id": 393,
            "title": "Rearrange array elements by sign",
            "url": "https://leetcode.com/problems/rearrange-array-elements-by-sign/",
            "platform": "LeetCode",
            "chapterId": 2,
            "chapterTitle": "Searching & Sorting",
            "topicId": "2.2",
            "topicTitle": "Sorting Algorithms & Order Statistics"
          },
          {
            "id": 394,
            "title": "Recursive Bubble Sort",
            "url": "https://leetcode.com/problems/recursive-bubble-sort/",
            "platform": "LeetCode",
            "chapterId": 2,
            "chapterTitle": "Searching & Sorting",
            "topicId": "2.2",
            "topicTitle": "Sorting Algorithms & Order Statistics"
          },
          {
            "id": 395,
            "title": "Recursive Insertion Sort",
            "url": "https://leetcode.com/problems/recursive-insertion-sort/",
            "platform": "LeetCode",
            "chapterId": 2,
            "chapterTitle": "Searching & Sorting",
            "topicId": "2.2",
            "topicTitle": "Sorting Algorithms & Order Statistics"
          },
          {
            "id": 396,
            "title": "Search X in sorted array",
            "url": "https://leetcode.com/problems/search-x-in-sorted-array/",
            "platform": "LeetCode",
            "chapterId": 2,
            "chapterTitle": "Searching & Sorting",
            "topicId": "2.2",
            "topicTitle": "Sorting Algorithms & Order Statistics"
          },
          {
            "id": 397,
            "title": "Selection Sort",
            "url": "https://leetcode.com/problems/selection-sort/",
            "platform": "LeetCode",
            "chapterId": 2,
            "chapterTitle": "Searching & Sorting",
            "topicId": "2.2",
            "topicTitle": "Sorting Algorithms & Order Statistics"
          },
          {
            "id": 398,
            "title": "Sort 0s, 1s and 2s",
            "url": "https://www.geeksforgeeks.org/problems/sort-an-array-of-0s-1s-and-2s4231/1",
            "platform": "GeeksforGeeks",
            "chapterId": 2,
            "chapterTitle": "Searching & Sorting",
            "topicId": "2.2",
            "topicTitle": "Sorting Algorithms & Order Statistics"
          },
          {
            "id": 399,
            "title": "Sort an Array",
            "url": "https://leetcode.com/problems/sort-an-array/",
            "platform": "LeetCode",
            "chapterId": 2,
            "chapterTitle": "Searching & Sorting",
            "topicId": "2.2",
            "topicTitle": "Sorting Algorithms & Order Statistics"
          },
          {
            "id": 400,
            "title": "Sort by Set Bit Count",
            "url": "https://www.geeksforgeeks.org/problems/sort-by-set-bit-count1153/1",
            "platform": "GeeksforGeeks",
            "chapterId": 2,
            "chapterTitle": "Searching & Sorting",
            "topicId": "2.2",
            "topicTitle": "Sorting Algorithms & Order Statistics"
          },
          {
            "id": 401,
            "title": "Sort Characters by Frequency",
            "url": "https://leetcode.com/problems/sort-characters-by-frequency/",
            "platform": "LeetCode",
            "chapterId": 2,
            "chapterTitle": "Searching & Sorting",
            "topicId": "2.2",
            "topicTitle": "Sorting Algorithms & Order Statistics"
          },
          {
            "id": 402,
            "title": "Sort Colors",
            "url": "https://leetcode.com/problems/sort-colors",
            "platform": "LeetCode",
            "chapterId": 2,
            "chapterTitle": "Searching & Sorting",
            "topicId": "2.2",
            "topicTitle": "Sorting Algorithms & Order Statistics"
          },
          {
            "id": 403,
            "title": "Sort K sorted array",
            "url": "https://www.geeksforgeeks.org/problems/nearly-sorted-1587115620/1",
            "platform": "GeeksforGeeks",
            "chapterId": 2,
            "chapterTitle": "Searching & Sorting",
            "topicId": "2.2",
            "topicTitle": "Sorting Algorithms & Order Statistics"
          },
          {
            "id": 404,
            "title": "Sorted matrix",
            "url": "https://www.geeksforgeeks.org/problems/sorted-matrix2333/1",
            "platform": "GeeksforGeeks",
            "chapterId": 2,
            "chapterTitle": "Searching & Sorting",
            "topicId": "2.2",
            "topicTitle": "Sorting Algorithms & Order Statistics"
          },
          {
            "id": 405,
            "title": "Squares of a Sorted Array",
            "url": "https://leetcode.com/problems/squares-of-a-sorted-array",
            "platform": "LeetCode",
            "chapterId": 2,
            "chapterTitle": "Searching & Sorting",
            "topicId": "2.2",
            "topicTitle": "Sorting Algorithms & Order Statistics"
          },
          {
            "id": 406,
            "title": "Two Sum II - Input Array Is Sorted",
            "url": "https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/",
            "platform": "LeetCode",
            "chapterId": 2,
            "chapterTitle": "Searching & Sorting",
            "topicId": "2.2",
            "topicTitle": "Sorting Algorithms & Order Statistics"
          },
          {
            "id": 407,
            "title": "Union of two sorted arrays",
            "url": "https://leetcode.com/problems/union-of-two-sorted-arrays/",
            "platform": "LeetCode",
            "chapterId": 2,
            "chapterTitle": "Searching & Sorting",
            "topicId": "2.2",
            "topicTitle": "Sorting Algorithms & Order Statistics"
          }
        ]
      }
    ]
  },
  {
    "id": 3,
    "title": "Linked Lists",
    "expectedCount": 67,
    "icon": "🔗",
    "topics": [
      {
        "id": "3.1",
        "title": "Linked List Patterns & Pointer Reversal",
        "expectedCount": 67,
        "problems": [
          {
            "id": 408,
            "title": "4 Sum - All Quadruples",
            "url": "https://www.geeksforgeeks.org/problems/find-all-four-sum-numbers1732/1",
            "platform": "GeeksforGeeks",
            "chapterId": 3,
            "chapterTitle": "Linked Lists",
            "topicId": "3.1",
            "topicTitle": "Linked List Patterns & Pointer Reversal"
          },
          {
            "id": 409,
            "title": "Add one to a number represented by LL",
            "url": "https://leetcode.com/problems/add-one-to-a-number-represented-by-ll/",
            "platform": "LeetCode",
            "chapterId": 3,
            "chapterTitle": "Linked Lists",
            "topicId": "3.1",
            "topicTitle": "Linked List Patterns & Pointer Reversal"
          },
          {
            "id": 410,
            "title": "Add Two Numbers",
            "url": "https://leetcode.com/problems/add-two-numbers",
            "platform": "LeetCode",
            "chapterId": 3,
            "chapterTitle": "Linked Lists",
            "topicId": "3.1",
            "topicTitle": "Linked List Patterns & Pointer Reversal"
          },
          {
            "id": 411,
            "title": "Allocate Minimum Pages",
            "url": "https://www.geeksforgeeks.org/problems/allocate-minimum-number-of-pages0937/1",
            "platform": "GeeksforGeeks",
            "chapterId": 3,
            "chapterTitle": "Linked Lists",
            "topicId": "3.1",
            "topicTitle": "Linked List Patterns & Pointer Reversal"
          },
          {
            "id": 412,
            "title": "Book Allocation Problem",
            "url": "https://leetcode.com/problems/book-allocation-problem/",
            "platform": "LeetCode",
            "chapterId": 3,
            "chapterTitle": "Linked Lists",
            "topicId": "3.1",
            "topicTitle": "Linked List Patterns & Pointer Reversal"
          },
          {
            "id": 413,
            "title": "Check if LL is palindrome or not",
            "url": "https://leetcode.com/problems/check-if-ll-is-palindrome-or-not/",
            "platform": "LeetCode",
            "chapterId": 3,
            "chapterTitle": "Linked Lists",
            "topicId": "3.1",
            "topicTitle": "Linked List Patterns & Pointer Reversal"
          },
          {
            "id": 414,
            "title": "Clone a LL with random and next pointer",
            "url": "https://leetcode.com/problems/clone-a-ll-with-random-and-next-pointer/",
            "platform": "LeetCode",
            "chapterId": 3,
            "chapterTitle": "Linked Lists",
            "topicId": "3.1",
            "topicTitle": "Linked List Patterns & Pointer Reversal"
          },
          {
            "id": 415,
            "title": "Common Elements In All Rows Of A Given Matrix",
            "url": "https://www.geeksforgeeks.org/common-elements-in-all-rows-of-a-given-matrix/",
            "platform": "GeeksforGeeks",
            "chapterId": 3,
            "chapterTitle": "Linked Lists",
            "topicId": "3.1",
            "topicTitle": "Linked List Patterns & Pointer Reversal"
          },
          {
            "id": 416,
            "title": "Count all Digits of a Number",
            "url": "https://leetcode.com/problems/count-all-digits-of-a-number/",
            "platform": "LeetCode",
            "chapterId": 3,
            "chapterTitle": "Linked Lists",
            "topicId": "3.1",
            "topicTitle": "Linked List Patterns & Pointer Reversal"
          },
          {
            "id": 417,
            "title": "Count all subsequences with sum K",
            "url": "https://leetcode.com/problems/count-all-subsequences-with-sum-k/",
            "platform": "LeetCode",
            "chapterId": 3,
            "chapterTitle": "Linked Lists",
            "topicId": "3.1",
            "topicTitle": "Linked List Patterns & Pointer Reversal"
          },
          {
            "id": 418,
            "title": "Count of Smaller Numbers After Self",
            "url": "https://leetcode.com/problems/count-of-smaller-numbers-after-self",
            "platform": "LeetCode",
            "chapterId": 3,
            "chapterTitle": "Linked Lists",
            "topicId": "3.1",
            "topicTitle": "Linked List Patterns & Pointer Reversal"
          },
          {
            "id": 419,
            "title": "Delete all occurrences of a key in DLL",
            "url": "https://leetcode.com/problems/delete-all-occurrences-of-a-key-in-dll/",
            "platform": "LeetCode",
            "chapterId": 3,
            "chapterTitle": "Linked Lists",
            "topicId": "3.1",
            "topicTitle": "Linked List Patterns & Pointer Reversal"
          },
          {
            "id": 420,
            "title": "Delete the middle node in LL",
            "url": "https://leetcode.com/problems/delete-the-middle-node-in-ll/",
            "platform": "LeetCode",
            "chapterId": 3,
            "chapterTitle": "Linked Lists",
            "topicId": "3.1",
            "topicTitle": "Linked List Patterns & Pointer Reversal"
          },
          {
            "id": 421,
            "title": "Deletion of the head of LL",
            "url": "https://leetcode.com/problems/deletion-of-the-head-of-ll/",
            "platform": "LeetCode",
            "chapterId": 3,
            "chapterTitle": "Linked Lists",
            "topicId": "3.1",
            "topicTitle": "Linked List Patterns & Pointer Reversal"
          },
          {
            "id": 422,
            "title": "Detect a loop in LL",
            "url": "https://leetcode.com/problems/detect-a-loop-in-ll/",
            "platform": "LeetCode",
            "chapterId": 3,
            "chapterTitle": "Linked Lists",
            "topicId": "3.1",
            "topicTitle": "Linked List Patterns & Pointer Reversal"
          },
          {
            "id": 423,
            "title": "Find All Anagrams in a String",
            "url": "https://leetcode.com/problems/find-all-anagrams-in-a-string",
            "platform": "LeetCode",
            "chapterId": 3,
            "chapterTitle": "Linked Lists",
            "topicId": "3.1",
            "topicTitle": "Linked List Patterns & Pointer Reversal"
          },
          {
            "id": 424,
            "title": "Find All Duplicates in an Array",
            "url": "https://leetcode.com/problems/find-all-duplicates-in-an-array",
            "platform": "LeetCode",
            "chapterId": 3,
            "chapterTitle": "Linked Lists",
            "topicId": "3.1",
            "topicTitle": "Linked List Patterns & Pointer Reversal"
          },
          {
            "id": 425,
            "title": "Find All Possible Palindromic Partitions of a String",
            "url": "https://www.geeksforgeeks.org/problems/find-all-possible-palindromic-partitions-of-a-string/1",
            "platform": "GeeksforGeeks",
            "chapterId": 3,
            "chapterTitle": "Linked Lists",
            "topicId": "3.1",
            "topicTitle": "Linked List Patterns & Pointer Reversal"
          },
          {
            "id": 426,
            "title": "Find K Pairs with Smallest Sums",
            "url": "https://leetcode.com/problems/find-k-pairs-with-smallest-sums/",
            "platform": "LeetCode",
            "chapterId": 3,
            "chapterTitle": "Linked Lists",
            "topicId": "3.1",
            "topicTitle": "Linked List Patterns & Pointer Reversal"
          },
          {
            "id": 427,
            "title": "Find Paths From Corner Cell To Middle Cell In Maze",
            "url": "https://www.geeksforgeeks.org/find-paths-from-corner-cell-to-middle-cell-in-maze/",
            "platform": "GeeksforGeeks",
            "chapterId": 3,
            "chapterTitle": "Linked Lists",
            "topicId": "3.1",
            "topicTitle": "Linked List Patterns & Pointer Reversal"
          },
          {
            "id": 428,
            "title": "Find the city with the smallest number of neighbors",
            "url": "https://leetcode.com/problems/find-the-city-with-the-smallest-number-of-neighbors/",
            "platform": "LeetCode",
            "chapterId": 3,
            "chapterTitle": "Linked Lists",
            "topicId": "3.1",
            "topicTitle": "Linked List Patterns & Pointer Reversal"
          },
          {
            "id": 429,
            "title": "Find the City With the Smallest Number of Neighbors at a Threshold Distance",
            "url": "https://leetcode.com/problems/find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance",
            "platform": "LeetCode",
            "chapterId": 3,
            "chapterTitle": "Linked Lists",
            "topicId": "3.1",
            "topicTitle": "Linked List Patterns & Pointer Reversal"
          },
          {
            "id": 430,
            "title": "Find the intersection point of Y LL",
            "url": "https://leetcode.com/problems/find-the-intersection-point-of-y-ll/",
            "platform": "LeetCode",
            "chapterId": 3,
            "chapterTitle": "Linked Lists",
            "topicId": "3.1",
            "topicTitle": "Linked List Patterns & Pointer Reversal"
          },
          {
            "id": 431,
            "title": "Find the smallest divisor",
            "url": "https://leetcode.com/problems/find-the-smallest-divisor/",
            "platform": "LeetCode",
            "chapterId": 3,
            "chapterTitle": "Linked Lists",
            "topicId": "3.1",
            "topicTitle": "Linked List Patterns & Pointer Reversal"
          },
          {
            "id": 432,
            "title": "Find the starting point in LL",
            "url": "https://leetcode.com/problems/find-the-starting-point-in-ll/",
            "platform": "LeetCode",
            "chapterId": 3,
            "chapterTitle": "Linked Lists",
            "topicId": "3.1",
            "topicTitle": "Linked List Patterns & Pointer Reversal"
          },
          {
            "id": 433,
            "title": "Flattening of LL",
            "url": "https://leetcode.com/problems/flattening-of-ll/",
            "platform": "LeetCode",
            "chapterId": 3,
            "chapterTitle": "Linked Lists",
            "topicId": "3.1",
            "topicTitle": "Linked List Patterns & Pointer Reversal"
          },
          {
            "id": 434,
            "title": "Flood Fill",
            "url": "https://leetcode.com/problems/flood-fill",
            "platform": "LeetCode",
            "chapterId": 3,
            "chapterTitle": "Linked Lists",
            "topicId": "3.1",
            "topicTitle": "Linked List Patterns & Pointer Reversal"
          },
          {
            "id": 435,
            "title": "Flood fill algorithm",
            "url": "https://leetcode.com/problems/flood-fill-algorithm/",
            "platform": "LeetCode",
            "chapterId": 3,
            "chapterTitle": "Linked Lists",
            "topicId": "3.1",
            "topicTitle": "Linked List Patterns & Pointer Reversal"
          },
          {
            "id": 436,
            "title": "Given A String Print All Possible Palindromic Partition",
            "url": "https://www.geeksforgeeks.org/given-a-string-print-all-possible-palindromic-partition/",
            "platform": "GeeksforGeeks",
            "chapterId": 3,
            "chapterTitle": "Linked Lists",
            "topicId": "3.1",
            "topicTitle": "Linked List Patterns & Pointer Reversal"
          },
          {
            "id": 437,
            "title": "Given An Array Of Of Size N Finds All The Elements That Appear More Than Nk Times",
            "url": "https://www.geeksforgeeks.org/given-an-array-of-of-size-n-finds-all-the-elements-that-appear-more-than-nk-times/",
            "platform": "GeeksforGeeks",
            "chapterId": 3,
            "chapterTitle": "Linked Lists",
            "topicId": "3.1",
            "topicTitle": "Linked List Patterns & Pointer Reversal"
          },
          {
            "id": 438,
            "title": "Insert Delete GetRandom O(1) - Duplicates allowed",
            "url": "https://leetcode.com/problems/insert-delete-getrandom-o1-duplicates-allowed",
            "platform": "LeetCode",
            "chapterId": 3,
            "chapterTitle": "Linked Lists",
            "topicId": "3.1",
            "topicTitle": "Linked List Patterns & Pointer Reversal"
          },
          {
            "id": 439,
            "title": "Introduction to Doubly LL",
            "url": "https://leetcode.com/problems/introduction-to-doubly-ll/",
            "platform": "LeetCode",
            "chapterId": 3,
            "chapterTitle": "Linked Lists",
            "topicId": "3.1",
            "topicTitle": "Linked List Patterns & Pointer Reversal"
          },
          {
            "id": 440,
            "title": "Java Collections",
            "url": "https://leetcode.com/problems/java-collections/",
            "platform": "LeetCode",
            "chapterId": 3,
            "chapterTitle": "Linked Lists",
            "topicId": "3.1",
            "topicTitle": "Linked List Patterns & Pointer Reversal"
          },
          {
            "id": 441,
            "title": "Learn All Patterns of Subsequences (Theory)",
            "url": "https://leetcode.com/problems/learn-all-patterns-of-subsequences/",
            "platform": "LeetCode",
            "chapterId": 3,
            "chapterTitle": "Linked Lists",
            "topicId": "3.1",
            "topicTitle": "Linked List Patterns & Pointer Reversal"
          },
          {
            "id": 442,
            "title": "Length of loop in LL",
            "url": "https://leetcode.com/problems/length-of-loop-in-ll/",
            "platform": "LeetCode",
            "chapterId": 3,
            "chapterTitle": "Linked Lists",
            "topicId": "3.1",
            "topicTitle": "Linked List Patterns & Pointer Reversal"
          },
          {
            "id": 443,
            "title": "Longest Word with All Prefixes",
            "url": "https://leetcode.com/problems/longest-word-with-all-prefixes/",
            "platform": "LeetCode",
            "chapterId": 3,
            "chapterTitle": "Linked Lists",
            "topicId": "3.1",
            "topicTitle": "Linked List Patterns & Pointer Reversal"
          },
          {
            "id": 444,
            "title": "Maximum Profit By Buying And Selling A Share At Most Twice",
            "url": "https://www.geeksforgeeks.org/maximum-profit-by-buying-and-selling-a-share-at-most-twice/",
            "platform": "GeeksforGeeks",
            "chapterId": 3,
            "chapterTitle": "Linked Lists",
            "topicId": "3.1",
            "topicTitle": "Linked List Patterns & Pointer Reversal"
          },
          {
            "id": 445,
            "title": "Maximum size rectangle binary sub-matrix with all 1s",
            "url": "https://www.geeksforgeeks.org/maximum-size-rectangle-binary-sub-matrix-1s/",
            "platform": "GeeksforGeeks",
            "chapterId": 3,
            "chapterTitle": "Linked Lists",
            "topicId": "3.1",
            "topicTitle": "Linked List Patterns & Pointer Reversal"
          },
          {
            "id": 446,
            "title": "Middle of Three",
            "url": "https://www.geeksforgeeks.org/problems/middle-of-three2926/1",
            "platform": "GeeksforGeeks",
            "chapterId": 3,
            "chapterTitle": "Linked Lists",
            "topicId": "3.1",
            "topicTitle": "Linked List Patterns & Pointer Reversal"
          },
          {
            "id": 447,
            "title": "Minimum cost for acquiring all coins with k extra coins allowed with every coin",
            "url": "https://www.geeksforgeeks.org/minimum-cost-for-acquiring-all-coins-with-k-extra-coins-allowed-with-every-coin/",
            "platform": "GeeksforGeeks",
            "chapterId": 3,
            "chapterTitle": "Linked Lists",
            "topicId": "3.1",
            "topicTitle": "Linked List Patterns & Pointer Reversal"
          },
          {
            "id": 448,
            "title": "Minimum cost to fill given weight in a bag",
            "url": "https://www.geeksforgeeks.org/problems/minimum-cost-to-fill-given-weight-in-a-bag1956/1",
            "platform": "GeeksforGeeks",
            "chapterId": 3,
            "chapterTitle": "Linked Lists",
            "topicId": "3.1",
            "topicTitle": "Linked List Patterns & Pointer Reversal"
          },
          {
            "id": 449,
            "title": "Populate Inorder Successor for all nodes",
            "url": "https://www.geeksforgeeks.org/problems/populate-inorder-successor-for-all-nodes/1",
            "platform": "GeeksforGeeks",
            "chapterId": 3,
            "chapterTitle": "Linked Lists",
            "topicId": "3.1",
            "topicTitle": "Linked List Patterns & Pointer Reversal"
          },
          {
            "id": 450,
            "title": "Print all Divisors",
            "url": "https://leetcode.com/problems/print-all-divisors/",
            "platform": "LeetCode",
            "chapterId": 3,
            "chapterTitle": "Linked Lists",
            "topicId": "3.1",
            "topicTitle": "Linked List Patterns & Pointer Reversal"
          },
          {
            "id": 451,
            "title": "Print all nodes at a distance of K in BT",
            "url": "https://leetcode.com/problems/print-all-nodes-at-a-distance-of-k-in-bt/",
            "platform": "LeetCode",
            "chapterId": 3,
            "chapterTitle": "Linked Lists",
            "topicId": "3.1",
            "topicTitle": "Linked List Patterns & Pointer Reversal"
          },
          {
            "id": 452,
            "title": "Print All Possible Paths From Top Left To Bottom Right Of A Mxn Matrix",
            "url": "https://www.geeksforgeeks.org/print-all-possible-paths-from-top-left-to-bottom-right-of-a-mxn-matrix/",
            "platform": "GeeksforGeeks",
            "chapterId": 3,
            "chapterTitle": "Linked Lists",
            "topicId": "3.1",
            "topicTitle": "Linked List Patterns & Pointer Reversal"
          },
          {
            "id": 453,
            "title": "Print all the duplicate characters in a string",
            "url": "https://www.geeksforgeeks.org/print-all-the-duplicates-in-the-input-string/",
            "platform": "GeeksforGeeks",
            "chapterId": 3,
            "chapterTitle": "Linked Lists",
            "topicId": "3.1",
            "topicTitle": "Linked List Patterns & Pointer Reversal"
          },
          {
            "id": 454,
            "title": "Print All The Duplicates In The Input String",
            "url": "https://www.geeksforgeeks.org/print-all-the-duplicates-in-the-input-string/",
            "platform": "GeeksforGeeks",
            "chapterId": 3,
            "chapterTitle": "Linked Lists",
            "topicId": "3.1",
            "topicTitle": "Linked List Patterns & Pointer Reversal"
          },
          {
            "id": 455,
            "title": "Remove All Adjacent Duplicates in String II",
            "url": "https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string-ii",
            "platform": "LeetCode",
            "chapterId": 3,
            "chapterTitle": "Linked Lists",
            "topicId": "3.1",
            "topicTitle": "Linked List Patterns & Pointer Reversal"
          },
          {
            "id": 456,
            "title": "Remove duplicates from sorted DLL",
            "url": "https://leetcode.com/problems/remove-duplicates-from-sorted-dll/",
            "platform": "LeetCode",
            "chapterId": 3,
            "chapterTitle": "Linked Lists",
            "topicId": "3.1",
            "topicTitle": "Linked List Patterns & Pointer Reversal"
          },
          {
            "id": 457,
            "title": "Remove Nth node from the back of the LL",
            "url": "https://leetcode.com/problems/remove-nth-node-from-the-back-of-the-ll/",
            "platform": "LeetCode",
            "chapterId": 3,
            "chapterTitle": "Linked Lists",
            "topicId": "3.1",
            "topicTitle": "Linked List Patterns & Pointer Reversal"
          },
          {
            "id": 458,
            "title": "Reverse a LL",
            "url": "https://leetcode.com/problems/reverse-a-ll/",
            "platform": "LeetCode",
            "chapterId": 3,
            "chapterTitle": "Linked Lists",
            "topicId": "3.1",
            "topicTitle": "Linked List Patterns & Pointer Reversal"
          },
          {
            "id": 459,
            "title": "Reverse LL in group of given size K",
            "url": "https://leetcode.com/problems/reverse-ll-in-group-of-given-size-k/",
            "platform": "LeetCode",
            "chapterId": 3,
            "chapterTitle": "Linked Lists",
            "topicId": "3.1",
            "topicTitle": "Linked List Patterns & Pointer Reversal"
          },
          {
            "id": 460,
            "title": "Rotate a LL",
            "url": "https://leetcode.com/problems/rotate-a-ll/",
            "platform": "LeetCode",
            "chapterId": 3,
            "chapterTitle": "Linked Lists",
            "topicId": "3.1",
            "topicTitle": "Linked List Patterns & Pointer Reversal"
          },
          {
            "id": 461,
            "title": "Smallest distinct window",
            "url": "https://www.geeksforgeeks.org/problems/smallest-distant-window3132/1",
            "platform": "GeeksforGeeks",
            "chapterId": 3,
            "chapterTitle": "Linked Lists",
            "topicId": "3.1",
            "topicTitle": "Linked List Patterns & Pointer Reversal"
          },
          {
            "id": 462,
            "title": "Smallest number",
            "url": "https://www.geeksforgeeks.org/problems/smallest-number5829/1",
            "platform": "GeeksforGeeks",
            "chapterId": 3,
            "chapterTitle": "Linked Lists",
            "topicId": "3.1",
            "topicTitle": "Linked List Patterns & Pointer Reversal"
          },
          {
            "id": 463,
            "title": "Smallest number with at least n trailing zeroes in factorial",
            "url": "https://www.geeksforgeeks.org/problems/smallest-factorial-number5929/1",
            "platform": "GeeksforGeeks",
            "chapterId": 3,
            "chapterTitle": "Linked Lists",
            "topicId": "3.1",
            "topicTitle": "Linked List Patterns & Pointer Reversal"
          },
          {
            "id": 464,
            "title": "Smallest Positive missing number",
            "url": "https://www.geeksforgeeks.org/problems/smallest-positive-missing-number-1587115621/1",
            "platform": "GeeksforGeeks",
            "chapterId": 3,
            "chapterTitle": "Linked Lists",
            "topicId": "3.1",
            "topicTitle": "Linked List Patterns & Pointer Reversal"
          },
          {
            "id": 465,
            "title": "Smallest subarray with sum greater than x",
            "url": "https://www.geeksforgeeks.org/problems/smallest-subarray-with-sum-greater-than-x5651/1",
            "platform": "GeeksforGeeks",
            "chapterId": 3,
            "chapterTitle": "Linked Lists",
            "topicId": "3.1",
            "topicTitle": "Linked List Patterns & Pointer Reversal"
          },
          {
            "id": 466,
            "title": "Smallest sum contiguous subarray",
            "url": "https://www.geeksforgeeks.org/problems/smallest-sum-contiguous-subarray/1",
            "platform": "GeeksforGeeks",
            "chapterId": 3,
            "chapterTitle": "Linked Lists",
            "topicId": "3.1",
            "topicTitle": "Linked List Patterns & Pointer Reversal"
          },
          {
            "id": 467,
            "title": "Smallest window containing all characters",
            "url": "https://www.geeksforgeeks.org/problems/smallest-window-in-a-string-containing-all-the-characters-of-another-string-1587115621/1",
            "platform": "GeeksforGeeks",
            "chapterId": 3,
            "chapterTitle": "Linked Lists",
            "topicId": "3.1",
            "topicTitle": "Linked List Patterns & Pointer Reversal"
          },
          {
            "id": 468,
            "title": "Smallest window in a string containing all the characters of another string",
            "url": "https://www.geeksforgeeks.org/problems/smallest-window-in-a-string-containing-all-the-characters-of-another-string-1587115621/1",
            "platform": "GeeksforGeeks",
            "chapterId": 3,
            "chapterTitle": "Linked Lists",
            "topicId": "3.1",
            "topicTitle": "Linked List Patterns & Pointer Reversal"
          },
          {
            "id": 469,
            "title": "Sort LL",
            "url": "https://leetcode.com/problems/sort-ll/",
            "platform": "LeetCode",
            "chapterId": 3,
            "chapterTitle": "Linked Lists",
            "topicId": "3.1",
            "topicTitle": "Linked List Patterns & Pointer Reversal"
          },
          {
            "id": 470,
            "title": "Spirally traversing a matrix",
            "url": "https://www.geeksforgeeks.org/problems/spirally-traversing-a-matrix-1587115621/1",
            "platform": "GeeksforGeeks",
            "chapterId": 3,
            "chapterTitle": "Linked Lists",
            "topicId": "3.1",
            "topicTitle": "Linked List Patterns & Pointer Reversal"
          },
          {
            "id": 471,
            "title": "Swap Nodes in Pairs",
            "url": "https://leetcode.com/problems/swap-nodes-in-pairs",
            "platform": "LeetCode",
            "chapterId": 3,
            "chapterTitle": "Linked Lists",
            "topicId": "3.1",
            "topicTitle": "Linked List Patterns & Pointer Reversal"
          },
          {
            "id": 472,
            "title": "Travelling Salesman Problem Set 1",
            "url": "https://www.geeksforgeeks.org/travelling-salesman-problem-set-1/",
            "platform": "GeeksforGeeks",
            "chapterId": 3,
            "chapterTitle": "Linked Lists",
            "topicId": "3.1",
            "topicTitle": "Linked List Patterns & Pointer Reversal"
          },
          {
            "id": 473,
            "title": "Travelling Salesman Problem using Dynamic Programming",
            "url": "https://www.geeksforgeeks.org/travelling-salesman-problem-using-dynamic-programming/",
            "platform": "GeeksforGeeks",
            "chapterId": 3,
            "chapterTitle": "Linked Lists",
            "topicId": "3.1",
            "topicTitle": "Linked List Patterns & Pointer Reversal"
          },
          {
            "id": 474,
            "title": "Triplets with Smaller Sum",
            "url": "https://www.geeksforgeeks.org/problems/count-triplets-with-sum-smaller-than-x5549/1",
            "platform": "GeeksforGeeks",
            "chapterId": 3,
            "chapterTitle": "Linked Lists",
            "topicId": "3.1",
            "topicTitle": "Linked List Patterns & Pointer Reversal"
          }
        ]
      }
    ]
  },
  {
    "id": 4,
    "title": "Stacks & Queues",
    "expectedCount": 60,
    "icon": "📚",
    "topics": [
      {
        "id": "4.1",
        "title": "Monotonic Stack & Monotonic Queue",
        "expectedCount": 14,
        "problems": [
          {
            "id": 475,
            "title": "Daily Temperatures",
            "url": "https://leetcode.com/problems/daily-temperatures",
            "platform": "LeetCode",
            "chapterId": 4,
            "chapterTitle": "Stacks & Queues",
            "topicId": "4.1",
            "topicTitle": "Monotonic Stack & Monotonic Queue"
          },
          {
            "id": 476,
            "title": "Histogram Max Rectangular Area",
            "url": "https://www.geeksforgeeks.org/problems/maximum-rectangular-area-in-a-histogram-1587115620/1",
            "platform": "GeeksforGeeks",
            "chapterId": 4,
            "chapterTitle": "Stacks & Queues",
            "topicId": "4.1",
            "topicTitle": "Monotonic Stack & Monotonic Queue"
          },
          {
            "id": 477,
            "title": "Largest Rectangle in Histogram",
            "url": "https://leetcode.com/problems/largest-rectangle-in-histogram",
            "platform": "LeetCode",
            "chapterId": 4,
            "chapterTitle": "Stacks & Queues",
            "topicId": "4.1",
            "topicTitle": "Monotonic Stack & Monotonic Queue"
          },
          {
            "id": 478,
            "title": "Max rectangle",
            "url": "https://www.geeksforgeeks.org/problems/max-rectangle/1",
            "platform": "GeeksforGeeks",
            "chapterId": 4,
            "chapterTitle": "Stacks & Queues",
            "topicId": "4.1",
            "topicTitle": "Monotonic Stack & Monotonic Queue"
          },
          {
            "id": 479,
            "title": "Max Value of Equation",
            "url": "https://leetcode.com/problems/max-value-of-equation",
            "platform": "LeetCode",
            "chapterId": 4,
            "chapterTitle": "Stacks & Queues",
            "topicId": "4.1",
            "topicTitle": "Monotonic Stack & Monotonic Queue"
          },
          {
            "id": 480,
            "title": "Next Greater Element",
            "url": "https://www.geeksforgeeks.org/problems/next-larger-element-1587115620/1",
            "platform": "GeeksforGeeks",
            "chapterId": 4,
            "chapterTitle": "Stacks & Queues",
            "topicId": "4.1",
            "topicTitle": "Monotonic Stack & Monotonic Queue"
          },
          {
            "id": 481,
            "title": "Next Smaller Element",
            "url": "https://www.geeksforgeeks.org/next-smaller-element/",
            "platform": "GeeksforGeeks",
            "chapterId": 4,
            "chapterTitle": "Stacks & Queues",
            "topicId": "4.1",
            "topicTitle": "Monotonic Stack & Monotonic Queue"
          },
          {
            "id": 482,
            "title": "Online Stock Span",
            "url": "https://leetcode.com/problems/online-stock-span",
            "platform": "LeetCode",
            "chapterId": 4,
            "chapterTitle": "Stacks & Queues",
            "topicId": "4.1",
            "topicTitle": "Monotonic Stack & Monotonic Queue"
          },
          {
            "id": 483,
            "title": "Remove K Digits",
            "url": "https://leetcode.com/problems/remove-k-digits",
            "platform": "LeetCode",
            "chapterId": 4,
            "chapterTitle": "Stacks & Queues",
            "topicId": "4.1",
            "topicTitle": "Monotonic Stack & Monotonic Queue"
          },
          {
            "id": 484,
            "title": "Sliding Window Maximum",
            "url": "https://leetcode.com/problems/sliding-window-maximum",
            "platform": "LeetCode",
            "chapterId": 4,
            "chapterTitle": "Stacks & Queues",
            "topicId": "4.1",
            "topicTitle": "Monotonic Stack & Monotonic Queue"
          },
          {
            "id": 485,
            "title": "Sliding Window Maximum Maximum Of All Subarrays Of Size K",
            "url": "https://www.geeksforgeeks.org/sliding-window-maximum-maximum-of-all-subarrays-of-size-k/",
            "platform": "GeeksforGeeks",
            "chapterId": 4,
            "chapterTitle": "Stacks & Queues",
            "topicId": "4.1",
            "topicTitle": "Monotonic Stack & Monotonic Queue"
          },
          {
            "id": 486,
            "title": "Stock span problem",
            "url": "https://leetcode.com/problems/stock-span-problem/",
            "platform": "LeetCode",
            "chapterId": 4,
            "chapterTitle": "Stacks & Queues",
            "topicId": "4.1",
            "topicTitle": "Monotonic Stack & Monotonic Queue"
          },
          {
            "id": 487,
            "title": "Sum of Subarray Minimums",
            "url": "https://leetcode.com/problems/sum-of-subarray-minimums",
            "platform": "LeetCode",
            "chapterId": 4,
            "chapterTitle": "Stacks & Queues",
            "topicId": "4.1",
            "topicTitle": "Monotonic Stack & Monotonic Queue"
          },
          {
            "id": 488,
            "title": "Sum of Subarray Ranges",
            "url": "https://leetcode.com/problems/sum-of-subarray-ranges/",
            "platform": "LeetCode",
            "chapterId": 4,
            "chapterTitle": "Stacks & Queues",
            "topicId": "4.1",
            "topicTitle": "Monotonic Stack & Monotonic Queue"
          }
        ]
      },
      {
        "id": "4.2",
        "title": "Stacks, Queues & Expression Parsing",
        "expectedCount": 46,
        "problems": [
          {
            "id": 489,
            "title": "Baseball Game",
            "url": "https://leetcode.com/problems/baseball-game/",
            "platform": "LeetCode",
            "chapterId": 4,
            "chapterTitle": "Stacks & Queues",
            "topicId": "4.2",
            "topicTitle": "Stacks, Queues & Expression Parsing"
          },
          {
            "id": 490,
            "title": "Basic Calculator",
            "url": "https://leetcode.com/problems/basic-calculator",
            "platform": "LeetCode",
            "chapterId": 4,
            "chapterTitle": "Stacks & Queues",
            "topicId": "4.2",
            "topicTitle": "Stacks, Queues & Expression Parsing"
          },
          {
            "id": 491,
            "title": "Boolean Parenthesization",
            "url": "https://www.geeksforgeeks.org/problems/boolean-parenthesization5610/1",
            "platform": "GeeksforGeeks",
            "chapterId": 4,
            "chapterTitle": "Stacks & Queues",
            "topicId": "4.2",
            "topicTitle": "Stacks, Queues & Expression Parsing"
          },
          {
            "id": 492,
            "title": "Circular Tour",
            "url": "https://www.geeksforgeeks.org/problems/circular-tour-1587115620/1",
            "platform": "GeeksforGeeks",
            "chapterId": 4,
            "chapterTitle": "Stacks & Queues",
            "topicId": "4.2",
            "topicTitle": "Stacks, Queues & Expression Parsing"
          },
          {
            "id": 493,
            "title": "Decode String",
            "url": "https://leetcode.com/problems/decode-string",
            "platform": "LeetCode",
            "chapterId": 4,
            "chapterTitle": "Stacks & Queues",
            "topicId": "4.2",
            "topicTitle": "Stacks, Queues & Expression Parsing"
          },
          {
            "id": 494,
            "title": "Design A Stack With Find Middle Operation",
            "url": "https://www.geeksforgeeks.org/design-a-stack-with-find-middle-operation/",
            "platform": "GeeksforGeeks",
            "chapterId": 4,
            "chapterTitle": "Stacks & Queues",
            "topicId": "4.2",
            "topicTitle": "Stacks, Queues & Expression Parsing"
          },
          {
            "id": 495,
            "title": "Design Circular Queue",
            "url": "https://leetcode.com/problems/design-circular-queue/",
            "platform": "LeetCode",
            "chapterId": 4,
            "chapterTitle": "Stacks & Queues",
            "topicId": "4.2",
            "topicTitle": "Stacks, Queues & Expression Parsing"
          },
          {
            "id": 496,
            "title": "Design Hit Counter",
            "url": "https://leetcode.com/problems/design-hit-counter",
            "platform": "LeetCode",
            "chapterId": 4,
            "chapterTitle": "Stacks & Queues",
            "topicId": "4.2",
            "topicTitle": "Stacks, Queues & Expression Parsing"
          },
          {
            "id": 497,
            "title": "Dota2 Senate",
            "url": "https://leetcode.com/problems/dota2-senate/",
            "platform": "LeetCode",
            "chapterId": 4,
            "chapterTitle": "Stacks & Queues",
            "topicId": "4.2",
            "topicTitle": "Stacks, Queues & Expression Parsing"
          },
          {
            "id": 498,
            "title": "Efficiently Implement K Stacks Single Array",
            "url": "https://www.geeksforgeeks.org/efficiently-implement-k-stacks-single-array/",
            "platform": "GeeksforGeeks",
            "chapterId": 4,
            "chapterTitle": "Stacks & Queues",
            "topicId": "4.2",
            "topicTitle": "Stacks, Queues & Expression Parsing"
          },
          {
            "id": 499,
            "title": "Encode and Decode Strings",
            "url": "https://leetcode.com/problems/encode-and-decode-strings",
            "platform": "LeetCode",
            "chapterId": 4,
            "chapterTitle": "Stacks & Queues",
            "topicId": "4.2",
            "topicTitle": "Stacks, Queues & Expression Parsing"
          },
          {
            "id": 500,
            "title": "Expression Contains Redundant Bracket Not",
            "url": "https://www.geeksforgeeks.org/expression-contains-redundant-bracket-not/",
            "platform": "GeeksforGeeks",
            "chapterId": 4,
            "chapterTitle": "Stacks & Queues",
            "topicId": "4.2",
            "topicTitle": "Stacks, Queues & Expression Parsing"
          },
          {
            "id": 501,
            "title": "Find Maximum Sum Possible Equal Sum Three Stacks",
            "url": "https://www.geeksforgeeks.org/find-maximum-sum-possible-equal-sum-three-stacks/",
            "platform": "GeeksforGeeks",
            "chapterId": 4,
            "chapterTitle": "Stacks & Queues",
            "topicId": "4.2",
            "topicTitle": "Stacks, Queues & Expression Parsing"
          },
          {
            "id": 502,
            "title": "Implement Min Stack",
            "url": "https://leetcode.com/problems/implement-min-stack/",
            "platform": "LeetCode",
            "chapterId": 4,
            "chapterTitle": "Stacks & Queues",
            "topicId": "4.2",
            "topicTitle": "Stacks, Queues & Expression Parsing"
          },
          {
            "id": 503,
            "title": "Implement Queue using Arrays",
            "url": "https://leetcode.com/problems/implement-queue-using-arrays/",
            "platform": "LeetCode",
            "chapterId": 4,
            "chapterTitle": "Stacks & Queues",
            "topicId": "4.2",
            "topicTitle": "Stacks, Queues & Expression Parsing"
          },
          {
            "id": 504,
            "title": "Implement Queue using Stack",
            "url": "https://leetcode.com/problems/implement-queue-using-stack/",
            "platform": "LeetCode",
            "chapterId": 4,
            "chapterTitle": "Stacks & Queues",
            "topicId": "4.2",
            "topicTitle": "Stacks, Queues & Expression Parsing"
          },
          {
            "id": 505,
            "title": "Implement Stack and Queue using Deque",
            "url": "https://www.geeksforgeeks.org/implement-stack-queue-using-deque/",
            "platform": "GeeksforGeeks",
            "chapterId": 4,
            "chapterTitle": "Stacks & Queues",
            "topicId": "4.2",
            "topicTitle": "Stacks, Queues & Expression Parsing"
          },
          {
            "id": 506,
            "title": "Implement Stack using Arrays",
            "url": "https://leetcode.com/problems/implement-stack-using-arrays/",
            "platform": "LeetCode",
            "chapterId": 4,
            "chapterTitle": "Stacks & Queues",
            "topicId": "4.2",
            "topicTitle": "Stacks, Queues & Expression Parsing"
          },
          {
            "id": 507,
            "title": "Implement Stack using Queue",
            "url": "https://leetcode.com/problems/implement-stack-using-queue/",
            "platform": "LeetCode",
            "chapterId": 4,
            "chapterTitle": "Stacks & Queues",
            "topicId": "4.2",
            "topicTitle": "Stacks, Queues & Expression Parsing"
          },
          {
            "id": 508,
            "title": "Interleave First Half Queue Second Half",
            "url": "https://www.geeksforgeeks.org/interleave-first-half-queue-second-half/",
            "platform": "GeeksforGeeks",
            "chapterId": 4,
            "chapterTitle": "Stacks & Queues",
            "topicId": "4.2",
            "topicTitle": "Stacks, Queues & Expression Parsing"
          },
          {
            "id": 509,
            "title": "LRU Cache",
            "url": "https://leetcode.com/problems/lru-cache",
            "platform": "LeetCode",
            "chapterId": 4,
            "chapterTitle": "Stacks & Queues",
            "topicId": "4.2",
            "topicTitle": "Stacks, Queues & Expression Parsing"
          },
          {
            "id": 510,
            "title": "Maximum Frequency Stack",
            "url": "https://leetcode.com/problems/maximum-frequency-stack",
            "platform": "LeetCode",
            "chapterId": 4,
            "chapterTitle": "Stacks & Queues",
            "topicId": "4.2",
            "topicTitle": "Stacks, Queues & Expression Parsing"
          },
          {
            "id": 511,
            "title": "Maximum Nesting Depth of the Parentheses",
            "url": "https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses/",
            "platform": "LeetCode",
            "chapterId": 4,
            "chapterTitle": "Stacks & Queues",
            "topicId": "4.2",
            "topicTitle": "Stacks, Queues & Expression Parsing"
          },
          {
            "id": 512,
            "title": "Min Stack",
            "url": "https://leetcode.com/problems/min-stack",
            "platform": "LeetCode",
            "chapterId": 4,
            "chapterTitle": "Stacks & Queues",
            "topicId": "4.2",
            "topicTitle": "Stacks, Queues & Expression Parsing"
          },
          {
            "id": 513,
            "title": "Minimum number of bracket reversals to make an expression balanced",
            "url": "https://leetcode.com/problems/minimum-number-of-bracket-reversals-to-make-an-expression-balanced/",
            "platform": "LeetCode",
            "chapterId": 4,
            "chapterTitle": "Stacks & Queues",
            "topicId": "4.2",
            "topicTitle": "Stacks, Queues & Expression Parsing"
          },
          {
            "id": 514,
            "title": "Minimum Swaps for Bracket Balancing",
            "url": "https://www.geeksforgeeks.org/problems/minimum-swaps-for-bracket-balancing2704/1",
            "platform": "GeeksforGeeks",
            "chapterId": 4,
            "chapterTitle": "Stacks & Queues",
            "topicId": "4.2",
            "topicTitle": "Stacks, Queues & Expression Parsing"
          },
          {
            "id": 515,
            "title": "Page Faults in LRU",
            "url": "https://www.geeksforgeeks.org/problems/page-faults-in-lru5603/1",
            "platform": "GeeksforGeeks",
            "chapterId": 4,
            "chapterTitle": "Stacks & Queues",
            "topicId": "4.2",
            "topicTitle": "Stacks, Queues & Expression Parsing"
          },
          {
            "id": 516,
            "title": "Parenthesis Checker",
            "url": "https://www.geeksforgeeks.org/problems/parenthesis-checker2744/1",
            "platform": "GeeksforGeeks",
            "chapterId": 4,
            "chapterTitle": "Stacks & Queues",
            "topicId": "4.2",
            "topicTitle": "Stacks, Queues & Expression Parsing"
          },
          {
            "id": 517,
            "title": "Program for Least Recently Used (LRU) Page Replacement Algorithm",
            "url": "https://leetcode.com/problems/program-for-least-recently-used-page-replacement-algorithm/",
            "platform": "LeetCode",
            "chapterId": 4,
            "chapterTitle": "Stacks & Queues",
            "topicId": "4.2",
            "topicTitle": "Stacks, Queues & Expression Parsing"
          },
          {
            "id": 518,
            "title": "Queue Reversal",
            "url": "https://www.geeksforgeeks.org/problems/queue-reversal/1",
            "platform": "GeeksforGeeks",
            "chapterId": 4,
            "chapterTitle": "Stacks & Queues",
            "topicId": "4.2",
            "topicTitle": "Stacks, Queues & Expression Parsing"
          },
          {
            "id": 519,
            "title": "Queue Set 1introduction And Array Implementation",
            "url": "https://www.geeksforgeeks.org/queue-set-1introduction-and-array-implementation/",
            "platform": "GeeksforGeeks",
            "chapterId": 4,
            "chapterTitle": "Stacks & Queues",
            "topicId": "4.2",
            "topicTitle": "Stacks, Queues & Expression Parsing"
          },
          {
            "id": 520,
            "title": "Queue using two Stacks",
            "url": "https://www.geeksforgeeks.org/problems/queue-using-two-stacks/1",
            "platform": "GeeksforGeeks",
            "chapterId": 4,
            "chapterTitle": "Stacks & Queues",
            "topicId": "4.2",
            "topicTitle": "Stacks, Queues & Expression Parsing"
          },
          {
            "id": 521,
            "title": "Remove Outermost Parentheses",
            "url": "https://leetcode.com/problems/remove-outermost-parentheses/",
            "platform": "LeetCode",
            "chapterId": 4,
            "chapterTitle": "Stacks & Queues",
            "topicId": "4.2",
            "topicTitle": "Stacks, Queues & Expression Parsing"
          },
          {
            "id": 522,
            "title": "Reverse A Stack Using Recursion",
            "url": "https://www.geeksforgeeks.org/reverse-a-stack-using-recursion/",
            "platform": "GeeksforGeeks",
            "chapterId": 4,
            "chapterTitle": "Stacks & Queues",
            "topicId": "4.2",
            "topicTitle": "Stacks, Queues & Expression Parsing"
          },
          {
            "id": 523,
            "title": "Reverse first K of a Queue",
            "url": "https://www.geeksforgeeks.org/problems/reverse-first-k-elements-of-queue/1",
            "platform": "GeeksforGeeks",
            "chapterId": 4,
            "chapterTitle": "Stacks & Queues",
            "topicId": "4.2",
            "topicTitle": "Stacks, Queues & Expression Parsing"
          },
          {
            "id": 524,
            "title": "Reverse Using Stack",
            "url": "https://www.geeksforgeeks.org/problems/reverse-a-string-using-stack/1",
            "platform": "GeeksforGeeks",
            "chapterId": 4,
            "chapterTitle": "Stacks & Queues",
            "topicId": "4.2",
            "topicTitle": "Stacks, Queues & Expression Parsing"
          },
          {
            "id": 525,
            "title": "Simplify Path",
            "url": "https://leetcode.com/problems/simplify-path",
            "platform": "LeetCode",
            "chapterId": 4,
            "chapterTitle": "Stacks & Queues",
            "topicId": "4.2",
            "topicTitle": "Stacks, Queues & Expression Parsing"
          },
          {
            "id": 526,
            "title": "Sort a stack",
            "url": "https://www.geeksforgeeks.org/problems/sort-a-stack/1",
            "platform": "GeeksforGeeks",
            "chapterId": 4,
            "chapterTitle": "Stacks & Queues",
            "topicId": "4.2",
            "topicTitle": "Stacks, Queues & Expression Parsing"
          },
          {
            "id": 527,
            "title": "Sort a stack using recursion",
            "url": "https://leetcode.com/problems/sort-a-stack-using-recursion/",
            "platform": "LeetCode",
            "chapterId": 4,
            "chapterTitle": "Stacks & Queues",
            "topicId": "4.2",
            "topicTitle": "Stacks, Queues & Expression Parsing"
          },
          {
            "id": 528,
            "title": "Special Stack",
            "url": "https://www.geeksforgeeks.org/problems/special-stack/1",
            "platform": "GeeksforGeeks",
            "chapterId": 4,
            "chapterTitle": "Stacks & Queues",
            "topicId": "4.2",
            "topicTitle": "Stacks, Queues & Expression Parsing"
          },
          {
            "id": 529,
            "title": "Stack using Queue",
            "url": "https://www.geeksforgeeks.org/problems/stack-using-two-queues/1",
            "platform": "GeeksforGeeks",
            "chapterId": 4,
            "chapterTitle": "Stacks & Queues",
            "topicId": "4.2",
            "topicTitle": "Stacks, Queues & Expression Parsing"
          },
          {
            "id": 530,
            "title": "The Celebrity Problem",
            "url": "https://www.geeksforgeeks.org/problems/the-celebrity-problem/1",
            "platform": "GeeksforGeeks",
            "chapterId": 4,
            "chapterTitle": "Stacks & Queues",
            "topicId": "4.2",
            "topicTitle": "Stacks, Queues & Expression Parsing"
          },
          {
            "id": 531,
            "title": "Two Stacks in an Array",
            "url": "https://www.geeksforgeeks.org/problems/implement-two-stacks-in-an-array/1",
            "platform": "GeeksforGeeks",
            "chapterId": 4,
            "chapterTitle": "Stacks & Queues",
            "topicId": "4.2",
            "topicTitle": "Stacks, Queues & Expression Parsing"
          },
          {
            "id": 532,
            "title": "Valid Parentheses",
            "url": "https://leetcode.com/problems/valid-parentheses",
            "platform": "LeetCode",
            "chapterId": 4,
            "chapterTitle": "Stacks & Queues",
            "topicId": "4.2",
            "topicTitle": "Stacks, Queues & Expression Parsing"
          },
          {
            "id": 533,
            "title": "Valid Parenthesis String",
            "url": "https://leetcode.com/problems/valid-parenthesis-string/",
            "platform": "LeetCode",
            "chapterId": 4,
            "chapterTitle": "Stacks & Queues",
            "topicId": "4.2",
            "topicTitle": "Stacks, Queues & Expression Parsing"
          },
          {
            "id": 534,
            "title": "Why priority Queue is used in Djisktra's Algorithm",
            "url": "https://leetcode.com/problems/why-priority-queue-is-used-in-djisktra-s-algorithm/",
            "platform": "LeetCode",
            "chapterId": 4,
            "chapterTitle": "Stacks & Queues",
            "topicId": "4.2",
            "topicTitle": "Stacks, Queues & Expression Parsing"
          }
        ]
      }
    ]
  },
  {
    "id": 5,
    "title": "Binary Trees & BST",
    "expectedCount": 132,
    "icon": "🌲",
    "topics": [
      {
        "id": "5.1",
        "title": "Tree DFS (Traversals, Properties & Path Accumulation)",
        "expectedCount": 60,
        "problems": [
          {
            "id": 535,
            "title": "Balanced Binary Tree",
            "url": "https://leetcode.com/problems/balanced-binary-tree",
            "platform": "LeetCode",
            "chapterId": 5,
            "chapterTitle": "Binary Trees & BST",
            "topicId": "5.1",
            "topicTitle": "Tree DFS (Traversals, Properties & Path Accumulation)"
          },
          {
            "id": 536,
            "title": "Balanced Tree Check",
            "url": "https://www.geeksforgeeks.org/problems/check-for-balanced-tree/1",
            "platform": "GeeksforGeeks",
            "chapterId": 5,
            "chapterTitle": "Binary Trees & BST",
            "topicId": "5.1",
            "topicTitle": "Tree DFS (Traversals, Properties & Path Accumulation)"
          },
          {
            "id": 537,
            "title": "BBT counter",
            "url": "https://www.geeksforgeeks.org/problems/bbt-counter4914/1",
            "platform": "GeeksforGeeks",
            "chapterId": 5,
            "chapterTitle": "Binary Trees & BST",
            "topicId": "5.1",
            "topicTitle": "Tree DFS (Traversals, Properties & Path Accumulation)"
          },
          {
            "id": 538,
            "title": "Binary Tree Cameras",
            "url": "https://leetcode.com/problems/binary-tree-cameras",
            "platform": "LeetCode",
            "chapterId": 5,
            "chapterTitle": "Binary Trees & BST",
            "topicId": "5.1",
            "topicTitle": "Tree DFS (Traversals, Properties & Path Accumulation)"
          },
          {
            "id": 539,
            "title": "Binary Tree Inorder Traversal",
            "url": "https://leetcode.com/problems/binary-tree-inorder-traversal",
            "platform": "LeetCode",
            "chapterId": 5,
            "chapterTitle": "Binary Trees & BST",
            "topicId": "5.1",
            "topicTitle": "Tree DFS (Traversals, Properties & Path Accumulation)"
          },
          {
            "id": 540,
            "title": "Binary Tree Maximum Path Sum",
            "url": "https://leetcode.com/problems/binary-tree-maximum-path-sum",
            "platform": "LeetCode",
            "chapterId": 5,
            "chapterTitle": "Binary Trees & BST",
            "topicId": "5.1",
            "topicTitle": "Tree DFS (Traversals, Properties & Path Accumulation)"
          },
          {
            "id": 541,
            "title": "Binary Tree Paths",
            "url": "https://leetcode.com/problems/binary-tree-paths",
            "platform": "LeetCode",
            "chapterId": 5,
            "chapterTitle": "Binary Trees & BST",
            "topicId": "5.1",
            "topicTitle": "Tree DFS (Traversals, Properties & Path Accumulation)"
          },
          {
            "id": 542,
            "title": "Binary Tree Representation in Java",
            "url": "https://leetcode.com/problems/binary-tree-representation-in-java/",
            "platform": "LeetCode",
            "chapterId": 5,
            "chapterTitle": "Binary Trees & BST",
            "topicId": "5.1",
            "topicTitle": "Tree DFS (Traversals, Properties & Path Accumulation)"
          },
          {
            "id": 543,
            "title": "Binary Tree To DLL",
            "url": "https://www.geeksforgeeks.org/problems/binary-tree-to-dll/1",
            "platform": "GeeksforGeeks",
            "chapterId": 5,
            "chapterTitle": "Binary Trees & BST",
            "topicId": "5.1",
            "topicTitle": "Tree DFS (Traversals, Properties & Path Accumulation)"
          },
          {
            "id": 544,
            "title": "Check if all levels of two trees are anagrams or not",
            "url": "https://www.geeksforgeeks.org/problems/check-if-all-levels-of-two-trees-are-anagrams-or-not/1",
            "platform": "GeeksforGeeks",
            "chapterId": 5,
            "chapterTitle": "Binary Trees & BST",
            "topicId": "5.1",
            "topicTitle": "Tree DFS (Traversals, Properties & Path Accumulation)"
          },
          {
            "id": 545,
            "title": "Check if two trees are identical or not",
            "url": "https://leetcode.com/problems/check-if-two-trees-are-identical-or-not/",
            "platform": "LeetCode",
            "chapterId": 5,
            "chapterTitle": "Binary Trees & BST",
            "topicId": "5.1",
            "topicTitle": "Tree DFS (Traversals, Properties & Path Accumulation)"
          },
          {
            "id": 546,
            "title": "Check Mirror in N-ary tree",
            "url": "https://www.geeksforgeeks.org/problems/check-mirror-in-n-ary-tree1528/1",
            "platform": "GeeksforGeeks",
            "chapterId": 5,
            "chapterTitle": "Binary Trees & BST",
            "topicId": "5.1",
            "topicTitle": "Tree DFS (Traversals, Properties & Path Accumulation)"
          },
          {
            "id": 547,
            "title": "Children Sum Property in Binary Tree",
            "url": "https://leetcode.com/problems/children-sum-property-in-binary-tree/",
            "platform": "LeetCode",
            "chapterId": 5,
            "chapterTitle": "Binary Trees & BST",
            "topicId": "5.1",
            "topicTitle": "Tree DFS (Traversals, Properties & Path Accumulation)"
          },
          {
            "id": 548,
            "title": "Construct Binary Tree from Preorder and Inorder Traversal",
            "url": "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal",
            "platform": "LeetCode",
            "chapterId": 5,
            "chapterTitle": "Binary Trees & BST",
            "topicId": "5.1",
            "topicTitle": "Tree DFS (Traversals, Properties & Path Accumulation)"
          },
          {
            "id": 549,
            "title": "Construct Binary Tree String Bracket Representation",
            "url": "https://www.geeksforgeeks.org/construct-binary-tree-string-bracket-representation/",
            "platform": "GeeksforGeeks",
            "chapterId": 5,
            "chapterTitle": "Binary Trees & BST",
            "topicId": "5.1",
            "topicTitle": "Tree DFS (Traversals, Properties & Path Accumulation)"
          },
          {
            "id": 550,
            "title": "Construct Quad Tree",
            "url": "https://leetcode.com/problems/construct-quad-tree/",
            "platform": "LeetCode",
            "chapterId": 5,
            "chapterTitle": "Binary Trees & BST",
            "topicId": "5.1",
            "topicTitle": "Tree DFS (Traversals, Properties & Path Accumulation)"
          },
          {
            "id": 551,
            "title": "Construct Tree from Inorder & Preorder",
            "url": "https://www.geeksforgeeks.org/problems/construct-tree-1/1",
            "platform": "GeeksforGeeks",
            "chapterId": 5,
            "chapterTitle": "Binary Trees & BST",
            "topicId": "5.1",
            "topicTitle": "Tree DFS (Traversals, Properties & Path Accumulation)"
          },
          {
            "id": 552,
            "title": "Construct Tree From Preorder Traversal",
            "url": "https://www.geeksforgeeks.org/problems/construct-tree-from-preorder-traversal/1",
            "platform": "GeeksforGeeks",
            "chapterId": 5,
            "chapterTitle": "Binary Trees & BST",
            "topicId": "5.1",
            "topicTitle": "Tree DFS (Traversals, Properties & Path Accumulation)"
          },
          {
            "id": 553,
            "title": "Count Complete Tree Nodes",
            "url": "https://leetcode.com/problems/count-complete-tree-nodes/",
            "platform": "LeetCode",
            "chapterId": 5,
            "chapterTitle": "Binary Trees & BST",
            "topicId": "5.1",
            "topicTitle": "Tree DFS (Traversals, Properties & Path Accumulation)"
          },
          {
            "id": 554,
            "title": "Count Good Nodes In Binary Tree",
            "url": "https://leetcode.com/problems/count-good-nodes-in-binary-tree/",
            "platform": "LeetCode",
            "chapterId": 5,
            "chapterTitle": "Binary Trees & BST",
            "topicId": "5.1",
            "topicTitle": "Tree DFS (Traversals, Properties & Path Accumulation)"
          },
          {
            "id": 555,
            "title": "Create A Mirror Tree From The Given Binary Tree",
            "url": "https://www.geeksforgeeks.org/create-a-mirror-tree-from-the-given-binary-tree/",
            "platform": "GeeksforGeeks",
            "chapterId": 5,
            "chapterTitle": "Binary Trees & BST",
            "topicId": "5.1",
            "topicTitle": "Tree DFS (Traversals, Properties & Path Accumulation)"
          },
          {
            "id": 556,
            "title": "Delete Leaves With a Given Value",
            "url": "https://leetcode.com/problems/delete-leaves-with-a-given-value/",
            "platform": "LeetCode",
            "chapterId": 5,
            "chapterTitle": "Binary Trees & BST",
            "topicId": "5.1",
            "topicTitle": "Tree DFS (Traversals, Properties & Path Accumulation)"
          },
          {
            "id": 557,
            "title": "Diameter of Binary Tree",
            "url": "https://leetcode.com/problems/diameter-of-binary-tree",
            "platform": "LeetCode",
            "chapterId": 5,
            "chapterTitle": "Binary Trees & BST",
            "topicId": "5.1",
            "topicTitle": "Tree DFS (Traversals, Properties & Path Accumulation)"
          },
          {
            "id": 558,
            "title": "Duplicate Subtree",
            "url": "https://www.geeksforgeeks.org/problems/duplicate-subtree-in-binary-tree/1",
            "platform": "GeeksforGeeks",
            "chapterId": 5,
            "chapterTitle": "Binary Trees & BST",
            "topicId": "5.1",
            "topicTitle": "Tree DFS (Traversals, Properties & Path Accumulation)"
          },
          {
            "id": 559,
            "title": "Find Largest Subtree Sum Tree",
            "url": "https://www.geeksforgeeks.org/find-largest-subtree-sum-tree/",
            "platform": "GeeksforGeeks",
            "chapterId": 5,
            "chapterTitle": "Binary Trees & BST",
            "topicId": "5.1",
            "topicTitle": "Tree DFS (Traversals, Properties & Path Accumulation)"
          },
          {
            "id": 560,
            "title": "Flatten Binary Tree to Linked List",
            "url": "https://leetcode.com/problems/flatten-binary-tree-to-linked-list",
            "platform": "LeetCode",
            "chapterId": 5,
            "chapterTitle": "Binary Trees & BST",
            "topicId": "5.1",
            "topicTitle": "Tree DFS (Traversals, Properties & Path Accumulation)"
          },
          {
            "id": 561,
            "title": "Height of Binary Tree",
            "url": "https://www.geeksforgeeks.org/problems/height-of-binary-tree/1",
            "platform": "GeeksforGeeks",
            "chapterId": 5,
            "chapterTitle": "Binary Trees & BST",
            "topicId": "5.1",
            "topicTitle": "Tree DFS (Traversals, Properties & Path Accumulation)"
          },
          {
            "id": 562,
            "title": "Introduction to Trees",
            "url": "https://leetcode.com/problems/introduction-to-trees/",
            "platform": "LeetCode",
            "chapterId": 5,
            "chapterTitle": "Binary Trees & BST",
            "topicId": "5.1",
            "topicTitle": "Tree DFS (Traversals, Properties & Path Accumulation)"
          },
          {
            "id": 563,
            "title": "Invert Binary Tree",
            "url": "https://leetcode.com/problems/invert-binary-tree",
            "platform": "LeetCode",
            "chapterId": 5,
            "chapterTitle": "Binary Trees & BST",
            "topicId": "5.1",
            "topicTitle": "Tree DFS (Traversals, Properties & Path Accumulation)"
          },
          {
            "id": 564,
            "title": "Is Binary Tree Heap",
            "url": "https://www.geeksforgeeks.org/problems/is-binary-tree-heap/1",
            "platform": "GeeksforGeeks",
            "chapterId": 5,
            "chapterTitle": "Binary Trees & BST",
            "topicId": "5.1",
            "topicTitle": "Tree DFS (Traversals, Properties & Path Accumulation)"
          },
          {
            "id": 565,
            "title": "Isomorphic Trees",
            "url": "https://www.geeksforgeeks.org/problems/check-if-tree-is-isomorphic/1",
            "platform": "GeeksforGeeks",
            "chapterId": 5,
            "chapterTitle": "Binary Trees & BST",
            "topicId": "5.1",
            "topicTitle": "Tree DFS (Traversals, Properties & Path Accumulation)"
          },
          {
            "id": 566,
            "title": "Kth Ancestor Node Binary Tree Set 2",
            "url": "https://www.geeksforgeeks.org/kth-ancestor-node-binary-tree-set-2/",
            "platform": "GeeksforGeeks",
            "chapterId": 5,
            "chapterTitle": "Binary Trees & BST",
            "topicId": "5.1",
            "topicTitle": "Tree DFS (Traversals, Properties & Path Accumulation)"
          },
          {
            "id": 567,
            "title": "LCA in Binary Tree",
            "url": "https://www.geeksforgeeks.org/problems/lowest-common-ancestor-in-a-binary-tree/1",
            "platform": "GeeksforGeeks",
            "chapterId": 5,
            "chapterTitle": "Binary Trees & BST",
            "topicId": "5.1",
            "topicTitle": "Tree DFS (Traversals, Properties & Path Accumulation)"
          },
          {
            "id": 568,
            "title": "LCA in BT",
            "url": "https://leetcode.com/problems/lca-in-bt/",
            "platform": "LeetCode",
            "chapterId": 5,
            "chapterTitle": "Binary Trees & BST",
            "topicId": "5.1",
            "topicTitle": "Tree DFS (Traversals, Properties & Path Accumulation)"
          },
          {
            "id": 569,
            "title": "Leaves at Same Level or Not",
            "url": "https://www.geeksforgeeks.org/problems/leaf-at-same-level/1",
            "platform": "GeeksforGeeks",
            "chapterId": 5,
            "chapterTitle": "Binary Trees & BST",
            "topicId": "5.1",
            "topicTitle": "Tree DFS (Traversals, Properties & Path Accumulation)"
          },
          {
            "id": 570,
            "title": "Lowest Common Ancestor of a Binary Tree",
            "url": "https://leetcode.com/problems/binary-search-tree-iterator",
            "platform": "LeetCode",
            "chapterId": 5,
            "chapterTitle": "Binary Trees & BST",
            "topicId": "5.1",
            "topicTitle": "Tree DFS (Traversals, Properties & Path Accumulation)"
          },
          {
            "id": 571,
            "title": "Maximum Depth of Binary Tree",
            "url": "https://leetcode.com/problems/maximum-depth-of-binary-tree",
            "platform": "LeetCode",
            "chapterId": 5,
            "chapterTitle": "Binary Trees & BST",
            "topicId": "5.1",
            "topicTitle": "Tree DFS (Traversals, Properties & Path Accumulation)"
          },
          {
            "id": 572,
            "title": "Maximum path sum in matrix",
            "url": "https://www.geeksforgeeks.org/problems/path-in-matrix3805/1",
            "platform": "GeeksforGeeks",
            "chapterId": 5,
            "chapterTitle": "Binary Trees & BST",
            "topicId": "5.1",
            "topicTitle": "Tree DFS (Traversals, Properties & Path Accumulation)"
          },
          {
            "id": 573,
            "title": "Maximum Sum Nodes Binary Tree No Two Adjacent",
            "url": "https://www.geeksforgeeks.org/maximum-sum-nodes-binary-tree-no-two-adjacent/",
            "platform": "GeeksforGeeks",
            "chapterId": 5,
            "chapterTitle": "Binary Trees & BST",
            "topicId": "5.1",
            "topicTitle": "Tree DFS (Traversals, Properties & Path Accumulation)"
          },
          {
            "id": 574,
            "title": "Merge Two Binary Trees",
            "url": "https://leetcode.com/problems/merge-two-binary-trees",
            "platform": "LeetCode",
            "chapterId": 5,
            "chapterTitle": "Binary Trees & BST",
            "topicId": "5.1",
            "topicTitle": "Tree DFS (Traversals, Properties & Path Accumulation)"
          },
          {
            "id": 575,
            "title": "Min distance between two given nodes of a Binary Tree",
            "url": "https://www.geeksforgeeks.org/problems/min-distance-between-two-given-nodes-of-a-binary-tree/1",
            "platform": "GeeksforGeeks",
            "chapterId": 5,
            "chapterTitle": "Binary Trees & BST",
            "topicId": "5.1",
            "topicTitle": "Tree DFS (Traversals, Properties & Path Accumulation)"
          },
          {
            "id": 576,
            "title": "Minimum Cost Tree From Leaf Values",
            "url": "https://leetcode.com/problems/minimum-cost-tree-from-leaf-values",
            "platform": "LeetCode",
            "chapterId": 5,
            "chapterTitle": "Binary Trees & BST",
            "topicId": "5.1",
            "topicTitle": "Tree DFS (Traversals, Properties & Path Accumulation)"
          },
          {
            "id": 577,
            "title": "Minimum Path Sum",
            "url": "https://leetcode.com/problems/minimum-path-sum",
            "platform": "LeetCode",
            "chapterId": 5,
            "chapterTitle": "Binary Trees & BST",
            "topicId": "5.1",
            "topicTitle": "Tree DFS (Traversals, Properties & Path Accumulation)"
          },
          {
            "id": 578,
            "title": "Morris Preorder Traversal of a Binary Tree",
            "url": "https://leetcode.com/problems/morris-preorder-traversal-of-a-binary-tree/",
            "platform": "LeetCode",
            "chapterId": 5,
            "chapterTitle": "Binary Trees & BST",
            "topicId": "5.1",
            "topicTitle": "Tree DFS (Traversals, Properties & Path Accumulation)"
          },
          {
            "id": 579,
            "title": "Path Sum",
            "url": "https://leetcode.com/problems/path-sum",
            "platform": "LeetCode",
            "chapterId": 5,
            "chapterTitle": "Binary Trees & BST",
            "topicId": "5.1",
            "topicTitle": "Tree DFS (Traversals, Properties & Path Accumulation)"
          },
          {
            "id": 580,
            "title": "Path Sum II",
            "url": "https://leetcode.com/problems/path-sum-ii",
            "platform": "LeetCode",
            "chapterId": 5,
            "chapterTitle": "Binary Trees & BST",
            "topicId": "5.1",
            "topicTitle": "Tree DFS (Traversals, Properties & Path Accumulation)"
          },
          {
            "id": 581,
            "title": "Post-order Traversal of Binary Tree using 2 stack",
            "url": "https://leetcode.com/problems/post-order-traversal-of-binary-tree-using-2-stack/",
            "platform": "LeetCode",
            "chapterId": 5,
            "chapterTitle": "Binary Trees & BST",
            "topicId": "5.1",
            "topicTitle": "Tree DFS (Traversals, Properties & Path Accumulation)"
          },
          {
            "id": 582,
            "title": "Print K Sum Paths Binary Tree",
            "url": "https://www.geeksforgeeks.org/print-k-sum-paths-binary-tree/",
            "platform": "GeeksforGeeks",
            "chapterId": 5,
            "chapterTitle": "Binary Trees & BST",
            "topicId": "5.1",
            "topicTitle": "Tree DFS (Traversals, Properties & Path Accumulation)"
          },
          {
            "id": 583,
            "title": "Print root to leaf path in BT",
            "url": "https://leetcode.com/problems/print-root-to-leaf-path-in-bt/",
            "platform": "LeetCode",
            "chapterId": 5,
            "chapterTitle": "Binary Trees & BST",
            "topicId": "5.1",
            "topicTitle": "Tree DFS (Traversals, Properties & Path Accumulation)"
          },
          {
            "id": 584,
            "title": "Same Tree",
            "url": "https://leetcode.com/problems/same-tree",
            "platform": "LeetCode",
            "chapterId": 5,
            "chapterTitle": "Binary Trees & BST",
            "topicId": "5.1",
            "topicTitle": "Tree DFS (Traversals, Properties & Path Accumulation)"
          },
          {
            "id": 585,
            "title": "Serialize and De-serialize BT",
            "url": "https://leetcode.com/problems/serialize-and-de-serialize-bt/",
            "platform": "LeetCode",
            "chapterId": 5,
            "chapterTitle": "Binary Trees & BST",
            "topicId": "5.1",
            "topicTitle": "Tree DFS (Traversals, Properties & Path Accumulation)"
          },
          {
            "id": 586,
            "title": "Serialize and Deserialize Binary Tree",
            "url": "https://leetcode.com/problems/serialize-and-deserialize-binary-tree",
            "platform": "LeetCode",
            "chapterId": 5,
            "chapterTitle": "Binary Trees & BST",
            "topicId": "5.1",
            "topicTitle": "Tree DFS (Traversals, Properties & Path Accumulation)"
          },
          {
            "id": 587,
            "title": "Subtree of Another Tree",
            "url": "https://leetcode.com/problems/subtree-of-another-tree",
            "platform": "LeetCode",
            "chapterId": 5,
            "chapterTitle": "Binary Trees & BST",
            "topicId": "5.1",
            "topicTitle": "Tree DFS (Traversals, Properties & Path Accumulation)"
          },
          {
            "id": 588,
            "title": "Sum of Distances in Tree",
            "url": "https://leetcode.com/problems/sum-of-distances-in-tree",
            "platform": "LeetCode",
            "chapterId": 5,
            "chapterTitle": "Binary Trees & BST",
            "topicId": "5.1",
            "topicTitle": "Tree DFS (Traversals, Properties & Path Accumulation)"
          },
          {
            "id": 589,
            "title": "Sum of Left Leaves",
            "url": "https://leetcode.com/problems/sum-of-left-leaves",
            "platform": "LeetCode",
            "chapterId": 5,
            "chapterTitle": "Binary Trees & BST",
            "topicId": "5.1",
            "topicTitle": "Tree DFS (Traversals, Properties & Path Accumulation)"
          },
          {
            "id": 590,
            "title": "Sum Root to Leaf Numbers",
            "url": "https://leetcode.com/problems/sum-root-to-leaf-numbers/",
            "platform": "LeetCode",
            "chapterId": 5,
            "chapterTitle": "Binary Trees & BST",
            "topicId": "5.1",
            "topicTitle": "Tree DFS (Traversals, Properties & Path Accumulation)"
          },
          {
            "id": 591,
            "title": "Sum Tree",
            "url": "https://www.geeksforgeeks.org/problems/sum-tree/1",
            "platform": "GeeksforGeeks",
            "chapterId": 5,
            "chapterTitle": "Binary Trees & BST",
            "topicId": "5.1",
            "topicTitle": "Tree DFS (Traversals, Properties & Path Accumulation)"
          },
          {
            "id": 592,
            "title": "Symmetric Binary Tree",
            "url": "https://leetcode.com/problems/symmetric-binary-tree/",
            "platform": "LeetCode",
            "chapterId": 5,
            "chapterTitle": "Binary Trees & BST",
            "topicId": "5.1",
            "topicTitle": "Tree DFS (Traversals, Properties & Path Accumulation)"
          },
          {
            "id": 593,
            "title": "Symmetric Tree",
            "url": "https://leetcode.com/problems/symmetric-tree",
            "platform": "LeetCode",
            "chapterId": 5,
            "chapterTitle": "Binary Trees & BST",
            "topicId": "5.1",
            "topicTitle": "Tree DFS (Traversals, Properties & Path Accumulation)"
          },
          {
            "id": 594,
            "title": "Transform to Sum Tree",
            "url": "https://www.geeksforgeeks.org/problems/transform-to-sum-tree/1",
            "platform": "GeeksforGeeks",
            "chapterId": 5,
            "chapterTitle": "Binary Trees & BST",
            "topicId": "5.1",
            "topicTitle": "Tree DFS (Traversals, Properties & Path Accumulation)"
          }
        ]
      },
      {
        "id": "5.2",
        "title": "Tree BFS (Level-Order, Zigzag & Radial Propagation)",
        "expectedCount": 17,
        "problems": [
          {
            "id": 595,
            "title": "All Nodes Distance K in Binary Tree",
            "url": "https://leetcode.com/problems/all-nodes-distance-k-in-binary-tree",
            "platform": "LeetCode",
            "chapterId": 5,
            "chapterTitle": "Binary Trees & BST",
            "topicId": "5.2",
            "topicTitle": "Tree BFS (Level-Order, Zigzag & Radial Propagation)"
          },
          {
            "id": 596,
            "title": "Average of Levels in Binary Tree",
            "url": "https://leetcode.com/problems/average-of-levels-in-binary-tree/",
            "platform": "LeetCode",
            "chapterId": 5,
            "chapterTitle": "Binary Trees & BST",
            "topicId": "5.2",
            "topicTitle": "Tree BFS (Level-Order, Zigzag & Radial Propagation)"
          },
          {
            "id": 597,
            "title": "Binary Tree Right Side View",
            "url": "https://leetcode.com/problems/binary-tree-right-side-view",
            "platform": "LeetCode",
            "chapterId": 5,
            "chapterTitle": "Binary Trees & BST",
            "topicId": "5.2",
            "topicTitle": "Tree BFS (Level-Order, Zigzag & Radial Propagation)"
          },
          {
            "id": 598,
            "title": "Binary Tree Zigzag Level Order Traversal",
            "url": "https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal",
            "platform": "LeetCode",
            "chapterId": 5,
            "chapterTitle": "Binary Trees & BST",
            "topicId": "5.2",
            "topicTitle": "Tree BFS (Level-Order, Zigzag & Radial Propagation)"
          },
          {
            "id": 599,
            "title": "Bottom view of BT",
            "url": "https://leetcode.com/problems/bottom-view-of-bt/",
            "platform": "LeetCode",
            "chapterId": 5,
            "chapterTitle": "Binary Trees & BST",
            "topicId": "5.2",
            "topicTitle": "Tree BFS (Level-Order, Zigzag & Radial Propagation)"
          },
          {
            "id": 600,
            "title": "Boundary Traversal",
            "url": "https://leetcode.com/problems/boundary-traversal/",
            "platform": "LeetCode",
            "chapterId": 5,
            "chapterTitle": "Binary Trees & BST",
            "topicId": "5.2",
            "topicTitle": "Tree BFS (Level-Order, Zigzag & Radial Propagation)"
          },
          {
            "id": 601,
            "title": "Diagonal Tree Traversal",
            "url": "https://www.geeksforgeeks.org/problems/diagonal-traversal-of-binary-tree/1",
            "platform": "GeeksforGeeks",
            "chapterId": 5,
            "chapterTitle": "Binary Trees & BST",
            "topicId": "5.2",
            "topicTitle": "Tree BFS (Level-Order, Zigzag & Radial Propagation)"
          },
          {
            "id": 602,
            "title": "Left View of Binary Tree",
            "url": "https://www.geeksforgeeks.org/problems/left-view-of-binary-tree/1",
            "platform": "GeeksforGeeks",
            "chapterId": 5,
            "chapterTitle": "Binary Trees & BST",
            "topicId": "5.2",
            "topicTitle": "Tree BFS (Level-Order, Zigzag & Radial Propagation)"
          },
          {
            "id": 603,
            "title": "Level order traversal",
            "url": "https://www.geeksforgeeks.org/problems/level-order-traversal/1",
            "platform": "GeeksforGeeks",
            "chapterId": 5,
            "chapterTitle": "Binary Trees & BST",
            "topicId": "5.2",
            "topicTitle": "Tree BFS (Level-Order, Zigzag & Radial Propagation)"
          },
          {
            "id": 604,
            "title": "Minimum time taken to burn the BT from a given Node",
            "url": "https://leetcode.com/problems/minimum-time-taken-to-burn-the-bt-from-a-given-node/",
            "platform": "LeetCode",
            "chapterId": 5,
            "chapterTitle": "Binary Trees & BST",
            "topicId": "5.2",
            "topicTitle": "Tree BFS (Level-Order, Zigzag & Radial Propagation)"
          },
          {
            "id": 605,
            "title": "Populating Next Right Pointers in Each Node",
            "url": "https://leetcode.com/problems/populating-next-right-pointers-in-each-node",
            "platform": "LeetCode",
            "chapterId": 5,
            "chapterTitle": "Binary Trees & BST",
            "topicId": "5.2",
            "topicTitle": "Tree BFS (Level-Order, Zigzag & Radial Propagation)"
          },
          {
            "id": 606,
            "title": "Top View of Binary Tree",
            "url": "https://www.geeksforgeeks.org/problems/top-view-of-binary-tree/1",
            "platform": "GeeksforGeeks",
            "chapterId": 5,
            "chapterTitle": "Binary Trees & BST",
            "topicId": "5.2",
            "topicTitle": "Tree BFS (Level-Order, Zigzag & Radial Propagation)"
          },
          {
            "id": 607,
            "title": "Top View of BT",
            "url": "https://leetcode.com/problems/top-view-of-bt/",
            "platform": "LeetCode",
            "chapterId": 5,
            "chapterTitle": "Binary Trees & BST",
            "topicId": "5.2",
            "topicTitle": "Tree BFS (Level-Order, Zigzag & Radial Propagation)"
          },
          {
            "id": 608,
            "title": "Vertical Order Traversal",
            "url": "https://leetcode.com/problems/vertical-order-traversal/",
            "platform": "LeetCode",
            "chapterId": 5,
            "chapterTitle": "Binary Trees & BST",
            "topicId": "5.2",
            "topicTitle": "Tree BFS (Level-Order, Zigzag & Radial Propagation)"
          },
          {
            "id": 609,
            "title": "Vertical Order Traversal of a Binary Tree",
            "url": "https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree",
            "platform": "LeetCode",
            "chapterId": 5,
            "chapterTitle": "Binary Trees & BST",
            "topicId": "5.2",
            "topicTitle": "Tree BFS (Level-Order, Zigzag & Radial Propagation)"
          },
          {
            "id": 610,
            "title": "Zigzag Conversion",
            "url": "https://leetcode.com/problems/zigzag-conversion/",
            "platform": "LeetCode",
            "chapterId": 5,
            "chapterTitle": "Binary Trees & BST",
            "topicId": "5.2",
            "topicTitle": "Tree BFS (Level-Order, Zigzag & Radial Propagation)"
          },
          {
            "id": 611,
            "title": "ZigZag Tree Traversal",
            "url": "https://www.geeksforgeeks.org/problems/zigzag-tree-traversal/1",
            "platform": "GeeksforGeeks",
            "chapterId": 5,
            "chapterTitle": "Binary Trees & BST",
            "topicId": "5.2",
            "topicTitle": "Tree BFS (Level-Order, Zigzag & Radial Propagation)"
          }
        ]
      },
      {
        "id": "5.3",
        "title": "Binary Search Tree (BST) Properties & Operations",
        "expectedCount": 55,
        "problems": [
          {
            "id": 612,
            "title": "Binary Search Tree Iterator",
            "url": "https://leetcode.com/problems/binary-search-tree-iterator",
            "platform": "LeetCode",
            "chapterId": 5,
            "chapterTitle": "Binary Trees & BST",
            "topicId": "5.3",
            "topicTitle": "Binary Search Tree (BST) Properties & Operations"
          },
          {
            "id": 613,
            "title": "Binary Search Tree Set 1 Search And Insertion",
            "url": "https://www.geeksforgeeks.org/binary-search-tree-set-1-search-and-insertion/",
            "platform": "GeeksforGeeks",
            "chapterId": 5,
            "chapterTitle": "Binary Trees & BST",
            "topicId": "5.3",
            "topicTitle": "Binary Search Tree (BST) Properties & Operations"
          },
          {
            "id": 614,
            "title": "Binary Tree to BST",
            "url": "https://www.geeksforgeeks.org/problems/binary-tree-to-bst/1",
            "platform": "GeeksforGeeks",
            "chapterId": 5,
            "chapterTitle": "Binary Trees & BST",
            "topicId": "5.3",
            "topicTitle": "Binary Search Tree (BST) Properties & Operations"
          },
          {
            "id": 615,
            "title": "BST with Dead End",
            "url": "https://www.geeksforgeeks.org/problems/check-whether-bst-contains-dead-end/1",
            "platform": "GeeksforGeeks",
            "chapterId": 5,
            "chapterTitle": "Binary Trees & BST",
            "topicId": "5.3",
            "topicTitle": "Binary Search Tree (BST) Properties & Operations"
          },
          {
            "id": 616,
            "title": "Check for BST",
            "url": "https://www.geeksforgeeks.org/problems/check-for-bst/1",
            "platform": "GeeksforGeeks",
            "chapterId": 5,
            "chapterTitle": "Binary Trees & BST",
            "topicId": "5.3",
            "topicTitle": "Binary Search Tree (BST) Properties & Operations"
          },
          {
            "id": 617,
            "title": "Check if a tree is a BST or not",
            "url": "https://leetcode.com/problems/check-if-a-tree-is-a-bst-or-not/",
            "platform": "LeetCode",
            "chapterId": 5,
            "chapterTitle": "Binary Trees & BST",
            "topicId": "5.3",
            "topicTitle": "Binary Search Tree (BST) Properties & Operations"
          },
          {
            "id": 618,
            "title": "Check whether BST contains Dead End",
            "url": "https://www.geeksforgeeks.org/problems/check-whether-bst-contains-dead-end/1",
            "platform": "GeeksforGeeks",
            "chapterId": 5,
            "chapterTitle": "Binary Trees & BST",
            "topicId": "5.3",
            "topicTitle": "Binary Search Tree (BST) Properties & Operations"
          },
          {
            "id": 619,
            "title": "Convert Bst Min Heap",
            "url": "https://www.geeksforgeeks.org/convert-bst-min-heap/",
            "platform": "GeeksforGeeks",
            "chapterId": 5,
            "chapterTitle": "Binary Trees & BST",
            "topicId": "5.3",
            "topicTitle": "Binary Search Tree (BST) Properties & Operations"
          },
          {
            "id": 620,
            "title": "Convert Normal Bst Balanced Bst",
            "url": "https://www.geeksforgeeks.org/convert-normal-bst-balanced-bst/",
            "platform": "GeeksforGeeks",
            "chapterId": 5,
            "chapterTitle": "Binary Trees & BST",
            "topicId": "5.3",
            "topicTitle": "Binary Search Tree (BST) Properties & Operations"
          },
          {
            "id": 621,
            "title": "Convert Sorted Array to Binary Search Tree",
            "url": "https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree",
            "platform": "LeetCode",
            "chapterId": 5,
            "chapterTitle": "Binary Trees & BST",
            "topicId": "5.3",
            "topicTitle": "Binary Search Tree (BST) Properties & Operations"
          },
          {
            "id": 622,
            "title": "Correct BST with two nodes swapped",
            "url": "https://leetcode.com/problems/correct-bst-with-two-nodes-swapped/",
            "platform": "LeetCode",
            "chapterId": 5,
            "chapterTitle": "Binary Trees & BST",
            "topicId": "5.3",
            "topicTitle": "Binary Search Tree (BST) Properties & Operations"
          },
          {
            "id": 623,
            "title": "Count BST Nodes That Lie In a Given Range",
            "url": "https://www.geeksforgeeks.org/problems/count-bst-nodes-that-lie-in-a-given-range/1",
            "platform": "GeeksforGeeks",
            "chapterId": 5,
            "chapterTitle": "Binary Trees & BST",
            "topicId": "5.3",
            "topicTitle": "Binary Search Tree (BST) Properties & Operations"
          },
          {
            "id": 624,
            "title": "Count Number of Substrings",
            "url": "https://leetcode.com/problems/count-number-of-substrings/",
            "platform": "LeetCode",
            "chapterId": 5,
            "chapterTitle": "Binary Trees & BST",
            "topicId": "5.3",
            "topicTitle": "Binary Search Tree (BST) Properties & Operations"
          },
          {
            "id": 625,
            "title": "Delete Node in a BST",
            "url": "https://leetcode.com/problems/delete-node-in-a-bst",
            "platform": "LeetCode",
            "chapterId": 5,
            "chapterTitle": "Binary Trees & BST",
            "topicId": "5.3",
            "topicTitle": "Binary Search Tree (BST) Properties & Operations"
          },
          {
            "id": 626,
            "title": "Find Median Bst Time O1 Space",
            "url": "https://www.geeksforgeeks.org/find-median-bst-time-o1-space/",
            "platform": "GeeksforGeeks",
            "chapterId": 5,
            "chapterTitle": "Binary Trees & BST",
            "topicId": "5.3",
            "topicTitle": "Binary Search Tree (BST) Properties & Operations"
          },
          {
            "id": 627,
            "title": "Find Min/Max in BST",
            "url": "https://leetcode.com/problems/find-min/",
            "platform": "LeetCode",
            "chapterId": 5,
            "chapterTitle": "Binary Trees & BST",
            "topicId": "5.3",
            "topicTitle": "Binary Search Tree (BST) Properties & Operations"
          },
          {
            "id": 628,
            "title": "Find Sum Pairs Across Two BSTs",
            "url": "https://www.geeksforgeeks.org/problems/brothers-from-different-root/1",
            "platform": "GeeksforGeeks",
            "chapterId": 5,
            "chapterTitle": "Binary Trees & BST",
            "topicId": "5.3",
            "topicTitle": "Binary Search Tree (BST) Properties & Operations"
          },
          {
            "id": 629,
            "title": "Flatten Bst To Sorted List Increasing Order",
            "url": "https://www.geeksforgeeks.org/flatten-bst-to-sorted-list-increasing-order/",
            "platform": "GeeksforGeeks",
            "chapterId": 5,
            "chapterTitle": "Binary Trees & BST",
            "topicId": "5.3",
            "topicTitle": "Binary Search Tree (BST) Properties & Operations"
          },
          {
            "id": 630,
            "title": "Floor and Ceil in a BST",
            "url": "https://leetcode.com/problems/floor-and-ceil-in-a-bst/",
            "platform": "LeetCode",
            "chapterId": 5,
            "chapterTitle": "Binary Trees & BST",
            "topicId": "5.3",
            "topicTitle": "Binary Search Tree (BST) Properties & Operations"
          },
          {
            "id": 631,
            "title": "Floor in a Binary Search Tree",
            "url": "https://leetcode.com/problems/floor-in-a-binary-search-tree/",
            "platform": "LeetCode",
            "chapterId": 5,
            "chapterTitle": "Binary Trees & BST",
            "topicId": "5.3",
            "topicTitle": "Binary Search Tree (BST) Properties & Operations"
          },
          {
            "id": 632,
            "title": "Inorder Successor in BST",
            "url": "https://leetcode.com/problems/inorder-successor-in-bst",
            "platform": "LeetCode",
            "chapterId": 5,
            "chapterTitle": "Binary Trees & BST",
            "topicId": "5.3",
            "topicTitle": "Binary Search Tree (BST) Properties & Operations"
          },
          {
            "id": 633,
            "title": "Inorder Successor/Predecessor in BST",
            "url": "https://leetcode.com/problems/inorder-successor/",
            "platform": "LeetCode",
            "chapterId": 5,
            "chapterTitle": "Binary Trees & BST",
            "topicId": "5.3",
            "topicTitle": "Binary Search Tree (BST) Properties & Operations"
          },
          {
            "id": 634,
            "title": "Insert a given node in BST",
            "url": "https://leetcode.com/problems/insert-a-given-node-in-bst/",
            "platform": "LeetCode",
            "chapterId": 5,
            "chapterTitle": "Binary Trees & BST",
            "topicId": "5.3",
            "topicTitle": "Binary Search Tree (BST) Properties & Operations"
          },
          {
            "id": 635,
            "title": "Insert into a Binary Search Tree",
            "url": "https://leetcode.com/problems/insert-into-a-binary-search-tree/",
            "platform": "LeetCode",
            "chapterId": 5,
            "chapterTitle": "Binary Trees & BST",
            "topicId": "5.3",
            "topicTitle": "Binary Search Tree (BST) Properties & Operations"
          },
          {
            "id": 636,
            "title": "Introduction to BST",
            "url": "https://leetcode.com/problems/introduction-to-bst/",
            "platform": "LeetCode",
            "chapterId": 5,
            "chapterTitle": "Binary Trees & BST",
            "topicId": "5.3",
            "topicTitle": "Binary Search Tree (BST) Properties & Operations"
          },
          {
            "id": 637,
            "title": "k-th Smallest in BST",
            "url": "https://www.geeksforgeeks.org/problems/find-k-th-smallest-element-in-bst/1",
            "platform": "GeeksforGeeks",
            "chapterId": 5,
            "chapterTitle": "Binary Trees & BST",
            "topicId": "5.3",
            "topicTitle": "Binary Search Tree (BST) Properties & Operations"
          },
          {
            "id": 638,
            "title": "Kth Smallest and Largest element in BST",
            "url": "https://leetcode.com/problems/kth-smallest-and-largest-element-in-bst/",
            "platform": "LeetCode",
            "chapterId": 5,
            "chapterTitle": "Binary Trees & BST",
            "topicId": "5.3",
            "topicTitle": "Binary Search Tree (BST) Properties & Operations"
          },
          {
            "id": 639,
            "title": "Kth Smallest Element In a Bst",
            "url": "https://leetcode.com/problems/kth-smallest-element-in-a-bst",
            "platform": "LeetCode",
            "chapterId": 5,
            "chapterTitle": "Binary Trees & BST",
            "topicId": "5.3",
            "topicTitle": "Binary Search Tree (BST) Properties & Operations"
          },
          {
            "id": 640,
            "title": "Largest BST",
            "url": "https://www.geeksforgeeks.org/problems/largest-bst/1",
            "platform": "GeeksforGeeks",
            "chapterId": 5,
            "chapterTitle": "Binary Trees & BST",
            "topicId": "5.3",
            "topicTitle": "Binary Search Tree (BST) Properties & Operations"
          },
          {
            "id": 641,
            "title": "Longest Common Substring",
            "url": "https://www.geeksforgeeks.org/problems/longest-common-substring1452/1",
            "platform": "GeeksforGeeks",
            "chapterId": 5,
            "chapterTitle": "Binary Trees & BST",
            "topicId": "5.3",
            "topicTitle": "Binary Search Tree (BST) Properties & Operations"
          },
          {
            "id": 642,
            "title": "Longest Palindromic Substring",
            "url": "https://leetcode.com/problems/longest-palindromic-substring",
            "platform": "LeetCode",
            "chapterId": 5,
            "chapterTitle": "Binary Trees & BST",
            "topicId": "5.3",
            "topicTitle": "Binary Search Tree (BST) Properties & Operations"
          },
          {
            "id": 643,
            "title": "Longest Substring With At Most K Distinct Characters",
            "url": "https://leetcode.com/problems/longest-substring-with-at-most-k-distinct-characters/",
            "platform": "LeetCode",
            "chapterId": 5,
            "chapterTitle": "Binary Trees & BST",
            "topicId": "5.3",
            "topicTitle": "Binary Search Tree (BST) Properties & Operations"
          },
          {
            "id": 644,
            "title": "Longest Substring Without Repeating Characters",
            "url": "https://leetcode.com/problems/longest-substring-without-repeating-characters",
            "platform": "LeetCode",
            "chapterId": 5,
            "chapterTitle": "Binary Trees & BST",
            "topicId": "5.3",
            "topicTitle": "Binary Search Tree (BST) Properties & Operations"
          },
          {
            "id": 645,
            "title": "Lowest Common Ancestor in a BST",
            "url": "https://www.geeksforgeeks.org/problems/lowest-common-ancestor-in-a-bst/1",
            "platform": "GeeksforGeeks",
            "chapterId": 5,
            "chapterTitle": "Binary Trees & BST",
            "topicId": "5.3",
            "topicTitle": "Binary Search Tree (BST) Properties & Operations"
          },
          {
            "id": 646,
            "title": "Median of BST",
            "url": "https://www.geeksforgeeks.org/problems/median-of-bst/1",
            "platform": "GeeksforGeeks",
            "chapterId": 5,
            "chapterTitle": "Binary Trees & BST",
            "topicId": "5.3",
            "topicTitle": "Binary Search Tree (BST) Properties & Operations"
          },
          {
            "id": 647,
            "title": "Merge 2 BST's",
            "url": "https://leetcode.com/problems/merge-2-bst-s/",
            "platform": "LeetCode",
            "chapterId": 5,
            "chapterTitle": "Binary Trees & BST",
            "topicId": "5.3",
            "topicTitle": "Binary Search Tree (BST) Properties & Operations"
          },
          {
            "id": 648,
            "title": "Merge Two Balanced Binary Search Trees",
            "url": "https://www.geeksforgeeks.org/merge-two-balanced-binary-search-trees/",
            "platform": "GeeksforGeeks",
            "chapterId": 5,
            "chapterTitle": "Binary Trees & BST",
            "topicId": "5.3",
            "topicTitle": "Binary Search Tree (BST) Properties & Operations"
          },
          {
            "id": 649,
            "title": "Minimum Absolute Difference in BST",
            "url": "https://leetcode.com/problems/minimum-absolute-difference-in-bst",
            "platform": "LeetCode",
            "chapterId": 5,
            "chapterTitle": "Binary Trees & BST",
            "topicId": "5.3",
            "topicTitle": "Binary Search Tree (BST) Properties & Operations"
          },
          {
            "id": 650,
            "title": "Minimum element in BST",
            "url": "https://www.geeksforgeeks.org/problems/minimum-element-in-bst/1",
            "platform": "GeeksforGeeks",
            "chapterId": 5,
            "chapterTitle": "Binary Trees & BST",
            "topicId": "5.3",
            "topicTitle": "Binary Search Tree (BST) Properties & Operations"
          },
          {
            "id": 651,
            "title": "Minimum Swap Required Convert Binary Tree Binary Search Tree",
            "url": "https://www.geeksforgeeks.org/minimum-swap-required-convert-binary-tree-binary-search-tree/#:~:text=Given%20the%20array%20representation%20of,it%20into%20Binary%20Search%20Tree.&text=Swap%201%3A%20Swap%20node%208,node%209%20with%20node%2010.",
            "platform": "GeeksforGeeks",
            "chapterId": 5,
            "chapterTitle": "Binary Trees & BST",
            "topicId": "5.3",
            "topicTitle": "Binary Search Tree (BST) Properties & Operations"
          },
          {
            "id": 652,
            "title": "Minimum Window Substring",
            "url": "https://leetcode.com/problems/minimum-window-substring",
            "platform": "LeetCode",
            "chapterId": 5,
            "chapterTitle": "Binary Trees & BST",
            "topicId": "5.3",
            "topicTitle": "Binary Search Tree (BST) Properties & Operations"
          },
          {
            "id": 653,
            "title": "Number of distinct substrings in a string",
            "url": "https://leetcode.com/problems/number-of-distinct-substrings-in-a-string/",
            "platform": "LeetCode",
            "chapterId": 5,
            "chapterTitle": "Binary Trees & BST",
            "topicId": "5.3",
            "topicTitle": "Binary Search Tree (BST) Properties & Operations"
          },
          {
            "id": 654,
            "title": "Number of Substrings Containing All Three Characters",
            "url": "https://leetcode.com/problems/number-of-substrings-containing-all-three-characters/",
            "platform": "LeetCode",
            "chapterId": 5,
            "chapterTitle": "Binary Trees & BST",
            "topicId": "5.3",
            "topicTitle": "Binary Search Tree (BST) Properties & Operations"
          },
          {
            "id": 655,
            "title": "Optimal Binary Search Tree",
            "url": "https://www.geeksforgeeks.org/optimal-binary-search-tree-dp-24/",
            "platform": "GeeksforGeeks",
            "chapterId": 5,
            "chapterTitle": "Binary Trees & BST",
            "topicId": "5.3",
            "topicTitle": "Binary Search Tree (BST) Properties & Operations"
          },
          {
            "id": 656,
            "title": "Palindromic Substrings",
            "url": "https://leetcode.com/problems/palindromic-substrings/",
            "platform": "LeetCode",
            "chapterId": 5,
            "chapterTitle": "Binary Trees & BST",
            "topicId": "5.3",
            "topicTitle": "Binary Search Tree (BST) Properties & Operations"
          },
          {
            "id": 657,
            "title": "Preorder to BST",
            "url": "https://www.geeksforgeeks.org/problems/preorder-to-postorder4423/1",
            "platform": "GeeksforGeeks",
            "chapterId": 5,
            "chapterTitle": "Binary Trees & BST",
            "topicId": "5.3",
            "topicTitle": "Binary Search Tree (BST) Properties & Operations"
          },
          {
            "id": 658,
            "title": "Range Sum of BST",
            "url": "https://leetcode.com/problems/range-sum-of-bst",
            "platform": "LeetCode",
            "chapterId": 5,
            "chapterTitle": "Binary Trees & BST",
            "topicId": "5.3",
            "topicTitle": "Binary Search Tree (BST) Properties & Operations"
          },
          {
            "id": 659,
            "title": "Recover Binary Search Tree",
            "url": "https://leetcode.com/problems/recover-binary-search-tree",
            "platform": "LeetCode",
            "chapterId": 5,
            "chapterTitle": "Binary Trees & BST",
            "topicId": "5.3",
            "topicTitle": "Binary Search Tree (BST) Properties & Operations"
          },
          {
            "id": 660,
            "title": "Split the binary string into substrings with equal number of 0s and 1s",
            "url": "https://www.geeksforgeeks.org/problems/split-the-binary-string-into-substrings-with-equal-number-of-0s-and-1s/1",
            "platform": "GeeksforGeeks",
            "chapterId": 5,
            "chapterTitle": "Binary Trees & BST",
            "topicId": "5.3",
            "topicTitle": "Binary Search Tree (BST) Properties & Operations"
          },
          {
            "id": 661,
            "title": "Substring with Concatenation of All Words",
            "url": "https://leetcode.com/problems/substring-with-concatenation-of-all-words/",
            "platform": "LeetCode",
            "chapterId": 5,
            "chapterTitle": "Binary Trees & BST",
            "topicId": "5.3",
            "topicTitle": "Binary Search Tree (BST) Properties & Operations"
          },
          {
            "id": 662,
            "title": "Sum of Beauty of All Substrings",
            "url": "https://leetcode.com/problems/sum-of-beauty-of-all-substrings/",
            "platform": "LeetCode",
            "chapterId": 5,
            "chapterTitle": "Binary Trees & BST",
            "topicId": "5.3",
            "topicTitle": "Binary Search Tree (BST) Properties & Operations"
          },
          {
            "id": 663,
            "title": "Two Sum In BST | Check if there exists a pair with Sum K",
            "url": "https://leetcode.com/problems/two-sum-in-bst-check-if-there-exists-a-pair-with-sum-k/",
            "platform": "LeetCode",
            "chapterId": 5,
            "chapterTitle": "Binary Trees & BST",
            "topicId": "5.3",
            "topicTitle": "Binary Search Tree (BST) Properties & Operations"
          },
          {
            "id": 664,
            "title": "Unique Binary Search Trees",
            "url": "https://leetcode.com/problems/unique-binary-search-trees",
            "platform": "LeetCode",
            "chapterId": 5,
            "chapterTitle": "Binary Trees & BST",
            "topicId": "5.3",
            "topicTitle": "Binary Search Tree (BST) Properties & Operations"
          },
          {
            "id": 665,
            "title": "Valid Substring",
            "url": "https://www.geeksforgeeks.org/problems/valid-substring0624/1",
            "platform": "GeeksforGeeks",
            "chapterId": 5,
            "chapterTitle": "Binary Trees & BST",
            "topicId": "5.3",
            "topicTitle": "Binary Search Tree (BST) Properties & Operations"
          },
          {
            "id": 666,
            "title": "Validate Binary Search Tree",
            "url": "https://leetcode.com/problems/validate-binary-search-tree",
            "platform": "LeetCode",
            "chapterId": 5,
            "chapterTitle": "Binary Trees & BST",
            "topicId": "5.3",
            "topicTitle": "Binary Search Tree (BST) Properties & Operations"
          }
        ]
      }
    ]
  },
  {
    "id": 6,
    "title": "Heaps & Priority Queues",
    "expectedCount": 37,
    "icon": "⛰️",
    "topics": [
      {
        "id": "6.1",
        "title": "Heaps, Priority Queues & Top-K Patterns",
        "expectedCount": 37,
        "problems": [
          {
            "id": 667,
            "title": "Building Heap From Array",
            "url": "https://www.geeksforgeeks.org/building-heap-from-array/",
            "platform": "GeeksforGeeks",
            "chapterId": 6,
            "chapterTitle": "Heaps & Priority Queues",
            "topicId": "6.1",
            "topicTitle": "Heaps, Priority Queues & Top-K Patterns"
          },
          {
            "id": 668,
            "title": "Check if an array represents a min heap",
            "url": "https://leetcode.com/problems/check-if-an-array-represents-a-min-heap/",
            "platform": "LeetCode",
            "chapterId": 6,
            "chapterTitle": "Heaps & Priority Queues",
            "topicId": "6.1",
            "topicTitle": "Heaps, Priority Queues & Top-K Patterns"
          },
          {
            "id": 669,
            "title": "Convert Min Heap To Max Heap",
            "url": "https://www.geeksforgeeks.org/convert-min-heap-to-max-heap/",
            "platform": "GeeksforGeeks",
            "chapterId": 6,
            "chapterTitle": "Heaps & Priority Queues",
            "topicId": "6.1",
            "topicTitle": "Heaps, Priority Queues & Top-K Patterns"
          },
          {
            "id": 670,
            "title": "Design Twitter",
            "url": "https://leetcode.com/problems/design-twitter/",
            "platform": "LeetCode",
            "chapterId": 6,
            "chapterTitle": "Heaps & Priority Queues",
            "topicId": "6.1",
            "topicTitle": "Heaps, Priority Queues & Top-K Patterns"
          },
          {
            "id": 671,
            "title": "Find K Closest Elements",
            "url": "https://leetcode.com/problems/find-k-closest-elements",
            "platform": "LeetCode",
            "chapterId": 6,
            "chapterTitle": "Heaps & Priority Queues",
            "topicId": "6.1",
            "topicTitle": "Heaps, Priority Queues & Top-K Patterns"
          },
          {
            "id": 672,
            "title": "Find Median from Data Stream",
            "url": "https://leetcode.com/problems/find-median-from-data-stream",
            "platform": "LeetCode",
            "chapterId": 6,
            "chapterTitle": "Heaps & Priority Queues",
            "topicId": "6.1",
            "topicTitle": "Heaps, Priority Queues & Top-K Patterns"
          },
          {
            "id": 673,
            "title": "Find median in a stream",
            "url": "https://www.geeksforgeeks.org/problems/find-median-in-a-stream-1587115620/1",
            "platform": "GeeksforGeeks",
            "chapterId": 6,
            "chapterTitle": "Heaps & Priority Queues",
            "topicId": "6.1",
            "topicTitle": "Heaps, Priority Queues & Top-K Patterns"
          },
          {
            "id": 674,
            "title": "Furthest Building You Can Reach",
            "url": "https://leetcode.com/problems/furthest-building-you-can-reach",
            "platform": "LeetCode",
            "chapterId": 6,
            "chapterTitle": "Heaps & Priority Queues",
            "topicId": "6.1",
            "topicTitle": "Heaps, Priority Queues & Top-K Patterns"
          },
          {
            "id": 675,
            "title": "Heap Sort",
            "url": "https://www.geeksforgeeks.org/problems/heap-sort/1",
            "platform": "GeeksforGeeks",
            "chapterId": 6,
            "chapterTitle": "Heaps & Priority Queues",
            "topicId": "6.1",
            "topicTitle": "Heaps, Priority Queues & Top-K Patterns"
          },
          {
            "id": 676,
            "title": "Heaps (Theory Video)",
            "url": "https://leetcode.com/problems/heaps/",
            "platform": "LeetCode",
            "chapterId": 6,
            "chapterTitle": "Heaps & Priority Queues",
            "topicId": "6.1",
            "topicTitle": "Heaps, Priority Queues & Top-K Patterns"
          },
          {
            "id": 677,
            "title": "Implement Min Heap",
            "url": "https://leetcode.com/problems/implement-min-heap/",
            "platform": "LeetCode",
            "chapterId": 6,
            "chapterTitle": "Heaps & Priority Queues",
            "topicId": "6.1",
            "topicTitle": "Heaps, Priority Queues & Top-K Patterns"
          },
          {
            "id": 678,
            "title": "IPO",
            "url": "https://leetcode.com/problems/ipo/",
            "platform": "LeetCode",
            "chapterId": 6,
            "chapterTitle": "Heaps & Priority Queues",
            "topicId": "6.1",
            "topicTitle": "Heaps, Priority Queues & Top-K Patterns"
          },
          {
            "id": 679,
            "title": "K Closest Points to Origin",
            "url": "https://leetcode.com/problems/k-closest-points-to-origin",
            "platform": "LeetCode",
            "chapterId": 6,
            "chapterTitle": "Heaps & Priority Queues",
            "topicId": "6.1",
            "topicTitle": "Heaps, Priority Queues & Top-K Patterns"
          },
          {
            "id": 680,
            "title": "Kth largest element in a stream of running integers",
            "url": "https://leetcode.com/problems/kth-largest-element-in-a-stream-of-running-integers/",
            "platform": "LeetCode",
            "chapterId": 6,
            "chapterTitle": "Heaps & Priority Queues",
            "topicId": "6.1",
            "topicTitle": "Heaps, Priority Queues & Top-K Patterns"
          },
          {
            "id": 681,
            "title": "Kth Largest Element in an Array",
            "url": "https://leetcode.com/problems/kth-largest-element-in-an-array",
            "platform": "LeetCode",
            "chapterId": 6,
            "chapterTitle": "Heaps & Priority Queues",
            "topicId": "6.1",
            "topicTitle": "Heaps, Priority Queues & Top-K Patterns"
          },
          {
            "id": 682,
            "title": "Kth Smallest",
            "url": "https://www.geeksforgeeks.org/problems/kth-smallest-element5635/1",
            "platform": "GeeksforGeeks",
            "chapterId": 6,
            "chapterTitle": "Heaps & Priority Queues",
            "topicId": "6.1",
            "topicTitle": "Heaps, Priority Queues & Top-K Patterns"
          },
          {
            "id": 683,
            "title": "Kth Smallest Element in a Sorted Matrix",
            "url": "https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix",
            "platform": "LeetCode",
            "chapterId": 6,
            "chapterTitle": "Heaps & Priority Queues",
            "topicId": "6.1",
            "topicTitle": "Heaps, Priority Queues & Top-K Patterns"
          },
          {
            "id": 684,
            "title": "Kth smallest element in an array [use priority queue]",
            "url": "https://leetcode.com/problems/kth-smallest-element-in-an-array-use-priority-queue/",
            "platform": "LeetCode",
            "chapterId": 6,
            "chapterTitle": "Heaps & Priority Queues",
            "topicId": "6.1",
            "topicTitle": "Heaps, Priority Queues & Top-K Patterns"
          },
          {
            "id": 685,
            "title": "kth smallest number again 2",
            "url": "https://www.hackerearth.com/practice/algorithms/searching/binary-search/practice-problems/algorithm/kth-smallest-number-again-2/",
            "platform": "HackerEarth",
            "chapterId": 6,
            "chapterTitle": "Heaps & Priority Queues",
            "topicId": "6.1",
            "topicTitle": "Heaps, Priority Queues & Top-K Patterns"
          },
          {
            "id": 686,
            "title": "Kth Smallestlargest Element Unsorted Array",
            "url": "https://www.geeksforgeeks.org/kth-smallestlargest-element-unsorted-array/",
            "platform": "GeeksforGeeks",
            "chapterId": 6,
            "chapterTitle": "Heaps & Priority Queues",
            "topicId": "6.1",
            "topicTitle": "Heaps, Priority Queues & Top-K Patterns"
          },
          {
            "id": 687,
            "title": "Last Stone Weight",
            "url": "https://leetcode.com/problems/last-stone-weight/",
            "platform": "LeetCode",
            "chapterId": 6,
            "chapterTitle": "Heaps & Priority Queues",
            "topicId": "6.1",
            "topicTitle": "Heaps, Priority Queues & Top-K Patterns"
          },
          {
            "id": 688,
            "title": "Matrix Median",
            "url": "https://leetcode.com/problems/matrix-median/",
            "platform": "LeetCode",
            "chapterId": 6,
            "chapterTitle": "Heaps & Priority Queues",
            "topicId": "6.1",
            "topicTitle": "Heaps, Priority Queues & Top-K Patterns"
          },
          {
            "id": 689,
            "title": "Median in a row-wise sorted Matrix",
            "url": "https://www.geeksforgeeks.org/problems/median-in-a-row-wise-sorted-matrix1527/1",
            "platform": "GeeksforGeeks",
            "chapterId": 6,
            "chapterTitle": "Heaps & Priority Queues",
            "topicId": "6.1",
            "topicTitle": "Heaps, Priority Queues & Top-K Patterns"
          },
          {
            "id": 690,
            "title": "Median of 2 sorted arrays",
            "url": "https://leetcode.com/problems/median-of-2-sorted-arrays/",
            "platform": "LeetCode",
            "chapterId": 6,
            "chapterTitle": "Heaps & Priority Queues",
            "topicId": "6.1",
            "topicTitle": "Heaps, Priority Queues & Top-K Patterns"
          },
          {
            "id": 691,
            "title": "Median of an Array",
            "url": "https://www.geeksforgeeks.org/problems/find-the-median0527/1",
            "platform": "GeeksforGeeks",
            "chapterId": 6,
            "chapterTitle": "Heaps & Priority Queues",
            "topicId": "6.1",
            "topicTitle": "Heaps, Priority Queues & Top-K Patterns"
          },
          {
            "id": 692,
            "title": "Median Of Two Sorted Arrays Of Different Sizes",
            "url": "https://www.geeksforgeeks.org/median-of-two-sorted-arrays-of-different-sizes/",
            "platform": "GeeksforGeeks",
            "chapterId": 6,
            "chapterTitle": "Heaps & Priority Queues",
            "topicId": "6.1",
            "topicTitle": "Heaps, Priority Queues & Top-K Patterns"
          },
          {
            "id": 693,
            "title": "Merge k Sorted Lists",
            "url": "https://leetcode.com/problems/merge-k-sorted-lists",
            "platform": "LeetCode",
            "chapterId": 6,
            "chapterTitle": "Heaps & Priority Queues",
            "topicId": "6.1",
            "topicTitle": "Heaps, Priority Queues & Top-K Patterns"
          },
          {
            "id": 694,
            "title": "Merge two binary Max heaps",
            "url": "https://www.geeksforgeeks.org/problems/merge-two-binary-max-heap0144/1",
            "platform": "GeeksforGeeks",
            "chapterId": 6,
            "chapterTitle": "Heaps & Priority Queues",
            "topicId": "6.1",
            "topicTitle": "Heaps, Priority Queues & Top-K Patterns"
          },
          {
            "id": 695,
            "title": "Minimum Cost of ropes",
            "url": "https://www.geeksforgeeks.org/problems/minimum-cost-of-ropes-1587115620/1",
            "platform": "GeeksforGeeks",
            "chapterId": 6,
            "chapterTitle": "Heaps & Priority Queues",
            "topicId": "6.1",
            "topicTitle": "Heaps, Priority Queues & Top-K Patterns"
          },
          {
            "id": 696,
            "title": "Minimum Cost to Hire K Workers",
            "url": "https://leetcode.com/problems/minimum-cost-to-hire-k-workers",
            "platform": "LeetCode",
            "chapterId": 6,
            "chapterTitle": "Heaps & Priority Queues",
            "topicId": "6.1",
            "topicTitle": "Heaps, Priority Queues & Top-K Patterns"
          },
          {
            "id": 697,
            "title": "Program For Shortest Job First Or Sjf Cpu Scheduling Set 1 Non Preemptive",
            "url": "https://www.geeksforgeeks.org/program-for-shortest-job-first-or-sjf-cpu-scheduling-set-1-non-preemptive/",
            "platform": "GeeksforGeeks",
            "chapterId": 6,
            "chapterTitle": "Heaps & Priority Queues",
            "topicId": "6.1",
            "topicTitle": "Heaps, Priority Queues & Top-K Patterns"
          },
          {
            "id": 698,
            "title": "Reorganize String",
            "url": "https://leetcode.com/problems/reorganize-string",
            "platform": "LeetCode",
            "chapterId": 6,
            "chapterTitle": "Heaps & Priority Queues",
            "topicId": "6.1",
            "topicTitle": "Heaps, Priority Queues & Top-K Patterns"
          },
          {
            "id": 699,
            "title": "Single Threaded CPU",
            "url": "https://leetcode.com/problems/single-threaded-cpu/",
            "platform": "LeetCode",
            "chapterId": 6,
            "chapterTitle": "Heaps & Priority Queues",
            "topicId": "6.1",
            "topicTitle": "Heaps, Priority Queues & Top-K Patterns"
          },
          {
            "id": 700,
            "title": "Smallest Range Covering Elements from K Lists",
            "url": "https://leetcode.com/problems/smallest-range-covering-elements-from-k-lists",
            "platform": "LeetCode",
            "chapterId": 6,
            "chapterTitle": "Heaps & Priority Queues",
            "topicId": "6.1",
            "topicTitle": "Heaps, Priority Queues & Top-K Patterns"
          },
          {
            "id": 701,
            "title": "Task Scheduler",
            "url": "https://leetcode.com/problems/task-scheduler",
            "platform": "LeetCode",
            "chapterId": 6,
            "chapterTitle": "Heaps & Priority Queues",
            "topicId": "6.1",
            "topicTitle": "Heaps, Priority Queues & Top-K Patterns"
          },
          {
            "id": 702,
            "title": "Top K Frequent Elements",
            "url": "https://leetcode.com/problems/top-k-frequent-elements",
            "platform": "LeetCode",
            "chapterId": 6,
            "chapterTitle": "Heaps & Priority Queues",
            "topicId": "6.1",
            "topicTitle": "Heaps, Priority Queues & Top-K Patterns"
          },
          {
            "id": 703,
            "title": "Top K Frequent Words",
            "url": "https://leetcode.com/problems/top-k-frequent-words",
            "platform": "LeetCode",
            "chapterId": 6,
            "chapterTitle": "Heaps & Priority Queues",
            "topicId": "6.1",
            "topicTitle": "Heaps, Priority Queues & Top-K Patterns"
          }
        ]
      }
    ]
  },
  {
    "id": 7,
    "title": "Graphs",
    "expectedCount": 95,
    "icon": "🕸️",
    "topics": [
      {
        "id": "7.1",
        "title": "Graph Traversal, Connected Components & Cycle Detection",
        "expectedCount": 37,
        "problems": [
          {
            "id": 704,
            "title": "Articulation point in graph",
            "url": "https://leetcode.com/problems/articulation-point-in-graph/",
            "platform": "LeetCode",
            "chapterId": 7,
            "chapterTitle": "Graphs",
            "topicId": "7.1",
            "topicTitle": "Graph Traversal, Connected Components & Cycle Detection"
          },
          {
            "id": 705,
            "title": "BFS of graph",
            "url": "https://www.geeksforgeeks.org/problems/bfs-traversal-of-graph/1",
            "platform": "GeeksforGeeks",
            "chapterId": 7,
            "chapterTitle": "Graphs",
            "topicId": "7.1",
            "topicTitle": "Graph Traversal, Connected Components & Cycle Detection"
          },
          {
            "id": 706,
            "title": "Bipartite Graph",
            "url": "https://www.geeksforgeeks.org/problems/bipartite-graph/1",
            "platform": "GeeksforGeeks",
            "chapterId": 7,
            "chapterTitle": "Graphs",
            "topicId": "7.1",
            "topicTitle": "Graph Traversal, Connected Components & Cycle Detection"
          },
          {
            "id": 707,
            "title": "Bridges in graph",
            "url": "https://leetcode.com/problems/bridges-in-graph/",
            "platform": "LeetCode",
            "chapterId": 7,
            "chapterTitle": "Graphs",
            "topicId": "7.1",
            "topicTitle": "Graph Traversal, Connected Components & Cycle Detection"
          },
          {
            "id": 708,
            "title": "Check Given Graph Tree",
            "url": "https://www.geeksforgeeks.org/check-given-graph-tree/#:~:text=Since%20the%20graph%20is%20undirected,graph%20is%20connected%2C%20otherwise%20not.",
            "platform": "GeeksforGeeks",
            "chapterId": 7,
            "chapterTitle": "Graphs",
            "topicId": "7.1",
            "topicTitle": "Graph Traversal, Connected Components & Cycle Detection"
          },
          {
            "id": 709,
            "title": "Chinese Postman Route Inspection Set 1 Introduction",
            "url": "https://www.geeksforgeeks.org/chinese-postman-route-inspection-set-1-introduction/",
            "platform": "GeeksforGeeks",
            "chapterId": 7,
            "chapterTitle": "Graphs",
            "topicId": "7.1",
            "topicTitle": "Graph Traversal, Connected Components & Cycle Detection"
          },
          {
            "id": 710,
            "title": "Clone Graph",
            "url": "https://leetcode.com/problems/clone-graph",
            "platform": "LeetCode",
            "chapterId": 7,
            "chapterTitle": "Graphs",
            "topicId": "7.1",
            "topicTitle": "Graph Traversal, Connected Components & Cycle Detection"
          },
          {
            "id": 711,
            "title": "Connected Components",
            "url": "https://leetcode.com/problems/connected-components/",
            "platform": "LeetCode",
            "chapterId": 7,
            "chapterTitle": "Graphs",
            "topicId": "7.1",
            "topicTitle": "Graph Traversal, Connected Components & Cycle Detection"
          },
          {
            "id": 712,
            "title": "Cycle Detection in Directed Graph (DFS)",
            "url": "https://leetcode.com/problems/cycle-detection-in-directed-graph/",
            "platform": "LeetCode",
            "chapterId": 7,
            "chapterTitle": "Graphs",
            "topicId": "7.1",
            "topicTitle": "Graph Traversal, Connected Components & Cycle Detection"
          },
          {
            "id": 713,
            "title": "Depth First Search Or Dfs For A Graph",
            "url": "https://www.geeksforgeeks.org/depth-first-search-or-dfs-for-a-graph/",
            "platform": "GeeksforGeeks",
            "chapterId": 7,
            "chapterTitle": "Graphs",
            "topicId": "7.1",
            "topicTitle": "Graph Traversal, Connected Components & Cycle Detection"
          },
          {
            "id": 714,
            "title": "Detect Cycle In A Graph",
            "url": "https://www.geeksforgeeks.org/detect-cycle-in-a-graph/",
            "platform": "GeeksforGeeks",
            "chapterId": 7,
            "chapterTitle": "Graphs",
            "topicId": "7.1",
            "topicTitle": "Graph Traversal, Connected Components & Cycle Detection"
          },
          {
            "id": 715,
            "title": "Find Longest Path Directed Acyclic Graph",
            "url": "https://www.geeksforgeeks.org/find-longest-path-directed-acyclic-graph/",
            "platform": "GeeksforGeeks",
            "chapterId": 7,
            "chapterTitle": "Graphs",
            "topicId": "7.1",
            "topicTitle": "Graph Traversal, Connected Components & Cycle Detection"
          },
          {
            "id": 716,
            "title": "Find the number of islands",
            "url": "https://www.geeksforgeeks.org/problems/find-the-number-of-islands/1",
            "platform": "GeeksforGeeks",
            "chapterId": 7,
            "chapterTitle": "Graphs",
            "topicId": "7.1",
            "topicTitle": "Graph Traversal, Connected Components & Cycle Detection"
          },
          {
            "id": 717,
            "title": "Graph Coloring",
            "url": "https://www.geeksforgeeks.org/graph-coloring-applications/#:~:text=Graph%20coloring%20problem%20is%20to,are%20colored%20using%20same%20color.",
            "platform": "GeeksforGeeks",
            "chapterId": 7,
            "chapterTitle": "Graphs",
            "topicId": "7.1",
            "topicTitle": "Graph Traversal, Connected Components & Cycle Detection"
          },
          {
            "id": 718,
            "title": "Graph Coloring Applications",
            "url": "https://www.geeksforgeeks.org/graph-coloring-applications/#:~:text=Graph%20coloring%20problem%20is%20to,are%20colored%20using%20same%20color.",
            "platform": "GeeksforGeeks",
            "chapterId": 7,
            "chapterTitle": "Graphs",
            "topicId": "7.1",
            "topicTitle": "Graph Traversal, Connected Components & Cycle Detection"
          },
          {
            "id": 719,
            "title": "Graph Representation | C++",
            "url": "https://leetcode.com/problems/graph-representation-c/",
            "platform": "LeetCode",
            "chapterId": 7,
            "chapterTitle": "Graphs",
            "topicId": "7.1",
            "topicTitle": "Graph Traversal, Connected Components & Cycle Detection"
          },
          {
            "id": 720,
            "title": "Graph Valid Tree",
            "url": "https://leetcode.com/problems/graph-valid-tree",
            "platform": "LeetCode",
            "chapterId": 7,
            "chapterTitle": "Graphs",
            "topicId": "7.1",
            "topicTitle": "Graph Traversal, Connected Components & Cycle Detection"
          },
          {
            "id": 721,
            "title": "Introduction to Graph",
            "url": "https://leetcode.com/problems/introduction-to-graph/",
            "platform": "LeetCode",
            "chapterId": 7,
            "chapterTitle": "Graphs",
            "topicId": "7.1",
            "topicTitle": "Graph Traversal, Connected Components & Cycle Detection"
          },
          {
            "id": 722,
            "title": "journey to the moon",
            "url": "https://www.hackerrank.com/challenges/journey-to-the-moon/problem",
            "platform": "Other",
            "chapterId": 7,
            "chapterTitle": "Graphs",
            "topicId": "7.1",
            "topicTitle": "Graph Traversal, Connected Components & Cycle Detection"
          },
          {
            "id": 723,
            "title": "Kosaraju's algorithm",
            "url": "https://leetcode.com/problems/kosaraju-s-algorithm/",
            "platform": "LeetCode",
            "chapterId": 7,
            "chapterTitle": "Graphs",
            "topicId": "7.1",
            "topicTitle": "Graph Traversal, Connected Components & Cycle Detection"
          },
          {
            "id": 724,
            "title": "Minimum time taken by each job to be completed given by a Directed Acyclic Graph",
            "url": "https://www.geeksforgeeks.org/problems/minimum-time-taken-by-each-job-to-be-completed-given-by-a-directed-acyclic-graph/1",
            "platform": "GeeksforGeeks",
            "chapterId": 7,
            "chapterTitle": "Graphs",
            "topicId": "7.1",
            "topicTitle": "Graph Traversal, Connected Components & Cycle Detection"
          },
          {
            "id": 725,
            "title": "Number of Connected Components in an Undirected Graph",
            "url": "https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph",
            "platform": "LeetCode",
            "chapterId": 7,
            "chapterTitle": "Graphs",
            "topicId": "7.1",
            "topicTitle": "Graph Traversal, Connected Components & Cycle Detection"
          },
          {
            "id": 726,
            "title": "Number of enclaves",
            "url": "https://leetcode.com/problems/number-of-enclaves/",
            "platform": "LeetCode",
            "chapterId": 7,
            "chapterTitle": "Graphs",
            "topicId": "7.1",
            "topicTitle": "Graph Traversal, Connected Components & Cycle Detection"
          },
          {
            "id": 727,
            "title": "Number of Islands",
            "url": "https://leetcode.com/problems/number-of-islands",
            "platform": "LeetCode",
            "chapterId": 7,
            "chapterTitle": "Graphs",
            "topicId": "7.1",
            "topicTitle": "Graph Traversal, Connected Components & Cycle Detection"
          },
          {
            "id": 728,
            "title": "Number of provinces",
            "url": "https://leetcode.com/problems/number-of-provinces/",
            "platform": "LeetCode",
            "chapterId": 7,
            "chapterTitle": "Graphs",
            "topicId": "7.1",
            "topicTitle": "Graph Traversal, Connected Components & Cycle Detection"
          },
          {
            "id": 729,
            "title": "Number Of Triangles In Directed And Undirected Graphs",
            "url": "https://www.geeksforgeeks.org/number-of-triangles-in-directed-and-undirected-graphs/",
            "platform": "GeeksforGeeks",
            "chapterId": 7,
            "chapterTitle": "Graphs",
            "topicId": "7.1",
            "topicTitle": "Graph Traversal, Connected Components & Cycle Detection"
          },
          {
            "id": 730,
            "title": "oliver and the game 3",
            "url": "https://www.hackerearth.com/practice/algorithms/graphs/topological-sort/practice-problems/algorithm/oliver-and-the-game-3/",
            "platform": "HackerEarth",
            "chapterId": 7,
            "chapterTitle": "Graphs",
            "topicId": "7.1",
            "topicTitle": "Graph Traversal, Connected Components & Cycle Detection"
          },
          {
            "id": 731,
            "title": "Pacific Atlantic Water Flow",
            "url": "https://leetcode.com/problems/pacific-atlantic-water-flow",
            "platform": "LeetCode",
            "chapterId": 7,
            "chapterTitle": "Graphs",
            "topicId": "7.1",
            "topicTitle": "Graph Traversal, Connected Components & Cycle Detection"
          },
          {
            "id": 732,
            "title": "Paths Travel Nodes Using Edgeseven Bridges Konigsberg",
            "url": "https://www.geeksforgeeks.org/paths-travel-nodes-using-edgeseven-bridges-konigsberg/",
            "platform": "GeeksforGeeks",
            "chapterId": 7,
            "chapterTitle": "Graphs",
            "topicId": "7.1",
            "topicTitle": "Graph Traversal, Connected Components & Cycle Detection"
          },
          {
            "id": 733,
            "title": "Reconstruct Itinerary",
            "url": "https://leetcode.com/problems/reconstruct-itinerary/",
            "platform": "LeetCode",
            "chapterId": 7,
            "chapterTitle": "Graphs",
            "topicId": "7.1",
            "topicTitle": "Graph Traversal, Connected Components & Cycle Detection"
          },
          {
            "id": 734,
            "title": "Snakes and Ladders",
            "url": "https://leetcode.com/problems/snakes-and-ladders",
            "platform": "LeetCode",
            "chapterId": 7,
            "chapterTitle": "Graphs",
            "topicId": "7.1",
            "topicTitle": "Graph Traversal, Connected Components & Cycle Detection"
          },
          {
            "id": 735,
            "title": "Strongly Connected",
            "url": "https://www.geeksforgeeks.org/problems/strongly-connected-components-kosarajus-algo/1",
            "platform": "GeeksforGeeks",
            "chapterId": 7,
            "chapterTitle": "Graphs",
            "topicId": "7.1",
            "topicTitle": "Graph Traversal, Connected Components & Cycle Detection"
          },
          {
            "id": 736,
            "title": "Strongly Connected Components (Kosaraju's Algo)",
            "url": "https://www.geeksforgeeks.org/problems/strongly-connected-components-kosarajus-algo/1",
            "platform": "GeeksforGeeks",
            "chapterId": 7,
            "chapterTitle": "Graphs",
            "topicId": "7.1",
            "topicTitle": "Graph Traversal, Connected Components & Cycle Detection"
          },
          {
            "id": 737,
            "title": "Surrounded Regions",
            "url": "https://leetcode.com/problems/surrounded-regions/",
            "platform": "LeetCode",
            "chapterId": 7,
            "chapterTitle": "Graphs",
            "topicId": "7.1",
            "topicTitle": "Graph Traversal, Connected Components & Cycle Detection"
          },
          {
            "id": 738,
            "title": "Time Needed to Inform All Employees",
            "url": "https://leetcode.com/problems/time-needed-to-inform-all-employees",
            "platform": "LeetCode",
            "chapterId": 7,
            "chapterTitle": "Graphs",
            "topicId": "7.1",
            "topicTitle": "Graph Traversal, Connected Components & Cycle Detection"
          },
          {
            "id": 739,
            "title": "Two Clique Problem Check Graph Can Divided Two Cliques",
            "url": "https://www.geeksforgeeks.org/two-clique-problem-check-graph-can-divided-two-cliques/",
            "platform": "GeeksforGeeks",
            "chapterId": 7,
            "chapterTitle": "Graphs",
            "topicId": "7.1",
            "topicTitle": "Graph Traversal, Connected Components & Cycle Detection"
          },
          {
            "id": 740,
            "title": "Undirected Graph Cycle",
            "url": "https://www.geeksforgeeks.org/problems/detect-cycle-in-an-undirected-graph/1",
            "platform": "GeeksforGeeks",
            "chapterId": 7,
            "chapterTitle": "Graphs",
            "topicId": "7.1",
            "topicTitle": "Graph Traversal, Connected Components & Cycle Detection"
          }
        ]
      },
      {
        "id": "7.2",
        "title": "Multi-Source BFS & Grid Shortest Path",
        "expectedCount": 13,
        "problems": [
          {
            "id": 741,
            "title": "01 Matrix",
            "url": "https://leetcode.com/problems/01-matrix",
            "platform": "LeetCode",
            "chapterId": 7,
            "chapterTitle": "Graphs",
            "topicId": "7.2",
            "topicTitle": "Multi-Source BFS & Grid Shortest Path"
          },
          {
            "id": 742,
            "title": "As Far from Land as Possible",
            "url": "https://leetcode.com/problems/as-far-from-land-as-possible",
            "platform": "LeetCode",
            "chapterId": 7,
            "chapterTitle": "Graphs",
            "topicId": "7.2",
            "topicTitle": "Multi-Source BFS & Grid Shortest Path"
          },
          {
            "id": 743,
            "title": "Bus Routes",
            "url": "https://leetcode.com/problems/bus-routes",
            "platform": "LeetCode",
            "chapterId": 7,
            "chapterTitle": "Graphs",
            "topicId": "7.2",
            "topicTitle": "Multi-Source BFS & Grid Shortest Path"
          },
          {
            "id": 744,
            "title": "Distance of nearest cell having 1",
            "url": "https://www.geeksforgeeks.org/problems/distance-of-nearest-cell-having-1-1587115620/1",
            "platform": "GeeksforGeeks",
            "chapterId": 7,
            "chapterTitle": "Graphs",
            "topicId": "7.2",
            "topicTitle": "Multi-Source BFS & Grid Shortest Path"
          },
          {
            "id": 745,
            "title": "Minimum Genetic Mutation",
            "url": "https://leetcode.com/problems/minimum-genetic-mutation/",
            "platform": "LeetCode",
            "chapterId": 7,
            "chapterTitle": "Graphs",
            "topicId": "7.2",
            "topicTitle": "Multi-Source BFS & Grid Shortest Path"
          },
          {
            "id": 746,
            "title": "Minimum Knight Moves",
            "url": "https://leetcode.com/problems/minimum-knight-moves",
            "platform": "LeetCode",
            "chapterId": 7,
            "chapterTitle": "Graphs",
            "topicId": "7.2",
            "topicTitle": "Multi-Source BFS & Grid Shortest Path"
          },
          {
            "id": 747,
            "title": "Open The Lock",
            "url": "https://leetcode.com/problems/open-the-lock/",
            "platform": "LeetCode",
            "chapterId": 7,
            "chapterTitle": "Graphs",
            "topicId": "7.2",
            "topicTitle": "Multi-Source BFS & Grid Shortest Path"
          },
          {
            "id": 748,
            "title": "Rotten Oranges",
            "url": "https://www.geeksforgeeks.org/problems/rotten-oranges2536/1",
            "platform": "GeeksforGeeks",
            "chapterId": 7,
            "chapterTitle": "Graphs",
            "topicId": "7.2",
            "topicTitle": "Multi-Source BFS & Grid Shortest Path"
          },
          {
            "id": 749,
            "title": "Shortest Bridge",
            "url": "https://leetcode.com/problems/shortest-bridge",
            "platform": "LeetCode",
            "chapterId": 7,
            "chapterTitle": "Graphs",
            "topicId": "7.2",
            "topicTitle": "Multi-Source BFS & Grid Shortest Path"
          },
          {
            "id": 750,
            "title": "Shortest Distance in a Binary Maze",
            "url": "https://leetcode.com/problems/shortest-distance-in-a-binary-maze/",
            "platform": "LeetCode",
            "chapterId": 7,
            "chapterTitle": "Graphs",
            "topicId": "7.2",
            "topicTitle": "Multi-Source BFS & Grid Shortest Path"
          },
          {
            "id": 751,
            "title": "Steps by Knight",
            "url": "https://www.geeksforgeeks.org/problems/steps-by-knight5927/1",
            "platform": "GeeksforGeeks",
            "chapterId": 7,
            "chapterTitle": "Graphs",
            "topicId": "7.2",
            "topicTitle": "Multi-Source BFS & Grid Shortest Path"
          },
          {
            "id": 752,
            "title": "Walls And Gates",
            "url": "https://leetcode.com/problems/walls-and-gates/",
            "platform": "LeetCode",
            "chapterId": 7,
            "chapterTitle": "Graphs",
            "topicId": "7.2",
            "topicTitle": "Multi-Source BFS & Grid Shortest Path"
          },
          {
            "id": 753,
            "title": "Water Jug problem using BFS",
            "url": "https://www.geeksforgeeks.org/water-jug-problem-using-bfs/",
            "platform": "GeeksforGeeks",
            "chapterId": 7,
            "chapterTitle": "Graphs",
            "topicId": "7.2",
            "topicTitle": "Multi-Source BFS & Grid Shortest Path"
          }
        ]
      },
      {
        "id": "7.3",
        "title": "Topological Sort & DAG Dependencies (Kahn Algorithm)",
        "expectedCount": 10,
        "problems": [
          {
            "id": 754,
            "title": "Alien Dictionary",
            "url": "https://www.geeksforgeeks.org/problems/alien-dictionary/1",
            "platform": "GeeksforGeeks",
            "chapterId": 7,
            "chapterTitle": "Graphs",
            "topicId": "7.3",
            "topicTitle": "Topological Sort & DAG Dependencies (Kahn Algorithm)"
          },
          {
            "id": 755,
            "title": "Course Schedule",
            "url": "https://leetcode.com/problems/course-schedule",
            "platform": "LeetCode",
            "chapterId": 7,
            "chapterTitle": "Graphs",
            "topicId": "7.3",
            "topicTitle": "Topological Sort & DAG Dependencies (Kahn Algorithm)"
          },
          {
            "id": 756,
            "title": "Find Eventual Safe States",
            "url": "https://leetcode.com/problems/find-eventual-safe-states",
            "platform": "LeetCode",
            "chapterId": 7,
            "chapterTitle": "Graphs",
            "topicId": "7.3",
            "topicTitle": "Topological Sort & DAG Dependencies (Kahn Algorithm)"
          },
          {
            "id": 757,
            "title": "Find Whether It Is Possible To Finish All Tasks Or Not From Given Dependencies",
            "url": "https://www.geeksforgeeks.org/find-whether-it-is-possible-to-finish-all-tasks-or-not-from-given-dependencies/",
            "platform": "GeeksforGeeks",
            "chapterId": 7,
            "chapterTitle": "Graphs",
            "topicId": "7.3",
            "topicTitle": "Topological Sort & DAG Dependencies (Kahn Algorithm)"
          },
          {
            "id": 758,
            "title": "Minimum Height Trees",
            "url": "https://leetcode.com/problems/minimum-height-trees",
            "platform": "LeetCode",
            "chapterId": 7,
            "chapterTitle": "Graphs",
            "topicId": "7.3",
            "topicTitle": "Topological Sort & DAG Dependencies (Kahn Algorithm)"
          },
          {
            "id": 759,
            "title": "Prerequisite Tasks",
            "url": "https://www.geeksforgeeks.org/problems/prerequisite-tasks/1",
            "platform": "GeeksforGeeks",
            "chapterId": 7,
            "chapterTitle": "Graphs",
            "topicId": "7.3",
            "topicTitle": "Topological Sort & DAG Dependencies (Kahn Algorithm)"
          },
          {
            "id": 760,
            "title": "Topo Sort",
            "url": "https://leetcode.com/problems/topo-sort/",
            "platform": "LeetCode",
            "chapterId": 7,
            "chapterTitle": "Graphs",
            "topicId": "7.3",
            "topicTitle": "Topological Sort & DAG Dependencies (Kahn Algorithm)"
          },
          {
            "id": 761,
            "title": "Topological sort",
            "url": "https://www.geeksforgeeks.org/problems/topological-sort/1",
            "platform": "GeeksforGeeks",
            "chapterId": 7,
            "chapterTitle": "Graphs",
            "topicId": "7.3",
            "topicTitle": "Topological Sort & DAG Dependencies (Kahn Algorithm)"
          },
          {
            "id": 762,
            "title": "Topological sort or Kahn's algorithm",
            "url": "https://leetcode.com/problems/topological-sort-or-kahn-s-algorithm/",
            "platform": "LeetCode",
            "chapterId": 7,
            "chapterTitle": "Graphs",
            "topicId": "7.3",
            "topicTitle": "Topological Sort & DAG Dependencies (Kahn Algorithm)"
          },
          {
            "id": 763,
            "title": "Verifying An Alien Dictionary",
            "url": "https://leetcode.com/problems/verifying-an-alien-dictionary/",
            "platform": "LeetCode",
            "chapterId": 7,
            "chapterTitle": "Graphs",
            "topicId": "7.3",
            "topicTitle": "Topological Sort & DAG Dependencies (Kahn Algorithm)"
          }
        ]
      },
      {
        "id": "7.4",
        "title": "Shortest Path Algorithms (Dijkstra, Bellman-Ford, Floyd-Warshall)",
        "expectedCount": 16,
        "problems": [
          {
            "id": 764,
            "title": "Bellman Ford Algorithm",
            "url": "https://leetcode.com/problems/bellman-ford-algorithm/",
            "platform": "LeetCode",
            "chapterId": 7,
            "chapterTitle": "Graphs",
            "topicId": "7.4",
            "topicTitle": "Shortest Path Algorithms (Dijkstra, Bellman-Ford, Floyd-Warshall)"
          },
          {
            "id": 765,
            "title": "Cheapest flight within K stops",
            "url": "https://leetcode.com/problems/cheapest-flight-within-k-stops/",
            "platform": "LeetCode",
            "chapterId": 7,
            "chapterTitle": "Graphs",
            "topicId": "7.4",
            "topicTitle": "Shortest Path Algorithms (Dijkstra, Bellman-Ford, Floyd-Warshall)"
          },
          {
            "id": 766,
            "title": "Detect a negative cycle in a Graph | (Bellman Ford)",
            "url": "https://www.geeksforgeeks.org/detect-negative-cycle-graph-bellman-ford/",
            "platform": "GeeksforGeeks",
            "chapterId": 7,
            "chapterTitle": "Graphs",
            "topicId": "7.4",
            "topicTitle": "Shortest Path Algorithms (Dijkstra, Bellman-Ford, Floyd-Warshall)"
          },
          {
            "id": 767,
            "title": "Detect Negative Cycle Graph Bellman Ford",
            "url": "https://www.geeksforgeeks.org/detect-negative-cycle-graph-bellman-ford/",
            "platform": "GeeksforGeeks",
            "chapterId": 7,
            "chapterTitle": "Graphs",
            "topicId": "7.4",
            "topicTitle": "Shortest Path Algorithms (Dijkstra, Bellman-Ford, Floyd-Warshall)"
          },
          {
            "id": 768,
            "title": "Dijkstras Shortest Path Algorithm Greedy Algo 7",
            "url": "https://www.geeksforgeeks.org/dijkstras-shortest-path-algorithm-greedy-algo-7/",
            "platform": "GeeksforGeeks",
            "chapterId": 7,
            "chapterTitle": "Graphs",
            "topicId": "7.4",
            "topicTitle": "Shortest Path Algorithms (Dijkstra, Bellman-Ford, Floyd-Warshall)"
          },
          {
            "id": 769,
            "title": "Floyd Warshall",
            "url": "https://www.geeksforgeeks.org/problems/implementing-floyd-warshall2042/1",
            "platform": "GeeksforGeeks",
            "chapterId": 7,
            "chapterTitle": "Graphs",
            "topicId": "7.4",
            "topicTitle": "Shortest Path Algorithms (Dijkstra, Bellman-Ford, Floyd-Warshall)"
          },
          {
            "id": 770,
            "title": "Floyd warshall algorithm",
            "url": "https://leetcode.com/problems/floyd-warshall-algorithm/",
            "platform": "LeetCode",
            "chapterId": 7,
            "chapterTitle": "Graphs",
            "topicId": "7.4",
            "topicTitle": "Shortest Path Algorithms (Dijkstra, Bellman-Ford, Floyd-Warshall)"
          },
          {
            "id": 771,
            "title": "Minimum multiplications to reach end",
            "url": "https://leetcode.com/problems/minimum-multiplications-to-reach-end/",
            "platform": "LeetCode",
            "chapterId": 7,
            "chapterTitle": "Graphs",
            "topicId": "7.4",
            "topicTitle": "Shortest Path Algorithms (Dijkstra, Bellman-Ford, Floyd-Warshall)"
          },
          {
            "id": 772,
            "title": "Negative weight cycle",
            "url": "https://www.geeksforgeeks.org/problems/negative-weight-cycle3504/1",
            "platform": "GeeksforGeeks",
            "chapterId": 7,
            "chapterTitle": "Graphs",
            "topicId": "7.4",
            "topicTitle": "Shortest Path Algorithms (Dijkstra, Bellman-Ford, Floyd-Warshall)"
          },
          {
            "id": 773,
            "title": "Network Delay Time",
            "url": "https://leetcode.com/problems/network-delay-time/",
            "platform": "LeetCode",
            "chapterId": 7,
            "chapterTitle": "Graphs",
            "topicId": "7.4",
            "topicTitle": "Shortest Path Algorithms (Dijkstra, Bellman-Ford, Floyd-Warshall)"
          },
          {
            "id": 774,
            "title": "Path with Minimum Effort",
            "url": "https://leetcode.com/problems/path-with-minimum-effort/",
            "platform": "LeetCode",
            "chapterId": 7,
            "chapterTitle": "Graphs",
            "topicId": "7.4",
            "topicTitle": "Shortest Path Algorithms (Dijkstra, Bellman-Ford, Floyd-Warshall)"
          },
          {
            "id": 775,
            "title": "Shortest path in DAG",
            "url": "https://leetcode.com/problems/shortest-path-in-dag/",
            "platform": "LeetCode",
            "chapterId": 7,
            "chapterTitle": "Graphs",
            "topicId": "7.4",
            "topicTitle": "Shortest Path Algorithms (Dijkstra, Bellman-Ford, Floyd-Warshall)"
          },
          {
            "id": 776,
            "title": "Shortest path in undirected graph with unit weights",
            "url": "https://leetcode.com/problems/shortest-path-in-undirected-graph-with-unit-weights/",
            "platform": "LeetCode",
            "chapterId": 7,
            "chapterTitle": "Graphs",
            "topicId": "7.4",
            "topicTitle": "Shortest Path Algorithms (Dijkstra, Bellman-Ford, Floyd-Warshall)"
          },
          {
            "id": 777,
            "title": "Shortest Path to Get Food",
            "url": "https://leetcode.com/problems/shortest-path-to-get-food",
            "platform": "LeetCode",
            "chapterId": 7,
            "chapterTitle": "Graphs",
            "topicId": "7.4",
            "topicTitle": "Shortest Path Algorithms (Dijkstra, Bellman-Ford, Floyd-Warshall)"
          },
          {
            "id": 778,
            "title": "Swim in Rising Water",
            "url": "https://leetcode.com/problems/swim-in-rising-water",
            "platform": "LeetCode",
            "chapterId": 7,
            "chapterTitle": "Graphs",
            "topicId": "7.4",
            "topicTitle": "Shortest Path Algorithms (Dijkstra, Bellman-Ford, Floyd-Warshall)"
          },
          {
            "id": 779,
            "title": "Word Ladder",
            "url": "https://leetcode.com/problems/word-ladder",
            "platform": "LeetCode",
            "chapterId": 7,
            "chapterTitle": "Graphs",
            "topicId": "7.4",
            "topicTitle": "Shortest Path Algorithms (Dijkstra, Bellman-Ford, Floyd-Warshall)"
          }
        ]
      },
      {
        "id": "7.5",
        "title": "Disjoint Set Union (DSU) & Minimum Spanning Tree (MST)",
        "expectedCount": 19,
        "problems": [
          {
            "id": 780,
            "title": "Accounts Merge",
            "url": "https://leetcode.com/problems/accounts-merge",
            "platform": "LeetCode",
            "chapterId": 7,
            "chapterTitle": "Graphs",
            "topicId": "7.5",
            "topicTitle": "Disjoint Set Union (DSU) & Minimum Spanning Tree (MST)"
          },
          {
            "id": 781,
            "title": "Check for Prime Number",
            "url": "https://leetcode.com/problems/check-for-prime-number/",
            "platform": "LeetCode",
            "chapterId": 7,
            "chapterTitle": "Graphs",
            "topicId": "7.5",
            "topicTitle": "Disjoint Set Union (DSU) & Minimum Spanning Tree (MST)"
          },
          {
            "id": 782,
            "title": "Check if the Number is Armstrong",
            "url": "https://leetcode.com/problems/check-if-the-number-is-armstrong/",
            "platform": "LeetCode",
            "chapterId": 7,
            "chapterTitle": "Graphs",
            "topicId": "7.5",
            "topicTitle": "Disjoint Set Union (DSU) & Minimum Spanning Tree (MST)"
          },
          {
            "id": 783,
            "title": "Count primes in range L to R",
            "url": "https://leetcode.com/problems/count-primes-in-range-l-to-r/",
            "platform": "LeetCode",
            "chapterId": 7,
            "chapterTitle": "Graphs",
            "topicId": "7.5",
            "topicTitle": "Disjoint Set Union (DSU) & Minimum Spanning Tree (MST)"
          },
          {
            "id": 784,
            "title": "Disjoint Set",
            "url": "https://leetcode.com/problems/disjoint-set/",
            "platform": "LeetCode",
            "chapterId": 7,
            "chapterTitle": "Graphs",
            "topicId": "7.5",
            "topicTitle": "Disjoint Set Union (DSU) & Minimum Spanning Tree (MST)"
          },
          {
            "id": 785,
            "title": "Find Critical and Pseudo Critical Edges in Minimum Spanning Tree",
            "url": "https://leetcode.com/problems/find-critical-and-pseudo-critical-edges-in-minimum-spanning-tree/",
            "platform": "LeetCode",
            "chapterId": 7,
            "chapterTitle": "Graphs",
            "topicId": "7.5",
            "topicTitle": "Disjoint Set Union (DSU) & Minimum Spanning Tree (MST)"
          },
          {
            "id": 786,
            "title": "Find the MST weight",
            "url": "https://leetcode.com/problems/find-the-mst-weight/",
            "platform": "LeetCode",
            "chapterId": 7,
            "chapterTitle": "Graphs",
            "topicId": "7.5",
            "topicTitle": "Disjoint Set Union (DSU) & Minimum Spanning Tree (MST)"
          },
          {
            "id": 787,
            "title": "Kruskals Minimum Spanning Tree Algorithm Greedy Algo 2",
            "url": "https://www.geeksforgeeks.org/kruskals-minimum-spanning-tree-algorithm-greedy-algo-2/",
            "platform": "GeeksforGeeks",
            "chapterId": 7,
            "chapterTitle": "Graphs",
            "topicId": "7.5",
            "topicTitle": "Disjoint Set Union (DSU) & Minimum Spanning Tree (MST)"
          },
          {
            "id": 788,
            "title": "Min Cost to Connect All Points",
            "url": "https://leetcode.com/problems/min-cost-to-connect-all-points/",
            "platform": "LeetCode",
            "chapterId": 7,
            "chapterTitle": "Graphs",
            "topicId": "7.5",
            "topicTitle": "Disjoint Set Union (DSU) & Minimum Spanning Tree (MST)"
          },
          {
            "id": 789,
            "title": "Minimum Spanning Tree",
            "url": "https://www.geeksforgeeks.org/problems/minimum-spanning-tree/1",
            "platform": "GeeksforGeeks",
            "chapterId": 7,
            "chapterTitle": "Graphs",
            "topicId": "7.5",
            "topicTitle": "Disjoint Set Union (DSU) & Minimum Spanning Tree (MST)"
          },
          {
            "id": 790,
            "title": "Most Stones Removed with Same Row or Column",
            "url": "https://leetcode.com/problems/most-stones-removed-with-same-row-or-column",
            "platform": "LeetCode",
            "chapterId": 7,
            "chapterTitle": "Graphs",
            "topicId": "7.5",
            "topicTitle": "Disjoint Set Union (DSU) & Minimum Spanning Tree (MST)"
          },
          {
            "id": 791,
            "title": "MST theory",
            "url": "https://leetcode.com/problems/mst-theory/",
            "platform": "LeetCode",
            "chapterId": 7,
            "chapterTitle": "Graphs",
            "topicId": "7.5",
            "topicTitle": "Disjoint Set Union (DSU) & Minimum Spanning Tree (MST)"
          },
          {
            "id": 792,
            "title": "Number of Operations to Make Network Connected",
            "url": "https://leetcode.com/problems/number-of-operations-to-make-network-connected",
            "platform": "LeetCode",
            "chapterId": 7,
            "chapterTitle": "Graphs",
            "topicId": "7.5",
            "topicTitle": "Disjoint Set Union (DSU) & Minimum Spanning Tree (MST)"
          },
          {
            "id": 793,
            "title": "Prim's Algorithm",
            "url": "https://leetcode.com/problems/prim-s-algorithm/",
            "platform": "LeetCode",
            "chapterId": 7,
            "chapterTitle": "Graphs",
            "topicId": "7.5",
            "topicTitle": "Disjoint Set Union (DSU) & Minimum Spanning Tree (MST)"
          },
          {
            "id": 794,
            "title": "Prime factorisation of a Number",
            "url": "https://leetcode.com/problems/prime-factorisation-of-a-number/",
            "platform": "LeetCode",
            "chapterId": 7,
            "chapterTitle": "Graphs",
            "topicId": "7.5",
            "topicTitle": "Disjoint Set Union (DSU) & Minimum Spanning Tree (MST)"
          },
          {
            "id": 795,
            "title": "Prims Minimum Spanning Tree Mst Greedy Algo 5",
            "url": "https://www.geeksforgeeks.org/prims-minimum-spanning-tree-mst-greedy-algo-5/",
            "platform": "GeeksforGeeks",
            "chapterId": 7,
            "chapterTitle": "Graphs",
            "topicId": "7.5",
            "topicTitle": "Disjoint Set Union (DSU) & Minimum Spanning Tree (MST)"
          },
          {
            "id": 796,
            "title": "Print Prime Factors of a Number",
            "url": "https://leetcode.com/problems/print-prime-factors-of-a-number/",
            "platform": "LeetCode",
            "chapterId": 7,
            "chapterTitle": "Graphs",
            "topicId": "7.5",
            "topicTitle": "Disjoint Set Union (DSU) & Minimum Spanning Tree (MST)"
          },
          {
            "id": 797,
            "title": "Redundant Connection",
            "url": "https://leetcode.com/problems/redundant-connection",
            "platform": "LeetCode",
            "chapterId": 7,
            "chapterTitle": "Graphs",
            "topicId": "7.5",
            "topicTitle": "Disjoint Set Union (DSU) & Minimum Spanning Tree (MST)"
          },
          {
            "id": 798,
            "title": "Total number of Spanning Trees in a Graph",
            "url": "https://www.geeksforgeeks.org/total-number-spanning-trees-graph/",
            "platform": "GeeksforGeeks",
            "chapterId": 7,
            "chapterTitle": "Graphs",
            "topicId": "7.5",
            "topicTitle": "Disjoint Set Union (DSU) & Minimum Spanning Tree (MST)"
          }
        ]
      }
    ]
  },
  {
    "id": 8,
    "title": "Dynamic Programming (DP)",
    "expectedCount": 124,
    "icon": "⚡",
    "topics": [
      {
        "id": "8.1",
        "title": "Dynamic Programming Patterns",
        "expectedCount": 124,
        "problems": [
          {
            "id": 799,
            "title": "0 - 1 Knapsack Problem",
            "url": "https://www.geeksforgeeks.org/problems/0-1-knapsack-problem0945/1",
            "platform": "GeeksforGeeks",
            "chapterId": 8,
            "chapterTitle": "Dynamic Programming (DP)",
            "topicId": "8.1",
            "topicTitle": "Dynamic Programming Patterns"
          },
          {
            "id": 800,
            "title": "Add 1 to a Linked List Number",
            "url": "https://www.geeksforgeeks.org/problems/add-1-to-a-number-represented-as-linked-list/1",
            "platform": "GeeksforGeeks",
            "chapterId": 8,
            "chapterTitle": "Dynamic Programming (DP)",
            "topicId": "8.1",
            "topicTitle": "Dynamic Programming Patterns"
          },
          {
            "id": 801,
            "title": "Add Number Linked Lists",
            "url": "https://www.geeksforgeeks.org/problems/add-two-numbers-represented-by-linked-lists/1",
            "platform": "GeeksforGeeks",
            "chapterId": 8,
            "chapterTitle": "Dynamic Programming (DP)",
            "topicId": "8.1",
            "topicTitle": "Dynamic Programming Patterns"
          },
          {
            "id": 802,
            "title": "Assembly Line Scheduling Dp 34",
            "url": "https://www.geeksforgeeks.org/assembly-line-scheduling-dp-34/",
            "platform": "GeeksforGeeks",
            "chapterId": 8,
            "chapterTitle": "Dynamic Programming (DP)",
            "topicId": "8.1",
            "topicTitle": "Dynamic Programming Patterns"
          },
          {
            "id": 803,
            "title": "Asteroid Collision",
            "url": "https://leetcode.com/problems/asteroid-collision",
            "platform": "LeetCode",
            "chapterId": 8,
            "chapterTitle": "Dynamic Programming (DP)",
            "topicId": "8.1",
            "topicTitle": "Dynamic Programming Patterns"
          },
          {
            "id": 804,
            "title": "Best Time to Buy and Sell Stock",
            "url": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock",
            "platform": "LeetCode",
            "chapterId": 8,
            "chapterTitle": "Dynamic Programming (DP)",
            "topicId": "8.1",
            "topicTitle": "Dynamic Programming Patterns"
          },
          {
            "id": 805,
            "title": "Burst Balloons",
            "url": "https://leetcode.com/problems/burst-balloons",
            "platform": "LeetCode",
            "chapterId": 8,
            "chapterTitle": "Dynamic Programming (DP)",
            "topicId": "8.1",
            "topicTitle": "Dynamic Programming Patterns"
          },
          {
            "id": 806,
            "title": "Check If Circular Linked List",
            "url": "https://www.geeksforgeeks.org/problems/circular-linked-list/1",
            "platform": "GeeksforGeeks",
            "chapterId": 8,
            "chapterTitle": "Dynamic Programming (DP)",
            "topicId": "8.1",
            "topicTitle": "Dynamic Programming Patterns"
          },
          {
            "id": 807,
            "title": "Climbing Stairs",
            "url": "https://leetcode.com/problems/climbing-stairs",
            "platform": "LeetCode",
            "chapterId": 8,
            "chapterTitle": "Dynamic Programming (DP)",
            "topicId": "8.1",
            "topicTitle": "Dynamic Programming Patterns"
          },
          {
            "id": 808,
            "title": "Clone List with Next and Random",
            "url": "https://www.geeksforgeeks.org/problems/clone-a-linked-list-with-next-and-random-pointer/1",
            "platform": "GeeksforGeeks",
            "chapterId": 8,
            "chapterTitle": "Dynamic Programming (DP)",
            "topicId": "8.1",
            "topicTitle": "Dynamic Programming Patterns"
          },
          {
            "id": 809,
            "title": "Coin Change",
            "url": "https://leetcode.com/problems/coin-change",
            "platform": "LeetCode",
            "chapterId": 8,
            "chapterTitle": "Dynamic Programming (DP)",
            "topicId": "8.1",
            "topicTitle": "Dynamic Programming Patterns"
          },
          {
            "id": 810,
            "title": "Coin Change (Count Ways)",
            "url": "https://www.geeksforgeeks.org/problems/coin-change2448/1",
            "platform": "GeeksforGeeks",
            "chapterId": 8,
            "chapterTitle": "Dynamic Programming (DP)",
            "topicId": "8.1",
            "topicTitle": "Dynamic Programming Patterns"
          },
          {
            "id": 811,
            "title": "Coin Change 2 (DP - 22)",
            "url": "https://leetcode.com/problems/coin-change-2/",
            "platform": "LeetCode",
            "chapterId": 8,
            "chapterTitle": "Dynamic Programming (DP)",
            "topicId": "8.1",
            "topicTitle": "Dynamic Programming Patterns"
          },
          {
            "id": 812,
            "title": "Convert Binary Number in a Linked List to Integer",
            "url": "https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer",
            "platform": "LeetCode",
            "chapterId": 8,
            "chapterTitle": "Dynamic Programming (DP)",
            "topicId": "8.1",
            "topicTitle": "Dynamic Programming Patterns"
          },
          {
            "id": 813,
            "title": "Copy List with Random Pointer",
            "url": "https://leetcode.com/problems/copy-list-with-random-pointer",
            "platform": "LeetCode",
            "chapterId": 8,
            "chapterTitle": "Dynamic Programming (DP)",
            "topicId": "8.1",
            "topicTitle": "Dynamic Programming Patterns"
          },
          {
            "id": 814,
            "title": "Count Square Submatrices with All Ones",
            "url": "https://leetcode.com/problems/count-square-submatrices-with-all-ones",
            "platform": "LeetCode",
            "chapterId": 8,
            "chapterTitle": "Dynamic Programming (DP)",
            "topicId": "8.1",
            "topicTitle": "Dynamic Programming Patterns"
          },
          {
            "id": 815,
            "title": "Count Triplets Sorted Doubly Linked List Whose Sum Equal Given Value X",
            "url": "https://www.geeksforgeeks.org/count-triplets-sorted-doubly-linked-list-whose-sum-equal-given-value-x/",
            "platform": "GeeksforGeeks",
            "chapterId": 8,
            "chapterTitle": "Dynamic Programming (DP)",
            "topicId": "8.1",
            "topicTitle": "Dynamic Programming Patterns"
          },
          {
            "id": 816,
            "title": "Decode Ways",
            "url": "https://leetcode.com/problems/decode-ways",
            "platform": "LeetCode",
            "chapterId": 8,
            "chapterTitle": "Dynamic Programming (DP)",
            "topicId": "8.1",
            "topicTitle": "Dynamic Programming Patterns"
          },
          {
            "id": 817,
            "title": "Delete head of Doubly Linked List",
            "url": "https://leetcode.com/problems/delete-head-of-doubly-linked-list/",
            "platform": "LeetCode",
            "chapterId": 8,
            "chapterTitle": "Dynamic Programming (DP)",
            "topicId": "8.1",
            "topicTitle": "Dynamic Programming Patterns"
          },
          {
            "id": 818,
            "title": "Deletion Circular Linked List",
            "url": "https://www.geeksforgeeks.org/deletion-circular-linked-list/",
            "platform": "GeeksforGeeks",
            "chapterId": 8,
            "chapterTitle": "Dynamic Programming (DP)",
            "topicId": "8.1",
            "topicTitle": "Dynamic Programming Patterns"
          },
          {
            "id": 819,
            "title": "Detect Loop in linked list",
            "url": "https://www.geeksforgeeks.org/problems/detect-loop-in-linked-list/1",
            "platform": "GeeksforGeeks",
            "chapterId": 8,
            "chapterTitle": "Dynamic Programming (DP)",
            "topicId": "8.1",
            "topicTitle": "Dynamic Programming Patterns"
          },
          {
            "id": 820,
            "title": "Distinct Subsequences",
            "url": "https://leetcode.com/problems/distinct-subsequences",
            "platform": "LeetCode",
            "chapterId": 8,
            "chapterTitle": "Dynamic Programming (DP)",
            "topicId": "8.1",
            "topicTitle": "Dynamic Programming Patterns"
          },
          {
            "id": 821,
            "title": "Edit Distance",
            "url": "https://www.geeksforgeeks.org/problems/edit-distance3702/1",
            "platform": "GeeksforGeeks",
            "chapterId": 8,
            "chapterTitle": "Dynamic Programming (DP)",
            "topicId": "8.1",
            "topicTitle": "Dynamic Programming Patterns"
          },
          {
            "id": 822,
            "title": "Egg Dropping Puzzle",
            "url": "https://www.geeksforgeeks.org/problems/egg-dropping-puzzle-1587115620/1",
            "platform": "GeeksforGeeks",
            "chapterId": 8,
            "chapterTitle": "Dynamic Programming (DP)",
            "topicId": "8.1",
            "topicTitle": "Dynamic Programming Patterns"
          },
          {
            "id": 823,
            "title": "Evaluate Reverse Polish Notation",
            "url": "https://leetcode.com/problems/evaluate-reverse-polish-notation",
            "platform": "LeetCode",
            "chapterId": 8,
            "chapterTitle": "Dynamic Programming (DP)",
            "topicId": "8.1",
            "topicTitle": "Dynamic Programming Patterns"
          },
          {
            "id": 824,
            "title": "Find First Node Of Loop In A Linked List",
            "url": "https://www.geeksforgeeks.org/find-first-node-of-loop-in-a-linked-list/",
            "platform": "GeeksforGeeks",
            "chapterId": 8,
            "chapterTitle": "Dynamic Programming (DP)",
            "topicId": "8.1",
            "topicTitle": "Dynamic Programming Patterns"
          },
          {
            "id": 825,
            "title": "Find Pairs Given Sum Doubly Linked List",
            "url": "https://www.geeksforgeeks.org/find-pairs-given-sum-doubly-linked-list/",
            "platform": "GeeksforGeeks",
            "chapterId": 8,
            "chapterTitle": "Dynamic Programming (DP)",
            "topicId": "8.1",
            "topicTitle": "Dynamic Programming Patterns"
          },
          {
            "id": 826,
            "title": "Find the length of the Linked List",
            "url": "https://leetcode.com/problems/find-the-length-of-the-linked-list/",
            "platform": "LeetCode",
            "chapterId": 8,
            "chapterTitle": "Dynamic Programming (DP)",
            "topicId": "8.1",
            "topicTitle": "Dynamic Programming Patterns"
          },
          {
            "id": 827,
            "title": "Flatten a Multilevel Doubly Linked List",
            "url": "https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list",
            "platform": "LeetCode",
            "chapterId": 8,
            "chapterTitle": "Dynamic Programming (DP)",
            "topicId": "8.1",
            "topicTitle": "Dynamic Programming Patterns"
          },
          {
            "id": 828,
            "title": "Flatten Nested List Iterator",
            "url": "https://leetcode.com/problems/flatten-nested-list-iterator",
            "platform": "LeetCode",
            "chapterId": 8,
            "chapterTitle": "Dynamic Programming (DP)",
            "topicId": "8.1",
            "topicTitle": "Dynamic Programming Patterns"
          },
          {
            "id": 829,
            "title": "Flattening a Linked List",
            "url": "https://www.geeksforgeeks.org/problems/flattening-a-linked-list/1",
            "platform": "GeeksforGeeks",
            "chapterId": 8,
            "chapterTitle": "Dynamic Programming (DP)",
            "topicId": "8.1",
            "topicTitle": "Dynamic Programming Patterns"
          },
          {
            "id": 830,
            "title": "Fractional Knapsack",
            "url": "https://www.geeksforgeeks.org/problems/fractional-knapsack-1587115620/1",
            "platform": "GeeksforGeeks",
            "chapterId": 8,
            "chapterTitle": "Dynamic Programming (DP)",
            "topicId": "8.1",
            "topicTitle": "Dynamic Programming Patterns"
          },
          {
            "id": 831,
            "title": "Friends Pairing Problem",
            "url": "https://www.geeksforgeeks.org/problems/friends-pairing-problem5425/1",
            "platform": "GeeksforGeeks",
            "chapterId": 8,
            "chapterTitle": "Dynamic Programming (DP)",
            "topicId": "8.1",
            "topicTitle": "Dynamic Programming Patterns"
          },
          {
            "id": 832,
            "title": "Frog Jump",
            "url": "https://leetcode.com/problems/frog-jump",
            "platform": "LeetCode",
            "chapterId": 8,
            "chapterTitle": "Dynamic Programming (DP)",
            "topicId": "8.1",
            "topicTitle": "Dynamic Programming Patterns"
          },
          {
            "id": 833,
            "title": "Frog jump with K distances",
            "url": "https://leetcode.com/problems/frog-jump-with-k-distances/",
            "platform": "LeetCode",
            "chapterId": 8,
            "chapterTitle": "Dynamic Programming (DP)",
            "topicId": "8.1",
            "topicTitle": "Dynamic Programming Patterns"
          },
          {
            "id": 834,
            "title": "Gold Mine Problem",
            "url": "https://www.geeksforgeeks.org/gold-mine-problem/",
            "platform": "GeeksforGeeks",
            "chapterId": 8,
            "chapterTitle": "Dynamic Programming (DP)",
            "topicId": "8.1",
            "topicTitle": "Dynamic Programming Patterns"
          },
          {
            "id": 835,
            "title": "Grid Unique Paths : DP on Grids (DP8)",
            "url": "https://leetcode.com/problems/grid-unique-paths-dp-on-grids/",
            "platform": "LeetCode",
            "chapterId": 8,
            "chapterTitle": "Dynamic Programming (DP)",
            "topicId": "8.1",
            "topicTitle": "Dynamic Programming Patterns"
          },
          {
            "id": 836,
            "title": "House Robber",
            "url": "https://leetcode.com/problems/house-robber",
            "platform": "LeetCode",
            "chapterId": 8,
            "chapterTitle": "Dynamic Programming (DP)",
            "topicId": "8.1",
            "topicTitle": "Dynamic Programming Patterns"
          },
          {
            "id": 837,
            "title": "Implement queue using Linkedlist",
            "url": "https://leetcode.com/problems/implement-queue-using-linkedlist/",
            "platform": "LeetCode",
            "chapterId": 8,
            "chapterTitle": "Dynamic Programming (DP)",
            "topicId": "8.1",
            "topicTitle": "Dynamic Programming Patterns"
          },
          {
            "id": 838,
            "title": "Implement stack using Linkedlist",
            "url": "https://leetcode.com/problems/implement-stack-using-linkedlist/",
            "platform": "LeetCode",
            "chapterId": 8,
            "chapterTitle": "Dynamic Programming (DP)",
            "topicId": "8.1",
            "topicTitle": "Dynamic Programming Patterns"
          },
          {
            "id": 839,
            "title": "Insert Greatest Common Divisors in Linked List",
            "url": "https://leetcode.com/problems/insert-greatest-common-divisors-in-linked-list/",
            "platform": "LeetCode",
            "chapterId": 8,
            "chapterTitle": "Dynamic Programming (DP)",
            "topicId": "8.1",
            "topicTitle": "Dynamic Programming Patterns"
          },
          {
            "id": 840,
            "title": "Insert node before head in Doubly Linked List",
            "url": "https://leetcode.com/problems/insert-node-before-head-in-doubly-linked-list/",
            "platform": "LeetCode",
            "chapterId": 8,
            "chapterTitle": "Dynamic Programming (DP)",
            "topicId": "8.1",
            "topicTitle": "Dynamic Programming Patterns"
          },
          {
            "id": 841,
            "title": "Insertion at the head of Linked List",
            "url": "https://leetcode.com/problems/insertion-at-the-head-of-linked-list/",
            "platform": "LeetCode",
            "chapterId": 8,
            "chapterTitle": "Dynamic Programming (DP)",
            "topicId": "8.1",
            "topicTitle": "Dynamic Programming Patterns"
          },
          {
            "id": 842,
            "title": "Integer to English Words",
            "url": "https://leetcode.com/problems/integer-to-english-words",
            "platform": "LeetCode",
            "chapterId": 8,
            "chapterTitle": "Dynamic Programming (DP)",
            "topicId": "8.1",
            "topicTitle": "Dynamic Programming Patterns"
          },
          {
            "id": 843,
            "title": "Interleaving String",
            "url": "https://leetcode.com/problems/interleaving-string/",
            "platform": "LeetCode",
            "chapterId": 8,
            "chapterTitle": "Dynamic Programming (DP)",
            "topicId": "8.1",
            "topicTitle": "Dynamic Programming Patterns"
          },
          {
            "id": 844,
            "title": "Intersection in Y Shaped Lists",
            "url": "https://www.geeksforgeeks.org/problems/intersection-point-in-y-shapped-linked-lists/1",
            "platform": "GeeksforGeeks",
            "chapterId": 8,
            "chapterTitle": "Dynamic Programming (DP)",
            "topicId": "8.1",
            "topicTitle": "Dynamic Programming Patterns"
          },
          {
            "id": 845,
            "title": "Intersection of Two Linked Lists",
            "url": "https://leetcode.com/problems/intersection-of-two-linked-lists",
            "platform": "LeetCode",
            "chapterId": 8,
            "chapterTitle": "Dynamic Programming (DP)",
            "topicId": "8.1",
            "topicTitle": "Dynamic Programming Patterns"
          },
          {
            "id": 846,
            "title": "Introduction to DP",
            "url": "https://leetcode.com/problems/introduction-to-dp/",
            "platform": "LeetCode",
            "chapterId": 8,
            "chapterTitle": "Dynamic Programming (DP)",
            "topicId": "8.1",
            "topicTitle": "Dynamic Programming Patterns"
          },
          {
            "id": 847,
            "title": "Introduction to Singly LinkedList",
            "url": "https://leetcode.com/problems/introduction-to-singly-linkedlist/",
            "platform": "LeetCode",
            "chapterId": 8,
            "chapterTitle": "Dynamic Programming (DP)",
            "topicId": "8.1",
            "topicTitle": "Dynamic Programming Patterns"
          },
          {
            "id": 848,
            "title": "Knapsack with Duplicate Items",
            "url": "https://www.geeksforgeeks.org/problems/knapsack-with-duplicate-items4201/1",
            "platform": "GeeksforGeeks",
            "chapterId": 8,
            "chapterTitle": "Dynamic Programming (DP)",
            "topicId": "8.1",
            "topicTitle": "Dynamic Programming Patterns"
          },
          {
            "id": 849,
            "title": "Knight Dialer",
            "url": "https://leetcode.com/problems/knight-dialer",
            "platform": "LeetCode",
            "chapterId": 8,
            "chapterTitle": "Dynamic Programming (DP)",
            "topicId": "8.1",
            "topicTitle": "Dynamic Programming Patterns"
          },
          {
            "id": 850,
            "title": "Kth from End of Linked List",
            "url": "https://www.geeksforgeeks.org/problems/nth-node-from-end-of-linked-list/1",
            "platform": "GeeksforGeeks",
            "chapterId": 8,
            "chapterTitle": "Dynamic Programming (DP)",
            "topicId": "8.1",
            "topicTitle": "Dynamic Programming Patterns"
          },
          {
            "id": 851,
            "title": "Largest Independent Set Problem Dp 26",
            "url": "https://www.geeksforgeeks.org/largest-independent-set-problem-dp-26/",
            "platform": "GeeksforGeeks",
            "chapterId": 8,
            "chapterTitle": "Dynamic Programming (DP)",
            "topicId": "8.1",
            "topicTitle": "Dynamic Programming Patterns"
          },
          {
            "id": 852,
            "title": "LCS of three strings",
            "url": "https://www.geeksforgeeks.org/problems/lcs-of-three-strings0028/1",
            "platform": "GeeksforGeeks",
            "chapterId": 8,
            "chapterTitle": "Dynamic Programming (DP)",
            "topicId": "8.1",
            "topicTitle": "Dynamic Programming Patterns"
          },
          {
            "id": 853,
            "title": "Linked List Cycle",
            "url": "https://leetcode.com/problems/linked-list-cycle",
            "platform": "LeetCode",
            "chapterId": 8,
            "chapterTitle": "Dynamic Programming (DP)",
            "topicId": "8.1",
            "topicTitle": "Dynamic Programming Patterns"
          },
          {
            "id": 854,
            "title": "Longest Bitonic Subsequence",
            "url": "https://leetcode.com/problems/longest-bitonic-subsequence/",
            "platform": "LeetCode",
            "chapterId": 8,
            "chapterTitle": "Dynamic Programming (DP)",
            "topicId": "8.1",
            "topicTitle": "Dynamic Programming Patterns"
          },
          {
            "id": 855,
            "title": "Longest Common Subsequence",
            "url": "https://www.geeksforgeeks.org/problems/longest-common-subsequence-1587115620/1",
            "platform": "GeeksforGeeks",
            "chapterId": 8,
            "chapterTitle": "Dynamic Programming (DP)",
            "topicId": "8.1",
            "topicTitle": "Dynamic Programming Patterns"
          },
          {
            "id": 856,
            "title": "Longest Palindromic Subsequence Dp 12",
            "url": "https://www.geeksforgeeks.org/longest-palindromic-subsequence-dp-12/",
            "platform": "GeeksforGeeks",
            "chapterId": 8,
            "chapterTitle": "Dynamic Programming (DP)",
            "topicId": "8.1",
            "topicTitle": "Dynamic Programming Patterns"
          },
          {
            "id": 857,
            "title": "Longest String Chain",
            "url": "https://leetcode.com/problems/longest-string-chain/",
            "platform": "LeetCode",
            "chapterId": 8,
            "chapterTitle": "Dynamic Programming (DP)",
            "topicId": "8.1",
            "topicTitle": "Dynamic Programming Patterns"
          },
          {
            "id": 858,
            "title": "Longest Valid Parentheses",
            "url": "https://leetcode.com/problems/longest-valid-parentheses",
            "platform": "LeetCode",
            "chapterId": 8,
            "chapterTitle": "Dynamic Programming (DP)",
            "topicId": "8.1",
            "topicTitle": "Dynamic Programming Patterns"
          },
          {
            "id": 859,
            "title": "Matrix chain multiplication",
            "url": "https://leetcode.com/problems/matrix-chain-multiplication/",
            "platform": "LeetCode",
            "chapterId": 8,
            "chapterTitle": "Dynamic Programming (DP)",
            "topicId": "8.1",
            "topicTitle": "Dynamic Programming Patterns"
          },
          {
            "id": 860,
            "title": "Max Sum Increasing Subsequence",
            "url": "https://www.geeksforgeeks.org/problems/maximum-sum-increasing-subsequence4749/1",
            "platform": "GeeksforGeeks",
            "chapterId": 8,
            "chapterTitle": "Dynamic Programming (DP)",
            "topicId": "8.1",
            "topicTitle": "Dynamic Programming Patterns"
          },
          {
            "id": 861,
            "title": "Maximize The Cut Segments",
            "url": "https://www.geeksforgeeks.org/problems/cutted-segments1642/1",
            "platform": "GeeksforGeeks",
            "chapterId": 8,
            "chapterTitle": "Dynamic Programming (DP)",
            "topicId": "8.1",
            "topicTitle": "Dynamic Programming Patterns"
          },
          {
            "id": 862,
            "title": "Maximum difference of zeros and ones in binary string",
            "url": "https://www.geeksforgeeks.org/problems/maximum-difference-of-zeros-and-ones-in-binary-string4111/1",
            "platform": "GeeksforGeeks",
            "chapterId": 8,
            "chapterTitle": "Dynamic Programming (DP)",
            "topicId": "8.1",
            "topicTitle": "Dynamic Programming Patterns"
          },
          {
            "id": 863,
            "title": "Maximum Product Subarray",
            "url": "https://leetcode.com/problems/maximum-product-subarray",
            "platform": "LeetCode",
            "chapterId": 8,
            "chapterTitle": "Dynamic Programming (DP)",
            "topicId": "8.1",
            "topicTitle": "Dynamic Programming Patterns"
          },
          {
            "id": 864,
            "title": "Maximum Rectangle Area with all 1's|(DP-55)",
            "url": "https://leetcode.com/problems/maximum-rectangle-area-with-all-1-s/",
            "platform": "LeetCode",
            "chapterId": 8,
            "chapterTitle": "Dynamic Programming (DP)",
            "topicId": "8.1",
            "topicTitle": "Dynamic Programming Patterns"
          },
          {
            "id": 865,
            "title": "Merge Sort for Linked List",
            "url": "https://www.geeksforgeeks.org/problems/sort-a-linked-list/1",
            "platform": "GeeksforGeeks",
            "chapterId": 8,
            "chapterTitle": "Dynamic Programming (DP)",
            "topicId": "8.1",
            "topicTitle": "Dynamic Programming Patterns"
          },
          {
            "id": 866,
            "title": "Middle of a LinkedList [TortoiseHare Method]",
            "url": "https://leetcode.com/problems/middle-of-a-linkedlist-tortoisehare-method/",
            "platform": "LeetCode",
            "chapterId": 8,
            "chapterTitle": "Dynamic Programming (DP)",
            "topicId": "8.1",
            "topicTitle": "Dynamic Programming Patterns"
          },
          {
            "id": 867,
            "title": "Middle of the Linked List",
            "url": "https://leetcode.com/problems/middle-of-the-linked-list",
            "platform": "LeetCode",
            "chapterId": 8,
            "chapterTitle": "Dynamic Programming (DP)",
            "topicId": "8.1",
            "topicTitle": "Dynamic Programming Patterns"
          },
          {
            "id": 868,
            "title": "Min Cost Climbing Stairs",
            "url": "https://leetcode.com/problems/min-cost-climbing-stairs/",
            "platform": "LeetCode",
            "chapterId": 8,
            "chapterTitle": "Dynamic Programming (DP)",
            "topicId": "8.1",
            "topicTitle": "Dynamic Programming Patterns"
          },
          {
            "id": 869,
            "title": "Minimum Coins (DP - 20)",
            "url": "https://leetcode.com/problems/minimum-coins/",
            "platform": "LeetCode",
            "chapterId": 8,
            "chapterTitle": "Dynamic Programming (DP)",
            "topicId": "8.1",
            "topicTitle": "Dynamic Programming Patterns"
          },
          {
            "id": 870,
            "title": "Minimum Number of Arrows to Burst Balloons",
            "url": "https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/",
            "platform": "LeetCode",
            "chapterId": 8,
            "chapterTitle": "Dynamic Programming (DP)",
            "topicId": "8.1",
            "topicTitle": "Dynamic Programming Patterns"
          },
          {
            "id": 871,
            "title": "Move Last Element To Front Of A Given Linked List",
            "url": "https://www.geeksforgeeks.org/move-last-element-to-front-of-a-given-linked-list/",
            "platform": "GeeksforGeeks",
            "chapterId": 8,
            "chapterTitle": "Dynamic Programming (DP)",
            "topicId": "8.1",
            "topicTitle": "Dynamic Programming Patterns"
          },
          {
            "id": 872,
            "title": "Multiply two linked lists",
            "url": "https://www.geeksforgeeks.org/problems/multiply-two-linked-lists/1",
            "platform": "GeeksforGeeks",
            "chapterId": 8,
            "chapterTitle": "Dynamic Programming (DP)",
            "topicId": "8.1",
            "topicTitle": "Dynamic Programming Patterns"
          },
          {
            "id": 873,
            "title": "Odd Even Linked List",
            "url": "https://leetcode.com/problems/odd-even-linked-list",
            "platform": "LeetCode",
            "chapterId": 8,
            "chapterTitle": "Dynamic Programming (DP)",
            "topicId": "8.1",
            "topicTitle": "Dynamic Programming Patterns"
          },
          {
            "id": 874,
            "title": "Ones and Zeroes",
            "url": "https://leetcode.com/problems/ones-and-zeroes",
            "platform": "LeetCode",
            "chapterId": 8,
            "chapterTitle": "Dynamic Programming (DP)",
            "topicId": "8.1",
            "topicTitle": "Dynamic Programming Patterns"
          },
          {
            "id": 875,
            "title": "Optimal Strategy For A Game",
            "url": "https://www.geeksforgeeks.org/problems/optimal-strategy-for-a-game-1587115620/1",
            "platform": "GeeksforGeeks",
            "chapterId": 8,
            "chapterTitle": "Dynamic Programming (DP)",
            "topicId": "8.1",
            "topicTitle": "Dynamic Programming Patterns"
          },
          {
            "id": 876,
            "title": "Painting the Fence",
            "url": "https://www.geeksforgeeks.org/problems/painting-the-fence3727/1",
            "platform": "GeeksforGeeks",
            "chapterId": 8,
            "chapterTitle": "Dynamic Programming (DP)",
            "topicId": "8.1",
            "topicTitle": "Dynamic Programming Patterns"
          },
          {
            "id": 877,
            "title": "Palindrome Linked List",
            "url": "https://leetcode.com/problems/palindrome-linked-list",
            "platform": "LeetCode",
            "chapterId": 8,
            "chapterTitle": "Dynamic Programming (DP)",
            "topicId": "8.1",
            "topicTitle": "Dynamic Programming Patterns"
          },
          {
            "id": 878,
            "title": "Partition Equal Subset Sum",
            "url": "https://www.geeksforgeeks.org/problems/subset-sum-problem2014/1",
            "platform": "GeeksforGeeks",
            "chapterId": 8,
            "chapterTitle": "Dynamic Programming (DP)",
            "topicId": "8.1",
            "topicTitle": "Dynamic Programming Patterns"
          },
          {
            "id": 879,
            "title": "Partition List",
            "url": "https://leetcode.com/problems/partition-list",
            "platform": "LeetCode",
            "chapterId": 8,
            "chapterTitle": "Dynamic Programming (DP)",
            "topicId": "8.1",
            "topicTitle": "Dynamic Programming Patterns"
          },
          {
            "id": 880,
            "title": "Perfect Squares",
            "url": "https://leetcode.com/problems/perfect-squares/",
            "platform": "LeetCode",
            "chapterId": 8,
            "chapterTitle": "Dynamic Programming (DP)",
            "topicId": "8.1",
            "topicTitle": "Dynamic Programming Patterns"
          },
          {
            "id": 881,
            "title": "Print Longest Increasing Subsequence",
            "url": "https://www.geeksforgeeks.org/problems/printing-longest-increasing-subsequence/1",
            "platform": "GeeksforGeeks",
            "chapterId": 8,
            "chapterTitle": "Dynamic Programming (DP)",
            "topicId": "8.1",
            "topicTitle": "Dynamic Programming Patterns"
          },
          {
            "id": 882,
            "title": "Quick Sort on Linked List",
            "url": "https://www.geeksforgeeks.org/problems/quick-sort-on-linked-list/1",
            "platform": "GeeksforGeeks",
            "chapterId": 8,
            "chapterTitle": "Dynamic Programming (DP)",
            "topicId": "8.1",
            "topicTitle": "Dynamic Programming Patterns"
          },
          {
            "id": 883,
            "title": "Reach a given score",
            "url": "https://www.geeksforgeeks.org/problems/reach-a-given-score-1587115621/1",
            "platform": "GeeksforGeeks",
            "chapterId": 8,
            "chapterTitle": "Dynamic Programming (DP)",
            "topicId": "8.1",
            "topicTitle": "Dynamic Programming Patterns"
          },
          {
            "id": 884,
            "title": "Rearrange a given linked list in-place",
            "url": "https://www.geeksforgeeks.org/rearrange-a-given-linked-list-in-place/",
            "platform": "GeeksforGeeks",
            "chapterId": 8,
            "chapterTitle": "Dynamic Programming (DP)",
            "topicId": "8.1",
            "topicTitle": "Dynamic Programming Patterns"
          },
          {
            "id": 885,
            "title": "Rearrange a Linked List in Zig-Zag fashion",
            "url": "https://www.geeksforgeeks.org/problems/linked-list-in-zig-zag-fashion/1",
            "platform": "GeeksforGeeks",
            "chapterId": 8,
            "chapterTitle": "Dynamic Programming (DP)",
            "topicId": "8.1",
            "topicTitle": "Dynamic Programming Patterns"
          },
          {
            "id": 886,
            "title": "Recursively print all sentences that can be formed from list of word lists",
            "url": "https://www.geeksforgeeks.org/problems/recursively-print-all-sentences-that-can-be-formed-from-list-of-word-lists/1",
            "platform": "GeeksforGeeks",
            "chapterId": 8,
            "chapterTitle": "Dynamic Programming (DP)",
            "topicId": "8.1",
            "topicTitle": "Dynamic Programming Patterns"
          },
          {
            "id": 887,
            "title": "Regular Expression Matching",
            "url": "https://leetcode.com/problems/regular-expression-matching/",
            "platform": "LeetCode",
            "chapterId": 8,
            "chapterTitle": "Dynamic Programming (DP)",
            "topicId": "8.1",
            "topicTitle": "Dynamic Programming Patterns"
          },
          {
            "id": 888,
            "title": "Remove Linked List Elements",
            "url": "https://leetcode.com/problems/remove-linked-list-elements",
            "platform": "LeetCode",
            "chapterId": 8,
            "chapterTitle": "Dynamic Programming (DP)",
            "topicId": "8.1",
            "topicTitle": "Dynamic Programming Patterns"
          },
          {
            "id": 889,
            "title": "Remove loop in Linked List",
            "url": "https://www.geeksforgeeks.org/problems/remove-loop-in-linked-list/1",
            "platform": "GeeksforGeeks",
            "chapterId": 8,
            "chapterTitle": "Dynamic Programming (DP)",
            "topicId": "8.1",
            "topicTitle": "Dynamic Programming Patterns"
          },
          {
            "id": 890,
            "title": "Remove Nth Node From End of List",
            "url": "https://leetcode.com/problems/remove-nth-node-from-end-of-list",
            "platform": "LeetCode",
            "chapterId": 8,
            "chapterTitle": "Dynamic Programming (DP)",
            "topicId": "8.1",
            "topicTitle": "Dynamic Programming Patterns"
          },
          {
            "id": 891,
            "title": "Reorder List",
            "url": "https://leetcode.com/problems/reorder-list",
            "platform": "LeetCode",
            "chapterId": 8,
            "chapterTitle": "Dynamic Programming (DP)",
            "topicId": "8.1",
            "topicTitle": "Dynamic Programming Patterns"
          },
          {
            "id": 892,
            "title": "Reverse a LinkedList [Iterative]",
            "url": "https://leetcode.com/problems/reverse-a-linkedlist-iterative/",
            "platform": "LeetCode",
            "chapterId": 8,
            "chapterTitle": "Dynamic Programming (DP)",
            "topicId": "8.1",
            "topicTitle": "Dynamic Programming Patterns"
          },
          {
            "id": 893,
            "title": "Reverse Doubly Linked List Groups Given Size",
            "url": "https://www.geeksforgeeks.org/reverse-doubly-linked-list-groups-given-size/",
            "platform": "GeeksforGeeks",
            "chapterId": 8,
            "chapterTitle": "Dynamic Programming (DP)",
            "topicId": "8.1",
            "topicTitle": "Dynamic Programming Patterns"
          },
          {
            "id": 894,
            "title": "Reverse Linked List",
            "url": "https://leetcode.com/problems/reverse-linked-list",
            "platform": "LeetCode",
            "chapterId": 8,
            "chapterTitle": "Dynamic Programming (DP)",
            "topicId": "8.1",
            "topicTitle": "Dynamic Programming Patterns"
          },
          {
            "id": 895,
            "title": "Rod Cutting Problem | (DP - 24)",
            "url": "https://www.geeksforgeeks.org/problems/rod-cutting0840/1",
            "platform": "GeeksforGeeks",
            "chapterId": 8,
            "chapterTitle": "Dynamic Programming (DP)",
            "topicId": "8.1",
            "topicTitle": "Dynamic Programming Patterns"
          },
          {
            "id": 896,
            "title": "Rotate Doubly Linked List N Nodes",
            "url": "https://www.geeksforgeeks.org/rotate-doubly-linked-list-n-nodes/",
            "platform": "GeeksforGeeks",
            "chapterId": 8,
            "chapterTitle": "Dynamic Programming (DP)",
            "topicId": "8.1",
            "topicTitle": "Dynamic Programming Patterns"
          },
          {
            "id": 897,
            "title": "Rotate List",
            "url": "https://leetcode.com/problems/rotate-list",
            "platform": "LeetCode",
            "chapterId": 8,
            "chapterTitle": "Dynamic Programming (DP)",
            "topicId": "8.1",
            "topicTitle": "Dynamic Programming Patterns"
          },
          {
            "id": 898,
            "title": "Search in Linked List",
            "url": "https://leetcode.com/problems/search-in-linked-list/",
            "platform": "LeetCode",
            "chapterId": 8,
            "chapterTitle": "Dynamic Programming (DP)",
            "topicId": "8.1",
            "topicTitle": "Dynamic Programming Patterns"
          },
          {
            "id": 899,
            "title": "Segregate odd and even nodes in Linked List",
            "url": "https://leetcode.com/problems/segregate-odd-and-even-nodes-in-linked-list/",
            "platform": "LeetCode",
            "chapterId": 8,
            "chapterTitle": "Dynamic Programming (DP)",
            "topicId": "8.1",
            "topicTitle": "Dynamic Programming Patterns"
          },
          {
            "id": 900,
            "title": "Smallest range in K lists",
            "url": "https://www.geeksforgeeks.org/problems/find-smallest-range-containing-elements-from-k-lists/1",
            "platform": "GeeksforGeeks",
            "chapterId": 8,
            "chapterTitle": "Dynamic Programming (DP)",
            "topicId": "8.1",
            "topicTitle": "Dynamic Programming Patterns"
          },
          {
            "id": 901,
            "title": "Smallest Subset Sum Greater Elements",
            "url": "https://www.geeksforgeeks.org/smallest-subset-sum-greater-elements/",
            "platform": "GeeksforGeeks",
            "chapterId": 8,
            "chapterTitle": "Dynamic Programming (DP)",
            "topicId": "8.1",
            "topicTitle": "Dynamic Programming Patterns"
          },
          {
            "id": 902,
            "title": "Sort a linked list of 0s, 1s and 2s",
            "url": "https://www.geeksforgeeks.org/sort-a-linked-list-of-0s-1s-or-2s/",
            "platform": "GeeksforGeeks",
            "chapterId": 8,
            "chapterTitle": "Dynamic Programming (DP)",
            "topicId": "8.1",
            "topicTitle": "Dynamic Programming Patterns"
          },
          {
            "id": 903,
            "title": "Sort K Sorted Doubly Linked List",
            "url": "https://www.geeksforgeeks.org/sort-k-sorted-doubly-linked-list/",
            "platform": "GeeksforGeeks",
            "chapterId": 8,
            "chapterTitle": "Dynamic Programming (DP)",
            "topicId": "8.1",
            "topicTitle": "Dynamic Programming Patterns"
          },
          {
            "id": 904,
            "title": "Sort List",
            "url": "https://leetcode.com/problems/sort-list",
            "platform": "LeetCode",
            "chapterId": 8,
            "chapterTitle": "Dynamic Programming (DP)",
            "topicId": "8.1",
            "topicTitle": "Dynamic Programming Patterns"
          },
          {
            "id": 905,
            "title": "Space Optimized Solution Lcs",
            "url": "https://www.geeksforgeeks.org/space-optimized-solution-lcs/",
            "platform": "GeeksforGeeks",
            "chapterId": 8,
            "chapterTitle": "Dynamic Programming (DP)",
            "topicId": "8.1",
            "topicTitle": "Dynamic Programming Patterns"
          },
          {
            "id": 906,
            "title": "Split a Linked List into two halves",
            "url": "https://www.geeksforgeeks.org/problems/split-a-circular-linked-list-into-two-halves/1",
            "platform": "GeeksforGeeks",
            "chapterId": 8,
            "chapterTitle": "Dynamic Programming (DP)",
            "topicId": "8.1",
            "topicTitle": "Dynamic Programming Patterns"
          },
          {
            "id": 907,
            "title": "Stickler Thief",
            "url": "https://www.geeksforgeeks.org/problems/stickler-theif-1587115621/1",
            "platform": "GeeksforGeeks",
            "chapterId": 8,
            "chapterTitle": "Dynamic Programming (DP)",
            "topicId": "8.1",
            "topicTitle": "Dynamic Programming Patterns"
          },
          {
            "id": 908,
            "title": "Stock Buy and Sell",
            "url": "https://leetcode.com/problems/stock-buy-and-sell/",
            "platform": "LeetCode",
            "chapterId": 8,
            "chapterTitle": "Dynamic Programming (DP)",
            "topicId": "8.1",
            "topicTitle": "Dynamic Programming Patterns"
          },
          {
            "id": 909,
            "title": "Stock Buy and Sell – Max K Transactions Allowed",
            "url": "https://www.geeksforgeeks.org/problems/maximum-profit4657/1",
            "platform": "GeeksforGeeks",
            "chapterId": 8,
            "chapterTitle": "Dynamic Programming (DP)",
            "topicId": "8.1",
            "topicTitle": "Dynamic Programming Patterns"
          },
          {
            "id": 910,
            "title": "Stone Game",
            "url": "https://leetcode.com/problems/stone-game/",
            "platform": "LeetCode",
            "chapterId": 8,
            "chapterTitle": "Dynamic Programming (DP)",
            "topicId": "8.1",
            "topicTitle": "Dynamic Programming Patterns"
          },
          {
            "id": 911,
            "title": "Stone Game II",
            "url": "https://leetcode.com/problems/stone-game-ii/",
            "platform": "LeetCode",
            "chapterId": 8,
            "chapterTitle": "Dynamic Programming (DP)",
            "topicId": "8.1",
            "topicTitle": "Dynamic Programming Patterns"
          },
          {
            "id": 912,
            "title": "Subset sum equal to target (DP- 14)",
            "url": "https://www.geeksforgeeks.org/problems/subset-sum-problem-1611555638/1",
            "platform": "GeeksforGeeks",
            "chapterId": 8,
            "chapterTitle": "Dynamic Programming (DP)",
            "topicId": "8.1",
            "topicTitle": "Dynamic Programming Patterns"
          },
          {
            "id": 913,
            "title": "Subtraction in Linked List",
            "url": "https://www.geeksforgeeks.org/problems/subtraction-in-linked-list/1",
            "platform": "GeeksforGeeks",
            "chapterId": 8,
            "chapterTitle": "Dynamic Programming (DP)",
            "topicId": "8.1",
            "topicTitle": "Dynamic Programming Patterns"
          },
          {
            "id": 914,
            "title": "Super Egg Drop",
            "url": "https://leetcode.com/problems/super-egg-drop",
            "platform": "LeetCode",
            "chapterId": 8,
            "chapterTitle": "Dynamic Programming (DP)",
            "topicId": "8.1",
            "topicTitle": "Dynamic Programming Patterns"
          },
          {
            "id": 915,
            "title": "Target Sum",
            "url": "https://leetcode.com/problems/target-sum/",
            "platform": "LeetCode",
            "chapterId": 8,
            "chapterTitle": "Dynamic Programming (DP)",
            "topicId": "8.1",
            "topicTitle": "Dynamic Programming Patterns"
          },
          {
            "id": 916,
            "title": "Target Sum Combinations",
            "url": "https://www.geeksforgeeks.org/problems/combination-sum-1587115620/1",
            "platform": "GeeksforGeeks",
            "chapterId": 8,
            "chapterTitle": "Dynamic Programming (DP)",
            "topicId": "8.1",
            "topicTitle": "Dynamic Programming Patterns"
          },
          {
            "id": 917,
            "title": "Unbounded knapsack",
            "url": "https://leetcode.com/problems/unbounded-knapsack/",
            "platform": "LeetCode",
            "chapterId": 8,
            "chapterTitle": "Dynamic Programming (DP)",
            "topicId": "8.1",
            "topicTitle": "Dynamic Programming Patterns"
          },
          {
            "id": 918,
            "title": "Unique Paths",
            "url": "https://leetcode.com/problems/unique-paths",
            "platform": "LeetCode",
            "chapterId": 8,
            "chapterTitle": "Dynamic Programming (DP)",
            "topicId": "8.1",
            "topicTitle": "Dynamic Programming Patterns"
          },
          {
            "id": 919,
            "title": "Wildcard matching",
            "url": "https://leetcode.com/problems/wildcard-matching/",
            "platform": "LeetCode",
            "chapterId": 8,
            "chapterTitle": "Dynamic Programming (DP)",
            "topicId": "8.1",
            "topicTitle": "Dynamic Programming Patterns"
          },
          {
            "id": 920,
            "title": "Wildcard string matching",
            "url": "https://www.geeksforgeeks.org/problems/wildcard-string-matching1126/1",
            "platform": "GeeksforGeeks",
            "chapterId": 8,
            "chapterTitle": "Dynamic Programming (DP)",
            "topicId": "8.1",
            "topicTitle": "Dynamic Programming Patterns"
          },
          {
            "id": 921,
            "title": "Word Break",
            "url": "https://leetcode.com/problems/word-break",
            "platform": "LeetCode",
            "chapterId": 8,
            "chapterTitle": "Dynamic Programming (DP)",
            "topicId": "8.1",
            "topicTitle": "Dynamic Programming Patterns"
          },
          {
            "id": 922,
            "title": "Word Break",
            "url": "https://leetcode.com/problems/word-break",
            "platform": "LeetCode",
            "chapterId": 8,
            "chapterTitle": "Dynamic Programming (DP)",
            "topicId": "8.1",
            "topicTitle": "Dynamic Programming Patterns"
          }
        ]
      }
    ]
  },
  {
    "id": 9,
    "title": "Backtracking & Recursion",
    "expectedCount": 32,
    "icon": "🔄",
    "topics": [
      {
        "id": "9.1",
        "title": "Backtracking & Exhaustive Search",
        "expectedCount": 32,
        "problems": [
          {
            "id": 923,
            "title": "All Unique Permutations of an array",
            "url": "https://www.geeksforgeeks.org/problems/all-unique-permutations-of-an-array/1",
            "platform": "GeeksforGeeks",
            "chapterId": 9,
            "chapterTitle": "Backtracking & Recursion",
            "topicId": "9.1",
            "topicTitle": "Backtracking & Exhaustive Search"
          },
          {
            "id": 924,
            "title": "Combination Sum II",
            "url": "https://leetcode.com/problems/combination-sum-ii",
            "platform": "LeetCode",
            "chapterId": 9,
            "chapterTitle": "Backtracking & Recursion",
            "topicId": "9.1",
            "topicTitle": "Backtracking & Exhaustive Search"
          },
          {
            "id": 925,
            "title": "Combinations",
            "url": "https://leetcode.com/problems/combinations",
            "platform": "LeetCode",
            "chapterId": 9,
            "chapterTitle": "Backtracking & Recursion",
            "topicId": "9.1",
            "topicTitle": "Backtracking & Exhaustive Search"
          },
          {
            "id": 926,
            "title": "Combinations",
            "url": "https://leetcode.com/problems/combinations",
            "platform": "LeetCode",
            "chapterId": 9,
            "chapterTitle": "Backtracking & Recursion",
            "topicId": "9.1",
            "topicTitle": "Backtracking & Exhaustive Search"
          },
          {
            "id": 927,
            "title": "Count subsets with sum K",
            "url": "https://www.geeksforgeeks.org/problems/perfect-sum-problem5633/1",
            "platform": "GeeksforGeeks",
            "chapterId": 9,
            "chapterTitle": "Backtracking & Recursion",
            "topicId": "9.1",
            "topicTitle": "Backtracking & Exhaustive Search"
          },
          {
            "id": 928,
            "title": "Expression Add Operators",
            "url": "https://leetcode.com/problems/expression-add-operators/",
            "platform": "LeetCode",
            "chapterId": 9,
            "chapterTitle": "Backtracking & Recursion",
            "topicId": "9.1",
            "topicTitle": "Backtracking & Exhaustive Search"
          },
          {
            "id": 929,
            "title": "Generate Parentheses",
            "url": "https://leetcode.com/problems/generate-parentheses",
            "platform": "LeetCode",
            "chapterId": 9,
            "chapterTitle": "Backtracking & Recursion",
            "topicId": "9.1",
            "topicTitle": "Backtracking & Exhaustive Search"
          },
          {
            "id": 930,
            "title": "Letter Combinations of a Phone Number",
            "url": "https://leetcode.com/problems/letter-combinations-of-a-phone-number",
            "platform": "LeetCode",
            "chapterId": 9,
            "chapterTitle": "Backtracking & Recursion",
            "topicId": "9.1",
            "topicTitle": "Backtracking & Exhaustive Search"
          },
          {
            "id": 931,
            "title": "M-Coloring Problem",
            "url": "https://www.geeksforgeeks.org/problems/m-coloring-problem-1587115620/1",
            "platform": "GeeksforGeeks",
            "chapterId": 9,
            "chapterTitle": "Backtracking & Recursion",
            "topicId": "9.1",
            "topicTitle": "Backtracking & Exhaustive Search"
          },
          {
            "id": 932,
            "title": "Matchsticks to Square",
            "url": "https://leetcode.com/problems/matchsticks-to-square/",
            "platform": "LeetCode",
            "chapterId": 9,
            "chapterTitle": "Backtracking & Recursion",
            "topicId": "9.1",
            "topicTitle": "Backtracking & Exhaustive Search"
          },
          {
            "id": 933,
            "title": "N Queen",
            "url": "https://leetcode.com/problems/n-queen/",
            "platform": "LeetCode",
            "chapterId": 9,
            "chapterTitle": "Backtracking & Recursion",
            "topicId": "9.1",
            "topicTitle": "Backtracking & Exhaustive Search"
          },
          {
            "id": 934,
            "title": "N-Queens II",
            "url": "https://leetcode.com/problems/n-queens-ii/",
            "platform": "LeetCode",
            "chapterId": 9,
            "chapterTitle": "Backtracking & Recursion",
            "topicId": "9.1",
            "topicTitle": "Backtracking & Exhaustive Search"
          },
          {
            "id": 935,
            "title": "Palindrome Partitioning",
            "url": "https://leetcode.com/problems/palindrome-partitioning",
            "platform": "LeetCode",
            "chapterId": 9,
            "chapterTitle": "Backtracking & Recursion",
            "topicId": "9.1",
            "topicTitle": "Backtracking & Exhaustive Search"
          },
          {
            "id": 936,
            "title": "Partition a set into two subsets with minimum absolute sum difference",
            "url": "https://leetcode.com/problems/partition-a-set-into-two-subsets-with-minimum-absolute-sum-difference/",
            "platform": "LeetCode",
            "chapterId": 9,
            "chapterTitle": "Backtracking & Recursion",
            "topicId": "9.1",
            "topicTitle": "Backtracking & Exhaustive Search"
          },
          {
            "id": 937,
            "title": "Partition array to K subsets",
            "url": "https://www.geeksforgeeks.org/problems/partition-array-to-k-subsets/1",
            "platform": "GeeksforGeeks",
            "chapterId": 9,
            "chapterTitle": "Backtracking & Recursion",
            "topicId": "9.1",
            "topicTitle": "Backtracking & Exhaustive Search"
          },
          {
            "id": 938,
            "title": "Partition to K Equal Sum Subsets",
            "url": "https://leetcode.com/problems/partition-to-k-equal-sum-subsets/",
            "platform": "LeetCode",
            "chapterId": 9,
            "chapterTitle": "Backtracking & Recursion",
            "topicId": "9.1",
            "topicTitle": "Backtracking & Exhaustive Search"
          },
          {
            "id": 939,
            "title": "Permutations",
            "url": "https://leetcode.com/problems/permutations",
            "platform": "LeetCode",
            "chapterId": 9,
            "chapterTitle": "Backtracking & Recursion",
            "topicId": "9.1",
            "topicTitle": "Backtracking & Exhaustive Search"
          },
          {
            "id": 940,
            "title": "Permutations in array",
            "url": "https://www.geeksforgeeks.org/problems/permutations-in-array1747/1",
            "platform": "GeeksforGeeks",
            "chapterId": 9,
            "chapterTitle": "Backtracking & Recursion",
            "topicId": "9.1",
            "topicTitle": "Backtracking & Exhaustive Search"
          },
          {
            "id": 941,
            "title": "Printing Solutions N Queen Problem",
            "url": "https://www.geeksforgeeks.org/printing-solutions-n-queen-problem/",
            "platform": "GeeksforGeeks",
            "chapterId": 9,
            "chapterTitle": "Backtracking & Recursion",
            "topicId": "9.1",
            "topicTitle": "Backtracking & Exhaustive Search"
          },
          {
            "id": 942,
            "title": "Rat in a Maze",
            "url": "https://www.geeksforgeeks.org/problems/rat-in-a-maze-problem/1",
            "platform": "GeeksforGeeks",
            "chapterId": 9,
            "chapterTitle": "Backtracking & Recursion",
            "topicId": "9.1",
            "topicTitle": "Backtracking & Exhaustive Search"
          },
          {
            "id": 943,
            "title": "Remove Invalid Parentheses",
            "url": "https://leetcode.com/problems/remove-invalid-parentheses",
            "platform": "LeetCode",
            "chapterId": 9,
            "chapterTitle": "Backtracking & Recursion",
            "topicId": "9.1",
            "topicTitle": "Backtracking & Exhaustive Search"
          },
          {
            "id": 944,
            "title": "Solve the Sudoku",
            "url": "https://www.geeksforgeeks.org/problems/solve-the-sudoku-1587115621/1",
            "platform": "GeeksforGeeks",
            "chapterId": 9,
            "chapterTitle": "Backtracking & Recursion",
            "topicId": "9.1",
            "topicTitle": "Backtracking & Exhaustive Search"
          },
          {
            "id": 945,
            "title": "Solving Cryptarithmetic Puzzles",
            "url": "https://www.geeksforgeeks.org/solving-cryptarithmetic-puzzles/",
            "platform": "GeeksforGeeks",
            "chapterId": 9,
            "chapterTitle": "Backtracking & Recursion",
            "topicId": "9.1",
            "topicTitle": "Backtracking & Exhaustive Search"
          },
          {
            "id": 946,
            "title": "Stack Permutations Check If An Array Is Stack Permutation Of Other",
            "url": "https://www.geeksforgeeks.org/stack-permutations-check-if-an-array-is-stack-permutation-of-other/",
            "platform": "GeeksforGeeks",
            "chapterId": 9,
            "chapterTitle": "Backtracking & Recursion",
            "topicId": "9.1",
            "topicTitle": "Backtracking & Exhaustive Search"
          },
          {
            "id": 947,
            "title": "Subsets",
            "url": "https://leetcode.com/problems/subsets",
            "platform": "LeetCode",
            "chapterId": 9,
            "chapterTitle": "Backtracking & Recursion",
            "topicId": "9.1",
            "topicTitle": "Backtracking & Exhaustive Search"
          },
          {
            "id": 948,
            "title": "Subsets I",
            "url": "https://leetcode.com/problems/subsets-i/",
            "platform": "LeetCode",
            "chapterId": 9,
            "chapterTitle": "Backtracking & Recursion",
            "topicId": "9.1",
            "topicTitle": "Backtracking & Exhaustive Search"
          },
          {
            "id": 949,
            "title": "Sudoku Solver",
            "url": "https://leetcode.com/problems/sudoku-solver",
            "platform": "LeetCode",
            "chapterId": 9,
            "chapterTitle": "Backtracking & Recursion",
            "topicId": "9.1",
            "topicTitle": "Backtracking & Exhaustive Search"
          },
          {
            "id": 950,
            "title": "Sum of All Subsets XOR Total",
            "url": "https://leetcode.com/problems/sum-of-all-subsets-xor-total/",
            "platform": "LeetCode",
            "chapterId": 9,
            "chapterTitle": "Backtracking & Recursion",
            "topicId": "9.1",
            "topicTitle": "Backtracking & Exhaustive Search"
          },
          {
            "id": 951,
            "title": "The Knights Tour Problem Backtracking 1",
            "url": "https://www.geeksforgeeks.org/the-knights-tour-problem-backtracking-1/",
            "platform": "GeeksforGeeks",
            "chapterId": 9,
            "chapterTitle": "Backtracking & Recursion",
            "topicId": "9.1",
            "topicTitle": "Backtracking & Exhaustive Search"
          },
          {
            "id": 952,
            "title": "Tug of War",
            "url": "https://www.geeksforgeeks.org/tug-of-war/",
            "platform": "GeeksforGeeks",
            "chapterId": 9,
            "chapterTitle": "Backtracking & Recursion",
            "topicId": "9.1",
            "topicTitle": "Backtracking & Exhaustive Search"
          },
          {
            "id": 953,
            "title": "Valid Sudoku",
            "url": "https://leetcode.com/problems/valid-sudoku",
            "platform": "LeetCode",
            "chapterId": 9,
            "chapterTitle": "Backtracking & Recursion",
            "topicId": "9.1",
            "topicTitle": "Backtracking & Exhaustive Search"
          },
          {
            "id": 954,
            "title": "Word Search",
            "url": "https://leetcode.com/problems/word-search",
            "platform": "LeetCode",
            "chapterId": 9,
            "chapterTitle": "Backtracking & Recursion",
            "topicId": "9.1",
            "topicTitle": "Backtracking & Exhaustive Search"
          }
        ]
      }
    ]
  },
  {
    "id": 10,
    "title": "Tries & Advanced Data Structures",
    "expectedCount": 5,
    "icon": "🌳",
    "topics": [
      {
        "id": "10.1",
        "title": "Prefix Trees & Word Dictionaries",
        "expectedCount": 4,
        "problems": [
          {
            "id": 955,
            "title": "Find All Shortest Unique Prefixes To Represent Each Word In A Given List",
            "url": "https://www.geeksforgeeks.org/find-all-shortest-unique-prefixes-to-represent-each-word-in-a-given-list/",
            "platform": "GeeksforGeeks",
            "chapterId": 10,
            "chapterTitle": "Tries & Advanced Data Structures",
            "topicId": "10.1",
            "topicTitle": "Prefix Trees & Word Dictionaries"
          },
          {
            "id": 956,
            "title": "Implement Trie (Prefix Tree)",
            "url": "https://leetcode.com/problems/implement-trie-prefix-tree",
            "platform": "LeetCode",
            "chapterId": 10,
            "chapterTitle": "Tries & Advanced Data Structures",
            "topicId": "10.1",
            "topicTitle": "Prefix Trees & Word Dictionaries"
          },
          {
            "id": 957,
            "title": "Trie Implementation and Operations",
            "url": "https://leetcode.com/problems/trie-implementation-and-operations/",
            "platform": "LeetCode",
            "chapterId": 10,
            "chapterTitle": "Tries & Advanced Data Structures",
            "topicId": "10.1",
            "topicTitle": "Prefix Trees & Word Dictionaries"
          },
          {
            "id": 958,
            "title": "Trie Insert And Search",
            "url": "https://www.geeksforgeeks.org/trie-insert-and-search/",
            "platform": "GeeksforGeeks",
            "chapterId": 10,
            "chapterTitle": "Tries & Advanced Data Structures",
            "topicId": "10.1",
            "topicTitle": "Prefix Trees & Word Dictionaries"
          }
        ]
      },
      {
        "id": "10.2",
        "title": "Bitwise Trie & Maximum XOR",
        "expectedCount": 1,
        "problems": [
          {
            "id": 959,
            "title": "Bit PreRequisites for TRIE Problems",
            "url": "https://leetcode.com/problems/bit-prerequisites-for-trie-problems/",
            "platform": "LeetCode",
            "chapterId": 10,
            "chapterTitle": "Tries & Advanced Data Structures",
            "topicId": "10.2",
            "topicTitle": "Bitwise Trie & Maximum XOR"
          }
        ]
      }
    ]
  },
  {
    "id": 11,
    "title": "Bit Manipulation & Math",
    "expectedCount": 31,
    "icon": "🧮",
    "topics": [
      {
        "id": "11.1",
        "title": "Bit Manipulation & Number Theory",
        "expectedCount": 31,
        "problems": [
          {
            "id": 960,
            "title": "Bit Difference",
            "url": "https://www.geeksforgeeks.org/problems/bit-difference-1587115620/1",
            "platform": "GeeksforGeeks",
            "chapterId": 11,
            "chapterTitle": "Bit Manipulation & Math",
            "topicId": "11.1",
            "topicTitle": "Bit Manipulation & Number Theory"
          },
          {
            "id": 961,
            "title": "Bitwise AND of Numbers Range",
            "url": "https://leetcode.com/problems/bitwise-and-of-numbers-range/",
            "platform": "LeetCode",
            "chapterId": 11,
            "chapterTitle": "Bit Manipulation & Math",
            "topicId": "11.1",
            "topicTitle": "Bit Manipulation & Number Theory"
          },
          {
            "id": 962,
            "title": "Calculate Square Of A Number Without Using And Pow",
            "url": "https://www.geeksforgeeks.org/calculate-square-of-a-number-without-using-and-pow/#:~:text=Given%20an%20integer%20n%2C%20calculate,*%2C%20%2F%20and%20pow\\(\\",
            "platform": "GeeksforGeeks",
            "chapterId": 11,
            "chapterTitle": "Bit Manipulation & Math",
            "topicId": "11.1",
            "topicTitle": "Bit Manipulation & Number Theory"
          },
          {
            "id": 963,
            "title": "Check if the i-th bit is Set or Not",
            "url": "https://leetcode.com/problems/check-if-the-i-th-bit-is-set-or-not/",
            "platform": "LeetCode",
            "chapterId": 11,
            "chapterTitle": "Bit Manipulation & Math",
            "topicId": "11.1",
            "topicTitle": "Bit Manipulation & Number Theory"
          },
          {
            "id": 964,
            "title": "Copy Set Bits In A Range",
            "url": "https://www.geeksforgeeks.org/copy-set-bits-in-a-range/",
            "platform": "GeeksforGeeks",
            "chapterId": 11,
            "chapterTitle": "Bit Manipulation & Math",
            "topicId": "11.1",
            "topicTitle": "Bit Manipulation & Number Theory"
          },
          {
            "id": 965,
            "title": "Count set bits",
            "url": "https://www.geeksforgeeks.org/problems/count-total-set-bits-1587115620/1",
            "platform": "GeeksforGeeks",
            "chapterId": 11,
            "chapterTitle": "Bit Manipulation & Math",
            "topicId": "11.1",
            "topicTitle": "Bit Manipulation & Number Theory"
          },
          {
            "id": 966,
            "title": "Counting Bits",
            "url": "https://leetcode.com/problems/counting-bits",
            "platform": "LeetCode",
            "chapterId": 11,
            "chapterTitle": "Bit Manipulation & Math",
            "topicId": "11.1",
            "topicTitle": "Bit Manipulation & Number Theory"
          },
          {
            "id": 967,
            "title": "Divide Two Integers Without Using Multiplication Division Mod Operator",
            "url": "https://www.geeksforgeeks.org/divide-two-integers-without-using-multiplication-division-mod-operator/",
            "platform": "GeeksforGeeks",
            "chapterId": 11,
            "chapterTitle": "Bit Manipulation & Math",
            "topicId": "11.1",
            "topicTitle": "Bit Manipulation & Number Theory"
          },
          {
            "id": 968,
            "title": "Divide two numbers without multiplication and division",
            "url": "https://leetcode.com/problems/divide-two-numbers-without-multiplication-and-division/",
            "platform": "LeetCode",
            "chapterId": 11,
            "chapterTitle": "Bit Manipulation & Math",
            "topicId": "11.1",
            "topicTitle": "Bit Manipulation & Number Theory"
          },
          {
            "id": 969,
            "title": "Divisors of a Number",
            "url": "https://leetcode.com/problems/divisors-of-a-number/",
            "platform": "LeetCode",
            "chapterId": 11,
            "chapterTitle": "Bit Manipulation & Math",
            "topicId": "11.1",
            "topicTitle": "Bit Manipulation & Number Theory"
          },
          {
            "id": 970,
            "title": "Factorial of a given number",
            "url": "https://leetcode.com/problems/factorial-of-a-given-number/",
            "platform": "LeetCode",
            "chapterId": 11,
            "chapterTitle": "Bit Manipulation & Math",
            "topicId": "11.1",
            "topicTitle": "Bit Manipulation & Number Theory"
          },
          {
            "id": 971,
            "title": "Factorial Trailing Zeroes",
            "url": "https://leetcode.com/problems/factorial-trailing-zeroes/",
            "platform": "LeetCode",
            "chapterId": 11,
            "chapterTitle": "Bit Manipulation & Math",
            "topicId": "11.1",
            "topicTitle": "Bit Manipulation & Number Theory"
          },
          {
            "id": 972,
            "title": "Factorials of large numbers",
            "url": "https://www.geeksforgeeks.org/problems/factorials-of-large-numbers2508/1",
            "platform": "GeeksforGeeks",
            "chapterId": 11,
            "chapterTitle": "Bit Manipulation & Math",
            "topicId": "11.1",
            "topicTitle": "Bit Manipulation & Number Theory"
          },
          {
            "id": 973,
            "title": "Fibonacci Number",
            "url": "https://leetcode.com/problems/fibonacci-number/",
            "platform": "LeetCode",
            "chapterId": 11,
            "chapterTitle": "Bit Manipulation & Math",
            "topicId": "11.1",
            "topicTitle": "Bit Manipulation & Number Theory"
          },
          {
            "id": 974,
            "title": "Find position of set bit",
            "url": "https://www.geeksforgeeks.org/problems/find-position-of-set-bit3706/1",
            "platform": "GeeksforGeeks",
            "chapterId": 11,
            "chapterTitle": "Bit Manipulation & Math",
            "topicId": "11.1",
            "topicTitle": "Bit Manipulation & Number Theory"
          },
          {
            "id": 975,
            "title": "Introduction to Bits and Tricks",
            "url": "https://leetcode.com/problems/introduction-to-bits-and-tricks/",
            "platform": "LeetCode",
            "chapterId": 11,
            "chapterTitle": "Bit Manipulation & Math",
            "topicId": "11.1",
            "topicTitle": "Bit Manipulation & Number Theory"
          },
          {
            "id": 976,
            "title": "Max Points on a Line",
            "url": "https://leetcode.com/problems/max-points-on-a-line/",
            "platform": "LeetCode",
            "chapterId": 11,
            "chapterTitle": "Bit Manipulation & Math",
            "topicId": "11.1",
            "topicTitle": "Bit Manipulation & Number Theory"
          },
          {
            "id": 977,
            "title": "Maximum XOR of two numbers in an array",
            "url": "https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/",
            "platform": "LeetCode",
            "chapterId": 11,
            "chapterTitle": "Bit Manipulation & Math",
            "topicId": "11.1",
            "topicTitle": "Bit Manipulation & Number Theory"
          },
          {
            "id": 978,
            "title": "Maximum Xor with an element from an array",
            "url": "https://leetcode.com/problems/maximum-xor-with-an-element-from-an-array/",
            "platform": "LeetCode",
            "chapterId": 11,
            "chapterTitle": "Bit Manipulation & Math",
            "topicId": "11.1",
            "topicTitle": "Bit Manipulation & Number Theory"
          },
          {
            "id": 979,
            "title": "Minimum Bit Flips to Convert Number",
            "url": "https://leetcode.com/problems/minimum-bit-flips-to-convert-number/",
            "platform": "LeetCode",
            "chapterId": 11,
            "chapterTitle": "Bit Manipulation & Math",
            "topicId": "11.1",
            "topicTitle": "Bit Manipulation & Number Theory"
          },
          {
            "id": 980,
            "title": "Number of 1 Bits",
            "url": "https://leetcode.com/problems/number-of-1-bits",
            "platform": "LeetCode",
            "chapterId": 11,
            "chapterTitle": "Bit Manipulation & Math",
            "topicId": "11.1",
            "topicTitle": "Bit Manipulation & Number Theory"
          },
          {
            "id": 981,
            "title": "Palindrome Number",
            "url": "https://leetcode.com/problems/palindrome-number",
            "platform": "LeetCode",
            "chapterId": 11,
            "chapterTitle": "Bit Manipulation & Math",
            "topicId": "11.1",
            "topicTitle": "Bit Manipulation & Number Theory"
          },
          {
            "id": 982,
            "title": "Pow(x,n)",
            "url": "https://leetcode.com/problems/pow/",
            "platform": "LeetCode",
            "chapterId": 11,
            "chapterTitle": "Bit Manipulation & Math",
            "topicId": "11.1",
            "topicTitle": "Bit Manipulation & Number Theory"
          },
          {
            "id": 983,
            "title": "Power of 2",
            "url": "https://www.geeksforgeeks.org/problems/power-of-2-1587115620/1",
            "platform": "GeeksforGeeks",
            "chapterId": 11,
            "chapterTitle": "Bit Manipulation & Math",
            "topicId": "11.1",
            "topicTitle": "Bit Manipulation & Number Theory"
          },
          {
            "id": 984,
            "title": "Power Set",
            "url": "https://www.geeksforgeeks.org/problems/power-set4302/1",
            "platform": "GeeksforGeeks",
            "chapterId": 11,
            "chapterTitle": "Bit Manipulation & Math",
            "topicId": "11.1",
            "topicTitle": "Bit Manipulation & Number Theory"
          },
          {
            "id": 985,
            "title": "Power Set Bit Manipulation",
            "url": "https://leetcode.com/problems/power-set-bit-manipulation/",
            "platform": "LeetCode",
            "chapterId": 11,
            "chapterTitle": "Bit Manipulation & Math",
            "topicId": "11.1",
            "topicTitle": "Bit Manipulation & Number Theory"
          },
          {
            "id": 986,
            "title": "Reverse Bits",
            "url": "https://leetcode.com/problems/reverse-bits",
            "platform": "LeetCode",
            "chapterId": 11,
            "chapterTitle": "Bit Manipulation & Math",
            "topicId": "11.1",
            "topicTitle": "Bit Manipulation & Number Theory"
          },
          {
            "id": 987,
            "title": "Reverse Integer",
            "url": "https://leetcode.com/problems/reverse-integer",
            "platform": "LeetCode",
            "chapterId": 11,
            "chapterTitle": "Bit Manipulation & Math",
            "topicId": "11.1",
            "topicTitle": "Bit Manipulation & Number Theory"
          },
          {
            "id": 988,
            "title": "Set/Unset the rightmost unset bit",
            "url": "https://www.geeksforgeeks.org/problems/set-the-rightmost-unset-bit4436/1",
            "platform": "GeeksforGeeks",
            "chapterId": 11,
            "chapterTitle": "Bit Manipulation & Math",
            "topicId": "11.1",
            "topicTitle": "Bit Manipulation & Number Theory"
          },
          {
            "id": 989,
            "title": "Single Number",
            "url": "https://leetcode.com/problems/single-number",
            "platform": "LeetCode",
            "chapterId": 11,
            "chapterTitle": "Bit Manipulation & Math",
            "topicId": "11.1",
            "topicTitle": "Bit Manipulation & Number Theory"
          },
          {
            "id": 990,
            "title": "XOR of numbers in a given range",
            "url": "https://leetcode.com/problems/xor-of-numbers-in-a-given-range/",
            "platform": "LeetCode",
            "chapterId": 11,
            "chapterTitle": "Bit Manipulation & Math",
            "topicId": "11.1",
            "topicTitle": "Bit Manipulation & Number Theory"
          }
        ]
      }
    ]
  },
  {
    "id": 12,
    "title": "Greedy Algorithms",
    "expectedCount": 11,
    "icon": "🎯",
    "topics": [
      {
        "id": "12.1",
        "title": "Greedy Algorithms & Optimization",
        "expectedCount": 11,
        "problems": [
          {
            "id": 991,
            "title": "Assign Cookies",
            "url": "https://leetcode.com/problems/assign-cookies/",
            "platform": "LeetCode",
            "chapterId": 12,
            "chapterTitle": "Greedy Algorithms",
            "topicId": "12.1",
            "topicTitle": "Greedy Algorithms & Optimization"
          },
          {
            "id": 992,
            "title": "Candy",
            "url": "https://leetcode.com/problems/candy/",
            "platform": "LeetCode",
            "chapterId": 12,
            "chapterTitle": "Greedy Algorithms",
            "topicId": "12.1",
            "topicTitle": "Greedy Algorithms & Optimization"
          },
          {
            "id": 993,
            "title": "Gas Station",
            "url": "https://leetcode.com/problems/gas-station",
            "platform": "LeetCode",
            "chapterId": 12,
            "chapterTitle": "Greedy Algorithms",
            "topicId": "12.1",
            "topicTitle": "Greedy Algorithms & Optimization"
          },
          {
            "id": 994,
            "title": "Job Sequencing Problem",
            "url": "https://www.geeksforgeeks.org/problems/job-sequencing-problem-1587115620/1",
            "platform": "GeeksforGeeks",
            "chapterId": 12,
            "chapterTitle": "Greedy Algorithms",
            "topicId": "12.1",
            "topicTitle": "Greedy Algorithms & Optimization"
          },
          {
            "id": 995,
            "title": "Jump Game",
            "url": "https://leetcode.com/problems/jump-game",
            "platform": "LeetCode",
            "chapterId": 12,
            "chapterTitle": "Greedy Algorithms",
            "topicId": "12.1",
            "topicTitle": "Greedy Algorithms & Optimization"
          },
          {
            "id": 996,
            "title": "Jump Game VII",
            "url": "https://leetcode.com/problems/jump-game-vii/",
            "platform": "LeetCode",
            "chapterId": 12,
            "chapterTitle": "Greedy Algorithms",
            "topicId": "12.1",
            "topicTitle": "Greedy Algorithms & Optimization"
          },
          {
            "id": 997,
            "title": "K Centers Problem Set 1 Greedy Approximate Algorithm",
            "url": "https://www.geeksforgeeks.org/k-centers-problem-set-1-greedy-approximate-algorithm/",
            "platform": "GeeksforGeeks",
            "chapterId": 12,
            "chapterTitle": "Greedy Algorithms",
            "topicId": "12.1",
            "topicTitle": "Greedy Algorithms & Optimization"
          },
          {
            "id": 998,
            "title": "Lemonade Change",
            "url": "https://leetcode.com/problems/lemonade-change/",
            "platform": "LeetCode",
            "chapterId": 12,
            "chapterTitle": "Greedy Algorithms",
            "topicId": "12.1",
            "topicTitle": "Greedy Algorithms & Optimization"
          },
          {
            "id": 999,
            "title": "Minimize Max Distance to Gas Station",
            "url": "https://leetcode.com/problems/minimize-max-distance-to-gas-station/",
            "platform": "LeetCode",
            "chapterId": 12,
            "chapterTitle": "Greedy Algorithms",
            "topicId": "12.1",
            "topicTitle": "Greedy Algorithms & Optimization"
          },
          {
            "id": 1000,
            "title": "N meetings in one room",
            "url": "https://www.geeksforgeeks.org/problems/n-meetings-in-one-room-1587115620/1",
            "platform": "GeeksforGeeks",
            "chapterId": 12,
            "chapterTitle": "Greedy Algorithms",
            "topicId": "12.1",
            "topicTitle": "Greedy Algorithms & Optimization"
          },
          {
            "id": 1001,
            "title": "Shop in Candy Store",
            "url": "https://www.geeksforgeeks.org/problems/shop-in-candy-store1145/1",
            "platform": "GeeksforGeeks",
            "chapterId": 12,
            "chapterTitle": "Greedy Algorithms",
            "topicId": "12.1",
            "topicTitle": "Greedy Algorithms & Optimization"
          }
        ]
      }
    ]
  }
];

export const MASTER_PROBLEMS: ProblemItem[] = [
  {
    "id": 1,
    "title": "3Sum",
    "url": "https://leetcode.com/problems/3sum",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.1",
    "topicTitle": "Two Pointers & Sliding Window"
  },
  {
    "id": 2,
    "title": "3Sum Closest",
    "url": "https://leetcode.com/problems/3sum-closest",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.1",
    "topicTitle": "Two Pointers & Sliding Window"
  },
  {
    "id": 3,
    "title": "4Sum",
    "url": "https://leetcode.com/problems/4sum/",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.1",
    "topicTitle": "Two Pointers & Sliding Window"
  },
  {
    "id": 4,
    "title": "Boats to Save People",
    "url": "https://leetcode.com/problems/boats-to-save-people/",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.1",
    "topicTitle": "Two Pointers & Sliding Window"
  },
  {
    "id": 5,
    "title": "Check if two strings are anagram of each other",
    "url": "https://leetcode.com/problems/check-if-two-strings-are-anagram-of-each-other/",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.1",
    "topicTitle": "Two Pointers & Sliding Window"
  },
  {
    "id": 6,
    "title": "Container With Most Water",
    "url": "https://leetcode.com/problems/container-with-most-water",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.1",
    "topicTitle": "Two Pointers & Sliding Window"
  },
  {
    "id": 7,
    "title": "Count number of Nice subarrays",
    "url": "https://leetcode.com/problems/count-number-of-nice-subarrays/",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.1",
    "topicTitle": "Two Pointers & Sliding Window"
  },
  {
    "id": 8,
    "title": "Fruit Into Baskets",
    "url": "https://leetcode.com/problems/fruit-into-baskets/",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.1",
    "topicTitle": "Two Pointers & Sliding Window"
  },
  {
    "id": 9,
    "title": "Group Anagrams",
    "url": "https://leetcode.com/problems/group-anagrams",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.1",
    "topicTitle": "Two Pointers & Sliding Window"
  },
  {
    "id": 10,
    "title": "Is Subsequence",
    "url": "https://leetcode.com/problems/is-subsequence/",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.1",
    "topicTitle": "Two Pointers & Sliding Window"
  },
  {
    "id": 11,
    "title": "Max Consecutive Ones III",
    "url": "https://leetcode.com/problems/max-consecutive-ones-iii/",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.1",
    "topicTitle": "Two Pointers & Sliding Window"
  },
  {
    "id": 12,
    "title": "Minimum Size Subarray Sum",
    "url": "https://leetcode.com/problems/minimum-size-subarray-sum/",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.1",
    "topicTitle": "Two Pointers & Sliding Window"
  },
  {
    "id": 13,
    "title": "Minimum Window Subsequence",
    "url": "https://leetcode.com/problems/minimum-window-subsequence/",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.1",
    "topicTitle": "Two Pointers & Sliding Window"
  },
  {
    "id": 14,
    "title": "Move Zeroes",
    "url": "https://leetcode.com/problems/move-zeroes",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.1",
    "topicTitle": "Two Pointers & Sliding Window"
  },
  {
    "id": 15,
    "title": "Move Zeros to End",
    "url": "https://leetcode.com/problems/move-zeros-to-end/",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.1",
    "topicTitle": "Two Pointers & Sliding Window"
  },
  {
    "id": 16,
    "title": "Permutation In String",
    "url": "https://leetcode.com/problems/permutation-in-string/",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.1",
    "topicTitle": "Two Pointers & Sliding Window"
  },
  {
    "id": 17,
    "title": "Print Anagrams Together",
    "url": "https://www.geeksforgeeks.org/problems/print-anagrams-together/1",
    "platform": "GeeksforGeeks",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.1",
    "topicTitle": "Two Pointers & Sliding Window"
  },
  {
    "id": 18,
    "title": "Reverse words in a given string / Palindrome Check",
    "url": "https://leetcode.com/problems/reverse-words-in-a-given-string/",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.1",
    "topicTitle": "Two Pointers & Sliding Window"
  },
  {
    "id": 19,
    "title": "Reverse Words in a String",
    "url": "https://leetcode.com/problems/reverse-words-in-a-string",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.1",
    "topicTitle": "Two Pointers & Sliding Window"
  },
  {
    "id": 20,
    "title": "Subarrays with K Different Integers",
    "url": "https://leetcode.com/problems/subarrays-with-k-different-integers/",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.1",
    "topicTitle": "Two Pointers & Sliding Window"
  },
  {
    "id": 21,
    "title": "Trapping Rainwater",
    "url": "https://leetcode.com/problems/trapping-rain-water/",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.1",
    "topicTitle": "Two Pointers & Sliding Window"
  },
  {
    "id": 22,
    "title": "Two Sum",
    "url": "https://leetcode.com/problems/two-sum",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.1",
    "topicTitle": "Two Pointers & Sliding Window"
  },
  {
    "id": 23,
    "title": "Two sum -Pairs with 0 Sum",
    "url": "https://www.geeksforgeeks.org/problems/count-pairs-with-given-sum5022/1",
    "platform": "GeeksforGeeks",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.1",
    "topicTitle": "Two Pointers & Sliding Window"
  },
  {
    "id": 24,
    "title": "Valid Anagram",
    "url": "https://leetcode.com/problems/valid-anagram",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.1",
    "topicTitle": "Two Pointers & Sliding Window"
  },
  {
    "id": 25,
    "title": "Valid Palindrome",
    "url": "https://leetcode.com/problems/valid-palindrome",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.1",
    "topicTitle": "Two Pointers & Sliding Window"
  },
  {
    "id": 26,
    "title": "Basic Hashing",
    "url": "https://leetcode.com/problems/basic-hashing/",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.2",
    "topicTitle": "Prefix Sums & Frequency Hashing"
  },
  {
    "id": 27,
    "title": "Contains Duplicate",
    "url": "https://leetcode.com/problems/contains-duplicate",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.2",
    "topicTitle": "Prefix Sums & Frequency Hashing"
  },
  {
    "id": 28,
    "title": "Contiguous Array",
    "url": "https://leetcode.com/problems/contiguous-array",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.2",
    "topicTitle": "Prefix Sums & Frequency Hashing"
  },
  {
    "id": 29,
    "title": "Design HashMap",
    "url": "https://leetcode.com/problems/design-hashmap/",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.2",
    "topicTitle": "Prefix Sums & Frequency Hashing"
  },
  {
    "id": 30,
    "title": "Design HashSet",
    "url": "https://leetcode.com/problems/design-hashset/",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.2",
    "topicTitle": "Prefix Sums & Frequency Hashing"
  },
  {
    "id": 31,
    "title": "Hashing In Strings | Theory",
    "url": "https://leetcode.com/problems/hashing-in-strings-theory/",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.2",
    "topicTitle": "Prefix Sums & Frequency Hashing"
  },
  {
    "id": 32,
    "title": "Insert Delete GetRandom O(1)",
    "url": "https://leetcode.com/problems/insert-delete-getrandom-o1",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.2",
    "topicTitle": "Prefix Sums & Frequency Hashing"
  },
  {
    "id": 33,
    "title": "Longest Consecutive Sequence",
    "url": "https://leetcode.com/problems/longest-consecutive-sequence",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.2",
    "topicTitle": "Prefix Sums & Frequency Hashing"
  },
  {
    "id": 34,
    "title": "Print subarray with maximum subarray sum (extended version of above problem)",
    "url": "https://leetcode.com/problems/print-subarray-with-maximum-subarray-sum/",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.2",
    "topicTitle": "Prefix Sums & Frequency Hashing"
  },
  {
    "id": 35,
    "title": "Product of Array Except Self",
    "url": "https://leetcode.com/problems/product-of-array-except-self",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.2",
    "topicTitle": "Prefix Sums & Frequency Hashing"
  },
  {
    "id": 36,
    "title": "Random Pick with Weight",
    "url": "https://leetcode.com/problems/random-pick-with-weight",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.2",
    "topicTitle": "Prefix Sums & Frequency Hashing"
  },
  {
    "id": 37,
    "title": "Subarray Sum Equals K",
    "url": "https://leetcode.com/problems/subarray-sum-equals-k",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.2",
    "topicTitle": "Prefix Sums & Frequency Hashing"
  },
  {
    "id": 38,
    "title": "Subarray Sums Divisible by K",
    "url": "https://leetcode.com/problems/subarray-sums-divisible-by-k",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.2",
    "topicTitle": "Prefix Sums & Frequency Hashing"
  },
  {
    "id": 39,
    "title": "Car Pooling",
    "url": "https://leetcode.com/problems/car-pooling/",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.3",
    "topicTitle": "Intervals & Sweep-Line"
  },
  {
    "id": 40,
    "title": "Employee Free Time",
    "url": "https://leetcode.com/problems/employee-free-time",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.3",
    "topicTitle": "Intervals & Sweep-Line"
  },
  {
    "id": 41,
    "title": "Insert Interval",
    "url": "https://leetcode.com/problems/insert-interval",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.3",
    "topicTitle": "Intervals & Sweep-Line"
  },
  {
    "id": 42,
    "title": "Meeting Rooms",
    "url": "https://leetcode.com/problems/meeting-rooms",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.3",
    "topicTitle": "Intervals & Sweep-Line"
  },
  {
    "id": 43,
    "title": "Merge Intervals",
    "url": "https://leetcode.com/problems/merge-intervals",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.3",
    "topicTitle": "Intervals & Sweep-Line"
  },
  {
    "id": 44,
    "title": "Merge Overlapping Subintervals",
    "url": "https://leetcode.com/problems/merge-overlapping-subintervals/",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.3",
    "topicTitle": "Intervals & Sweep-Line"
  },
  {
    "id": 45,
    "title": "Minimum Interval to Include Each Query",
    "url": "https://leetcode.com/problems/minimum-interval-to-include-each-query/",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.3",
    "topicTitle": "Intervals & Sweep-Line"
  },
  {
    "id": 46,
    "title": "Minimum number of platforms required for a railway",
    "url": "https://leetcode.com/problems/minimum-number-of-platforms-required-for-a-railway/",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.3",
    "topicTitle": "Intervals & Sweep-Line"
  },
  {
    "id": 47,
    "title": "Minimum Platforms",
    "url": "https://www.geeksforgeeks.org/problems/minimum-platforms-1587115620/1",
    "platform": "GeeksforGeeks",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.3",
    "topicTitle": "Intervals & Sweep-Line"
  },
  {
    "id": 48,
    "title": "Overlapping Intervals",
    "url": "https://www.geeksforgeeks.org/problems/overlapping-intervals--170633/1",
    "platform": "GeeksforGeeks",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.3",
    "topicTitle": "Intervals & Sweep-Line"
  },
  {
    "id": 49,
    "title": "Build a Matrix With Conditions",
    "url": "https://leetcode.com/problems/build-a-matrix-with-conditions/",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.4",
    "topicTitle": "2D Matrices & State Transformations"
  },
  {
    "id": 50,
    "title": "Find A Specific Pair In Matrix",
    "url": "https://www.geeksforgeeks.org/find-a-specific-pair-in-matrix/",
    "platform": "GeeksforGeeks",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.4",
    "topicTitle": "2D Matrices & State Transformations"
  },
  {
    "id": 51,
    "title": "Find the string in grid",
    "url": "https://www.geeksforgeeks.org/problems/find-the-string-in-grid0111/1",
    "platform": "GeeksforGeeks",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.4",
    "topicTitle": "2D Matrices & State Transformations"
  },
  {
    "id": 52,
    "title": "Game of Life",
    "url": "https://leetcode.com/problems/game-of-life",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.4",
    "topicTitle": "2D Matrices & State Transformations"
  },
  {
    "id": 53,
    "title": "Given a matrix of â€˜Oâ€™ and â€˜Xâ€™, replace â€˜Oâ€™ with â€˜Xâ€™ if surrounded by â€˜Xâ€™",
    "url": "https://www.geeksforgeeks.org/given-matrix-o-x-replace-o-x-surrounded-x/",
    "platform": "GeeksforGeeks",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.4",
    "topicTitle": "2D Matrices & State Transformations"
  },
  {
    "id": 54,
    "title": "Largest Area Rectangular Sub Matrix Equal Number 1s 0s",
    "url": "https://www.geeksforgeeks.org/largest-area-rectangular-sub-matrix-equal-number-1s-0s/",
    "platform": "GeeksforGeeks",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.4",
    "topicTitle": "2D Matrices & State Transformations"
  },
  {
    "id": 55,
    "title": "Largest Rectangular Sub Matrix Whose Sum 0",
    "url": "https://www.geeksforgeeks.org/largest-rectangular-sub-matrix-whose-sum-0/",
    "platform": "GeeksforGeeks",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.4",
    "topicTitle": "2D Matrices & State Transformations"
  },
  {
    "id": 56,
    "title": "Largest square formed in a matrix",
    "url": "https://www.geeksforgeeks.org/problems/largest-square-formed-in-a-matrix0806/1",
    "platform": "GeeksforGeeks",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.4",
    "topicTitle": "2D Matrices & State Transformations"
  },
  {
    "id": 57,
    "title": "Longest Increasing Path in a Matrix",
    "url": "https://leetcode.com/problems/longest-increasing-path-in-a-matrix",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.4",
    "topicTitle": "2D Matrices & State Transformations"
  },
  {
    "id": 58,
    "title": "Longest Possible Route in a Matrix with Hurdles",
    "url": "https://www.geeksforgeeks.org/problems/longest-possible-route-in-a-matrix-with-hurdles/1",
    "platform": "GeeksforGeeks",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.4",
    "topicTitle": "2D Matrices & State Transformations"
  },
  {
    "id": 59,
    "title": "Print the matrix in spiral manner",
    "url": "https://leetcode.com/problems/print-the-matrix-in-spiral-manner/",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.4",
    "topicTitle": "2D Matrices & State Transformations"
  },
  {
    "id": 60,
    "title": "Rotate A Matrix By 90 Degree In Clockwise Direction Without Using Any Extra Space",
    "url": "https://www.geeksforgeeks.org/rotate-a-matrix-by-90-degree-in-clockwise-direction-without-using-any-extra-space/",
    "platform": "GeeksforGeeks",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.4",
    "topicTitle": "2D Matrices & State Transformations"
  },
  {
    "id": 61,
    "title": "Rotate Image",
    "url": "https://leetcode.com/problems/rotate-image",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.4",
    "topicTitle": "2D Matrices & State Transformations"
  },
  {
    "id": 62,
    "title": "Rotate matrix by 90 degrees",
    "url": "https://leetcode.com/problems/rotate-matrix-by-90-degrees/",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.4",
    "topicTitle": "2D Matrices & State Transformations"
  },
  {
    "id": 63,
    "title": "Set Matrix Zeroes",
    "url": "https://leetcode.com/problems/remove-duplicates-from-sorted-array",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.4",
    "topicTitle": "2D Matrices & State Transformations"
  },
  {
    "id": 64,
    "title": "Spiral Matrix",
    "url": "https://leetcode.com/problems/spiral-matrix",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.4",
    "topicTitle": "2D Matrices & State Transformations"
  },
  {
    "id": 65,
    "title": "Transpose Matrix",
    "url": "https://leetcode.com/problems/transpose-matrix/",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.4",
    "topicTitle": "2D Matrices & State Transformations"
  },
  {
    "id": 66,
    "title": "Unique rows in boolean matrix",
    "url": "https://www.geeksforgeeks.org/problems/unique-rows-in-boolean-matrix/1",
    "platform": "GeeksforGeeks",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.4",
    "topicTitle": "2D Matrices & State Transformations"
  },
  {
    "id": 67,
    "title": "Zig Zag or Spiral Traversal",
    "url": "https://leetcode.com/problems/zig-zag-or-spiral-traversal/",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.4",
    "topicTitle": "2D Matrices & State Transformations"
  },
  {
    "id": 68,
    "title": "A Program To Check If Strings Are Rotations Of Each Other",
    "url": "https://www.geeksforgeeks.org/a-program-to-check-if-strings-are-rotations-of-each-other/",
    "platform": "GeeksforGeeks",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 69,
    "title": "Add Binary",
    "url": "https://leetcode.com/problems/add-binary",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 70,
    "title": "AGGRCOW",
    "url": "https://www.spoj.com/problems/AGGRCOW/",
    "platform": "SPOJ",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 71,
    "title": "ANARC05B",
    "url": "https://www.spoj.com/problems/ANARC05B/",
    "platform": "SPOJ",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 72,
    "title": "Arithmetic Expression Evalution",
    "url": "https://www.geeksforgeeks.org/arithmetic-expression-evalution/#:~:text=The%20stack%20organization%20is%20very,i.e.%2C%20A%20%2B%20B\\",
    "platform": "GeeksforGeeks",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 73,
    "title": "Arithmetic Number",
    "url": "https://www.geeksforgeeks.org/problems/arithmetic-number2815/1",
    "platform": "GeeksforGeeks",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 74,
    "title": "ARRANGE",
    "url": "https://www.spoj.com/problems/ARRANGE/",
    "platform": "SPOJ",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 75,
    "title": "Array Subset",
    "url": "https://www.geeksforgeeks.org/problems/array-subset-of-another-array2317/1",
    "platform": "GeeksforGeeks",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 76,
    "title": "Backspace String Compare",
    "url": "https://leetcode.com/problems/backspace-string-compare",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 77,
    "title": "Balanced Paranthesis",
    "url": "https://leetcode.com/problems/balanced-paranthesis/",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 78,
    "title": "Beautiful Arrangement",
    "url": "https://leetcode.com/problems/beautiful-arrangement",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 79,
    "title": "Binary Subarrays With Sum",
    "url": "https://leetcode.com/problems/binary-subarrays-with-sum/",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 80,
    "title": "Boyer Moore Algorithm for Pattern Searching",
    "url": "https://www.geeksforgeeks.org/boyer-moore-algorithm-for-pattern-searching/",
    "platform": "GeeksforGeeks",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 81,
    "title": "Buy Maximum Stocks Stocks Can Bought Th Day",
    "url": "https://www.geeksforgeeks.org/buy-maximum-stocks-stocks-can-bought-th-day/",
    "platform": "GeeksforGeeks",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 82,
    "title": "Car Fleet",
    "url": "https://leetcode.com/problems/car-fleet/",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 83,
    "title": "Check if a Number is Odd or Not",
    "url": "https://leetcode.com/problems/check-if-a-number-is-odd-or-not/",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 84,
    "title": "Check if there exists a subsequence with sum K",
    "url": "https://leetcode.com/problems/check-if-there-exists-a-subsequence-with-sum-k/",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 85,
    "title": "CHOCOLA",
    "url": "https://www.spoj.com/problems/CHOCOLA/",
    "platform": "SPOJ",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 86,
    "title": "CHOCOLA - Chocolate",
    "url": "https://www.spoj.com/problems/CHOCOLA/",
    "platform": "SPOJ",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 87,
    "title": "Chocolate Distribution Problem",
    "url": "https://www.geeksforgeeks.org/problems/chocolate-distribution-problem3825/1",
    "platform": "GeeksforGeeks",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 88,
    "title": "Choose and Swap",
    "url": "https://www.geeksforgeeks.org/problems/choose-and-swap0531/1",
    "platform": "GeeksforGeeks",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 89,
    "title": "Coin Game Winner Every Player Three Choices",
    "url": "https://www.geeksforgeeks.org/coin-game-winner-every-player-three-choices/",
    "platform": "GeeksforGeeks",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 90,
    "title": "Concatenation of Array",
    "url": "https://leetcode.com/problems/concatenation-of-array/",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 91,
    "title": "Construct a BT from Preorder and Inorder",
    "url": "https://leetcode.com/problems/construct-a-bt-from-preorder-and-inorder/",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 92,
    "title": "Convert Sentence Equivalent Mobile Numeric Keypad Sequence",
    "url": "https://www.geeksforgeeks.org/convert-sentence-equivalent-mobile-numeric-keypad-sequence/",
    "platform": "GeeksforGeeks",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 93,
    "title": "Count and Say",
    "url": "https://leetcode.com/problems/count-and-say",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 94,
    "title": "Count Derangements Permutation Such That No Element Appears In Its Original Position",
    "url": "https://www.geeksforgeeks.org/count-derangements-permutation-such-that-no-element-appears-in-its-original-position/",
    "platform": "GeeksforGeeks",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 95,
    "title": "Count Good Numbers",
    "url": "https://leetcode.com/problems/count-good-numbers/",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 96,
    "title": "Count of Range Sum",
    "url": "https://leetcode.com/problems/count-of-range-sum",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 97,
    "title": "Count Palindromic Subsequences",
    "url": "https://www.geeksforgeeks.org/problems/count-palindromic-subsequences/1",
    "platform": "GeeksforGeeks",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 98,
    "title": "Count partitions with given difference",
    "url": "https://www.geeksforgeeks.org/problems/partitions-with-given-difference/1",
    "platform": "GeeksforGeeks",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 99,
    "title": "Count Squares",
    "url": "https://www.geeksforgeeks.org/problems/count-squares3649/1",
    "platform": "GeeksforGeeks",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 100,
    "title": "Count subarrays with given sum",
    "url": "https://leetcode.com/problems/count-subarrays-with-given-sum/",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 101,
    "title": "Count Subsequences Product Less K",
    "url": "https://www.geeksforgeeks.org/count-subsequences-product-less-k/",
    "platform": "GeeksforGeeks",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 102,
    "title": "Count the Number of Set Bi",
    "url": "https://leetcode.com/problems/count-the-number-of-set-bi/",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 103,
    "title": "Count the Reversals",
    "url": "https://www.geeksforgeeks.org/problems/count-the-reversals0401/1",
    "platform": "GeeksforGeeks",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 104,
    "title": "Count total nodes in a complete BT",
    "url": "https://leetcode.com/problems/count-total-nodes-in-a-complete-bt/",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 105,
    "title": "Counting Frequencies of Array Elements",
    "url": "https://leetcode.com/problems/counting-frequencies-of-array-elements/",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 106,
    "title": "Cpp Basics",
    "url": "https://leetcode.com/problems/cpp-basics/",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 107,
    "title": "Critical Connections in a Network",
    "url": "https://leetcode.com/problems/critical-connections-in-a-network",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 108,
    "title": "DEFKIN",
    "url": "https://www.spoj.com/problems/DEFKIN/",
    "platform": "SPOJ",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 109,
    "title": "Delete and Earn",
    "url": "https://leetcode.com/problems/delete-and-earn",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 110,
    "title": "Delete nodes having greater value on right",
    "url": "https://www.geeksforgeeks.org/problems/delete-nodes-having-greater-value-on-right/1",
    "platform": "GeeksforGeeks",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 111,
    "title": "Design Add and Search Words Data Structure",
    "url": "https://leetcode.com/problems/design-add-and-search-words-data-structure",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 112,
    "title": "Design In-Memory File System",
    "url": "https://leetcode.com/problems/design-in-memory-file-system",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 113,
    "title": "Detect Squares",
    "url": "https://leetcode.com/problems/detect-squares/",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 114,
    "title": "DFS",
    "url": "https://leetcode.com/problems/dfs/",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 115,
    "title": "DIEHARD",
    "url": "https://www.spoj.com/problems/DIEHARD/",
    "platform": "SPOJ",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 116,
    "title": "Different Ways to Evaluate a Boolean Expression",
    "url": "https://leetcode.com/problems/different-ways-to-evaluate-a-boolean-expression/",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 117,
    "title": "Djisktra's Algorithm",
    "url": "https://leetcode.com/problems/djisktra-s-algorithm/",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 118,
    "title": "Easy and Medium",
    "url": "https://leetcode.com/problems/easy-and-medium/",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 119,
    "title": "EKO",
    "url": "https://www.spoj.com/problems/EKO/",
    "platform": "SPOJ",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 120,
    "title": "Evaluate Division",
    "url": "https://leetcode.com/problems/evaluate-division",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 121,
    "title": "Evaluation of Postfix Expression",
    "url": "https://www.geeksforgeeks.org/problems/evaluation-of-postfix-expression1735/1",
    "platform": "GeeksforGeeks",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 122,
    "title": "Excel Sheet Column Title",
    "url": "https://leetcode.com/problems/excel-sheet-column-title",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 123,
    "title": "Extra Characters in a String",
    "url": "https://leetcode.com/problems/extra-characters-in-a-string/",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 124,
    "title": "Find Count Number Given String Present 2d Character Array",
    "url": "https://www.geeksforgeeks.org/find-count-number-given-string-present-2d-character-array/",
    "platform": "GeeksforGeeks",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 125,
    "title": "Find If There Is A Path Of More Than K Length From A Source",
    "url": "https://www.geeksforgeeks.org/find-if-there-is-a-path-of-more-than-k-length-from-a-source/",
    "platform": "GeeksforGeeks",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 126,
    "title": "Find in Mountain Array",
    "url": "https://leetcode.com/problems/find-in-mountain-array/",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 127,
    "title": "Find Maximum Meetings In One Room",
    "url": "https://www.geeksforgeeks.org/find-maximum-meetings-in-one-room/",
    "platform": "GeeksforGeeks",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 128,
    "title": "Find missing number",
    "url": "https://leetcode.com/problems/find-missing-number/",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 129,
    "title": "Find out how many times the array is rotated",
    "url": "https://leetcode.com/problems/find-out-how-many-times-the-array-is-rotated/",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 130,
    "title": "Find Pair Given Difference",
    "url": "https://www.geeksforgeeks.org/problems/find-pair-given-difference1559/1",
    "platform": "GeeksforGeeks",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 131,
    "title": "Find row with maximum 1's",
    "url": "https://leetcode.com/problems/find-row-with-maximum-1-s/",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 132,
    "title": "Find Shortest Safe Route In A Path With Landmines",
    "url": "https://www.geeksforgeeks.org/find-shortest-safe-route-in-a-path-with-landmines/",
    "platform": "GeeksforGeeks",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 133,
    "title": "Find square root of a number",
    "url": "https://leetcode.com/problems/sqrtx/",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 134,
    "title": "Find the Duplicate Number",
    "url": "https://leetcode.com/problems/find-the-duplicate-number",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 135,
    "title": "Find the Index of the First Occurrence in a String",
    "url": "https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 136,
    "title": "Find The K Th Permutation Sequence Of First N Natural Numbers",
    "url": "https://www.geeksforgeeks.org/find-the-k-th-permutation-sequence-of-first-n-natural-numbers/",
    "platform": "GeeksforGeeks",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 137,
    "title": "Find the Most Competitive Subsequence",
    "url": "https://leetcode.com/problems/find-the-most-competitive-subsequence",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 138,
    "title": "Find the number that appears once, and other numbers twice.",
    "url": "https://leetcode.com/problems/find-the-number-that-appears-once-and-other-numbers-twice/",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 139,
    "title": "Find the repeating and missing number",
    "url": "https://leetcode.com/problems/find-the-repeating-and-missing-number/",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 140,
    "title": "Find the Town Judge",
    "url": "https://leetcode.com/problems/find-the-town-judge/",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 141,
    "title": "First and last occurrence",
    "url": "https://leetcode.com/problems/first-and-last-occurrence/",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 142,
    "title": "First negative in every window of size k",
    "url": "https://www.geeksforgeeks.org/problems/first-negative-integer-in-every-window-of-size-k3345/1",
    "platform": "GeeksforGeeks",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 143,
    "title": "For loops",
    "url": "https://leetcode.com/problems/for-loops/",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 144,
    "title": "Four Sum",
    "url": "https://leetcode.com/problems/4sum",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 145,
    "title": "Function To Find Number Of Customers Who Could Not Get A Computer",
    "url": "https://www.geeksforgeeks.org/function-to-find-number-of-customers-who-could-not-get-a-computer/",
    "platform": "GeeksforGeeks",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 146,
    "title": "Functions (Pass by Reference and Value)",
    "url": "https://leetcode.com/problems/functions/",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 147,
    "title": "Game with String",
    "url": "https://www.geeksforgeeks.org/problems/game-with-string4100/1",
    "platform": "GeeksforGeeks",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 148,
    "title": "GCJ101BB",
    "url": "https://www.spoj.com/problems/GCJ101BB/",
    "platform": "SPOJ",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 149,
    "title": "Generate Binary Strings Without Consecutive 1s",
    "url": "https://leetcode.com/problems/generate-binary-strings-without-consecutive-1s/",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 150,
    "title": "GERGOVIA",
    "url": "https://www.spoj.com/problems/GERGOVIA/",
    "platform": "SPOJ",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 151,
    "title": "Given N Appointments Find Conflicting Appointments",
    "url": "https://www.geeksforgeeks.org/given-n-appointments-find-conflicting-appointments/",
    "platform": "GeeksforGeeks",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 152,
    "title": "Greatest Common Divisor of Strings",
    "url": "https://leetcode.com/problems/greatest-common-divisor-of-strings/",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 153,
    "title": "Greatest Common Divisor Traversal",
    "url": "https://leetcode.com/problems/greatest-common-divisor-traversal/",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 154,
    "title": "Guess Number Higher Or Lower",
    "url": "https://leetcode.com/problems/guess-number-higher-or-lower/",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 155,
    "title": "Hand of Straights",
    "url": "https://leetcode.com/problems/hand-of-straights/",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 156,
    "title": "Happy Number",
    "url": "https://leetcode.com/problems/happy-number/",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 157,
    "title": "Hard",
    "url": "https://leetcode.com/problems/hard/",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 158,
    "title": "Highest Occurring Element in an Array",
    "url": "https://leetcode.com/problems/highest-occurring-element-in-an-array/",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 159,
    "title": "Huffman Encoding",
    "url": "https://www.geeksforgeeks.org/problems/huffman-encoding3345/1",
    "platform": "GeeksforGeeks",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 160,
    "title": "If ElseIf",
    "url": "https://leetcode.com/problems/if-elseif/",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 161,
    "title": "Infix to Prefix Conversion",
    "url": "https://leetcode.com/problems/infix-to-prefix-conversion/",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 162,
    "title": "Input Output",
    "url": "https://leetcode.com/problems/input-output/",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 163,
    "title": "Integer Break",
    "url": "https://leetcode.com/problems/integer-break/",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 164,
    "title": "Integer to Roman",
    "url": "https://leetcode.com/problems/integer-to-roman",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 165,
    "title": "Interleaved Strings",
    "url": "https://www.geeksforgeeks.org/problems/interleaved-strings/1",
    "platform": "GeeksforGeeks",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 166,
    "title": "Island Perimeter",
    "url": "https://leetcode.com/problems/island-perimeter/",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 167,
    "title": "Isomorphic String",
    "url": "https://leetcode.com/problems/isomorphic-string/",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 168,
    "title": "K-th element of two Arrays",
    "url": "https://www.geeksforgeeks.org/problems/k-th-element-of-two-sorted-array1317/1",
    "platform": "GeeksforGeeks",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 169,
    "title": "K-th Largest Sum Contiguous Subarray",
    "url": "https://www.geeksforgeeks.org/problems/k-th-largest-sum-contiguous-subarray/1",
    "platform": "GeeksforGeeks",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 170,
    "title": "Kadane's Algorithm",
    "url": "https://www.geeksforgeeks.org/problems/kadanes-algorithm-1587115620/1",
    "platform": "GeeksforGeeks",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 171,
    "title": "KMP Algorithm or LPS array",
    "url": "https://leetcode.com/problems/kmp-algorithm-or-lps-array/",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 172,
    "title": "Kth Missing Positive Number",
    "url": "https://leetcode.com/problems/kth-missing-positive-number/",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 173,
    "title": "Largest Divisible Subset",
    "url": "https://leetcode.com/problems/largest-divisible-subset/",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 174,
    "title": "Largest Element",
    "url": "https://leetcode.com/problems/largest-element/",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 175,
    "title": "Largest Odd Number in a String",
    "url": "https://leetcode.com/problems/largest-odd-number-in-a-string/",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 176,
    "title": "Leaders in an Array",
    "url": "https://www.geeksforgeeks.org/problems/leaders-in-an-array-1587115620/1",
    "platform": "GeeksforGeeks",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 177,
    "title": "Left Rotate Array by K Places",
    "url": "https://leetcode.com/problems/left-rotate-array-by-k-places/",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 178,
    "title": "Length of Last Word",
    "url": "https://leetcode.com/problems/length-of-last-word/",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 179,
    "title": "Longest Common Prefix",
    "url": "https://leetcode.com/problems/longest-common-prefix",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 180,
    "title": "Longest happy prefix",
    "url": "https://leetcode.com/problems/longest-happy-prefix/",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 181,
    "title": "Longest Happy String",
    "url": "https://leetcode.com/problems/longest-happy-string/",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 182,
    "title": "Longest Palindrome",
    "url": "https://leetcode.com/problems/longest-palindrome",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 183,
    "title": "Longest Prefix Suffix",
    "url": "https://www.geeksforgeeks.org/problems/longest-prefix-suffix2527/1",
    "platform": "GeeksforGeeks",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 184,
    "title": "Longest Repeating Character Replacement",
    "url": "https://leetcode.com/problems/longest-repeating-character-replacement",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 185,
    "title": "Longest Repeating Subsequence",
    "url": "https://www.geeksforgeeks.org/problems/longest-repeating-subsequence2004/1",
    "platform": "GeeksforGeeks",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 186,
    "title": "Longest subarray with given sum K(positives)",
    "url": "https://leetcode.com/problems/longest-subarray-with-given-sum-k/",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 187,
    "title": "Longest subarray with sum K",
    "url": "https://leetcode.com/problems/longest-subarray-with-sum-k/",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 188,
    "title": "Longest subsequence-1",
    "url": "https://www.geeksforgeeks.org/problems/longest-subsequence-such-that-difference-between-adjacents-is-one4724/1",
    "platform": "GeeksforGeeks",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 189,
    "title": "Longest Turbulent Subarray",
    "url": "https://leetcode.com/problems/longest-turbulent-subarray/",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 190,
    "title": "M",
    "url": "https://leetcode.com/problems/m/",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 191,
    "title": "Making A Large Island",
    "url": "https://leetcode.com/problems/making-a-large-island",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 192,
    "title": "Max Area of Island",
    "url": "https://leetcode.com/problems/max-area-of-island/",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 193,
    "title": "Maximal Square",
    "url": "https://leetcode.com/problems/maximal-square",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 194,
    "title": "Maximize sum after K negations",
    "url": "https://www.geeksforgeeks.org/problems/maximize-sum-after-k-negations1149/1",
    "platform": "GeeksforGeeks",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 195,
    "title": "Maximum And Minimum In An Array",
    "url": "https://www.geeksforgeeks.org/maximum-and-minimum-in-an-array/",
    "platform": "GeeksforGeeks",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 196,
    "title": "Maximum Consecutive Ones",
    "url": "https://leetcode.com/problems/maximum-consecutive-ones/",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 197,
    "title": "Maximum Depth in BT",
    "url": "https://leetcode.com/problems/maximum-depth-in-bt/",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 198,
    "title": "Maximum Length of Pair Chain",
    "url": "https://leetcode.com/problems/maximum-length-of-pair-chain",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 199,
    "title": "Maximum Length of Repeated Subarray",
    "url": "https://leetcode.com/problems/maximum-length-of-repeated-subarray",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 200,
    "title": "Maximum Number of Visible Points",
    "url": "https://leetcode.com/problems/maximum-number-of-visible-points",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 201,
    "title": "Maximum of minimum for every window size",
    "url": "https://www.geeksforgeeks.org/problems/maximum-of-minimum-for-every-window-size3453/1",
    "platform": "GeeksforGeeks",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 202,
    "title": "Maximum Points You Can Obtain from Cards",
    "url": "https://leetcode.com/problems/maximum-points-you-can-obtain-from-cards",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 203,
    "title": "Maximum Product of Three Numbers",
    "url": "https://leetcode.com/problems/maximum-product-of-three-numbers",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 204,
    "title": "Maximum Profit in Job Scheduling",
    "url": "https://leetcode.com/problems/maximum-profit-in-job-scheduling",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 205,
    "title": "Maximum Rectangles",
    "url": "https://leetcode.com/problems/maximum-rectangles/",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 206,
    "title": "Maximum Subarray",
    "url": "https://leetcode.com/problems/maximum-subarray",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 207,
    "title": "Maximum Subsequence Sum Such That No Three Are Consecutive",
    "url": "https://www.geeksforgeeks.org/maximum-subsequence-sum-such-that-no-three-are-consecutive/",
    "platform": "GeeksforGeeks",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 208,
    "title": "Maximum Sum Absolute Difference Array",
    "url": "https://www.geeksforgeeks.org/maximum-sum-absolute-difference-array/",
    "platform": "GeeksforGeeks",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 209,
    "title": "Maximum Sum Circular Subarray",
    "url": "https://leetcode.com/problems/maximum-sum-circular-subarray/",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 210,
    "title": "Maximum Sum Combination",
    "url": "https://leetcode.com/problems/maximum-sum-combination/",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 211,
    "title": "Maximum sum of non adjacent elements",
    "url": "https://leetcode.com/problems/maximum-sum-of-non-adjacent-elements/",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 212,
    "title": "Maximum Trains Stoppage Can Provided",
    "url": "https://www.geeksforgeeks.org/maximum-trains-stoppage-can-provided/",
    "platform": "GeeksforGeeks",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 213,
    "title": "Merge Strings Alternately",
    "url": "https://leetcode.com/problems/merge-strings-alternately/",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 214,
    "title": "Merge Triplets to Form Target Triplet",
    "url": "https://leetcode.com/problems/merge-triplets-to-form-target-triplet/",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 215,
    "title": "Merge Without Extra Space",
    "url": "https://www.geeksforgeeks.org/problems/merge-two-sorted-arrays-1587115620/1",
    "platform": "GeeksforGeeks",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 216,
    "title": "Min Number of Flips",
    "url": "https://www.geeksforgeeks.org/problems/min-number-of-flips3210/1",
    "platform": "GeeksforGeeks",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 217,
    "title": "Minimize Cash Flow among a given set of friends who have borrowed money from each other",
    "url": "https://www.geeksforgeeks.org/minimize-cash-flow-among-given-set-friends-borrowed-money/",
    "platform": "GeeksforGeeks",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 218,
    "title": "Minimize Cash Flow Among Given Set Friends Borrowed Money",
    "url": "https://www.geeksforgeeks.org/minimize-cash-flow-among-given-set-friends-borrowed-money/",
    "platform": "GeeksforGeeks",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 219,
    "title": "Minimize the Heights II",
    "url": "https://www.geeksforgeeks.org/problems/minimize-the-heights3351/1",
    "platform": "GeeksforGeeks",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 220,
    "title": "Minimum Array End",
    "url": "https://leetcode.com/problems/minimum-array-end/",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 221,
    "title": "Minimum Characters Added Front Make String Palindrome",
    "url": "https://www.geeksforgeeks.org/minimum-characters-added-front-make-string-palindrome/",
    "platform": "GeeksforGeeks",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 222,
    "title": "Minimum Cost Cut Board Squares",
    "url": "https://www.geeksforgeeks.org/minimum-cost-cut-board-squares/",
    "platform": "GeeksforGeeks",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 223,
    "title": "Minimum cost to cut the stick",
    "url": "https://leetcode.com/problems/minimum-cost-to-cut-the-stick/",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 224,
    "title": "Minimum Cost to Merge Stones",
    "url": "https://leetcode.com/problems/minimum-cost-to-merge-stones",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 225,
    "title": "Minimum Deletions to Make Character Frequencies Unique",
    "url": "https://leetcode.com/problems/minimum-deletions-to-make-character-frequencies-unique",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 226,
    "title": "Minimum Edges Reverse Make Path Source Destination",
    "url": "https://www.geeksforgeeks.org/minimum-edges-reverse-make-path-source-destination/",
    "platform": "GeeksforGeeks",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 227,
    "title": "Minimum Insertion Steps to Make a String Palindrome",
    "url": "https://leetcode.com/problems/minimum-insertion-steps-to-make-a-string-palindrome",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 228,
    "title": "Minimum insertions or deletions to convert string A to B",
    "url": "https://leetcode.com/problems/minimum-insertions-or-deletions-to-convert-string-a-to-b/",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 229,
    "title": "Minimum Jumps",
    "url": "https://www.geeksforgeeks.org/problems/minimum-number-of-jumps-1587115620/1",
    "platform": "GeeksforGeeks",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 230,
    "title": "Minimum Moves to Equal Array Elements",
    "url": "https://leetcode.com/problems/minimum-moves-to-equal-array-elements-ii",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 231,
    "title": "Minimum Number of Refueling Stops",
    "url": "https://leetcode.com/problems/minimum-number-of-refueling-stops",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 232,
    "title": "Minimum Removals Array Make Max Min K",
    "url": "http://geeksforgeeks.org/minimum-removals-array-make-max-min-k/",
    "platform": "GeeksforGeeks",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 233,
    "title": "Minimum sum",
    "url": "https://www.geeksforgeeks.org/problems/minimum-sum4058/1",
    "platform": "GeeksforGeeks",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 234,
    "title": "Minimum Sum Absolute Difference Pairs Two Arrays",
    "url": "https://www.geeksforgeeks.org/minimum-sum-absolute-difference-pairs-two-arrays/",
    "platform": "GeeksforGeeks",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 235,
    "title": "Minimum swaps and K together",
    "url": "https://www.geeksforgeeks.org/problems/minimum-swaps-required-to-bring-all-elements-less-than-or-equal-to-k-together4847/1",
    "platform": "GeeksforGeeks",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 236,
    "title": "Minimum Time to Make Rope Colorful",
    "url": "https://leetcode.com/problems/minimum-time-to-make-rope-colorful",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 237,
    "title": "Missing And Repeating",
    "url": "https://www.geeksforgeeks.org/problems/find-missing-and-repeating2512/1",
    "platform": "GeeksforGeeks",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 238,
    "title": "Missing Number",
    "url": "https://leetcode.com/problems/missing-number",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 239,
    "title": "Mobile numeric keypad",
    "url": "https://www.geeksforgeeks.org/problems/mobile-numeric-keypad5456/1",
    "platform": "GeeksforGeeks",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 240,
    "title": "Move Negative Numbers Beginning Positive End Constant Extra Space",
    "url": "https://www.geeksforgeeks.org/move-negative-numbers-beginning-positive-end-constant-extra-space/",
    "platform": "GeeksforGeeks",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 241,
    "title": "Multiply Strings",
    "url": "https://leetcode.com/problems/multiply-strings/",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 242,
    "title": "N-th Tribonacci Number",
    "url": "https://leetcode.com/problems/n-th-tribonacci-number/",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 243,
    "title": "nCr",
    "url": "https://www.geeksforgeeks.org/problems/ncr1019/1",
    "platform": "GeeksforGeeks",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 244,
    "title": "Next Permutation",
    "url": "https://leetcode.com/problems/next-permutation",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 245,
    "title": "Ninja and his Friends",
    "url": "https://leetcode.com/problems/ninja-and-his-friends/",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 246,
    "title": "Ninja's training",
    "url": "https://www.geeksforgeeks.org/problems/geeks-training/1",
    "platform": "GeeksforGeeks",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 247,
    "title": "Number of Greater Elements to the Right",
    "url": "https://leetcode.com/problems/number-of-greater-elements-to-the-right/",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 248,
    "title": "Number of ways to arrive at destination",
    "url": "https://leetcode.com/problems/number-of-ways-to-arrive-at-destination/",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 249,
    "title": "Optimum Location Point Minimize Total Distance",
    "url": "https://www.geeksforgeeks.org/optimum-location-point-minimize-total-distance/#:~:text=We%20need%20to%20find%20a,set%20of%20points%20is%20minimum.&text=In%20above%20figure%20optimum%20location,is%20minimum%20obtainable%20total%20distance.",
    "platform": "GeeksforGeeks",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 250,
    "title": "Pairs with certain difference",
    "url": "https://www.geeksforgeeks.org/problems/pairs-with-specific-difference1533/1",
    "platform": "GeeksforGeeks",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 251,
    "title": "Palindrome Pairs",
    "url": "https://leetcode.com/problems/palindrome-pairs",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 252,
    "title": "Palindrome String",
    "url": "https://www.geeksforgeeks.org/problems/palindrome-string0817/1",
    "platform": "GeeksforGeeks",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 253,
    "title": "Palindromic Array",
    "url": "https://www.geeksforgeeks.org/problems/palindromic-array-1587115620/1",
    "platform": "GeeksforGeeks",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 254,
    "title": "Partition Array for Maximum Sum",
    "url": "https://leetcode.com/problems/partition-array-for-maximum-sum/",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 255,
    "title": "Partition Labels",
    "url": "https://leetcode.com/problems/partition-labels/",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 256,
    "title": "Pascal's Triangle I",
    "url": "https://leetcode.com/problems/pascal-s-triangle-i/",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 257,
    "title": "Pattern 1",
    "url": "https://leetcode.com/problems/pattern-1/",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 258,
    "title": "Pattern 20",
    "url": "https://leetcode.com/problems/pattern-20/",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 259,
    "title": "Permutation Coefficient",
    "url": "https://www.geeksforgeeks.org/permutation-coefficient/",
    "platform": "GeeksforGeeks",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 260,
    "title": "Permute two arrays such that sum of every pair is greater or equal to K",
    "url": "https://www.geeksforgeeks.org/permute-two-arrays-sum-every-pair-greater-equal-k/",
    "platform": "GeeksforGeeks",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 261,
    "title": "Phone directory",
    "url": "https://www.geeksforgeeks.org/problems/phone-directory4628/1",
    "platform": "GeeksforGeeks",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 262,
    "title": "Plus One",
    "url": "https://leetcode.com/problems/plus-one/",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 263,
    "title": "Postfix Evaluation",
    "url": "https://www.geeksforgeeks.org/problems/evaluation-of-postfix-expression1735/1",
    "platform": "GeeksforGeeks",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 264,
    "title": "Postfix to Prefix Conversion",
    "url": "https://leetcode.com/problems/postfix-to-prefix-conversion/",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 265,
    "title": "PRATA",
    "url": "https://www.spoj.com/problems/PRATA/",
    "platform": "SPOJ",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 266,
    "title": "Pre, Post, Inorder in one traversal",
    "url": "https://leetcode.com/problems/pre-post-inorder-in-one-traversal/",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 267,
    "title": "Predecessor and Successor",
    "url": "https://www.geeksforgeeks.org/problems/predecessor-and-successor/1",
    "platform": "GeeksforGeeks",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 268,
    "title": "Prefix to Infix Conversion",
    "url": "https://leetcode.com/problems/prefix-to-infix-conversion/",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 269,
    "title": "Preorder To Postorder",
    "url": "https://www.geeksforgeeks.org/problems/preorder-to-postorder4423/1",
    "platform": "GeeksforGeeks",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 270,
    "title": "Preorder Traversal",
    "url": "https://leetcode.com/problems/preorder-traversal/",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 271,
    "title": "Preorder, Inorder, and Postorder Traversal in one Traversal",
    "url": "https://leetcode.com/problems/preorder-inorder-and-postorder-traversal-in-one-traversal/",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 272,
    "title": "Print 1 to N using Recursion",
    "url": "https://leetcode.com/problems/print-1-to-n-using-recursion/",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 273,
    "title": "Print name N times using recursion",
    "url": "https://leetcode.com/problems/print-name-n-times-using-recursion/",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 274,
    "title": "Print Subsequences String",
    "url": "https://www.geeksforgeeks.org/print-subsequences-string/",
    "platform": "GeeksforGeeks",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 275,
    "title": "Product array puzzle",
    "url": "https://www.geeksforgeeks.org/problems/product-array-puzzle4525/1",
    "platform": "GeeksforGeeks",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 276,
    "title": "Program Generate Possible Valid Ip Addresses Given String",
    "url": "https://www.geeksforgeeks.org/program-generate-possible-valid-ip-addresses-given-string/",
    "platform": "GeeksforGeeks",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 277,
    "title": "Program Nth Catalan Number",
    "url": "https://www.geeksforgeeks.org/program-nth-catalan-number/",
    "platform": "GeeksforGeeks",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 278,
    "title": "Rabin Karp Algorithm",
    "url": "https://leetcode.com/problems/rabin-karp-algorithm/",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 279,
    "title": "Rabin-Karp Algorithm for Pattern Searching",
    "url": "https://www.geeksforgeeks.org/rabin-karp-algorithm-for-pattern-searching/",
    "platform": "GeeksforGeeks",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 280,
    "title": "Range Sum Query - Mutable",
    "url": "https://leetcode.com/problems/range-sum-query-mutable",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 281,
    "title": "Ransom Note",
    "url": "https://leetcode.com/problems/ransom-note",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 282,
    "title": "rasta and kheshtak",
    "url": "https://www.hackerearth.com/practice/algorithms/searching/binary-search/practice-problems/algorithm/rasta-and-kheshtak/",
    "platform": "HackerEarth",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 283,
    "title": "Rearrange characters",
    "url": "https://www.geeksforgeeks.org/problems/rearrange-characters4649/1",
    "platform": "GeeksforGeeks",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 284,
    "title": "Recursive Implementation of atoi()",
    "url": "https://leetcode.com/problems/recursive-implementation-of-atoi/",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 285,
    "title": "Remove Boxes",
    "url": "https://leetcode.com/problems/remove-boxes",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 286,
    "title": "Remove Consecutive Characters",
    "url": "https://www.geeksforgeeks.org/problems/consecutive-elements2306/1",
    "platform": "GeeksforGeeks",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 287,
    "title": "Remove Element",
    "url": "https://leetcode.com/problems/remove-element/",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 288,
    "title": "Replace Elements by Their Rank",
    "url": "https://leetcode.com/problems/replace-elements-by-their-rank/",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 289,
    "title": "Replace every element with the least greater element on its right",
    "url": "https://www.geeksforgeeks.org/problems/replace-every-element-with-the-least-greater-element-on-its-right/1",
    "platform": "GeeksforGeeks",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 290,
    "title": "Requirements needed to construct a unique BT",
    "url": "https://leetcode.com/problems/requirements-needed-to-construct-a-unique-bt/",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 291,
    "title": "Restore the Array From Adjacent Pairs",
    "url": "https://leetcode.com/problems/restore-the-array-from-adjacent-pairs",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 292,
    "title": "Reverse a number",
    "url": "https://leetcode.com/problems/reverse-a-number/",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 293,
    "title": "Reverse an array",
    "url": "https://leetcode.com/problems/reverse-an-array/",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 294,
    "title": "Reverse every word in a string",
    "url": "https://leetcode.com/problems/reverse-every-word-in-a-string/",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 295,
    "title": "Reverse Nodes in k-Group",
    "url": "https://leetcode.com/problems/reverse-nodes-in-k-group",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 296,
    "title": "Reverse Pairs",
    "url": "https://leetcode.com/problems/reverse-pairs",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 297,
    "title": "Reverse String",
    "url": "https://leetcode.com/problems/reverse-string",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 298,
    "title": "Roman Number to Integer",
    "url": "https://www.geeksforgeeks.org/problems/roman-number-to-integer3201/1",
    "platform": "GeeksforGeeks",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 299,
    "title": "Rotate Array",
    "url": "https://leetcode.com/problems/rotate-array",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 300,
    "title": "Rotate Array by One",
    "url": "https://www.geeksforgeeks.org/problems/cyclically-rotate-an-array-by-one2614/1",
    "platform": "GeeksforGeeks",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 301,
    "title": "Rotate String",
    "url": "https://leetcode.com/problems/rotate-string/",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 302,
    "title": "Row with max 1s",
    "url": "https://www.geeksforgeeks.org/problems/row-with-max-1s0023/1",
    "platform": "GeeksforGeeks",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 303,
    "title": "Searching Array Adjacent Differ K",
    "url": "https://www.geeksforgeeks.org/searching-array-adjacent-differ-k/",
    "platform": "GeeksforGeeks",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 304,
    "title": "Second Largest Element",
    "url": "https://leetcode.com/problems/second-largest-element/",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 305,
    "title": "Second most repeated string in a sequence",
    "url": "https://www.geeksforgeeks.org/problems/second-most-repeated-string-in-a-sequence0534/1",
    "platform": "GeeksforGeeks",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 306,
    "title": "Shortest common supersequence",
    "url": "https://leetcode.com/problems/shortest-common-supersequence/",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 307,
    "title": "Shortest Job First",
    "url": "https://leetcode.com/problems/shortest-job-first/",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 308,
    "title": "Shortest Palindrome",
    "url": "https://leetcode.com/problems/shortest-palindrome/",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 309,
    "title": "Sqrt(x)",
    "url": "https://leetcode.com/problems/sqrtx/",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 310,
    "title": "STL",
    "url": "https://leetcode.com/problems/stl/",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 311,
    "title": "Stream First Non-repeating",
    "url": "https://www.geeksforgeeks.org/problems/first-non-repeating-character-in-a-stream1216/1",
    "platform": "GeeksforGeeks",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 312,
    "title": "String to Integer (atoi)",
    "url": "https://leetcode.com/problems/string-to-integer-atoi",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 313,
    "title": "Subarray with 0 sum",
    "url": "https://www.geeksforgeeks.org/problems/subarray-with-0-sum-1587115621/1",
    "platform": "GeeksforGeeks",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 314,
    "title": "Sum Except First and Last",
    "url": "https://www.geeksforgeeks.org/problems/max-length-chain/1",
    "platform": "GeeksforGeeks",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 315,
    "title": "Sum Minimum Maximum Elements Subarrays Size K",
    "url": "https://www.geeksforgeeks.org/sum-minimum-maximum-elements-subarrays-size-k/",
    "platform": "GeeksforGeeks",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 316,
    "title": "Sum of nodes on the longest path",
    "url": "https://www.geeksforgeeks.org/problems/sum-of-the-longest-bloodline-of-a-tree/1",
    "platform": "GeeksforGeeks",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 317,
    "title": "Sum of Two Integers",
    "url": "https://leetcode.com/problems/sum-of-two-integers/",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 318,
    "title": "Summary Ranges",
    "url": "https://leetcode.com/problems/summary-ranges/",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 319,
    "title": "Survival",
    "url": "https://www.geeksforgeeks.org/survival/",
    "platform": "GeeksforGeeks",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 320,
    "title": "Swap and Maximize",
    "url": "https://www.geeksforgeeks.org/problems/swap-and-maximize5859/1",
    "platform": "GeeksforGeeks",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 321,
    "title": "Swap Two Numbers",
    "url": "https://leetcode.com/problems/swap-two-numbers/",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 322,
    "title": "Switch Case",
    "url": "https://leetcode.com/problems/switch-case/",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 323,
    "title": "Text Justification",
    "url": "https://leetcode.com/problems/text-justification",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 324,
    "title": "Theory with examples",
    "url": "https://leetcode.com/problems/theory-with-examples/",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 325,
    "title": "Three Sum",
    "url": "https://leetcode.com/problems/3sum",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 326,
    "title": "Three way partitioning",
    "url": "https://www.geeksforgeeks.org/problems/three-way-partitioning/1",
    "platform": "GeeksforGeeks",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 327,
    "title": "Time Based Key-Value Store",
    "url": "https://leetcode.com/problems/time-based-key-value-store",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 328,
    "title": "Transform One String To Another Using Minimum Number Of Given Operation",
    "url": "https://www.geeksforgeeks.org/transform-one-string-to-another-using-minimum-number-of-given-operation/",
    "platform": "GeeksforGeeks",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 329,
    "title": "Traversal Techniques",
    "url": "https://leetcode.com/problems/traversal-techniques/",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 330,
    "title": "Triangle",
    "url": "https://leetcode.com/problems/triangle/",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 331,
    "title": "Triplet Sum in Array",
    "url": "https://www.geeksforgeeks.org/problems/triplet-sum-in-array-1587115621/1",
    "platform": "GeeksforGeeks",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 332,
    "title": "Ugly Number II",
    "url": "https://leetcode.com/problems/ugly-number-ii",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 333,
    "title": "Understand recursion by print something N times",
    "url": "https://leetcode.com/problems/understand-recursion-by-print-something-n-times/",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 334,
    "title": "Union of Arrays with Duplicates",
    "url": "https://www.geeksforgeeks.org/problems/union-of-two-arrays3538/1",
    "platform": "GeeksforGeeks",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 335,
    "title": "Unique Number II",
    "url": "https://www.geeksforgeeks.org/problems/finding-the-numbers0215/1",
    "platform": "GeeksforGeeks",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 336,
    "title": "Valid Number",
    "url": "https://leetcode.com/problems/valid-number",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 337,
    "title": "Valid Paranthesis Checker",
    "url": "https://leetcode.com/problems/valid-paranthesis-checker/",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 338,
    "title": "Value equal to index value",
    "url": "https://www.geeksforgeeks.org/problems/value-equal-to-index-value1330/1",
    "platform": "GeeksforGeeks",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 339,
    "title": "Vertex Cover Problem Set 1 Introduction Approximate Algorithm 2",
    "url": "https://www.geeksforgeeks.org/vertex-cover-problem-set-1-introduction-approximate-algorithm-2/",
    "platform": "GeeksforGeeks",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 340,
    "title": "Water Connection Problem",
    "url": "https://www.geeksforgeeks.org/problems/water-connection-problem5822/1",
    "platform": "GeeksforGeeks",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 341,
    "title": "Weighted Job Scheduling",
    "url": "https://www.geeksforgeeks.org/problems/weighted-job-scheduling/1",
    "platform": "GeeksforGeeks",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 342,
    "title": "Weighted Job Scheduling Log N Time",
    "url": "https://www.geeksforgeeks.org/weighted-job-scheduling-log-n-time/",
    "platform": "GeeksforGeeks",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 343,
    "title": "What are arrays, strings?",
    "url": "https://leetcode.com/problems/what-are-arrays-strings/",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 344,
    "title": "While loops",
    "url": "https://leetcode.com/problems/while-loops/",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 345,
    "title": "Word Pattern",
    "url": "https://leetcode.com/problems/word-pattern/",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 346,
    "title": "Word Wrap",
    "url": "https://www.geeksforgeeks.org/problems/word-wrap1646/1",
    "platform": "GeeksforGeeks",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 347,
    "title": "Write A Program To Reverse An Array Or String",
    "url": "https://www.geeksforgeeks.org/write-a-program-to-reverse-an-array-or-string/",
    "platform": "GeeksforGeeks",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 348,
    "title": "Z function",
    "url": "https://leetcode.com/problems/z-function/",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 349,
    "title": "Zero Sum Subarrays",
    "url": "https://www.geeksforgeeks.org/problems/zero-sum-subarrays1825/1",
    "platform": "GeeksforGeeks",
    "chapterId": 1,
    "chapterTitle": "Arrays, Strings & Hashing",
    "topicId": "1.5",
    "topicTitle": "Array & String Fundamentals"
  },
  {
    "id": 350,
    "title": "AGGRCOW - Aggressive cows",
    "url": "https://www.spoj.com/problems/AGGRCOW/",
    "platform": "SPOJ",
    "chapterId": 2,
    "chapterTitle": "Searching & Sorting",
    "topicId": "2.1",
    "topicTitle": "Binary Search (Index & Answer Space)"
  },
  {
    "id": 351,
    "title": "Aggressive Cows",
    "url": "https://leetcode.com/problems/aggressive-cows/",
    "platform": "LeetCode",
    "chapterId": 2,
    "chapterTitle": "Searching & Sorting",
    "topicId": "2.1",
    "topicTitle": "Binary Search (Index & Answer Space)"
  },
  {
    "id": 352,
    "title": "Binary Search",
    "url": "https://leetcode.com/problems/binary-search",
    "platform": "LeetCode",
    "chapterId": 2,
    "chapterTitle": "Searching & Sorting",
    "topicId": "2.1",
    "topicTitle": "Binary Search (Index & Answer Space)"
  },
  {
    "id": 353,
    "title": "Capacity to Ship Packages Within D Days",
    "url": "https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/",
    "platform": "LeetCode",
    "chapterId": 2,
    "chapterTitle": "Searching & Sorting",
    "topicId": "2.1",
    "topicTitle": "Binary Search (Index & Answer Space)"
  },
  {
    "id": 354,
    "title": "Find Minimum in Rotated Sorted Array",
    "url": "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array",
    "platform": "LeetCode",
    "chapterId": 2,
    "chapterTitle": "Searching & Sorting",
    "topicId": "2.1",
    "topicTitle": "Binary Search (Index & Answer Space)"
  },
  {
    "id": 355,
    "title": "Find Nth root of a number",
    "url": "https://www.geeksforgeeks.org/problems/find-nth-root-of-m5843/1",
    "platform": "GeeksforGeeks",
    "chapterId": 2,
    "chapterTitle": "Searching & Sorting",
    "topicId": "2.1",
    "topicTitle": "Binary Search (Index & Answer Space)"
  },
  {
    "id": 356,
    "title": "Find Peak Element",
    "url": "https://www.geeksforgeeks.org/make-array-elements-equal-minimum-cost/",
    "platform": "GeeksforGeeks",
    "chapterId": 2,
    "chapterTitle": "Searching & Sorting",
    "topicId": "2.1",
    "topicTitle": "Binary Search (Index & Answer Space)"
  },
  {
    "id": 357,
    "title": "First Bad Version",
    "url": "https://leetcode.com/problems/first-bad-version",
    "platform": "LeetCode",
    "chapterId": 2,
    "chapterTitle": "Searching & Sorting",
    "topicId": "2.1",
    "topicTitle": "Binary Search (Index & Answer Space)"
  },
  {
    "id": 358,
    "title": "Floor and Ceil in Sorted Array",
    "url": "https://leetcode.com/problems/floor-and-ceil-in-sorted-array/",
    "platform": "LeetCode",
    "chapterId": 2,
    "chapterTitle": "Searching & Sorting",
    "topicId": "2.1",
    "topicTitle": "Binary Search (Index & Answer Space)"
  },
  {
    "id": 359,
    "title": "Koko Eating Bananas",
    "url": "https://leetcode.com/problems/koko-eating-bananas/",
    "platform": "LeetCode",
    "chapterId": 2,
    "chapterTitle": "Searching & Sorting",
    "topicId": "2.1",
    "topicTitle": "Binary Search (Index & Answer Space)"
  },
  {
    "id": 360,
    "title": "Lower Bound",
    "url": "https://leetcode.com/problems/lower-bound/",
    "platform": "LeetCode",
    "chapterId": 2,
    "chapterTitle": "Searching & Sorting",
    "topicId": "2.1",
    "topicTitle": "Binary Search (Index & Answer Space)"
  },
  {
    "id": 361,
    "title": "Minimum days to make M bouquets",
    "url": "https://leetcode.com/problems/minimum-days-to-make-m-bouquets/",
    "platform": "LeetCode",
    "chapterId": 2,
    "chapterTitle": "Searching & Sorting",
    "topicId": "2.1",
    "topicTitle": "Binary Search (Index & Answer Space)"
  },
  {
    "id": 362,
    "title": "Painter's Partition",
    "url": "https://leetcode.com/problems/painter-s-partition/",
    "platform": "LeetCode",
    "chapterId": 2,
    "chapterTitle": "Searching & Sorting",
    "topicId": "2.1",
    "topicTitle": "Binary Search (Index & Answer Space)"
  },
  {
    "id": 363,
    "title": "Search a 2D Matrix",
    "url": "https://leetcode.com/problems/search-a-2d-matrix",
    "platform": "LeetCode",
    "chapterId": 2,
    "chapterTitle": "Searching & Sorting",
    "topicId": "2.1",
    "topicTitle": "Binary Search (Index & Answer Space)"
  },
  {
    "id": 364,
    "title": "Search in Rotated Sorted Array",
    "url": "https://leetcode.com/problems/search-in-rotated-sorted-array",
    "platform": "LeetCode",
    "chapterId": 2,
    "chapterTitle": "Searching & Sorting",
    "topicId": "2.1",
    "topicTitle": "Binary Search (Index & Answer Space)"
  },
  {
    "id": 365,
    "title": "Search Insert Position",
    "url": "https://leetcode.com/problems/search-insert-position/",
    "platform": "LeetCode",
    "chapterId": 2,
    "chapterTitle": "Searching & Sorting",
    "topicId": "2.1",
    "topicTitle": "Binary Search (Index & Answer Space)"
  },
  {
    "id": 366,
    "title": "Single element in a Sorted Array",
    "url": "https://leetcode.com/problems/single-element-in-a-sorted-array/",
    "platform": "LeetCode",
    "chapterId": 2,
    "chapterTitle": "Searching & Sorting",
    "topicId": "2.1",
    "topicTitle": "Binary Search (Index & Answer Space)"
  },
  {
    "id": 367,
    "title": "Split Array Largest Sum",
    "url": "https://leetcode.com/problems/split-array-largest-sum",
    "platform": "LeetCode",
    "chapterId": 2,
    "chapterTitle": "Searching & Sorting",
    "topicId": "2.1",
    "topicTitle": "Binary Search (Index & Answer Space)"
  },
  {
    "id": 368,
    "title": "Upper Bound",
    "url": "https://leetcode.com/problems/upper-bound/",
    "platform": "LeetCode",
    "chapterId": 2,
    "chapterTitle": "Searching & Sorting",
    "topicId": "2.1",
    "topicTitle": "Binary Search (Index & Answer Space)"
  },
  {
    "id": 369,
    "title": "Bubble Sort",
    "url": "https://leetcode.com/problems/bubble-sort/",
    "platform": "LeetCode",
    "chapterId": 2,
    "chapterTitle": "Searching & Sorting",
    "topicId": "2.2",
    "topicTitle": "Sorting Algorithms & Order Statistics"
  },
  {
    "id": 370,
    "title": "Ceiling in a sorted array",
    "url": "https://www.geeksforgeeks.org/ceiling-in-a-sorted-array/",
    "platform": "GeeksforGeeks",
    "chapterId": 2,
    "chapterTitle": "Searching & Sorting",
    "topicId": "2.2",
    "topicTitle": "Sorting Algorithms & Order Statistics"
  },
  {
    "id": 371,
    "title": "Check if reversing a sub array make the array sorted",
    "url": "https://www.geeksforgeeks.org/check-reversing-sub-array-make-array-sorted/",
    "platform": "GeeksforGeeks",
    "chapterId": 2,
    "chapterTitle": "Searching & Sorting",
    "topicId": "2.2",
    "topicTitle": "Sorting Algorithms & Order Statistics"
  },
  {
    "id": 372,
    "title": "Check if the Array is Sorted II",
    "url": "https://leetcode.com/problems/check-if-the-array-is-sorted-ii/",
    "platform": "LeetCode",
    "chapterId": 2,
    "chapterTitle": "Searching & Sorting",
    "topicId": "2.2",
    "topicTitle": "Sorting Algorithms & Order Statistics"
  },
  {
    "id": 373,
    "title": "Common in 3 Sorted Arrays",
    "url": "https://www.geeksforgeeks.org/problems/common-elements1132/1",
    "platform": "GeeksforGeeks",
    "chapterId": 2,
    "chapterTitle": "Searching & Sorting",
    "topicId": "2.2",
    "topicTitle": "Sorting Algorithms & Order Statistics"
  },
  {
    "id": 374,
    "title": "Count Inversions",
    "url": "https://www.geeksforgeeks.org/problems/inversion-of-array-1587115620/1",
    "platform": "GeeksforGeeks",
    "chapterId": 2,
    "chapterTitle": "Searching & Sorting",
    "topicId": "2.2",
    "topicTitle": "Sorting Algorithms & Order Statistics"
  },
  {
    "id": 375,
    "title": "Count Occurrences in a Sorted Array",
    "url": "https://leetcode.com/problems/count-occurrences-in-a-sorted-array/",
    "platform": "LeetCode",
    "chapterId": 2,
    "chapterTitle": "Searching & Sorting",
    "topicId": "2.2",
    "topicTitle": "Sorting Algorithms & Order Statistics"
  },
  {
    "id": 376,
    "title": "Find First and Last Position of Element in Sorted Array",
    "url": "https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/",
    "platform": "LeetCode",
    "chapterId": 2,
    "chapterTitle": "Searching & Sorting",
    "topicId": "2.2",
    "topicTitle": "Sorting Algorithms & Order Statistics"
  },
  {
    "id": 377,
    "title": "First Missing Positive",
    "url": "https://leetcode.com/problems/first-missing-positive",
    "platform": "LeetCode",
    "chapterId": 2,
    "chapterTitle": "Searching & Sorting",
    "topicId": "2.2",
    "topicTitle": "Sorting Algorithms & Order Statistics"
  },
  {
    "id": 378,
    "title": "H-Index",
    "url": "https://leetcode.com/problems/h-index/",
    "platform": "LeetCode",
    "chapterId": 2,
    "chapterTitle": "Searching & Sorting",
    "topicId": "2.2",
    "topicTitle": "Sorting Algorithms & Order Statistics"
  },
  {
    "id": 379,
    "title": "In Place Merge Sort",
    "url": "https://www.geeksforgeeks.org/in-place-merge-sort/",
    "platform": "GeeksforGeeks",
    "chapterId": 2,
    "chapterTitle": "Searching & Sorting",
    "topicId": "2.2",
    "topicTitle": "Sorting Algorithms & Order Statistics"
  },
  {
    "id": 380,
    "title": "Insertion Sorting",
    "url": "https://leetcode.com/problems/insertion-sorting/",
    "platform": "LeetCode",
    "chapterId": 2,
    "chapterTitle": "Searching & Sorting",
    "topicId": "2.2",
    "topicTitle": "Sorting Algorithms & Order Statistics"
  },
  {
    "id": 381,
    "title": "Kth element of 2 sorted arrays",
    "url": "https://leetcode.com/problems/kth-element-of-2-sorted-arrays/",
    "platform": "LeetCode",
    "chapterId": 2,
    "chapterTitle": "Searching & Sorting",
    "topicId": "2.2",
    "topicTitle": "Sorting Algorithms & Order Statistics"
  },
  {
    "id": 382,
    "title": "Largest Number",
    "url": "https://leetcode.com/problems/largest-number",
    "platform": "LeetCode",
    "chapterId": 2,
    "chapterTitle": "Searching & Sorting",
    "topicId": "2.2",
    "topicTitle": "Sorting Algorithms & Order Statistics"
  },
  {
    "id": 383,
    "title": "Largest number in K swaps",
    "url": "https://www.geeksforgeeks.org/problems/largest-number-in-k-swaps-1587115620/1",
    "platform": "GeeksforGeeks",
    "chapterId": 2,
    "chapterTitle": "Searching & Sorting",
    "topicId": "2.2",
    "topicTitle": "Sorting Algorithms & Order Statistics"
  },
  {
    "id": 384,
    "title": "Linear Search",
    "url": "https://leetcode.com/problems/linear-search/",
    "platform": "LeetCode",
    "chapterId": 2,
    "chapterTitle": "Searching & Sorting",
    "topicId": "2.2",
    "topicTitle": "Sorting Algorithms & Order Statistics"
  },
  {
    "id": 385,
    "title": "Majority Element",
    "url": "https://leetcode.com/problems/majority-element",
    "platform": "LeetCode",
    "chapterId": 2,
    "chapterTitle": "Searching & Sorting",
    "topicId": "2.2",
    "topicTitle": "Sorting Algorithms & Order Statistics"
  },
  {
    "id": 386,
    "title": "Merge Sorted Array",
    "url": "https://leetcode.com/problems/merge-sorted-array",
    "platform": "LeetCode",
    "chapterId": 2,
    "chapterTitle": "Searching & Sorting",
    "topicId": "2.2",
    "topicTitle": "Sorting Algorithms & Order Statistics"
  },
  {
    "id": 387,
    "title": "Merge Sorting",
    "url": "https://leetcode.com/problems/merge-sorting/",
    "platform": "LeetCode",
    "chapterId": 2,
    "chapterTitle": "Searching & Sorting",
    "topicId": "2.2",
    "topicTitle": "Sorting Algorithms & Order Statistics"
  },
  {
    "id": 388,
    "title": "Merge two sorted arrays without extra space",
    "url": "https://leetcode.com/problems/merge-two-sorted-arrays-without-extra-space/",
    "platform": "LeetCode",
    "chapterId": 2,
    "chapterTitle": "Searching & Sorting",
    "topicId": "2.2",
    "topicTitle": "Sorting Algorithms & Order Statistics"
  },
  {
    "id": 389,
    "title": "Minimum Swaps to Sort",
    "url": "https://www.geeksforgeeks.org/problems/minimum-swaps/1",
    "platform": "GeeksforGeeks",
    "chapterId": 2,
    "chapterTitle": "Searching & Sorting",
    "topicId": "2.2",
    "topicTitle": "Sorting Algorithms & Order Statistics"
  },
  {
    "id": 390,
    "title": "Quick Sorting",
    "url": "https://leetcode.com/problems/quick-sorting/",
    "platform": "LeetCode",
    "chapterId": 2,
    "chapterTitle": "Searching & Sorting",
    "topicId": "2.2",
    "topicTitle": "Sorting Algorithms & Order Statistics"
  },
  {
    "id": 391,
    "title": "Radix Sort",
    "url": "https://www.geeksforgeeks.org/problems/radix-sort/1",
    "platform": "GeeksforGeeks",
    "chapterId": 2,
    "chapterTitle": "Searching & Sorting",
    "topicId": "2.2",
    "topicTitle": "Sorting Algorithms & Order Statistics"
  },
  {
    "id": 392,
    "title": "Rearrange Array Alternating Positive Negative Items O1 Extra Space",
    "url": "https://www.geeksforgeeks.org/rearrange-array-alternating-positive-negative-items-o1-extra-space/",
    "platform": "GeeksforGeeks",
    "chapterId": 2,
    "chapterTitle": "Searching & Sorting",
    "topicId": "2.2",
    "topicTitle": "Sorting Algorithms & Order Statistics"
  },
  {
    "id": 393,
    "title": "Rearrange array elements by sign",
    "url": "https://leetcode.com/problems/rearrange-array-elements-by-sign/",
    "platform": "LeetCode",
    "chapterId": 2,
    "chapterTitle": "Searching & Sorting",
    "topicId": "2.2",
    "topicTitle": "Sorting Algorithms & Order Statistics"
  },
  {
    "id": 394,
    "title": "Recursive Bubble Sort",
    "url": "https://leetcode.com/problems/recursive-bubble-sort/",
    "platform": "LeetCode",
    "chapterId": 2,
    "chapterTitle": "Searching & Sorting",
    "topicId": "2.2",
    "topicTitle": "Sorting Algorithms & Order Statistics"
  },
  {
    "id": 395,
    "title": "Recursive Insertion Sort",
    "url": "https://leetcode.com/problems/recursive-insertion-sort/",
    "platform": "LeetCode",
    "chapterId": 2,
    "chapterTitle": "Searching & Sorting",
    "topicId": "2.2",
    "topicTitle": "Sorting Algorithms & Order Statistics"
  },
  {
    "id": 396,
    "title": "Search X in sorted array",
    "url": "https://leetcode.com/problems/search-x-in-sorted-array/",
    "platform": "LeetCode",
    "chapterId": 2,
    "chapterTitle": "Searching & Sorting",
    "topicId": "2.2",
    "topicTitle": "Sorting Algorithms & Order Statistics"
  },
  {
    "id": 397,
    "title": "Selection Sort",
    "url": "https://leetcode.com/problems/selection-sort/",
    "platform": "LeetCode",
    "chapterId": 2,
    "chapterTitle": "Searching & Sorting",
    "topicId": "2.2",
    "topicTitle": "Sorting Algorithms & Order Statistics"
  },
  {
    "id": 398,
    "title": "Sort 0s, 1s and 2s",
    "url": "https://www.geeksforgeeks.org/problems/sort-an-array-of-0s-1s-and-2s4231/1",
    "platform": "GeeksforGeeks",
    "chapterId": 2,
    "chapterTitle": "Searching & Sorting",
    "topicId": "2.2",
    "topicTitle": "Sorting Algorithms & Order Statistics"
  },
  {
    "id": 399,
    "title": "Sort an Array",
    "url": "https://leetcode.com/problems/sort-an-array/",
    "platform": "LeetCode",
    "chapterId": 2,
    "chapterTitle": "Searching & Sorting",
    "topicId": "2.2",
    "topicTitle": "Sorting Algorithms & Order Statistics"
  },
  {
    "id": 400,
    "title": "Sort by Set Bit Count",
    "url": "https://www.geeksforgeeks.org/problems/sort-by-set-bit-count1153/1",
    "platform": "GeeksforGeeks",
    "chapterId": 2,
    "chapterTitle": "Searching & Sorting",
    "topicId": "2.2",
    "topicTitle": "Sorting Algorithms & Order Statistics"
  },
  {
    "id": 401,
    "title": "Sort Characters by Frequency",
    "url": "https://leetcode.com/problems/sort-characters-by-frequency/",
    "platform": "LeetCode",
    "chapterId": 2,
    "chapterTitle": "Searching & Sorting",
    "topicId": "2.2",
    "topicTitle": "Sorting Algorithms & Order Statistics"
  },
  {
    "id": 402,
    "title": "Sort Colors",
    "url": "https://leetcode.com/problems/sort-colors",
    "platform": "LeetCode",
    "chapterId": 2,
    "chapterTitle": "Searching & Sorting",
    "topicId": "2.2",
    "topicTitle": "Sorting Algorithms & Order Statistics"
  },
  {
    "id": 403,
    "title": "Sort K sorted array",
    "url": "https://www.geeksforgeeks.org/problems/nearly-sorted-1587115620/1",
    "platform": "GeeksforGeeks",
    "chapterId": 2,
    "chapterTitle": "Searching & Sorting",
    "topicId": "2.2",
    "topicTitle": "Sorting Algorithms & Order Statistics"
  },
  {
    "id": 404,
    "title": "Sorted matrix",
    "url": "https://www.geeksforgeeks.org/problems/sorted-matrix2333/1",
    "platform": "GeeksforGeeks",
    "chapterId": 2,
    "chapterTitle": "Searching & Sorting",
    "topicId": "2.2",
    "topicTitle": "Sorting Algorithms & Order Statistics"
  },
  {
    "id": 405,
    "title": "Squares of a Sorted Array",
    "url": "https://leetcode.com/problems/squares-of-a-sorted-array",
    "platform": "LeetCode",
    "chapterId": 2,
    "chapterTitle": "Searching & Sorting",
    "topicId": "2.2",
    "topicTitle": "Sorting Algorithms & Order Statistics"
  },
  {
    "id": 406,
    "title": "Two Sum II - Input Array Is Sorted",
    "url": "https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/",
    "platform": "LeetCode",
    "chapterId": 2,
    "chapterTitle": "Searching & Sorting",
    "topicId": "2.2",
    "topicTitle": "Sorting Algorithms & Order Statistics"
  },
  {
    "id": 407,
    "title": "Union of two sorted arrays",
    "url": "https://leetcode.com/problems/union-of-two-sorted-arrays/",
    "platform": "LeetCode",
    "chapterId": 2,
    "chapterTitle": "Searching & Sorting",
    "topicId": "2.2",
    "topicTitle": "Sorting Algorithms & Order Statistics"
  },
  {
    "id": 408,
    "title": "4 Sum - All Quadruples",
    "url": "https://www.geeksforgeeks.org/problems/find-all-four-sum-numbers1732/1",
    "platform": "GeeksforGeeks",
    "chapterId": 3,
    "chapterTitle": "Linked Lists",
    "topicId": "3.1",
    "topicTitle": "Linked List Patterns & Pointer Reversal"
  },
  {
    "id": 409,
    "title": "Add one to a number represented by LL",
    "url": "https://leetcode.com/problems/add-one-to-a-number-represented-by-ll/",
    "platform": "LeetCode",
    "chapterId": 3,
    "chapterTitle": "Linked Lists",
    "topicId": "3.1",
    "topicTitle": "Linked List Patterns & Pointer Reversal"
  },
  {
    "id": 410,
    "title": "Add Two Numbers",
    "url": "https://leetcode.com/problems/add-two-numbers",
    "platform": "LeetCode",
    "chapterId": 3,
    "chapterTitle": "Linked Lists",
    "topicId": "3.1",
    "topicTitle": "Linked List Patterns & Pointer Reversal"
  },
  {
    "id": 411,
    "title": "Allocate Minimum Pages",
    "url": "https://www.geeksforgeeks.org/problems/allocate-minimum-number-of-pages0937/1",
    "platform": "GeeksforGeeks",
    "chapterId": 3,
    "chapterTitle": "Linked Lists",
    "topicId": "3.1",
    "topicTitle": "Linked List Patterns & Pointer Reversal"
  },
  {
    "id": 412,
    "title": "Book Allocation Problem",
    "url": "https://leetcode.com/problems/book-allocation-problem/",
    "platform": "LeetCode",
    "chapterId": 3,
    "chapterTitle": "Linked Lists",
    "topicId": "3.1",
    "topicTitle": "Linked List Patterns & Pointer Reversal"
  },
  {
    "id": 413,
    "title": "Check if LL is palindrome or not",
    "url": "https://leetcode.com/problems/check-if-ll-is-palindrome-or-not/",
    "platform": "LeetCode",
    "chapterId": 3,
    "chapterTitle": "Linked Lists",
    "topicId": "3.1",
    "topicTitle": "Linked List Patterns & Pointer Reversal"
  },
  {
    "id": 414,
    "title": "Clone a LL with random and next pointer",
    "url": "https://leetcode.com/problems/clone-a-ll-with-random-and-next-pointer/",
    "platform": "LeetCode",
    "chapterId": 3,
    "chapterTitle": "Linked Lists",
    "topicId": "3.1",
    "topicTitle": "Linked List Patterns & Pointer Reversal"
  },
  {
    "id": 415,
    "title": "Common Elements In All Rows Of A Given Matrix",
    "url": "https://www.geeksforgeeks.org/common-elements-in-all-rows-of-a-given-matrix/",
    "platform": "GeeksforGeeks",
    "chapterId": 3,
    "chapterTitle": "Linked Lists",
    "topicId": "3.1",
    "topicTitle": "Linked List Patterns & Pointer Reversal"
  },
  {
    "id": 416,
    "title": "Count all Digits of a Number",
    "url": "https://leetcode.com/problems/count-all-digits-of-a-number/",
    "platform": "LeetCode",
    "chapterId": 3,
    "chapterTitle": "Linked Lists",
    "topicId": "3.1",
    "topicTitle": "Linked List Patterns & Pointer Reversal"
  },
  {
    "id": 417,
    "title": "Count all subsequences with sum K",
    "url": "https://leetcode.com/problems/count-all-subsequences-with-sum-k/",
    "platform": "LeetCode",
    "chapterId": 3,
    "chapterTitle": "Linked Lists",
    "topicId": "3.1",
    "topicTitle": "Linked List Patterns & Pointer Reversal"
  },
  {
    "id": 418,
    "title": "Count of Smaller Numbers After Self",
    "url": "https://leetcode.com/problems/count-of-smaller-numbers-after-self",
    "platform": "LeetCode",
    "chapterId": 3,
    "chapterTitle": "Linked Lists",
    "topicId": "3.1",
    "topicTitle": "Linked List Patterns & Pointer Reversal"
  },
  {
    "id": 419,
    "title": "Delete all occurrences of a key in DLL",
    "url": "https://leetcode.com/problems/delete-all-occurrences-of-a-key-in-dll/",
    "platform": "LeetCode",
    "chapterId": 3,
    "chapterTitle": "Linked Lists",
    "topicId": "3.1",
    "topicTitle": "Linked List Patterns & Pointer Reversal"
  },
  {
    "id": 420,
    "title": "Delete the middle node in LL",
    "url": "https://leetcode.com/problems/delete-the-middle-node-in-ll/",
    "platform": "LeetCode",
    "chapterId": 3,
    "chapterTitle": "Linked Lists",
    "topicId": "3.1",
    "topicTitle": "Linked List Patterns & Pointer Reversal"
  },
  {
    "id": 421,
    "title": "Deletion of the head of LL",
    "url": "https://leetcode.com/problems/deletion-of-the-head-of-ll/",
    "platform": "LeetCode",
    "chapterId": 3,
    "chapterTitle": "Linked Lists",
    "topicId": "3.1",
    "topicTitle": "Linked List Patterns & Pointer Reversal"
  },
  {
    "id": 422,
    "title": "Detect a loop in LL",
    "url": "https://leetcode.com/problems/detect-a-loop-in-ll/",
    "platform": "LeetCode",
    "chapterId": 3,
    "chapterTitle": "Linked Lists",
    "topicId": "3.1",
    "topicTitle": "Linked List Patterns & Pointer Reversal"
  },
  {
    "id": 423,
    "title": "Find All Anagrams in a String",
    "url": "https://leetcode.com/problems/find-all-anagrams-in-a-string",
    "platform": "LeetCode",
    "chapterId": 3,
    "chapterTitle": "Linked Lists",
    "topicId": "3.1",
    "topicTitle": "Linked List Patterns & Pointer Reversal"
  },
  {
    "id": 424,
    "title": "Find All Duplicates in an Array",
    "url": "https://leetcode.com/problems/find-all-duplicates-in-an-array",
    "platform": "LeetCode",
    "chapterId": 3,
    "chapterTitle": "Linked Lists",
    "topicId": "3.1",
    "topicTitle": "Linked List Patterns & Pointer Reversal"
  },
  {
    "id": 425,
    "title": "Find All Possible Palindromic Partitions of a String",
    "url": "https://www.geeksforgeeks.org/problems/find-all-possible-palindromic-partitions-of-a-string/1",
    "platform": "GeeksforGeeks",
    "chapterId": 3,
    "chapterTitle": "Linked Lists",
    "topicId": "3.1",
    "topicTitle": "Linked List Patterns & Pointer Reversal"
  },
  {
    "id": 426,
    "title": "Find K Pairs with Smallest Sums",
    "url": "https://leetcode.com/problems/find-k-pairs-with-smallest-sums/",
    "platform": "LeetCode",
    "chapterId": 3,
    "chapterTitle": "Linked Lists",
    "topicId": "3.1",
    "topicTitle": "Linked List Patterns & Pointer Reversal"
  },
  {
    "id": 427,
    "title": "Find Paths From Corner Cell To Middle Cell In Maze",
    "url": "https://www.geeksforgeeks.org/find-paths-from-corner-cell-to-middle-cell-in-maze/",
    "platform": "GeeksforGeeks",
    "chapterId": 3,
    "chapterTitle": "Linked Lists",
    "topicId": "3.1",
    "topicTitle": "Linked List Patterns & Pointer Reversal"
  },
  {
    "id": 428,
    "title": "Find the city with the smallest number of neighbors",
    "url": "https://leetcode.com/problems/find-the-city-with-the-smallest-number-of-neighbors/",
    "platform": "LeetCode",
    "chapterId": 3,
    "chapterTitle": "Linked Lists",
    "topicId": "3.1",
    "topicTitle": "Linked List Patterns & Pointer Reversal"
  },
  {
    "id": 429,
    "title": "Find the City With the Smallest Number of Neighbors at a Threshold Distance",
    "url": "https://leetcode.com/problems/find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance",
    "platform": "LeetCode",
    "chapterId": 3,
    "chapterTitle": "Linked Lists",
    "topicId": "3.1",
    "topicTitle": "Linked List Patterns & Pointer Reversal"
  },
  {
    "id": 430,
    "title": "Find the intersection point of Y LL",
    "url": "https://leetcode.com/problems/find-the-intersection-point-of-y-ll/",
    "platform": "LeetCode",
    "chapterId": 3,
    "chapterTitle": "Linked Lists",
    "topicId": "3.1",
    "topicTitle": "Linked List Patterns & Pointer Reversal"
  },
  {
    "id": 431,
    "title": "Find the smallest divisor",
    "url": "https://leetcode.com/problems/find-the-smallest-divisor/",
    "platform": "LeetCode",
    "chapterId": 3,
    "chapterTitle": "Linked Lists",
    "topicId": "3.1",
    "topicTitle": "Linked List Patterns & Pointer Reversal"
  },
  {
    "id": 432,
    "title": "Find the starting point in LL",
    "url": "https://leetcode.com/problems/find-the-starting-point-in-ll/",
    "platform": "LeetCode",
    "chapterId": 3,
    "chapterTitle": "Linked Lists",
    "topicId": "3.1",
    "topicTitle": "Linked List Patterns & Pointer Reversal"
  },
  {
    "id": 433,
    "title": "Flattening of LL",
    "url": "https://leetcode.com/problems/flattening-of-ll/",
    "platform": "LeetCode",
    "chapterId": 3,
    "chapterTitle": "Linked Lists",
    "topicId": "3.1",
    "topicTitle": "Linked List Patterns & Pointer Reversal"
  },
  {
    "id": 434,
    "title": "Flood Fill",
    "url": "https://leetcode.com/problems/flood-fill",
    "platform": "LeetCode",
    "chapterId": 3,
    "chapterTitle": "Linked Lists",
    "topicId": "3.1",
    "topicTitle": "Linked List Patterns & Pointer Reversal"
  },
  {
    "id": 435,
    "title": "Flood fill algorithm",
    "url": "https://leetcode.com/problems/flood-fill-algorithm/",
    "platform": "LeetCode",
    "chapterId": 3,
    "chapterTitle": "Linked Lists",
    "topicId": "3.1",
    "topicTitle": "Linked List Patterns & Pointer Reversal"
  },
  {
    "id": 436,
    "title": "Given A String Print All Possible Palindromic Partition",
    "url": "https://www.geeksforgeeks.org/given-a-string-print-all-possible-palindromic-partition/",
    "platform": "GeeksforGeeks",
    "chapterId": 3,
    "chapterTitle": "Linked Lists",
    "topicId": "3.1",
    "topicTitle": "Linked List Patterns & Pointer Reversal"
  },
  {
    "id": 437,
    "title": "Given An Array Of Of Size N Finds All The Elements That Appear More Than Nk Times",
    "url": "https://www.geeksforgeeks.org/given-an-array-of-of-size-n-finds-all-the-elements-that-appear-more-than-nk-times/",
    "platform": "GeeksforGeeks",
    "chapterId": 3,
    "chapterTitle": "Linked Lists",
    "topicId": "3.1",
    "topicTitle": "Linked List Patterns & Pointer Reversal"
  },
  {
    "id": 438,
    "title": "Insert Delete GetRandom O(1) - Duplicates allowed",
    "url": "https://leetcode.com/problems/insert-delete-getrandom-o1-duplicates-allowed",
    "platform": "LeetCode",
    "chapterId": 3,
    "chapterTitle": "Linked Lists",
    "topicId": "3.1",
    "topicTitle": "Linked List Patterns & Pointer Reversal"
  },
  {
    "id": 439,
    "title": "Introduction to Doubly LL",
    "url": "https://leetcode.com/problems/introduction-to-doubly-ll/",
    "platform": "LeetCode",
    "chapterId": 3,
    "chapterTitle": "Linked Lists",
    "topicId": "3.1",
    "topicTitle": "Linked List Patterns & Pointer Reversal"
  },
  {
    "id": 440,
    "title": "Java Collections",
    "url": "https://leetcode.com/problems/java-collections/",
    "platform": "LeetCode",
    "chapterId": 3,
    "chapterTitle": "Linked Lists",
    "topicId": "3.1",
    "topicTitle": "Linked List Patterns & Pointer Reversal"
  },
  {
    "id": 441,
    "title": "Learn All Patterns of Subsequences (Theory)",
    "url": "https://leetcode.com/problems/learn-all-patterns-of-subsequences/",
    "platform": "LeetCode",
    "chapterId": 3,
    "chapterTitle": "Linked Lists",
    "topicId": "3.1",
    "topicTitle": "Linked List Patterns & Pointer Reversal"
  },
  {
    "id": 442,
    "title": "Length of loop in LL",
    "url": "https://leetcode.com/problems/length-of-loop-in-ll/",
    "platform": "LeetCode",
    "chapterId": 3,
    "chapterTitle": "Linked Lists",
    "topicId": "3.1",
    "topicTitle": "Linked List Patterns & Pointer Reversal"
  },
  {
    "id": 443,
    "title": "Longest Word with All Prefixes",
    "url": "https://leetcode.com/problems/longest-word-with-all-prefixes/",
    "platform": "LeetCode",
    "chapterId": 3,
    "chapterTitle": "Linked Lists",
    "topicId": "3.1",
    "topicTitle": "Linked List Patterns & Pointer Reversal"
  },
  {
    "id": 444,
    "title": "Maximum Profit By Buying And Selling A Share At Most Twice",
    "url": "https://www.geeksforgeeks.org/maximum-profit-by-buying-and-selling-a-share-at-most-twice/",
    "platform": "GeeksforGeeks",
    "chapterId": 3,
    "chapterTitle": "Linked Lists",
    "topicId": "3.1",
    "topicTitle": "Linked List Patterns & Pointer Reversal"
  },
  {
    "id": 445,
    "title": "Maximum size rectangle binary sub-matrix with all 1s",
    "url": "https://www.geeksforgeeks.org/maximum-size-rectangle-binary-sub-matrix-1s/",
    "platform": "GeeksforGeeks",
    "chapterId": 3,
    "chapterTitle": "Linked Lists",
    "topicId": "3.1",
    "topicTitle": "Linked List Patterns & Pointer Reversal"
  },
  {
    "id": 446,
    "title": "Middle of Three",
    "url": "https://www.geeksforgeeks.org/problems/middle-of-three2926/1",
    "platform": "GeeksforGeeks",
    "chapterId": 3,
    "chapterTitle": "Linked Lists",
    "topicId": "3.1",
    "topicTitle": "Linked List Patterns & Pointer Reversal"
  },
  {
    "id": 447,
    "title": "Minimum cost for acquiring all coins with k extra coins allowed with every coin",
    "url": "https://www.geeksforgeeks.org/minimum-cost-for-acquiring-all-coins-with-k-extra-coins-allowed-with-every-coin/",
    "platform": "GeeksforGeeks",
    "chapterId": 3,
    "chapterTitle": "Linked Lists",
    "topicId": "3.1",
    "topicTitle": "Linked List Patterns & Pointer Reversal"
  },
  {
    "id": 448,
    "title": "Minimum cost to fill given weight in a bag",
    "url": "https://www.geeksforgeeks.org/problems/minimum-cost-to-fill-given-weight-in-a-bag1956/1",
    "platform": "GeeksforGeeks",
    "chapterId": 3,
    "chapterTitle": "Linked Lists",
    "topicId": "3.1",
    "topicTitle": "Linked List Patterns & Pointer Reversal"
  },
  {
    "id": 449,
    "title": "Populate Inorder Successor for all nodes",
    "url": "https://www.geeksforgeeks.org/problems/populate-inorder-successor-for-all-nodes/1",
    "platform": "GeeksforGeeks",
    "chapterId": 3,
    "chapterTitle": "Linked Lists",
    "topicId": "3.1",
    "topicTitle": "Linked List Patterns & Pointer Reversal"
  },
  {
    "id": 450,
    "title": "Print all Divisors",
    "url": "https://leetcode.com/problems/print-all-divisors/",
    "platform": "LeetCode",
    "chapterId": 3,
    "chapterTitle": "Linked Lists",
    "topicId": "3.1",
    "topicTitle": "Linked List Patterns & Pointer Reversal"
  },
  {
    "id": 451,
    "title": "Print all nodes at a distance of K in BT",
    "url": "https://leetcode.com/problems/print-all-nodes-at-a-distance-of-k-in-bt/",
    "platform": "LeetCode",
    "chapterId": 3,
    "chapterTitle": "Linked Lists",
    "topicId": "3.1",
    "topicTitle": "Linked List Patterns & Pointer Reversal"
  },
  {
    "id": 452,
    "title": "Print All Possible Paths From Top Left To Bottom Right Of A Mxn Matrix",
    "url": "https://www.geeksforgeeks.org/print-all-possible-paths-from-top-left-to-bottom-right-of-a-mxn-matrix/",
    "platform": "GeeksforGeeks",
    "chapterId": 3,
    "chapterTitle": "Linked Lists",
    "topicId": "3.1",
    "topicTitle": "Linked List Patterns & Pointer Reversal"
  },
  {
    "id": 453,
    "title": "Print all the duplicate characters in a string",
    "url": "https://www.geeksforgeeks.org/print-all-the-duplicates-in-the-input-string/",
    "platform": "GeeksforGeeks",
    "chapterId": 3,
    "chapterTitle": "Linked Lists",
    "topicId": "3.1",
    "topicTitle": "Linked List Patterns & Pointer Reversal"
  },
  {
    "id": 454,
    "title": "Print All The Duplicates In The Input String",
    "url": "https://www.geeksforgeeks.org/print-all-the-duplicates-in-the-input-string/",
    "platform": "GeeksforGeeks",
    "chapterId": 3,
    "chapterTitle": "Linked Lists",
    "topicId": "3.1",
    "topicTitle": "Linked List Patterns & Pointer Reversal"
  },
  {
    "id": 455,
    "title": "Remove All Adjacent Duplicates in String II",
    "url": "https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string-ii",
    "platform": "LeetCode",
    "chapterId": 3,
    "chapterTitle": "Linked Lists",
    "topicId": "3.1",
    "topicTitle": "Linked List Patterns & Pointer Reversal"
  },
  {
    "id": 456,
    "title": "Remove duplicates from sorted DLL",
    "url": "https://leetcode.com/problems/remove-duplicates-from-sorted-dll/",
    "platform": "LeetCode",
    "chapterId": 3,
    "chapterTitle": "Linked Lists",
    "topicId": "3.1",
    "topicTitle": "Linked List Patterns & Pointer Reversal"
  },
  {
    "id": 457,
    "title": "Remove Nth node from the back of the LL",
    "url": "https://leetcode.com/problems/remove-nth-node-from-the-back-of-the-ll/",
    "platform": "LeetCode",
    "chapterId": 3,
    "chapterTitle": "Linked Lists",
    "topicId": "3.1",
    "topicTitle": "Linked List Patterns & Pointer Reversal"
  },
  {
    "id": 458,
    "title": "Reverse a LL",
    "url": "https://leetcode.com/problems/reverse-a-ll/",
    "platform": "LeetCode",
    "chapterId": 3,
    "chapterTitle": "Linked Lists",
    "topicId": "3.1",
    "topicTitle": "Linked List Patterns & Pointer Reversal"
  },
  {
    "id": 459,
    "title": "Reverse LL in group of given size K",
    "url": "https://leetcode.com/problems/reverse-ll-in-group-of-given-size-k/",
    "platform": "LeetCode",
    "chapterId": 3,
    "chapterTitle": "Linked Lists",
    "topicId": "3.1",
    "topicTitle": "Linked List Patterns & Pointer Reversal"
  },
  {
    "id": 460,
    "title": "Rotate a LL",
    "url": "https://leetcode.com/problems/rotate-a-ll/",
    "platform": "LeetCode",
    "chapterId": 3,
    "chapterTitle": "Linked Lists",
    "topicId": "3.1",
    "topicTitle": "Linked List Patterns & Pointer Reversal"
  },
  {
    "id": 461,
    "title": "Smallest distinct window",
    "url": "https://www.geeksforgeeks.org/problems/smallest-distant-window3132/1",
    "platform": "GeeksforGeeks",
    "chapterId": 3,
    "chapterTitle": "Linked Lists",
    "topicId": "3.1",
    "topicTitle": "Linked List Patterns & Pointer Reversal"
  },
  {
    "id": 462,
    "title": "Smallest number",
    "url": "https://www.geeksforgeeks.org/problems/smallest-number5829/1",
    "platform": "GeeksforGeeks",
    "chapterId": 3,
    "chapterTitle": "Linked Lists",
    "topicId": "3.1",
    "topicTitle": "Linked List Patterns & Pointer Reversal"
  },
  {
    "id": 463,
    "title": "Smallest number with at least n trailing zeroes in factorial",
    "url": "https://www.geeksforgeeks.org/problems/smallest-factorial-number5929/1",
    "platform": "GeeksforGeeks",
    "chapterId": 3,
    "chapterTitle": "Linked Lists",
    "topicId": "3.1",
    "topicTitle": "Linked List Patterns & Pointer Reversal"
  },
  {
    "id": 464,
    "title": "Smallest Positive missing number",
    "url": "https://www.geeksforgeeks.org/problems/smallest-positive-missing-number-1587115621/1",
    "platform": "GeeksforGeeks",
    "chapterId": 3,
    "chapterTitle": "Linked Lists",
    "topicId": "3.1",
    "topicTitle": "Linked List Patterns & Pointer Reversal"
  },
  {
    "id": 465,
    "title": "Smallest subarray with sum greater than x",
    "url": "https://www.geeksforgeeks.org/problems/smallest-subarray-with-sum-greater-than-x5651/1",
    "platform": "GeeksforGeeks",
    "chapterId": 3,
    "chapterTitle": "Linked Lists",
    "topicId": "3.1",
    "topicTitle": "Linked List Patterns & Pointer Reversal"
  },
  {
    "id": 466,
    "title": "Smallest sum contiguous subarray",
    "url": "https://www.geeksforgeeks.org/problems/smallest-sum-contiguous-subarray/1",
    "platform": "GeeksforGeeks",
    "chapterId": 3,
    "chapterTitle": "Linked Lists",
    "topicId": "3.1",
    "topicTitle": "Linked List Patterns & Pointer Reversal"
  },
  {
    "id": 467,
    "title": "Smallest window containing all characters",
    "url": "https://www.geeksforgeeks.org/problems/smallest-window-in-a-string-containing-all-the-characters-of-another-string-1587115621/1",
    "platform": "GeeksforGeeks",
    "chapterId": 3,
    "chapterTitle": "Linked Lists",
    "topicId": "3.1",
    "topicTitle": "Linked List Patterns & Pointer Reversal"
  },
  {
    "id": 468,
    "title": "Smallest window in a string containing all the characters of another string",
    "url": "https://www.geeksforgeeks.org/problems/smallest-window-in-a-string-containing-all-the-characters-of-another-string-1587115621/1",
    "platform": "GeeksforGeeks",
    "chapterId": 3,
    "chapterTitle": "Linked Lists",
    "topicId": "3.1",
    "topicTitle": "Linked List Patterns & Pointer Reversal"
  },
  {
    "id": 469,
    "title": "Sort LL",
    "url": "https://leetcode.com/problems/sort-ll/",
    "platform": "LeetCode",
    "chapterId": 3,
    "chapterTitle": "Linked Lists",
    "topicId": "3.1",
    "topicTitle": "Linked List Patterns & Pointer Reversal"
  },
  {
    "id": 470,
    "title": "Spirally traversing a matrix",
    "url": "https://www.geeksforgeeks.org/problems/spirally-traversing-a-matrix-1587115621/1",
    "platform": "GeeksforGeeks",
    "chapterId": 3,
    "chapterTitle": "Linked Lists",
    "topicId": "3.1",
    "topicTitle": "Linked List Patterns & Pointer Reversal"
  },
  {
    "id": 471,
    "title": "Swap Nodes in Pairs",
    "url": "https://leetcode.com/problems/swap-nodes-in-pairs",
    "platform": "LeetCode",
    "chapterId": 3,
    "chapterTitle": "Linked Lists",
    "topicId": "3.1",
    "topicTitle": "Linked List Patterns & Pointer Reversal"
  },
  {
    "id": 472,
    "title": "Travelling Salesman Problem Set 1",
    "url": "https://www.geeksforgeeks.org/travelling-salesman-problem-set-1/",
    "platform": "GeeksforGeeks",
    "chapterId": 3,
    "chapterTitle": "Linked Lists",
    "topicId": "3.1",
    "topicTitle": "Linked List Patterns & Pointer Reversal"
  },
  {
    "id": 473,
    "title": "Travelling Salesman Problem using Dynamic Programming",
    "url": "https://www.geeksforgeeks.org/travelling-salesman-problem-using-dynamic-programming/",
    "platform": "GeeksforGeeks",
    "chapterId": 3,
    "chapterTitle": "Linked Lists",
    "topicId": "3.1",
    "topicTitle": "Linked List Patterns & Pointer Reversal"
  },
  {
    "id": 474,
    "title": "Triplets with Smaller Sum",
    "url": "https://www.geeksforgeeks.org/problems/count-triplets-with-sum-smaller-than-x5549/1",
    "platform": "GeeksforGeeks",
    "chapterId": 3,
    "chapterTitle": "Linked Lists",
    "topicId": "3.1",
    "topicTitle": "Linked List Patterns & Pointer Reversal"
  },
  {
    "id": 475,
    "title": "Daily Temperatures",
    "url": "https://leetcode.com/problems/daily-temperatures",
    "platform": "LeetCode",
    "chapterId": 4,
    "chapterTitle": "Stacks & Queues",
    "topicId": "4.1",
    "topicTitle": "Monotonic Stack & Monotonic Queue"
  },
  {
    "id": 476,
    "title": "Histogram Max Rectangular Area",
    "url": "https://www.geeksforgeeks.org/problems/maximum-rectangular-area-in-a-histogram-1587115620/1",
    "platform": "GeeksforGeeks",
    "chapterId": 4,
    "chapterTitle": "Stacks & Queues",
    "topicId": "4.1",
    "topicTitle": "Monotonic Stack & Monotonic Queue"
  },
  {
    "id": 477,
    "title": "Largest Rectangle in Histogram",
    "url": "https://leetcode.com/problems/largest-rectangle-in-histogram",
    "platform": "LeetCode",
    "chapterId": 4,
    "chapterTitle": "Stacks & Queues",
    "topicId": "4.1",
    "topicTitle": "Monotonic Stack & Monotonic Queue"
  },
  {
    "id": 478,
    "title": "Max rectangle",
    "url": "https://www.geeksforgeeks.org/problems/max-rectangle/1",
    "platform": "GeeksforGeeks",
    "chapterId": 4,
    "chapterTitle": "Stacks & Queues",
    "topicId": "4.1",
    "topicTitle": "Monotonic Stack & Monotonic Queue"
  },
  {
    "id": 479,
    "title": "Max Value of Equation",
    "url": "https://leetcode.com/problems/max-value-of-equation",
    "platform": "LeetCode",
    "chapterId": 4,
    "chapterTitle": "Stacks & Queues",
    "topicId": "4.1",
    "topicTitle": "Monotonic Stack & Monotonic Queue"
  },
  {
    "id": 480,
    "title": "Next Greater Element",
    "url": "https://www.geeksforgeeks.org/problems/next-larger-element-1587115620/1",
    "platform": "GeeksforGeeks",
    "chapterId": 4,
    "chapterTitle": "Stacks & Queues",
    "topicId": "4.1",
    "topicTitle": "Monotonic Stack & Monotonic Queue"
  },
  {
    "id": 481,
    "title": "Next Smaller Element",
    "url": "https://www.geeksforgeeks.org/next-smaller-element/",
    "platform": "GeeksforGeeks",
    "chapterId": 4,
    "chapterTitle": "Stacks & Queues",
    "topicId": "4.1",
    "topicTitle": "Monotonic Stack & Monotonic Queue"
  },
  {
    "id": 482,
    "title": "Online Stock Span",
    "url": "https://leetcode.com/problems/online-stock-span",
    "platform": "LeetCode",
    "chapterId": 4,
    "chapterTitle": "Stacks & Queues",
    "topicId": "4.1",
    "topicTitle": "Monotonic Stack & Monotonic Queue"
  },
  {
    "id": 483,
    "title": "Remove K Digits",
    "url": "https://leetcode.com/problems/remove-k-digits",
    "platform": "LeetCode",
    "chapterId": 4,
    "chapterTitle": "Stacks & Queues",
    "topicId": "4.1",
    "topicTitle": "Monotonic Stack & Monotonic Queue"
  },
  {
    "id": 484,
    "title": "Sliding Window Maximum",
    "url": "https://leetcode.com/problems/sliding-window-maximum",
    "platform": "LeetCode",
    "chapterId": 4,
    "chapterTitle": "Stacks & Queues",
    "topicId": "4.1",
    "topicTitle": "Monotonic Stack & Monotonic Queue"
  },
  {
    "id": 485,
    "title": "Sliding Window Maximum Maximum Of All Subarrays Of Size K",
    "url": "https://www.geeksforgeeks.org/sliding-window-maximum-maximum-of-all-subarrays-of-size-k/",
    "platform": "GeeksforGeeks",
    "chapterId": 4,
    "chapterTitle": "Stacks & Queues",
    "topicId": "4.1",
    "topicTitle": "Monotonic Stack & Monotonic Queue"
  },
  {
    "id": 486,
    "title": "Stock span problem",
    "url": "https://leetcode.com/problems/stock-span-problem/",
    "platform": "LeetCode",
    "chapterId": 4,
    "chapterTitle": "Stacks & Queues",
    "topicId": "4.1",
    "topicTitle": "Monotonic Stack & Monotonic Queue"
  },
  {
    "id": 487,
    "title": "Sum of Subarray Minimums",
    "url": "https://leetcode.com/problems/sum-of-subarray-minimums",
    "platform": "LeetCode",
    "chapterId": 4,
    "chapterTitle": "Stacks & Queues",
    "topicId": "4.1",
    "topicTitle": "Monotonic Stack & Monotonic Queue"
  },
  {
    "id": 488,
    "title": "Sum of Subarray Ranges",
    "url": "https://leetcode.com/problems/sum-of-subarray-ranges/",
    "platform": "LeetCode",
    "chapterId": 4,
    "chapterTitle": "Stacks & Queues",
    "topicId": "4.1",
    "topicTitle": "Monotonic Stack & Monotonic Queue"
  },
  {
    "id": 489,
    "title": "Baseball Game",
    "url": "https://leetcode.com/problems/baseball-game/",
    "platform": "LeetCode",
    "chapterId": 4,
    "chapterTitle": "Stacks & Queues",
    "topicId": "4.2",
    "topicTitle": "Stacks, Queues & Expression Parsing"
  },
  {
    "id": 490,
    "title": "Basic Calculator",
    "url": "https://leetcode.com/problems/basic-calculator",
    "platform": "LeetCode",
    "chapterId": 4,
    "chapterTitle": "Stacks & Queues",
    "topicId": "4.2",
    "topicTitle": "Stacks, Queues & Expression Parsing"
  },
  {
    "id": 491,
    "title": "Boolean Parenthesization",
    "url": "https://www.geeksforgeeks.org/problems/boolean-parenthesization5610/1",
    "platform": "GeeksforGeeks",
    "chapterId": 4,
    "chapterTitle": "Stacks & Queues",
    "topicId": "4.2",
    "topicTitle": "Stacks, Queues & Expression Parsing"
  },
  {
    "id": 492,
    "title": "Circular Tour",
    "url": "https://www.geeksforgeeks.org/problems/circular-tour-1587115620/1",
    "platform": "GeeksforGeeks",
    "chapterId": 4,
    "chapterTitle": "Stacks & Queues",
    "topicId": "4.2",
    "topicTitle": "Stacks, Queues & Expression Parsing"
  },
  {
    "id": 493,
    "title": "Decode String",
    "url": "https://leetcode.com/problems/decode-string",
    "platform": "LeetCode",
    "chapterId": 4,
    "chapterTitle": "Stacks & Queues",
    "topicId": "4.2",
    "topicTitle": "Stacks, Queues & Expression Parsing"
  },
  {
    "id": 494,
    "title": "Design A Stack With Find Middle Operation",
    "url": "https://www.geeksforgeeks.org/design-a-stack-with-find-middle-operation/",
    "platform": "GeeksforGeeks",
    "chapterId": 4,
    "chapterTitle": "Stacks & Queues",
    "topicId": "4.2",
    "topicTitle": "Stacks, Queues & Expression Parsing"
  },
  {
    "id": 495,
    "title": "Design Circular Queue",
    "url": "https://leetcode.com/problems/design-circular-queue/",
    "platform": "LeetCode",
    "chapterId": 4,
    "chapterTitle": "Stacks & Queues",
    "topicId": "4.2",
    "topicTitle": "Stacks, Queues & Expression Parsing"
  },
  {
    "id": 496,
    "title": "Design Hit Counter",
    "url": "https://leetcode.com/problems/design-hit-counter",
    "platform": "LeetCode",
    "chapterId": 4,
    "chapterTitle": "Stacks & Queues",
    "topicId": "4.2",
    "topicTitle": "Stacks, Queues & Expression Parsing"
  },
  {
    "id": 497,
    "title": "Dota2 Senate",
    "url": "https://leetcode.com/problems/dota2-senate/",
    "platform": "LeetCode",
    "chapterId": 4,
    "chapterTitle": "Stacks & Queues",
    "topicId": "4.2",
    "topicTitle": "Stacks, Queues & Expression Parsing"
  },
  {
    "id": 498,
    "title": "Efficiently Implement K Stacks Single Array",
    "url": "https://www.geeksforgeeks.org/efficiently-implement-k-stacks-single-array/",
    "platform": "GeeksforGeeks",
    "chapterId": 4,
    "chapterTitle": "Stacks & Queues",
    "topicId": "4.2",
    "topicTitle": "Stacks, Queues & Expression Parsing"
  },
  {
    "id": 499,
    "title": "Encode and Decode Strings",
    "url": "https://leetcode.com/problems/encode-and-decode-strings",
    "platform": "LeetCode",
    "chapterId": 4,
    "chapterTitle": "Stacks & Queues",
    "topicId": "4.2",
    "topicTitle": "Stacks, Queues & Expression Parsing"
  },
  {
    "id": 500,
    "title": "Expression Contains Redundant Bracket Not",
    "url": "https://www.geeksforgeeks.org/expression-contains-redundant-bracket-not/",
    "platform": "GeeksforGeeks",
    "chapterId": 4,
    "chapterTitle": "Stacks & Queues",
    "topicId": "4.2",
    "topicTitle": "Stacks, Queues & Expression Parsing"
  },
  {
    "id": 501,
    "title": "Find Maximum Sum Possible Equal Sum Three Stacks",
    "url": "https://www.geeksforgeeks.org/find-maximum-sum-possible-equal-sum-three-stacks/",
    "platform": "GeeksforGeeks",
    "chapterId": 4,
    "chapterTitle": "Stacks & Queues",
    "topicId": "4.2",
    "topicTitle": "Stacks, Queues & Expression Parsing"
  },
  {
    "id": 502,
    "title": "Implement Min Stack",
    "url": "https://leetcode.com/problems/implement-min-stack/",
    "platform": "LeetCode",
    "chapterId": 4,
    "chapterTitle": "Stacks & Queues",
    "topicId": "4.2",
    "topicTitle": "Stacks, Queues & Expression Parsing"
  },
  {
    "id": 503,
    "title": "Implement Queue using Arrays",
    "url": "https://leetcode.com/problems/implement-queue-using-arrays/",
    "platform": "LeetCode",
    "chapterId": 4,
    "chapterTitle": "Stacks & Queues",
    "topicId": "4.2",
    "topicTitle": "Stacks, Queues & Expression Parsing"
  },
  {
    "id": 504,
    "title": "Implement Queue using Stack",
    "url": "https://leetcode.com/problems/implement-queue-using-stack/",
    "platform": "LeetCode",
    "chapterId": 4,
    "chapterTitle": "Stacks & Queues",
    "topicId": "4.2",
    "topicTitle": "Stacks, Queues & Expression Parsing"
  },
  {
    "id": 505,
    "title": "Implement Stack and Queue using Deque",
    "url": "https://www.geeksforgeeks.org/implement-stack-queue-using-deque/",
    "platform": "GeeksforGeeks",
    "chapterId": 4,
    "chapterTitle": "Stacks & Queues",
    "topicId": "4.2",
    "topicTitle": "Stacks, Queues & Expression Parsing"
  },
  {
    "id": 506,
    "title": "Implement Stack using Arrays",
    "url": "https://leetcode.com/problems/implement-stack-using-arrays/",
    "platform": "LeetCode",
    "chapterId": 4,
    "chapterTitle": "Stacks & Queues",
    "topicId": "4.2",
    "topicTitle": "Stacks, Queues & Expression Parsing"
  },
  {
    "id": 507,
    "title": "Implement Stack using Queue",
    "url": "https://leetcode.com/problems/implement-stack-using-queue/",
    "platform": "LeetCode",
    "chapterId": 4,
    "chapterTitle": "Stacks & Queues",
    "topicId": "4.2",
    "topicTitle": "Stacks, Queues & Expression Parsing"
  },
  {
    "id": 508,
    "title": "Interleave First Half Queue Second Half",
    "url": "https://www.geeksforgeeks.org/interleave-first-half-queue-second-half/",
    "platform": "GeeksforGeeks",
    "chapterId": 4,
    "chapterTitle": "Stacks & Queues",
    "topicId": "4.2",
    "topicTitle": "Stacks, Queues & Expression Parsing"
  },
  {
    "id": 509,
    "title": "LRU Cache",
    "url": "https://leetcode.com/problems/lru-cache",
    "platform": "LeetCode",
    "chapterId": 4,
    "chapterTitle": "Stacks & Queues",
    "topicId": "4.2",
    "topicTitle": "Stacks, Queues & Expression Parsing"
  },
  {
    "id": 510,
    "title": "Maximum Frequency Stack",
    "url": "https://leetcode.com/problems/maximum-frequency-stack",
    "platform": "LeetCode",
    "chapterId": 4,
    "chapterTitle": "Stacks & Queues",
    "topicId": "4.2",
    "topicTitle": "Stacks, Queues & Expression Parsing"
  },
  {
    "id": 511,
    "title": "Maximum Nesting Depth of the Parentheses",
    "url": "https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses/",
    "platform": "LeetCode",
    "chapterId": 4,
    "chapterTitle": "Stacks & Queues",
    "topicId": "4.2",
    "topicTitle": "Stacks, Queues & Expression Parsing"
  },
  {
    "id": 512,
    "title": "Min Stack",
    "url": "https://leetcode.com/problems/min-stack",
    "platform": "LeetCode",
    "chapterId": 4,
    "chapterTitle": "Stacks & Queues",
    "topicId": "4.2",
    "topicTitle": "Stacks, Queues & Expression Parsing"
  },
  {
    "id": 513,
    "title": "Minimum number of bracket reversals to make an expression balanced",
    "url": "https://leetcode.com/problems/minimum-number-of-bracket-reversals-to-make-an-expression-balanced/",
    "platform": "LeetCode",
    "chapterId": 4,
    "chapterTitle": "Stacks & Queues",
    "topicId": "4.2",
    "topicTitle": "Stacks, Queues & Expression Parsing"
  },
  {
    "id": 514,
    "title": "Minimum Swaps for Bracket Balancing",
    "url": "https://www.geeksforgeeks.org/problems/minimum-swaps-for-bracket-balancing2704/1",
    "platform": "GeeksforGeeks",
    "chapterId": 4,
    "chapterTitle": "Stacks & Queues",
    "topicId": "4.2",
    "topicTitle": "Stacks, Queues & Expression Parsing"
  },
  {
    "id": 515,
    "title": "Page Faults in LRU",
    "url": "https://www.geeksforgeeks.org/problems/page-faults-in-lru5603/1",
    "platform": "GeeksforGeeks",
    "chapterId": 4,
    "chapterTitle": "Stacks & Queues",
    "topicId": "4.2",
    "topicTitle": "Stacks, Queues & Expression Parsing"
  },
  {
    "id": 516,
    "title": "Parenthesis Checker",
    "url": "https://www.geeksforgeeks.org/problems/parenthesis-checker2744/1",
    "platform": "GeeksforGeeks",
    "chapterId": 4,
    "chapterTitle": "Stacks & Queues",
    "topicId": "4.2",
    "topicTitle": "Stacks, Queues & Expression Parsing"
  },
  {
    "id": 517,
    "title": "Program for Least Recently Used (LRU) Page Replacement Algorithm",
    "url": "https://leetcode.com/problems/program-for-least-recently-used-page-replacement-algorithm/",
    "platform": "LeetCode",
    "chapterId": 4,
    "chapterTitle": "Stacks & Queues",
    "topicId": "4.2",
    "topicTitle": "Stacks, Queues & Expression Parsing"
  },
  {
    "id": 518,
    "title": "Queue Reversal",
    "url": "https://www.geeksforgeeks.org/problems/queue-reversal/1",
    "platform": "GeeksforGeeks",
    "chapterId": 4,
    "chapterTitle": "Stacks & Queues",
    "topicId": "4.2",
    "topicTitle": "Stacks, Queues & Expression Parsing"
  },
  {
    "id": 519,
    "title": "Queue Set 1introduction And Array Implementation",
    "url": "https://www.geeksforgeeks.org/queue-set-1introduction-and-array-implementation/",
    "platform": "GeeksforGeeks",
    "chapterId": 4,
    "chapterTitle": "Stacks & Queues",
    "topicId": "4.2",
    "topicTitle": "Stacks, Queues & Expression Parsing"
  },
  {
    "id": 520,
    "title": "Queue using two Stacks",
    "url": "https://www.geeksforgeeks.org/problems/queue-using-two-stacks/1",
    "platform": "GeeksforGeeks",
    "chapterId": 4,
    "chapterTitle": "Stacks & Queues",
    "topicId": "4.2",
    "topicTitle": "Stacks, Queues & Expression Parsing"
  },
  {
    "id": 521,
    "title": "Remove Outermost Parentheses",
    "url": "https://leetcode.com/problems/remove-outermost-parentheses/",
    "platform": "LeetCode",
    "chapterId": 4,
    "chapterTitle": "Stacks & Queues",
    "topicId": "4.2",
    "topicTitle": "Stacks, Queues & Expression Parsing"
  },
  {
    "id": 522,
    "title": "Reverse A Stack Using Recursion",
    "url": "https://www.geeksforgeeks.org/reverse-a-stack-using-recursion/",
    "platform": "GeeksforGeeks",
    "chapterId": 4,
    "chapterTitle": "Stacks & Queues",
    "topicId": "4.2",
    "topicTitle": "Stacks, Queues & Expression Parsing"
  },
  {
    "id": 523,
    "title": "Reverse first K of a Queue",
    "url": "https://www.geeksforgeeks.org/problems/reverse-first-k-elements-of-queue/1",
    "platform": "GeeksforGeeks",
    "chapterId": 4,
    "chapterTitle": "Stacks & Queues",
    "topicId": "4.2",
    "topicTitle": "Stacks, Queues & Expression Parsing"
  },
  {
    "id": 524,
    "title": "Reverse Using Stack",
    "url": "https://www.geeksforgeeks.org/problems/reverse-a-string-using-stack/1",
    "platform": "GeeksforGeeks",
    "chapterId": 4,
    "chapterTitle": "Stacks & Queues",
    "topicId": "4.2",
    "topicTitle": "Stacks, Queues & Expression Parsing"
  },
  {
    "id": 525,
    "title": "Simplify Path",
    "url": "https://leetcode.com/problems/simplify-path",
    "platform": "LeetCode",
    "chapterId": 4,
    "chapterTitle": "Stacks & Queues",
    "topicId": "4.2",
    "topicTitle": "Stacks, Queues & Expression Parsing"
  },
  {
    "id": 526,
    "title": "Sort a stack",
    "url": "https://www.geeksforgeeks.org/problems/sort-a-stack/1",
    "platform": "GeeksforGeeks",
    "chapterId": 4,
    "chapterTitle": "Stacks & Queues",
    "topicId": "4.2",
    "topicTitle": "Stacks, Queues & Expression Parsing"
  },
  {
    "id": 527,
    "title": "Sort a stack using recursion",
    "url": "https://leetcode.com/problems/sort-a-stack-using-recursion/",
    "platform": "LeetCode",
    "chapterId": 4,
    "chapterTitle": "Stacks & Queues",
    "topicId": "4.2",
    "topicTitle": "Stacks, Queues & Expression Parsing"
  },
  {
    "id": 528,
    "title": "Special Stack",
    "url": "https://www.geeksforgeeks.org/problems/special-stack/1",
    "platform": "GeeksforGeeks",
    "chapterId": 4,
    "chapterTitle": "Stacks & Queues",
    "topicId": "4.2",
    "topicTitle": "Stacks, Queues & Expression Parsing"
  },
  {
    "id": 529,
    "title": "Stack using Queue",
    "url": "https://www.geeksforgeeks.org/problems/stack-using-two-queues/1",
    "platform": "GeeksforGeeks",
    "chapterId": 4,
    "chapterTitle": "Stacks & Queues",
    "topicId": "4.2",
    "topicTitle": "Stacks, Queues & Expression Parsing"
  },
  {
    "id": 530,
    "title": "The Celebrity Problem",
    "url": "https://www.geeksforgeeks.org/problems/the-celebrity-problem/1",
    "platform": "GeeksforGeeks",
    "chapterId": 4,
    "chapterTitle": "Stacks & Queues",
    "topicId": "4.2",
    "topicTitle": "Stacks, Queues & Expression Parsing"
  },
  {
    "id": 531,
    "title": "Two Stacks in an Array",
    "url": "https://www.geeksforgeeks.org/problems/implement-two-stacks-in-an-array/1",
    "platform": "GeeksforGeeks",
    "chapterId": 4,
    "chapterTitle": "Stacks & Queues",
    "topicId": "4.2",
    "topicTitle": "Stacks, Queues & Expression Parsing"
  },
  {
    "id": 532,
    "title": "Valid Parentheses",
    "url": "https://leetcode.com/problems/valid-parentheses",
    "platform": "LeetCode",
    "chapterId": 4,
    "chapterTitle": "Stacks & Queues",
    "topicId": "4.2",
    "topicTitle": "Stacks, Queues & Expression Parsing"
  },
  {
    "id": 533,
    "title": "Valid Parenthesis String",
    "url": "https://leetcode.com/problems/valid-parenthesis-string/",
    "platform": "LeetCode",
    "chapterId": 4,
    "chapterTitle": "Stacks & Queues",
    "topicId": "4.2",
    "topicTitle": "Stacks, Queues & Expression Parsing"
  },
  {
    "id": 534,
    "title": "Why priority Queue is used in Djisktra's Algorithm",
    "url": "https://leetcode.com/problems/why-priority-queue-is-used-in-djisktra-s-algorithm/",
    "platform": "LeetCode",
    "chapterId": 4,
    "chapterTitle": "Stacks & Queues",
    "topicId": "4.2",
    "topicTitle": "Stacks, Queues & Expression Parsing"
  },
  {
    "id": 535,
    "title": "Balanced Binary Tree",
    "url": "https://leetcode.com/problems/balanced-binary-tree",
    "platform": "LeetCode",
    "chapterId": 5,
    "chapterTitle": "Binary Trees & BST",
    "topicId": "5.1",
    "topicTitle": "Tree DFS (Traversals, Properties & Path Accumulation)"
  },
  {
    "id": 536,
    "title": "Balanced Tree Check",
    "url": "https://www.geeksforgeeks.org/problems/check-for-balanced-tree/1",
    "platform": "GeeksforGeeks",
    "chapterId": 5,
    "chapterTitle": "Binary Trees & BST",
    "topicId": "5.1",
    "topicTitle": "Tree DFS (Traversals, Properties & Path Accumulation)"
  },
  {
    "id": 537,
    "title": "BBT counter",
    "url": "https://www.geeksforgeeks.org/problems/bbt-counter4914/1",
    "platform": "GeeksforGeeks",
    "chapterId": 5,
    "chapterTitle": "Binary Trees & BST",
    "topicId": "5.1",
    "topicTitle": "Tree DFS (Traversals, Properties & Path Accumulation)"
  },
  {
    "id": 538,
    "title": "Binary Tree Cameras",
    "url": "https://leetcode.com/problems/binary-tree-cameras",
    "platform": "LeetCode",
    "chapterId": 5,
    "chapterTitle": "Binary Trees & BST",
    "topicId": "5.1",
    "topicTitle": "Tree DFS (Traversals, Properties & Path Accumulation)"
  },
  {
    "id": 539,
    "title": "Binary Tree Inorder Traversal",
    "url": "https://leetcode.com/problems/binary-tree-inorder-traversal",
    "platform": "LeetCode",
    "chapterId": 5,
    "chapterTitle": "Binary Trees & BST",
    "topicId": "5.1",
    "topicTitle": "Tree DFS (Traversals, Properties & Path Accumulation)"
  },
  {
    "id": 540,
    "title": "Binary Tree Maximum Path Sum",
    "url": "https://leetcode.com/problems/binary-tree-maximum-path-sum",
    "platform": "LeetCode",
    "chapterId": 5,
    "chapterTitle": "Binary Trees & BST",
    "topicId": "5.1",
    "topicTitle": "Tree DFS (Traversals, Properties & Path Accumulation)"
  },
  {
    "id": 541,
    "title": "Binary Tree Paths",
    "url": "https://leetcode.com/problems/binary-tree-paths",
    "platform": "LeetCode",
    "chapterId": 5,
    "chapterTitle": "Binary Trees & BST",
    "topicId": "5.1",
    "topicTitle": "Tree DFS (Traversals, Properties & Path Accumulation)"
  },
  {
    "id": 542,
    "title": "Binary Tree Representation in Java",
    "url": "https://leetcode.com/problems/binary-tree-representation-in-java/",
    "platform": "LeetCode",
    "chapterId": 5,
    "chapterTitle": "Binary Trees & BST",
    "topicId": "5.1",
    "topicTitle": "Tree DFS (Traversals, Properties & Path Accumulation)"
  },
  {
    "id": 543,
    "title": "Binary Tree To DLL",
    "url": "https://www.geeksforgeeks.org/problems/binary-tree-to-dll/1",
    "platform": "GeeksforGeeks",
    "chapterId": 5,
    "chapterTitle": "Binary Trees & BST",
    "topicId": "5.1",
    "topicTitle": "Tree DFS (Traversals, Properties & Path Accumulation)"
  },
  {
    "id": 544,
    "title": "Check if all levels of two trees are anagrams or not",
    "url": "https://www.geeksforgeeks.org/problems/check-if-all-levels-of-two-trees-are-anagrams-or-not/1",
    "platform": "GeeksforGeeks",
    "chapterId": 5,
    "chapterTitle": "Binary Trees & BST",
    "topicId": "5.1",
    "topicTitle": "Tree DFS (Traversals, Properties & Path Accumulation)"
  },
  {
    "id": 545,
    "title": "Check if two trees are identical or not",
    "url": "https://leetcode.com/problems/check-if-two-trees-are-identical-or-not/",
    "platform": "LeetCode",
    "chapterId": 5,
    "chapterTitle": "Binary Trees & BST",
    "topicId": "5.1",
    "topicTitle": "Tree DFS (Traversals, Properties & Path Accumulation)"
  },
  {
    "id": 546,
    "title": "Check Mirror in N-ary tree",
    "url": "https://www.geeksforgeeks.org/problems/check-mirror-in-n-ary-tree1528/1",
    "platform": "GeeksforGeeks",
    "chapterId": 5,
    "chapterTitle": "Binary Trees & BST",
    "topicId": "5.1",
    "topicTitle": "Tree DFS (Traversals, Properties & Path Accumulation)"
  },
  {
    "id": 547,
    "title": "Children Sum Property in Binary Tree",
    "url": "https://leetcode.com/problems/children-sum-property-in-binary-tree/",
    "platform": "LeetCode",
    "chapterId": 5,
    "chapterTitle": "Binary Trees & BST",
    "topicId": "5.1",
    "topicTitle": "Tree DFS (Traversals, Properties & Path Accumulation)"
  },
  {
    "id": 548,
    "title": "Construct Binary Tree from Preorder and Inorder Traversal",
    "url": "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal",
    "platform": "LeetCode",
    "chapterId": 5,
    "chapterTitle": "Binary Trees & BST",
    "topicId": "5.1",
    "topicTitle": "Tree DFS (Traversals, Properties & Path Accumulation)"
  },
  {
    "id": 549,
    "title": "Construct Binary Tree String Bracket Representation",
    "url": "https://www.geeksforgeeks.org/construct-binary-tree-string-bracket-representation/",
    "platform": "GeeksforGeeks",
    "chapterId": 5,
    "chapterTitle": "Binary Trees & BST",
    "topicId": "5.1",
    "topicTitle": "Tree DFS (Traversals, Properties & Path Accumulation)"
  },
  {
    "id": 550,
    "title": "Construct Quad Tree",
    "url": "https://leetcode.com/problems/construct-quad-tree/",
    "platform": "LeetCode",
    "chapterId": 5,
    "chapterTitle": "Binary Trees & BST",
    "topicId": "5.1",
    "topicTitle": "Tree DFS (Traversals, Properties & Path Accumulation)"
  },
  {
    "id": 551,
    "title": "Construct Tree from Inorder & Preorder",
    "url": "https://www.geeksforgeeks.org/problems/construct-tree-1/1",
    "platform": "GeeksforGeeks",
    "chapterId": 5,
    "chapterTitle": "Binary Trees & BST",
    "topicId": "5.1",
    "topicTitle": "Tree DFS (Traversals, Properties & Path Accumulation)"
  },
  {
    "id": 552,
    "title": "Construct Tree From Preorder Traversal",
    "url": "https://www.geeksforgeeks.org/problems/construct-tree-from-preorder-traversal/1",
    "platform": "GeeksforGeeks",
    "chapterId": 5,
    "chapterTitle": "Binary Trees & BST",
    "topicId": "5.1",
    "topicTitle": "Tree DFS (Traversals, Properties & Path Accumulation)"
  },
  {
    "id": 553,
    "title": "Count Complete Tree Nodes",
    "url": "https://leetcode.com/problems/count-complete-tree-nodes/",
    "platform": "LeetCode",
    "chapterId": 5,
    "chapterTitle": "Binary Trees & BST",
    "topicId": "5.1",
    "topicTitle": "Tree DFS (Traversals, Properties & Path Accumulation)"
  },
  {
    "id": 554,
    "title": "Count Good Nodes In Binary Tree",
    "url": "https://leetcode.com/problems/count-good-nodes-in-binary-tree/",
    "platform": "LeetCode",
    "chapterId": 5,
    "chapterTitle": "Binary Trees & BST",
    "topicId": "5.1",
    "topicTitle": "Tree DFS (Traversals, Properties & Path Accumulation)"
  },
  {
    "id": 555,
    "title": "Create A Mirror Tree From The Given Binary Tree",
    "url": "https://www.geeksforgeeks.org/create-a-mirror-tree-from-the-given-binary-tree/",
    "platform": "GeeksforGeeks",
    "chapterId": 5,
    "chapterTitle": "Binary Trees & BST",
    "topicId": "5.1",
    "topicTitle": "Tree DFS (Traversals, Properties & Path Accumulation)"
  },
  {
    "id": 556,
    "title": "Delete Leaves With a Given Value",
    "url": "https://leetcode.com/problems/delete-leaves-with-a-given-value/",
    "platform": "LeetCode",
    "chapterId": 5,
    "chapterTitle": "Binary Trees & BST",
    "topicId": "5.1",
    "topicTitle": "Tree DFS (Traversals, Properties & Path Accumulation)"
  },
  {
    "id": 557,
    "title": "Diameter of Binary Tree",
    "url": "https://leetcode.com/problems/diameter-of-binary-tree",
    "platform": "LeetCode",
    "chapterId": 5,
    "chapterTitle": "Binary Trees & BST",
    "topicId": "5.1",
    "topicTitle": "Tree DFS (Traversals, Properties & Path Accumulation)"
  },
  {
    "id": 558,
    "title": "Duplicate Subtree",
    "url": "https://www.geeksforgeeks.org/problems/duplicate-subtree-in-binary-tree/1",
    "platform": "GeeksforGeeks",
    "chapterId": 5,
    "chapterTitle": "Binary Trees & BST",
    "topicId": "5.1",
    "topicTitle": "Tree DFS (Traversals, Properties & Path Accumulation)"
  },
  {
    "id": 559,
    "title": "Find Largest Subtree Sum Tree",
    "url": "https://www.geeksforgeeks.org/find-largest-subtree-sum-tree/",
    "platform": "GeeksforGeeks",
    "chapterId": 5,
    "chapterTitle": "Binary Trees & BST",
    "topicId": "5.1",
    "topicTitle": "Tree DFS (Traversals, Properties & Path Accumulation)"
  },
  {
    "id": 560,
    "title": "Flatten Binary Tree to Linked List",
    "url": "https://leetcode.com/problems/flatten-binary-tree-to-linked-list",
    "platform": "LeetCode",
    "chapterId": 5,
    "chapterTitle": "Binary Trees & BST",
    "topicId": "5.1",
    "topicTitle": "Tree DFS (Traversals, Properties & Path Accumulation)"
  },
  {
    "id": 561,
    "title": "Height of Binary Tree",
    "url": "https://www.geeksforgeeks.org/problems/height-of-binary-tree/1",
    "platform": "GeeksforGeeks",
    "chapterId": 5,
    "chapterTitle": "Binary Trees & BST",
    "topicId": "5.1",
    "topicTitle": "Tree DFS (Traversals, Properties & Path Accumulation)"
  },
  {
    "id": 562,
    "title": "Introduction to Trees",
    "url": "https://leetcode.com/problems/introduction-to-trees/",
    "platform": "LeetCode",
    "chapterId": 5,
    "chapterTitle": "Binary Trees & BST",
    "topicId": "5.1",
    "topicTitle": "Tree DFS (Traversals, Properties & Path Accumulation)"
  },
  {
    "id": 563,
    "title": "Invert Binary Tree",
    "url": "https://leetcode.com/problems/invert-binary-tree",
    "platform": "LeetCode",
    "chapterId": 5,
    "chapterTitle": "Binary Trees & BST",
    "topicId": "5.1",
    "topicTitle": "Tree DFS (Traversals, Properties & Path Accumulation)"
  },
  {
    "id": 564,
    "title": "Is Binary Tree Heap",
    "url": "https://www.geeksforgeeks.org/problems/is-binary-tree-heap/1",
    "platform": "GeeksforGeeks",
    "chapterId": 5,
    "chapterTitle": "Binary Trees & BST",
    "topicId": "5.1",
    "topicTitle": "Tree DFS (Traversals, Properties & Path Accumulation)"
  },
  {
    "id": 565,
    "title": "Isomorphic Trees",
    "url": "https://www.geeksforgeeks.org/problems/check-if-tree-is-isomorphic/1",
    "platform": "GeeksforGeeks",
    "chapterId": 5,
    "chapterTitle": "Binary Trees & BST",
    "topicId": "5.1",
    "topicTitle": "Tree DFS (Traversals, Properties & Path Accumulation)"
  },
  {
    "id": 566,
    "title": "Kth Ancestor Node Binary Tree Set 2",
    "url": "https://www.geeksforgeeks.org/kth-ancestor-node-binary-tree-set-2/",
    "platform": "GeeksforGeeks",
    "chapterId": 5,
    "chapterTitle": "Binary Trees & BST",
    "topicId": "5.1",
    "topicTitle": "Tree DFS (Traversals, Properties & Path Accumulation)"
  },
  {
    "id": 567,
    "title": "LCA in Binary Tree",
    "url": "https://www.geeksforgeeks.org/problems/lowest-common-ancestor-in-a-binary-tree/1",
    "platform": "GeeksforGeeks",
    "chapterId": 5,
    "chapterTitle": "Binary Trees & BST",
    "topicId": "5.1",
    "topicTitle": "Tree DFS (Traversals, Properties & Path Accumulation)"
  },
  {
    "id": 568,
    "title": "LCA in BT",
    "url": "https://leetcode.com/problems/lca-in-bt/",
    "platform": "LeetCode",
    "chapterId": 5,
    "chapterTitle": "Binary Trees & BST",
    "topicId": "5.1",
    "topicTitle": "Tree DFS (Traversals, Properties & Path Accumulation)"
  },
  {
    "id": 569,
    "title": "Leaves at Same Level or Not",
    "url": "https://www.geeksforgeeks.org/problems/leaf-at-same-level/1",
    "platform": "GeeksforGeeks",
    "chapterId": 5,
    "chapterTitle": "Binary Trees & BST",
    "topicId": "5.1",
    "topicTitle": "Tree DFS (Traversals, Properties & Path Accumulation)"
  },
  {
    "id": 570,
    "title": "Lowest Common Ancestor of a Binary Tree",
    "url": "https://leetcode.com/problems/binary-search-tree-iterator",
    "platform": "LeetCode",
    "chapterId": 5,
    "chapterTitle": "Binary Trees & BST",
    "topicId": "5.1",
    "topicTitle": "Tree DFS (Traversals, Properties & Path Accumulation)"
  },
  {
    "id": 571,
    "title": "Maximum Depth of Binary Tree",
    "url": "https://leetcode.com/problems/maximum-depth-of-binary-tree",
    "platform": "LeetCode",
    "chapterId": 5,
    "chapterTitle": "Binary Trees & BST",
    "topicId": "5.1",
    "topicTitle": "Tree DFS (Traversals, Properties & Path Accumulation)"
  },
  {
    "id": 572,
    "title": "Maximum path sum in matrix",
    "url": "https://www.geeksforgeeks.org/problems/path-in-matrix3805/1",
    "platform": "GeeksforGeeks",
    "chapterId": 5,
    "chapterTitle": "Binary Trees & BST",
    "topicId": "5.1",
    "topicTitle": "Tree DFS (Traversals, Properties & Path Accumulation)"
  },
  {
    "id": 573,
    "title": "Maximum Sum Nodes Binary Tree No Two Adjacent",
    "url": "https://www.geeksforgeeks.org/maximum-sum-nodes-binary-tree-no-two-adjacent/",
    "platform": "GeeksforGeeks",
    "chapterId": 5,
    "chapterTitle": "Binary Trees & BST",
    "topicId": "5.1",
    "topicTitle": "Tree DFS (Traversals, Properties & Path Accumulation)"
  },
  {
    "id": 574,
    "title": "Merge Two Binary Trees",
    "url": "https://leetcode.com/problems/merge-two-binary-trees",
    "platform": "LeetCode",
    "chapterId": 5,
    "chapterTitle": "Binary Trees & BST",
    "topicId": "5.1",
    "topicTitle": "Tree DFS (Traversals, Properties & Path Accumulation)"
  },
  {
    "id": 575,
    "title": "Min distance between two given nodes of a Binary Tree",
    "url": "https://www.geeksforgeeks.org/problems/min-distance-between-two-given-nodes-of-a-binary-tree/1",
    "platform": "GeeksforGeeks",
    "chapterId": 5,
    "chapterTitle": "Binary Trees & BST",
    "topicId": "5.1",
    "topicTitle": "Tree DFS (Traversals, Properties & Path Accumulation)"
  },
  {
    "id": 576,
    "title": "Minimum Cost Tree From Leaf Values",
    "url": "https://leetcode.com/problems/minimum-cost-tree-from-leaf-values",
    "platform": "LeetCode",
    "chapterId": 5,
    "chapterTitle": "Binary Trees & BST",
    "topicId": "5.1",
    "topicTitle": "Tree DFS (Traversals, Properties & Path Accumulation)"
  },
  {
    "id": 577,
    "title": "Minimum Path Sum",
    "url": "https://leetcode.com/problems/minimum-path-sum",
    "platform": "LeetCode",
    "chapterId": 5,
    "chapterTitle": "Binary Trees & BST",
    "topicId": "5.1",
    "topicTitle": "Tree DFS (Traversals, Properties & Path Accumulation)"
  },
  {
    "id": 578,
    "title": "Morris Preorder Traversal of a Binary Tree",
    "url": "https://leetcode.com/problems/morris-preorder-traversal-of-a-binary-tree/",
    "platform": "LeetCode",
    "chapterId": 5,
    "chapterTitle": "Binary Trees & BST",
    "topicId": "5.1",
    "topicTitle": "Tree DFS (Traversals, Properties & Path Accumulation)"
  },
  {
    "id": 579,
    "title": "Path Sum",
    "url": "https://leetcode.com/problems/path-sum",
    "platform": "LeetCode",
    "chapterId": 5,
    "chapterTitle": "Binary Trees & BST",
    "topicId": "5.1",
    "topicTitle": "Tree DFS (Traversals, Properties & Path Accumulation)"
  },
  {
    "id": 580,
    "title": "Path Sum II",
    "url": "https://leetcode.com/problems/path-sum-ii",
    "platform": "LeetCode",
    "chapterId": 5,
    "chapterTitle": "Binary Trees & BST",
    "topicId": "5.1",
    "topicTitle": "Tree DFS (Traversals, Properties & Path Accumulation)"
  },
  {
    "id": 581,
    "title": "Post-order Traversal of Binary Tree using 2 stack",
    "url": "https://leetcode.com/problems/post-order-traversal-of-binary-tree-using-2-stack/",
    "platform": "LeetCode",
    "chapterId": 5,
    "chapterTitle": "Binary Trees & BST",
    "topicId": "5.1",
    "topicTitle": "Tree DFS (Traversals, Properties & Path Accumulation)"
  },
  {
    "id": 582,
    "title": "Print K Sum Paths Binary Tree",
    "url": "https://www.geeksforgeeks.org/print-k-sum-paths-binary-tree/",
    "platform": "GeeksforGeeks",
    "chapterId": 5,
    "chapterTitle": "Binary Trees & BST",
    "topicId": "5.1",
    "topicTitle": "Tree DFS (Traversals, Properties & Path Accumulation)"
  },
  {
    "id": 583,
    "title": "Print root to leaf path in BT",
    "url": "https://leetcode.com/problems/print-root-to-leaf-path-in-bt/",
    "platform": "LeetCode",
    "chapterId": 5,
    "chapterTitle": "Binary Trees & BST",
    "topicId": "5.1",
    "topicTitle": "Tree DFS (Traversals, Properties & Path Accumulation)"
  },
  {
    "id": 584,
    "title": "Same Tree",
    "url": "https://leetcode.com/problems/same-tree",
    "platform": "LeetCode",
    "chapterId": 5,
    "chapterTitle": "Binary Trees & BST",
    "topicId": "5.1",
    "topicTitle": "Tree DFS (Traversals, Properties & Path Accumulation)"
  },
  {
    "id": 585,
    "title": "Serialize and De-serialize BT",
    "url": "https://leetcode.com/problems/serialize-and-de-serialize-bt/",
    "platform": "LeetCode",
    "chapterId": 5,
    "chapterTitle": "Binary Trees & BST",
    "topicId": "5.1",
    "topicTitle": "Tree DFS (Traversals, Properties & Path Accumulation)"
  },
  {
    "id": 586,
    "title": "Serialize and Deserialize Binary Tree",
    "url": "https://leetcode.com/problems/serialize-and-deserialize-binary-tree",
    "platform": "LeetCode",
    "chapterId": 5,
    "chapterTitle": "Binary Trees & BST",
    "topicId": "5.1",
    "topicTitle": "Tree DFS (Traversals, Properties & Path Accumulation)"
  },
  {
    "id": 587,
    "title": "Subtree of Another Tree",
    "url": "https://leetcode.com/problems/subtree-of-another-tree",
    "platform": "LeetCode",
    "chapterId": 5,
    "chapterTitle": "Binary Trees & BST",
    "topicId": "5.1",
    "topicTitle": "Tree DFS (Traversals, Properties & Path Accumulation)"
  },
  {
    "id": 588,
    "title": "Sum of Distances in Tree",
    "url": "https://leetcode.com/problems/sum-of-distances-in-tree",
    "platform": "LeetCode",
    "chapterId": 5,
    "chapterTitle": "Binary Trees & BST",
    "topicId": "5.1",
    "topicTitle": "Tree DFS (Traversals, Properties & Path Accumulation)"
  },
  {
    "id": 589,
    "title": "Sum of Left Leaves",
    "url": "https://leetcode.com/problems/sum-of-left-leaves",
    "platform": "LeetCode",
    "chapterId": 5,
    "chapterTitle": "Binary Trees & BST",
    "topicId": "5.1",
    "topicTitle": "Tree DFS (Traversals, Properties & Path Accumulation)"
  },
  {
    "id": 590,
    "title": "Sum Root to Leaf Numbers",
    "url": "https://leetcode.com/problems/sum-root-to-leaf-numbers/",
    "platform": "LeetCode",
    "chapterId": 5,
    "chapterTitle": "Binary Trees & BST",
    "topicId": "5.1",
    "topicTitle": "Tree DFS (Traversals, Properties & Path Accumulation)"
  },
  {
    "id": 591,
    "title": "Sum Tree",
    "url": "https://www.geeksforgeeks.org/problems/sum-tree/1",
    "platform": "GeeksforGeeks",
    "chapterId": 5,
    "chapterTitle": "Binary Trees & BST",
    "topicId": "5.1",
    "topicTitle": "Tree DFS (Traversals, Properties & Path Accumulation)"
  },
  {
    "id": 592,
    "title": "Symmetric Binary Tree",
    "url": "https://leetcode.com/problems/symmetric-binary-tree/",
    "platform": "LeetCode",
    "chapterId": 5,
    "chapterTitle": "Binary Trees & BST",
    "topicId": "5.1",
    "topicTitle": "Tree DFS (Traversals, Properties & Path Accumulation)"
  },
  {
    "id": 593,
    "title": "Symmetric Tree",
    "url": "https://leetcode.com/problems/symmetric-tree",
    "platform": "LeetCode",
    "chapterId": 5,
    "chapterTitle": "Binary Trees & BST",
    "topicId": "5.1",
    "topicTitle": "Tree DFS (Traversals, Properties & Path Accumulation)"
  },
  {
    "id": 594,
    "title": "Transform to Sum Tree",
    "url": "https://www.geeksforgeeks.org/problems/transform-to-sum-tree/1",
    "platform": "GeeksforGeeks",
    "chapterId": 5,
    "chapterTitle": "Binary Trees & BST",
    "topicId": "5.1",
    "topicTitle": "Tree DFS (Traversals, Properties & Path Accumulation)"
  },
  {
    "id": 595,
    "title": "All Nodes Distance K in Binary Tree",
    "url": "https://leetcode.com/problems/all-nodes-distance-k-in-binary-tree",
    "platform": "LeetCode",
    "chapterId": 5,
    "chapterTitle": "Binary Trees & BST",
    "topicId": "5.2",
    "topicTitle": "Tree BFS (Level-Order, Zigzag & Radial Propagation)"
  },
  {
    "id": 596,
    "title": "Average of Levels in Binary Tree",
    "url": "https://leetcode.com/problems/average-of-levels-in-binary-tree/",
    "platform": "LeetCode",
    "chapterId": 5,
    "chapterTitle": "Binary Trees & BST",
    "topicId": "5.2",
    "topicTitle": "Tree BFS (Level-Order, Zigzag & Radial Propagation)"
  },
  {
    "id": 597,
    "title": "Binary Tree Right Side View",
    "url": "https://leetcode.com/problems/binary-tree-right-side-view",
    "platform": "LeetCode",
    "chapterId": 5,
    "chapterTitle": "Binary Trees & BST",
    "topicId": "5.2",
    "topicTitle": "Tree BFS (Level-Order, Zigzag & Radial Propagation)"
  },
  {
    "id": 598,
    "title": "Binary Tree Zigzag Level Order Traversal",
    "url": "https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal",
    "platform": "LeetCode",
    "chapterId": 5,
    "chapterTitle": "Binary Trees & BST",
    "topicId": "5.2",
    "topicTitle": "Tree BFS (Level-Order, Zigzag & Radial Propagation)"
  },
  {
    "id": 599,
    "title": "Bottom view of BT",
    "url": "https://leetcode.com/problems/bottom-view-of-bt/",
    "platform": "LeetCode",
    "chapterId": 5,
    "chapterTitle": "Binary Trees & BST",
    "topicId": "5.2",
    "topicTitle": "Tree BFS (Level-Order, Zigzag & Radial Propagation)"
  },
  {
    "id": 600,
    "title": "Boundary Traversal",
    "url": "https://leetcode.com/problems/boundary-traversal/",
    "platform": "LeetCode",
    "chapterId": 5,
    "chapterTitle": "Binary Trees & BST",
    "topicId": "5.2",
    "topicTitle": "Tree BFS (Level-Order, Zigzag & Radial Propagation)"
  },
  {
    "id": 601,
    "title": "Diagonal Tree Traversal",
    "url": "https://www.geeksforgeeks.org/problems/diagonal-traversal-of-binary-tree/1",
    "platform": "GeeksforGeeks",
    "chapterId": 5,
    "chapterTitle": "Binary Trees & BST",
    "topicId": "5.2",
    "topicTitle": "Tree BFS (Level-Order, Zigzag & Radial Propagation)"
  },
  {
    "id": 602,
    "title": "Left View of Binary Tree",
    "url": "https://www.geeksforgeeks.org/problems/left-view-of-binary-tree/1",
    "platform": "GeeksforGeeks",
    "chapterId": 5,
    "chapterTitle": "Binary Trees & BST",
    "topicId": "5.2",
    "topicTitle": "Tree BFS (Level-Order, Zigzag & Radial Propagation)"
  },
  {
    "id": 603,
    "title": "Level order traversal",
    "url": "https://www.geeksforgeeks.org/problems/level-order-traversal/1",
    "platform": "GeeksforGeeks",
    "chapterId": 5,
    "chapterTitle": "Binary Trees & BST",
    "topicId": "5.2",
    "topicTitle": "Tree BFS (Level-Order, Zigzag & Radial Propagation)"
  },
  {
    "id": 604,
    "title": "Minimum time taken to burn the BT from a given Node",
    "url": "https://leetcode.com/problems/minimum-time-taken-to-burn-the-bt-from-a-given-node/",
    "platform": "LeetCode",
    "chapterId": 5,
    "chapterTitle": "Binary Trees & BST",
    "topicId": "5.2",
    "topicTitle": "Tree BFS (Level-Order, Zigzag & Radial Propagation)"
  },
  {
    "id": 605,
    "title": "Populating Next Right Pointers in Each Node",
    "url": "https://leetcode.com/problems/populating-next-right-pointers-in-each-node",
    "platform": "LeetCode",
    "chapterId": 5,
    "chapterTitle": "Binary Trees & BST",
    "topicId": "5.2",
    "topicTitle": "Tree BFS (Level-Order, Zigzag & Radial Propagation)"
  },
  {
    "id": 606,
    "title": "Top View of Binary Tree",
    "url": "https://www.geeksforgeeks.org/problems/top-view-of-binary-tree/1",
    "platform": "GeeksforGeeks",
    "chapterId": 5,
    "chapterTitle": "Binary Trees & BST",
    "topicId": "5.2",
    "topicTitle": "Tree BFS (Level-Order, Zigzag & Radial Propagation)"
  },
  {
    "id": 607,
    "title": "Top View of BT",
    "url": "https://leetcode.com/problems/top-view-of-bt/",
    "platform": "LeetCode",
    "chapterId": 5,
    "chapterTitle": "Binary Trees & BST",
    "topicId": "5.2",
    "topicTitle": "Tree BFS (Level-Order, Zigzag & Radial Propagation)"
  },
  {
    "id": 608,
    "title": "Vertical Order Traversal",
    "url": "https://leetcode.com/problems/vertical-order-traversal/",
    "platform": "LeetCode",
    "chapterId": 5,
    "chapterTitle": "Binary Trees & BST",
    "topicId": "5.2",
    "topicTitle": "Tree BFS (Level-Order, Zigzag & Radial Propagation)"
  },
  {
    "id": 609,
    "title": "Vertical Order Traversal of a Binary Tree",
    "url": "https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree",
    "platform": "LeetCode",
    "chapterId": 5,
    "chapterTitle": "Binary Trees & BST",
    "topicId": "5.2",
    "topicTitle": "Tree BFS (Level-Order, Zigzag & Radial Propagation)"
  },
  {
    "id": 610,
    "title": "Zigzag Conversion",
    "url": "https://leetcode.com/problems/zigzag-conversion/",
    "platform": "LeetCode",
    "chapterId": 5,
    "chapterTitle": "Binary Trees & BST",
    "topicId": "5.2",
    "topicTitle": "Tree BFS (Level-Order, Zigzag & Radial Propagation)"
  },
  {
    "id": 611,
    "title": "ZigZag Tree Traversal",
    "url": "https://www.geeksforgeeks.org/problems/zigzag-tree-traversal/1",
    "platform": "GeeksforGeeks",
    "chapterId": 5,
    "chapterTitle": "Binary Trees & BST",
    "topicId": "5.2",
    "topicTitle": "Tree BFS (Level-Order, Zigzag & Radial Propagation)"
  },
  {
    "id": 612,
    "title": "Binary Search Tree Iterator",
    "url": "https://leetcode.com/problems/binary-search-tree-iterator",
    "platform": "LeetCode",
    "chapterId": 5,
    "chapterTitle": "Binary Trees & BST",
    "topicId": "5.3",
    "topicTitle": "Binary Search Tree (BST) Properties & Operations"
  },
  {
    "id": 613,
    "title": "Binary Search Tree Set 1 Search And Insertion",
    "url": "https://www.geeksforgeeks.org/binary-search-tree-set-1-search-and-insertion/",
    "platform": "GeeksforGeeks",
    "chapterId": 5,
    "chapterTitle": "Binary Trees & BST",
    "topicId": "5.3",
    "topicTitle": "Binary Search Tree (BST) Properties & Operations"
  },
  {
    "id": 614,
    "title": "Binary Tree to BST",
    "url": "https://www.geeksforgeeks.org/problems/binary-tree-to-bst/1",
    "platform": "GeeksforGeeks",
    "chapterId": 5,
    "chapterTitle": "Binary Trees & BST",
    "topicId": "5.3",
    "topicTitle": "Binary Search Tree (BST) Properties & Operations"
  },
  {
    "id": 615,
    "title": "BST with Dead End",
    "url": "https://www.geeksforgeeks.org/problems/check-whether-bst-contains-dead-end/1",
    "platform": "GeeksforGeeks",
    "chapterId": 5,
    "chapterTitle": "Binary Trees & BST",
    "topicId": "5.3",
    "topicTitle": "Binary Search Tree (BST) Properties & Operations"
  },
  {
    "id": 616,
    "title": "Check for BST",
    "url": "https://www.geeksforgeeks.org/problems/check-for-bst/1",
    "platform": "GeeksforGeeks",
    "chapterId": 5,
    "chapterTitle": "Binary Trees & BST",
    "topicId": "5.3",
    "topicTitle": "Binary Search Tree (BST) Properties & Operations"
  },
  {
    "id": 617,
    "title": "Check if a tree is a BST or not",
    "url": "https://leetcode.com/problems/check-if-a-tree-is-a-bst-or-not/",
    "platform": "LeetCode",
    "chapterId": 5,
    "chapterTitle": "Binary Trees & BST",
    "topicId": "5.3",
    "topicTitle": "Binary Search Tree (BST) Properties & Operations"
  },
  {
    "id": 618,
    "title": "Check whether BST contains Dead End",
    "url": "https://www.geeksforgeeks.org/problems/check-whether-bst-contains-dead-end/1",
    "platform": "GeeksforGeeks",
    "chapterId": 5,
    "chapterTitle": "Binary Trees & BST",
    "topicId": "5.3",
    "topicTitle": "Binary Search Tree (BST) Properties & Operations"
  },
  {
    "id": 619,
    "title": "Convert Bst Min Heap",
    "url": "https://www.geeksforgeeks.org/convert-bst-min-heap/",
    "platform": "GeeksforGeeks",
    "chapterId": 5,
    "chapterTitle": "Binary Trees & BST",
    "topicId": "5.3",
    "topicTitle": "Binary Search Tree (BST) Properties & Operations"
  },
  {
    "id": 620,
    "title": "Convert Normal Bst Balanced Bst",
    "url": "https://www.geeksforgeeks.org/convert-normal-bst-balanced-bst/",
    "platform": "GeeksforGeeks",
    "chapterId": 5,
    "chapterTitle": "Binary Trees & BST",
    "topicId": "5.3",
    "topicTitle": "Binary Search Tree (BST) Properties & Operations"
  },
  {
    "id": 621,
    "title": "Convert Sorted Array to Binary Search Tree",
    "url": "https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree",
    "platform": "LeetCode",
    "chapterId": 5,
    "chapterTitle": "Binary Trees & BST",
    "topicId": "5.3",
    "topicTitle": "Binary Search Tree (BST) Properties & Operations"
  },
  {
    "id": 622,
    "title": "Correct BST with two nodes swapped",
    "url": "https://leetcode.com/problems/correct-bst-with-two-nodes-swapped/",
    "platform": "LeetCode",
    "chapterId": 5,
    "chapterTitle": "Binary Trees & BST",
    "topicId": "5.3",
    "topicTitle": "Binary Search Tree (BST) Properties & Operations"
  },
  {
    "id": 623,
    "title": "Count BST Nodes That Lie In a Given Range",
    "url": "https://www.geeksforgeeks.org/problems/count-bst-nodes-that-lie-in-a-given-range/1",
    "platform": "GeeksforGeeks",
    "chapterId": 5,
    "chapterTitle": "Binary Trees & BST",
    "topicId": "5.3",
    "topicTitle": "Binary Search Tree (BST) Properties & Operations"
  },
  {
    "id": 624,
    "title": "Count Number of Substrings",
    "url": "https://leetcode.com/problems/count-number-of-substrings/",
    "platform": "LeetCode",
    "chapterId": 5,
    "chapterTitle": "Binary Trees & BST",
    "topicId": "5.3",
    "topicTitle": "Binary Search Tree (BST) Properties & Operations"
  },
  {
    "id": 625,
    "title": "Delete Node in a BST",
    "url": "https://leetcode.com/problems/delete-node-in-a-bst",
    "platform": "LeetCode",
    "chapterId": 5,
    "chapterTitle": "Binary Trees & BST",
    "topicId": "5.3",
    "topicTitle": "Binary Search Tree (BST) Properties & Operations"
  },
  {
    "id": 626,
    "title": "Find Median Bst Time O1 Space",
    "url": "https://www.geeksforgeeks.org/find-median-bst-time-o1-space/",
    "platform": "GeeksforGeeks",
    "chapterId": 5,
    "chapterTitle": "Binary Trees & BST",
    "topicId": "5.3",
    "topicTitle": "Binary Search Tree (BST) Properties & Operations"
  },
  {
    "id": 627,
    "title": "Find Min/Max in BST",
    "url": "https://leetcode.com/problems/find-min/",
    "platform": "LeetCode",
    "chapterId": 5,
    "chapterTitle": "Binary Trees & BST",
    "topicId": "5.3",
    "topicTitle": "Binary Search Tree (BST) Properties & Operations"
  },
  {
    "id": 628,
    "title": "Find Sum Pairs Across Two BSTs",
    "url": "https://www.geeksforgeeks.org/problems/brothers-from-different-root/1",
    "platform": "GeeksforGeeks",
    "chapterId": 5,
    "chapterTitle": "Binary Trees & BST",
    "topicId": "5.3",
    "topicTitle": "Binary Search Tree (BST) Properties & Operations"
  },
  {
    "id": 629,
    "title": "Flatten Bst To Sorted List Increasing Order",
    "url": "https://www.geeksforgeeks.org/flatten-bst-to-sorted-list-increasing-order/",
    "platform": "GeeksforGeeks",
    "chapterId": 5,
    "chapterTitle": "Binary Trees & BST",
    "topicId": "5.3",
    "topicTitle": "Binary Search Tree (BST) Properties & Operations"
  },
  {
    "id": 630,
    "title": "Floor and Ceil in a BST",
    "url": "https://leetcode.com/problems/floor-and-ceil-in-a-bst/",
    "platform": "LeetCode",
    "chapterId": 5,
    "chapterTitle": "Binary Trees & BST",
    "topicId": "5.3",
    "topicTitle": "Binary Search Tree (BST) Properties & Operations"
  },
  {
    "id": 631,
    "title": "Floor in a Binary Search Tree",
    "url": "https://leetcode.com/problems/floor-in-a-binary-search-tree/",
    "platform": "LeetCode",
    "chapterId": 5,
    "chapterTitle": "Binary Trees & BST",
    "topicId": "5.3",
    "topicTitle": "Binary Search Tree (BST) Properties & Operations"
  },
  {
    "id": 632,
    "title": "Inorder Successor in BST",
    "url": "https://leetcode.com/problems/inorder-successor-in-bst",
    "platform": "LeetCode",
    "chapterId": 5,
    "chapterTitle": "Binary Trees & BST",
    "topicId": "5.3",
    "topicTitle": "Binary Search Tree (BST) Properties & Operations"
  },
  {
    "id": 633,
    "title": "Inorder Successor/Predecessor in BST",
    "url": "https://leetcode.com/problems/inorder-successor/",
    "platform": "LeetCode",
    "chapterId": 5,
    "chapterTitle": "Binary Trees & BST",
    "topicId": "5.3",
    "topicTitle": "Binary Search Tree (BST) Properties & Operations"
  },
  {
    "id": 634,
    "title": "Insert a given node in BST",
    "url": "https://leetcode.com/problems/insert-a-given-node-in-bst/",
    "platform": "LeetCode",
    "chapterId": 5,
    "chapterTitle": "Binary Trees & BST",
    "topicId": "5.3",
    "topicTitle": "Binary Search Tree (BST) Properties & Operations"
  },
  {
    "id": 635,
    "title": "Insert into a Binary Search Tree",
    "url": "https://leetcode.com/problems/insert-into-a-binary-search-tree/",
    "platform": "LeetCode",
    "chapterId": 5,
    "chapterTitle": "Binary Trees & BST",
    "topicId": "5.3",
    "topicTitle": "Binary Search Tree (BST) Properties & Operations"
  },
  {
    "id": 636,
    "title": "Introduction to BST",
    "url": "https://leetcode.com/problems/introduction-to-bst/",
    "platform": "LeetCode",
    "chapterId": 5,
    "chapterTitle": "Binary Trees & BST",
    "topicId": "5.3",
    "topicTitle": "Binary Search Tree (BST) Properties & Operations"
  },
  {
    "id": 637,
    "title": "k-th Smallest in BST",
    "url": "https://www.geeksforgeeks.org/problems/find-k-th-smallest-element-in-bst/1",
    "platform": "GeeksforGeeks",
    "chapterId": 5,
    "chapterTitle": "Binary Trees & BST",
    "topicId": "5.3",
    "topicTitle": "Binary Search Tree (BST) Properties & Operations"
  },
  {
    "id": 638,
    "title": "Kth Smallest and Largest element in BST",
    "url": "https://leetcode.com/problems/kth-smallest-and-largest-element-in-bst/",
    "platform": "LeetCode",
    "chapterId": 5,
    "chapterTitle": "Binary Trees & BST",
    "topicId": "5.3",
    "topicTitle": "Binary Search Tree (BST) Properties & Operations"
  },
  {
    "id": 639,
    "title": "Kth Smallest Element In a Bst",
    "url": "https://leetcode.com/problems/kth-smallest-element-in-a-bst",
    "platform": "LeetCode",
    "chapterId": 5,
    "chapterTitle": "Binary Trees & BST",
    "topicId": "5.3",
    "topicTitle": "Binary Search Tree (BST) Properties & Operations"
  },
  {
    "id": 640,
    "title": "Largest BST",
    "url": "https://www.geeksforgeeks.org/problems/largest-bst/1",
    "platform": "GeeksforGeeks",
    "chapterId": 5,
    "chapterTitle": "Binary Trees & BST",
    "topicId": "5.3",
    "topicTitle": "Binary Search Tree (BST) Properties & Operations"
  },
  {
    "id": 641,
    "title": "Longest Common Substring",
    "url": "https://www.geeksforgeeks.org/problems/longest-common-substring1452/1",
    "platform": "GeeksforGeeks",
    "chapterId": 5,
    "chapterTitle": "Binary Trees & BST",
    "topicId": "5.3",
    "topicTitle": "Binary Search Tree (BST) Properties & Operations"
  },
  {
    "id": 642,
    "title": "Longest Palindromic Substring",
    "url": "https://leetcode.com/problems/longest-palindromic-substring",
    "platform": "LeetCode",
    "chapterId": 5,
    "chapterTitle": "Binary Trees & BST",
    "topicId": "5.3",
    "topicTitle": "Binary Search Tree (BST) Properties & Operations"
  },
  {
    "id": 643,
    "title": "Longest Substring With At Most K Distinct Characters",
    "url": "https://leetcode.com/problems/longest-substring-with-at-most-k-distinct-characters/",
    "platform": "LeetCode",
    "chapterId": 5,
    "chapterTitle": "Binary Trees & BST",
    "topicId": "5.3",
    "topicTitle": "Binary Search Tree (BST) Properties & Operations"
  },
  {
    "id": 644,
    "title": "Longest Substring Without Repeating Characters",
    "url": "https://leetcode.com/problems/longest-substring-without-repeating-characters",
    "platform": "LeetCode",
    "chapterId": 5,
    "chapterTitle": "Binary Trees & BST",
    "topicId": "5.3",
    "topicTitle": "Binary Search Tree (BST) Properties & Operations"
  },
  {
    "id": 645,
    "title": "Lowest Common Ancestor in a BST",
    "url": "https://www.geeksforgeeks.org/problems/lowest-common-ancestor-in-a-bst/1",
    "platform": "GeeksforGeeks",
    "chapterId": 5,
    "chapterTitle": "Binary Trees & BST",
    "topicId": "5.3",
    "topicTitle": "Binary Search Tree (BST) Properties & Operations"
  },
  {
    "id": 646,
    "title": "Median of BST",
    "url": "https://www.geeksforgeeks.org/problems/median-of-bst/1",
    "platform": "GeeksforGeeks",
    "chapterId": 5,
    "chapterTitle": "Binary Trees & BST",
    "topicId": "5.3",
    "topicTitle": "Binary Search Tree (BST) Properties & Operations"
  },
  {
    "id": 647,
    "title": "Merge 2 BST's",
    "url": "https://leetcode.com/problems/merge-2-bst-s/",
    "platform": "LeetCode",
    "chapterId": 5,
    "chapterTitle": "Binary Trees & BST",
    "topicId": "5.3",
    "topicTitle": "Binary Search Tree (BST) Properties & Operations"
  },
  {
    "id": 648,
    "title": "Merge Two Balanced Binary Search Trees",
    "url": "https://www.geeksforgeeks.org/merge-two-balanced-binary-search-trees/",
    "platform": "GeeksforGeeks",
    "chapterId": 5,
    "chapterTitle": "Binary Trees & BST",
    "topicId": "5.3",
    "topicTitle": "Binary Search Tree (BST) Properties & Operations"
  },
  {
    "id": 649,
    "title": "Minimum Absolute Difference in BST",
    "url": "https://leetcode.com/problems/minimum-absolute-difference-in-bst",
    "platform": "LeetCode",
    "chapterId": 5,
    "chapterTitle": "Binary Trees & BST",
    "topicId": "5.3",
    "topicTitle": "Binary Search Tree (BST) Properties & Operations"
  },
  {
    "id": 650,
    "title": "Minimum element in BST",
    "url": "https://www.geeksforgeeks.org/problems/minimum-element-in-bst/1",
    "platform": "GeeksforGeeks",
    "chapterId": 5,
    "chapterTitle": "Binary Trees & BST",
    "topicId": "5.3",
    "topicTitle": "Binary Search Tree (BST) Properties & Operations"
  },
  {
    "id": 651,
    "title": "Minimum Swap Required Convert Binary Tree Binary Search Tree",
    "url": "https://www.geeksforgeeks.org/minimum-swap-required-convert-binary-tree-binary-search-tree/#:~:text=Given%20the%20array%20representation%20of,it%20into%20Binary%20Search%20Tree.&text=Swap%201%3A%20Swap%20node%208,node%209%20with%20node%2010.",
    "platform": "GeeksforGeeks",
    "chapterId": 5,
    "chapterTitle": "Binary Trees & BST",
    "topicId": "5.3",
    "topicTitle": "Binary Search Tree (BST) Properties & Operations"
  },
  {
    "id": 652,
    "title": "Minimum Window Substring",
    "url": "https://leetcode.com/problems/minimum-window-substring",
    "platform": "LeetCode",
    "chapterId": 5,
    "chapterTitle": "Binary Trees & BST",
    "topicId": "5.3",
    "topicTitle": "Binary Search Tree (BST) Properties & Operations"
  },
  {
    "id": 653,
    "title": "Number of distinct substrings in a string",
    "url": "https://leetcode.com/problems/number-of-distinct-substrings-in-a-string/",
    "platform": "LeetCode",
    "chapterId": 5,
    "chapterTitle": "Binary Trees & BST",
    "topicId": "5.3",
    "topicTitle": "Binary Search Tree (BST) Properties & Operations"
  },
  {
    "id": 654,
    "title": "Number of Substrings Containing All Three Characters",
    "url": "https://leetcode.com/problems/number-of-substrings-containing-all-three-characters/",
    "platform": "LeetCode",
    "chapterId": 5,
    "chapterTitle": "Binary Trees & BST",
    "topicId": "5.3",
    "topicTitle": "Binary Search Tree (BST) Properties & Operations"
  },
  {
    "id": 655,
    "title": "Optimal Binary Search Tree",
    "url": "https://www.geeksforgeeks.org/optimal-binary-search-tree-dp-24/",
    "platform": "GeeksforGeeks",
    "chapterId": 5,
    "chapterTitle": "Binary Trees & BST",
    "topicId": "5.3",
    "topicTitle": "Binary Search Tree (BST) Properties & Operations"
  },
  {
    "id": 656,
    "title": "Palindromic Substrings",
    "url": "https://leetcode.com/problems/palindromic-substrings/",
    "platform": "LeetCode",
    "chapterId": 5,
    "chapterTitle": "Binary Trees & BST",
    "topicId": "5.3",
    "topicTitle": "Binary Search Tree (BST) Properties & Operations"
  },
  {
    "id": 657,
    "title": "Preorder to BST",
    "url": "https://www.geeksforgeeks.org/problems/preorder-to-postorder4423/1",
    "platform": "GeeksforGeeks",
    "chapterId": 5,
    "chapterTitle": "Binary Trees & BST",
    "topicId": "5.3",
    "topicTitle": "Binary Search Tree (BST) Properties & Operations"
  },
  {
    "id": 658,
    "title": "Range Sum of BST",
    "url": "https://leetcode.com/problems/range-sum-of-bst",
    "platform": "LeetCode",
    "chapterId": 5,
    "chapterTitle": "Binary Trees & BST",
    "topicId": "5.3",
    "topicTitle": "Binary Search Tree (BST) Properties & Operations"
  },
  {
    "id": 659,
    "title": "Recover Binary Search Tree",
    "url": "https://leetcode.com/problems/recover-binary-search-tree",
    "platform": "LeetCode",
    "chapterId": 5,
    "chapterTitle": "Binary Trees & BST",
    "topicId": "5.3",
    "topicTitle": "Binary Search Tree (BST) Properties & Operations"
  },
  {
    "id": 660,
    "title": "Split the binary string into substrings with equal number of 0s and 1s",
    "url": "https://www.geeksforgeeks.org/problems/split-the-binary-string-into-substrings-with-equal-number-of-0s-and-1s/1",
    "platform": "GeeksforGeeks",
    "chapterId": 5,
    "chapterTitle": "Binary Trees & BST",
    "topicId": "5.3",
    "topicTitle": "Binary Search Tree (BST) Properties & Operations"
  },
  {
    "id": 661,
    "title": "Substring with Concatenation of All Words",
    "url": "https://leetcode.com/problems/substring-with-concatenation-of-all-words/",
    "platform": "LeetCode",
    "chapterId": 5,
    "chapterTitle": "Binary Trees & BST",
    "topicId": "5.3",
    "topicTitle": "Binary Search Tree (BST) Properties & Operations"
  },
  {
    "id": 662,
    "title": "Sum of Beauty of All Substrings",
    "url": "https://leetcode.com/problems/sum-of-beauty-of-all-substrings/",
    "platform": "LeetCode",
    "chapterId": 5,
    "chapterTitle": "Binary Trees & BST",
    "topicId": "5.3",
    "topicTitle": "Binary Search Tree (BST) Properties & Operations"
  },
  {
    "id": 663,
    "title": "Two Sum In BST | Check if there exists a pair with Sum K",
    "url": "https://leetcode.com/problems/two-sum-in-bst-check-if-there-exists-a-pair-with-sum-k/",
    "platform": "LeetCode",
    "chapterId": 5,
    "chapterTitle": "Binary Trees & BST",
    "topicId": "5.3",
    "topicTitle": "Binary Search Tree (BST) Properties & Operations"
  },
  {
    "id": 664,
    "title": "Unique Binary Search Trees",
    "url": "https://leetcode.com/problems/unique-binary-search-trees",
    "platform": "LeetCode",
    "chapterId": 5,
    "chapterTitle": "Binary Trees & BST",
    "topicId": "5.3",
    "topicTitle": "Binary Search Tree (BST) Properties & Operations"
  },
  {
    "id": 665,
    "title": "Valid Substring",
    "url": "https://www.geeksforgeeks.org/problems/valid-substring0624/1",
    "platform": "GeeksforGeeks",
    "chapterId": 5,
    "chapterTitle": "Binary Trees & BST",
    "topicId": "5.3",
    "topicTitle": "Binary Search Tree (BST) Properties & Operations"
  },
  {
    "id": 666,
    "title": "Validate Binary Search Tree",
    "url": "https://leetcode.com/problems/validate-binary-search-tree",
    "platform": "LeetCode",
    "chapterId": 5,
    "chapterTitle": "Binary Trees & BST",
    "topicId": "5.3",
    "topicTitle": "Binary Search Tree (BST) Properties & Operations"
  },
  {
    "id": 667,
    "title": "Building Heap From Array",
    "url": "https://www.geeksforgeeks.org/building-heap-from-array/",
    "platform": "GeeksforGeeks",
    "chapterId": 6,
    "chapterTitle": "Heaps & Priority Queues",
    "topicId": "6.1",
    "topicTitle": "Heaps, Priority Queues & Top-K Patterns"
  },
  {
    "id": 668,
    "title": "Check if an array represents a min heap",
    "url": "https://leetcode.com/problems/check-if-an-array-represents-a-min-heap/",
    "platform": "LeetCode",
    "chapterId": 6,
    "chapterTitle": "Heaps & Priority Queues",
    "topicId": "6.1",
    "topicTitle": "Heaps, Priority Queues & Top-K Patterns"
  },
  {
    "id": 669,
    "title": "Convert Min Heap To Max Heap",
    "url": "https://www.geeksforgeeks.org/convert-min-heap-to-max-heap/",
    "platform": "GeeksforGeeks",
    "chapterId": 6,
    "chapterTitle": "Heaps & Priority Queues",
    "topicId": "6.1",
    "topicTitle": "Heaps, Priority Queues & Top-K Patterns"
  },
  {
    "id": 670,
    "title": "Design Twitter",
    "url": "https://leetcode.com/problems/design-twitter/",
    "platform": "LeetCode",
    "chapterId": 6,
    "chapterTitle": "Heaps & Priority Queues",
    "topicId": "6.1",
    "topicTitle": "Heaps, Priority Queues & Top-K Patterns"
  },
  {
    "id": 671,
    "title": "Find K Closest Elements",
    "url": "https://leetcode.com/problems/find-k-closest-elements",
    "platform": "LeetCode",
    "chapterId": 6,
    "chapterTitle": "Heaps & Priority Queues",
    "topicId": "6.1",
    "topicTitle": "Heaps, Priority Queues & Top-K Patterns"
  },
  {
    "id": 672,
    "title": "Find Median from Data Stream",
    "url": "https://leetcode.com/problems/find-median-from-data-stream",
    "platform": "LeetCode",
    "chapterId": 6,
    "chapterTitle": "Heaps & Priority Queues",
    "topicId": "6.1",
    "topicTitle": "Heaps, Priority Queues & Top-K Patterns"
  },
  {
    "id": 673,
    "title": "Find median in a stream",
    "url": "https://www.geeksforgeeks.org/problems/find-median-in-a-stream-1587115620/1",
    "platform": "GeeksforGeeks",
    "chapterId": 6,
    "chapterTitle": "Heaps & Priority Queues",
    "topicId": "6.1",
    "topicTitle": "Heaps, Priority Queues & Top-K Patterns"
  },
  {
    "id": 674,
    "title": "Furthest Building You Can Reach",
    "url": "https://leetcode.com/problems/furthest-building-you-can-reach",
    "platform": "LeetCode",
    "chapterId": 6,
    "chapterTitle": "Heaps & Priority Queues",
    "topicId": "6.1",
    "topicTitle": "Heaps, Priority Queues & Top-K Patterns"
  },
  {
    "id": 675,
    "title": "Heap Sort",
    "url": "https://www.geeksforgeeks.org/problems/heap-sort/1",
    "platform": "GeeksforGeeks",
    "chapterId": 6,
    "chapterTitle": "Heaps & Priority Queues",
    "topicId": "6.1",
    "topicTitle": "Heaps, Priority Queues & Top-K Patterns"
  },
  {
    "id": 676,
    "title": "Heaps (Theory Video)",
    "url": "https://leetcode.com/problems/heaps/",
    "platform": "LeetCode",
    "chapterId": 6,
    "chapterTitle": "Heaps & Priority Queues",
    "topicId": "6.1",
    "topicTitle": "Heaps, Priority Queues & Top-K Patterns"
  },
  {
    "id": 677,
    "title": "Implement Min Heap",
    "url": "https://leetcode.com/problems/implement-min-heap/",
    "platform": "LeetCode",
    "chapterId": 6,
    "chapterTitle": "Heaps & Priority Queues",
    "topicId": "6.1",
    "topicTitle": "Heaps, Priority Queues & Top-K Patterns"
  },
  {
    "id": 678,
    "title": "IPO",
    "url": "https://leetcode.com/problems/ipo/",
    "platform": "LeetCode",
    "chapterId": 6,
    "chapterTitle": "Heaps & Priority Queues",
    "topicId": "6.1",
    "topicTitle": "Heaps, Priority Queues & Top-K Patterns"
  },
  {
    "id": 679,
    "title": "K Closest Points to Origin",
    "url": "https://leetcode.com/problems/k-closest-points-to-origin",
    "platform": "LeetCode",
    "chapterId": 6,
    "chapterTitle": "Heaps & Priority Queues",
    "topicId": "6.1",
    "topicTitle": "Heaps, Priority Queues & Top-K Patterns"
  },
  {
    "id": 680,
    "title": "Kth largest element in a stream of running integers",
    "url": "https://leetcode.com/problems/kth-largest-element-in-a-stream-of-running-integers/",
    "platform": "LeetCode",
    "chapterId": 6,
    "chapterTitle": "Heaps & Priority Queues",
    "topicId": "6.1",
    "topicTitle": "Heaps, Priority Queues & Top-K Patterns"
  },
  {
    "id": 681,
    "title": "Kth Largest Element in an Array",
    "url": "https://leetcode.com/problems/kth-largest-element-in-an-array",
    "platform": "LeetCode",
    "chapterId": 6,
    "chapterTitle": "Heaps & Priority Queues",
    "topicId": "6.1",
    "topicTitle": "Heaps, Priority Queues & Top-K Patterns"
  },
  {
    "id": 682,
    "title": "Kth Smallest",
    "url": "https://www.geeksforgeeks.org/problems/kth-smallest-element5635/1",
    "platform": "GeeksforGeeks",
    "chapterId": 6,
    "chapterTitle": "Heaps & Priority Queues",
    "topicId": "6.1",
    "topicTitle": "Heaps, Priority Queues & Top-K Patterns"
  },
  {
    "id": 683,
    "title": "Kth Smallest Element in a Sorted Matrix",
    "url": "https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix",
    "platform": "LeetCode",
    "chapterId": 6,
    "chapterTitle": "Heaps & Priority Queues",
    "topicId": "6.1",
    "topicTitle": "Heaps, Priority Queues & Top-K Patterns"
  },
  {
    "id": 684,
    "title": "Kth smallest element in an array [use priority queue]",
    "url": "https://leetcode.com/problems/kth-smallest-element-in-an-array-use-priority-queue/",
    "platform": "LeetCode",
    "chapterId": 6,
    "chapterTitle": "Heaps & Priority Queues",
    "topicId": "6.1",
    "topicTitle": "Heaps, Priority Queues & Top-K Patterns"
  },
  {
    "id": 685,
    "title": "kth smallest number again 2",
    "url": "https://www.hackerearth.com/practice/algorithms/searching/binary-search/practice-problems/algorithm/kth-smallest-number-again-2/",
    "platform": "HackerEarth",
    "chapterId": 6,
    "chapterTitle": "Heaps & Priority Queues",
    "topicId": "6.1",
    "topicTitle": "Heaps, Priority Queues & Top-K Patterns"
  },
  {
    "id": 686,
    "title": "Kth Smallestlargest Element Unsorted Array",
    "url": "https://www.geeksforgeeks.org/kth-smallestlargest-element-unsorted-array/",
    "platform": "GeeksforGeeks",
    "chapterId": 6,
    "chapterTitle": "Heaps & Priority Queues",
    "topicId": "6.1",
    "topicTitle": "Heaps, Priority Queues & Top-K Patterns"
  },
  {
    "id": 687,
    "title": "Last Stone Weight",
    "url": "https://leetcode.com/problems/last-stone-weight/",
    "platform": "LeetCode",
    "chapterId": 6,
    "chapterTitle": "Heaps & Priority Queues",
    "topicId": "6.1",
    "topicTitle": "Heaps, Priority Queues & Top-K Patterns"
  },
  {
    "id": 688,
    "title": "Matrix Median",
    "url": "https://leetcode.com/problems/matrix-median/",
    "platform": "LeetCode",
    "chapterId": 6,
    "chapterTitle": "Heaps & Priority Queues",
    "topicId": "6.1",
    "topicTitle": "Heaps, Priority Queues & Top-K Patterns"
  },
  {
    "id": 689,
    "title": "Median in a row-wise sorted Matrix",
    "url": "https://www.geeksforgeeks.org/problems/median-in-a-row-wise-sorted-matrix1527/1",
    "platform": "GeeksforGeeks",
    "chapterId": 6,
    "chapterTitle": "Heaps & Priority Queues",
    "topicId": "6.1",
    "topicTitle": "Heaps, Priority Queues & Top-K Patterns"
  },
  {
    "id": 690,
    "title": "Median of 2 sorted arrays",
    "url": "https://leetcode.com/problems/median-of-2-sorted-arrays/",
    "platform": "LeetCode",
    "chapterId": 6,
    "chapterTitle": "Heaps & Priority Queues",
    "topicId": "6.1",
    "topicTitle": "Heaps, Priority Queues & Top-K Patterns"
  },
  {
    "id": 691,
    "title": "Median of an Array",
    "url": "https://www.geeksforgeeks.org/problems/find-the-median0527/1",
    "platform": "GeeksforGeeks",
    "chapterId": 6,
    "chapterTitle": "Heaps & Priority Queues",
    "topicId": "6.1",
    "topicTitle": "Heaps, Priority Queues & Top-K Patterns"
  },
  {
    "id": 692,
    "title": "Median Of Two Sorted Arrays Of Different Sizes",
    "url": "https://www.geeksforgeeks.org/median-of-two-sorted-arrays-of-different-sizes/",
    "platform": "GeeksforGeeks",
    "chapterId": 6,
    "chapterTitle": "Heaps & Priority Queues",
    "topicId": "6.1",
    "topicTitle": "Heaps, Priority Queues & Top-K Patterns"
  },
  {
    "id": 693,
    "title": "Merge k Sorted Lists",
    "url": "https://leetcode.com/problems/merge-k-sorted-lists",
    "platform": "LeetCode",
    "chapterId": 6,
    "chapterTitle": "Heaps & Priority Queues",
    "topicId": "6.1",
    "topicTitle": "Heaps, Priority Queues & Top-K Patterns"
  },
  {
    "id": 694,
    "title": "Merge two binary Max heaps",
    "url": "https://www.geeksforgeeks.org/problems/merge-two-binary-max-heap0144/1",
    "platform": "GeeksforGeeks",
    "chapterId": 6,
    "chapterTitle": "Heaps & Priority Queues",
    "topicId": "6.1",
    "topicTitle": "Heaps, Priority Queues & Top-K Patterns"
  },
  {
    "id": 695,
    "title": "Minimum Cost of ropes",
    "url": "https://www.geeksforgeeks.org/problems/minimum-cost-of-ropes-1587115620/1",
    "platform": "GeeksforGeeks",
    "chapterId": 6,
    "chapterTitle": "Heaps & Priority Queues",
    "topicId": "6.1",
    "topicTitle": "Heaps, Priority Queues & Top-K Patterns"
  },
  {
    "id": 696,
    "title": "Minimum Cost to Hire K Workers",
    "url": "https://leetcode.com/problems/minimum-cost-to-hire-k-workers",
    "platform": "LeetCode",
    "chapterId": 6,
    "chapterTitle": "Heaps & Priority Queues",
    "topicId": "6.1",
    "topicTitle": "Heaps, Priority Queues & Top-K Patterns"
  },
  {
    "id": 697,
    "title": "Program For Shortest Job First Or Sjf Cpu Scheduling Set 1 Non Preemptive",
    "url": "https://www.geeksforgeeks.org/program-for-shortest-job-first-or-sjf-cpu-scheduling-set-1-non-preemptive/",
    "platform": "GeeksforGeeks",
    "chapterId": 6,
    "chapterTitle": "Heaps & Priority Queues",
    "topicId": "6.1",
    "topicTitle": "Heaps, Priority Queues & Top-K Patterns"
  },
  {
    "id": 698,
    "title": "Reorganize String",
    "url": "https://leetcode.com/problems/reorganize-string",
    "platform": "LeetCode",
    "chapterId": 6,
    "chapterTitle": "Heaps & Priority Queues",
    "topicId": "6.1",
    "topicTitle": "Heaps, Priority Queues & Top-K Patterns"
  },
  {
    "id": 699,
    "title": "Single Threaded CPU",
    "url": "https://leetcode.com/problems/single-threaded-cpu/",
    "platform": "LeetCode",
    "chapterId": 6,
    "chapterTitle": "Heaps & Priority Queues",
    "topicId": "6.1",
    "topicTitle": "Heaps, Priority Queues & Top-K Patterns"
  },
  {
    "id": 700,
    "title": "Smallest Range Covering Elements from K Lists",
    "url": "https://leetcode.com/problems/smallest-range-covering-elements-from-k-lists",
    "platform": "LeetCode",
    "chapterId": 6,
    "chapterTitle": "Heaps & Priority Queues",
    "topicId": "6.1",
    "topicTitle": "Heaps, Priority Queues & Top-K Patterns"
  },
  {
    "id": 701,
    "title": "Task Scheduler",
    "url": "https://leetcode.com/problems/task-scheduler",
    "platform": "LeetCode",
    "chapterId": 6,
    "chapterTitle": "Heaps & Priority Queues",
    "topicId": "6.1",
    "topicTitle": "Heaps, Priority Queues & Top-K Patterns"
  },
  {
    "id": 702,
    "title": "Top K Frequent Elements",
    "url": "https://leetcode.com/problems/top-k-frequent-elements",
    "platform": "LeetCode",
    "chapterId": 6,
    "chapterTitle": "Heaps & Priority Queues",
    "topicId": "6.1",
    "topicTitle": "Heaps, Priority Queues & Top-K Patterns"
  },
  {
    "id": 703,
    "title": "Top K Frequent Words",
    "url": "https://leetcode.com/problems/top-k-frequent-words",
    "platform": "LeetCode",
    "chapterId": 6,
    "chapterTitle": "Heaps & Priority Queues",
    "topicId": "6.1",
    "topicTitle": "Heaps, Priority Queues & Top-K Patterns"
  },
  {
    "id": 704,
    "title": "Articulation point in graph",
    "url": "https://leetcode.com/problems/articulation-point-in-graph/",
    "platform": "LeetCode",
    "chapterId": 7,
    "chapterTitle": "Graphs",
    "topicId": "7.1",
    "topicTitle": "Graph Traversal, Connected Components & Cycle Detection"
  },
  {
    "id": 705,
    "title": "BFS of graph",
    "url": "https://www.geeksforgeeks.org/problems/bfs-traversal-of-graph/1",
    "platform": "GeeksforGeeks",
    "chapterId": 7,
    "chapterTitle": "Graphs",
    "topicId": "7.1",
    "topicTitle": "Graph Traversal, Connected Components & Cycle Detection"
  },
  {
    "id": 706,
    "title": "Bipartite Graph",
    "url": "https://www.geeksforgeeks.org/problems/bipartite-graph/1",
    "platform": "GeeksforGeeks",
    "chapterId": 7,
    "chapterTitle": "Graphs",
    "topicId": "7.1",
    "topicTitle": "Graph Traversal, Connected Components & Cycle Detection"
  },
  {
    "id": 707,
    "title": "Bridges in graph",
    "url": "https://leetcode.com/problems/bridges-in-graph/",
    "platform": "LeetCode",
    "chapterId": 7,
    "chapterTitle": "Graphs",
    "topicId": "7.1",
    "topicTitle": "Graph Traversal, Connected Components & Cycle Detection"
  },
  {
    "id": 708,
    "title": "Check Given Graph Tree",
    "url": "https://www.geeksforgeeks.org/check-given-graph-tree/#:~:text=Since%20the%20graph%20is%20undirected,graph%20is%20connected%2C%20otherwise%20not.",
    "platform": "GeeksforGeeks",
    "chapterId": 7,
    "chapterTitle": "Graphs",
    "topicId": "7.1",
    "topicTitle": "Graph Traversal, Connected Components & Cycle Detection"
  },
  {
    "id": 709,
    "title": "Chinese Postman Route Inspection Set 1 Introduction",
    "url": "https://www.geeksforgeeks.org/chinese-postman-route-inspection-set-1-introduction/",
    "platform": "GeeksforGeeks",
    "chapterId": 7,
    "chapterTitle": "Graphs",
    "topicId": "7.1",
    "topicTitle": "Graph Traversal, Connected Components & Cycle Detection"
  },
  {
    "id": 710,
    "title": "Clone Graph",
    "url": "https://leetcode.com/problems/clone-graph",
    "platform": "LeetCode",
    "chapterId": 7,
    "chapterTitle": "Graphs",
    "topicId": "7.1",
    "topicTitle": "Graph Traversal, Connected Components & Cycle Detection"
  },
  {
    "id": 711,
    "title": "Connected Components",
    "url": "https://leetcode.com/problems/connected-components/",
    "platform": "LeetCode",
    "chapterId": 7,
    "chapterTitle": "Graphs",
    "topicId": "7.1",
    "topicTitle": "Graph Traversal, Connected Components & Cycle Detection"
  },
  {
    "id": 712,
    "title": "Cycle Detection in Directed Graph (DFS)",
    "url": "https://leetcode.com/problems/cycle-detection-in-directed-graph/",
    "platform": "LeetCode",
    "chapterId": 7,
    "chapterTitle": "Graphs",
    "topicId": "7.1",
    "topicTitle": "Graph Traversal, Connected Components & Cycle Detection"
  },
  {
    "id": 713,
    "title": "Depth First Search Or Dfs For A Graph",
    "url": "https://www.geeksforgeeks.org/depth-first-search-or-dfs-for-a-graph/",
    "platform": "GeeksforGeeks",
    "chapterId": 7,
    "chapterTitle": "Graphs",
    "topicId": "7.1",
    "topicTitle": "Graph Traversal, Connected Components & Cycle Detection"
  },
  {
    "id": 714,
    "title": "Detect Cycle In A Graph",
    "url": "https://www.geeksforgeeks.org/detect-cycle-in-a-graph/",
    "platform": "GeeksforGeeks",
    "chapterId": 7,
    "chapterTitle": "Graphs",
    "topicId": "7.1",
    "topicTitle": "Graph Traversal, Connected Components & Cycle Detection"
  },
  {
    "id": 715,
    "title": "Find Longest Path Directed Acyclic Graph",
    "url": "https://www.geeksforgeeks.org/find-longest-path-directed-acyclic-graph/",
    "platform": "GeeksforGeeks",
    "chapterId": 7,
    "chapterTitle": "Graphs",
    "topicId": "7.1",
    "topicTitle": "Graph Traversal, Connected Components & Cycle Detection"
  },
  {
    "id": 716,
    "title": "Find the number of islands",
    "url": "https://www.geeksforgeeks.org/problems/find-the-number-of-islands/1",
    "platform": "GeeksforGeeks",
    "chapterId": 7,
    "chapterTitle": "Graphs",
    "topicId": "7.1",
    "topicTitle": "Graph Traversal, Connected Components & Cycle Detection"
  },
  {
    "id": 717,
    "title": "Graph Coloring",
    "url": "https://www.geeksforgeeks.org/graph-coloring-applications/#:~:text=Graph%20coloring%20problem%20is%20to,are%20colored%20using%20same%20color.",
    "platform": "GeeksforGeeks",
    "chapterId": 7,
    "chapterTitle": "Graphs",
    "topicId": "7.1",
    "topicTitle": "Graph Traversal, Connected Components & Cycle Detection"
  },
  {
    "id": 718,
    "title": "Graph Coloring Applications",
    "url": "https://www.geeksforgeeks.org/graph-coloring-applications/#:~:text=Graph%20coloring%20problem%20is%20to,are%20colored%20using%20same%20color.",
    "platform": "GeeksforGeeks",
    "chapterId": 7,
    "chapterTitle": "Graphs",
    "topicId": "7.1",
    "topicTitle": "Graph Traversal, Connected Components & Cycle Detection"
  },
  {
    "id": 719,
    "title": "Graph Representation | C++",
    "url": "https://leetcode.com/problems/graph-representation-c/",
    "platform": "LeetCode",
    "chapterId": 7,
    "chapterTitle": "Graphs",
    "topicId": "7.1",
    "topicTitle": "Graph Traversal, Connected Components & Cycle Detection"
  },
  {
    "id": 720,
    "title": "Graph Valid Tree",
    "url": "https://leetcode.com/problems/graph-valid-tree",
    "platform": "LeetCode",
    "chapterId": 7,
    "chapterTitle": "Graphs",
    "topicId": "7.1",
    "topicTitle": "Graph Traversal, Connected Components & Cycle Detection"
  },
  {
    "id": 721,
    "title": "Introduction to Graph",
    "url": "https://leetcode.com/problems/introduction-to-graph/",
    "platform": "LeetCode",
    "chapterId": 7,
    "chapterTitle": "Graphs",
    "topicId": "7.1",
    "topicTitle": "Graph Traversal, Connected Components & Cycle Detection"
  },
  {
    "id": 722,
    "title": "journey to the moon",
    "url": "https://www.hackerrank.com/challenges/journey-to-the-moon/problem",
    "platform": "Other",
    "chapterId": 7,
    "chapterTitle": "Graphs",
    "topicId": "7.1",
    "topicTitle": "Graph Traversal, Connected Components & Cycle Detection"
  },
  {
    "id": 723,
    "title": "Kosaraju's algorithm",
    "url": "https://leetcode.com/problems/kosaraju-s-algorithm/",
    "platform": "LeetCode",
    "chapterId": 7,
    "chapterTitle": "Graphs",
    "topicId": "7.1",
    "topicTitle": "Graph Traversal, Connected Components & Cycle Detection"
  },
  {
    "id": 724,
    "title": "Minimum time taken by each job to be completed given by a Directed Acyclic Graph",
    "url": "https://www.geeksforgeeks.org/problems/minimum-time-taken-by-each-job-to-be-completed-given-by-a-directed-acyclic-graph/1",
    "platform": "GeeksforGeeks",
    "chapterId": 7,
    "chapterTitle": "Graphs",
    "topicId": "7.1",
    "topicTitle": "Graph Traversal, Connected Components & Cycle Detection"
  },
  {
    "id": 725,
    "title": "Number of Connected Components in an Undirected Graph",
    "url": "https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph",
    "platform": "LeetCode",
    "chapterId": 7,
    "chapterTitle": "Graphs",
    "topicId": "7.1",
    "topicTitle": "Graph Traversal, Connected Components & Cycle Detection"
  },
  {
    "id": 726,
    "title": "Number of enclaves",
    "url": "https://leetcode.com/problems/number-of-enclaves/",
    "platform": "LeetCode",
    "chapterId": 7,
    "chapterTitle": "Graphs",
    "topicId": "7.1",
    "topicTitle": "Graph Traversal, Connected Components & Cycle Detection"
  },
  {
    "id": 727,
    "title": "Number of Islands",
    "url": "https://leetcode.com/problems/number-of-islands",
    "platform": "LeetCode",
    "chapterId": 7,
    "chapterTitle": "Graphs",
    "topicId": "7.1",
    "topicTitle": "Graph Traversal, Connected Components & Cycle Detection"
  },
  {
    "id": 728,
    "title": "Number of provinces",
    "url": "https://leetcode.com/problems/number-of-provinces/",
    "platform": "LeetCode",
    "chapterId": 7,
    "chapterTitle": "Graphs",
    "topicId": "7.1",
    "topicTitle": "Graph Traversal, Connected Components & Cycle Detection"
  },
  {
    "id": 729,
    "title": "Number Of Triangles In Directed And Undirected Graphs",
    "url": "https://www.geeksforgeeks.org/number-of-triangles-in-directed-and-undirected-graphs/",
    "platform": "GeeksforGeeks",
    "chapterId": 7,
    "chapterTitle": "Graphs",
    "topicId": "7.1",
    "topicTitle": "Graph Traversal, Connected Components & Cycle Detection"
  },
  {
    "id": 730,
    "title": "oliver and the game 3",
    "url": "https://www.hackerearth.com/practice/algorithms/graphs/topological-sort/practice-problems/algorithm/oliver-and-the-game-3/",
    "platform": "HackerEarth",
    "chapterId": 7,
    "chapterTitle": "Graphs",
    "topicId": "7.1",
    "topicTitle": "Graph Traversal, Connected Components & Cycle Detection"
  },
  {
    "id": 731,
    "title": "Pacific Atlantic Water Flow",
    "url": "https://leetcode.com/problems/pacific-atlantic-water-flow",
    "platform": "LeetCode",
    "chapterId": 7,
    "chapterTitle": "Graphs",
    "topicId": "7.1",
    "topicTitle": "Graph Traversal, Connected Components & Cycle Detection"
  },
  {
    "id": 732,
    "title": "Paths Travel Nodes Using Edgeseven Bridges Konigsberg",
    "url": "https://www.geeksforgeeks.org/paths-travel-nodes-using-edgeseven-bridges-konigsberg/",
    "platform": "GeeksforGeeks",
    "chapterId": 7,
    "chapterTitle": "Graphs",
    "topicId": "7.1",
    "topicTitle": "Graph Traversal, Connected Components & Cycle Detection"
  },
  {
    "id": 733,
    "title": "Reconstruct Itinerary",
    "url": "https://leetcode.com/problems/reconstruct-itinerary/",
    "platform": "LeetCode",
    "chapterId": 7,
    "chapterTitle": "Graphs",
    "topicId": "7.1",
    "topicTitle": "Graph Traversal, Connected Components & Cycle Detection"
  },
  {
    "id": 734,
    "title": "Snakes and Ladders",
    "url": "https://leetcode.com/problems/snakes-and-ladders",
    "platform": "LeetCode",
    "chapterId": 7,
    "chapterTitle": "Graphs",
    "topicId": "7.1",
    "topicTitle": "Graph Traversal, Connected Components & Cycle Detection"
  },
  {
    "id": 735,
    "title": "Strongly Connected",
    "url": "https://www.geeksforgeeks.org/problems/strongly-connected-components-kosarajus-algo/1",
    "platform": "GeeksforGeeks",
    "chapterId": 7,
    "chapterTitle": "Graphs",
    "topicId": "7.1",
    "topicTitle": "Graph Traversal, Connected Components & Cycle Detection"
  },
  {
    "id": 736,
    "title": "Strongly Connected Components (Kosaraju's Algo)",
    "url": "https://www.geeksforgeeks.org/problems/strongly-connected-components-kosarajus-algo/1",
    "platform": "GeeksforGeeks",
    "chapterId": 7,
    "chapterTitle": "Graphs",
    "topicId": "7.1",
    "topicTitle": "Graph Traversal, Connected Components & Cycle Detection"
  },
  {
    "id": 737,
    "title": "Surrounded Regions",
    "url": "https://leetcode.com/problems/surrounded-regions/",
    "platform": "LeetCode",
    "chapterId": 7,
    "chapterTitle": "Graphs",
    "topicId": "7.1",
    "topicTitle": "Graph Traversal, Connected Components & Cycle Detection"
  },
  {
    "id": 738,
    "title": "Time Needed to Inform All Employees",
    "url": "https://leetcode.com/problems/time-needed-to-inform-all-employees",
    "platform": "LeetCode",
    "chapterId": 7,
    "chapterTitle": "Graphs",
    "topicId": "7.1",
    "topicTitle": "Graph Traversal, Connected Components & Cycle Detection"
  },
  {
    "id": 739,
    "title": "Two Clique Problem Check Graph Can Divided Two Cliques",
    "url": "https://www.geeksforgeeks.org/two-clique-problem-check-graph-can-divided-two-cliques/",
    "platform": "GeeksforGeeks",
    "chapterId": 7,
    "chapterTitle": "Graphs",
    "topicId": "7.1",
    "topicTitle": "Graph Traversal, Connected Components & Cycle Detection"
  },
  {
    "id": 740,
    "title": "Undirected Graph Cycle",
    "url": "https://www.geeksforgeeks.org/problems/detect-cycle-in-an-undirected-graph/1",
    "platform": "GeeksforGeeks",
    "chapterId": 7,
    "chapterTitle": "Graphs",
    "topicId": "7.1",
    "topicTitle": "Graph Traversal, Connected Components & Cycle Detection"
  },
  {
    "id": 741,
    "title": "01 Matrix",
    "url": "https://leetcode.com/problems/01-matrix",
    "platform": "LeetCode",
    "chapterId": 7,
    "chapterTitle": "Graphs",
    "topicId": "7.2",
    "topicTitle": "Multi-Source BFS & Grid Shortest Path"
  },
  {
    "id": 742,
    "title": "As Far from Land as Possible",
    "url": "https://leetcode.com/problems/as-far-from-land-as-possible",
    "platform": "LeetCode",
    "chapterId": 7,
    "chapterTitle": "Graphs",
    "topicId": "7.2",
    "topicTitle": "Multi-Source BFS & Grid Shortest Path"
  },
  {
    "id": 743,
    "title": "Bus Routes",
    "url": "https://leetcode.com/problems/bus-routes",
    "platform": "LeetCode",
    "chapterId": 7,
    "chapterTitle": "Graphs",
    "topicId": "7.2",
    "topicTitle": "Multi-Source BFS & Grid Shortest Path"
  },
  {
    "id": 744,
    "title": "Distance of nearest cell having 1",
    "url": "https://www.geeksforgeeks.org/problems/distance-of-nearest-cell-having-1-1587115620/1",
    "platform": "GeeksforGeeks",
    "chapterId": 7,
    "chapterTitle": "Graphs",
    "topicId": "7.2",
    "topicTitle": "Multi-Source BFS & Grid Shortest Path"
  },
  {
    "id": 745,
    "title": "Minimum Genetic Mutation",
    "url": "https://leetcode.com/problems/minimum-genetic-mutation/",
    "platform": "LeetCode",
    "chapterId": 7,
    "chapterTitle": "Graphs",
    "topicId": "7.2",
    "topicTitle": "Multi-Source BFS & Grid Shortest Path"
  },
  {
    "id": 746,
    "title": "Minimum Knight Moves",
    "url": "https://leetcode.com/problems/minimum-knight-moves",
    "platform": "LeetCode",
    "chapterId": 7,
    "chapterTitle": "Graphs",
    "topicId": "7.2",
    "topicTitle": "Multi-Source BFS & Grid Shortest Path"
  },
  {
    "id": 747,
    "title": "Open The Lock",
    "url": "https://leetcode.com/problems/open-the-lock/",
    "platform": "LeetCode",
    "chapterId": 7,
    "chapterTitle": "Graphs",
    "topicId": "7.2",
    "topicTitle": "Multi-Source BFS & Grid Shortest Path"
  },
  {
    "id": 748,
    "title": "Rotten Oranges",
    "url": "https://www.geeksforgeeks.org/problems/rotten-oranges2536/1",
    "platform": "GeeksforGeeks",
    "chapterId": 7,
    "chapterTitle": "Graphs",
    "topicId": "7.2",
    "topicTitle": "Multi-Source BFS & Grid Shortest Path"
  },
  {
    "id": 749,
    "title": "Shortest Bridge",
    "url": "https://leetcode.com/problems/shortest-bridge",
    "platform": "LeetCode",
    "chapterId": 7,
    "chapterTitle": "Graphs",
    "topicId": "7.2",
    "topicTitle": "Multi-Source BFS & Grid Shortest Path"
  },
  {
    "id": 750,
    "title": "Shortest Distance in a Binary Maze",
    "url": "https://leetcode.com/problems/shortest-distance-in-a-binary-maze/",
    "platform": "LeetCode",
    "chapterId": 7,
    "chapterTitle": "Graphs",
    "topicId": "7.2",
    "topicTitle": "Multi-Source BFS & Grid Shortest Path"
  },
  {
    "id": 751,
    "title": "Steps by Knight",
    "url": "https://www.geeksforgeeks.org/problems/steps-by-knight5927/1",
    "platform": "GeeksforGeeks",
    "chapterId": 7,
    "chapterTitle": "Graphs",
    "topicId": "7.2",
    "topicTitle": "Multi-Source BFS & Grid Shortest Path"
  },
  {
    "id": 752,
    "title": "Walls And Gates",
    "url": "https://leetcode.com/problems/walls-and-gates/",
    "platform": "LeetCode",
    "chapterId": 7,
    "chapterTitle": "Graphs",
    "topicId": "7.2",
    "topicTitle": "Multi-Source BFS & Grid Shortest Path"
  },
  {
    "id": 753,
    "title": "Water Jug problem using BFS",
    "url": "https://www.geeksforgeeks.org/water-jug-problem-using-bfs/",
    "platform": "GeeksforGeeks",
    "chapterId": 7,
    "chapterTitle": "Graphs",
    "topicId": "7.2",
    "topicTitle": "Multi-Source BFS & Grid Shortest Path"
  },
  {
    "id": 754,
    "title": "Alien Dictionary",
    "url": "https://www.geeksforgeeks.org/problems/alien-dictionary/1",
    "platform": "GeeksforGeeks",
    "chapterId": 7,
    "chapterTitle": "Graphs",
    "topicId": "7.3",
    "topicTitle": "Topological Sort & DAG Dependencies (Kahn Algorithm)"
  },
  {
    "id": 755,
    "title": "Course Schedule",
    "url": "https://leetcode.com/problems/course-schedule",
    "platform": "LeetCode",
    "chapterId": 7,
    "chapterTitle": "Graphs",
    "topicId": "7.3",
    "topicTitle": "Topological Sort & DAG Dependencies (Kahn Algorithm)"
  },
  {
    "id": 756,
    "title": "Find Eventual Safe States",
    "url": "https://leetcode.com/problems/find-eventual-safe-states",
    "platform": "LeetCode",
    "chapterId": 7,
    "chapterTitle": "Graphs",
    "topicId": "7.3",
    "topicTitle": "Topological Sort & DAG Dependencies (Kahn Algorithm)"
  },
  {
    "id": 757,
    "title": "Find Whether It Is Possible To Finish All Tasks Or Not From Given Dependencies",
    "url": "https://www.geeksforgeeks.org/find-whether-it-is-possible-to-finish-all-tasks-or-not-from-given-dependencies/",
    "platform": "GeeksforGeeks",
    "chapterId": 7,
    "chapterTitle": "Graphs",
    "topicId": "7.3",
    "topicTitle": "Topological Sort & DAG Dependencies (Kahn Algorithm)"
  },
  {
    "id": 758,
    "title": "Minimum Height Trees",
    "url": "https://leetcode.com/problems/minimum-height-trees",
    "platform": "LeetCode",
    "chapterId": 7,
    "chapterTitle": "Graphs",
    "topicId": "7.3",
    "topicTitle": "Topological Sort & DAG Dependencies (Kahn Algorithm)"
  },
  {
    "id": 759,
    "title": "Prerequisite Tasks",
    "url": "https://www.geeksforgeeks.org/problems/prerequisite-tasks/1",
    "platform": "GeeksforGeeks",
    "chapterId": 7,
    "chapterTitle": "Graphs",
    "topicId": "7.3",
    "topicTitle": "Topological Sort & DAG Dependencies (Kahn Algorithm)"
  },
  {
    "id": 760,
    "title": "Topo Sort",
    "url": "https://leetcode.com/problems/topo-sort/",
    "platform": "LeetCode",
    "chapterId": 7,
    "chapterTitle": "Graphs",
    "topicId": "7.3",
    "topicTitle": "Topological Sort & DAG Dependencies (Kahn Algorithm)"
  },
  {
    "id": 761,
    "title": "Topological sort",
    "url": "https://www.geeksforgeeks.org/problems/topological-sort/1",
    "platform": "GeeksforGeeks",
    "chapterId": 7,
    "chapterTitle": "Graphs",
    "topicId": "7.3",
    "topicTitle": "Topological Sort & DAG Dependencies (Kahn Algorithm)"
  },
  {
    "id": 762,
    "title": "Topological sort or Kahn's algorithm",
    "url": "https://leetcode.com/problems/topological-sort-or-kahn-s-algorithm/",
    "platform": "LeetCode",
    "chapterId": 7,
    "chapterTitle": "Graphs",
    "topicId": "7.3",
    "topicTitle": "Topological Sort & DAG Dependencies (Kahn Algorithm)"
  },
  {
    "id": 763,
    "title": "Verifying An Alien Dictionary",
    "url": "https://leetcode.com/problems/verifying-an-alien-dictionary/",
    "platform": "LeetCode",
    "chapterId": 7,
    "chapterTitle": "Graphs",
    "topicId": "7.3",
    "topicTitle": "Topological Sort & DAG Dependencies (Kahn Algorithm)"
  },
  {
    "id": 764,
    "title": "Bellman Ford Algorithm",
    "url": "https://leetcode.com/problems/bellman-ford-algorithm/",
    "platform": "LeetCode",
    "chapterId": 7,
    "chapterTitle": "Graphs",
    "topicId": "7.4",
    "topicTitle": "Shortest Path Algorithms (Dijkstra, Bellman-Ford, Floyd-Warshall)"
  },
  {
    "id": 765,
    "title": "Cheapest flight within K stops",
    "url": "https://leetcode.com/problems/cheapest-flight-within-k-stops/",
    "platform": "LeetCode",
    "chapterId": 7,
    "chapterTitle": "Graphs",
    "topicId": "7.4",
    "topicTitle": "Shortest Path Algorithms (Dijkstra, Bellman-Ford, Floyd-Warshall)"
  },
  {
    "id": 766,
    "title": "Detect a negative cycle in a Graph | (Bellman Ford)",
    "url": "https://www.geeksforgeeks.org/detect-negative-cycle-graph-bellman-ford/",
    "platform": "GeeksforGeeks",
    "chapterId": 7,
    "chapterTitle": "Graphs",
    "topicId": "7.4",
    "topicTitle": "Shortest Path Algorithms (Dijkstra, Bellman-Ford, Floyd-Warshall)"
  },
  {
    "id": 767,
    "title": "Detect Negative Cycle Graph Bellman Ford",
    "url": "https://www.geeksforgeeks.org/detect-negative-cycle-graph-bellman-ford/",
    "platform": "GeeksforGeeks",
    "chapterId": 7,
    "chapterTitle": "Graphs",
    "topicId": "7.4",
    "topicTitle": "Shortest Path Algorithms (Dijkstra, Bellman-Ford, Floyd-Warshall)"
  },
  {
    "id": 768,
    "title": "Dijkstras Shortest Path Algorithm Greedy Algo 7",
    "url": "https://www.geeksforgeeks.org/dijkstras-shortest-path-algorithm-greedy-algo-7/",
    "platform": "GeeksforGeeks",
    "chapterId": 7,
    "chapterTitle": "Graphs",
    "topicId": "7.4",
    "topicTitle": "Shortest Path Algorithms (Dijkstra, Bellman-Ford, Floyd-Warshall)"
  },
  {
    "id": 769,
    "title": "Floyd Warshall",
    "url": "https://www.geeksforgeeks.org/problems/implementing-floyd-warshall2042/1",
    "platform": "GeeksforGeeks",
    "chapterId": 7,
    "chapterTitle": "Graphs",
    "topicId": "7.4",
    "topicTitle": "Shortest Path Algorithms (Dijkstra, Bellman-Ford, Floyd-Warshall)"
  },
  {
    "id": 770,
    "title": "Floyd warshall algorithm",
    "url": "https://leetcode.com/problems/floyd-warshall-algorithm/",
    "platform": "LeetCode",
    "chapterId": 7,
    "chapterTitle": "Graphs",
    "topicId": "7.4",
    "topicTitle": "Shortest Path Algorithms (Dijkstra, Bellman-Ford, Floyd-Warshall)"
  },
  {
    "id": 771,
    "title": "Minimum multiplications to reach end",
    "url": "https://leetcode.com/problems/minimum-multiplications-to-reach-end/",
    "platform": "LeetCode",
    "chapterId": 7,
    "chapterTitle": "Graphs",
    "topicId": "7.4",
    "topicTitle": "Shortest Path Algorithms (Dijkstra, Bellman-Ford, Floyd-Warshall)"
  },
  {
    "id": 772,
    "title": "Negative weight cycle",
    "url": "https://www.geeksforgeeks.org/problems/negative-weight-cycle3504/1",
    "platform": "GeeksforGeeks",
    "chapterId": 7,
    "chapterTitle": "Graphs",
    "topicId": "7.4",
    "topicTitle": "Shortest Path Algorithms (Dijkstra, Bellman-Ford, Floyd-Warshall)"
  },
  {
    "id": 773,
    "title": "Network Delay Time",
    "url": "https://leetcode.com/problems/network-delay-time/",
    "platform": "LeetCode",
    "chapterId": 7,
    "chapterTitle": "Graphs",
    "topicId": "7.4",
    "topicTitle": "Shortest Path Algorithms (Dijkstra, Bellman-Ford, Floyd-Warshall)"
  },
  {
    "id": 774,
    "title": "Path with Minimum Effort",
    "url": "https://leetcode.com/problems/path-with-minimum-effort/",
    "platform": "LeetCode",
    "chapterId": 7,
    "chapterTitle": "Graphs",
    "topicId": "7.4",
    "topicTitle": "Shortest Path Algorithms (Dijkstra, Bellman-Ford, Floyd-Warshall)"
  },
  {
    "id": 775,
    "title": "Shortest path in DAG",
    "url": "https://leetcode.com/problems/shortest-path-in-dag/",
    "platform": "LeetCode",
    "chapterId": 7,
    "chapterTitle": "Graphs",
    "topicId": "7.4",
    "topicTitle": "Shortest Path Algorithms (Dijkstra, Bellman-Ford, Floyd-Warshall)"
  },
  {
    "id": 776,
    "title": "Shortest path in undirected graph with unit weights",
    "url": "https://leetcode.com/problems/shortest-path-in-undirected-graph-with-unit-weights/",
    "platform": "LeetCode",
    "chapterId": 7,
    "chapterTitle": "Graphs",
    "topicId": "7.4",
    "topicTitle": "Shortest Path Algorithms (Dijkstra, Bellman-Ford, Floyd-Warshall)"
  },
  {
    "id": 777,
    "title": "Shortest Path to Get Food",
    "url": "https://leetcode.com/problems/shortest-path-to-get-food",
    "platform": "LeetCode",
    "chapterId": 7,
    "chapterTitle": "Graphs",
    "topicId": "7.4",
    "topicTitle": "Shortest Path Algorithms (Dijkstra, Bellman-Ford, Floyd-Warshall)"
  },
  {
    "id": 778,
    "title": "Swim in Rising Water",
    "url": "https://leetcode.com/problems/swim-in-rising-water",
    "platform": "LeetCode",
    "chapterId": 7,
    "chapterTitle": "Graphs",
    "topicId": "7.4",
    "topicTitle": "Shortest Path Algorithms (Dijkstra, Bellman-Ford, Floyd-Warshall)"
  },
  {
    "id": 779,
    "title": "Word Ladder",
    "url": "https://leetcode.com/problems/word-ladder",
    "platform": "LeetCode",
    "chapterId": 7,
    "chapterTitle": "Graphs",
    "topicId": "7.4",
    "topicTitle": "Shortest Path Algorithms (Dijkstra, Bellman-Ford, Floyd-Warshall)"
  },
  {
    "id": 780,
    "title": "Accounts Merge",
    "url": "https://leetcode.com/problems/accounts-merge",
    "platform": "LeetCode",
    "chapterId": 7,
    "chapterTitle": "Graphs",
    "topicId": "7.5",
    "topicTitle": "Disjoint Set Union (DSU) & Minimum Spanning Tree (MST)"
  },
  {
    "id": 781,
    "title": "Check for Prime Number",
    "url": "https://leetcode.com/problems/check-for-prime-number/",
    "platform": "LeetCode",
    "chapterId": 7,
    "chapterTitle": "Graphs",
    "topicId": "7.5",
    "topicTitle": "Disjoint Set Union (DSU) & Minimum Spanning Tree (MST)"
  },
  {
    "id": 782,
    "title": "Check if the Number is Armstrong",
    "url": "https://leetcode.com/problems/check-if-the-number-is-armstrong/",
    "platform": "LeetCode",
    "chapterId": 7,
    "chapterTitle": "Graphs",
    "topicId": "7.5",
    "topicTitle": "Disjoint Set Union (DSU) & Minimum Spanning Tree (MST)"
  },
  {
    "id": 783,
    "title": "Count primes in range L to R",
    "url": "https://leetcode.com/problems/count-primes-in-range-l-to-r/",
    "platform": "LeetCode",
    "chapterId": 7,
    "chapterTitle": "Graphs",
    "topicId": "7.5",
    "topicTitle": "Disjoint Set Union (DSU) & Minimum Spanning Tree (MST)"
  },
  {
    "id": 784,
    "title": "Disjoint Set",
    "url": "https://leetcode.com/problems/disjoint-set/",
    "platform": "LeetCode",
    "chapterId": 7,
    "chapterTitle": "Graphs",
    "topicId": "7.5",
    "topicTitle": "Disjoint Set Union (DSU) & Minimum Spanning Tree (MST)"
  },
  {
    "id": 785,
    "title": "Find Critical and Pseudo Critical Edges in Minimum Spanning Tree",
    "url": "https://leetcode.com/problems/find-critical-and-pseudo-critical-edges-in-minimum-spanning-tree/",
    "platform": "LeetCode",
    "chapterId": 7,
    "chapterTitle": "Graphs",
    "topicId": "7.5",
    "topicTitle": "Disjoint Set Union (DSU) & Minimum Spanning Tree (MST)"
  },
  {
    "id": 786,
    "title": "Find the MST weight",
    "url": "https://leetcode.com/problems/find-the-mst-weight/",
    "platform": "LeetCode",
    "chapterId": 7,
    "chapterTitle": "Graphs",
    "topicId": "7.5",
    "topicTitle": "Disjoint Set Union (DSU) & Minimum Spanning Tree (MST)"
  },
  {
    "id": 787,
    "title": "Kruskals Minimum Spanning Tree Algorithm Greedy Algo 2",
    "url": "https://www.geeksforgeeks.org/kruskals-minimum-spanning-tree-algorithm-greedy-algo-2/",
    "platform": "GeeksforGeeks",
    "chapterId": 7,
    "chapterTitle": "Graphs",
    "topicId": "7.5",
    "topicTitle": "Disjoint Set Union (DSU) & Minimum Spanning Tree (MST)"
  },
  {
    "id": 788,
    "title": "Min Cost to Connect All Points",
    "url": "https://leetcode.com/problems/min-cost-to-connect-all-points/",
    "platform": "LeetCode",
    "chapterId": 7,
    "chapterTitle": "Graphs",
    "topicId": "7.5",
    "topicTitle": "Disjoint Set Union (DSU) & Minimum Spanning Tree (MST)"
  },
  {
    "id": 789,
    "title": "Minimum Spanning Tree",
    "url": "https://www.geeksforgeeks.org/problems/minimum-spanning-tree/1",
    "platform": "GeeksforGeeks",
    "chapterId": 7,
    "chapterTitle": "Graphs",
    "topicId": "7.5",
    "topicTitle": "Disjoint Set Union (DSU) & Minimum Spanning Tree (MST)"
  },
  {
    "id": 790,
    "title": "Most Stones Removed with Same Row or Column",
    "url": "https://leetcode.com/problems/most-stones-removed-with-same-row-or-column",
    "platform": "LeetCode",
    "chapterId": 7,
    "chapterTitle": "Graphs",
    "topicId": "7.5",
    "topicTitle": "Disjoint Set Union (DSU) & Minimum Spanning Tree (MST)"
  },
  {
    "id": 791,
    "title": "MST theory",
    "url": "https://leetcode.com/problems/mst-theory/",
    "platform": "LeetCode",
    "chapterId": 7,
    "chapterTitle": "Graphs",
    "topicId": "7.5",
    "topicTitle": "Disjoint Set Union (DSU) & Minimum Spanning Tree (MST)"
  },
  {
    "id": 792,
    "title": "Number of Operations to Make Network Connected",
    "url": "https://leetcode.com/problems/number-of-operations-to-make-network-connected",
    "platform": "LeetCode",
    "chapterId": 7,
    "chapterTitle": "Graphs",
    "topicId": "7.5",
    "topicTitle": "Disjoint Set Union (DSU) & Minimum Spanning Tree (MST)"
  },
  {
    "id": 793,
    "title": "Prim's Algorithm",
    "url": "https://leetcode.com/problems/prim-s-algorithm/",
    "platform": "LeetCode",
    "chapterId": 7,
    "chapterTitle": "Graphs",
    "topicId": "7.5",
    "topicTitle": "Disjoint Set Union (DSU) & Minimum Spanning Tree (MST)"
  },
  {
    "id": 794,
    "title": "Prime factorisation of a Number",
    "url": "https://leetcode.com/problems/prime-factorisation-of-a-number/",
    "platform": "LeetCode",
    "chapterId": 7,
    "chapterTitle": "Graphs",
    "topicId": "7.5",
    "topicTitle": "Disjoint Set Union (DSU) & Minimum Spanning Tree (MST)"
  },
  {
    "id": 795,
    "title": "Prims Minimum Spanning Tree Mst Greedy Algo 5",
    "url": "https://www.geeksforgeeks.org/prims-minimum-spanning-tree-mst-greedy-algo-5/",
    "platform": "GeeksforGeeks",
    "chapterId": 7,
    "chapterTitle": "Graphs",
    "topicId": "7.5",
    "topicTitle": "Disjoint Set Union (DSU) & Minimum Spanning Tree (MST)"
  },
  {
    "id": 796,
    "title": "Print Prime Factors of a Number",
    "url": "https://leetcode.com/problems/print-prime-factors-of-a-number/",
    "platform": "LeetCode",
    "chapterId": 7,
    "chapterTitle": "Graphs",
    "topicId": "7.5",
    "topicTitle": "Disjoint Set Union (DSU) & Minimum Spanning Tree (MST)"
  },
  {
    "id": 797,
    "title": "Redundant Connection",
    "url": "https://leetcode.com/problems/redundant-connection",
    "platform": "LeetCode",
    "chapterId": 7,
    "chapterTitle": "Graphs",
    "topicId": "7.5",
    "topicTitle": "Disjoint Set Union (DSU) & Minimum Spanning Tree (MST)"
  },
  {
    "id": 798,
    "title": "Total number of Spanning Trees in a Graph",
    "url": "https://www.geeksforgeeks.org/total-number-spanning-trees-graph/",
    "platform": "GeeksforGeeks",
    "chapterId": 7,
    "chapterTitle": "Graphs",
    "topicId": "7.5",
    "topicTitle": "Disjoint Set Union (DSU) & Minimum Spanning Tree (MST)"
  },
  {
    "id": 799,
    "title": "0 - 1 Knapsack Problem",
    "url": "https://www.geeksforgeeks.org/problems/0-1-knapsack-problem0945/1",
    "platform": "GeeksforGeeks",
    "chapterId": 8,
    "chapterTitle": "Dynamic Programming (DP)",
    "topicId": "8.1",
    "topicTitle": "Dynamic Programming Patterns"
  },
  {
    "id": 800,
    "title": "Add 1 to a Linked List Number",
    "url": "https://www.geeksforgeeks.org/problems/add-1-to-a-number-represented-as-linked-list/1",
    "platform": "GeeksforGeeks",
    "chapterId": 8,
    "chapterTitle": "Dynamic Programming (DP)",
    "topicId": "8.1",
    "topicTitle": "Dynamic Programming Patterns"
  },
  {
    "id": 801,
    "title": "Add Number Linked Lists",
    "url": "https://www.geeksforgeeks.org/problems/add-two-numbers-represented-by-linked-lists/1",
    "platform": "GeeksforGeeks",
    "chapterId": 8,
    "chapterTitle": "Dynamic Programming (DP)",
    "topicId": "8.1",
    "topicTitle": "Dynamic Programming Patterns"
  },
  {
    "id": 802,
    "title": "Assembly Line Scheduling Dp 34",
    "url": "https://www.geeksforgeeks.org/assembly-line-scheduling-dp-34/",
    "platform": "GeeksforGeeks",
    "chapterId": 8,
    "chapterTitle": "Dynamic Programming (DP)",
    "topicId": "8.1",
    "topicTitle": "Dynamic Programming Patterns"
  },
  {
    "id": 803,
    "title": "Asteroid Collision",
    "url": "https://leetcode.com/problems/asteroid-collision",
    "platform": "LeetCode",
    "chapterId": 8,
    "chapterTitle": "Dynamic Programming (DP)",
    "topicId": "8.1",
    "topicTitle": "Dynamic Programming Patterns"
  },
  {
    "id": 804,
    "title": "Best Time to Buy and Sell Stock",
    "url": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock",
    "platform": "LeetCode",
    "chapterId": 8,
    "chapterTitle": "Dynamic Programming (DP)",
    "topicId": "8.1",
    "topicTitle": "Dynamic Programming Patterns"
  },
  {
    "id": 805,
    "title": "Burst Balloons",
    "url": "https://leetcode.com/problems/burst-balloons",
    "platform": "LeetCode",
    "chapterId": 8,
    "chapterTitle": "Dynamic Programming (DP)",
    "topicId": "8.1",
    "topicTitle": "Dynamic Programming Patterns"
  },
  {
    "id": 806,
    "title": "Check If Circular Linked List",
    "url": "https://www.geeksforgeeks.org/problems/circular-linked-list/1",
    "platform": "GeeksforGeeks",
    "chapterId": 8,
    "chapterTitle": "Dynamic Programming (DP)",
    "topicId": "8.1",
    "topicTitle": "Dynamic Programming Patterns"
  },
  {
    "id": 807,
    "title": "Climbing Stairs",
    "url": "https://leetcode.com/problems/climbing-stairs",
    "platform": "LeetCode",
    "chapterId": 8,
    "chapterTitle": "Dynamic Programming (DP)",
    "topicId": "8.1",
    "topicTitle": "Dynamic Programming Patterns"
  },
  {
    "id": 808,
    "title": "Clone List with Next and Random",
    "url": "https://www.geeksforgeeks.org/problems/clone-a-linked-list-with-next-and-random-pointer/1",
    "platform": "GeeksforGeeks",
    "chapterId": 8,
    "chapterTitle": "Dynamic Programming (DP)",
    "topicId": "8.1",
    "topicTitle": "Dynamic Programming Patterns"
  },
  {
    "id": 809,
    "title": "Coin Change",
    "url": "https://leetcode.com/problems/coin-change",
    "platform": "LeetCode",
    "chapterId": 8,
    "chapterTitle": "Dynamic Programming (DP)",
    "topicId": "8.1",
    "topicTitle": "Dynamic Programming Patterns"
  },
  {
    "id": 810,
    "title": "Coin Change (Count Ways)",
    "url": "https://www.geeksforgeeks.org/problems/coin-change2448/1",
    "platform": "GeeksforGeeks",
    "chapterId": 8,
    "chapterTitle": "Dynamic Programming (DP)",
    "topicId": "8.1",
    "topicTitle": "Dynamic Programming Patterns"
  },
  {
    "id": 811,
    "title": "Coin Change 2 (DP - 22)",
    "url": "https://leetcode.com/problems/coin-change-2/",
    "platform": "LeetCode",
    "chapterId": 8,
    "chapterTitle": "Dynamic Programming (DP)",
    "topicId": "8.1",
    "topicTitle": "Dynamic Programming Patterns"
  },
  {
    "id": 812,
    "title": "Convert Binary Number in a Linked List to Integer",
    "url": "https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer",
    "platform": "LeetCode",
    "chapterId": 8,
    "chapterTitle": "Dynamic Programming (DP)",
    "topicId": "8.1",
    "topicTitle": "Dynamic Programming Patterns"
  },
  {
    "id": 813,
    "title": "Copy List with Random Pointer",
    "url": "https://leetcode.com/problems/copy-list-with-random-pointer",
    "platform": "LeetCode",
    "chapterId": 8,
    "chapterTitle": "Dynamic Programming (DP)",
    "topicId": "8.1",
    "topicTitle": "Dynamic Programming Patterns"
  },
  {
    "id": 814,
    "title": "Count Square Submatrices with All Ones",
    "url": "https://leetcode.com/problems/count-square-submatrices-with-all-ones",
    "platform": "LeetCode",
    "chapterId": 8,
    "chapterTitle": "Dynamic Programming (DP)",
    "topicId": "8.1",
    "topicTitle": "Dynamic Programming Patterns"
  },
  {
    "id": 815,
    "title": "Count Triplets Sorted Doubly Linked List Whose Sum Equal Given Value X",
    "url": "https://www.geeksforgeeks.org/count-triplets-sorted-doubly-linked-list-whose-sum-equal-given-value-x/",
    "platform": "GeeksforGeeks",
    "chapterId": 8,
    "chapterTitle": "Dynamic Programming (DP)",
    "topicId": "8.1",
    "topicTitle": "Dynamic Programming Patterns"
  },
  {
    "id": 816,
    "title": "Decode Ways",
    "url": "https://leetcode.com/problems/decode-ways",
    "platform": "LeetCode",
    "chapterId": 8,
    "chapterTitle": "Dynamic Programming (DP)",
    "topicId": "8.1",
    "topicTitle": "Dynamic Programming Patterns"
  },
  {
    "id": 817,
    "title": "Delete head of Doubly Linked List",
    "url": "https://leetcode.com/problems/delete-head-of-doubly-linked-list/",
    "platform": "LeetCode",
    "chapterId": 8,
    "chapterTitle": "Dynamic Programming (DP)",
    "topicId": "8.1",
    "topicTitle": "Dynamic Programming Patterns"
  },
  {
    "id": 818,
    "title": "Deletion Circular Linked List",
    "url": "https://www.geeksforgeeks.org/deletion-circular-linked-list/",
    "platform": "GeeksforGeeks",
    "chapterId": 8,
    "chapterTitle": "Dynamic Programming (DP)",
    "topicId": "8.1",
    "topicTitle": "Dynamic Programming Patterns"
  },
  {
    "id": 819,
    "title": "Detect Loop in linked list",
    "url": "https://www.geeksforgeeks.org/problems/detect-loop-in-linked-list/1",
    "platform": "GeeksforGeeks",
    "chapterId": 8,
    "chapterTitle": "Dynamic Programming (DP)",
    "topicId": "8.1",
    "topicTitle": "Dynamic Programming Patterns"
  },
  {
    "id": 820,
    "title": "Distinct Subsequences",
    "url": "https://leetcode.com/problems/distinct-subsequences",
    "platform": "LeetCode",
    "chapterId": 8,
    "chapterTitle": "Dynamic Programming (DP)",
    "topicId": "8.1",
    "topicTitle": "Dynamic Programming Patterns"
  },
  {
    "id": 821,
    "title": "Edit Distance",
    "url": "https://www.geeksforgeeks.org/problems/edit-distance3702/1",
    "platform": "GeeksforGeeks",
    "chapterId": 8,
    "chapterTitle": "Dynamic Programming (DP)",
    "topicId": "8.1",
    "topicTitle": "Dynamic Programming Patterns"
  },
  {
    "id": 822,
    "title": "Egg Dropping Puzzle",
    "url": "https://www.geeksforgeeks.org/problems/egg-dropping-puzzle-1587115620/1",
    "platform": "GeeksforGeeks",
    "chapterId": 8,
    "chapterTitle": "Dynamic Programming (DP)",
    "topicId": "8.1",
    "topicTitle": "Dynamic Programming Patterns"
  },
  {
    "id": 823,
    "title": "Evaluate Reverse Polish Notation",
    "url": "https://leetcode.com/problems/evaluate-reverse-polish-notation",
    "platform": "LeetCode",
    "chapterId": 8,
    "chapterTitle": "Dynamic Programming (DP)",
    "topicId": "8.1",
    "topicTitle": "Dynamic Programming Patterns"
  },
  {
    "id": 824,
    "title": "Find First Node Of Loop In A Linked List",
    "url": "https://www.geeksforgeeks.org/find-first-node-of-loop-in-a-linked-list/",
    "platform": "GeeksforGeeks",
    "chapterId": 8,
    "chapterTitle": "Dynamic Programming (DP)",
    "topicId": "8.1",
    "topicTitle": "Dynamic Programming Patterns"
  },
  {
    "id": 825,
    "title": "Find Pairs Given Sum Doubly Linked List",
    "url": "https://www.geeksforgeeks.org/find-pairs-given-sum-doubly-linked-list/",
    "platform": "GeeksforGeeks",
    "chapterId": 8,
    "chapterTitle": "Dynamic Programming (DP)",
    "topicId": "8.1",
    "topicTitle": "Dynamic Programming Patterns"
  },
  {
    "id": 826,
    "title": "Find the length of the Linked List",
    "url": "https://leetcode.com/problems/find-the-length-of-the-linked-list/",
    "platform": "LeetCode",
    "chapterId": 8,
    "chapterTitle": "Dynamic Programming (DP)",
    "topicId": "8.1",
    "topicTitle": "Dynamic Programming Patterns"
  },
  {
    "id": 827,
    "title": "Flatten a Multilevel Doubly Linked List",
    "url": "https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list",
    "platform": "LeetCode",
    "chapterId": 8,
    "chapterTitle": "Dynamic Programming (DP)",
    "topicId": "8.1",
    "topicTitle": "Dynamic Programming Patterns"
  },
  {
    "id": 828,
    "title": "Flatten Nested List Iterator",
    "url": "https://leetcode.com/problems/flatten-nested-list-iterator",
    "platform": "LeetCode",
    "chapterId": 8,
    "chapterTitle": "Dynamic Programming (DP)",
    "topicId": "8.1",
    "topicTitle": "Dynamic Programming Patterns"
  },
  {
    "id": 829,
    "title": "Flattening a Linked List",
    "url": "https://www.geeksforgeeks.org/problems/flattening-a-linked-list/1",
    "platform": "GeeksforGeeks",
    "chapterId": 8,
    "chapterTitle": "Dynamic Programming (DP)",
    "topicId": "8.1",
    "topicTitle": "Dynamic Programming Patterns"
  },
  {
    "id": 830,
    "title": "Fractional Knapsack",
    "url": "https://www.geeksforgeeks.org/problems/fractional-knapsack-1587115620/1",
    "platform": "GeeksforGeeks",
    "chapterId": 8,
    "chapterTitle": "Dynamic Programming (DP)",
    "topicId": "8.1",
    "topicTitle": "Dynamic Programming Patterns"
  },
  {
    "id": 831,
    "title": "Friends Pairing Problem",
    "url": "https://www.geeksforgeeks.org/problems/friends-pairing-problem5425/1",
    "platform": "GeeksforGeeks",
    "chapterId": 8,
    "chapterTitle": "Dynamic Programming (DP)",
    "topicId": "8.1",
    "topicTitle": "Dynamic Programming Patterns"
  },
  {
    "id": 832,
    "title": "Frog Jump",
    "url": "https://leetcode.com/problems/frog-jump",
    "platform": "LeetCode",
    "chapterId": 8,
    "chapterTitle": "Dynamic Programming (DP)",
    "topicId": "8.1",
    "topicTitle": "Dynamic Programming Patterns"
  },
  {
    "id": 833,
    "title": "Frog jump with K distances",
    "url": "https://leetcode.com/problems/frog-jump-with-k-distances/",
    "platform": "LeetCode",
    "chapterId": 8,
    "chapterTitle": "Dynamic Programming (DP)",
    "topicId": "8.1",
    "topicTitle": "Dynamic Programming Patterns"
  },
  {
    "id": 834,
    "title": "Gold Mine Problem",
    "url": "https://www.geeksforgeeks.org/gold-mine-problem/",
    "platform": "GeeksforGeeks",
    "chapterId": 8,
    "chapterTitle": "Dynamic Programming (DP)",
    "topicId": "8.1",
    "topicTitle": "Dynamic Programming Patterns"
  },
  {
    "id": 835,
    "title": "Grid Unique Paths : DP on Grids (DP8)",
    "url": "https://leetcode.com/problems/grid-unique-paths-dp-on-grids/",
    "platform": "LeetCode",
    "chapterId": 8,
    "chapterTitle": "Dynamic Programming (DP)",
    "topicId": "8.1",
    "topicTitle": "Dynamic Programming Patterns"
  },
  {
    "id": 836,
    "title": "House Robber",
    "url": "https://leetcode.com/problems/house-robber",
    "platform": "LeetCode",
    "chapterId": 8,
    "chapterTitle": "Dynamic Programming (DP)",
    "topicId": "8.1",
    "topicTitle": "Dynamic Programming Patterns"
  },
  {
    "id": 837,
    "title": "Implement queue using Linkedlist",
    "url": "https://leetcode.com/problems/implement-queue-using-linkedlist/",
    "platform": "LeetCode",
    "chapterId": 8,
    "chapterTitle": "Dynamic Programming (DP)",
    "topicId": "8.1",
    "topicTitle": "Dynamic Programming Patterns"
  },
  {
    "id": 838,
    "title": "Implement stack using Linkedlist",
    "url": "https://leetcode.com/problems/implement-stack-using-linkedlist/",
    "platform": "LeetCode",
    "chapterId": 8,
    "chapterTitle": "Dynamic Programming (DP)",
    "topicId": "8.1",
    "topicTitle": "Dynamic Programming Patterns"
  },
  {
    "id": 839,
    "title": "Insert Greatest Common Divisors in Linked List",
    "url": "https://leetcode.com/problems/insert-greatest-common-divisors-in-linked-list/",
    "platform": "LeetCode",
    "chapterId": 8,
    "chapterTitle": "Dynamic Programming (DP)",
    "topicId": "8.1",
    "topicTitle": "Dynamic Programming Patterns"
  },
  {
    "id": 840,
    "title": "Insert node before head in Doubly Linked List",
    "url": "https://leetcode.com/problems/insert-node-before-head-in-doubly-linked-list/",
    "platform": "LeetCode",
    "chapterId": 8,
    "chapterTitle": "Dynamic Programming (DP)",
    "topicId": "8.1",
    "topicTitle": "Dynamic Programming Patterns"
  },
  {
    "id": 841,
    "title": "Insertion at the head of Linked List",
    "url": "https://leetcode.com/problems/insertion-at-the-head-of-linked-list/",
    "platform": "LeetCode",
    "chapterId": 8,
    "chapterTitle": "Dynamic Programming (DP)",
    "topicId": "8.1",
    "topicTitle": "Dynamic Programming Patterns"
  },
  {
    "id": 842,
    "title": "Integer to English Words",
    "url": "https://leetcode.com/problems/integer-to-english-words",
    "platform": "LeetCode",
    "chapterId": 8,
    "chapterTitle": "Dynamic Programming (DP)",
    "topicId": "8.1",
    "topicTitle": "Dynamic Programming Patterns"
  },
  {
    "id": 843,
    "title": "Interleaving String",
    "url": "https://leetcode.com/problems/interleaving-string/",
    "platform": "LeetCode",
    "chapterId": 8,
    "chapterTitle": "Dynamic Programming (DP)",
    "topicId": "8.1",
    "topicTitle": "Dynamic Programming Patterns"
  },
  {
    "id": 844,
    "title": "Intersection in Y Shaped Lists",
    "url": "https://www.geeksforgeeks.org/problems/intersection-point-in-y-shapped-linked-lists/1",
    "platform": "GeeksforGeeks",
    "chapterId": 8,
    "chapterTitle": "Dynamic Programming (DP)",
    "topicId": "8.1",
    "topicTitle": "Dynamic Programming Patterns"
  },
  {
    "id": 845,
    "title": "Intersection of Two Linked Lists",
    "url": "https://leetcode.com/problems/intersection-of-two-linked-lists",
    "platform": "LeetCode",
    "chapterId": 8,
    "chapterTitle": "Dynamic Programming (DP)",
    "topicId": "8.1",
    "topicTitle": "Dynamic Programming Patterns"
  },
  {
    "id": 846,
    "title": "Introduction to DP",
    "url": "https://leetcode.com/problems/introduction-to-dp/",
    "platform": "LeetCode",
    "chapterId": 8,
    "chapterTitle": "Dynamic Programming (DP)",
    "topicId": "8.1",
    "topicTitle": "Dynamic Programming Patterns"
  },
  {
    "id": 847,
    "title": "Introduction to Singly LinkedList",
    "url": "https://leetcode.com/problems/introduction-to-singly-linkedlist/",
    "platform": "LeetCode",
    "chapterId": 8,
    "chapterTitle": "Dynamic Programming (DP)",
    "topicId": "8.1",
    "topicTitle": "Dynamic Programming Patterns"
  },
  {
    "id": 848,
    "title": "Knapsack with Duplicate Items",
    "url": "https://www.geeksforgeeks.org/problems/knapsack-with-duplicate-items4201/1",
    "platform": "GeeksforGeeks",
    "chapterId": 8,
    "chapterTitle": "Dynamic Programming (DP)",
    "topicId": "8.1",
    "topicTitle": "Dynamic Programming Patterns"
  },
  {
    "id": 849,
    "title": "Knight Dialer",
    "url": "https://leetcode.com/problems/knight-dialer",
    "platform": "LeetCode",
    "chapterId": 8,
    "chapterTitle": "Dynamic Programming (DP)",
    "topicId": "8.1",
    "topicTitle": "Dynamic Programming Patterns"
  },
  {
    "id": 850,
    "title": "Kth from End of Linked List",
    "url": "https://www.geeksforgeeks.org/problems/nth-node-from-end-of-linked-list/1",
    "platform": "GeeksforGeeks",
    "chapterId": 8,
    "chapterTitle": "Dynamic Programming (DP)",
    "topicId": "8.1",
    "topicTitle": "Dynamic Programming Patterns"
  },
  {
    "id": 851,
    "title": "Largest Independent Set Problem Dp 26",
    "url": "https://www.geeksforgeeks.org/largest-independent-set-problem-dp-26/",
    "platform": "GeeksforGeeks",
    "chapterId": 8,
    "chapterTitle": "Dynamic Programming (DP)",
    "topicId": "8.1",
    "topicTitle": "Dynamic Programming Patterns"
  },
  {
    "id": 852,
    "title": "LCS of three strings",
    "url": "https://www.geeksforgeeks.org/problems/lcs-of-three-strings0028/1",
    "platform": "GeeksforGeeks",
    "chapterId": 8,
    "chapterTitle": "Dynamic Programming (DP)",
    "topicId": "8.1",
    "topicTitle": "Dynamic Programming Patterns"
  },
  {
    "id": 853,
    "title": "Linked List Cycle",
    "url": "https://leetcode.com/problems/linked-list-cycle",
    "platform": "LeetCode",
    "chapterId": 8,
    "chapterTitle": "Dynamic Programming (DP)",
    "topicId": "8.1",
    "topicTitle": "Dynamic Programming Patterns"
  },
  {
    "id": 854,
    "title": "Longest Bitonic Subsequence",
    "url": "https://leetcode.com/problems/longest-bitonic-subsequence/",
    "platform": "LeetCode",
    "chapterId": 8,
    "chapterTitle": "Dynamic Programming (DP)",
    "topicId": "8.1",
    "topicTitle": "Dynamic Programming Patterns"
  },
  {
    "id": 855,
    "title": "Longest Common Subsequence",
    "url": "https://www.geeksforgeeks.org/problems/longest-common-subsequence-1587115620/1",
    "platform": "GeeksforGeeks",
    "chapterId": 8,
    "chapterTitle": "Dynamic Programming (DP)",
    "topicId": "8.1",
    "topicTitle": "Dynamic Programming Patterns"
  },
  {
    "id": 856,
    "title": "Longest Palindromic Subsequence Dp 12",
    "url": "https://www.geeksforgeeks.org/longest-palindromic-subsequence-dp-12/",
    "platform": "GeeksforGeeks",
    "chapterId": 8,
    "chapterTitle": "Dynamic Programming (DP)",
    "topicId": "8.1",
    "topicTitle": "Dynamic Programming Patterns"
  },
  {
    "id": 857,
    "title": "Longest String Chain",
    "url": "https://leetcode.com/problems/longest-string-chain/",
    "platform": "LeetCode",
    "chapterId": 8,
    "chapterTitle": "Dynamic Programming (DP)",
    "topicId": "8.1",
    "topicTitle": "Dynamic Programming Patterns"
  },
  {
    "id": 858,
    "title": "Longest Valid Parentheses",
    "url": "https://leetcode.com/problems/longest-valid-parentheses",
    "platform": "LeetCode",
    "chapterId": 8,
    "chapterTitle": "Dynamic Programming (DP)",
    "topicId": "8.1",
    "topicTitle": "Dynamic Programming Patterns"
  },
  {
    "id": 859,
    "title": "Matrix chain multiplication",
    "url": "https://leetcode.com/problems/matrix-chain-multiplication/",
    "platform": "LeetCode",
    "chapterId": 8,
    "chapterTitle": "Dynamic Programming (DP)",
    "topicId": "8.1",
    "topicTitle": "Dynamic Programming Patterns"
  },
  {
    "id": 860,
    "title": "Max Sum Increasing Subsequence",
    "url": "https://www.geeksforgeeks.org/problems/maximum-sum-increasing-subsequence4749/1",
    "platform": "GeeksforGeeks",
    "chapterId": 8,
    "chapterTitle": "Dynamic Programming (DP)",
    "topicId": "8.1",
    "topicTitle": "Dynamic Programming Patterns"
  },
  {
    "id": 861,
    "title": "Maximize The Cut Segments",
    "url": "https://www.geeksforgeeks.org/problems/cutted-segments1642/1",
    "platform": "GeeksforGeeks",
    "chapterId": 8,
    "chapterTitle": "Dynamic Programming (DP)",
    "topicId": "8.1",
    "topicTitle": "Dynamic Programming Patterns"
  },
  {
    "id": 862,
    "title": "Maximum difference of zeros and ones in binary string",
    "url": "https://www.geeksforgeeks.org/problems/maximum-difference-of-zeros-and-ones-in-binary-string4111/1",
    "platform": "GeeksforGeeks",
    "chapterId": 8,
    "chapterTitle": "Dynamic Programming (DP)",
    "topicId": "8.1",
    "topicTitle": "Dynamic Programming Patterns"
  },
  {
    "id": 863,
    "title": "Maximum Product Subarray",
    "url": "https://leetcode.com/problems/maximum-product-subarray",
    "platform": "LeetCode",
    "chapterId": 8,
    "chapterTitle": "Dynamic Programming (DP)",
    "topicId": "8.1",
    "topicTitle": "Dynamic Programming Patterns"
  },
  {
    "id": 864,
    "title": "Maximum Rectangle Area with all 1's|(DP-55)",
    "url": "https://leetcode.com/problems/maximum-rectangle-area-with-all-1-s/",
    "platform": "LeetCode",
    "chapterId": 8,
    "chapterTitle": "Dynamic Programming (DP)",
    "topicId": "8.1",
    "topicTitle": "Dynamic Programming Patterns"
  },
  {
    "id": 865,
    "title": "Merge Sort for Linked List",
    "url": "https://www.geeksforgeeks.org/problems/sort-a-linked-list/1",
    "platform": "GeeksforGeeks",
    "chapterId": 8,
    "chapterTitle": "Dynamic Programming (DP)",
    "topicId": "8.1",
    "topicTitle": "Dynamic Programming Patterns"
  },
  {
    "id": 866,
    "title": "Middle of a LinkedList [TortoiseHare Method]",
    "url": "https://leetcode.com/problems/middle-of-a-linkedlist-tortoisehare-method/",
    "platform": "LeetCode",
    "chapterId": 8,
    "chapterTitle": "Dynamic Programming (DP)",
    "topicId": "8.1",
    "topicTitle": "Dynamic Programming Patterns"
  },
  {
    "id": 867,
    "title": "Middle of the Linked List",
    "url": "https://leetcode.com/problems/middle-of-the-linked-list",
    "platform": "LeetCode",
    "chapterId": 8,
    "chapterTitle": "Dynamic Programming (DP)",
    "topicId": "8.1",
    "topicTitle": "Dynamic Programming Patterns"
  },
  {
    "id": 868,
    "title": "Min Cost Climbing Stairs",
    "url": "https://leetcode.com/problems/min-cost-climbing-stairs/",
    "platform": "LeetCode",
    "chapterId": 8,
    "chapterTitle": "Dynamic Programming (DP)",
    "topicId": "8.1",
    "topicTitle": "Dynamic Programming Patterns"
  },
  {
    "id": 869,
    "title": "Minimum Coins (DP - 20)",
    "url": "https://leetcode.com/problems/minimum-coins/",
    "platform": "LeetCode",
    "chapterId": 8,
    "chapterTitle": "Dynamic Programming (DP)",
    "topicId": "8.1",
    "topicTitle": "Dynamic Programming Patterns"
  },
  {
    "id": 870,
    "title": "Minimum Number of Arrows to Burst Balloons",
    "url": "https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/",
    "platform": "LeetCode",
    "chapterId": 8,
    "chapterTitle": "Dynamic Programming (DP)",
    "topicId": "8.1",
    "topicTitle": "Dynamic Programming Patterns"
  },
  {
    "id": 871,
    "title": "Move Last Element To Front Of A Given Linked List",
    "url": "https://www.geeksforgeeks.org/move-last-element-to-front-of-a-given-linked-list/",
    "platform": "GeeksforGeeks",
    "chapterId": 8,
    "chapterTitle": "Dynamic Programming (DP)",
    "topicId": "8.1",
    "topicTitle": "Dynamic Programming Patterns"
  },
  {
    "id": 872,
    "title": "Multiply two linked lists",
    "url": "https://www.geeksforgeeks.org/problems/multiply-two-linked-lists/1",
    "platform": "GeeksforGeeks",
    "chapterId": 8,
    "chapterTitle": "Dynamic Programming (DP)",
    "topicId": "8.1",
    "topicTitle": "Dynamic Programming Patterns"
  },
  {
    "id": 873,
    "title": "Odd Even Linked List",
    "url": "https://leetcode.com/problems/odd-even-linked-list",
    "platform": "LeetCode",
    "chapterId": 8,
    "chapterTitle": "Dynamic Programming (DP)",
    "topicId": "8.1",
    "topicTitle": "Dynamic Programming Patterns"
  },
  {
    "id": 874,
    "title": "Ones and Zeroes",
    "url": "https://leetcode.com/problems/ones-and-zeroes",
    "platform": "LeetCode",
    "chapterId": 8,
    "chapterTitle": "Dynamic Programming (DP)",
    "topicId": "8.1",
    "topicTitle": "Dynamic Programming Patterns"
  },
  {
    "id": 875,
    "title": "Optimal Strategy For A Game",
    "url": "https://www.geeksforgeeks.org/problems/optimal-strategy-for-a-game-1587115620/1",
    "platform": "GeeksforGeeks",
    "chapterId": 8,
    "chapterTitle": "Dynamic Programming (DP)",
    "topicId": "8.1",
    "topicTitle": "Dynamic Programming Patterns"
  },
  {
    "id": 876,
    "title": "Painting the Fence",
    "url": "https://www.geeksforgeeks.org/problems/painting-the-fence3727/1",
    "platform": "GeeksforGeeks",
    "chapterId": 8,
    "chapterTitle": "Dynamic Programming (DP)",
    "topicId": "8.1",
    "topicTitle": "Dynamic Programming Patterns"
  },
  {
    "id": 877,
    "title": "Palindrome Linked List",
    "url": "https://leetcode.com/problems/palindrome-linked-list",
    "platform": "LeetCode",
    "chapterId": 8,
    "chapterTitle": "Dynamic Programming (DP)",
    "topicId": "8.1",
    "topicTitle": "Dynamic Programming Patterns"
  },
  {
    "id": 878,
    "title": "Partition Equal Subset Sum",
    "url": "https://www.geeksforgeeks.org/problems/subset-sum-problem2014/1",
    "platform": "GeeksforGeeks",
    "chapterId": 8,
    "chapterTitle": "Dynamic Programming (DP)",
    "topicId": "8.1",
    "topicTitle": "Dynamic Programming Patterns"
  },
  {
    "id": 879,
    "title": "Partition List",
    "url": "https://leetcode.com/problems/partition-list",
    "platform": "LeetCode",
    "chapterId": 8,
    "chapterTitle": "Dynamic Programming (DP)",
    "topicId": "8.1",
    "topicTitle": "Dynamic Programming Patterns"
  },
  {
    "id": 880,
    "title": "Perfect Squares",
    "url": "https://leetcode.com/problems/perfect-squares/",
    "platform": "LeetCode",
    "chapterId": 8,
    "chapterTitle": "Dynamic Programming (DP)",
    "topicId": "8.1",
    "topicTitle": "Dynamic Programming Patterns"
  },
  {
    "id": 881,
    "title": "Print Longest Increasing Subsequence",
    "url": "https://www.geeksforgeeks.org/problems/printing-longest-increasing-subsequence/1",
    "platform": "GeeksforGeeks",
    "chapterId": 8,
    "chapterTitle": "Dynamic Programming (DP)",
    "topicId": "8.1",
    "topicTitle": "Dynamic Programming Patterns"
  },
  {
    "id": 882,
    "title": "Quick Sort on Linked List",
    "url": "https://www.geeksforgeeks.org/problems/quick-sort-on-linked-list/1",
    "platform": "GeeksforGeeks",
    "chapterId": 8,
    "chapterTitle": "Dynamic Programming (DP)",
    "topicId": "8.1",
    "topicTitle": "Dynamic Programming Patterns"
  },
  {
    "id": 883,
    "title": "Reach a given score",
    "url": "https://www.geeksforgeeks.org/problems/reach-a-given-score-1587115621/1",
    "platform": "GeeksforGeeks",
    "chapterId": 8,
    "chapterTitle": "Dynamic Programming (DP)",
    "topicId": "8.1",
    "topicTitle": "Dynamic Programming Patterns"
  },
  {
    "id": 884,
    "title": "Rearrange a given linked list in-place",
    "url": "https://www.geeksforgeeks.org/rearrange-a-given-linked-list-in-place/",
    "platform": "GeeksforGeeks",
    "chapterId": 8,
    "chapterTitle": "Dynamic Programming (DP)",
    "topicId": "8.1",
    "topicTitle": "Dynamic Programming Patterns"
  },
  {
    "id": 885,
    "title": "Rearrange a Linked List in Zig-Zag fashion",
    "url": "https://www.geeksforgeeks.org/problems/linked-list-in-zig-zag-fashion/1",
    "platform": "GeeksforGeeks",
    "chapterId": 8,
    "chapterTitle": "Dynamic Programming (DP)",
    "topicId": "8.1",
    "topicTitle": "Dynamic Programming Patterns"
  },
  {
    "id": 886,
    "title": "Recursively print all sentences that can be formed from list of word lists",
    "url": "https://www.geeksforgeeks.org/problems/recursively-print-all-sentences-that-can-be-formed-from-list-of-word-lists/1",
    "platform": "GeeksforGeeks",
    "chapterId": 8,
    "chapterTitle": "Dynamic Programming (DP)",
    "topicId": "8.1",
    "topicTitle": "Dynamic Programming Patterns"
  },
  {
    "id": 887,
    "title": "Regular Expression Matching",
    "url": "https://leetcode.com/problems/regular-expression-matching/",
    "platform": "LeetCode",
    "chapterId": 8,
    "chapterTitle": "Dynamic Programming (DP)",
    "topicId": "8.1",
    "topicTitle": "Dynamic Programming Patterns"
  },
  {
    "id": 888,
    "title": "Remove Linked List Elements",
    "url": "https://leetcode.com/problems/remove-linked-list-elements",
    "platform": "LeetCode",
    "chapterId": 8,
    "chapterTitle": "Dynamic Programming (DP)",
    "topicId": "8.1",
    "topicTitle": "Dynamic Programming Patterns"
  },
  {
    "id": 889,
    "title": "Remove loop in Linked List",
    "url": "https://www.geeksforgeeks.org/problems/remove-loop-in-linked-list/1",
    "platform": "GeeksforGeeks",
    "chapterId": 8,
    "chapterTitle": "Dynamic Programming (DP)",
    "topicId": "8.1",
    "topicTitle": "Dynamic Programming Patterns"
  },
  {
    "id": 890,
    "title": "Remove Nth Node From End of List",
    "url": "https://leetcode.com/problems/remove-nth-node-from-end-of-list",
    "platform": "LeetCode",
    "chapterId": 8,
    "chapterTitle": "Dynamic Programming (DP)",
    "topicId": "8.1",
    "topicTitle": "Dynamic Programming Patterns"
  },
  {
    "id": 891,
    "title": "Reorder List",
    "url": "https://leetcode.com/problems/reorder-list",
    "platform": "LeetCode",
    "chapterId": 8,
    "chapterTitle": "Dynamic Programming (DP)",
    "topicId": "8.1",
    "topicTitle": "Dynamic Programming Patterns"
  },
  {
    "id": 892,
    "title": "Reverse a LinkedList [Iterative]",
    "url": "https://leetcode.com/problems/reverse-a-linkedlist-iterative/",
    "platform": "LeetCode",
    "chapterId": 8,
    "chapterTitle": "Dynamic Programming (DP)",
    "topicId": "8.1",
    "topicTitle": "Dynamic Programming Patterns"
  },
  {
    "id": 893,
    "title": "Reverse Doubly Linked List Groups Given Size",
    "url": "https://www.geeksforgeeks.org/reverse-doubly-linked-list-groups-given-size/",
    "platform": "GeeksforGeeks",
    "chapterId": 8,
    "chapterTitle": "Dynamic Programming (DP)",
    "topicId": "8.1",
    "topicTitle": "Dynamic Programming Patterns"
  },
  {
    "id": 894,
    "title": "Reverse Linked List",
    "url": "https://leetcode.com/problems/reverse-linked-list",
    "platform": "LeetCode",
    "chapterId": 8,
    "chapterTitle": "Dynamic Programming (DP)",
    "topicId": "8.1",
    "topicTitle": "Dynamic Programming Patterns"
  },
  {
    "id": 895,
    "title": "Rod Cutting Problem | (DP - 24)",
    "url": "https://www.geeksforgeeks.org/problems/rod-cutting0840/1",
    "platform": "GeeksforGeeks",
    "chapterId": 8,
    "chapterTitle": "Dynamic Programming (DP)",
    "topicId": "8.1",
    "topicTitle": "Dynamic Programming Patterns"
  },
  {
    "id": 896,
    "title": "Rotate Doubly Linked List N Nodes",
    "url": "https://www.geeksforgeeks.org/rotate-doubly-linked-list-n-nodes/",
    "platform": "GeeksforGeeks",
    "chapterId": 8,
    "chapterTitle": "Dynamic Programming (DP)",
    "topicId": "8.1",
    "topicTitle": "Dynamic Programming Patterns"
  },
  {
    "id": 897,
    "title": "Rotate List",
    "url": "https://leetcode.com/problems/rotate-list",
    "platform": "LeetCode",
    "chapterId": 8,
    "chapterTitle": "Dynamic Programming (DP)",
    "topicId": "8.1",
    "topicTitle": "Dynamic Programming Patterns"
  },
  {
    "id": 898,
    "title": "Search in Linked List",
    "url": "https://leetcode.com/problems/search-in-linked-list/",
    "platform": "LeetCode",
    "chapterId": 8,
    "chapterTitle": "Dynamic Programming (DP)",
    "topicId": "8.1",
    "topicTitle": "Dynamic Programming Patterns"
  },
  {
    "id": 899,
    "title": "Segregate odd and even nodes in Linked List",
    "url": "https://leetcode.com/problems/segregate-odd-and-even-nodes-in-linked-list/",
    "platform": "LeetCode",
    "chapterId": 8,
    "chapterTitle": "Dynamic Programming (DP)",
    "topicId": "8.1",
    "topicTitle": "Dynamic Programming Patterns"
  },
  {
    "id": 900,
    "title": "Smallest range in K lists",
    "url": "https://www.geeksforgeeks.org/problems/find-smallest-range-containing-elements-from-k-lists/1",
    "platform": "GeeksforGeeks",
    "chapterId": 8,
    "chapterTitle": "Dynamic Programming (DP)",
    "topicId": "8.1",
    "topicTitle": "Dynamic Programming Patterns"
  },
  {
    "id": 901,
    "title": "Smallest Subset Sum Greater Elements",
    "url": "https://www.geeksforgeeks.org/smallest-subset-sum-greater-elements/",
    "platform": "GeeksforGeeks",
    "chapterId": 8,
    "chapterTitle": "Dynamic Programming (DP)",
    "topicId": "8.1",
    "topicTitle": "Dynamic Programming Patterns"
  },
  {
    "id": 902,
    "title": "Sort a linked list of 0s, 1s and 2s",
    "url": "https://www.geeksforgeeks.org/sort-a-linked-list-of-0s-1s-or-2s/",
    "platform": "GeeksforGeeks",
    "chapterId": 8,
    "chapterTitle": "Dynamic Programming (DP)",
    "topicId": "8.1",
    "topicTitle": "Dynamic Programming Patterns"
  },
  {
    "id": 903,
    "title": "Sort K Sorted Doubly Linked List",
    "url": "https://www.geeksforgeeks.org/sort-k-sorted-doubly-linked-list/",
    "platform": "GeeksforGeeks",
    "chapterId": 8,
    "chapterTitle": "Dynamic Programming (DP)",
    "topicId": "8.1",
    "topicTitle": "Dynamic Programming Patterns"
  },
  {
    "id": 904,
    "title": "Sort List",
    "url": "https://leetcode.com/problems/sort-list",
    "platform": "LeetCode",
    "chapterId": 8,
    "chapterTitle": "Dynamic Programming (DP)",
    "topicId": "8.1",
    "topicTitle": "Dynamic Programming Patterns"
  },
  {
    "id": 905,
    "title": "Space Optimized Solution Lcs",
    "url": "https://www.geeksforgeeks.org/space-optimized-solution-lcs/",
    "platform": "GeeksforGeeks",
    "chapterId": 8,
    "chapterTitle": "Dynamic Programming (DP)",
    "topicId": "8.1",
    "topicTitle": "Dynamic Programming Patterns"
  },
  {
    "id": 906,
    "title": "Split a Linked List into two halves",
    "url": "https://www.geeksforgeeks.org/problems/split-a-circular-linked-list-into-two-halves/1",
    "platform": "GeeksforGeeks",
    "chapterId": 8,
    "chapterTitle": "Dynamic Programming (DP)",
    "topicId": "8.1",
    "topicTitle": "Dynamic Programming Patterns"
  },
  {
    "id": 907,
    "title": "Stickler Thief",
    "url": "https://www.geeksforgeeks.org/problems/stickler-theif-1587115621/1",
    "platform": "GeeksforGeeks",
    "chapterId": 8,
    "chapterTitle": "Dynamic Programming (DP)",
    "topicId": "8.1",
    "topicTitle": "Dynamic Programming Patterns"
  },
  {
    "id": 908,
    "title": "Stock Buy and Sell",
    "url": "https://leetcode.com/problems/stock-buy-and-sell/",
    "platform": "LeetCode",
    "chapterId": 8,
    "chapterTitle": "Dynamic Programming (DP)",
    "topicId": "8.1",
    "topicTitle": "Dynamic Programming Patterns"
  },
  {
    "id": 909,
    "title": "Stock Buy and Sell – Max K Transactions Allowed",
    "url": "https://www.geeksforgeeks.org/problems/maximum-profit4657/1",
    "platform": "GeeksforGeeks",
    "chapterId": 8,
    "chapterTitle": "Dynamic Programming (DP)",
    "topicId": "8.1",
    "topicTitle": "Dynamic Programming Patterns"
  },
  {
    "id": 910,
    "title": "Stone Game",
    "url": "https://leetcode.com/problems/stone-game/",
    "platform": "LeetCode",
    "chapterId": 8,
    "chapterTitle": "Dynamic Programming (DP)",
    "topicId": "8.1",
    "topicTitle": "Dynamic Programming Patterns"
  },
  {
    "id": 911,
    "title": "Stone Game II",
    "url": "https://leetcode.com/problems/stone-game-ii/",
    "platform": "LeetCode",
    "chapterId": 8,
    "chapterTitle": "Dynamic Programming (DP)",
    "topicId": "8.1",
    "topicTitle": "Dynamic Programming Patterns"
  },
  {
    "id": 912,
    "title": "Subset sum equal to target (DP- 14)",
    "url": "https://www.geeksforgeeks.org/problems/subset-sum-problem-1611555638/1",
    "platform": "GeeksforGeeks",
    "chapterId": 8,
    "chapterTitle": "Dynamic Programming (DP)",
    "topicId": "8.1",
    "topicTitle": "Dynamic Programming Patterns"
  },
  {
    "id": 913,
    "title": "Subtraction in Linked List",
    "url": "https://www.geeksforgeeks.org/problems/subtraction-in-linked-list/1",
    "platform": "GeeksforGeeks",
    "chapterId": 8,
    "chapterTitle": "Dynamic Programming (DP)",
    "topicId": "8.1",
    "topicTitle": "Dynamic Programming Patterns"
  },
  {
    "id": 914,
    "title": "Super Egg Drop",
    "url": "https://leetcode.com/problems/super-egg-drop",
    "platform": "LeetCode",
    "chapterId": 8,
    "chapterTitle": "Dynamic Programming (DP)",
    "topicId": "8.1",
    "topicTitle": "Dynamic Programming Patterns"
  },
  {
    "id": 915,
    "title": "Target Sum",
    "url": "https://leetcode.com/problems/target-sum/",
    "platform": "LeetCode",
    "chapterId": 8,
    "chapterTitle": "Dynamic Programming (DP)",
    "topicId": "8.1",
    "topicTitle": "Dynamic Programming Patterns"
  },
  {
    "id": 916,
    "title": "Target Sum Combinations",
    "url": "https://www.geeksforgeeks.org/problems/combination-sum-1587115620/1",
    "platform": "GeeksforGeeks",
    "chapterId": 8,
    "chapterTitle": "Dynamic Programming (DP)",
    "topicId": "8.1",
    "topicTitle": "Dynamic Programming Patterns"
  },
  {
    "id": 917,
    "title": "Unbounded knapsack",
    "url": "https://leetcode.com/problems/unbounded-knapsack/",
    "platform": "LeetCode",
    "chapterId": 8,
    "chapterTitle": "Dynamic Programming (DP)",
    "topicId": "8.1",
    "topicTitle": "Dynamic Programming Patterns"
  },
  {
    "id": 918,
    "title": "Unique Paths",
    "url": "https://leetcode.com/problems/unique-paths",
    "platform": "LeetCode",
    "chapterId": 8,
    "chapterTitle": "Dynamic Programming (DP)",
    "topicId": "8.1",
    "topicTitle": "Dynamic Programming Patterns"
  },
  {
    "id": 919,
    "title": "Wildcard matching",
    "url": "https://leetcode.com/problems/wildcard-matching/",
    "platform": "LeetCode",
    "chapterId": 8,
    "chapterTitle": "Dynamic Programming (DP)",
    "topicId": "8.1",
    "topicTitle": "Dynamic Programming Patterns"
  },
  {
    "id": 920,
    "title": "Wildcard string matching",
    "url": "https://www.geeksforgeeks.org/problems/wildcard-string-matching1126/1",
    "platform": "GeeksforGeeks",
    "chapterId": 8,
    "chapterTitle": "Dynamic Programming (DP)",
    "topicId": "8.1",
    "topicTitle": "Dynamic Programming Patterns"
  },
  {
    "id": 921,
    "title": "Word Break",
    "url": "https://leetcode.com/problems/word-break",
    "platform": "LeetCode",
    "chapterId": 8,
    "chapterTitle": "Dynamic Programming (DP)",
    "topicId": "8.1",
    "topicTitle": "Dynamic Programming Patterns"
  },
  {
    "id": 922,
    "title": "Word Break",
    "url": "https://leetcode.com/problems/word-break",
    "platform": "LeetCode",
    "chapterId": 8,
    "chapterTitle": "Dynamic Programming (DP)",
    "topicId": "8.1",
    "topicTitle": "Dynamic Programming Patterns"
  },
  {
    "id": 923,
    "title": "All Unique Permutations of an array",
    "url": "https://www.geeksforgeeks.org/problems/all-unique-permutations-of-an-array/1",
    "platform": "GeeksforGeeks",
    "chapterId": 9,
    "chapterTitle": "Backtracking & Recursion",
    "topicId": "9.1",
    "topicTitle": "Backtracking & Exhaustive Search"
  },
  {
    "id": 924,
    "title": "Combination Sum II",
    "url": "https://leetcode.com/problems/combination-sum-ii",
    "platform": "LeetCode",
    "chapterId": 9,
    "chapterTitle": "Backtracking & Recursion",
    "topicId": "9.1",
    "topicTitle": "Backtracking & Exhaustive Search"
  },
  {
    "id": 925,
    "title": "Combinations",
    "url": "https://leetcode.com/problems/combinations",
    "platform": "LeetCode",
    "chapterId": 9,
    "chapterTitle": "Backtracking & Recursion",
    "topicId": "9.1",
    "topicTitle": "Backtracking & Exhaustive Search"
  },
  {
    "id": 926,
    "title": "Combinations",
    "url": "https://leetcode.com/problems/combinations",
    "platform": "LeetCode",
    "chapterId": 9,
    "chapterTitle": "Backtracking & Recursion",
    "topicId": "9.1",
    "topicTitle": "Backtracking & Exhaustive Search"
  },
  {
    "id": 927,
    "title": "Count subsets with sum K",
    "url": "https://www.geeksforgeeks.org/problems/perfect-sum-problem5633/1",
    "platform": "GeeksforGeeks",
    "chapterId": 9,
    "chapterTitle": "Backtracking & Recursion",
    "topicId": "9.1",
    "topicTitle": "Backtracking & Exhaustive Search"
  },
  {
    "id": 928,
    "title": "Expression Add Operators",
    "url": "https://leetcode.com/problems/expression-add-operators/",
    "platform": "LeetCode",
    "chapterId": 9,
    "chapterTitle": "Backtracking & Recursion",
    "topicId": "9.1",
    "topicTitle": "Backtracking & Exhaustive Search"
  },
  {
    "id": 929,
    "title": "Generate Parentheses",
    "url": "https://leetcode.com/problems/generate-parentheses",
    "platform": "LeetCode",
    "chapterId": 9,
    "chapterTitle": "Backtracking & Recursion",
    "topicId": "9.1",
    "topicTitle": "Backtracking & Exhaustive Search"
  },
  {
    "id": 930,
    "title": "Letter Combinations of a Phone Number",
    "url": "https://leetcode.com/problems/letter-combinations-of-a-phone-number",
    "platform": "LeetCode",
    "chapterId": 9,
    "chapterTitle": "Backtracking & Recursion",
    "topicId": "9.1",
    "topicTitle": "Backtracking & Exhaustive Search"
  },
  {
    "id": 931,
    "title": "M-Coloring Problem",
    "url": "https://www.geeksforgeeks.org/problems/m-coloring-problem-1587115620/1",
    "platform": "GeeksforGeeks",
    "chapterId": 9,
    "chapterTitle": "Backtracking & Recursion",
    "topicId": "9.1",
    "topicTitle": "Backtracking & Exhaustive Search"
  },
  {
    "id": 932,
    "title": "Matchsticks to Square",
    "url": "https://leetcode.com/problems/matchsticks-to-square/",
    "platform": "LeetCode",
    "chapterId": 9,
    "chapterTitle": "Backtracking & Recursion",
    "topicId": "9.1",
    "topicTitle": "Backtracking & Exhaustive Search"
  },
  {
    "id": 933,
    "title": "N Queen",
    "url": "https://leetcode.com/problems/n-queen/",
    "platform": "LeetCode",
    "chapterId": 9,
    "chapterTitle": "Backtracking & Recursion",
    "topicId": "9.1",
    "topicTitle": "Backtracking & Exhaustive Search"
  },
  {
    "id": 934,
    "title": "N-Queens II",
    "url": "https://leetcode.com/problems/n-queens-ii/",
    "platform": "LeetCode",
    "chapterId": 9,
    "chapterTitle": "Backtracking & Recursion",
    "topicId": "9.1",
    "topicTitle": "Backtracking & Exhaustive Search"
  },
  {
    "id": 935,
    "title": "Palindrome Partitioning",
    "url": "https://leetcode.com/problems/palindrome-partitioning",
    "platform": "LeetCode",
    "chapterId": 9,
    "chapterTitle": "Backtracking & Recursion",
    "topicId": "9.1",
    "topicTitle": "Backtracking & Exhaustive Search"
  },
  {
    "id": 936,
    "title": "Partition a set into two subsets with minimum absolute sum difference",
    "url": "https://leetcode.com/problems/partition-a-set-into-two-subsets-with-minimum-absolute-sum-difference/",
    "platform": "LeetCode",
    "chapterId": 9,
    "chapterTitle": "Backtracking & Recursion",
    "topicId": "9.1",
    "topicTitle": "Backtracking & Exhaustive Search"
  },
  {
    "id": 937,
    "title": "Partition array to K subsets",
    "url": "https://www.geeksforgeeks.org/problems/partition-array-to-k-subsets/1",
    "platform": "GeeksforGeeks",
    "chapterId": 9,
    "chapterTitle": "Backtracking & Recursion",
    "topicId": "9.1",
    "topicTitle": "Backtracking & Exhaustive Search"
  },
  {
    "id": 938,
    "title": "Partition to K Equal Sum Subsets",
    "url": "https://leetcode.com/problems/partition-to-k-equal-sum-subsets/",
    "platform": "LeetCode",
    "chapterId": 9,
    "chapterTitle": "Backtracking & Recursion",
    "topicId": "9.1",
    "topicTitle": "Backtracking & Exhaustive Search"
  },
  {
    "id": 939,
    "title": "Permutations",
    "url": "https://leetcode.com/problems/permutations",
    "platform": "LeetCode",
    "chapterId": 9,
    "chapterTitle": "Backtracking & Recursion",
    "topicId": "9.1",
    "topicTitle": "Backtracking & Exhaustive Search"
  },
  {
    "id": 940,
    "title": "Permutations in array",
    "url": "https://www.geeksforgeeks.org/problems/permutations-in-array1747/1",
    "platform": "GeeksforGeeks",
    "chapterId": 9,
    "chapterTitle": "Backtracking & Recursion",
    "topicId": "9.1",
    "topicTitle": "Backtracking & Exhaustive Search"
  },
  {
    "id": 941,
    "title": "Printing Solutions N Queen Problem",
    "url": "https://www.geeksforgeeks.org/printing-solutions-n-queen-problem/",
    "platform": "GeeksforGeeks",
    "chapterId": 9,
    "chapterTitle": "Backtracking & Recursion",
    "topicId": "9.1",
    "topicTitle": "Backtracking & Exhaustive Search"
  },
  {
    "id": 942,
    "title": "Rat in a Maze",
    "url": "https://www.geeksforgeeks.org/problems/rat-in-a-maze-problem/1",
    "platform": "GeeksforGeeks",
    "chapterId": 9,
    "chapterTitle": "Backtracking & Recursion",
    "topicId": "9.1",
    "topicTitle": "Backtracking & Exhaustive Search"
  },
  {
    "id": 943,
    "title": "Remove Invalid Parentheses",
    "url": "https://leetcode.com/problems/remove-invalid-parentheses",
    "platform": "LeetCode",
    "chapterId": 9,
    "chapterTitle": "Backtracking & Recursion",
    "topicId": "9.1",
    "topicTitle": "Backtracking & Exhaustive Search"
  },
  {
    "id": 944,
    "title": "Solve the Sudoku",
    "url": "https://www.geeksforgeeks.org/problems/solve-the-sudoku-1587115621/1",
    "platform": "GeeksforGeeks",
    "chapterId": 9,
    "chapterTitle": "Backtracking & Recursion",
    "topicId": "9.1",
    "topicTitle": "Backtracking & Exhaustive Search"
  },
  {
    "id": 945,
    "title": "Solving Cryptarithmetic Puzzles",
    "url": "https://www.geeksforgeeks.org/solving-cryptarithmetic-puzzles/",
    "platform": "GeeksforGeeks",
    "chapterId": 9,
    "chapterTitle": "Backtracking & Recursion",
    "topicId": "9.1",
    "topicTitle": "Backtracking & Exhaustive Search"
  },
  {
    "id": 946,
    "title": "Stack Permutations Check If An Array Is Stack Permutation Of Other",
    "url": "https://www.geeksforgeeks.org/stack-permutations-check-if-an-array-is-stack-permutation-of-other/",
    "platform": "GeeksforGeeks",
    "chapterId": 9,
    "chapterTitle": "Backtracking & Recursion",
    "topicId": "9.1",
    "topicTitle": "Backtracking & Exhaustive Search"
  },
  {
    "id": 947,
    "title": "Subsets",
    "url": "https://leetcode.com/problems/subsets",
    "platform": "LeetCode",
    "chapterId": 9,
    "chapterTitle": "Backtracking & Recursion",
    "topicId": "9.1",
    "topicTitle": "Backtracking & Exhaustive Search"
  },
  {
    "id": 948,
    "title": "Subsets I",
    "url": "https://leetcode.com/problems/subsets-i/",
    "platform": "LeetCode",
    "chapterId": 9,
    "chapterTitle": "Backtracking & Recursion",
    "topicId": "9.1",
    "topicTitle": "Backtracking & Exhaustive Search"
  },
  {
    "id": 949,
    "title": "Sudoku Solver",
    "url": "https://leetcode.com/problems/sudoku-solver",
    "platform": "LeetCode",
    "chapterId": 9,
    "chapterTitle": "Backtracking & Recursion",
    "topicId": "9.1",
    "topicTitle": "Backtracking & Exhaustive Search"
  },
  {
    "id": 950,
    "title": "Sum of All Subsets XOR Total",
    "url": "https://leetcode.com/problems/sum-of-all-subsets-xor-total/",
    "platform": "LeetCode",
    "chapterId": 9,
    "chapterTitle": "Backtracking & Recursion",
    "topicId": "9.1",
    "topicTitle": "Backtracking & Exhaustive Search"
  },
  {
    "id": 951,
    "title": "The Knights Tour Problem Backtracking 1",
    "url": "https://www.geeksforgeeks.org/the-knights-tour-problem-backtracking-1/",
    "platform": "GeeksforGeeks",
    "chapterId": 9,
    "chapterTitle": "Backtracking & Recursion",
    "topicId": "9.1",
    "topicTitle": "Backtracking & Exhaustive Search"
  },
  {
    "id": 952,
    "title": "Tug of War",
    "url": "https://www.geeksforgeeks.org/tug-of-war/",
    "platform": "GeeksforGeeks",
    "chapterId": 9,
    "chapterTitle": "Backtracking & Recursion",
    "topicId": "9.1",
    "topicTitle": "Backtracking & Exhaustive Search"
  },
  {
    "id": 953,
    "title": "Valid Sudoku",
    "url": "https://leetcode.com/problems/valid-sudoku",
    "platform": "LeetCode",
    "chapterId": 9,
    "chapterTitle": "Backtracking & Recursion",
    "topicId": "9.1",
    "topicTitle": "Backtracking & Exhaustive Search"
  },
  {
    "id": 954,
    "title": "Word Search",
    "url": "https://leetcode.com/problems/word-search",
    "platform": "LeetCode",
    "chapterId": 9,
    "chapterTitle": "Backtracking & Recursion",
    "topicId": "9.1",
    "topicTitle": "Backtracking & Exhaustive Search"
  },
  {
    "id": 955,
    "title": "Find All Shortest Unique Prefixes To Represent Each Word In A Given List",
    "url": "https://www.geeksforgeeks.org/find-all-shortest-unique-prefixes-to-represent-each-word-in-a-given-list/",
    "platform": "GeeksforGeeks",
    "chapterId": 10,
    "chapterTitle": "Tries & Advanced Data Structures",
    "topicId": "10.1",
    "topicTitle": "Prefix Trees & Word Dictionaries"
  },
  {
    "id": 956,
    "title": "Implement Trie (Prefix Tree)",
    "url": "https://leetcode.com/problems/implement-trie-prefix-tree",
    "platform": "LeetCode",
    "chapterId": 10,
    "chapterTitle": "Tries & Advanced Data Structures",
    "topicId": "10.1",
    "topicTitle": "Prefix Trees & Word Dictionaries"
  },
  {
    "id": 957,
    "title": "Trie Implementation and Operations",
    "url": "https://leetcode.com/problems/trie-implementation-and-operations/",
    "platform": "LeetCode",
    "chapterId": 10,
    "chapterTitle": "Tries & Advanced Data Structures",
    "topicId": "10.1",
    "topicTitle": "Prefix Trees & Word Dictionaries"
  },
  {
    "id": 958,
    "title": "Trie Insert And Search",
    "url": "https://www.geeksforgeeks.org/trie-insert-and-search/",
    "platform": "GeeksforGeeks",
    "chapterId": 10,
    "chapterTitle": "Tries & Advanced Data Structures",
    "topicId": "10.1",
    "topicTitle": "Prefix Trees & Word Dictionaries"
  },
  {
    "id": 959,
    "title": "Bit PreRequisites for TRIE Problems",
    "url": "https://leetcode.com/problems/bit-prerequisites-for-trie-problems/",
    "platform": "LeetCode",
    "chapterId": 10,
    "chapterTitle": "Tries & Advanced Data Structures",
    "topicId": "10.2",
    "topicTitle": "Bitwise Trie & Maximum XOR"
  },
  {
    "id": 960,
    "title": "Bit Difference",
    "url": "https://www.geeksforgeeks.org/problems/bit-difference-1587115620/1",
    "platform": "GeeksforGeeks",
    "chapterId": 11,
    "chapterTitle": "Bit Manipulation & Math",
    "topicId": "11.1",
    "topicTitle": "Bit Manipulation & Number Theory"
  },
  {
    "id": 961,
    "title": "Bitwise AND of Numbers Range",
    "url": "https://leetcode.com/problems/bitwise-and-of-numbers-range/",
    "platform": "LeetCode",
    "chapterId": 11,
    "chapterTitle": "Bit Manipulation & Math",
    "topicId": "11.1",
    "topicTitle": "Bit Manipulation & Number Theory"
  },
  {
    "id": 962,
    "title": "Calculate Square Of A Number Without Using And Pow",
    "url": "https://www.geeksforgeeks.org/calculate-square-of-a-number-without-using-and-pow/#:~:text=Given%20an%20integer%20n%2C%20calculate,*%2C%20%2F%20and%20pow\\(\\",
    "platform": "GeeksforGeeks",
    "chapterId": 11,
    "chapterTitle": "Bit Manipulation & Math",
    "topicId": "11.1",
    "topicTitle": "Bit Manipulation & Number Theory"
  },
  {
    "id": 963,
    "title": "Check if the i-th bit is Set or Not",
    "url": "https://leetcode.com/problems/check-if-the-i-th-bit-is-set-or-not/",
    "platform": "LeetCode",
    "chapterId": 11,
    "chapterTitle": "Bit Manipulation & Math",
    "topicId": "11.1",
    "topicTitle": "Bit Manipulation & Number Theory"
  },
  {
    "id": 964,
    "title": "Copy Set Bits In A Range",
    "url": "https://www.geeksforgeeks.org/copy-set-bits-in-a-range/",
    "platform": "GeeksforGeeks",
    "chapterId": 11,
    "chapterTitle": "Bit Manipulation & Math",
    "topicId": "11.1",
    "topicTitle": "Bit Manipulation & Number Theory"
  },
  {
    "id": 965,
    "title": "Count set bits",
    "url": "https://www.geeksforgeeks.org/problems/count-total-set-bits-1587115620/1",
    "platform": "GeeksforGeeks",
    "chapterId": 11,
    "chapterTitle": "Bit Manipulation & Math",
    "topicId": "11.1",
    "topicTitle": "Bit Manipulation & Number Theory"
  },
  {
    "id": 966,
    "title": "Counting Bits",
    "url": "https://leetcode.com/problems/counting-bits",
    "platform": "LeetCode",
    "chapterId": 11,
    "chapterTitle": "Bit Manipulation & Math",
    "topicId": "11.1",
    "topicTitle": "Bit Manipulation & Number Theory"
  },
  {
    "id": 967,
    "title": "Divide Two Integers Without Using Multiplication Division Mod Operator",
    "url": "https://www.geeksforgeeks.org/divide-two-integers-without-using-multiplication-division-mod-operator/",
    "platform": "GeeksforGeeks",
    "chapterId": 11,
    "chapterTitle": "Bit Manipulation & Math",
    "topicId": "11.1",
    "topicTitle": "Bit Manipulation & Number Theory"
  },
  {
    "id": 968,
    "title": "Divide two numbers without multiplication and division",
    "url": "https://leetcode.com/problems/divide-two-numbers-without-multiplication-and-division/",
    "platform": "LeetCode",
    "chapterId": 11,
    "chapterTitle": "Bit Manipulation & Math",
    "topicId": "11.1",
    "topicTitle": "Bit Manipulation & Number Theory"
  },
  {
    "id": 969,
    "title": "Divisors of a Number",
    "url": "https://leetcode.com/problems/divisors-of-a-number/",
    "platform": "LeetCode",
    "chapterId": 11,
    "chapterTitle": "Bit Manipulation & Math",
    "topicId": "11.1",
    "topicTitle": "Bit Manipulation & Number Theory"
  },
  {
    "id": 970,
    "title": "Factorial of a given number",
    "url": "https://leetcode.com/problems/factorial-of-a-given-number/",
    "platform": "LeetCode",
    "chapterId": 11,
    "chapterTitle": "Bit Manipulation & Math",
    "topicId": "11.1",
    "topicTitle": "Bit Manipulation & Number Theory"
  },
  {
    "id": 971,
    "title": "Factorial Trailing Zeroes",
    "url": "https://leetcode.com/problems/factorial-trailing-zeroes/",
    "platform": "LeetCode",
    "chapterId": 11,
    "chapterTitle": "Bit Manipulation & Math",
    "topicId": "11.1",
    "topicTitle": "Bit Manipulation & Number Theory"
  },
  {
    "id": 972,
    "title": "Factorials of large numbers",
    "url": "https://www.geeksforgeeks.org/problems/factorials-of-large-numbers2508/1",
    "platform": "GeeksforGeeks",
    "chapterId": 11,
    "chapterTitle": "Bit Manipulation & Math",
    "topicId": "11.1",
    "topicTitle": "Bit Manipulation & Number Theory"
  },
  {
    "id": 973,
    "title": "Fibonacci Number",
    "url": "https://leetcode.com/problems/fibonacci-number/",
    "platform": "LeetCode",
    "chapterId": 11,
    "chapterTitle": "Bit Manipulation & Math",
    "topicId": "11.1",
    "topicTitle": "Bit Manipulation & Number Theory"
  },
  {
    "id": 974,
    "title": "Find position of set bit",
    "url": "https://www.geeksforgeeks.org/problems/find-position-of-set-bit3706/1",
    "platform": "GeeksforGeeks",
    "chapterId": 11,
    "chapterTitle": "Bit Manipulation & Math",
    "topicId": "11.1",
    "topicTitle": "Bit Manipulation & Number Theory"
  },
  {
    "id": 975,
    "title": "Introduction to Bits and Tricks",
    "url": "https://leetcode.com/problems/introduction-to-bits-and-tricks/",
    "platform": "LeetCode",
    "chapterId": 11,
    "chapterTitle": "Bit Manipulation & Math",
    "topicId": "11.1",
    "topicTitle": "Bit Manipulation & Number Theory"
  },
  {
    "id": 976,
    "title": "Max Points on a Line",
    "url": "https://leetcode.com/problems/max-points-on-a-line/",
    "platform": "LeetCode",
    "chapterId": 11,
    "chapterTitle": "Bit Manipulation & Math",
    "topicId": "11.1",
    "topicTitle": "Bit Manipulation & Number Theory"
  },
  {
    "id": 977,
    "title": "Maximum XOR of two numbers in an array",
    "url": "https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/",
    "platform": "LeetCode",
    "chapterId": 11,
    "chapterTitle": "Bit Manipulation & Math",
    "topicId": "11.1",
    "topicTitle": "Bit Manipulation & Number Theory"
  },
  {
    "id": 978,
    "title": "Maximum Xor with an element from an array",
    "url": "https://leetcode.com/problems/maximum-xor-with-an-element-from-an-array/",
    "platform": "LeetCode",
    "chapterId": 11,
    "chapterTitle": "Bit Manipulation & Math",
    "topicId": "11.1",
    "topicTitle": "Bit Manipulation & Number Theory"
  },
  {
    "id": 979,
    "title": "Minimum Bit Flips to Convert Number",
    "url": "https://leetcode.com/problems/minimum-bit-flips-to-convert-number/",
    "platform": "LeetCode",
    "chapterId": 11,
    "chapterTitle": "Bit Manipulation & Math",
    "topicId": "11.1",
    "topicTitle": "Bit Manipulation & Number Theory"
  },
  {
    "id": 980,
    "title": "Number of 1 Bits",
    "url": "https://leetcode.com/problems/number-of-1-bits",
    "platform": "LeetCode",
    "chapterId": 11,
    "chapterTitle": "Bit Manipulation & Math",
    "topicId": "11.1",
    "topicTitle": "Bit Manipulation & Number Theory"
  },
  {
    "id": 981,
    "title": "Palindrome Number",
    "url": "https://leetcode.com/problems/palindrome-number",
    "platform": "LeetCode",
    "chapterId": 11,
    "chapterTitle": "Bit Manipulation & Math",
    "topicId": "11.1",
    "topicTitle": "Bit Manipulation & Number Theory"
  },
  {
    "id": 982,
    "title": "Pow(x,n)",
    "url": "https://leetcode.com/problems/pow/",
    "platform": "LeetCode",
    "chapterId": 11,
    "chapterTitle": "Bit Manipulation & Math",
    "topicId": "11.1",
    "topicTitle": "Bit Manipulation & Number Theory"
  },
  {
    "id": 983,
    "title": "Power of 2",
    "url": "https://www.geeksforgeeks.org/problems/power-of-2-1587115620/1",
    "platform": "GeeksforGeeks",
    "chapterId": 11,
    "chapterTitle": "Bit Manipulation & Math",
    "topicId": "11.1",
    "topicTitle": "Bit Manipulation & Number Theory"
  },
  {
    "id": 984,
    "title": "Power Set",
    "url": "https://www.geeksforgeeks.org/problems/power-set4302/1",
    "platform": "GeeksforGeeks",
    "chapterId": 11,
    "chapterTitle": "Bit Manipulation & Math",
    "topicId": "11.1",
    "topicTitle": "Bit Manipulation & Number Theory"
  },
  {
    "id": 985,
    "title": "Power Set Bit Manipulation",
    "url": "https://leetcode.com/problems/power-set-bit-manipulation/",
    "platform": "LeetCode",
    "chapterId": 11,
    "chapterTitle": "Bit Manipulation & Math",
    "topicId": "11.1",
    "topicTitle": "Bit Manipulation & Number Theory"
  },
  {
    "id": 986,
    "title": "Reverse Bits",
    "url": "https://leetcode.com/problems/reverse-bits",
    "platform": "LeetCode",
    "chapterId": 11,
    "chapterTitle": "Bit Manipulation & Math",
    "topicId": "11.1",
    "topicTitle": "Bit Manipulation & Number Theory"
  },
  {
    "id": 987,
    "title": "Reverse Integer",
    "url": "https://leetcode.com/problems/reverse-integer",
    "platform": "LeetCode",
    "chapterId": 11,
    "chapterTitle": "Bit Manipulation & Math",
    "topicId": "11.1",
    "topicTitle": "Bit Manipulation & Number Theory"
  },
  {
    "id": 988,
    "title": "Set/Unset the rightmost unset bit",
    "url": "https://www.geeksforgeeks.org/problems/set-the-rightmost-unset-bit4436/1",
    "platform": "GeeksforGeeks",
    "chapterId": 11,
    "chapterTitle": "Bit Manipulation & Math",
    "topicId": "11.1",
    "topicTitle": "Bit Manipulation & Number Theory"
  },
  {
    "id": 989,
    "title": "Single Number",
    "url": "https://leetcode.com/problems/single-number",
    "platform": "LeetCode",
    "chapterId": 11,
    "chapterTitle": "Bit Manipulation & Math",
    "topicId": "11.1",
    "topicTitle": "Bit Manipulation & Number Theory"
  },
  {
    "id": 990,
    "title": "XOR of numbers in a given range",
    "url": "https://leetcode.com/problems/xor-of-numbers-in-a-given-range/",
    "platform": "LeetCode",
    "chapterId": 11,
    "chapterTitle": "Bit Manipulation & Math",
    "topicId": "11.1",
    "topicTitle": "Bit Manipulation & Number Theory"
  },
  {
    "id": 991,
    "title": "Assign Cookies",
    "url": "https://leetcode.com/problems/assign-cookies/",
    "platform": "LeetCode",
    "chapterId": 12,
    "chapterTitle": "Greedy Algorithms",
    "topicId": "12.1",
    "topicTitle": "Greedy Algorithms & Optimization"
  },
  {
    "id": 992,
    "title": "Candy",
    "url": "https://leetcode.com/problems/candy/",
    "platform": "LeetCode",
    "chapterId": 12,
    "chapterTitle": "Greedy Algorithms",
    "topicId": "12.1",
    "topicTitle": "Greedy Algorithms & Optimization"
  },
  {
    "id": 993,
    "title": "Gas Station",
    "url": "https://leetcode.com/problems/gas-station",
    "platform": "LeetCode",
    "chapterId": 12,
    "chapterTitle": "Greedy Algorithms",
    "topicId": "12.1",
    "topicTitle": "Greedy Algorithms & Optimization"
  },
  {
    "id": 994,
    "title": "Job Sequencing Problem",
    "url": "https://www.geeksforgeeks.org/problems/job-sequencing-problem-1587115620/1",
    "platform": "GeeksforGeeks",
    "chapterId": 12,
    "chapterTitle": "Greedy Algorithms",
    "topicId": "12.1",
    "topicTitle": "Greedy Algorithms & Optimization"
  },
  {
    "id": 995,
    "title": "Jump Game",
    "url": "https://leetcode.com/problems/jump-game",
    "platform": "LeetCode",
    "chapterId": 12,
    "chapterTitle": "Greedy Algorithms",
    "topicId": "12.1",
    "topicTitle": "Greedy Algorithms & Optimization"
  },
  {
    "id": 996,
    "title": "Jump Game VII",
    "url": "https://leetcode.com/problems/jump-game-vii/",
    "platform": "LeetCode",
    "chapterId": 12,
    "chapterTitle": "Greedy Algorithms",
    "topicId": "12.1",
    "topicTitle": "Greedy Algorithms & Optimization"
  },
  {
    "id": 997,
    "title": "K Centers Problem Set 1 Greedy Approximate Algorithm",
    "url": "https://www.geeksforgeeks.org/k-centers-problem-set-1-greedy-approximate-algorithm/",
    "platform": "GeeksforGeeks",
    "chapterId": 12,
    "chapterTitle": "Greedy Algorithms",
    "topicId": "12.1",
    "topicTitle": "Greedy Algorithms & Optimization"
  },
  {
    "id": 998,
    "title": "Lemonade Change",
    "url": "https://leetcode.com/problems/lemonade-change/",
    "platform": "LeetCode",
    "chapterId": 12,
    "chapterTitle": "Greedy Algorithms",
    "topicId": "12.1",
    "topicTitle": "Greedy Algorithms & Optimization"
  },
  {
    "id": 999,
    "title": "Minimize Max Distance to Gas Station",
    "url": "https://leetcode.com/problems/minimize-max-distance-to-gas-station/",
    "platform": "LeetCode",
    "chapterId": 12,
    "chapterTitle": "Greedy Algorithms",
    "topicId": "12.1",
    "topicTitle": "Greedy Algorithms & Optimization"
  },
  {
    "id": 1000,
    "title": "N meetings in one room",
    "url": "https://www.geeksforgeeks.org/problems/n-meetings-in-one-room-1587115620/1",
    "platform": "GeeksforGeeks",
    "chapterId": 12,
    "chapterTitle": "Greedy Algorithms",
    "topicId": "12.1",
    "topicTitle": "Greedy Algorithms & Optimization"
  },
  {
    "id": 1001,
    "title": "Shop in Candy Store",
    "url": "https://www.geeksforgeeks.org/problems/shop-in-candy-store1145/1",
    "platform": "GeeksforGeeks",
    "chapterId": 12,
    "chapterTitle": "Greedy Algorithms",
    "topicId": "12.1",
    "topicTitle": "Greedy Algorithms & Optimization"
  }
];
