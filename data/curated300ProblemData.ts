export interface CuratedProblemItem {
  id: number;
  title: string;
  url: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  platform: 'LeetCode' | 'GeeksforGeeks' | 'SPOJ' | 'HackerEarth' | 'Other';
  chapterId: number;
  chapterTitle: string;
  topicId: string;
  topicTitle: string;
}

export interface CuratedTopicGroup {
  id: string;
  title: string;
  expectedCount: number;
  problems: CuratedProblemItem[];
}

export interface CuratedChapterGroup {
  id: number;
  title: string;
  icon: string;
  expectedCount: number;
  topics: CuratedTopicGroup[];
}

export const CURATED_300_CHAPTERS: CuratedChapterGroup[] = [
  {
    "id": 1,
    "title": "Arrays & Strings",
    "expectedCount": 84,
    "icon": "📦",
    "topics": [
      {
        "id": "1.1",
        "title": "Two Pointers (Opposite Direction & Convergence)",
        "expectedCount": 10,
        "problems": [
          {
            "id": 1,
            "title": "Two Sum",
            "url": "https://leetcode.com/problems/two-sum",
            "difficulty": "Easy",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays & Strings",
            "topicId": "1.1",
            "topicTitle": "Two Pointers (Opposite Direction & Convergence)"
          },
          {
            "id": 2,
            "title": "Two Sum II - Input Array Is Sorted",
            "url": "https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays & Strings",
            "topicId": "1.1",
            "topicTitle": "Two Pointers (Opposite Direction & Convergence)"
          },
          {
            "id": 3,
            "title": "3Sum",
            "url": "https://leetcode.com/problems/3sum",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays & Strings",
            "topicId": "1.1",
            "topicTitle": "Two Pointers (Opposite Direction & Convergence)"
          },
          {
            "id": 4,
            "title": "3Sum Closest",
            "url": "https://leetcode.com/problems/3sum-closest",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays & Strings",
            "topicId": "1.1",
            "topicTitle": "Two Pointers (Opposite Direction & Convergence)"
          },
          {
            "id": 5,
            "title": "4Sum",
            "url": "https://leetcode.com/problems/4sum/",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays & Strings",
            "topicId": "1.1",
            "topicTitle": "Two Pointers (Opposite Direction & Convergence)"
          },
          {
            "id": 6,
            "title": "Container With Most Water",
            "url": "https://leetcode.com/problems/container-with-most-water",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays & Strings",
            "topicId": "1.1",
            "topicTitle": "Two Pointers (Opposite Direction & Convergence)"
          },
          {
            "id": 7,
            "title": "Trapping Rainwater",
            "url": "https://leetcode.com/problems/trapping-rain-water/",
            "difficulty": "Hard",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays & Strings",
            "topicId": "1.1",
            "topicTitle": "Two Pointers (Opposite Direction & Convergence)"
          },
          {
            "id": 8,
            "title": "Boats to Save People",
            "url": "https://leetcode.com/problems/boats-to-save-people/",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays & Strings",
            "topicId": "1.1",
            "topicTitle": "Two Pointers (Opposite Direction & Convergence)"
          },
          {
            "id": 9,
            "title": "Valid Palindrome",
            "url": "https://leetcode.com/problems/valid-palindrome",
            "difficulty": "Easy",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays & Strings",
            "topicId": "1.1",
            "topicTitle": "Two Pointers (Opposite Direction & Convergence)"
          },
          {
            "id": 10,
            "title": "Reverse Words in a String",
            "url": "https://leetcode.com/problems/reverse-words-in-a-string",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays & Strings",
            "topicId": "1.1",
            "topicTitle": "Two Pointers (Opposite Direction & Convergence)"
          }
        ]
      },
      {
        "id": "1.2",
        "title": "Fast & Slow Pointers (In-place Array Compaction)",
        "expectedCount": 5,
        "problems": [
          {
            "id": 11,
            "title": "Move Zeroes",
            "url": "https://leetcode.com/problems/move-zeroes",
            "difficulty": "Easy",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays & Strings",
            "topicId": "1.2",
            "topicTitle": "Fast & Slow Pointers (In-place Array Compaction)"
          },
          {
            "id": 12,
            "title": "Remove Element",
            "url": "https://leetcode.com/problems/remove-element/",
            "difficulty": "Easy",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays & Strings",
            "topicId": "1.2",
            "topicTitle": "Fast & Slow Pointers (In-place Array Compaction)"
          },
          {
            "id": 13,
            "title": "Find the Duplicate Number",
            "url": "https://leetcode.com/problems/find-the-duplicate-number",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays & Strings",
            "topicId": "1.2",
            "topicTitle": "Fast & Slow Pointers (In-place Array Compaction)"
          },
          {
            "id": 14,
            "title": "Sort Colors / Dutch National Flag",
            "url": "https://leetcode.com/problems/sort-colors",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays & Strings",
            "topicId": "1.2",
            "topicTitle": "Fast & Slow Pointers (In-place Array Compaction)"
          },
          {
            "id": 15,
            "title": "Squares of a Sorted Array",
            "url": "https://leetcode.com/problems/squares-of-a-sorted-array",
            "difficulty": "Easy",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays & Strings",
            "topicId": "1.2",
            "topicTitle": "Fast & Slow Pointers (In-place Array Compaction)"
          }
        ]
      },
      {
        "id": "1.3",
        "title": "Sliding Window (Fixed & Dynamic Size)",
        "expectedCount": 12,
        "problems": [
          {
            "id": 16,
            "title": "Maximum Points You Can Obtain from Cards",
            "url": "https://leetcode.com/problems/maximum-points-you-can-obtain-from-cards",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays & Strings",
            "topicId": "1.3",
            "topicTitle": "Sliding Window (Fixed & Dynamic Size)"
          },
          {
            "id": 17,
            "title": "Longest Substring Without Repeating Characters",
            "url": "https://leetcode.com/problems/longest-substring-without-repeating-characters",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays & Strings",
            "topicId": "1.3",
            "topicTitle": "Sliding Window (Fixed & Dynamic Size)"
          },
          {
            "id": 18,
            "title": "Max Consecutive Ones III",
            "url": "https://leetcode.com/problems/max-consecutive-ones-iii/",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays & Strings",
            "topicId": "1.3",
            "topicTitle": "Sliding Window (Fixed & Dynamic Size)"
          },
          {
            "id": 19,
            "title": "Fruit Into Baskets",
            "url": "https://leetcode.com/problems/fruit-into-baskets/",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays & Strings",
            "topicId": "1.3",
            "topicTitle": "Sliding Window (Fixed & Dynamic Size)"
          },
          {
            "id": 20,
            "title": "Longest Repeating Character Replacement",
            "url": "https://leetcode.com/problems/longest-repeating-character-replacement",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays & Strings",
            "topicId": "1.3",
            "topicTitle": "Sliding Window (Fixed & Dynamic Size)"
          },
          {
            "id": 21,
            "title": "Minimum Size Subarray Sum",
            "url": "https://leetcode.com/problems/minimum-size-subarray-sum/",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays & Strings",
            "topicId": "1.3",
            "topicTitle": "Sliding Window (Fixed & Dynamic Size)"
          },
          {
            "id": 22,
            "title": "Permutation in String",
            "url": "https://leetcode.com/problems/permutation-in-string/",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays & Strings",
            "topicId": "1.3",
            "topicTitle": "Sliding Window (Fixed & Dynamic Size)"
          },
          {
            "id": 23,
            "title": "Find All Anagrams in a String",
            "url": "https://leetcode.com/problems/find-all-anagrams-in-a-string",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays & Strings",
            "topicId": "1.3",
            "topicTitle": "Sliding Window (Fixed & Dynamic Size)"
          },
          {
            "id": 24,
            "title": "Minimum Window Substring",
            "url": "https://leetcode.com/problems/minimum-window-substring",
            "difficulty": "Hard",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays & Strings",
            "topicId": "1.3",
            "topicTitle": "Sliding Window (Fixed & Dynamic Size)"
          },
          {
            "id": 25,
            "title": "Minimum Window Subsequence",
            "url": "https://leetcode.com/problems/minimum-window-subsequence/",
            "difficulty": "Hard",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays & Strings",
            "topicId": "1.3",
            "topicTitle": "Sliding Window (Fixed & Dynamic Size)"
          },
          {
            "id": 26,
            "title": "Smallest Window Containing All Characters",
            "url": "https://www.geeksforgeeks.org/problems/smallest-window-in-a-string-containing-all-the-characters-of-another-string-1587115621/1",
            "difficulty": "Hard",
            "platform": "GeeksforGeeks",
            "chapterId": 1,
            "chapterTitle": "Arrays & Strings",
            "topicId": "1.3",
            "topicTitle": "Sliding Window (Fixed & Dynamic Size)"
          },
          {
            "id": 27,
            "title": "Substring with Concatenation of All Words",
            "url": "https://leetcode.com/problems/substring-with-concatenation-of-all-words/",
            "difficulty": "Hard",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays & Strings",
            "topicId": "1.3",
            "topicTitle": "Sliding Window (Fixed & Dynamic Size)"
          }
        ]
      },
      {
        "id": "1.4",
        "title": "Prefix Sums & Frequency Hashing",
        "expectedCount": 10,
        "problems": [
          {
            "id": 28,
            "title": "Subarray Sum Equals K",
            "url": "https://leetcode.com/problems/subarray-sum-equals-k",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays & Strings",
            "topicId": "1.4",
            "topicTitle": "Prefix Sums & Frequency Hashing"
          },
          {
            "id": 29,
            "title": "Subarray Sums Divisible by K",
            "url": "https://leetcode.com/problems/subarray-sums-divisible-by-k",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays & Strings",
            "topicId": "1.4",
            "topicTitle": "Prefix Sums & Frequency Hashing"
          },
          {
            "id": 30,
            "title": "Largest Subarray with 0 Sum",
            "url": "https://www.geeksforgeeks.org/problems/largest-subarray-with-0-sum/1",
            "difficulty": "Medium",
            "platform": "GeeksforGeeks",
            "chapterId": 1,
            "chapterTitle": "Arrays & Strings",
            "topicId": "1.4",
            "topicTitle": "Prefix Sums & Frequency Hashing"
          },
          {
            "id": 31,
            "title": "Binary Subarrays With Sum",
            "url": "https://leetcode.com/problems/binary-subarrays-with-sum/",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays & Strings",
            "topicId": "1.4",
            "topicTitle": "Prefix Sums & Frequency Hashing"
          },
          {
            "id": 32,
            "title": "Count Number of Nice Subarrays",
            "url": "https://leetcode.com/problems/count-number-of-nice-subarrays/",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays & Strings",
            "topicId": "1.4",
            "topicTitle": "Prefix Sums & Frequency Hashing"
          },
          {
            "id": 33,
            "title": "Number of Substrings Containing All Three Characters",
            "url": "https://leetcode.com/problems/number-of-substrings-containing-all-three-characters/",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays & Strings",
            "topicId": "1.4",
            "topicTitle": "Prefix Sums & Frequency Hashing"
          },
          {
            "id": 34,
            "title": "Product of Array Except Self",
            "url": "https://leetcode.com/problems/product-of-array-except-self",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays & Strings",
            "topicId": "1.4",
            "topicTitle": "Prefix Sums & Frequency Hashing"
          },
          {
            "id": 35,
            "title": "Longest Consecutive Sequence",
            "url": "https://leetcode.com/problems/longest-consecutive-sequence",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays & Strings",
            "topicId": "1.4",
            "topicTitle": "Prefix Sums & Frequency Hashing"
          },
          {
            "id": 36,
            "title": "Continuous Subarray Sum",
            "url": "https://leetcode.com/problems/continuous-subarray-sum/",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays & Strings",
            "topicId": "1.4",
            "topicTitle": "Prefix Sums & Frequency Hashing"
          },
          {
            "id": 37,
            "title": "Sum of Beauty of All Substrings",
            "url": "https://leetcode.com/problems/sum-of-beauty-of-all-substrings/",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays & Strings",
            "topicId": "1.4",
            "topicTitle": "Prefix Sums & Frequency Hashing"
          }
        ]
      },
      {
        "id": "1.5",
        "title": "Array Transformations & State Matrix",
        "expectedCount": 13,
        "problems": [
          {
            "id": 38,
            "title": "Set Matrix Zeroes",
            "url": "https://leetcode.com/problems/remove-duplicates-from-sorted-array",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays & Strings",
            "topicId": "1.5",
            "topicTitle": "Array Transformations & State Matrix"
          },
          {
            "id": 39,
            "title": "Pascal's Triangle I",
            "url": "https://leetcode.com/problems/pascal-s-triangle-i/",
            "difficulty": "Easy",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays & Strings",
            "topicId": "1.5",
            "topicTitle": "Array Transformations & State Matrix"
          },
          {
            "id": 40,
            "title": "Next Permutation",
            "url": "https://leetcode.com/problems/next-permutation",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays & Strings",
            "topicId": "1.5",
            "topicTitle": "Array Transformations & State Matrix"
          },
          {
            "id": 41,
            "title": "Rotate Image / Rotate Matrix by 90 Degrees",
            "url": "https://leetcode.com/problems/rotate-image",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays & Strings",
            "topicId": "1.5",
            "topicTitle": "Array Transformations & State Matrix"
          },
          {
            "id": 42,
            "title": "Spiral Matrix",
            "url": "https://leetcode.com/problems/spiral-matrix",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays & Strings",
            "topicId": "1.5",
            "topicTitle": "Array Transformations & State Matrix"
          },
          {
            "id": 43,
            "title": "Rearrange Array Elements by Sign",
            "url": "https://leetcode.com/problems/rearrange-array-elements-by-sign/",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays & Strings",
            "topicId": "1.5",
            "topicTitle": "Array Transformations & State Matrix"
          },
          {
            "id": 44,
            "title": "First Missing Positive",
            "url": "https://leetcode.com/problems/first-missing-positive",
            "difficulty": "Hard",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays & Strings",
            "topicId": "1.5",
            "topicTitle": "Array Transformations & State Matrix"
          },
          {
            "id": 45,
            "title": "Game of Life",
            "url": "https://leetcode.com/problems/game-of-life",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays & Strings",
            "topicId": "1.5",
            "topicTitle": "Array Transformations & State Matrix"
          },
          {
            "id": 46,
            "title": "Leaders in an Array",
            "url": "https://www.geeksforgeeks.org/problems/leaders-in-an-array-1587115620/1",
            "difficulty": "Easy",
            "platform": "GeeksforGeeks",
            "chapterId": 1,
            "chapterTitle": "Arrays & Strings",
            "topicId": "1.5",
            "topicTitle": "Array Transformations & State Matrix"
          },
          {
            "id": 47,
            "title": "Maximum Subarray / Kadane's Algorithm",
            "url": "https://leetcode.com/problems/maximum-subarray",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays & Strings",
            "topicId": "1.5",
            "topicTitle": "Array Transformations & State Matrix"
          },
          {
            "id": 48,
            "title": "Maximum Product Subarray",
            "url": "https://leetcode.com/problems/maximum-product-subarray",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays & Strings",
            "topicId": "1.5",
            "topicTitle": "Array Transformations & State Matrix"
          },
          {
            "id": 49,
            "title": "Majority Element (> N/2)",
            "url": "https://leetcode.com/problems/majority-element",
            "difficulty": "Easy",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays & Strings",
            "topicId": "1.5",
            "topicTitle": "Array Transformations & State Matrix"
          },
          {
            "id": 50,
            "title": "Majority Element (> N/3)",
            "url": "https://leetcode.com/problems/majority-element",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays & Strings",
            "topicId": "1.5",
            "topicTitle": "Array Transformations & State Matrix"
          }
        ]
      },
      {
        "id": "1.6",
        "title": "Intervals & Sweep-Line",
        "expectedCount": 10,
        "problems": [
          {
            "id": 51,
            "title": "Merge Intervals",
            "url": "https://leetcode.com/problems/merge-intervals",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays & Strings",
            "topicId": "1.6",
            "topicTitle": "Intervals & Sweep-Line"
          },
          {
            "id": 52,
            "title": "Insert Interval",
            "url": "https://leetcode.com/problems/insert-interval",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays & Strings",
            "topicId": "1.6",
            "topicTitle": "Intervals & Sweep-Line"
          },
          {
            "id": 53,
            "title": "Non-overlapping Intervals",
            "url": "https://leetcode.com/problems/non-overlapping-intervals",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays & Strings",
            "topicId": "1.6",
            "topicTitle": "Intervals & Sweep-Line"
          },
          {
            "id": 54,
            "title": "Meeting Rooms",
            "url": "https://leetcode.com/problems/meeting-rooms",
            "difficulty": "Easy",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays & Strings",
            "topicId": "1.6",
            "topicTitle": "Intervals & Sweep-Line"
          },
          {
            "id": 55,
            "title": "Meeting Rooms II",
            "url": "https://leetcode.com/problems/meeting-rooms-ii",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays & Strings",
            "topicId": "1.6",
            "topicTitle": "Intervals & Sweep-Line"
          },
          {
            "id": 56,
            "title": "Minimum Number of Arrows to Burst Balloons",
            "url": "https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays & Strings",
            "topicId": "1.6",
            "topicTitle": "Intervals & Sweep-Line"
          },
          {
            "id": 57,
            "title": "Car Pooling",
            "url": "https://leetcode.com/problems/car-pooling/",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays & Strings",
            "topicId": "1.6",
            "topicTitle": "Intervals & Sweep-Line"
          },
          {
            "id": 58,
            "title": "Minimum Platforms Required for Railway",
            "url": "https://www.geeksforgeeks.org/problems/minimum-platforms-1587115620/1",
            "difficulty": "Medium",
            "platform": "GeeksforGeeks",
            "chapterId": 1,
            "chapterTitle": "Arrays & Strings",
            "topicId": "1.6",
            "topicTitle": "Intervals & Sweep-Line"
          },
          {
            "id": 59,
            "title": "N Meetings in One Room",
            "url": "https://www.geeksforgeeks.org/problems/n-meetings-in-one-room-1587115620/1",
            "difficulty": "Easy",
            "platform": "GeeksforGeeks",
            "chapterId": 1,
            "chapterTitle": "Arrays & Strings",
            "topicId": "1.6",
            "topicTitle": "Intervals & Sweep-Line"
          },
          {
            "id": 60,
            "title": "Job Sequencing Problem",
            "url": "https://www.geeksforgeeks.org/problems/job-sequencing-problem-1587115620/1",
            "difficulty": "Medium",
            "platform": "GeeksforGeeks",
            "chapterId": 1,
            "chapterTitle": "Arrays & Strings",
            "topicId": "1.6",
            "topicTitle": "Intervals & Sweep-Line"
          }
        ]
      },
      {
        "id": "1.7",
        "title": "Binary Search (Index & Monotonic Functions)",
        "expectedCount": 12,
        "problems": [
          {
            "id": 61,
            "title": "Binary Search",
            "url": "https://leetcode.com/problems/binary-search",
            "difficulty": "Easy",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays & Strings",
            "topicId": "1.7",
            "topicTitle": "Binary Search (Index & Monotonic Functions)"
          },
          {
            "id": 62,
            "title": "Lower Bound / Upper Bound",
            "url": "https://leetcode.com/problems/lower-bound/",
            "difficulty": "Easy",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays & Strings",
            "topicId": "1.7",
            "topicTitle": "Binary Search (Index & Monotonic Functions)"
          },
          {
            "id": 63,
            "title": "Search Insert Position",
            "url": "https://leetcode.com/problems/search-insert-position/",
            "difficulty": "Easy",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays & Strings",
            "topicId": "1.7",
            "topicTitle": "Binary Search (Index & Monotonic Functions)"
          },
          {
            "id": 64,
            "title": "Floor and Ceil in Sorted Array",
            "url": "https://leetcode.com/problems/floor-and-ceil-in-sorted-array/",
            "difficulty": "Easy",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays & Strings",
            "topicId": "1.7",
            "topicTitle": "Binary Search (Index & Monotonic Functions)"
          },
          {
            "id": 65,
            "title": "Find First and Last Position of Element in Sorted Array",
            "url": "https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays & Strings",
            "topicId": "1.7",
            "topicTitle": "Binary Search (Index & Monotonic Functions)"
          },
          {
            "id": 66,
            "title": "Search in Rotated Sorted Array",
            "url": "https://leetcode.com/problems/search-in-rotated-sorted-array",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays & Strings",
            "topicId": "1.7",
            "topicTitle": "Binary Search (Index & Monotonic Functions)"
          },
          {
            "id": 67,
            "title": "Search in Rotated Sorted Array II",
            "url": "https://leetcode.com/problems/search-in-rotated-sorted-array-ii/",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays & Strings",
            "topicId": "1.7",
            "topicTitle": "Binary Search (Index & Monotonic Functions)"
          },
          {
            "id": 68,
            "title": "Find Minimum in Rotated Sorted Array",
            "url": "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays & Strings",
            "topicId": "1.7",
            "topicTitle": "Binary Search (Index & Monotonic Functions)"
          },
          {
            "id": 69,
            "title": "Single Element in a Sorted Array",
            "url": "https://leetcode.com/problems/single-element-in-a-sorted-array/",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays & Strings",
            "topicId": "1.7",
            "topicTitle": "Binary Search (Index & Monotonic Functions)"
          },
          {
            "id": 70,
            "title": "Find Peak Element",
            "url": "https://www.geeksforgeeks.org/make-array-elements-equal-minimum-cost/",
            "difficulty": "Medium",
            "platform": "GeeksforGeeks",
            "chapterId": 1,
            "chapterTitle": "Arrays & Strings",
            "topicId": "1.7",
            "topicTitle": "Binary Search (Index & Monotonic Functions)"
          },
          {
            "id": 71,
            "title": "Search a 2D Matrix",
            "url": "https://leetcode.com/problems/search-a-2d-matrix",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays & Strings",
            "topicId": "1.7",
            "topicTitle": "Binary Search (Index & Monotonic Functions)"
          },
          {
            "id": 72,
            "title": "Search a 2D Matrix II",
            "url": "https://leetcode.com/problems/search-a-2d-matrix-ii/",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays & Strings",
            "topicId": "1.7",
            "topicTitle": "Binary Search (Index & Monotonic Functions)"
          }
        ]
      },
      {
        "id": "1.8",
        "title": "Binary Search on Answer Space (Predicate(Mid) == True)",
        "expectedCount": 12,
        "problems": [
          {
            "id": 73,
            "title": "Find Square Root of a Number",
            "url": "https://leetcode.com/problems/sqrtx/",
            "difficulty": "Easy",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays & Strings",
            "topicId": "1.8",
            "topicTitle": "Binary Search on Answer Space (Predicate(Mid) == True)"
          },
          {
            "id": 74,
            "title": "Find Nth Root of a Number",
            "url": "https://www.geeksforgeeks.org/problems/find-nth-root-of-m5843/1",
            "difficulty": "Medium",
            "platform": "GeeksforGeeks",
            "chapterId": 1,
            "chapterTitle": "Arrays & Strings",
            "topicId": "1.8",
            "topicTitle": "Binary Search on Answer Space (Predicate(Mid) == True)"
          },
          {
            "id": 75,
            "title": "Koko Eating Bananas",
            "url": "https://leetcode.com/problems/koko-eating-bananas/",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays & Strings",
            "topicId": "1.8",
            "topicTitle": "Binary Search on Answer Space (Predicate(Mid) == True)"
          },
          {
            "id": 76,
            "title": "Minimum Days to Make M Bouquets",
            "url": "https://leetcode.com/problems/minimum-days-to-make-m-bouquets/",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays & Strings",
            "topicId": "1.8",
            "topicTitle": "Binary Search on Answer Space (Predicate(Mid) == True)"
          },
          {
            "id": 77,
            "title": "Find the Smallest Divisor",
            "url": "https://leetcode.com/problems/find-the-smallest-divisor/",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays & Strings",
            "topicId": "1.8",
            "topicTitle": "Binary Search on Answer Space (Predicate(Mid) == True)"
          },
          {
            "id": 78,
            "title": "Capacity to Ship Packages Within D Days",
            "url": "https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays & Strings",
            "topicId": "1.8",
            "topicTitle": "Binary Search on Answer Space (Predicate(Mid) == True)"
          },
          {
            "id": 79,
            "title": "Aggressive Cows",
            "url": "https://leetcode.com/problems/aggressive-cows/",
            "difficulty": "Hard",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays & Strings",
            "topicId": "1.8",
            "topicTitle": "Binary Search on Answer Space (Predicate(Mid) == True)"
          },
          {
            "id": 80,
            "title": "Book Allocation Problem / Allocate Minimum Pages",
            "url": "https://www.geeksforgeeks.org/problems/allocate-minimum-number-of-pages0937/1",
            "difficulty": "Hard",
            "platform": "GeeksforGeeks",
            "chapterId": 1,
            "chapterTitle": "Arrays & Strings",
            "topicId": "1.8",
            "topicTitle": "Binary Search on Answer Space (Predicate(Mid) == True)"
          },
          {
            "id": 81,
            "title": "Split Array Largest Sum",
            "url": "https://leetcode.com/problems/split-array-largest-sum",
            "difficulty": "Hard",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays & Strings",
            "topicId": "1.8",
            "topicTitle": "Binary Search on Answer Space (Predicate(Mid) == True)"
          },
          {
            "id": 82,
            "title": "Painter's Partition",
            "url": "https://leetcode.com/problems/painter-s-partition/",
            "difficulty": "Hard",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays & Strings",
            "topicId": "1.8",
            "topicTitle": "Binary Search on Answer Space (Predicate(Mid) == True)"
          },
          {
            "id": 83,
            "title": "Median of Two Sorted Arrays",
            "url": "https://leetcode.com/problems/median-of-two-sorted-arrays",
            "difficulty": "Hard",
            "platform": "LeetCode",
            "chapterId": 1,
            "chapterTitle": "Arrays & Strings",
            "topicId": "1.8",
            "topicTitle": "Binary Search on Answer Space (Predicate(Mid) == True)"
          },
          {
            "id": 84,
            "title": "K-th Element of Two Sorted Arrays",
            "url": "https://www.geeksforgeeks.org/problems/k-th-element-of-two-sorted-arrays1317/1",
            "difficulty": "Medium",
            "platform": "GeeksforGeeks",
            "chapterId": 1,
            "chapterTitle": "Arrays & Strings",
            "topicId": "1.8",
            "topicTitle": "Binary Search on Answer Space (Predicate(Mid) == True)"
          }
        ]
      }
    ]
  },
  {
    "id": 2,
    "title": "Linked Lists",
    "expectedCount": 23,
    "icon": "🔗",
    "topics": [
      {
        "id": "2.1",
        "title": "In-place Pointer Reversal",
        "expectedCount": 6,
        "problems": [
          {
            "id": 85,
            "title": "Reverse Linked List",
            "url": "https://leetcode.com/problems/reverse-linked-list",
            "difficulty": "Easy",
            "platform": "LeetCode",
            "chapterId": 2,
            "chapterTitle": "Linked Lists",
            "topicId": "2.1",
            "topicTitle": "In-place Pointer Reversal"
          },
          {
            "id": 86,
            "title": "Reverse Linked List II",
            "url": "https://leetcode.com/problems/reverse-linked-list-ii",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 2,
            "chapterTitle": "Linked Lists",
            "topicId": "2.1",
            "topicTitle": "In-place Pointer Reversal"
          },
          {
            "id": 87,
            "title": "Reverse Nodes in k-Group",
            "url": "https://leetcode.com/problems/reverse-nodes-in-k-group",
            "difficulty": "Hard",
            "platform": "LeetCode",
            "chapterId": 2,
            "chapterTitle": "Linked Lists",
            "topicId": "2.1",
            "topicTitle": "In-place Pointer Reversal"
          },
          {
            "id": 88,
            "title": "Rotate List",
            "url": "https://leetcode.com/problems/rotate-list",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 2,
            "chapterTitle": "Linked Lists",
            "topicId": "2.1",
            "topicTitle": "In-place Pointer Reversal"
          },
          {
            "id": 89,
            "title": "Swap Nodes in Pairs",
            "url": "https://leetcode.com/problems/swap-nodes-in-pairs",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 2,
            "chapterTitle": "Linked Lists",
            "topicId": "2.1",
            "topicTitle": "In-place Pointer Reversal"
          },
          {
            "id": 90,
            "title": "Palindrome Linked List",
            "url": "https://leetcode.com/problems/palindrome-linked-list",
            "difficulty": "Easy",
            "platform": "LeetCode",
            "chapterId": 2,
            "chapterTitle": "Linked Lists",
            "topicId": "2.1",
            "topicTitle": "In-place Pointer Reversal"
          }
        ]
      },
      {
        "id": "2.2",
        "title": "Fast & Slow Pointers (Floyd’s Cycle Finding)",
        "expectedCount": 5,
        "problems": [
          {
            "id": 91,
            "title": "Middle of the Linked List",
            "url": "https://leetcode.com/problems/middle-of-the-linked-list",
            "difficulty": "Easy",
            "platform": "LeetCode",
            "chapterId": 2,
            "chapterTitle": "Linked Lists",
            "topicId": "2.2",
            "topicTitle": "Fast & Slow Pointers (Floyd’s Cycle Finding)"
          },
          {
            "id": 92,
            "title": "Detect a Loop in Linked List",
            "url": "https://leetcode.com/problems/detect-a-loop-in-linked-list/",
            "difficulty": "Easy",
            "platform": "LeetCode",
            "chapterId": 2,
            "chapterTitle": "Linked Lists",
            "topicId": "2.2",
            "topicTitle": "Fast & Slow Pointers (Floyd’s Cycle Finding)"
          },
          {
            "id": 93,
            "title": "Find Starting Point of Loop in Linked List",
            "url": "https://leetcode.com/problems/find-starting-point-of-loop-in-linked-list/",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 2,
            "chapterTitle": "Linked Lists",
            "topicId": "2.2",
            "topicTitle": "Fast & Slow Pointers (Floyd’s Cycle Finding)"
          },
          {
            "id": 94,
            "title": "Length of Loop in Linked List",
            "url": "https://leetcode.com/problems/length-of-loop-in-linked-list/",
            "difficulty": "Easy",
            "platform": "LeetCode",
            "chapterId": 2,
            "chapterTitle": "Linked Lists",
            "topicId": "2.2",
            "topicTitle": "Fast & Slow Pointers (Floyd’s Cycle Finding)"
          },
          {
            "id": 95,
            "title": "Reorder List",
            "url": "https://leetcode.com/problems/reorder-list",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 2,
            "chapterTitle": "Linked Lists",
            "topicId": "2.2",
            "topicTitle": "Fast & Slow Pointers (Floyd’s Cycle Finding)"
          }
        ]
      },
      {
        "id": "2.3",
        "title": "Node Splicing & Multi-Pointer Reorganization",
        "expectedCount": 12,
        "problems": [
          {
            "id": 96,
            "title": "Remove Nth Node from End of List",
            "url": "https://leetcode.com/problems/remove-nth-node-from-end-of-list",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 2,
            "chapterTitle": "Linked Lists",
            "topicId": "2.3",
            "topicTitle": "Node Splicing & Multi-Pointer Reorganization"
          },
          {
            "id": 97,
            "title": "Delete the Middle Node of Linked List",
            "url": "https://leetcode.com/problems/delete-the-middle-node-of-a-linked-list/",
            "difficulty": "Easy",
            "platform": "LeetCode",
            "chapterId": 2,
            "chapterTitle": "Linked Lists",
            "topicId": "2.3",
            "topicTitle": "Node Splicing & Multi-Pointer Reorganization"
          },
          {
            "id": 98,
            "title": "Segregate Odd and Even Nodes in Linked List",
            "url": "https://leetcode.com/problems/segregate-odd-and-even-nodes-in-linked-list/",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 2,
            "chapterTitle": "Linked Lists",
            "topicId": "2.3",
            "topicTitle": "Node Splicing & Multi-Pointer Reorganization"
          },
          {
            "id": 99,
            "title": "Sort a Linked List (Merge Sort on LL)",
            "url": "https://leetcode.com/problems/sort-list/",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 2,
            "chapterTitle": "Linked Lists",
            "topicId": "2.3",
            "topicTitle": "Node Splicing & Multi-Pointer Reorganization"
          },
          {
            "id": 100,
            "title": "Sort a Linked List of 0s, 1s, and 2s",
            "url": "https://leetcode.com/problems/sort-a-linked-list-of-0s-1s-and-2s/",
            "difficulty": "Easy",
            "platform": "LeetCode",
            "chapterId": 2,
            "chapterTitle": "Linked Lists",
            "topicId": "2.3",
            "topicTitle": "Node Splicing & Multi-Pointer Reorganization"
          },
          {
            "id": 101,
            "title": "Find Intersection Point of Y Linked Lists",
            "url": "https://leetcode.com/problems/intersection-of-two-linked-lists/",
            "difficulty": "Easy",
            "platform": "LeetCode",
            "chapterId": 2,
            "chapterTitle": "Linked Lists",
            "topicId": "2.3",
            "topicTitle": "Node Splicing & Multi-Pointer Reorganization"
          },
          {
            "id": 102,
            "title": "Add 1 to a Number Represented as Linked List",
            "url": "https://leetcode.com/problems/add-1-to-a-number-represented-as-linked-list/",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 2,
            "chapterTitle": "Linked Lists",
            "topicId": "2.3",
            "topicTitle": "Node Splicing & Multi-Pointer Reorganization"
          },
          {
            "id": 103,
            "title": "Add Two Numbers",
            "url": "https://leetcode.com/problems/add-two-numbers",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 2,
            "chapterTitle": "Linked Lists",
            "topicId": "2.3",
            "topicTitle": "Node Splicing & Multi-Pointer Reorganization"
          },
          {
            "id": 104,
            "title": "Flattening of a Linked List",
            "url": "https://leetcode.com/problems/flattening-of-a-linked-list/",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 2,
            "chapterTitle": "Linked Lists",
            "topicId": "2.3",
            "topicTitle": "Node Splicing & Multi-Pointer Reorganization"
          },
          {
            "id": 105,
            "title": "Flatten a Multilevel Doubly Linked List",
            "url": "https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 2,
            "chapterTitle": "Linked Lists",
            "topicId": "2.3",
            "topicTitle": "Node Splicing & Multi-Pointer Reorganization"
          },
          {
            "id": 106,
            "title": "Copy List with Random Pointer",
            "url": "https://leetcode.com/problems/copy-list-with-random-pointer",
            "difficulty": "Hard",
            "platform": "LeetCode",
            "chapterId": 2,
            "chapterTitle": "Linked Lists",
            "topicId": "2.3",
            "topicTitle": "Node Splicing & Multi-Pointer Reorganization"
          },
          {
            "id": 107,
            "title": "Merge k Sorted Lists",
            "url": "https://leetcode.com/problems/merge-k-sorted-lists",
            "difficulty": "Hard",
            "platform": "LeetCode",
            "chapterId": 2,
            "chapterTitle": "Linked Lists",
            "topicId": "2.3",
            "topicTitle": "Node Splicing & Multi-Pointer Reorganization"
          }
        ]
      }
    ]
  },
  {
    "id": 3,
    "title": "Stacks & Queues",
    "expectedCount": 34,
    "icon": "📚",
    "topics": [
      {
        "id": "3.1",
        "title": "Monotonic Stack (Next/Previous Greater/Smaller)",
        "expectedCount": 12,
        "problems": [
          {
            "id": 108,
            "title": "Next Greater Element I",
            "url": "https://leetcode.com/problems/next-greater-element-i",
            "difficulty": "Easy",
            "platform": "LeetCode",
            "chapterId": 3,
            "chapterTitle": "Stacks & Queues",
            "topicId": "3.1",
            "topicTitle": "Monotonic Stack (Next/Previous Greater/Smaller)"
          },
          {
            "id": 109,
            "title": "Next Greater Element II",
            "url": "https://leetcode.com/problems/next-greater-element-ii/",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 3,
            "chapterTitle": "Stacks & Queues",
            "topicId": "3.1",
            "topicTitle": "Monotonic Stack (Next/Previous Greater/Smaller)"
          },
          {
            "id": 110,
            "title": "Next Smaller Element",
            "url": "https://www.geeksforgeeks.org/next-smaller-element/",
            "difficulty": "Medium",
            "platform": "GeeksforGeeks",
            "chapterId": 3,
            "chapterTitle": "Stacks & Queues",
            "topicId": "3.1",
            "topicTitle": "Monotonic Stack (Next/Previous Greater/Smaller)"
          },
          {
            "id": 111,
            "title": "Daily Temperatures",
            "url": "https://leetcode.com/problems/daily-temperatures",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 3,
            "chapterTitle": "Stacks & Queues",
            "topicId": "3.1",
            "topicTitle": "Monotonic Stack (Next/Previous Greater/Smaller)"
          },
          {
            "id": 112,
            "title": "Online Stock Span",
            "url": "https://leetcode.com/problems/online-stock-span",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 3,
            "chapterTitle": "Stacks & Queues",
            "topicId": "3.1",
            "topicTitle": "Monotonic Stack (Next/Previous Greater/Smaller)"
          },
          {
            "id": 113,
            "title": "Sum of Subarray Minimums",
            "url": "https://leetcode.com/problems/sum-of-subarray-minimums",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 3,
            "chapterTitle": "Stacks & Queues",
            "topicId": "3.1",
            "topicTitle": "Monotonic Stack (Next/Previous Greater/Smaller)"
          },
          {
            "id": 114,
            "title": "Sum of Subarray Ranges",
            "url": "https://leetcode.com/problems/sum-of-subarray-ranges/",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 3,
            "chapterTitle": "Stacks & Queues",
            "topicId": "3.1",
            "topicTitle": "Monotonic Stack (Next/Previous Greater/Smaller)"
          },
          {
            "id": 115,
            "title": "Largest Rectangle in Histogram",
            "url": "https://leetcode.com/problems/largest-rectangle-in-histogram",
            "difficulty": "Hard",
            "platform": "LeetCode",
            "chapterId": 3,
            "chapterTitle": "Stacks & Queues",
            "topicId": "3.1",
            "topicTitle": "Monotonic Stack (Next/Previous Greater/Smaller)"
          },
          {
            "id": 116,
            "title": "Maximal Rectangle / Max Rectangle with all 1s",
            "url": "https://leetcode.com/problems/maximal-rectangle",
            "difficulty": "Hard",
            "platform": "LeetCode",
            "chapterId": 3,
            "chapterTitle": "Stacks & Queues",
            "topicId": "3.1",
            "topicTitle": "Monotonic Stack (Next/Previous Greater/Smaller)"
          },
          {
            "id": 117,
            "title": "Remove K Digits",
            "url": "https://leetcode.com/problems/remove-k-digits",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 3,
            "chapterTitle": "Stacks & Queues",
            "topicId": "3.1",
            "topicTitle": "Monotonic Stack (Next/Previous Greater/Smaller)"
          },
          {
            "id": 118,
            "title": "Asteroid Collision",
            "url": "https://leetcode.com/problems/asteroid-collision",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 3,
            "chapterTitle": "Stacks & Queues",
            "topicId": "3.1",
            "topicTitle": "Monotonic Stack (Next/Previous Greater/Smaller)"
          },
          {
            "id": 119,
            "title": "132 Pattern",
            "url": "https://leetcode.com/problems/132-pattern/",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 3,
            "chapterTitle": "Stacks & Queues",
            "topicId": "3.1",
            "topicTitle": "Monotonic Stack (Next/Previous Greater/Smaller)"
          }
        ]
      },
      {
        "id": "3.2",
        "title": "Monotonic Queue / Deque",
        "expectedCount": 4,
        "problems": [
          {
            "id": 120,
            "title": "Sliding Window Maximum",
            "url": "https://leetcode.com/problems/sliding-window-maximum",
            "difficulty": "Hard",
            "platform": "LeetCode",
            "chapterId": 3,
            "chapterTitle": "Stacks & Queues",
            "topicId": "3.2",
            "topicTitle": "Monotonic Queue / Deque"
          },
          {
            "id": 121,
            "title": "Constrained Subsequence Sum",
            "url": "https://leetcode.com/problems/constrained-subsequence-sum/",
            "difficulty": "Hard",
            "platform": "LeetCode",
            "chapterId": 3,
            "chapterTitle": "Stacks & Queues",
            "topicId": "3.2",
            "topicTitle": "Monotonic Queue / Deque"
          },
          {
            "id": 122,
            "title": "Shortest Subarray with Sum at Least K",
            "url": "https://leetcode.com/problems/shortest-subarray-with-sum-at-least-k/",
            "difficulty": "Hard",
            "platform": "LeetCode",
            "chapterId": 3,
            "chapterTitle": "Stacks & Queues",
            "topicId": "3.2",
            "topicTitle": "Monotonic Queue / Deque"
          },
          {
            "id": 123,
            "title": "Max Value of Equation",
            "url": "https://leetcode.com/problems/max-value-of-equation",
            "difficulty": "Hard",
            "platform": "LeetCode",
            "chapterId": 3,
            "chapterTitle": "Stacks & Queues",
            "topicId": "3.2",
            "topicTitle": "Monotonic Queue / Deque"
          }
        ]
      },
      {
        "id": "3.3",
        "title": "Parsing, Evaluation & State Buffers",
        "expectedCount": 9,
        "problems": [
          {
            "id": 124,
            "title": "Valid Parentheses",
            "url": "https://leetcode.com/problems/valid-parentheses",
            "difficulty": "Easy",
            "platform": "LeetCode",
            "chapterId": 3,
            "chapterTitle": "Stacks & Queues",
            "topicId": "3.3",
            "topicTitle": "Parsing, Evaluation & State Buffers"
          },
          {
            "id": 125,
            "title": "Minimum Add to Make Parentheses Valid",
            "url": "https://leetcode.com/problems/minimum-add-to-make-parentheses-valid/",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 3,
            "chapterTitle": "Stacks & Queues",
            "topicId": "3.3",
            "topicTitle": "Parsing, Evaluation & State Buffers"
          },
          {
            "id": 126,
            "title": "Remove Outermost Parentheses",
            "url": "https://leetcode.com/problems/remove-outermost-parentheses/",
            "difficulty": "Easy",
            "platform": "LeetCode",
            "chapterId": 3,
            "chapterTitle": "Stacks & Queues",
            "topicId": "3.3",
            "topicTitle": "Parsing, Evaluation & State Buffers"
          },
          {
            "id": 127,
            "title": "Evaluate Reverse Polish Notation",
            "url": "https://leetcode.com/problems/evaluate-reverse-polish-notation",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 3,
            "chapterTitle": "Stacks & Queues",
            "topicId": "3.3",
            "topicTitle": "Parsing, Evaluation & State Buffers"
          },
          {
            "id": 128,
            "title": "Basic Calculator",
            "url": "https://leetcode.com/problems/basic-calculator",
            "difficulty": "Hard",
            "platform": "LeetCode",
            "chapterId": 3,
            "chapterTitle": "Stacks & Queues",
            "topicId": "3.3",
            "topicTitle": "Parsing, Evaluation & State Buffers"
          },
          {
            "id": 129,
            "title": "Basic Calculator II",
            "url": "https://leetcode.com/problems/basic-calculator-ii",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 3,
            "chapterTitle": "Stacks & Queues",
            "topicId": "3.3",
            "topicTitle": "Parsing, Evaluation & State Buffers"
          },
          {
            "id": 130,
            "title": "Decode String",
            "url": "https://leetcode.com/problems/decode-string",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 3,
            "chapterTitle": "Stacks & Queues",
            "topicId": "3.3",
            "topicTitle": "Parsing, Evaluation & State Buffers"
          },
          {
            "id": 131,
            "title": "Simplify Path",
            "url": "https://leetcode.com/problems/simplify-path",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 3,
            "chapterTitle": "Stacks & Queues",
            "topicId": "3.3",
            "topicTitle": "Parsing, Evaluation & State Buffers"
          },
          {
            "id": 132,
            "title": "Minimum Remove to Make Valid Parentheses",
            "url": "https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 3,
            "chapterTitle": "Stacks & Queues",
            "topicId": "3.3",
            "topicTitle": "Parsing, Evaluation & State Buffers"
          }
        ]
      },
      {
        "id": "3.4",
        "title": "Specialized Abstract Data Structure Design",
        "expectedCount": 9,
        "problems": [
          {
            "id": 133,
            "title": "Min Stack",
            "url": "https://leetcode.com/problems/min-stack",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 3,
            "chapterTitle": "Stacks & Queues",
            "topicId": "3.4",
            "topicTitle": "Specialized Abstract Data Structure Design"
          },
          {
            "id": 134,
            "title": "Stack with Find Middle Operation",
            "url": "https://leetcode.com/problems/stack-with-find-middle-operation/",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 3,
            "chapterTitle": "Stacks & Queues",
            "topicId": "3.4",
            "topicTitle": "Specialized Abstract Data Structure Design"
          },
          {
            "id": 135,
            "title": "Implement Stack using Queues",
            "url": "https://leetcode.com/problems/implement-stack-using-queues",
            "difficulty": "Easy",
            "platform": "LeetCode",
            "chapterId": 3,
            "chapterTitle": "Stacks & Queues",
            "topicId": "3.4",
            "topicTitle": "Specialized Abstract Data Structure Design"
          },
          {
            "id": 136,
            "title": "Implement Queue using Stacks",
            "url": "https://leetcode.com/problems/implement-queue-using-stacks",
            "difficulty": "Easy",
            "platform": "LeetCode",
            "chapterId": 3,
            "chapterTitle": "Stacks & Queues",
            "topicId": "3.4",
            "topicTitle": "Specialized Abstract Data Structure Design"
          },
          {
            "id": 137,
            "title": "Design Circular Queue",
            "url": "https://leetcode.com/problems/design-circular-queue/",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 3,
            "chapterTitle": "Stacks & Queues",
            "topicId": "3.4",
            "topicTitle": "Specialized Abstract Data Structure Design"
          },
          {
            "id": 138,
            "title": "LRU Cache",
            "url": "https://leetcode.com/problems/lru-cache",
            "difficulty": "Hard",
            "platform": "LeetCode",
            "chapterId": 3,
            "chapterTitle": "Stacks & Queues",
            "topicId": "3.4",
            "topicTitle": "Specialized Abstract Data Structure Design"
          },
          {
            "id": 139,
            "title": "LFU Cache",
            "url": "https://leetcode.com/problems/lfu-cache/",
            "difficulty": "Hard",
            "platform": "LeetCode",
            "chapterId": 3,
            "chapterTitle": "Stacks & Queues",
            "topicId": "3.4",
            "topicTitle": "Specialized Abstract Data Structure Design"
          },
          {
            "id": 140,
            "title": "Maximum Frequency Stack",
            "url": "https://leetcode.com/problems/maximum-frequency-stack",
            "difficulty": "Hard",
            "platform": "LeetCode",
            "chapterId": 3,
            "chapterTitle": "Stacks & Queues",
            "topicId": "3.4",
            "topicTitle": "Specialized Abstract Data Structure Design"
          },
          {
            "id": 141,
            "title": "The Celebrity Problem",
            "url": "https://www.geeksforgeeks.org/problems/the-celebrity-problem/1",
            "difficulty": "Medium",
            "platform": "GeeksforGeeks",
            "chapterId": 3,
            "chapterTitle": "Stacks & Queues",
            "topicId": "3.4",
            "topicTitle": "Specialized Abstract Data Structure Design"
          }
        ]
      }
    ]
  },
  {
    "id": 4,
    "title": "Binary Trees & Binary Search Trees (BST)",
    "expectedCount": 43,
    "icon": "🌲",
    "topics": [
      {
        "id": "4.1",
        "title": "Tree DFS (Traversals & Path Accumulation)",
        "expectedCount": 13,
        "problems": [
          {
            "id": 142,
            "title": "Binary Tree Preorder, Inorder, Postorder Traversal",
            "url": "https://leetcode.com/problems/binary-tree-preorder-inorder-postorder-traversal/",
            "difficulty": "Easy",
            "platform": "LeetCode",
            "chapterId": 4,
            "chapterTitle": "Binary Trees & Binary Search Trees (BST)",
            "topicId": "4.1",
            "topicTitle": "Tree DFS (Traversals & Path Accumulation)"
          },
          {
            "id": 143,
            "title": "Maximum Depth / Height of Binary Tree",
            "url": "https://www.geeksforgeeks.org/problems/height-of-binary-tree/1",
            "difficulty": "Easy",
            "platform": "GeeksforGeeks",
            "chapterId": 4,
            "chapterTitle": "Binary Trees & Binary Search Trees (BST)",
            "topicId": "4.1",
            "topicTitle": "Tree DFS (Traversals & Path Accumulation)"
          },
          {
            "id": 144,
            "title": "Balanced Binary Tree Check",
            "url": "https://leetcode.com/problems/balanced-binary-tree-check/",
            "difficulty": "Easy",
            "platform": "LeetCode",
            "chapterId": 4,
            "chapterTitle": "Binary Trees & Binary Search Trees (BST)",
            "topicId": "4.1",
            "topicTitle": "Tree DFS (Traversals & Path Accumulation)"
          },
          {
            "id": 145,
            "title": "Diameter of Binary Tree",
            "url": "https://leetcode.com/problems/diameter-of-binary-tree",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 4,
            "chapterTitle": "Binary Trees & Binary Search Trees (BST)",
            "topicId": "4.1",
            "topicTitle": "Tree DFS (Traversals & Path Accumulation)"
          },
          {
            "id": 146,
            "title": "Binary Tree Maximum Path Sum",
            "url": "https://leetcode.com/problems/binary-tree-maximum-path-sum",
            "difficulty": "Hard",
            "platform": "LeetCode",
            "chapterId": 4,
            "chapterTitle": "Binary Trees & Binary Search Trees (BST)",
            "topicId": "4.1",
            "topicTitle": "Tree DFS (Traversals & Path Accumulation)"
          },
          {
            "id": 147,
            "title": "Check if Two Trees are Identical / Same Tree",
            "url": "https://leetcode.com/problems/same-tree",
            "difficulty": "Easy",
            "platform": "LeetCode",
            "chapterId": 4,
            "chapterTitle": "Binary Trees & Binary Search Trees (BST)",
            "topicId": "4.1",
            "topicTitle": "Tree DFS (Traversals & Path Accumulation)"
          },
          {
            "id": 148,
            "title": "Symmetric Tree",
            "url": "https://leetcode.com/problems/symmetric-tree",
            "difficulty": "Easy",
            "platform": "LeetCode",
            "chapterId": 4,
            "chapterTitle": "Binary Trees & Binary Search Trees (BST)",
            "topicId": "4.1",
            "topicTitle": "Tree DFS (Traversals & Path Accumulation)"
          },
          {
            "id": 149,
            "title": "Root to Leaf Paths in Binary Tree",
            "url": "https://leetcode.com/problems/binary-tree-paths/",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 4,
            "chapterTitle": "Binary Trees & Binary Search Trees (BST)",
            "topicId": "4.1",
            "topicTitle": "Tree DFS (Traversals & Path Accumulation)"
          },
          {
            "id": 150,
            "title": "Path Sum II",
            "url": "https://leetcode.com/problems/path-sum-ii",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 4,
            "chapterTitle": "Binary Trees & Binary Search Trees (BST)",
            "topicId": "4.1",
            "topicTitle": "Tree DFS (Traversals & Path Accumulation)"
          },
          {
            "id": 151,
            "title": "Sum Root to Leaf Numbers",
            "url": "https://leetcode.com/problems/sum-root-to-leaf-numbers/",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 4,
            "chapterTitle": "Binary Trees & Binary Search Trees (BST)",
            "topicId": "4.1",
            "topicTitle": "Tree DFS (Traversals & Path Accumulation)"
          },
          {
            "id": 152,
            "title": "Lowest Common Ancestor in Binary Tree",
            "url": "https://leetcode.com/problems/lowest-common-ancestor-in-binary-tree/",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 4,
            "chapterTitle": "Binary Trees & Binary Search Trees (BST)",
            "topicId": "4.1",
            "topicTitle": "Tree DFS (Traversals & Path Accumulation)"
          },
          {
            "id": 153,
            "title": "Count Total Nodes in a Complete Binary Tree",
            "url": "https://leetcode.com/problems/count-complete-tree-nodes/",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 4,
            "chapterTitle": "Binary Trees & Binary Search Trees (BST)",
            "topicId": "4.1",
            "topicTitle": "Tree DFS (Traversals & Path Accumulation)"
          },
          {
            "id": 154,
            "title": "Flatten Binary Tree to Linked List",
            "url": "https://leetcode.com/problems/flatten-binary-tree-to-linked-list",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 4,
            "chapterTitle": "Binary Trees & Binary Search Trees (BST)",
            "topicId": "4.1",
            "topicTitle": "Tree DFS (Traversals & Path Accumulation)"
          }
        ]
      },
      {
        "id": "4.2",
        "title": "Tree BFS (Level-Order & Radial Propagation)",
        "expectedCount": 12,
        "problems": [
          {
            "id": 155,
            "title": "Binary Tree Level Order Traversal",
            "url": "https://leetcode.com/problems/binary-tree-level-order-traversal",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 4,
            "chapterTitle": "Binary Trees & Binary Search Trees (BST)",
            "topicId": "4.2",
            "topicTitle": "Tree BFS (Level-Order & Radial Propagation)"
          },
          {
            "id": 156,
            "title": "Binary Tree Zigzag Level Order Traversal",
            "url": "https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 4,
            "chapterTitle": "Binary Trees & Binary Search Trees (BST)",
            "topicId": "4.2",
            "topicTitle": "Tree BFS (Level-Order & Radial Propagation)"
          },
          {
            "id": 157,
            "title": "Average of Levels in Binary Tree",
            "url": "https://leetcode.com/problems/average-of-levels-in-binary-tree/",
            "difficulty": "Easy",
            "platform": "LeetCode",
            "chapterId": 4,
            "chapterTitle": "Binary Trees & Binary Search Trees (BST)",
            "topicId": "4.2",
            "topicTitle": "Tree BFS (Level-Order & Radial Propagation)"
          },
          {
            "id": 158,
            "title": "Right Side View of Binary Tree",
            "url": "https://leetcode.com/problems/right-side-view-of-binary-tree/",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 4,
            "chapterTitle": "Binary Trees & Binary Search Trees (BST)",
            "topicId": "4.2",
            "topicTitle": "Tree BFS (Level-Order & Radial Propagation)"
          },
          {
            "id": 159,
            "title": "Left View of Binary Tree",
            "url": "https://www.geeksforgeeks.org/problems/left-view-of-binary-tree/1",
            "difficulty": "Medium",
            "platform": "GeeksforGeeks",
            "chapterId": 4,
            "chapterTitle": "Binary Trees & Binary Search Trees (BST)",
            "topicId": "4.2",
            "topicTitle": "Tree BFS (Level-Order & Radial Propagation)"
          },
          {
            "id": 160,
            "title": "Top View of Binary Tree",
            "url": "https://www.geeksforgeeks.org/problems/top-view-of-binary-tree/1",
            "difficulty": "Medium",
            "platform": "GeeksforGeeks",
            "chapterId": 4,
            "chapterTitle": "Binary Trees & Binary Search Trees (BST)",
            "topicId": "4.2",
            "topicTitle": "Tree BFS (Level-Order & Radial Propagation)"
          },
          {
            "id": 161,
            "title": "Bottom View of Binary Tree",
            "url": "https://www.geeksforgeeks.org/problems/bottom-view-of-binary-tree/1",
            "difficulty": "Medium",
            "platform": "GeeksforGeeks",
            "chapterId": 4,
            "chapterTitle": "Binary Trees & Binary Search Trees (BST)",
            "topicId": "4.2",
            "topicTitle": "Tree BFS (Level-Order & Radial Propagation)"
          },
          {
            "id": 162,
            "title": "Boundary Traversal of Binary Tree",
            "url": "https://leetcode.com/problems/boundary-traversal-of-binary-tree/",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 4,
            "chapterTitle": "Binary Trees & Binary Search Trees (BST)",
            "topicId": "4.2",
            "topicTitle": "Tree BFS (Level-Order & Radial Propagation)"
          },
          {
            "id": 163,
            "title": "Vertical Order Traversal of a Binary Tree",
            "url": "https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree",
            "difficulty": "Hard",
            "platform": "LeetCode",
            "chapterId": 4,
            "chapterTitle": "Binary Trees & Binary Search Trees (BST)",
            "topicId": "4.2",
            "topicTitle": "Tree BFS (Level-Order & Radial Propagation)"
          },
          {
            "id": 164,
            "title": "All Nodes Distance K in Binary Tree",
            "url": "https://leetcode.com/problems/all-nodes-distance-k-in-binary-tree",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 4,
            "chapterTitle": "Binary Trees & Binary Search Trees (BST)",
            "topicId": "4.2",
            "topicTitle": "Tree BFS (Level-Order & Radial Propagation)"
          },
          {
            "id": 165,
            "title": "Minimum Time Taken to Burn Binary Tree",
            "url": "https://www.geeksforgeeks.org/problems/burning-tree/1",
            "difficulty": "Hard",
            "platform": "GeeksforGeeks",
            "chapterId": 4,
            "chapterTitle": "Binary Trees & Binary Search Trees (BST)",
            "topicId": "4.2",
            "topicTitle": "Tree BFS (Level-Order & Radial Propagation)"
          },
          {
            "id": 166,
            "title": "Populating Next Right Pointers in Each Node",
            "url": "https://leetcode.com/problems/populating-next-right-pointers-in-each-node",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 4,
            "chapterTitle": "Binary Trees & Binary Search Trees (BST)",
            "topicId": "4.2",
            "topicTitle": "Tree BFS (Level-Order & Radial Propagation)"
          }
        ]
      },
      {
        "id": "4.3",
        "title": "Tree Serialization & Construction",
        "expectedCount": 4,
        "problems": [
          {
            "id": 167,
            "title": "Construct Binary Tree from Preorder and Inorder Traversal",
            "url": "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 4,
            "chapterTitle": "Binary Trees & Binary Search Trees (BST)",
            "topicId": "4.3",
            "topicTitle": "Tree Serialization & Construction"
          },
          {
            "id": 168,
            "title": "Construct Binary Tree from Postorder and Inorder Traversal",
            "url": "https://leetcode.com/problems/construct-binary-tree-from-postorder-and-inorder-traversal/",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 4,
            "chapterTitle": "Binary Trees & Binary Search Trees (BST)",
            "topicId": "4.3",
            "topicTitle": "Tree Serialization & Construction"
          },
          {
            "id": 169,
            "title": "Serialize and Deserialize Binary Tree",
            "url": "https://leetcode.com/problems/serialize-and-deserialize-binary-tree",
            "difficulty": "Hard",
            "platform": "LeetCode",
            "chapterId": 4,
            "chapterTitle": "Binary Trees & Binary Search Trees (BST)",
            "topicId": "4.3",
            "topicTitle": "Tree Serialization & Construction"
          },
          {
            "id": 170,
            "title": "Construct Binary Tree String Bracket Representation",
            "url": "https://www.geeksforgeeks.org/construct-binary-tree-string-bracket-representation/",
            "difficulty": "Medium",
            "platform": "GeeksforGeeks",
            "chapterId": 4,
            "chapterTitle": "Binary Trees & Binary Search Trees (BST)",
            "topicId": "4.3",
            "topicTitle": "Tree Serialization & Construction"
          }
        ]
      },
      {
        "id": "4.4",
        "title": "BST Properties & Ordered Operations",
        "expectedCount": 14,
        "problems": [
          {
            "id": 171,
            "title": "Search in a Binary Search Tree",
            "url": "https://leetcode.com/problems/search-in-a-binary-search-tree/",
            "difficulty": "Easy",
            "platform": "LeetCode",
            "chapterId": 4,
            "chapterTitle": "Binary Trees & Binary Search Trees (BST)",
            "topicId": "4.4",
            "topicTitle": "BST Properties & Ordered Operations"
          },
          {
            "id": 172,
            "title": "Insert into a Binary Search Tree",
            "url": "https://leetcode.com/problems/insert-into-a-binary-search-tree/",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 4,
            "chapterTitle": "Binary Trees & Binary Search Trees (BST)",
            "topicId": "4.4",
            "topicTitle": "BST Properties & Ordered Operations"
          },
          {
            "id": 173,
            "title": "Ceil and Floor in a BST",
            "url": "https://leetcode.com/problems/ceil-and-floor-in-a-bst/",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 4,
            "chapterTitle": "Binary Trees & Binary Search Trees (BST)",
            "topicId": "4.4",
            "topicTitle": "BST Properties & Ordered Operations"
          },
          {
            "id": 174,
            "title": "Delete Node in a BST",
            "url": "https://leetcode.com/problems/delete-node-in-a-bst",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 4,
            "chapterTitle": "Binary Trees & Binary Search Trees (BST)",
            "topicId": "4.4",
            "topicTitle": "BST Properties & Ordered Operations"
          },
          {
            "id": 175,
            "title": "Validate Binary Search Tree",
            "url": "https://leetcode.com/problems/validate-binary-search-tree",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 4,
            "chapterTitle": "Binary Trees & Binary Search Trees (BST)",
            "topicId": "4.4",
            "topicTitle": "BST Properties & Ordered Operations"
          },
          {
            "id": 176,
            "title": "Lowest Common Ancestor in a BST",
            "url": "https://www.geeksforgeeks.org/problems/lowest-common-ancestor-in-a-bst/1",
            "difficulty": "Easy",
            "platform": "GeeksforGeeks",
            "chapterId": 4,
            "chapterTitle": "Binary Trees & Binary Search Trees (BST)",
            "topicId": "4.4",
            "topicTitle": "BST Properties & Ordered Operations"
          },
          {
            "id": 177,
            "title": "Kth Smallest Element in a BST",
            "url": "https://leetcode.com/problems/kth-smallest-element-in-a-bst",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 4,
            "chapterTitle": "Binary Trees & Binary Search Trees (BST)",
            "topicId": "4.4",
            "topicTitle": "BST Properties & Ordered Operations"
          },
          {
            "id": 178,
            "title": "Inorder Successor and Predecessor in BST",
            "url": "https://leetcode.com/problems/inorder-successor-and-predecessor-in-bst/",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 4,
            "chapterTitle": "Binary Trees & Binary Search Trees (BST)",
            "topicId": "4.4",
            "topicTitle": "BST Properties & Ordered Operations"
          },
          {
            "id": 179,
            "title": "Binary Search Tree Iterator",
            "url": "https://leetcode.com/problems/binary-search-tree-iterator",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 4,
            "chapterTitle": "Binary Trees & Binary Search Trees (BST)",
            "topicId": "4.4",
            "topicTitle": "BST Properties & Ordered Operations"
          },
          {
            "id": 180,
            "title": "Two Sum IV - Input is a BST",
            "url": "https://leetcode.com/problems/two-sum-iv-input-is-a-bst/",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 4,
            "chapterTitle": "Binary Trees & Binary Search Trees (BST)",
            "topicId": "4.4",
            "topicTitle": "BST Properties & Ordered Operations"
          },
          {
            "id": 181,
            "title": "Construct BST from Preorder Traversal",
            "url": "https://leetcode.com/problems/construct-bst-from-preorder-traversal/",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 4,
            "chapterTitle": "Binary Trees & Binary Search Trees (BST)",
            "topicId": "4.4",
            "topicTitle": "BST Properties & Ordered Operations"
          },
          {
            "id": 182,
            "title": "Convert Sorted Array to Binary Search Tree",
            "url": "https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree",
            "difficulty": "Easy",
            "platform": "LeetCode",
            "chapterId": 4,
            "chapterTitle": "Binary Trees & Binary Search Trees (BST)",
            "topicId": "4.4",
            "topicTitle": "BST Properties & Ordered Operations"
          },
          {
            "id": 183,
            "title": "Correct BST with Two Nodes Swapped / Recover BST",
            "url": "https://leetcode.com/problems/recover-binary-search-tree/",
            "difficulty": "Hard",
            "platform": "LeetCode",
            "chapterId": 4,
            "chapterTitle": "Binary Trees & Binary Search Trees (BST)",
            "topicId": "4.4",
            "topicTitle": "BST Properties & Ordered Operations"
          },
          {
            "id": 184,
            "title": "Largest BST in Binary Tree",
            "url": "https://www.geeksforgeeks.org/problems/largest-bst/1",
            "difficulty": "Hard",
            "platform": "GeeksforGeeks",
            "chapterId": 4,
            "chapterTitle": "Binary Trees & Binary Search Trees (BST)",
            "topicId": "4.4",
            "topicTitle": "BST Properties & Ordered Operations"
          }
        ]
      }
    ]
  },
  {
    "id": 5,
    "title": "Heaps & Priority Queues",
    "expectedCount": 22,
    "icon": "⛰️",
    "topics": [
      {
        "id": "5.1",
        "title": "Top-K & Extrema Selection",
        "expectedCount": 8,
        "problems": [
          {
            "id": 185,
            "title": "Kth Largest Element in an Array",
            "url": "https://leetcode.com/problems/kth-largest-element-in-an-array",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 5,
            "chapterTitle": "Heaps & Priority Queues",
            "topicId": "5.1",
            "topicTitle": "Top-K & Extrema Selection"
          },
          {
            "id": 186,
            "title": "Kth Smallest Element in an Array",
            "url": "https://leetcode.com/problems/kth-smallest-element-in-an-array/",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 5,
            "chapterTitle": "Heaps & Priority Queues",
            "topicId": "5.1",
            "topicTitle": "Top-K & Extrema Selection"
          },
          {
            "id": 187,
            "title": "Top K Frequent Elements",
            "url": "https://leetcode.com/problems/top-k-frequent-elements",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 5,
            "chapterTitle": "Heaps & Priority Queues",
            "topicId": "5.1",
            "topicTitle": "Top-K & Extrema Selection"
          },
          {
            "id": 188,
            "title": "Top K Frequent Words",
            "url": "https://leetcode.com/problems/top-k-frequent-words",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 5,
            "chapterTitle": "Heaps & Priority Queues",
            "topicId": "5.1",
            "topicTitle": "Top-K & Extrema Selection"
          },
          {
            "id": 189,
            "title": "Sort K-Sorted Array",
            "url": "https://www.geeksforgeeks.org/problems/nearly-sorted-1587115620/1",
            "difficulty": "Medium",
            "platform": "GeeksforGeeks",
            "chapterId": 5,
            "chapterTitle": "Heaps & Priority Queues",
            "topicId": "5.1",
            "topicTitle": "Top-K & Extrema Selection"
          },
          {
            "id": 190,
            "title": "K Closest Points to Origin",
            "url": "https://leetcode.com/problems/k-closest-points-to-origin",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 5,
            "chapterTitle": "Heaps & Priority Queues",
            "topicId": "5.1",
            "topicTitle": "Top-K & Extrema Selection"
          },
          {
            "id": 191,
            "title": "Reorganize String",
            "url": "https://leetcode.com/problems/reorganize-string",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 5,
            "chapterTitle": "Heaps & Priority Queues",
            "topicId": "5.1",
            "topicTitle": "Top-K & Extrema Selection"
          },
          {
            "id": 192,
            "title": "Hands of Straights",
            "url": "https://leetcode.com/problems/hands-of-straights/",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 5,
            "chapterTitle": "Heaps & Priority Queues",
            "topicId": "5.1",
            "topicTitle": "Top-K & Extrema Selection"
          }
        ]
      },
      {
        "id": "5.2",
        "title": "Two Heaps (Dynamic Balancing)",
        "expectedCount": 3,
        "problems": [
          {
            "id": 193,
            "title": "Find Median from Data Stream",
            "url": "https://leetcode.com/problems/find-median-from-data-stream",
            "difficulty": "Hard",
            "platform": "LeetCode",
            "chapterId": 5,
            "chapterTitle": "Heaps & Priority Queues",
            "topicId": "5.2",
            "topicTitle": "Two Heaps (Dynamic Balancing)"
          },
          {
            "id": 194,
            "title": "Sliding Window Median",
            "url": "https://leetcode.com/problems/sliding-window-median/",
            "difficulty": "Hard",
            "platform": "LeetCode",
            "chapterId": 5,
            "chapterTitle": "Heaps & Priority Queues",
            "topicId": "5.2",
            "topicTitle": "Two Heaps (Dynamic Balancing)"
          },
          {
            "id": 195,
            "title": "IPO",
            "url": "https://leetcode.com/problems/ipo/",
            "difficulty": "Hard",
            "platform": "LeetCode",
            "chapterId": 5,
            "chapterTitle": "Heaps & Priority Queues",
            "topicId": "5.2",
            "topicTitle": "Two Heaps (Dynamic Balancing)"
          }
        ]
      },
      {
        "id": "5.3",
        "title": "K-Way Merge",
        "expectedCount": 5,
        "problems": [
          {
            "id": 196,
            "title": "Merge K Sorted Lists",
            "url": "https://leetcode.com/problems/merge-k-sorted-lists",
            "difficulty": "Hard",
            "platform": "LeetCode",
            "chapterId": 5,
            "chapterTitle": "Heaps & Priority Queues",
            "topicId": "5.3",
            "topicTitle": "K-Way Merge"
          },
          {
            "id": 197,
            "title": "Merge K Sorted Arrays",
            "url": "https://www.geeksforgeeks.org/problems/merge-k-sorted-arrays/1",
            "difficulty": "Medium",
            "platform": "GeeksforGeeks",
            "chapterId": 5,
            "chapterTitle": "Heaps & Priority Queues",
            "topicId": "5.3",
            "topicTitle": "K-Way Merge"
          },
          {
            "id": 198,
            "title": "Smallest Range Covering Elements from K Lists",
            "url": "https://leetcode.com/problems/smallest-range-covering-elements-from-k-lists",
            "difficulty": "Hard",
            "platform": "LeetCode",
            "chapterId": 5,
            "chapterTitle": "Heaps & Priority Queues",
            "topicId": "5.3",
            "topicTitle": "K-Way Merge"
          },
          {
            "id": 199,
            "title": "Find K Pairs with Smallest Sums",
            "url": "https://leetcode.com/problems/find-k-pairs-with-smallest-sums/",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 5,
            "chapterTitle": "Heaps & Priority Queues",
            "topicId": "5.3",
            "topicTitle": "K-Way Merge"
          },
          {
            "id": 200,
            "title": "Kth Smallest Element in a Sorted Matrix",
            "url": "https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 5,
            "chapterTitle": "Heaps & Priority Queues",
            "topicId": "5.3",
            "topicTitle": "K-Way Merge"
          }
        ]
      },
      {
        "id": "5.4",
        "title": "Greedy Scheduling & Resource Allocation",
        "expectedCount": 6,
        "problems": [
          {
            "id": 201,
            "title": "Task Scheduler",
            "url": "https://leetcode.com/problems/task-scheduler",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 5,
            "chapterTitle": "Heaps & Priority Queues",
            "topicId": "5.4",
            "topicTitle": "Greedy Scheduling & Resource Allocation"
          },
          {
            "id": 202,
            "title": "Minimum Cost of Ropes / Connect N Ropes",
            "url": "https://www.geeksforgeeks.org/problems/minimum-cost-of-ropes-1587115620/1",
            "difficulty": "Easy",
            "platform": "GeeksforGeeks",
            "chapterId": 5,
            "chapterTitle": "Heaps & Priority Queues",
            "topicId": "5.4",
            "topicTitle": "Greedy Scheduling & Resource Allocation"
          },
          {
            "id": 203,
            "title": "Minimum Cost to Hire K Workers",
            "url": "https://leetcode.com/problems/minimum-cost-to-hire-k-workers",
            "difficulty": "Hard",
            "platform": "LeetCode",
            "chapterId": 5,
            "chapterTitle": "Heaps & Priority Queues",
            "topicId": "5.4",
            "topicTitle": "Greedy Scheduling & Resource Allocation"
          },
          {
            "id": 204,
            "title": "Single-Threaded CPU",
            "url": "https://leetcode.com/problems/single-threaded-cpu/",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 5,
            "chapterTitle": "Heaps & Priority Queues",
            "topicId": "5.4",
            "topicTitle": "Greedy Scheduling & Resource Allocation"
          },
          {
            "id": 205,
            "title": "Furthest Building You Can Reach",
            "url": "https://leetcode.com/problems/furthest-building-you-can-reach",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 5,
            "chapterTitle": "Heaps & Priority Queues",
            "topicId": "5.4",
            "topicTitle": "Greedy Scheduling & Resource Allocation"
          },
          {
            "id": 206,
            "title": "Design Twitter",
            "url": "https://leetcode.com/problems/design-twitter/",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 5,
            "chapterTitle": "Heaps & Priority Queues",
            "topicId": "5.4",
            "topicTitle": "Greedy Scheduling & Resource Allocation"
          }
        ]
      }
    ]
  },
  {
    "id": 6,
    "title": "Graphs",
    "expectedCount": 54,
    "icon": "🕸️",
    "topics": [
      {
        "id": "6.1",
        "title": "Connected Components & Grid Flood Fill",
        "expectedCount": 11,
        "problems": [
          {
            "id": 207,
            "title": "BFS and DFS of Graph",
            "url": "https://www.geeksforgeeks.org/problems/bfs-traversal-of-graph/1",
            "difficulty": "Easy",
            "platform": "GeeksforGeeks",
            "chapterId": 6,
            "chapterTitle": "Graphs",
            "topicId": "6.1",
            "topicTitle": "Connected Components & Grid Flood Fill"
          },
          {
            "id": 208,
            "title": "Number of Provinces",
            "url": "https://leetcode.com/problems/number-of-provinces/",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 6,
            "chapterTitle": "Graphs",
            "topicId": "6.1",
            "topicTitle": "Connected Components & Grid Flood Fill"
          },
          {
            "id": 209,
            "title": "Number of Islands",
            "url": "https://leetcode.com/problems/number-of-islands",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 6,
            "chapterTitle": "Graphs",
            "topicId": "6.1",
            "topicTitle": "Connected Components & Grid Flood Fill"
          },
          {
            "id": 210,
            "title": "Max Area of Island",
            "url": "https://leetcode.com/problems/max-area-of-island/",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 6,
            "chapterTitle": "Graphs",
            "topicId": "6.1",
            "topicTitle": "Connected Components & Grid Flood Fill"
          },
          {
            "id": 211,
            "title": "Flood Fill",
            "url": "https://leetcode.com/problems/flood-fill",
            "difficulty": "Easy",
            "platform": "LeetCode",
            "chapterId": 6,
            "chapterTitle": "Graphs",
            "topicId": "6.1",
            "topicTitle": "Connected Components & Grid Flood Fill"
          },
          {
            "id": 212,
            "title": "Surrounded Regions",
            "url": "https://leetcode.com/problems/surrounded-regions/",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 6,
            "chapterTitle": "Graphs",
            "topicId": "6.1",
            "topicTitle": "Connected Components & Grid Flood Fill"
          },
          {
            "id": 213,
            "title": "Number of Enclaves",
            "url": "https://leetcode.com/problems/number-of-enclaves/",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 6,
            "chapterTitle": "Graphs",
            "topicId": "6.1",
            "topicTitle": "Connected Components & Grid Flood Fill"
          },
          {
            "id": 214,
            "title": "Number of Distinct Islands",
            "url": "https://leetcode.com/problems/number-of-distinct-islands/",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 6,
            "chapterTitle": "Graphs",
            "topicId": "6.1",
            "topicTitle": "Connected Components & Grid Flood Fill"
          },
          {
            "id": 215,
            "title": "Pacific Atlantic Water Flow",
            "url": "https://leetcode.com/problems/pacific-atlantic-water-flow",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 6,
            "chapterTitle": "Graphs",
            "topicId": "6.1",
            "topicTitle": "Connected Components & Grid Flood Fill"
          },
          {
            "id": 216,
            "title": "Island Perimeter",
            "url": "https://leetcode.com/problems/island-perimeter/",
            "difficulty": "Easy",
            "platform": "LeetCode",
            "chapterId": 6,
            "chapterTitle": "Graphs",
            "topicId": "6.1",
            "topicTitle": "Connected Components & Grid Flood Fill"
          },
          {
            "id": 217,
            "title": "Making A Large Island",
            "url": "https://leetcode.com/problems/making-a-large-island",
            "difficulty": "Hard",
            "platform": "LeetCode",
            "chapterId": 6,
            "chapterTitle": "Graphs",
            "topicId": "6.1",
            "topicTitle": "Connected Components & Grid Flood Fill"
          }
        ]
      },
      {
        "id": "6.2",
        "title": "Multi-Source BFS",
        "expectedCount": 5,
        "problems": [
          {
            "id": 218,
            "title": "Rotting Oranges",
            "url": "https://leetcode.com/problems/rotting-oranges",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 6,
            "chapterTitle": "Graphs",
            "topicId": "6.2",
            "topicTitle": "Multi-Source BFS"
          },
          {
            "id": 219,
            "title": "01 Matrix / Distance of Nearest Cell Having 1",
            "url": "https://leetcode.com/problems/01-matrix",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 6,
            "chapterTitle": "Graphs",
            "topicId": "6.2",
            "topicTitle": "Multi-Source BFS"
          },
          {
            "id": 220,
            "title": "As Far from Land as Possible",
            "url": "https://leetcode.com/problems/as-far-from-land-as-possible",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 6,
            "chapterTitle": "Graphs",
            "topicId": "6.2",
            "topicTitle": "Multi-Source BFS"
          },
          {
            "id": 221,
            "title": "Walls and Gates",
            "url": "https://leetcode.com/problems/walls-and-gates/",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 6,
            "chapterTitle": "Graphs",
            "topicId": "6.2",
            "topicTitle": "Multi-Source BFS"
          },
          {
            "id": 222,
            "title": "Shortest Bridge",
            "url": "https://leetcode.com/problems/shortest-bridge",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 6,
            "chapterTitle": "Graphs",
            "topicId": "6.2",
            "topicTitle": "Multi-Source BFS"
          }
        ]
      },
      {
        "id": "6.3",
        "title": "Cycle Detection & Bipartition",
        "expectedCount": 4,
        "problems": [
          {
            "id": 223,
            "title": "Detect Cycle in Undirected Graph (BFS & DFS)",
            "url": "https://www.geeksforgeeks.org/problems/detect-cycle-in-an-undirected-graph/1",
            "difficulty": "Medium",
            "platform": "GeeksforGeeks",
            "chapterId": 6,
            "chapterTitle": "Graphs",
            "topicId": "6.3",
            "topicTitle": "Cycle Detection & Bipartition"
          },
          {
            "id": 224,
            "title": "Detect Cycle in Directed Graph (DFS)",
            "url": "https://www.geeksforgeeks.org/problems/detect-cycle-in-a-directed-graph/1",
            "difficulty": "Medium",
            "platform": "GeeksforGeeks",
            "chapterId": 6,
            "chapterTitle": "Graphs",
            "topicId": "6.3",
            "topicTitle": "Cycle Detection & Bipartition"
          },
          {
            "id": 225,
            "title": "Is Graph Bipartite?",
            "url": "https://leetcode.com/problems/is-graph-bipartite/",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 6,
            "chapterTitle": "Graphs",
            "topicId": "6.3",
            "topicTitle": "Cycle Detection & Bipartition"
          },
          {
            "id": 226,
            "title": "Graph Valid Tree",
            "url": "https://leetcode.com/problems/graph-valid-tree",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 6,
            "chapterTitle": "Graphs",
            "topicId": "6.3",
            "topicTitle": "Cycle Detection & Bipartition"
          }
        ]
      },
      {
        "id": "6.4",
        "title": "Topological Sort (DAG Ordering & Dependency Resolution)",
        "expectedCount": 7,
        "problems": [
          {
            "id": 227,
            "title": "Topological Sort (Kahn’s Algorithm & DFS)",
            "url": "https://www.geeksforgeeks.org/problems/topological-sort/1",
            "difficulty": "Medium",
            "platform": "GeeksforGeeks",
            "chapterId": 6,
            "chapterTitle": "Graphs",
            "topicId": "6.4",
            "topicTitle": "Topological Sort (DAG Ordering & Dependency Resolution)"
          },
          {
            "id": 228,
            "title": "Course Schedule",
            "url": "https://leetcode.com/problems/course-schedule",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 6,
            "chapterTitle": "Graphs",
            "topicId": "6.4",
            "topicTitle": "Topological Sort (DAG Ordering & Dependency Resolution)"
          },
          {
            "id": 229,
            "title": "Course Schedule II",
            "url": "https://leetcode.com/problems/course-schedule-ii",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 6,
            "chapterTitle": "Graphs",
            "topicId": "6.4",
            "topicTitle": "Topological Sort (DAG Ordering & Dependency Resolution)"
          },
          {
            "id": 230,
            "title": "Find Eventual Safe States",
            "url": "https://leetcode.com/problems/find-eventual-safe-states",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 6,
            "chapterTitle": "Graphs",
            "topicId": "6.4",
            "topicTitle": "Topological Sort (DAG Ordering & Dependency Resolution)"
          },
          {
            "id": 231,
            "title": "Alien Dictionary",
            "url": "https://www.geeksforgeeks.org/problems/alien-dictionary/1",
            "difficulty": "Hard",
            "platform": "GeeksforGeeks",
            "chapterId": 6,
            "chapterTitle": "Graphs",
            "topicId": "6.4",
            "topicTitle": "Topological Sort (DAG Ordering & Dependency Resolution)"
          },
          {
            "id": 232,
            "title": "Minimum Height Trees",
            "url": "https://leetcode.com/problems/minimum-height-trees",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 6,
            "chapterTitle": "Graphs",
            "topicId": "6.4",
            "topicTitle": "Topological Sort (DAG Ordering & Dependency Resolution)"
          },
          {
            "id": 233,
            "title": "Sequence Reconstruction",
            "url": "https://leetcode.com/problems/sequence-reconstruction/",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 6,
            "chapterTitle": "Graphs",
            "topicId": "6.4",
            "topicTitle": "Topological Sort (DAG Ordering & Dependency Resolution)"
          }
        ]
      },
      {
        "id": "6.5",
        "title": "Shortest Paths (Dijkstra, Bellman-Ford, Floyd-Warshall)",
        "expectedCount": 15,
        "problems": [
          {
            "id": 234,
            "title": "Shortest Path in Undirected Graph with Unit Weights",
            "url": "https://leetcode.com/problems/shortest-path-in-undirected-graph-with-unit-weights/",
            "difficulty": "Easy",
            "platform": "LeetCode",
            "chapterId": 6,
            "chapterTitle": "Graphs",
            "topicId": "6.5",
            "topicTitle": "Shortest Paths (Dijkstra, Bellman-Ford, Floyd-Warshall)"
          },
          {
            "id": 235,
            "title": "Shortest Path in Directed Acyclic Graph (DAG)",
            "url": "https://leetcode.com/problems/shortest-path-in-directed-acyclic-graph/",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 6,
            "chapterTitle": "Graphs",
            "topicId": "6.5",
            "topicTitle": "Shortest Paths (Dijkstra, Bellman-Ford, Floyd-Warshall)"
          },
          {
            "id": 236,
            "title": "Dijkstra's Algorithm",
            "url": "https://leetcode.com/problems/dijkstra-s-algorithm/",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 6,
            "chapterTitle": "Graphs",
            "topicId": "6.5",
            "topicTitle": "Shortest Paths (Dijkstra, Bellman-Ford, Floyd-Warshall)"
          },
          {
            "id": 237,
            "title": "Shortest Distance in a Binary Maze",
            "url": "https://leetcode.com/problems/shortest-distance-in-a-binary-maze/",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 6,
            "chapterTitle": "Graphs",
            "topicId": "6.5",
            "topicTitle": "Shortest Paths (Dijkstra, Bellman-Ford, Floyd-Warshall)"
          },
          {
            "id": 238,
            "title": "Path with Minimum Effort",
            "url": "https://leetcode.com/problems/path-with-minimum-effort/",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 6,
            "chapterTitle": "Graphs",
            "topicId": "6.5",
            "topicTitle": "Shortest Paths (Dijkstra, Bellman-Ford, Floyd-Warshall)"
          },
          {
            "id": 239,
            "title": "Cheapest Flights Within K Stops",
            "url": "https://leetcode.com/problems/cheapest-flights-within-k-stops",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 6,
            "chapterTitle": "Graphs",
            "topicId": "6.5",
            "topicTitle": "Shortest Paths (Dijkstra, Bellman-Ford, Floyd-Warshall)"
          },
          {
            "id": 240,
            "title": "Network Delay Time",
            "url": "https://leetcode.com/problems/network-delay-time/",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 6,
            "chapterTitle": "Graphs",
            "topicId": "6.5",
            "topicTitle": "Shortest Paths (Dijkstra, Bellman-Ford, Floyd-Warshall)"
          },
          {
            "id": 241,
            "title": "Number of Ways to Arrive at Destination",
            "url": "https://leetcode.com/problems/number-of-ways-to-arrive-at-destination/",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 6,
            "chapterTitle": "Graphs",
            "topicId": "6.5",
            "topicTitle": "Shortest Paths (Dijkstra, Bellman-Ford, Floyd-Warshall)"
          },
          {
            "id": 242,
            "title": "Minimum Multiplications to Reach End",
            "url": "https://leetcode.com/problems/minimum-multiplications-to-reach-end/",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 6,
            "chapterTitle": "Graphs",
            "topicId": "6.5",
            "topicTitle": "Shortest Paths (Dijkstra, Bellman-Ford, Floyd-Warshall)"
          },
          {
            "id": 243,
            "title": "Bellman-Ford Algorithm",
            "url": "https://leetcode.com/problems/bellman-ford-algorithm/",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 6,
            "chapterTitle": "Graphs",
            "topicId": "6.5",
            "topicTitle": "Shortest Paths (Dijkstra, Bellman-Ford, Floyd-Warshall)"
          },
          {
            "id": 244,
            "title": "Floyd-Warshall Algorithm",
            "url": "https://leetcode.com/problems/floyd-warshall-algorithm/",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 6,
            "chapterTitle": "Graphs",
            "topicId": "6.5",
            "topicTitle": "Shortest Paths (Dijkstra, Bellman-Ford, Floyd-Warshall)"
          },
          {
            "id": 245,
            "title": "Find the City with Smallest Number of Neighbors at Threshold",
            "url": "https://leetcode.com/problems/find-the-city-with-smallest-number-of-neighbors-at-threshold/",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 6,
            "chapterTitle": "Graphs",
            "topicId": "6.5",
            "topicTitle": "Shortest Paths (Dijkstra, Bellman-Ford, Floyd-Warshall)"
          },
          {
            "id": 246,
            "title": "Swim in Rising Water",
            "url": "https://leetcode.com/problems/swim-in-rising-water",
            "difficulty": "Hard",
            "platform": "LeetCode",
            "chapterId": 6,
            "chapterTitle": "Graphs",
            "topicId": "6.5",
            "topicTitle": "Shortest Paths (Dijkstra, Bellman-Ford, Floyd-Warshall)"
          },
          {
            "id": 247,
            "title": "Word Ladder I",
            "url": "https://leetcode.com/problems/word-ladder-i/",
            "difficulty": "Hard",
            "platform": "LeetCode",
            "chapterId": 6,
            "chapterTitle": "Graphs",
            "topicId": "6.5",
            "topicTitle": "Shortest Paths (Dijkstra, Bellman-Ford, Floyd-Warshall)"
          },
          {
            "id": 248,
            "title": "Word Ladder II",
            "url": "https://leetcode.com/problems/word-ladder-ii/",
            "difficulty": "Hard",
            "platform": "LeetCode",
            "chapterId": 6,
            "chapterTitle": "Graphs",
            "topicId": "6.5",
            "topicTitle": "Shortest Paths (Dijkstra, Bellman-Ford, Floyd-Warshall)"
          }
        ]
      },
      {
        "id": "6.6",
        "title": "Disjoint Set Union (DSU) & Minimum Spanning Tree (MST)",
        "expectedCount": 8,
        "problems": [
          {
            "id": 249,
            "title": "Disjoint Set Union (Union by Rank/Size & Path Compression)",
            "url": "https://leetcode.com/problems/disjoint-set-union-union-by-rank/",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 6,
            "chapterTitle": "Graphs",
            "topicId": "6.6",
            "topicTitle": "Disjoint Set Union (DSU) & Minimum Spanning Tree (MST)"
          },
          {
            "id": 250,
            "title": "Number of Operations to Make Network Connected",
            "url": "https://leetcode.com/problems/number-of-operations-to-make-network-connected",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 6,
            "chapterTitle": "Graphs",
            "topicId": "6.6",
            "topicTitle": "Disjoint Set Union (DSU) & Minimum Spanning Tree (MST)"
          },
          {
            "id": 251,
            "title": "Most Stones Removed with Same Row or Column",
            "url": "https://leetcode.com/problems/most-stones-removed-with-same-row-or-column",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 6,
            "chapterTitle": "Graphs",
            "topicId": "6.6",
            "topicTitle": "Disjoint Set Union (DSU) & Minimum Spanning Tree (MST)"
          },
          {
            "id": 252,
            "title": "Accounts Merge",
            "url": "https://leetcode.com/problems/accounts-merge",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 6,
            "chapterTitle": "Graphs",
            "topicId": "6.6",
            "topicTitle": "Disjoint Set Union (DSU) & Minimum Spanning Tree (MST)"
          },
          {
            "id": 253,
            "title": "Redundant Connection",
            "url": "https://leetcode.com/problems/redundant-connection",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 6,
            "chapterTitle": "Graphs",
            "topicId": "6.6",
            "topicTitle": "Disjoint Set Union (DSU) & Minimum Spanning Tree (MST)"
          },
          {
            "id": 254,
            "title": "Kruskal's Algorithm (MST)",
            "url": "https://leetcode.com/problems/kruskal-s-algorithm/",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 6,
            "chapterTitle": "Graphs",
            "topicId": "6.6",
            "topicTitle": "Disjoint Set Union (DSU) & Minimum Spanning Tree (MST)"
          },
          {
            "id": 255,
            "title": "Prim's Algorithm (MST)",
            "url": "https://leetcode.com/problems/prim-s-algorithm/",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 6,
            "chapterTitle": "Graphs",
            "topicId": "6.6",
            "topicTitle": "Disjoint Set Union (DSU) & Minimum Spanning Tree (MST)"
          },
          {
            "id": 256,
            "title": "Min Cost to Connect All Points",
            "url": "https://leetcode.com/problems/min-cost-to-connect-all-points/",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 6,
            "chapterTitle": "Graphs",
            "topicId": "6.6",
            "topicTitle": "Disjoint Set Union (DSU) & Minimum Spanning Tree (MST)"
          }
        ]
      },
      {
        "id": "6.7",
        "title": "Advanced Graph (Bridges & Articulation Points)",
        "expectedCount": 4,
        "problems": [
          {
            "id": 257,
            "title": "Critical Connections in a Network / Bridges (Tarjan's)",
            "url": "https://leetcode.com/problems/critical-connections-in-a-network",
            "difficulty": "Hard",
            "platform": "LeetCode",
            "chapterId": 6,
            "chapterTitle": "Graphs",
            "topicId": "6.7",
            "topicTitle": "Advanced Graph (Bridges & Articulation Points)"
          },
          {
            "id": 258,
            "title": "Articulation Points in Graph",
            "url": "https://www.geeksforgeeks.org/problems/articulation-point-1/1",
            "difficulty": "Hard",
            "platform": "GeeksforGeeks",
            "chapterId": 6,
            "chapterTitle": "Graphs",
            "topicId": "6.7",
            "topicTitle": "Advanced Graph (Bridges & Articulation Points)"
          },
          {
            "id": 259,
            "title": "Reconstruct Itinerary (Hierholzer’s Eulerian Path)",
            "url": "https://leetcode.com/problems/reconstruct-itinerary/",
            "difficulty": "Hard",
            "platform": "LeetCode",
            "chapterId": 6,
            "chapterTitle": "Graphs",
            "topicId": "6.7",
            "topicTitle": "Advanced Graph (Bridges & Articulation Points)"
          },
          {
            "id": 260,
            "title": "Evaluate Division",
            "url": "https://leetcode.com/problems/evaluate-division",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 6,
            "chapterTitle": "Graphs",
            "topicId": "6.7",
            "topicTitle": "Advanced Graph (Bridges & Articulation Points)"
          }
        ]
      }
    ]
  },
  {
    "id": 7,
    "title": "Dynamic Programming (DP)",
    "expectedCount": 63,
    "icon": "⚡",
    "topics": [
      {
        "id": "7.1",
        "title": "1D Linear DP",
        "expectedCount": 11,
        "problems": [
          {
            "id": 261,
            "title": "Climbing Stairs",
            "url": "https://leetcode.com/problems/climbing-stairs",
            "difficulty": "Easy",
            "platform": "LeetCode",
            "chapterId": 7,
            "chapterTitle": "Dynamic Programming (DP)",
            "topicId": "7.1",
            "topicTitle": "1D Linear DP"
          },
          {
            "id": 262,
            "title": "Frog Jump / Frog Jump with K Distances",
            "url": "https://leetcode.com/problems/frog-jump",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 7,
            "chapterTitle": "Dynamic Programming (DP)",
            "topicId": "7.1",
            "topicTitle": "1D Linear DP"
          },
          {
            "id": 263,
            "title": "House Robber",
            "url": "https://leetcode.com/problems/house-robber",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 7,
            "chapterTitle": "Dynamic Programming (DP)",
            "topicId": "7.1",
            "topicTitle": "1D Linear DP"
          },
          {
            "id": 264,
            "title": "House Robber II (Circular Array)",
            "url": "https://leetcode.com/problems/house-robber-ii/",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 7,
            "chapterTitle": "Dynamic Programming (DP)",
            "topicId": "7.1",
            "topicTitle": "1D Linear DP"
          },
          {
            "id": 265,
            "title": "Delete and Earn",
            "url": "https://leetcode.com/problems/delete-and-earn",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 7,
            "chapterTitle": "Dynamic Programming (DP)",
            "topicId": "7.1",
            "topicTitle": "1D Linear DP"
          },
          {
            "id": 266,
            "title": "Integer Break",
            "url": "https://leetcode.com/problems/integer-break/",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 7,
            "chapterTitle": "Dynamic Programming (DP)",
            "topicId": "7.1",
            "topicTitle": "1D Linear DP"
          },
          {
            "id": 267,
            "title": "Decode Ways",
            "url": "https://leetcode.com/problems/decode-ways",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 7,
            "chapterTitle": "Dynamic Programming (DP)",
            "topicId": "7.1",
            "topicTitle": "1D Linear DP"
          },
          {
            "id": 268,
            "title": "Word Break",
            "url": "https://leetcode.com/problems/word-break",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 7,
            "chapterTitle": "Dynamic Programming (DP)",
            "topicId": "7.1",
            "topicTitle": "1D Linear DP"
          },
          {
            "id": 269,
            "title": "Jump Game",
            "url": "https://leetcode.com/problems/jump-game",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 7,
            "chapterTitle": "Dynamic Programming (DP)",
            "topicId": "7.1",
            "topicTitle": "1D Linear DP"
          },
          {
            "id": 270,
            "title": "Jump Game II",
            "url": "https://leetcode.com/problems/jump-game-ii/",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 7,
            "chapterTitle": "Dynamic Programming (DP)",
            "topicId": "7.1",
            "topicTitle": "1D Linear DP"
          },
          {
            "id": 271,
            "title": "Maximum Subsequence Sum Such That No Three Are Consecutive",
            "url": "https://www.geeksforgeeks.org/maximum-subsequence-sum-such-that-no-three-are-consecutive/",
            "difficulty": "Medium",
            "platform": "GeeksforGeeks",
            "chapterId": 7,
            "chapterTitle": "Dynamic Programming (DP)",
            "topicId": "7.1",
            "topicTitle": "1D Linear DP"
          }
        ]
      },
      {
        "id": "7.2",
        "title": "2D Grid DP",
        "expectedCount": 8,
        "problems": [
          {
            "id": 272,
            "title": "Ninja's Training",
            "url": "https://www.geeksforgeeks.org/problems/geeks-training/1",
            "difficulty": "Medium",
            "platform": "GeeksforGeeks",
            "chapterId": 7,
            "chapterTitle": "Dynamic Programming (DP)",
            "topicId": "7.2",
            "topicTitle": "2D Grid DP"
          },
          {
            "id": 273,
            "title": "Grid Unique Paths",
            "url": "https://leetcode.com/problems/unique-paths/",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 7,
            "chapterTitle": "Dynamic Programming (DP)",
            "topicId": "7.2",
            "topicTitle": "2D Grid DP"
          },
          {
            "id": 274,
            "title": "Grid Unique Paths II (with Obstacles)",
            "url": "https://leetcode.com/problems/unique-paths-ii/",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 7,
            "chapterTitle": "Dynamic Programming (DP)",
            "topicId": "7.2",
            "topicTitle": "2D Grid DP"
          },
          {
            "id": 275,
            "title": "Minimum Path Sum",
            "url": "https://leetcode.com/problems/minimum-path-sum",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 7,
            "chapterTitle": "Dynamic Programming (DP)",
            "topicId": "7.2",
            "topicTitle": "2D Grid DP"
          },
          {
            "id": 276,
            "title": "Triangle",
            "url": "https://leetcode.com/problems/triangle/",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 7,
            "chapterTitle": "Dynamic Programming (DP)",
            "topicId": "7.2",
            "topicTitle": "2D Grid DP"
          },
          {
            "id": 277,
            "title": "Minimum / Maximum Falling Path Sum",
            "url": "https://leetcode.com/problems/minimum/",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 7,
            "chapterTitle": "Dynamic Programming (DP)",
            "topicId": "7.2",
            "topicTitle": "2D Grid DP"
          },
          {
            "id": 278,
            "title": "Dungeon Game",
            "url": "https://leetcode.com/problems/dungeon-game/",
            "difficulty": "Hard",
            "platform": "LeetCode",
            "chapterId": 7,
            "chapterTitle": "Dynamic Programming (DP)",
            "topicId": "7.2",
            "topicTitle": "2D Grid DP"
          },
          {
            "id": 279,
            "title": "Out of Boundary Paths",
            "url": "https://leetcode.com/problems/out-of-boundary-paths/",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 7,
            "chapterTitle": "Dynamic Programming (DP)",
            "topicId": "7.2",
            "topicTitle": "2D Grid DP"
          }
        ]
      },
      {
        "id": "7.3",
        "title": "Knapsack & Subset DP",
        "expectedCount": 11,
        "problems": [
          {
            "id": 280,
            "title": "Subset Sum Equal to Target",
            "url": "https://www.geeksforgeeks.org/problems/subset-sum-problem-1611555638/1",
            "difficulty": "Medium",
            "platform": "GeeksforGeeks",
            "chapterId": 7,
            "chapterTitle": "Dynamic Programming (DP)",
            "topicId": "7.3",
            "topicTitle": "Knapsack & Subset DP"
          },
          {
            "id": 281,
            "title": "Partition Equal Subset Sum",
            "url": "https://www.geeksforgeeks.org/problems/subset-sum-problem2014/1",
            "difficulty": "Medium",
            "platform": "GeeksforGeeks",
            "chapterId": 7,
            "chapterTitle": "Dynamic Programming (DP)",
            "topicId": "7.3",
            "topicTitle": "Knapsack & Subset DP"
          },
          {
            "id": 282,
            "title": "Partition a Set into Two Subsets with Min Absolute Diff",
            "url": "https://leetcode.com/problems/partition-array-into-two-arrays-to-minimize-sum-difference/",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 7,
            "chapterTitle": "Dynamic Programming (DP)",
            "topicId": "7.3",
            "topicTitle": "Knapsack & Subset DP"
          },
          {
            "id": 283,
            "title": "Count Subsets with Sum K",
            "url": "https://www.geeksforgeeks.org/problems/perfect-sum-problem5633/1",
            "difficulty": "Medium",
            "platform": "GeeksforGeeks",
            "chapterId": 7,
            "chapterTitle": "Dynamic Programming (DP)",
            "topicId": "7.3",
            "topicTitle": "Knapsack & Subset DP"
          },
          {
            "id": 284,
            "title": "Count Partitions with Given Difference",
            "url": "https://www.geeksforgeeks.org/problems/partitions-with-given-difference/1",
            "difficulty": "Medium",
            "platform": "GeeksforGeeks",
            "chapterId": 7,
            "chapterTitle": "Dynamic Programming (DP)",
            "topicId": "7.3",
            "topicTitle": "Knapsack & Subset DP"
          },
          {
            "id": 285,
            "title": "0/1 Knapsack Problem",
            "url": "https://www.geeksforgeeks.org/problems/0-1-knapsack-problem0945/1",
            "difficulty": "Medium",
            "platform": "GeeksforGeeks",
            "chapterId": 7,
            "chapterTitle": "Dynamic Programming (DP)",
            "topicId": "7.3",
            "topicTitle": "Knapsack & Subset DP"
          },
          {
            "id": 286,
            "title": "Target Sum",
            "url": "https://leetcode.com/problems/target-sum/",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 7,
            "chapterTitle": "Dynamic Programming (DP)",
            "topicId": "7.3",
            "topicTitle": "Knapsack & Subset DP"
          },
          {
            "id": 287,
            "title": "Coin Change (Minimum Coins)",
            "url": "https://leetcode.com/problems/coin-change",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 7,
            "chapterTitle": "Dynamic Programming (DP)",
            "topicId": "7.3",
            "topicTitle": "Knapsack & Subset DP"
          },
          {
            "id": 288,
            "title": "Coin Change 2 (Count Ways / Unbounded Knapsack)",
            "url": "https://leetcode.com/problems/coin-change-ii/",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 7,
            "chapterTitle": "Dynamic Programming (DP)",
            "topicId": "7.3",
            "topicTitle": "Knapsack & Subset DP"
          },
          {
            "id": 289,
            "title": "Rod Cutting Problem",
            "url": "https://www.geeksforgeeks.org/problems/rod-cutting0840/1",
            "difficulty": "Medium",
            "platform": "GeeksforGeeks",
            "chapterId": 7,
            "chapterTitle": "Dynamic Programming (DP)",
            "topicId": "7.3",
            "topicTitle": "Knapsack & Subset DP"
          },
          {
            "id": 290,
            "title": "Ones and Zeroes",
            "url": "https://leetcode.com/problems/ones-and-zeroes",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 7,
            "chapterTitle": "Dynamic Programming (DP)",
            "topicId": "7.3",
            "topicTitle": "Knapsack & Subset DP"
          }
        ]
      },
      {
        "id": "7.4",
        "title": "String DP (LCS & Alignment)",
        "expectedCount": 12,
        "problems": [
          {
            "id": 291,
            "title": "Longest Common Subsequence (LCS)",
            "url": "https://www.geeksforgeeks.org/problems/longest-common-subsequence-1587115620/1",
            "difficulty": "Medium",
            "platform": "GeeksforGeeks",
            "chapterId": 7,
            "chapterTitle": "Dynamic Programming (DP)",
            "topicId": "7.4",
            "topicTitle": "String DP (LCS & Alignment)"
          },
          {
            "id": 292,
            "title": "Print Longest Common Subsequence",
            "url": "https://www.geeksforgeeks.org/problems/print-all-lcs-sequences3413/1",
            "difficulty": "Medium",
            "platform": "GeeksforGeeks",
            "chapterId": 7,
            "chapterTitle": "Dynamic Programming (DP)",
            "topicId": "7.4",
            "topicTitle": "String DP (LCS & Alignment)"
          },
          {
            "id": 293,
            "title": "Longest Common Substring",
            "url": "https://www.geeksforgeeks.org/problems/longest-common-substring1452/1",
            "difficulty": "Medium",
            "platform": "GeeksforGeeks",
            "chapterId": 7,
            "chapterTitle": "Dynamic Programming (DP)",
            "topicId": "7.4",
            "topicTitle": "String DP (LCS & Alignment)"
          },
          {
            "id": 294,
            "title": "Longest Palindromic Subsequence",
            "url": "https://leetcode.com/problems/longest-palindromic-subsequence/",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 7,
            "chapterTitle": "Dynamic Programming (DP)",
            "topicId": "7.4",
            "topicTitle": "String DP (LCS & Alignment)"
          },
          {
            "id": 295,
            "title": "Minimum Insertions to Make String Palindrome",
            "url": "https://leetcode.com/problems/minimum-insertion-steps-to-make-a-string-palindrome/",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 7,
            "chapterTitle": "Dynamic Programming (DP)",
            "topicId": "7.4",
            "topicTitle": "String DP (LCS & Alignment)"
          },
          {
            "id": 296,
            "title": "Minimum Insertions/Deletions to Convert String A to B",
            "url": "https://leetcode.com/problems/delete-operation-for-two-strings/",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 7,
            "chapterTitle": "Dynamic Programming (DP)",
            "topicId": "7.4",
            "topicTitle": "String DP (LCS & Alignment)"
          },
          {
            "id": 297,
            "title": "Shortest Common Supersequence",
            "url": "https://leetcode.com/problems/shortest-common-supersequence/",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 7,
            "chapterTitle": "Dynamic Programming (DP)",
            "topicId": "7.4",
            "topicTitle": "String DP (LCS & Alignment)"
          },
          {
            "id": 298,
            "title": "Distinct Subsequences",
            "url": "https://leetcode.com/problems/distinct-subsequences",
            "difficulty": "Hard",
            "platform": "LeetCode",
            "chapterId": 7,
            "chapterTitle": "Dynamic Programming (DP)",
            "topicId": "7.4",
            "topicTitle": "String DP (LCS & Alignment)"
          },
          {
            "id": 299,
            "title": "Edit Distance",
            "url": "https://www.geeksforgeeks.org/problems/edit-distance3702/1",
            "difficulty": "Hard",
            "platform": "GeeksforGeeks",
            "chapterId": 7,
            "chapterTitle": "Dynamic Programming (DP)",
            "topicId": "7.4",
            "topicTitle": "String DP (LCS & Alignment)"
          },
          {
            "id": 300,
            "title": "Wildcard Matching",
            "url": "https://leetcode.com/problems/wildcard-matching/",
            "difficulty": "Hard",
            "platform": "LeetCode",
            "chapterId": 7,
            "chapterTitle": "Dynamic Programming (DP)",
            "topicId": "7.4",
            "topicTitle": "String DP (LCS & Alignment)"
          },
          {
            "id": 301,
            "title": "Regular Expression Matching",
            "url": "https://leetcode.com/problems/regular-expression-matching/",
            "difficulty": "Hard",
            "platform": "LeetCode",
            "chapterId": 7,
            "chapterTitle": "Dynamic Programming (DP)",
            "topicId": "7.4",
            "topicTitle": "String DP (LCS & Alignment)"
          },
          {
            "id": 302,
            "title": "Interleaving String",
            "url": "https://leetcode.com/problems/interleaving-string/",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 7,
            "chapterTitle": "Dynamic Programming (DP)",
            "topicId": "7.4",
            "topicTitle": "String DP (LCS & Alignment)"
          }
        ]
      },
      {
        "id": "7.5",
        "title": "Longest Increasing Subsequence (LIS)",
        "expectedCount": 8,
        "problems": [
          {
            "id": 303,
            "title": "Longest Increasing Subsequence (O(N 2 ) and O(NlogN))",
            "url": "https://leetcode.com/problems/longest-increasing-subsequence/",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 7,
            "chapterTitle": "Dynamic Programming (DP)",
            "topicId": "7.5",
            "topicTitle": "Longest Increasing Subsequence (LIS)"
          },
          {
            "id": 304,
            "title": "Print Longest Increasing Subsequence",
            "url": "https://www.geeksforgeeks.org/problems/printing-longest-increasing-subsequence/1",
            "difficulty": "Medium",
            "platform": "GeeksforGeeks",
            "chapterId": 7,
            "chapterTitle": "Dynamic Programming (DP)",
            "topicId": "7.5",
            "topicTitle": "Longest Increasing Subsequence (LIS)"
          },
          {
            "id": 305,
            "title": "Largest Divisible Subset",
            "url": "https://leetcode.com/problems/largest-divisible-subset/",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 7,
            "chapterTitle": "Dynamic Programming (DP)",
            "topicId": "7.5",
            "topicTitle": "Longest Increasing Subsequence (LIS)"
          },
          {
            "id": 306,
            "title": "Longest String Chain",
            "url": "https://leetcode.com/problems/longest-string-chain/",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 7,
            "chapterTitle": "Dynamic Programming (DP)",
            "topicId": "7.5",
            "topicTitle": "Longest Increasing Subsequence (LIS)"
          },
          {
            "id": 307,
            "title": "Longest Bitonic Subsequence",
            "url": "https://leetcode.com/problems/longest-bitonic-subsequence/",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 7,
            "chapterTitle": "Dynamic Programming (DP)",
            "topicId": "7.5",
            "topicTitle": "Longest Increasing Subsequence (LIS)"
          },
          {
            "id": 308,
            "title": "Number of Longest Increasing Subsequences",
            "url": "https://leetcode.com/problems/number-of-longest-increasing-subsequences/",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 7,
            "chapterTitle": "Dynamic Programming (DP)",
            "topicId": "7.5",
            "topicTitle": "Longest Increasing Subsequence (LIS)"
          },
          {
            "id": 309,
            "title": "Russian Doll Envelopes",
            "url": "https://leetcode.com/problems/russian-doll-envelopes/",
            "difficulty": "Hard",
            "platform": "LeetCode",
            "chapterId": 7,
            "chapterTitle": "Dynamic Programming (DP)",
            "topicId": "7.5",
            "topicTitle": "Longest Increasing Subsequence (LIS)"
          },
          {
            "id": 310,
            "title": "Maximum Length of Pair Chain",
            "url": "https://leetcode.com/problems/maximum-length-of-pair-chain",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 7,
            "chapterTitle": "Dynamic Programming (DP)",
            "topicId": "7.5",
            "topicTitle": "Longest Increasing Subsequence (LIS)"
          }
        ]
      },
      {
        "id": "7.6",
        "title": "State-Machine DP",
        "expectedCount": 5,
        "problems": [
          {
            "id": 311,
            "title": "Best Time to Buy and Sell Stock II",
            "url": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 7,
            "chapterTitle": "Dynamic Programming (DP)",
            "topicId": "7.6",
            "topicTitle": "State-Machine DP"
          },
          {
            "id": 312,
            "title": "Best Time to Buy and Sell Stock III",
            "url": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/",
            "difficulty": "Hard",
            "platform": "LeetCode",
            "chapterId": 7,
            "chapterTitle": "Dynamic Programming (DP)",
            "topicId": "7.6",
            "topicTitle": "State-Machine DP"
          },
          {
            "id": 313,
            "title": "Best Time to Buy and Sell Stock IV",
            "url": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv",
            "difficulty": "Hard",
            "platform": "LeetCode",
            "chapterId": 7,
            "chapterTitle": "Dynamic Programming (DP)",
            "topicId": "7.6",
            "topicTitle": "State-Machine DP"
          },
          {
            "id": 314,
            "title": "Best Time to Buy and Sell Stock with Cooldown",
            "url": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 7,
            "chapterTitle": "Dynamic Programming (DP)",
            "topicId": "7.6",
            "topicTitle": "State-Machine DP"
          },
          {
            "id": 315,
            "title": "Best Time to Buy and Sell Stock with Transaction Fee",
            "url": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 7,
            "chapterTitle": "Dynamic Programming (DP)",
            "topicId": "7.6",
            "topicTitle": "State-Machine DP"
          }
        ]
      },
      {
        "id": "7.7",
        "title": "Interval / Partition DP",
        "expectedCount": 8,
        "problems": [
          {
            "id": 316,
            "title": "Matrix Chain Multiplication (MCM)",
            "url": "https://www.geeksforgeeks.org/problems/matrix-chain-multiplication0303/1",
            "difficulty": "Hard",
            "platform": "GeeksforGeeks",
            "chapterId": 7,
            "chapterTitle": "Dynamic Programming (DP)",
            "topicId": "7.7",
            "topicTitle": "Interval / Partition DP"
          },
          {
            "id": 317,
            "title": "Minimum Cost to Cut the Stick",
            "url": "https://leetcode.com/problems/minimum-cost-to-cut-the-stick/",
            "difficulty": "Hard",
            "platform": "LeetCode",
            "chapterId": 7,
            "chapterTitle": "Dynamic Programming (DP)",
            "topicId": "7.7",
            "topicTitle": "Interval / Partition DP"
          },
          {
            "id": 318,
            "title": "Burst Balloons",
            "url": "https://leetcode.com/problems/burst-balloons",
            "difficulty": "Hard",
            "platform": "LeetCode",
            "chapterId": 7,
            "chapterTitle": "Dynamic Programming (DP)",
            "topicId": "7.7",
            "topicTitle": "Interval / Partition DP"
          },
          {
            "id": 319,
            "title": "Evaluate Boolean Expression to True / Boolean Parenthesization",
            "url": "https://www.geeksforgeeks.org/problems/boolean-parenthesization5610/1",
            "difficulty": "Hard",
            "platform": "GeeksforGeeks",
            "chapterId": 7,
            "chapterTitle": "Dynamic Programming (DP)",
            "topicId": "7.7",
            "topicTitle": "Interval / Partition DP"
          },
          {
            "id": 320,
            "title": "Palindrome Partitioning II",
            "url": "https://leetcode.com/problems/palindrome-partitioning-ii/",
            "difficulty": "Hard",
            "platform": "LeetCode",
            "chapterId": 7,
            "chapterTitle": "Dynamic Programming (DP)",
            "topicId": "7.7",
            "topicTitle": "Interval / Partition DP"
          },
          {
            "id": 321,
            "title": "Partition Array for Maximum Sum",
            "url": "https://leetcode.com/problems/partition-array-for-maximum-sum/",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 7,
            "chapterTitle": "Dynamic Programming (DP)",
            "topicId": "7.7",
            "topicTitle": "Interval / Partition DP"
          },
          {
            "id": 322,
            "title": "Super Egg Drop / Egg Dropping Puzzle",
            "url": "https://leetcode.com/problems/super-egg-drop",
            "difficulty": "Hard",
            "platform": "LeetCode",
            "chapterId": 7,
            "chapterTitle": "Dynamic Programming (DP)",
            "topicId": "7.7",
            "topicTitle": "Interval / Partition DP"
          },
          {
            "id": 323,
            "title": "Maximum Profit in Job Scheduling",
            "url": "https://leetcode.com/problems/maximum-profit-in-job-scheduling",
            "difficulty": "Hard",
            "platform": "LeetCode",
            "chapterId": 7,
            "chapterTitle": "Dynamic Programming (DP)",
            "topicId": "7.7",
            "topicTitle": "Interval / Partition DP"
          }
        ]
      }
    ]
  },
  {
    "id": 8,
    "title": "Backtracking & Recursion",
    "expectedCount": 26,
    "icon": "🔄",
    "topics": [
      {
        "id": "8.1",
        "title": "Subsets & Combinations",
        "expectedCount": 8,
        "problems": [
          {
            "id": 324,
            "title": "Subsets",
            "url": "https://leetcode.com/problems/subsets",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 8,
            "chapterTitle": "Backtracking & Recursion",
            "topicId": "8.1",
            "topicTitle": "Subsets & Combinations"
          },
          {
            "id": 325,
            "title": "Subsets II",
            "url": "https://leetcode.com/problems/subsets-ii",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 8,
            "chapterTitle": "Backtracking & Recursion",
            "topicId": "8.1",
            "topicTitle": "Subsets & Combinations"
          },
          {
            "id": 326,
            "title": "Combination Sum",
            "url": "https://leetcode.com/problems/combination-sum",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 8,
            "chapterTitle": "Backtracking & Recursion",
            "topicId": "8.1",
            "topicTitle": "Subsets & Combinations"
          },
          {
            "id": 327,
            "title": "Combination Sum II",
            "url": "https://leetcode.com/problems/combination-sum-ii",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 8,
            "chapterTitle": "Backtracking & Recursion",
            "topicId": "8.1",
            "topicTitle": "Subsets & Combinations"
          },
          {
            "id": 328,
            "title": "Combination Sum III",
            "url": "https://leetcode.com/problems/combination-sum-iii/",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 8,
            "chapterTitle": "Backtracking & Recursion",
            "topicId": "8.1",
            "topicTitle": "Subsets & Combinations"
          },
          {
            "id": 329,
            "title": "Combinations",
            "url": "https://leetcode.com/problems/combinations",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 8,
            "chapterTitle": "Backtracking & Recursion",
            "topicId": "8.1",
            "topicTitle": "Subsets & Combinations"
          },
          {
            "id": 330,
            "title": "Letter Combinations of a Phone Number",
            "url": "https://leetcode.com/problems/letter-combinations-of-a-phone-number",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 8,
            "chapterTitle": "Backtracking & Recursion",
            "topicId": "8.1",
            "topicTitle": "Subsets & Combinations"
          },
          {
            "id": 331,
            "title": "Generate Binary Strings Without Consecutive 1s",
            "url": "https://leetcode.com/problems/generate-binary-strings-without-consecutive-1s/",
            "difficulty": "Easy",
            "platform": "LeetCode",
            "chapterId": 8,
            "chapterTitle": "Backtracking & Recursion",
            "topicId": "8.1",
            "topicTitle": "Subsets & Combinations"
          }
        ]
      },
      {
        "id": "8.2",
        "title": "Permutations & Ordering",
        "expectedCount": 4,
        "problems": [
          {
            "id": 332,
            "title": "Permutations",
            "url": "https://leetcode.com/problems/permutations",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 8,
            "chapterTitle": "Backtracking & Recursion",
            "topicId": "8.2",
            "topicTitle": "Permutations & Ordering"
          },
          {
            "id": 333,
            "title": "Permutations II",
            "url": "https://leetcode.com/problems/permutations-ii",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 8,
            "chapterTitle": "Backtracking & Recursion",
            "topicId": "8.2",
            "topicTitle": "Permutations & Ordering"
          },
          {
            "id": 334,
            "title": "Find the K-th Permutation Sequence",
            "url": "https://leetcode.com/problems/permutation-sequence/",
            "difficulty": "Hard",
            "platform": "LeetCode",
            "chapterId": 8,
            "chapterTitle": "Backtracking & Recursion",
            "topicId": "8.2",
            "topicTitle": "Permutations & Ordering"
          },
          {
            "id": 335,
            "title": "Beautiful Arrangement",
            "url": "https://leetcode.com/problems/beautiful-arrangement",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 8,
            "chapterTitle": "Backtracking & Recursion",
            "topicId": "8.2",
            "topicTitle": "Permutations & Ordering"
          }
        ]
      },
      {
        "id": "8.3",
        "title": "Grid Exploration & Path Search",
        "expectedCount": 5,
        "problems": [
          {
            "id": 336,
            "title": "Word Search",
            "url": "https://leetcode.com/problems/word-search",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 8,
            "chapterTitle": "Backtracking & Recursion",
            "topicId": "8.3",
            "topicTitle": "Grid Exploration & Path Search"
          },
          {
            "id": 337,
            "title": "Rat in a Maze",
            "url": "https://www.geeksforgeeks.org/problems/rat-in-a-maze-problem/1",
            "difficulty": "Medium",
            "platform": "GeeksforGeeks",
            "chapterId": 8,
            "chapterTitle": "Backtracking & Recursion",
            "topicId": "8.3",
            "topicTitle": "Grid Exploration & Path Search"
          },
          {
            "id": 338,
            "title": "Generate Parentheses",
            "url": "https://leetcode.com/problems/generate-parentheses",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 8,
            "chapterTitle": "Backtracking & Recursion",
            "topicId": "8.3",
            "topicTitle": "Grid Exploration & Path Search"
          },
          {
            "id": 339,
            "title": "Restore IP Addresses",
            "url": "https://leetcode.com/problems/restore-ip-addresses/",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 8,
            "chapterTitle": "Backtracking & Recursion",
            "topicId": "8.3",
            "topicTitle": "Grid Exploration & Path Search"
          },
          {
            "id": 340,
            "title": "Palindrome Partitioning",
            "url": "https://leetcode.com/problems/palindrome-partitioning",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 8,
            "chapterTitle": "Backtracking & Recursion",
            "topicId": "8.3",
            "topicTitle": "Grid Exploration & Path Search"
          }
        ]
      },
      {
        "id": "8.4",
        "title": "Constraint Satisfaction & Pruning",
        "expectedCount": 9,
        "problems": [
          {
            "id": 341,
            "title": "N-Queens",
            "url": "https://leetcode.com/problems/n-queens",
            "difficulty": "Hard",
            "platform": "LeetCode",
            "chapterId": 8,
            "chapterTitle": "Backtracking & Recursion",
            "topicId": "8.4",
            "topicTitle": "Constraint Satisfaction & Pruning"
          },
          {
            "id": 342,
            "title": "N-Queens II",
            "url": "https://leetcode.com/problems/n-queens-ii/",
            "difficulty": "Hard",
            "platform": "LeetCode",
            "chapterId": 8,
            "chapterTitle": "Backtracking & Recursion",
            "topicId": "8.4",
            "topicTitle": "Constraint Satisfaction & Pruning"
          },
          {
            "id": 343,
            "title": "Sudoku Solver",
            "url": "https://leetcode.com/problems/sudoku-solver",
            "difficulty": "Hard",
            "platform": "LeetCode",
            "chapterId": 8,
            "chapterTitle": "Backtracking & Recursion",
            "topicId": "8.4",
            "topicTitle": "Constraint Satisfaction & Pruning"
          },
          {
            "id": 344,
            "title": "Word Break II",
            "url": "https://leetcode.com/problems/word-break-ii/",
            "difficulty": "Hard",
            "platform": "LeetCode",
            "chapterId": 8,
            "chapterTitle": "Backtracking & Recursion",
            "topicId": "8.4",
            "topicTitle": "Constraint Satisfaction & Pruning"
          },
          {
            "id": 345,
            "title": "Remove Invalid Parentheses",
            "url": "https://leetcode.com/problems/remove-invalid-parentheses",
            "difficulty": "Hard",
            "platform": "LeetCode",
            "chapterId": 8,
            "chapterTitle": "Backtracking & Recursion",
            "topicId": "8.4",
            "topicTitle": "Constraint Satisfaction & Pruning"
          },
          {
            "id": 346,
            "title": "Expression Add Operators",
            "url": "https://leetcode.com/problems/expression-add-operators/",
            "difficulty": "Hard",
            "platform": "LeetCode",
            "chapterId": 8,
            "chapterTitle": "Backtracking & Recursion",
            "topicId": "8.4",
            "topicTitle": "Constraint Satisfaction & Pruning"
          },
          {
            "id": 347,
            "title": "M-Coloring Problem",
            "url": "https://www.geeksforgeeks.org/problems/m-coloring-problem-1587115620/1",
            "difficulty": "Hard",
            "platform": "GeeksforGeeks",
            "chapterId": 8,
            "chapterTitle": "Backtracking & Recursion",
            "topicId": "8.4",
            "topicTitle": "Constraint Satisfaction & Pruning"
          },
          {
            "id": 348,
            "title": "Matchsticks to Square",
            "url": "https://leetcode.com/problems/matchsticks-to-square/",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 8,
            "chapterTitle": "Backtracking & Recursion",
            "topicId": "8.4",
            "topicTitle": "Constraint Satisfaction & Pruning"
          },
          {
            "id": 349,
            "title": "Partition to K Equal Sum Subsets",
            "url": "https://leetcode.com/problems/partition-to-k-equal-sum-subsets/",
            "difficulty": "Hard",
            "platform": "LeetCode",
            "chapterId": 8,
            "chapterTitle": "Backtracking & Recursion",
            "topicId": "8.4",
            "topicTitle": "Constraint Satisfaction & Pruning"
          }
        ]
      }
    ]
  },
  {
    "id": 9,
    "title": "Tries",
    "expectedCount": 9,
    "icon": "🌳",
    "topics": [
      {
        "id": "9.1",
        "title": "Prefix Matching & Word Dictionaries",
        "expectedCount": 7,
        "problems": [
          {
            "id": 350,
            "title": "Implement Trie (Prefix Tree)",
            "url": "https://leetcode.com/problems/implement-trie-prefix-tree",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 9,
            "chapterTitle": "Tries",
            "topicId": "9.1",
            "topicTitle": "Prefix Matching & Word Dictionaries"
          },
          {
            "id": 351,
            "title": "Implement Trie II (Prefix Count & Erase)",
            "url": "https://leetcode.com/problems/implement-trie-ii/",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 9,
            "chapterTitle": "Tries",
            "topicId": "9.1",
            "topicTitle": "Prefix Matching & Word Dictionaries"
          },
          {
            "id": 352,
            "title": "Longest Word with All Prefixes",
            "url": "https://leetcode.com/problems/longest-word-with-all-prefixes/",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 9,
            "chapterTitle": "Tries",
            "topicId": "9.1",
            "topicTitle": "Prefix Matching & Word Dictionaries"
          },
          {
            "id": 353,
            "title": "Design Add and Search Words Data Structure",
            "url": "https://leetcode.com/problems/design-add-and-search-words-data-structure",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 9,
            "chapterTitle": "Tries",
            "topicId": "9.1",
            "topicTitle": "Prefix Matching & Word Dictionaries"
          },
          {
            "id": 354,
            "title": "Word Search II",
            "url": "https://leetcode.com/problems/word-search-ii",
            "difficulty": "Hard",
            "platform": "LeetCode",
            "chapterId": 9,
            "chapterTitle": "Tries",
            "topicId": "9.1",
            "topicTitle": "Prefix Matching & Word Dictionaries"
          },
          {
            "id": 355,
            "title": "Number of Distinct Substrings in a String",
            "url": "https://leetcode.com/problems/number-of-distinct-substrings-in-a-string/",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 9,
            "chapterTitle": "Tries",
            "topicId": "9.1",
            "topicTitle": "Prefix Matching & Word Dictionaries"
          },
          {
            "id": 356,
            "title": "Replace Words",
            "url": "https://leetcode.com/problems/replace-words/",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 9,
            "chapterTitle": "Tries",
            "topicId": "9.1",
            "topicTitle": "Prefix Matching & Word Dictionaries"
          }
        ]
      },
      {
        "id": "9.2",
        "title": "Bitwise / Binary Trie",
        "expectedCount": 2,
        "problems": [
          {
            "id": 357,
            "title": "Maximum XOR of Two Numbers in an Array",
            "url": "https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 9,
            "chapterTitle": "Tries",
            "topicId": "9.2",
            "topicTitle": "Bitwise / Binary Trie"
          },
          {
            "id": 358,
            "title": "Maximum XOR with an Element from Array (Offline Queries)",
            "url": "https://leetcode.com/problems/maximum-xor-with-an-element-from-array/",
            "difficulty": "Hard",
            "platform": "LeetCode",
            "chapterId": 9,
            "chapterTitle": "Tries",
            "topicId": "9.2",
            "topicTitle": "Bitwise / Binary Trie"
          }
        ]
      }
    ]
  },
  {
    "id": 10,
    "title": "Bit Manipulation & Number Theory",
    "expectedCount": 19,
    "icon": "🧮",
    "topics": [
      {
        "id": "10.1",
        "title": "Bit Masking & Arithmetic Bit Hacks",
        "expectedCount": 11,
        "problems": [
          {
            "id": 359,
            "title": "Check if i-th Bit is Set or Not",
            "url": "https://www.geeksforgeeks.org/problems/check-whether-k-th-bit-is-set-or-not-1587115620/1",
            "difficulty": "Easy",
            "platform": "GeeksforGeeks",
            "chapterId": 10,
            "chapterTitle": "Bit Manipulation & Number Theory",
            "topicId": "10.1",
            "topicTitle": "Bit Masking & Arithmetic Bit Hacks"
          },
          {
            "id": 360,
            "title": "Set/Unset the Rightmost Unset Bit",
            "url": "https://www.geeksforgeeks.org/problems/set-the-rightmost-unset-bit4436/1",
            "difficulty": "Easy",
            "platform": "GeeksforGeeks",
            "chapterId": 10,
            "chapterTitle": "Bit Manipulation & Number Theory",
            "topicId": "10.1",
            "topicTitle": "Bit Masking & Arithmetic Bit Hacks"
          },
          {
            "id": 361,
            "title": "Power of 2",
            "url": "https://www.geeksforgeeks.org/problems/power-of-2-1587115620/1",
            "difficulty": "Easy",
            "platform": "GeeksforGeeks",
            "chapterId": 10,
            "chapterTitle": "Bit Manipulation & Number Theory",
            "topicId": "10.1",
            "topicTitle": "Bit Masking & Arithmetic Bit Hacks"
          },
          {
            "id": 362,
            "title": "Counting Bits",
            "url": "https://leetcode.com/problems/counting-bits",
            "difficulty": "Easy",
            "platform": "LeetCode",
            "chapterId": 10,
            "chapterTitle": "Bit Manipulation & Number Theory",
            "topicId": "10.1",
            "topicTitle": "Bit Masking & Arithmetic Bit Hacks"
          },
          {
            "id": 363,
            "title": "Single Number I",
            "url": "https://leetcode.com/problems/single-number-i/",
            "difficulty": "Easy",
            "platform": "LeetCode",
            "chapterId": 10,
            "chapterTitle": "Bit Manipulation & Number Theory",
            "topicId": "10.1",
            "topicTitle": "Bit Masking & Arithmetic Bit Hacks"
          },
          {
            "id": 364,
            "title": "Single Number II",
            "url": "https://leetcode.com/problems/single-number-ii/",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 10,
            "chapterTitle": "Bit Manipulation & Number Theory",
            "topicId": "10.1",
            "topicTitle": "Bit Masking & Arithmetic Bit Hacks"
          },
          {
            "id": 365,
            "title": "Single Number III",
            "url": "https://leetcode.com/problems/single-number-iii/",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 10,
            "chapterTitle": "Bit Manipulation & Number Theory",
            "topicId": "10.1",
            "topicTitle": "Bit Masking & Arithmetic Bit Hacks"
          },
          {
            "id": 366,
            "title": "Find XOR of Numbers in Range [L, R]",
            "url": "https://www.geeksforgeeks.org/problems/find-xor-of-numbers-from-l-to-r/1",
            "difficulty": "Medium",
            "platform": "GeeksforGeeks",
            "chapterId": 10,
            "chapterTitle": "Bit Manipulation & Number Theory",
            "topicId": "10.1",
            "topicTitle": "Bit Masking & Arithmetic Bit Hacks"
          },
          {
            "id": 367,
            "title": "Minimum Bit Flips to Convert Number",
            "url": "https://leetcode.com/problems/minimum-bit-flips-to-convert-number/",
            "difficulty": "Easy",
            "platform": "LeetCode",
            "chapterId": 10,
            "chapterTitle": "Bit Manipulation & Number Theory",
            "topicId": "10.1",
            "topicTitle": "Bit Masking & Arithmetic Bit Hacks"
          },
          {
            "id": 368,
            "title": "Sum of Two Integers (Without + or -)",
            "url": "https://leetcode.com/problems/sum-of-two-integers/",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 10,
            "chapterTitle": "Bit Manipulation & Number Theory",
            "topicId": "10.1",
            "topicTitle": "Bit Masking & Arithmetic Bit Hacks"
          },
          {
            "id": 369,
            "title": "Reverse Bits",
            "url": "https://leetcode.com/problems/reverse-bits",
            "difficulty": "Easy",
            "platform": "LeetCode",
            "chapterId": 10,
            "chapterTitle": "Bit Manipulation & Number Theory",
            "topicId": "10.1",
            "topicTitle": "Bit Masking & Arithmetic Bit Hacks"
          }
        ]
      },
      {
        "id": "10.2",
        "title": "Number Theory, Primes & Exponential Math",
        "expectedCount": 8,
        "problems": [
          {
            "id": 370,
            "title": "Pow(x, n) (Binary Exponentiation)",
            "url": "https://leetcode.com/problems/pow/",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 10,
            "chapterTitle": "Bit Manipulation & Number Theory",
            "topicId": "10.2",
            "topicTitle": "Number Theory, Primes & Exponential Math"
          },
          {
            "id": 371,
            "title": "Count Primes (Sieve of Eratosthenes)",
            "url": "https://leetcode.com/problems/count-primes/",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 10,
            "chapterTitle": "Bit Manipulation & Number Theory",
            "topicId": "10.2",
            "topicTitle": "Number Theory, Primes & Exponential Math"
          },
          {
            "id": 372,
            "title": "Prime Factorization of a Number",
            "url": "https://www.geeksforgeeks.org/problems/prime-factors5052/1",
            "difficulty": "Easy",
            "platform": "GeeksforGeeks",
            "chapterId": 10,
            "chapterTitle": "Bit Manipulation & Number Theory",
            "topicId": "10.2",
            "topicTitle": "Number Theory, Primes & Exponential Math"
          },
          {
            "id": 373,
            "title": "Divide Two Integers without Multiplication/Division",
            "url": "https://leetcode.com/problems/divide-two-integers-without-multiplication/",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 10,
            "chapterTitle": "Bit Manipulation & Number Theory",
            "topicId": "10.2",
            "topicTitle": "Number Theory, Primes & Exponential Math"
          },
          {
            "id": 374,
            "title": "Greatest Common Divisor of Strings / Euclidean GCD",
            "url": "https://leetcode.com/problems/greatest-common-divisor-of-strings/",
            "difficulty": "Easy",
            "platform": "LeetCode",
            "chapterId": 10,
            "chapterTitle": "Bit Manipulation & Number Theory",
            "topicId": "10.2",
            "topicTitle": "Number Theory, Primes & Exponential Math"
          },
          {
            "id": 375,
            "title": "Factorial Trailing Zeroes",
            "url": "https://leetcode.com/problems/factorial-trailing-zeroes/",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 10,
            "chapterTitle": "Bit Manipulation & Number Theory",
            "topicId": "10.2",
            "topicTitle": "Number Theory, Primes & Exponential Math"
          },
          {
            "id": 376,
            "title": "Reverse Integer",
            "url": "https://leetcode.com/problems/reverse-integer",
            "difficulty": "Medium",
            "platform": "LeetCode",
            "chapterId": 10,
            "chapterTitle": "Bit Manipulation & Number Theory",
            "topicId": "10.2",
            "topicTitle": "Number Theory, Primes & Exponential Math"
          },
          {
            "id": 377,
            "title": "Palindrome Number",
            "url": "https://leetcode.com/problems/palindrome-number",
            "difficulty": "Easy",
            "platform": "LeetCode",
            "chapterId": 10,
            "chapterTitle": "Bit Manipulation & Number Theory",
            "topicId": "10.2",
            "topicTitle": "Number Theory, Primes & Exponential Math"
          }
        ]
      }
    ]
  }
];

export const CURATED_300_PROBLEMS: CuratedProblemItem[] = [
  {
    "id": 1,
    "title": "Two Sum",
    "url": "https://leetcode.com/problems/two-sum",
    "difficulty": "Easy",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays & Strings",
    "topicId": "1.1",
    "topicTitle": "Two Pointers (Opposite Direction & Convergence)"
  },
  {
    "id": 2,
    "title": "Two Sum II - Input Array Is Sorted",
    "url": "https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays & Strings",
    "topicId": "1.1",
    "topicTitle": "Two Pointers (Opposite Direction & Convergence)"
  },
  {
    "id": 3,
    "title": "3Sum",
    "url": "https://leetcode.com/problems/3sum",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays & Strings",
    "topicId": "1.1",
    "topicTitle": "Two Pointers (Opposite Direction & Convergence)"
  },
  {
    "id": 4,
    "title": "3Sum Closest",
    "url": "https://leetcode.com/problems/3sum-closest",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays & Strings",
    "topicId": "1.1",
    "topicTitle": "Two Pointers (Opposite Direction & Convergence)"
  },
  {
    "id": 5,
    "title": "4Sum",
    "url": "https://leetcode.com/problems/4sum/",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays & Strings",
    "topicId": "1.1",
    "topicTitle": "Two Pointers (Opposite Direction & Convergence)"
  },
  {
    "id": 6,
    "title": "Container With Most Water",
    "url": "https://leetcode.com/problems/container-with-most-water",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays & Strings",
    "topicId": "1.1",
    "topicTitle": "Two Pointers (Opposite Direction & Convergence)"
  },
  {
    "id": 7,
    "title": "Trapping Rainwater",
    "url": "https://leetcode.com/problems/trapping-rain-water/",
    "difficulty": "Hard",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays & Strings",
    "topicId": "1.1",
    "topicTitle": "Two Pointers (Opposite Direction & Convergence)"
  },
  {
    "id": 8,
    "title": "Boats to Save People",
    "url": "https://leetcode.com/problems/boats-to-save-people/",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays & Strings",
    "topicId": "1.1",
    "topicTitle": "Two Pointers (Opposite Direction & Convergence)"
  },
  {
    "id": 9,
    "title": "Valid Palindrome",
    "url": "https://leetcode.com/problems/valid-palindrome",
    "difficulty": "Easy",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays & Strings",
    "topicId": "1.1",
    "topicTitle": "Two Pointers (Opposite Direction & Convergence)"
  },
  {
    "id": 10,
    "title": "Reverse Words in a String",
    "url": "https://leetcode.com/problems/reverse-words-in-a-string",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays & Strings",
    "topicId": "1.1",
    "topicTitle": "Two Pointers (Opposite Direction & Convergence)"
  },
  {
    "id": 11,
    "title": "Move Zeroes",
    "url": "https://leetcode.com/problems/move-zeroes",
    "difficulty": "Easy",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays & Strings",
    "topicId": "1.2",
    "topicTitle": "Fast & Slow Pointers (In-place Array Compaction)"
  },
  {
    "id": 12,
    "title": "Remove Element",
    "url": "https://leetcode.com/problems/remove-element/",
    "difficulty": "Easy",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays & Strings",
    "topicId": "1.2",
    "topicTitle": "Fast & Slow Pointers (In-place Array Compaction)"
  },
  {
    "id": 13,
    "title": "Find the Duplicate Number",
    "url": "https://leetcode.com/problems/find-the-duplicate-number",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays & Strings",
    "topicId": "1.2",
    "topicTitle": "Fast & Slow Pointers (In-place Array Compaction)"
  },
  {
    "id": 14,
    "title": "Sort Colors / Dutch National Flag",
    "url": "https://leetcode.com/problems/sort-colors",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays & Strings",
    "topicId": "1.2",
    "topicTitle": "Fast & Slow Pointers (In-place Array Compaction)"
  },
  {
    "id": 15,
    "title": "Squares of a Sorted Array",
    "url": "https://leetcode.com/problems/squares-of-a-sorted-array",
    "difficulty": "Easy",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays & Strings",
    "topicId": "1.2",
    "topicTitle": "Fast & Slow Pointers (In-place Array Compaction)"
  },
  {
    "id": 16,
    "title": "Maximum Points You Can Obtain from Cards",
    "url": "https://leetcode.com/problems/maximum-points-you-can-obtain-from-cards",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays & Strings",
    "topicId": "1.3",
    "topicTitle": "Sliding Window (Fixed & Dynamic Size)"
  },
  {
    "id": 17,
    "title": "Longest Substring Without Repeating Characters",
    "url": "https://leetcode.com/problems/longest-substring-without-repeating-characters",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays & Strings",
    "topicId": "1.3",
    "topicTitle": "Sliding Window (Fixed & Dynamic Size)"
  },
  {
    "id": 18,
    "title": "Max Consecutive Ones III",
    "url": "https://leetcode.com/problems/max-consecutive-ones-iii/",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays & Strings",
    "topicId": "1.3",
    "topicTitle": "Sliding Window (Fixed & Dynamic Size)"
  },
  {
    "id": 19,
    "title": "Fruit Into Baskets",
    "url": "https://leetcode.com/problems/fruit-into-baskets/",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays & Strings",
    "topicId": "1.3",
    "topicTitle": "Sliding Window (Fixed & Dynamic Size)"
  },
  {
    "id": 20,
    "title": "Longest Repeating Character Replacement",
    "url": "https://leetcode.com/problems/longest-repeating-character-replacement",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays & Strings",
    "topicId": "1.3",
    "topicTitle": "Sliding Window (Fixed & Dynamic Size)"
  },
  {
    "id": 21,
    "title": "Minimum Size Subarray Sum",
    "url": "https://leetcode.com/problems/minimum-size-subarray-sum/",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays & Strings",
    "topicId": "1.3",
    "topicTitle": "Sliding Window (Fixed & Dynamic Size)"
  },
  {
    "id": 22,
    "title": "Permutation in String",
    "url": "https://leetcode.com/problems/permutation-in-string/",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays & Strings",
    "topicId": "1.3",
    "topicTitle": "Sliding Window (Fixed & Dynamic Size)"
  },
  {
    "id": 23,
    "title": "Find All Anagrams in a String",
    "url": "https://leetcode.com/problems/find-all-anagrams-in-a-string",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays & Strings",
    "topicId": "1.3",
    "topicTitle": "Sliding Window (Fixed & Dynamic Size)"
  },
  {
    "id": 24,
    "title": "Minimum Window Substring",
    "url": "https://leetcode.com/problems/minimum-window-substring",
    "difficulty": "Hard",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays & Strings",
    "topicId": "1.3",
    "topicTitle": "Sliding Window (Fixed & Dynamic Size)"
  },
  {
    "id": 25,
    "title": "Minimum Window Subsequence",
    "url": "https://leetcode.com/problems/minimum-window-subsequence/",
    "difficulty": "Hard",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays & Strings",
    "topicId": "1.3",
    "topicTitle": "Sliding Window (Fixed & Dynamic Size)"
  },
  {
    "id": 26,
    "title": "Smallest Window Containing All Characters",
    "url": "https://www.geeksforgeeks.org/problems/smallest-window-in-a-string-containing-all-the-characters-of-another-string-1587115621/1",
    "difficulty": "Hard",
    "platform": "GeeksforGeeks",
    "chapterId": 1,
    "chapterTitle": "Arrays & Strings",
    "topicId": "1.3",
    "topicTitle": "Sliding Window (Fixed & Dynamic Size)"
  },
  {
    "id": 27,
    "title": "Substring with Concatenation of All Words",
    "url": "https://leetcode.com/problems/substring-with-concatenation-of-all-words/",
    "difficulty": "Hard",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays & Strings",
    "topicId": "1.3",
    "topicTitle": "Sliding Window (Fixed & Dynamic Size)"
  },
  {
    "id": 28,
    "title": "Subarray Sum Equals K",
    "url": "https://leetcode.com/problems/subarray-sum-equals-k",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays & Strings",
    "topicId": "1.4",
    "topicTitle": "Prefix Sums & Frequency Hashing"
  },
  {
    "id": 29,
    "title": "Subarray Sums Divisible by K",
    "url": "https://leetcode.com/problems/subarray-sums-divisible-by-k",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays & Strings",
    "topicId": "1.4",
    "topicTitle": "Prefix Sums & Frequency Hashing"
  },
  {
    "id": 30,
    "title": "Largest Subarray with 0 Sum",
    "url": "https://www.geeksforgeeks.org/problems/largest-subarray-with-0-sum/1",
    "difficulty": "Medium",
    "platform": "GeeksforGeeks",
    "chapterId": 1,
    "chapterTitle": "Arrays & Strings",
    "topicId": "1.4",
    "topicTitle": "Prefix Sums & Frequency Hashing"
  },
  {
    "id": 31,
    "title": "Binary Subarrays With Sum",
    "url": "https://leetcode.com/problems/binary-subarrays-with-sum/",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays & Strings",
    "topicId": "1.4",
    "topicTitle": "Prefix Sums & Frequency Hashing"
  },
  {
    "id": 32,
    "title": "Count Number of Nice Subarrays",
    "url": "https://leetcode.com/problems/count-number-of-nice-subarrays/",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays & Strings",
    "topicId": "1.4",
    "topicTitle": "Prefix Sums & Frequency Hashing"
  },
  {
    "id": 33,
    "title": "Number of Substrings Containing All Three Characters",
    "url": "https://leetcode.com/problems/number-of-substrings-containing-all-three-characters/",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays & Strings",
    "topicId": "1.4",
    "topicTitle": "Prefix Sums & Frequency Hashing"
  },
  {
    "id": 34,
    "title": "Product of Array Except Self",
    "url": "https://leetcode.com/problems/product-of-array-except-self",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays & Strings",
    "topicId": "1.4",
    "topicTitle": "Prefix Sums & Frequency Hashing"
  },
  {
    "id": 35,
    "title": "Longest Consecutive Sequence",
    "url": "https://leetcode.com/problems/longest-consecutive-sequence",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays & Strings",
    "topicId": "1.4",
    "topicTitle": "Prefix Sums & Frequency Hashing"
  },
  {
    "id": 36,
    "title": "Continuous Subarray Sum",
    "url": "https://leetcode.com/problems/continuous-subarray-sum/",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays & Strings",
    "topicId": "1.4",
    "topicTitle": "Prefix Sums & Frequency Hashing"
  },
  {
    "id": 37,
    "title": "Sum of Beauty of All Substrings",
    "url": "https://leetcode.com/problems/sum-of-beauty-of-all-substrings/",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays & Strings",
    "topicId": "1.4",
    "topicTitle": "Prefix Sums & Frequency Hashing"
  },
  {
    "id": 38,
    "title": "Set Matrix Zeroes",
    "url": "https://leetcode.com/problems/remove-duplicates-from-sorted-array",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays & Strings",
    "topicId": "1.5",
    "topicTitle": "Array Transformations & State Matrix"
  },
  {
    "id": 39,
    "title": "Pascal's Triangle I",
    "url": "https://leetcode.com/problems/pascal-s-triangle-i/",
    "difficulty": "Easy",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays & Strings",
    "topicId": "1.5",
    "topicTitle": "Array Transformations & State Matrix"
  },
  {
    "id": 40,
    "title": "Next Permutation",
    "url": "https://leetcode.com/problems/next-permutation",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays & Strings",
    "topicId": "1.5",
    "topicTitle": "Array Transformations & State Matrix"
  },
  {
    "id": 41,
    "title": "Rotate Image / Rotate Matrix by 90 Degrees",
    "url": "https://leetcode.com/problems/rotate-image",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays & Strings",
    "topicId": "1.5",
    "topicTitle": "Array Transformations & State Matrix"
  },
  {
    "id": 42,
    "title": "Spiral Matrix",
    "url": "https://leetcode.com/problems/spiral-matrix",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays & Strings",
    "topicId": "1.5",
    "topicTitle": "Array Transformations & State Matrix"
  },
  {
    "id": 43,
    "title": "Rearrange Array Elements by Sign",
    "url": "https://leetcode.com/problems/rearrange-array-elements-by-sign/",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays & Strings",
    "topicId": "1.5",
    "topicTitle": "Array Transformations & State Matrix"
  },
  {
    "id": 44,
    "title": "First Missing Positive",
    "url": "https://leetcode.com/problems/first-missing-positive",
    "difficulty": "Hard",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays & Strings",
    "topicId": "1.5",
    "topicTitle": "Array Transformations & State Matrix"
  },
  {
    "id": 45,
    "title": "Game of Life",
    "url": "https://leetcode.com/problems/game-of-life",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays & Strings",
    "topicId": "1.5",
    "topicTitle": "Array Transformations & State Matrix"
  },
  {
    "id": 46,
    "title": "Leaders in an Array",
    "url": "https://www.geeksforgeeks.org/problems/leaders-in-an-array-1587115620/1",
    "difficulty": "Easy",
    "platform": "GeeksforGeeks",
    "chapterId": 1,
    "chapterTitle": "Arrays & Strings",
    "topicId": "1.5",
    "topicTitle": "Array Transformations & State Matrix"
  },
  {
    "id": 47,
    "title": "Maximum Subarray / Kadane's Algorithm",
    "url": "https://leetcode.com/problems/maximum-subarray",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays & Strings",
    "topicId": "1.5",
    "topicTitle": "Array Transformations & State Matrix"
  },
  {
    "id": 48,
    "title": "Maximum Product Subarray",
    "url": "https://leetcode.com/problems/maximum-product-subarray",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays & Strings",
    "topicId": "1.5",
    "topicTitle": "Array Transformations & State Matrix"
  },
  {
    "id": 49,
    "title": "Majority Element (> N/2)",
    "url": "https://leetcode.com/problems/majority-element",
    "difficulty": "Easy",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays & Strings",
    "topicId": "1.5",
    "topicTitle": "Array Transformations & State Matrix"
  },
  {
    "id": 50,
    "title": "Majority Element (> N/3)",
    "url": "https://leetcode.com/problems/majority-element",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays & Strings",
    "topicId": "1.5",
    "topicTitle": "Array Transformations & State Matrix"
  },
  {
    "id": 51,
    "title": "Merge Intervals",
    "url": "https://leetcode.com/problems/merge-intervals",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays & Strings",
    "topicId": "1.6",
    "topicTitle": "Intervals & Sweep-Line"
  },
  {
    "id": 52,
    "title": "Insert Interval",
    "url": "https://leetcode.com/problems/insert-interval",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays & Strings",
    "topicId": "1.6",
    "topicTitle": "Intervals & Sweep-Line"
  },
  {
    "id": 53,
    "title": "Non-overlapping Intervals",
    "url": "https://leetcode.com/problems/non-overlapping-intervals",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays & Strings",
    "topicId": "1.6",
    "topicTitle": "Intervals & Sweep-Line"
  },
  {
    "id": 54,
    "title": "Meeting Rooms",
    "url": "https://leetcode.com/problems/meeting-rooms",
    "difficulty": "Easy",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays & Strings",
    "topicId": "1.6",
    "topicTitle": "Intervals & Sweep-Line"
  },
  {
    "id": 55,
    "title": "Meeting Rooms II",
    "url": "https://leetcode.com/problems/meeting-rooms-ii",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays & Strings",
    "topicId": "1.6",
    "topicTitle": "Intervals & Sweep-Line"
  },
  {
    "id": 56,
    "title": "Minimum Number of Arrows to Burst Balloons",
    "url": "https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays & Strings",
    "topicId": "1.6",
    "topicTitle": "Intervals & Sweep-Line"
  },
  {
    "id": 57,
    "title": "Car Pooling",
    "url": "https://leetcode.com/problems/car-pooling/",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays & Strings",
    "topicId": "1.6",
    "topicTitle": "Intervals & Sweep-Line"
  },
  {
    "id": 58,
    "title": "Minimum Platforms Required for Railway",
    "url": "https://www.geeksforgeeks.org/problems/minimum-platforms-1587115620/1",
    "difficulty": "Medium",
    "platform": "GeeksforGeeks",
    "chapterId": 1,
    "chapterTitle": "Arrays & Strings",
    "topicId": "1.6",
    "topicTitle": "Intervals & Sweep-Line"
  },
  {
    "id": 59,
    "title": "N Meetings in One Room",
    "url": "https://www.geeksforgeeks.org/problems/n-meetings-in-one-room-1587115620/1",
    "difficulty": "Easy",
    "platform": "GeeksforGeeks",
    "chapterId": 1,
    "chapterTitle": "Arrays & Strings",
    "topicId": "1.6",
    "topicTitle": "Intervals & Sweep-Line"
  },
  {
    "id": 60,
    "title": "Job Sequencing Problem",
    "url": "https://www.geeksforgeeks.org/problems/job-sequencing-problem-1587115620/1",
    "difficulty": "Medium",
    "platform": "GeeksforGeeks",
    "chapterId": 1,
    "chapterTitle": "Arrays & Strings",
    "topicId": "1.6",
    "topicTitle": "Intervals & Sweep-Line"
  },
  {
    "id": 61,
    "title": "Binary Search",
    "url": "https://leetcode.com/problems/binary-search",
    "difficulty": "Easy",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays & Strings",
    "topicId": "1.7",
    "topicTitle": "Binary Search (Index & Monotonic Functions)"
  },
  {
    "id": 62,
    "title": "Lower Bound / Upper Bound",
    "url": "https://leetcode.com/problems/lower-bound/",
    "difficulty": "Easy",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays & Strings",
    "topicId": "1.7",
    "topicTitle": "Binary Search (Index & Monotonic Functions)"
  },
  {
    "id": 63,
    "title": "Search Insert Position",
    "url": "https://leetcode.com/problems/search-insert-position/",
    "difficulty": "Easy",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays & Strings",
    "topicId": "1.7",
    "topicTitle": "Binary Search (Index & Monotonic Functions)"
  },
  {
    "id": 64,
    "title": "Floor and Ceil in Sorted Array",
    "url": "https://leetcode.com/problems/floor-and-ceil-in-sorted-array/",
    "difficulty": "Easy",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays & Strings",
    "topicId": "1.7",
    "topicTitle": "Binary Search (Index & Monotonic Functions)"
  },
  {
    "id": 65,
    "title": "Find First and Last Position of Element in Sorted Array",
    "url": "https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays & Strings",
    "topicId": "1.7",
    "topicTitle": "Binary Search (Index & Monotonic Functions)"
  },
  {
    "id": 66,
    "title": "Search in Rotated Sorted Array",
    "url": "https://leetcode.com/problems/search-in-rotated-sorted-array",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays & Strings",
    "topicId": "1.7",
    "topicTitle": "Binary Search (Index & Monotonic Functions)"
  },
  {
    "id": 67,
    "title": "Search in Rotated Sorted Array II",
    "url": "https://leetcode.com/problems/search-in-rotated-sorted-array-ii/",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays & Strings",
    "topicId": "1.7",
    "topicTitle": "Binary Search (Index & Monotonic Functions)"
  },
  {
    "id": 68,
    "title": "Find Minimum in Rotated Sorted Array",
    "url": "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays & Strings",
    "topicId": "1.7",
    "topicTitle": "Binary Search (Index & Monotonic Functions)"
  },
  {
    "id": 69,
    "title": "Single Element in a Sorted Array",
    "url": "https://leetcode.com/problems/single-element-in-a-sorted-array/",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays & Strings",
    "topicId": "1.7",
    "topicTitle": "Binary Search (Index & Monotonic Functions)"
  },
  {
    "id": 70,
    "title": "Find Peak Element",
    "url": "https://www.geeksforgeeks.org/make-array-elements-equal-minimum-cost/",
    "difficulty": "Medium",
    "platform": "GeeksforGeeks",
    "chapterId": 1,
    "chapterTitle": "Arrays & Strings",
    "topicId": "1.7",
    "topicTitle": "Binary Search (Index & Monotonic Functions)"
  },
  {
    "id": 71,
    "title": "Search a 2D Matrix",
    "url": "https://leetcode.com/problems/search-a-2d-matrix",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays & Strings",
    "topicId": "1.7",
    "topicTitle": "Binary Search (Index & Monotonic Functions)"
  },
  {
    "id": 72,
    "title": "Search a 2D Matrix II",
    "url": "https://leetcode.com/problems/search-a-2d-matrix-ii/",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays & Strings",
    "topicId": "1.7",
    "topicTitle": "Binary Search (Index & Monotonic Functions)"
  },
  {
    "id": 73,
    "title": "Find Square Root of a Number",
    "url": "https://leetcode.com/problems/sqrtx/",
    "difficulty": "Easy",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays & Strings",
    "topicId": "1.8",
    "topicTitle": "Binary Search on Answer Space (Predicate(Mid) == True)"
  },
  {
    "id": 74,
    "title": "Find Nth Root of a Number",
    "url": "https://www.geeksforgeeks.org/problems/find-nth-root-of-m5843/1",
    "difficulty": "Medium",
    "platform": "GeeksforGeeks",
    "chapterId": 1,
    "chapterTitle": "Arrays & Strings",
    "topicId": "1.8",
    "topicTitle": "Binary Search on Answer Space (Predicate(Mid) == True)"
  },
  {
    "id": 75,
    "title": "Koko Eating Bananas",
    "url": "https://leetcode.com/problems/koko-eating-bananas/",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays & Strings",
    "topicId": "1.8",
    "topicTitle": "Binary Search on Answer Space (Predicate(Mid) == True)"
  },
  {
    "id": 76,
    "title": "Minimum Days to Make M Bouquets",
    "url": "https://leetcode.com/problems/minimum-days-to-make-m-bouquets/",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays & Strings",
    "topicId": "1.8",
    "topicTitle": "Binary Search on Answer Space (Predicate(Mid) == True)"
  },
  {
    "id": 77,
    "title": "Find the Smallest Divisor",
    "url": "https://leetcode.com/problems/find-the-smallest-divisor/",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays & Strings",
    "topicId": "1.8",
    "topicTitle": "Binary Search on Answer Space (Predicate(Mid) == True)"
  },
  {
    "id": 78,
    "title": "Capacity to Ship Packages Within D Days",
    "url": "https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays & Strings",
    "topicId": "1.8",
    "topicTitle": "Binary Search on Answer Space (Predicate(Mid) == True)"
  },
  {
    "id": 79,
    "title": "Aggressive Cows",
    "url": "https://leetcode.com/problems/aggressive-cows/",
    "difficulty": "Hard",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays & Strings",
    "topicId": "1.8",
    "topicTitle": "Binary Search on Answer Space (Predicate(Mid) == True)"
  },
  {
    "id": 80,
    "title": "Book Allocation Problem / Allocate Minimum Pages",
    "url": "https://www.geeksforgeeks.org/problems/allocate-minimum-number-of-pages0937/1",
    "difficulty": "Hard",
    "platform": "GeeksforGeeks",
    "chapterId": 1,
    "chapterTitle": "Arrays & Strings",
    "topicId": "1.8",
    "topicTitle": "Binary Search on Answer Space (Predicate(Mid) == True)"
  },
  {
    "id": 81,
    "title": "Split Array Largest Sum",
    "url": "https://leetcode.com/problems/split-array-largest-sum",
    "difficulty": "Hard",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays & Strings",
    "topicId": "1.8",
    "topicTitle": "Binary Search on Answer Space (Predicate(Mid) == True)"
  },
  {
    "id": 82,
    "title": "Painter's Partition",
    "url": "https://leetcode.com/problems/painter-s-partition/",
    "difficulty": "Hard",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays & Strings",
    "topicId": "1.8",
    "topicTitle": "Binary Search on Answer Space (Predicate(Mid) == True)"
  },
  {
    "id": 83,
    "title": "Median of Two Sorted Arrays",
    "url": "https://leetcode.com/problems/median-of-two-sorted-arrays",
    "difficulty": "Hard",
    "platform": "LeetCode",
    "chapterId": 1,
    "chapterTitle": "Arrays & Strings",
    "topicId": "1.8",
    "topicTitle": "Binary Search on Answer Space (Predicate(Mid) == True)"
  },
  {
    "id": 84,
    "title": "K-th Element of Two Sorted Arrays",
    "url": "https://www.geeksforgeeks.org/problems/k-th-element-of-two-sorted-arrays1317/1",
    "difficulty": "Medium",
    "platform": "GeeksforGeeks",
    "chapterId": 1,
    "chapterTitle": "Arrays & Strings",
    "topicId": "1.8",
    "topicTitle": "Binary Search on Answer Space (Predicate(Mid) == True)"
  },
  {
    "id": 85,
    "title": "Reverse Linked List",
    "url": "https://leetcode.com/problems/reverse-linked-list",
    "difficulty": "Easy",
    "platform": "LeetCode",
    "chapterId": 2,
    "chapterTitle": "Linked Lists",
    "topicId": "2.1",
    "topicTitle": "In-place Pointer Reversal"
  },
  {
    "id": 86,
    "title": "Reverse Linked List II",
    "url": "https://leetcode.com/problems/reverse-linked-list-ii",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 2,
    "chapterTitle": "Linked Lists",
    "topicId": "2.1",
    "topicTitle": "In-place Pointer Reversal"
  },
  {
    "id": 87,
    "title": "Reverse Nodes in k-Group",
    "url": "https://leetcode.com/problems/reverse-nodes-in-k-group",
    "difficulty": "Hard",
    "platform": "LeetCode",
    "chapterId": 2,
    "chapterTitle": "Linked Lists",
    "topicId": "2.1",
    "topicTitle": "In-place Pointer Reversal"
  },
  {
    "id": 88,
    "title": "Rotate List",
    "url": "https://leetcode.com/problems/rotate-list",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 2,
    "chapterTitle": "Linked Lists",
    "topicId": "2.1",
    "topicTitle": "In-place Pointer Reversal"
  },
  {
    "id": 89,
    "title": "Swap Nodes in Pairs",
    "url": "https://leetcode.com/problems/swap-nodes-in-pairs",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 2,
    "chapterTitle": "Linked Lists",
    "topicId": "2.1",
    "topicTitle": "In-place Pointer Reversal"
  },
  {
    "id": 90,
    "title": "Palindrome Linked List",
    "url": "https://leetcode.com/problems/palindrome-linked-list",
    "difficulty": "Easy",
    "platform": "LeetCode",
    "chapterId": 2,
    "chapterTitle": "Linked Lists",
    "topicId": "2.1",
    "topicTitle": "In-place Pointer Reversal"
  },
  {
    "id": 91,
    "title": "Middle of the Linked List",
    "url": "https://leetcode.com/problems/middle-of-the-linked-list",
    "difficulty": "Easy",
    "platform": "LeetCode",
    "chapterId": 2,
    "chapterTitle": "Linked Lists",
    "topicId": "2.2",
    "topicTitle": "Fast & Slow Pointers (Floyd’s Cycle Finding)"
  },
  {
    "id": 92,
    "title": "Detect a Loop in Linked List",
    "url": "https://leetcode.com/problems/detect-a-loop-in-linked-list/",
    "difficulty": "Easy",
    "platform": "LeetCode",
    "chapterId": 2,
    "chapterTitle": "Linked Lists",
    "topicId": "2.2",
    "topicTitle": "Fast & Slow Pointers (Floyd’s Cycle Finding)"
  },
  {
    "id": 93,
    "title": "Find Starting Point of Loop in Linked List",
    "url": "https://leetcode.com/problems/find-starting-point-of-loop-in-linked-list/",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 2,
    "chapterTitle": "Linked Lists",
    "topicId": "2.2",
    "topicTitle": "Fast & Slow Pointers (Floyd’s Cycle Finding)"
  },
  {
    "id": 94,
    "title": "Length of Loop in Linked List",
    "url": "https://leetcode.com/problems/length-of-loop-in-linked-list/",
    "difficulty": "Easy",
    "platform": "LeetCode",
    "chapterId": 2,
    "chapterTitle": "Linked Lists",
    "topicId": "2.2",
    "topicTitle": "Fast & Slow Pointers (Floyd’s Cycle Finding)"
  },
  {
    "id": 95,
    "title": "Reorder List",
    "url": "https://leetcode.com/problems/reorder-list",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 2,
    "chapterTitle": "Linked Lists",
    "topicId": "2.2",
    "topicTitle": "Fast & Slow Pointers (Floyd’s Cycle Finding)"
  },
  {
    "id": 96,
    "title": "Remove Nth Node from End of List",
    "url": "https://leetcode.com/problems/remove-nth-node-from-end-of-list",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 2,
    "chapterTitle": "Linked Lists",
    "topicId": "2.3",
    "topicTitle": "Node Splicing & Multi-Pointer Reorganization"
  },
  {
    "id": 97,
    "title": "Delete the Middle Node of Linked List",
    "url": "https://leetcode.com/problems/delete-the-middle-node-of-a-linked-list/",
    "difficulty": "Easy",
    "platform": "LeetCode",
    "chapterId": 2,
    "chapterTitle": "Linked Lists",
    "topicId": "2.3",
    "topicTitle": "Node Splicing & Multi-Pointer Reorganization"
  },
  {
    "id": 98,
    "title": "Segregate Odd and Even Nodes in Linked List",
    "url": "https://leetcode.com/problems/segregate-odd-and-even-nodes-in-linked-list/",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 2,
    "chapterTitle": "Linked Lists",
    "topicId": "2.3",
    "topicTitle": "Node Splicing & Multi-Pointer Reorganization"
  },
  {
    "id": 99,
    "title": "Sort a Linked List (Merge Sort on LL)",
    "url": "https://leetcode.com/problems/sort-list/",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 2,
    "chapterTitle": "Linked Lists",
    "topicId": "2.3",
    "topicTitle": "Node Splicing & Multi-Pointer Reorganization"
  },
  {
    "id": 100,
    "title": "Sort a Linked List of 0s, 1s, and 2s",
    "url": "https://leetcode.com/problems/sort-a-linked-list-of-0s-1s-and-2s/",
    "difficulty": "Easy",
    "platform": "LeetCode",
    "chapterId": 2,
    "chapterTitle": "Linked Lists",
    "topicId": "2.3",
    "topicTitle": "Node Splicing & Multi-Pointer Reorganization"
  },
  {
    "id": 101,
    "title": "Find Intersection Point of Y Linked Lists",
    "url": "https://leetcode.com/problems/intersection-of-two-linked-lists/",
    "difficulty": "Easy",
    "platform": "LeetCode",
    "chapterId": 2,
    "chapterTitle": "Linked Lists",
    "topicId": "2.3",
    "topicTitle": "Node Splicing & Multi-Pointer Reorganization"
  },
  {
    "id": 102,
    "title": "Add 1 to a Number Represented as Linked List",
    "url": "https://leetcode.com/problems/add-1-to-a-number-represented-as-linked-list/",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 2,
    "chapterTitle": "Linked Lists",
    "topicId": "2.3",
    "topicTitle": "Node Splicing & Multi-Pointer Reorganization"
  },
  {
    "id": 103,
    "title": "Add Two Numbers",
    "url": "https://leetcode.com/problems/add-two-numbers",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 2,
    "chapterTitle": "Linked Lists",
    "topicId": "2.3",
    "topicTitle": "Node Splicing & Multi-Pointer Reorganization"
  },
  {
    "id": 104,
    "title": "Flattening of a Linked List",
    "url": "https://leetcode.com/problems/flattening-of-a-linked-list/",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 2,
    "chapterTitle": "Linked Lists",
    "topicId": "2.3",
    "topicTitle": "Node Splicing & Multi-Pointer Reorganization"
  },
  {
    "id": 105,
    "title": "Flatten a Multilevel Doubly Linked List",
    "url": "https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 2,
    "chapterTitle": "Linked Lists",
    "topicId": "2.3",
    "topicTitle": "Node Splicing & Multi-Pointer Reorganization"
  },
  {
    "id": 106,
    "title": "Copy List with Random Pointer",
    "url": "https://leetcode.com/problems/copy-list-with-random-pointer",
    "difficulty": "Hard",
    "platform": "LeetCode",
    "chapterId": 2,
    "chapterTitle": "Linked Lists",
    "topicId": "2.3",
    "topicTitle": "Node Splicing & Multi-Pointer Reorganization"
  },
  {
    "id": 107,
    "title": "Merge k Sorted Lists",
    "url": "https://leetcode.com/problems/merge-k-sorted-lists",
    "difficulty": "Hard",
    "platform": "LeetCode",
    "chapterId": 2,
    "chapterTitle": "Linked Lists",
    "topicId": "2.3",
    "topicTitle": "Node Splicing & Multi-Pointer Reorganization"
  },
  {
    "id": 108,
    "title": "Next Greater Element I",
    "url": "https://leetcode.com/problems/next-greater-element-i",
    "difficulty": "Easy",
    "platform": "LeetCode",
    "chapterId": 3,
    "chapterTitle": "Stacks & Queues",
    "topicId": "3.1",
    "topicTitle": "Monotonic Stack (Next/Previous Greater/Smaller)"
  },
  {
    "id": 109,
    "title": "Next Greater Element II",
    "url": "https://leetcode.com/problems/next-greater-element-ii/",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 3,
    "chapterTitle": "Stacks & Queues",
    "topicId": "3.1",
    "topicTitle": "Monotonic Stack (Next/Previous Greater/Smaller)"
  },
  {
    "id": 110,
    "title": "Next Smaller Element",
    "url": "https://www.geeksforgeeks.org/next-smaller-element/",
    "difficulty": "Medium",
    "platform": "GeeksforGeeks",
    "chapterId": 3,
    "chapterTitle": "Stacks & Queues",
    "topicId": "3.1",
    "topicTitle": "Monotonic Stack (Next/Previous Greater/Smaller)"
  },
  {
    "id": 111,
    "title": "Daily Temperatures",
    "url": "https://leetcode.com/problems/daily-temperatures",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 3,
    "chapterTitle": "Stacks & Queues",
    "topicId": "3.1",
    "topicTitle": "Monotonic Stack (Next/Previous Greater/Smaller)"
  },
  {
    "id": 112,
    "title": "Online Stock Span",
    "url": "https://leetcode.com/problems/online-stock-span",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 3,
    "chapterTitle": "Stacks & Queues",
    "topicId": "3.1",
    "topicTitle": "Monotonic Stack (Next/Previous Greater/Smaller)"
  },
  {
    "id": 113,
    "title": "Sum of Subarray Minimums",
    "url": "https://leetcode.com/problems/sum-of-subarray-minimums",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 3,
    "chapterTitle": "Stacks & Queues",
    "topicId": "3.1",
    "topicTitle": "Monotonic Stack (Next/Previous Greater/Smaller)"
  },
  {
    "id": 114,
    "title": "Sum of Subarray Ranges",
    "url": "https://leetcode.com/problems/sum-of-subarray-ranges/",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 3,
    "chapterTitle": "Stacks & Queues",
    "topicId": "3.1",
    "topicTitle": "Monotonic Stack (Next/Previous Greater/Smaller)"
  },
  {
    "id": 115,
    "title": "Largest Rectangle in Histogram",
    "url": "https://leetcode.com/problems/largest-rectangle-in-histogram",
    "difficulty": "Hard",
    "platform": "LeetCode",
    "chapterId": 3,
    "chapterTitle": "Stacks & Queues",
    "topicId": "3.1",
    "topicTitle": "Monotonic Stack (Next/Previous Greater/Smaller)"
  },
  {
    "id": 116,
    "title": "Maximal Rectangle / Max Rectangle with all 1s",
    "url": "https://leetcode.com/problems/maximal-rectangle",
    "difficulty": "Hard",
    "platform": "LeetCode",
    "chapterId": 3,
    "chapterTitle": "Stacks & Queues",
    "topicId": "3.1",
    "topicTitle": "Monotonic Stack (Next/Previous Greater/Smaller)"
  },
  {
    "id": 117,
    "title": "Remove K Digits",
    "url": "https://leetcode.com/problems/remove-k-digits",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 3,
    "chapterTitle": "Stacks & Queues",
    "topicId": "3.1",
    "topicTitle": "Monotonic Stack (Next/Previous Greater/Smaller)"
  },
  {
    "id": 118,
    "title": "Asteroid Collision",
    "url": "https://leetcode.com/problems/asteroid-collision",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 3,
    "chapterTitle": "Stacks & Queues",
    "topicId": "3.1",
    "topicTitle": "Monotonic Stack (Next/Previous Greater/Smaller)"
  },
  {
    "id": 119,
    "title": "132 Pattern",
    "url": "https://leetcode.com/problems/132-pattern/",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 3,
    "chapterTitle": "Stacks & Queues",
    "topicId": "3.1",
    "topicTitle": "Monotonic Stack (Next/Previous Greater/Smaller)"
  },
  {
    "id": 120,
    "title": "Sliding Window Maximum",
    "url": "https://leetcode.com/problems/sliding-window-maximum",
    "difficulty": "Hard",
    "platform": "LeetCode",
    "chapterId": 3,
    "chapterTitle": "Stacks & Queues",
    "topicId": "3.2",
    "topicTitle": "Monotonic Queue / Deque"
  },
  {
    "id": 121,
    "title": "Constrained Subsequence Sum",
    "url": "https://leetcode.com/problems/constrained-subsequence-sum/",
    "difficulty": "Hard",
    "platform": "LeetCode",
    "chapterId": 3,
    "chapterTitle": "Stacks & Queues",
    "topicId": "3.2",
    "topicTitle": "Monotonic Queue / Deque"
  },
  {
    "id": 122,
    "title": "Shortest Subarray with Sum at Least K",
    "url": "https://leetcode.com/problems/shortest-subarray-with-sum-at-least-k/",
    "difficulty": "Hard",
    "platform": "LeetCode",
    "chapterId": 3,
    "chapterTitle": "Stacks & Queues",
    "topicId": "3.2",
    "topicTitle": "Monotonic Queue / Deque"
  },
  {
    "id": 123,
    "title": "Max Value of Equation",
    "url": "https://leetcode.com/problems/max-value-of-equation",
    "difficulty": "Hard",
    "platform": "LeetCode",
    "chapterId": 3,
    "chapterTitle": "Stacks & Queues",
    "topicId": "3.2",
    "topicTitle": "Monotonic Queue / Deque"
  },
  {
    "id": 124,
    "title": "Valid Parentheses",
    "url": "https://leetcode.com/problems/valid-parentheses",
    "difficulty": "Easy",
    "platform": "LeetCode",
    "chapterId": 3,
    "chapterTitle": "Stacks & Queues",
    "topicId": "3.3",
    "topicTitle": "Parsing, Evaluation & State Buffers"
  },
  {
    "id": 125,
    "title": "Minimum Add to Make Parentheses Valid",
    "url": "https://leetcode.com/problems/minimum-add-to-make-parentheses-valid/",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 3,
    "chapterTitle": "Stacks & Queues",
    "topicId": "3.3",
    "topicTitle": "Parsing, Evaluation & State Buffers"
  },
  {
    "id": 126,
    "title": "Remove Outermost Parentheses",
    "url": "https://leetcode.com/problems/remove-outermost-parentheses/",
    "difficulty": "Easy",
    "platform": "LeetCode",
    "chapterId": 3,
    "chapterTitle": "Stacks & Queues",
    "topicId": "3.3",
    "topicTitle": "Parsing, Evaluation & State Buffers"
  },
  {
    "id": 127,
    "title": "Evaluate Reverse Polish Notation",
    "url": "https://leetcode.com/problems/evaluate-reverse-polish-notation",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 3,
    "chapterTitle": "Stacks & Queues",
    "topicId": "3.3",
    "topicTitle": "Parsing, Evaluation & State Buffers"
  },
  {
    "id": 128,
    "title": "Basic Calculator",
    "url": "https://leetcode.com/problems/basic-calculator",
    "difficulty": "Hard",
    "platform": "LeetCode",
    "chapterId": 3,
    "chapterTitle": "Stacks & Queues",
    "topicId": "3.3",
    "topicTitle": "Parsing, Evaluation & State Buffers"
  },
  {
    "id": 129,
    "title": "Basic Calculator II",
    "url": "https://leetcode.com/problems/basic-calculator-ii",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 3,
    "chapterTitle": "Stacks & Queues",
    "topicId": "3.3",
    "topicTitle": "Parsing, Evaluation & State Buffers"
  },
  {
    "id": 130,
    "title": "Decode String",
    "url": "https://leetcode.com/problems/decode-string",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 3,
    "chapterTitle": "Stacks & Queues",
    "topicId": "3.3",
    "topicTitle": "Parsing, Evaluation & State Buffers"
  },
  {
    "id": 131,
    "title": "Simplify Path",
    "url": "https://leetcode.com/problems/simplify-path",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 3,
    "chapterTitle": "Stacks & Queues",
    "topicId": "3.3",
    "topicTitle": "Parsing, Evaluation & State Buffers"
  },
  {
    "id": 132,
    "title": "Minimum Remove to Make Valid Parentheses",
    "url": "https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 3,
    "chapterTitle": "Stacks & Queues",
    "topicId": "3.3",
    "topicTitle": "Parsing, Evaluation & State Buffers"
  },
  {
    "id": 133,
    "title": "Min Stack",
    "url": "https://leetcode.com/problems/min-stack",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 3,
    "chapterTitle": "Stacks & Queues",
    "topicId": "3.4",
    "topicTitle": "Specialized Abstract Data Structure Design"
  },
  {
    "id": 134,
    "title": "Stack with Find Middle Operation",
    "url": "https://leetcode.com/problems/stack-with-find-middle-operation/",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 3,
    "chapterTitle": "Stacks & Queues",
    "topicId": "3.4",
    "topicTitle": "Specialized Abstract Data Structure Design"
  },
  {
    "id": 135,
    "title": "Implement Stack using Queues",
    "url": "https://leetcode.com/problems/implement-stack-using-queues",
    "difficulty": "Easy",
    "platform": "LeetCode",
    "chapterId": 3,
    "chapterTitle": "Stacks & Queues",
    "topicId": "3.4",
    "topicTitle": "Specialized Abstract Data Structure Design"
  },
  {
    "id": 136,
    "title": "Implement Queue using Stacks",
    "url": "https://leetcode.com/problems/implement-queue-using-stacks",
    "difficulty": "Easy",
    "platform": "LeetCode",
    "chapterId": 3,
    "chapterTitle": "Stacks & Queues",
    "topicId": "3.4",
    "topicTitle": "Specialized Abstract Data Structure Design"
  },
  {
    "id": 137,
    "title": "Design Circular Queue",
    "url": "https://leetcode.com/problems/design-circular-queue/",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 3,
    "chapterTitle": "Stacks & Queues",
    "topicId": "3.4",
    "topicTitle": "Specialized Abstract Data Structure Design"
  },
  {
    "id": 138,
    "title": "LRU Cache",
    "url": "https://leetcode.com/problems/lru-cache",
    "difficulty": "Hard",
    "platform": "LeetCode",
    "chapterId": 3,
    "chapterTitle": "Stacks & Queues",
    "topicId": "3.4",
    "topicTitle": "Specialized Abstract Data Structure Design"
  },
  {
    "id": 139,
    "title": "LFU Cache",
    "url": "https://leetcode.com/problems/lfu-cache/",
    "difficulty": "Hard",
    "platform": "LeetCode",
    "chapterId": 3,
    "chapterTitle": "Stacks & Queues",
    "topicId": "3.4",
    "topicTitle": "Specialized Abstract Data Structure Design"
  },
  {
    "id": 140,
    "title": "Maximum Frequency Stack",
    "url": "https://leetcode.com/problems/maximum-frequency-stack",
    "difficulty": "Hard",
    "platform": "LeetCode",
    "chapterId": 3,
    "chapterTitle": "Stacks & Queues",
    "topicId": "3.4",
    "topicTitle": "Specialized Abstract Data Structure Design"
  },
  {
    "id": 141,
    "title": "The Celebrity Problem",
    "url": "https://www.geeksforgeeks.org/problems/the-celebrity-problem/1",
    "difficulty": "Medium",
    "platform": "GeeksforGeeks",
    "chapterId": 3,
    "chapterTitle": "Stacks & Queues",
    "topicId": "3.4",
    "topicTitle": "Specialized Abstract Data Structure Design"
  },
  {
    "id": 142,
    "title": "Binary Tree Preorder, Inorder, Postorder Traversal",
    "url": "https://leetcode.com/problems/binary-tree-preorder-inorder-postorder-traversal/",
    "difficulty": "Easy",
    "platform": "LeetCode",
    "chapterId": 4,
    "chapterTitle": "Binary Trees & Binary Search Trees (BST)",
    "topicId": "4.1",
    "topicTitle": "Tree DFS (Traversals & Path Accumulation)"
  },
  {
    "id": 143,
    "title": "Maximum Depth / Height of Binary Tree",
    "url": "https://www.geeksforgeeks.org/problems/height-of-binary-tree/1",
    "difficulty": "Easy",
    "platform": "GeeksforGeeks",
    "chapterId": 4,
    "chapterTitle": "Binary Trees & Binary Search Trees (BST)",
    "topicId": "4.1",
    "topicTitle": "Tree DFS (Traversals & Path Accumulation)"
  },
  {
    "id": 144,
    "title": "Balanced Binary Tree Check",
    "url": "https://leetcode.com/problems/balanced-binary-tree-check/",
    "difficulty": "Easy",
    "platform": "LeetCode",
    "chapterId": 4,
    "chapterTitle": "Binary Trees & Binary Search Trees (BST)",
    "topicId": "4.1",
    "topicTitle": "Tree DFS (Traversals & Path Accumulation)"
  },
  {
    "id": 145,
    "title": "Diameter of Binary Tree",
    "url": "https://leetcode.com/problems/diameter-of-binary-tree",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 4,
    "chapterTitle": "Binary Trees & Binary Search Trees (BST)",
    "topicId": "4.1",
    "topicTitle": "Tree DFS (Traversals & Path Accumulation)"
  },
  {
    "id": 146,
    "title": "Binary Tree Maximum Path Sum",
    "url": "https://leetcode.com/problems/binary-tree-maximum-path-sum",
    "difficulty": "Hard",
    "platform": "LeetCode",
    "chapterId": 4,
    "chapterTitle": "Binary Trees & Binary Search Trees (BST)",
    "topicId": "4.1",
    "topicTitle": "Tree DFS (Traversals & Path Accumulation)"
  },
  {
    "id": 147,
    "title": "Check if Two Trees are Identical / Same Tree",
    "url": "https://leetcode.com/problems/same-tree",
    "difficulty": "Easy",
    "platform": "LeetCode",
    "chapterId": 4,
    "chapterTitle": "Binary Trees & Binary Search Trees (BST)",
    "topicId": "4.1",
    "topicTitle": "Tree DFS (Traversals & Path Accumulation)"
  },
  {
    "id": 148,
    "title": "Symmetric Tree",
    "url": "https://leetcode.com/problems/symmetric-tree",
    "difficulty": "Easy",
    "platform": "LeetCode",
    "chapterId": 4,
    "chapterTitle": "Binary Trees & Binary Search Trees (BST)",
    "topicId": "4.1",
    "topicTitle": "Tree DFS (Traversals & Path Accumulation)"
  },
  {
    "id": 149,
    "title": "Root to Leaf Paths in Binary Tree",
    "url": "https://leetcode.com/problems/binary-tree-paths/",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 4,
    "chapterTitle": "Binary Trees & Binary Search Trees (BST)",
    "topicId": "4.1",
    "topicTitle": "Tree DFS (Traversals & Path Accumulation)"
  },
  {
    "id": 150,
    "title": "Path Sum II",
    "url": "https://leetcode.com/problems/path-sum-ii",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 4,
    "chapterTitle": "Binary Trees & Binary Search Trees (BST)",
    "topicId": "4.1",
    "topicTitle": "Tree DFS (Traversals & Path Accumulation)"
  },
  {
    "id": 151,
    "title": "Sum Root to Leaf Numbers",
    "url": "https://leetcode.com/problems/sum-root-to-leaf-numbers/",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 4,
    "chapterTitle": "Binary Trees & Binary Search Trees (BST)",
    "topicId": "4.1",
    "topicTitle": "Tree DFS (Traversals & Path Accumulation)"
  },
  {
    "id": 152,
    "title": "Lowest Common Ancestor in Binary Tree",
    "url": "https://leetcode.com/problems/lowest-common-ancestor-in-binary-tree/",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 4,
    "chapterTitle": "Binary Trees & Binary Search Trees (BST)",
    "topicId": "4.1",
    "topicTitle": "Tree DFS (Traversals & Path Accumulation)"
  },
  {
    "id": 153,
    "title": "Count Total Nodes in a Complete Binary Tree",
    "url": "https://leetcode.com/problems/count-complete-tree-nodes/",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 4,
    "chapterTitle": "Binary Trees & Binary Search Trees (BST)",
    "topicId": "4.1",
    "topicTitle": "Tree DFS (Traversals & Path Accumulation)"
  },
  {
    "id": 154,
    "title": "Flatten Binary Tree to Linked List",
    "url": "https://leetcode.com/problems/flatten-binary-tree-to-linked-list",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 4,
    "chapterTitle": "Binary Trees & Binary Search Trees (BST)",
    "topicId": "4.1",
    "topicTitle": "Tree DFS (Traversals & Path Accumulation)"
  },
  {
    "id": 155,
    "title": "Binary Tree Level Order Traversal",
    "url": "https://leetcode.com/problems/binary-tree-level-order-traversal",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 4,
    "chapterTitle": "Binary Trees & Binary Search Trees (BST)",
    "topicId": "4.2",
    "topicTitle": "Tree BFS (Level-Order & Radial Propagation)"
  },
  {
    "id": 156,
    "title": "Binary Tree Zigzag Level Order Traversal",
    "url": "https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 4,
    "chapterTitle": "Binary Trees & Binary Search Trees (BST)",
    "topicId": "4.2",
    "topicTitle": "Tree BFS (Level-Order & Radial Propagation)"
  },
  {
    "id": 157,
    "title": "Average of Levels in Binary Tree",
    "url": "https://leetcode.com/problems/average-of-levels-in-binary-tree/",
    "difficulty": "Easy",
    "platform": "LeetCode",
    "chapterId": 4,
    "chapterTitle": "Binary Trees & Binary Search Trees (BST)",
    "topicId": "4.2",
    "topicTitle": "Tree BFS (Level-Order & Radial Propagation)"
  },
  {
    "id": 158,
    "title": "Right Side View of Binary Tree",
    "url": "https://leetcode.com/problems/right-side-view-of-binary-tree/",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 4,
    "chapterTitle": "Binary Trees & Binary Search Trees (BST)",
    "topicId": "4.2",
    "topicTitle": "Tree BFS (Level-Order & Radial Propagation)"
  },
  {
    "id": 159,
    "title": "Left View of Binary Tree",
    "url": "https://www.geeksforgeeks.org/problems/left-view-of-binary-tree/1",
    "difficulty": "Medium",
    "platform": "GeeksforGeeks",
    "chapterId": 4,
    "chapterTitle": "Binary Trees & Binary Search Trees (BST)",
    "topicId": "4.2",
    "topicTitle": "Tree BFS (Level-Order & Radial Propagation)"
  },
  {
    "id": 160,
    "title": "Top View of Binary Tree",
    "url": "https://www.geeksforgeeks.org/problems/top-view-of-binary-tree/1",
    "difficulty": "Medium",
    "platform": "GeeksforGeeks",
    "chapterId": 4,
    "chapterTitle": "Binary Trees & Binary Search Trees (BST)",
    "topicId": "4.2",
    "topicTitle": "Tree BFS (Level-Order & Radial Propagation)"
  },
  {
    "id": 161,
    "title": "Bottom View of Binary Tree",
    "url": "https://www.geeksforgeeks.org/problems/bottom-view-of-binary-tree/1",
    "difficulty": "Medium",
    "platform": "GeeksforGeeks",
    "chapterId": 4,
    "chapterTitle": "Binary Trees & Binary Search Trees (BST)",
    "topicId": "4.2",
    "topicTitle": "Tree BFS (Level-Order & Radial Propagation)"
  },
  {
    "id": 162,
    "title": "Boundary Traversal of Binary Tree",
    "url": "https://leetcode.com/problems/boundary-traversal-of-binary-tree/",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 4,
    "chapterTitle": "Binary Trees & Binary Search Trees (BST)",
    "topicId": "4.2",
    "topicTitle": "Tree BFS (Level-Order & Radial Propagation)"
  },
  {
    "id": 163,
    "title": "Vertical Order Traversal of a Binary Tree",
    "url": "https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree",
    "difficulty": "Hard",
    "platform": "LeetCode",
    "chapterId": 4,
    "chapterTitle": "Binary Trees & Binary Search Trees (BST)",
    "topicId": "4.2",
    "topicTitle": "Tree BFS (Level-Order & Radial Propagation)"
  },
  {
    "id": 164,
    "title": "All Nodes Distance K in Binary Tree",
    "url": "https://leetcode.com/problems/all-nodes-distance-k-in-binary-tree",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 4,
    "chapterTitle": "Binary Trees & Binary Search Trees (BST)",
    "topicId": "4.2",
    "topicTitle": "Tree BFS (Level-Order & Radial Propagation)"
  },
  {
    "id": 165,
    "title": "Minimum Time Taken to Burn Binary Tree",
    "url": "https://www.geeksforgeeks.org/problems/burning-tree/1",
    "difficulty": "Hard",
    "platform": "GeeksforGeeks",
    "chapterId": 4,
    "chapterTitle": "Binary Trees & Binary Search Trees (BST)",
    "topicId": "4.2",
    "topicTitle": "Tree BFS (Level-Order & Radial Propagation)"
  },
  {
    "id": 166,
    "title": "Populating Next Right Pointers in Each Node",
    "url": "https://leetcode.com/problems/populating-next-right-pointers-in-each-node",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 4,
    "chapterTitle": "Binary Trees & Binary Search Trees (BST)",
    "topicId": "4.2",
    "topicTitle": "Tree BFS (Level-Order & Radial Propagation)"
  },
  {
    "id": 167,
    "title": "Construct Binary Tree from Preorder and Inorder Traversal",
    "url": "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 4,
    "chapterTitle": "Binary Trees & Binary Search Trees (BST)",
    "topicId": "4.3",
    "topicTitle": "Tree Serialization & Construction"
  },
  {
    "id": 168,
    "title": "Construct Binary Tree from Postorder and Inorder Traversal",
    "url": "https://leetcode.com/problems/construct-binary-tree-from-postorder-and-inorder-traversal/",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 4,
    "chapterTitle": "Binary Trees & Binary Search Trees (BST)",
    "topicId": "4.3",
    "topicTitle": "Tree Serialization & Construction"
  },
  {
    "id": 169,
    "title": "Serialize and Deserialize Binary Tree",
    "url": "https://leetcode.com/problems/serialize-and-deserialize-binary-tree",
    "difficulty": "Hard",
    "platform": "LeetCode",
    "chapterId": 4,
    "chapterTitle": "Binary Trees & Binary Search Trees (BST)",
    "topicId": "4.3",
    "topicTitle": "Tree Serialization & Construction"
  },
  {
    "id": 170,
    "title": "Construct Binary Tree String Bracket Representation",
    "url": "https://www.geeksforgeeks.org/construct-binary-tree-string-bracket-representation/",
    "difficulty": "Medium",
    "platform": "GeeksforGeeks",
    "chapterId": 4,
    "chapterTitle": "Binary Trees & Binary Search Trees (BST)",
    "topicId": "4.3",
    "topicTitle": "Tree Serialization & Construction"
  },
  {
    "id": 171,
    "title": "Search in a Binary Search Tree",
    "url": "https://leetcode.com/problems/search-in-a-binary-search-tree/",
    "difficulty": "Easy",
    "platform": "LeetCode",
    "chapterId": 4,
    "chapterTitle": "Binary Trees & Binary Search Trees (BST)",
    "topicId": "4.4",
    "topicTitle": "BST Properties & Ordered Operations"
  },
  {
    "id": 172,
    "title": "Insert into a Binary Search Tree",
    "url": "https://leetcode.com/problems/insert-into-a-binary-search-tree/",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 4,
    "chapterTitle": "Binary Trees & Binary Search Trees (BST)",
    "topicId": "4.4",
    "topicTitle": "BST Properties & Ordered Operations"
  },
  {
    "id": 173,
    "title": "Ceil and Floor in a BST",
    "url": "https://leetcode.com/problems/ceil-and-floor-in-a-bst/",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 4,
    "chapterTitle": "Binary Trees & Binary Search Trees (BST)",
    "topicId": "4.4",
    "topicTitle": "BST Properties & Ordered Operations"
  },
  {
    "id": 174,
    "title": "Delete Node in a BST",
    "url": "https://leetcode.com/problems/delete-node-in-a-bst",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 4,
    "chapterTitle": "Binary Trees & Binary Search Trees (BST)",
    "topicId": "4.4",
    "topicTitle": "BST Properties & Ordered Operations"
  },
  {
    "id": 175,
    "title": "Validate Binary Search Tree",
    "url": "https://leetcode.com/problems/validate-binary-search-tree",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 4,
    "chapterTitle": "Binary Trees & Binary Search Trees (BST)",
    "topicId": "4.4",
    "topicTitle": "BST Properties & Ordered Operations"
  },
  {
    "id": 176,
    "title": "Lowest Common Ancestor in a BST",
    "url": "https://www.geeksforgeeks.org/problems/lowest-common-ancestor-in-a-bst/1",
    "difficulty": "Easy",
    "platform": "GeeksforGeeks",
    "chapterId": 4,
    "chapterTitle": "Binary Trees & Binary Search Trees (BST)",
    "topicId": "4.4",
    "topicTitle": "BST Properties & Ordered Operations"
  },
  {
    "id": 177,
    "title": "Kth Smallest Element in a BST",
    "url": "https://leetcode.com/problems/kth-smallest-element-in-a-bst",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 4,
    "chapterTitle": "Binary Trees & Binary Search Trees (BST)",
    "topicId": "4.4",
    "topicTitle": "BST Properties & Ordered Operations"
  },
  {
    "id": 178,
    "title": "Inorder Successor and Predecessor in BST",
    "url": "https://leetcode.com/problems/inorder-successor-and-predecessor-in-bst/",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 4,
    "chapterTitle": "Binary Trees & Binary Search Trees (BST)",
    "topicId": "4.4",
    "topicTitle": "BST Properties & Ordered Operations"
  },
  {
    "id": 179,
    "title": "Binary Search Tree Iterator",
    "url": "https://leetcode.com/problems/binary-search-tree-iterator",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 4,
    "chapterTitle": "Binary Trees & Binary Search Trees (BST)",
    "topicId": "4.4",
    "topicTitle": "BST Properties & Ordered Operations"
  },
  {
    "id": 180,
    "title": "Two Sum IV - Input is a BST",
    "url": "https://leetcode.com/problems/two-sum-iv-input-is-a-bst/",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 4,
    "chapterTitle": "Binary Trees & Binary Search Trees (BST)",
    "topicId": "4.4",
    "topicTitle": "BST Properties & Ordered Operations"
  },
  {
    "id": 181,
    "title": "Construct BST from Preorder Traversal",
    "url": "https://leetcode.com/problems/construct-bst-from-preorder-traversal/",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 4,
    "chapterTitle": "Binary Trees & Binary Search Trees (BST)",
    "topicId": "4.4",
    "topicTitle": "BST Properties & Ordered Operations"
  },
  {
    "id": 182,
    "title": "Convert Sorted Array to Binary Search Tree",
    "url": "https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree",
    "difficulty": "Easy",
    "platform": "LeetCode",
    "chapterId": 4,
    "chapterTitle": "Binary Trees & Binary Search Trees (BST)",
    "topicId": "4.4",
    "topicTitle": "BST Properties & Ordered Operations"
  },
  {
    "id": 183,
    "title": "Correct BST with Two Nodes Swapped / Recover BST",
    "url": "https://leetcode.com/problems/recover-binary-search-tree/",
    "difficulty": "Hard",
    "platform": "LeetCode",
    "chapterId": 4,
    "chapterTitle": "Binary Trees & Binary Search Trees (BST)",
    "topicId": "4.4",
    "topicTitle": "BST Properties & Ordered Operations"
  },
  {
    "id": 184,
    "title": "Largest BST in Binary Tree",
    "url": "https://www.geeksforgeeks.org/problems/largest-bst/1",
    "difficulty": "Hard",
    "platform": "GeeksforGeeks",
    "chapterId": 4,
    "chapterTitle": "Binary Trees & Binary Search Trees (BST)",
    "topicId": "4.4",
    "topicTitle": "BST Properties & Ordered Operations"
  },
  {
    "id": 185,
    "title": "Kth Largest Element in an Array",
    "url": "https://leetcode.com/problems/kth-largest-element-in-an-array",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 5,
    "chapterTitle": "Heaps & Priority Queues",
    "topicId": "5.1",
    "topicTitle": "Top-K & Extrema Selection"
  },
  {
    "id": 186,
    "title": "Kth Smallest Element in an Array",
    "url": "https://leetcode.com/problems/kth-smallest-element-in-an-array/",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 5,
    "chapterTitle": "Heaps & Priority Queues",
    "topicId": "5.1",
    "topicTitle": "Top-K & Extrema Selection"
  },
  {
    "id": 187,
    "title": "Top K Frequent Elements",
    "url": "https://leetcode.com/problems/top-k-frequent-elements",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 5,
    "chapterTitle": "Heaps & Priority Queues",
    "topicId": "5.1",
    "topicTitle": "Top-K & Extrema Selection"
  },
  {
    "id": 188,
    "title": "Top K Frequent Words",
    "url": "https://leetcode.com/problems/top-k-frequent-words",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 5,
    "chapterTitle": "Heaps & Priority Queues",
    "topicId": "5.1",
    "topicTitle": "Top-K & Extrema Selection"
  },
  {
    "id": 189,
    "title": "Sort K-Sorted Array",
    "url": "https://www.geeksforgeeks.org/problems/nearly-sorted-1587115620/1",
    "difficulty": "Medium",
    "platform": "GeeksforGeeks",
    "chapterId": 5,
    "chapterTitle": "Heaps & Priority Queues",
    "topicId": "5.1",
    "topicTitle": "Top-K & Extrema Selection"
  },
  {
    "id": 190,
    "title": "K Closest Points to Origin",
    "url": "https://leetcode.com/problems/k-closest-points-to-origin",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 5,
    "chapterTitle": "Heaps & Priority Queues",
    "topicId": "5.1",
    "topicTitle": "Top-K & Extrema Selection"
  },
  {
    "id": 191,
    "title": "Reorganize String",
    "url": "https://leetcode.com/problems/reorganize-string",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 5,
    "chapterTitle": "Heaps & Priority Queues",
    "topicId": "5.1",
    "topicTitle": "Top-K & Extrema Selection"
  },
  {
    "id": 192,
    "title": "Hands of Straights",
    "url": "https://leetcode.com/problems/hands-of-straights/",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 5,
    "chapterTitle": "Heaps & Priority Queues",
    "topicId": "5.1",
    "topicTitle": "Top-K & Extrema Selection"
  },
  {
    "id": 193,
    "title": "Find Median from Data Stream",
    "url": "https://leetcode.com/problems/find-median-from-data-stream",
    "difficulty": "Hard",
    "platform": "LeetCode",
    "chapterId": 5,
    "chapterTitle": "Heaps & Priority Queues",
    "topicId": "5.2",
    "topicTitle": "Two Heaps (Dynamic Balancing)"
  },
  {
    "id": 194,
    "title": "Sliding Window Median",
    "url": "https://leetcode.com/problems/sliding-window-median/",
    "difficulty": "Hard",
    "platform": "LeetCode",
    "chapterId": 5,
    "chapterTitle": "Heaps & Priority Queues",
    "topicId": "5.2",
    "topicTitle": "Two Heaps (Dynamic Balancing)"
  },
  {
    "id": 195,
    "title": "IPO",
    "url": "https://leetcode.com/problems/ipo/",
    "difficulty": "Hard",
    "platform": "LeetCode",
    "chapterId": 5,
    "chapterTitle": "Heaps & Priority Queues",
    "topicId": "5.2",
    "topicTitle": "Two Heaps (Dynamic Balancing)"
  },
  {
    "id": 196,
    "title": "Merge K Sorted Lists",
    "url": "https://leetcode.com/problems/merge-k-sorted-lists",
    "difficulty": "Hard",
    "platform": "LeetCode",
    "chapterId": 5,
    "chapterTitle": "Heaps & Priority Queues",
    "topicId": "5.3",
    "topicTitle": "K-Way Merge"
  },
  {
    "id": 197,
    "title": "Merge K Sorted Arrays",
    "url": "https://www.geeksforgeeks.org/problems/merge-k-sorted-arrays/1",
    "difficulty": "Medium",
    "platform": "GeeksforGeeks",
    "chapterId": 5,
    "chapterTitle": "Heaps & Priority Queues",
    "topicId": "5.3",
    "topicTitle": "K-Way Merge"
  },
  {
    "id": 198,
    "title": "Smallest Range Covering Elements from K Lists",
    "url": "https://leetcode.com/problems/smallest-range-covering-elements-from-k-lists",
    "difficulty": "Hard",
    "platform": "LeetCode",
    "chapterId": 5,
    "chapterTitle": "Heaps & Priority Queues",
    "topicId": "5.3",
    "topicTitle": "K-Way Merge"
  },
  {
    "id": 199,
    "title": "Find K Pairs with Smallest Sums",
    "url": "https://leetcode.com/problems/find-k-pairs-with-smallest-sums/",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 5,
    "chapterTitle": "Heaps & Priority Queues",
    "topicId": "5.3",
    "topicTitle": "K-Way Merge"
  },
  {
    "id": 200,
    "title": "Kth Smallest Element in a Sorted Matrix",
    "url": "https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 5,
    "chapterTitle": "Heaps & Priority Queues",
    "topicId": "5.3",
    "topicTitle": "K-Way Merge"
  },
  {
    "id": 201,
    "title": "Task Scheduler",
    "url": "https://leetcode.com/problems/task-scheduler",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 5,
    "chapterTitle": "Heaps & Priority Queues",
    "topicId": "5.4",
    "topicTitle": "Greedy Scheduling & Resource Allocation"
  },
  {
    "id": 202,
    "title": "Minimum Cost of Ropes / Connect N Ropes",
    "url": "https://www.geeksforgeeks.org/problems/minimum-cost-of-ropes-1587115620/1",
    "difficulty": "Easy",
    "platform": "GeeksforGeeks",
    "chapterId": 5,
    "chapterTitle": "Heaps & Priority Queues",
    "topicId": "5.4",
    "topicTitle": "Greedy Scheduling & Resource Allocation"
  },
  {
    "id": 203,
    "title": "Minimum Cost to Hire K Workers",
    "url": "https://leetcode.com/problems/minimum-cost-to-hire-k-workers",
    "difficulty": "Hard",
    "platform": "LeetCode",
    "chapterId": 5,
    "chapterTitle": "Heaps & Priority Queues",
    "topicId": "5.4",
    "topicTitle": "Greedy Scheduling & Resource Allocation"
  },
  {
    "id": 204,
    "title": "Single-Threaded CPU",
    "url": "https://leetcode.com/problems/single-threaded-cpu/",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 5,
    "chapterTitle": "Heaps & Priority Queues",
    "topicId": "5.4",
    "topicTitle": "Greedy Scheduling & Resource Allocation"
  },
  {
    "id": 205,
    "title": "Furthest Building You Can Reach",
    "url": "https://leetcode.com/problems/furthest-building-you-can-reach",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 5,
    "chapterTitle": "Heaps & Priority Queues",
    "topicId": "5.4",
    "topicTitle": "Greedy Scheduling & Resource Allocation"
  },
  {
    "id": 206,
    "title": "Design Twitter",
    "url": "https://leetcode.com/problems/design-twitter/",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 5,
    "chapterTitle": "Heaps & Priority Queues",
    "topicId": "5.4",
    "topicTitle": "Greedy Scheduling & Resource Allocation"
  },
  {
    "id": 207,
    "title": "BFS and DFS of Graph",
    "url": "https://www.geeksforgeeks.org/problems/bfs-traversal-of-graph/1",
    "difficulty": "Easy",
    "platform": "GeeksforGeeks",
    "chapterId": 6,
    "chapterTitle": "Graphs",
    "topicId": "6.1",
    "topicTitle": "Connected Components & Grid Flood Fill"
  },
  {
    "id": 208,
    "title": "Number of Provinces",
    "url": "https://leetcode.com/problems/number-of-provinces/",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 6,
    "chapterTitle": "Graphs",
    "topicId": "6.1",
    "topicTitle": "Connected Components & Grid Flood Fill"
  },
  {
    "id": 209,
    "title": "Number of Islands",
    "url": "https://leetcode.com/problems/number-of-islands",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 6,
    "chapterTitle": "Graphs",
    "topicId": "6.1",
    "topicTitle": "Connected Components & Grid Flood Fill"
  },
  {
    "id": 210,
    "title": "Max Area of Island",
    "url": "https://leetcode.com/problems/max-area-of-island/",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 6,
    "chapterTitle": "Graphs",
    "topicId": "6.1",
    "topicTitle": "Connected Components & Grid Flood Fill"
  },
  {
    "id": 211,
    "title": "Flood Fill",
    "url": "https://leetcode.com/problems/flood-fill",
    "difficulty": "Easy",
    "platform": "LeetCode",
    "chapterId": 6,
    "chapterTitle": "Graphs",
    "topicId": "6.1",
    "topicTitle": "Connected Components & Grid Flood Fill"
  },
  {
    "id": 212,
    "title": "Surrounded Regions",
    "url": "https://leetcode.com/problems/surrounded-regions/",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 6,
    "chapterTitle": "Graphs",
    "topicId": "6.1",
    "topicTitle": "Connected Components & Grid Flood Fill"
  },
  {
    "id": 213,
    "title": "Number of Enclaves",
    "url": "https://leetcode.com/problems/number-of-enclaves/",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 6,
    "chapterTitle": "Graphs",
    "topicId": "6.1",
    "topicTitle": "Connected Components & Grid Flood Fill"
  },
  {
    "id": 214,
    "title": "Number of Distinct Islands",
    "url": "https://leetcode.com/problems/number-of-distinct-islands/",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 6,
    "chapterTitle": "Graphs",
    "topicId": "6.1",
    "topicTitle": "Connected Components & Grid Flood Fill"
  },
  {
    "id": 215,
    "title": "Pacific Atlantic Water Flow",
    "url": "https://leetcode.com/problems/pacific-atlantic-water-flow",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 6,
    "chapterTitle": "Graphs",
    "topicId": "6.1",
    "topicTitle": "Connected Components & Grid Flood Fill"
  },
  {
    "id": 216,
    "title": "Island Perimeter",
    "url": "https://leetcode.com/problems/island-perimeter/",
    "difficulty": "Easy",
    "platform": "LeetCode",
    "chapterId": 6,
    "chapterTitle": "Graphs",
    "topicId": "6.1",
    "topicTitle": "Connected Components & Grid Flood Fill"
  },
  {
    "id": 217,
    "title": "Making A Large Island",
    "url": "https://leetcode.com/problems/making-a-large-island",
    "difficulty": "Hard",
    "platform": "LeetCode",
    "chapterId": 6,
    "chapterTitle": "Graphs",
    "topicId": "6.1",
    "topicTitle": "Connected Components & Grid Flood Fill"
  },
  {
    "id": 218,
    "title": "Rotting Oranges",
    "url": "https://leetcode.com/problems/rotting-oranges",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 6,
    "chapterTitle": "Graphs",
    "topicId": "6.2",
    "topicTitle": "Multi-Source BFS"
  },
  {
    "id": 219,
    "title": "01 Matrix / Distance of Nearest Cell Having 1",
    "url": "https://leetcode.com/problems/01-matrix",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 6,
    "chapterTitle": "Graphs",
    "topicId": "6.2",
    "topicTitle": "Multi-Source BFS"
  },
  {
    "id": 220,
    "title": "As Far from Land as Possible",
    "url": "https://leetcode.com/problems/as-far-from-land-as-possible",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 6,
    "chapterTitle": "Graphs",
    "topicId": "6.2",
    "topicTitle": "Multi-Source BFS"
  },
  {
    "id": 221,
    "title": "Walls and Gates",
    "url": "https://leetcode.com/problems/walls-and-gates/",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 6,
    "chapterTitle": "Graphs",
    "topicId": "6.2",
    "topicTitle": "Multi-Source BFS"
  },
  {
    "id": 222,
    "title": "Shortest Bridge",
    "url": "https://leetcode.com/problems/shortest-bridge",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 6,
    "chapterTitle": "Graphs",
    "topicId": "6.2",
    "topicTitle": "Multi-Source BFS"
  },
  {
    "id": 223,
    "title": "Detect Cycle in Undirected Graph (BFS & DFS)",
    "url": "https://www.geeksforgeeks.org/problems/detect-cycle-in-an-undirected-graph/1",
    "difficulty": "Medium",
    "platform": "GeeksforGeeks",
    "chapterId": 6,
    "chapterTitle": "Graphs",
    "topicId": "6.3",
    "topicTitle": "Cycle Detection & Bipartition"
  },
  {
    "id": 224,
    "title": "Detect Cycle in Directed Graph (DFS)",
    "url": "https://www.geeksforgeeks.org/problems/detect-cycle-in-a-directed-graph/1",
    "difficulty": "Medium",
    "platform": "GeeksforGeeks",
    "chapterId": 6,
    "chapterTitle": "Graphs",
    "topicId": "6.3",
    "topicTitle": "Cycle Detection & Bipartition"
  },
  {
    "id": 225,
    "title": "Is Graph Bipartite?",
    "url": "https://leetcode.com/problems/is-graph-bipartite/",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 6,
    "chapterTitle": "Graphs",
    "topicId": "6.3",
    "topicTitle": "Cycle Detection & Bipartition"
  },
  {
    "id": 226,
    "title": "Graph Valid Tree",
    "url": "https://leetcode.com/problems/graph-valid-tree",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 6,
    "chapterTitle": "Graphs",
    "topicId": "6.3",
    "topicTitle": "Cycle Detection & Bipartition"
  },
  {
    "id": 227,
    "title": "Topological Sort (Kahn’s Algorithm & DFS)",
    "url": "https://www.geeksforgeeks.org/problems/topological-sort/1",
    "difficulty": "Medium",
    "platform": "GeeksforGeeks",
    "chapterId": 6,
    "chapterTitle": "Graphs",
    "topicId": "6.4",
    "topicTitle": "Topological Sort (DAG Ordering & Dependency Resolution)"
  },
  {
    "id": 228,
    "title": "Course Schedule",
    "url": "https://leetcode.com/problems/course-schedule",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 6,
    "chapterTitle": "Graphs",
    "topicId": "6.4",
    "topicTitle": "Topological Sort (DAG Ordering & Dependency Resolution)"
  },
  {
    "id": 229,
    "title": "Course Schedule II",
    "url": "https://leetcode.com/problems/course-schedule-ii",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 6,
    "chapterTitle": "Graphs",
    "topicId": "6.4",
    "topicTitle": "Topological Sort (DAG Ordering & Dependency Resolution)"
  },
  {
    "id": 230,
    "title": "Find Eventual Safe States",
    "url": "https://leetcode.com/problems/find-eventual-safe-states",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 6,
    "chapterTitle": "Graphs",
    "topicId": "6.4",
    "topicTitle": "Topological Sort (DAG Ordering & Dependency Resolution)"
  },
  {
    "id": 231,
    "title": "Alien Dictionary",
    "url": "https://www.geeksforgeeks.org/problems/alien-dictionary/1",
    "difficulty": "Hard",
    "platform": "GeeksforGeeks",
    "chapterId": 6,
    "chapterTitle": "Graphs",
    "topicId": "6.4",
    "topicTitle": "Topological Sort (DAG Ordering & Dependency Resolution)"
  },
  {
    "id": 232,
    "title": "Minimum Height Trees",
    "url": "https://leetcode.com/problems/minimum-height-trees",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 6,
    "chapterTitle": "Graphs",
    "topicId": "6.4",
    "topicTitle": "Topological Sort (DAG Ordering & Dependency Resolution)"
  },
  {
    "id": 233,
    "title": "Sequence Reconstruction",
    "url": "https://leetcode.com/problems/sequence-reconstruction/",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 6,
    "chapterTitle": "Graphs",
    "topicId": "6.4",
    "topicTitle": "Topological Sort (DAG Ordering & Dependency Resolution)"
  },
  {
    "id": 234,
    "title": "Shortest Path in Undirected Graph with Unit Weights",
    "url": "https://leetcode.com/problems/shortest-path-in-undirected-graph-with-unit-weights/",
    "difficulty": "Easy",
    "platform": "LeetCode",
    "chapterId": 6,
    "chapterTitle": "Graphs",
    "topicId": "6.5",
    "topicTitle": "Shortest Paths (Dijkstra, Bellman-Ford, Floyd-Warshall)"
  },
  {
    "id": 235,
    "title": "Shortest Path in Directed Acyclic Graph (DAG)",
    "url": "https://leetcode.com/problems/shortest-path-in-directed-acyclic-graph/",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 6,
    "chapterTitle": "Graphs",
    "topicId": "6.5",
    "topicTitle": "Shortest Paths (Dijkstra, Bellman-Ford, Floyd-Warshall)"
  },
  {
    "id": 236,
    "title": "Dijkstra's Algorithm",
    "url": "https://leetcode.com/problems/dijkstra-s-algorithm/",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 6,
    "chapterTitle": "Graphs",
    "topicId": "6.5",
    "topicTitle": "Shortest Paths (Dijkstra, Bellman-Ford, Floyd-Warshall)"
  },
  {
    "id": 237,
    "title": "Shortest Distance in a Binary Maze",
    "url": "https://leetcode.com/problems/shortest-distance-in-a-binary-maze/",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 6,
    "chapterTitle": "Graphs",
    "topicId": "6.5",
    "topicTitle": "Shortest Paths (Dijkstra, Bellman-Ford, Floyd-Warshall)"
  },
  {
    "id": 238,
    "title": "Path with Minimum Effort",
    "url": "https://leetcode.com/problems/path-with-minimum-effort/",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 6,
    "chapterTitle": "Graphs",
    "topicId": "6.5",
    "topicTitle": "Shortest Paths (Dijkstra, Bellman-Ford, Floyd-Warshall)"
  },
  {
    "id": 239,
    "title": "Cheapest Flights Within K Stops",
    "url": "https://leetcode.com/problems/cheapest-flights-within-k-stops",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 6,
    "chapterTitle": "Graphs",
    "topicId": "6.5",
    "topicTitle": "Shortest Paths (Dijkstra, Bellman-Ford, Floyd-Warshall)"
  },
  {
    "id": 240,
    "title": "Network Delay Time",
    "url": "https://leetcode.com/problems/network-delay-time/",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 6,
    "chapterTitle": "Graphs",
    "topicId": "6.5",
    "topicTitle": "Shortest Paths (Dijkstra, Bellman-Ford, Floyd-Warshall)"
  },
  {
    "id": 241,
    "title": "Number of Ways to Arrive at Destination",
    "url": "https://leetcode.com/problems/number-of-ways-to-arrive-at-destination/",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 6,
    "chapterTitle": "Graphs",
    "topicId": "6.5",
    "topicTitle": "Shortest Paths (Dijkstra, Bellman-Ford, Floyd-Warshall)"
  },
  {
    "id": 242,
    "title": "Minimum Multiplications to Reach End",
    "url": "https://leetcode.com/problems/minimum-multiplications-to-reach-end/",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 6,
    "chapterTitle": "Graphs",
    "topicId": "6.5",
    "topicTitle": "Shortest Paths (Dijkstra, Bellman-Ford, Floyd-Warshall)"
  },
  {
    "id": 243,
    "title": "Bellman-Ford Algorithm",
    "url": "https://leetcode.com/problems/bellman-ford-algorithm/",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 6,
    "chapterTitle": "Graphs",
    "topicId": "6.5",
    "topicTitle": "Shortest Paths (Dijkstra, Bellman-Ford, Floyd-Warshall)"
  },
  {
    "id": 244,
    "title": "Floyd-Warshall Algorithm",
    "url": "https://leetcode.com/problems/floyd-warshall-algorithm/",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 6,
    "chapterTitle": "Graphs",
    "topicId": "6.5",
    "topicTitle": "Shortest Paths (Dijkstra, Bellman-Ford, Floyd-Warshall)"
  },
  {
    "id": 245,
    "title": "Find the City with Smallest Number of Neighbors at Threshold",
    "url": "https://leetcode.com/problems/find-the-city-with-smallest-number-of-neighbors-at-threshold/",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 6,
    "chapterTitle": "Graphs",
    "topicId": "6.5",
    "topicTitle": "Shortest Paths (Dijkstra, Bellman-Ford, Floyd-Warshall)"
  },
  {
    "id": 246,
    "title": "Swim in Rising Water",
    "url": "https://leetcode.com/problems/swim-in-rising-water",
    "difficulty": "Hard",
    "platform": "LeetCode",
    "chapterId": 6,
    "chapterTitle": "Graphs",
    "topicId": "6.5",
    "topicTitle": "Shortest Paths (Dijkstra, Bellman-Ford, Floyd-Warshall)"
  },
  {
    "id": 247,
    "title": "Word Ladder I",
    "url": "https://leetcode.com/problems/word-ladder-i/",
    "difficulty": "Hard",
    "platform": "LeetCode",
    "chapterId": 6,
    "chapterTitle": "Graphs",
    "topicId": "6.5",
    "topicTitle": "Shortest Paths (Dijkstra, Bellman-Ford, Floyd-Warshall)"
  },
  {
    "id": 248,
    "title": "Word Ladder II",
    "url": "https://leetcode.com/problems/word-ladder-ii/",
    "difficulty": "Hard",
    "platform": "LeetCode",
    "chapterId": 6,
    "chapterTitle": "Graphs",
    "topicId": "6.5",
    "topicTitle": "Shortest Paths (Dijkstra, Bellman-Ford, Floyd-Warshall)"
  },
  {
    "id": 249,
    "title": "Disjoint Set Union (Union by Rank/Size & Path Compression)",
    "url": "https://leetcode.com/problems/disjoint-set-union-union-by-rank/",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 6,
    "chapterTitle": "Graphs",
    "topicId": "6.6",
    "topicTitle": "Disjoint Set Union (DSU) & Minimum Spanning Tree (MST)"
  },
  {
    "id": 250,
    "title": "Number of Operations to Make Network Connected",
    "url": "https://leetcode.com/problems/number-of-operations-to-make-network-connected",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 6,
    "chapterTitle": "Graphs",
    "topicId": "6.6",
    "topicTitle": "Disjoint Set Union (DSU) & Minimum Spanning Tree (MST)"
  },
  {
    "id": 251,
    "title": "Most Stones Removed with Same Row or Column",
    "url": "https://leetcode.com/problems/most-stones-removed-with-same-row-or-column",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 6,
    "chapterTitle": "Graphs",
    "topicId": "6.6",
    "topicTitle": "Disjoint Set Union (DSU) & Minimum Spanning Tree (MST)"
  },
  {
    "id": 252,
    "title": "Accounts Merge",
    "url": "https://leetcode.com/problems/accounts-merge",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 6,
    "chapterTitle": "Graphs",
    "topicId": "6.6",
    "topicTitle": "Disjoint Set Union (DSU) & Minimum Spanning Tree (MST)"
  },
  {
    "id": 253,
    "title": "Redundant Connection",
    "url": "https://leetcode.com/problems/redundant-connection",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 6,
    "chapterTitle": "Graphs",
    "topicId": "6.6",
    "topicTitle": "Disjoint Set Union (DSU) & Minimum Spanning Tree (MST)"
  },
  {
    "id": 254,
    "title": "Kruskal's Algorithm (MST)",
    "url": "https://leetcode.com/problems/kruskal-s-algorithm/",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 6,
    "chapterTitle": "Graphs",
    "topicId": "6.6",
    "topicTitle": "Disjoint Set Union (DSU) & Minimum Spanning Tree (MST)"
  },
  {
    "id": 255,
    "title": "Prim's Algorithm (MST)",
    "url": "https://leetcode.com/problems/prim-s-algorithm/",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 6,
    "chapterTitle": "Graphs",
    "topicId": "6.6",
    "topicTitle": "Disjoint Set Union (DSU) & Minimum Spanning Tree (MST)"
  },
  {
    "id": 256,
    "title": "Min Cost to Connect All Points",
    "url": "https://leetcode.com/problems/min-cost-to-connect-all-points/",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 6,
    "chapterTitle": "Graphs",
    "topicId": "6.6",
    "topicTitle": "Disjoint Set Union (DSU) & Minimum Spanning Tree (MST)"
  },
  {
    "id": 257,
    "title": "Critical Connections in a Network / Bridges (Tarjan's)",
    "url": "https://leetcode.com/problems/critical-connections-in-a-network",
    "difficulty": "Hard",
    "platform": "LeetCode",
    "chapterId": 6,
    "chapterTitle": "Graphs",
    "topicId": "6.7",
    "topicTitle": "Advanced Graph (Bridges & Articulation Points)"
  },
  {
    "id": 258,
    "title": "Articulation Points in Graph",
    "url": "https://www.geeksforgeeks.org/problems/articulation-point-1/1",
    "difficulty": "Hard",
    "platform": "GeeksforGeeks",
    "chapterId": 6,
    "chapterTitle": "Graphs",
    "topicId": "6.7",
    "topicTitle": "Advanced Graph (Bridges & Articulation Points)"
  },
  {
    "id": 259,
    "title": "Reconstruct Itinerary (Hierholzer’s Eulerian Path)",
    "url": "https://leetcode.com/problems/reconstruct-itinerary/",
    "difficulty": "Hard",
    "platform": "LeetCode",
    "chapterId": 6,
    "chapterTitle": "Graphs",
    "topicId": "6.7",
    "topicTitle": "Advanced Graph (Bridges & Articulation Points)"
  },
  {
    "id": 260,
    "title": "Evaluate Division",
    "url": "https://leetcode.com/problems/evaluate-division",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 6,
    "chapterTitle": "Graphs",
    "topicId": "6.7",
    "topicTitle": "Advanced Graph (Bridges & Articulation Points)"
  },
  {
    "id": 261,
    "title": "Climbing Stairs",
    "url": "https://leetcode.com/problems/climbing-stairs",
    "difficulty": "Easy",
    "platform": "LeetCode",
    "chapterId": 7,
    "chapterTitle": "Dynamic Programming (DP)",
    "topicId": "7.1",
    "topicTitle": "1D Linear DP"
  },
  {
    "id": 262,
    "title": "Frog Jump / Frog Jump with K Distances",
    "url": "https://leetcode.com/problems/frog-jump",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 7,
    "chapterTitle": "Dynamic Programming (DP)",
    "topicId": "7.1",
    "topicTitle": "1D Linear DP"
  },
  {
    "id": 263,
    "title": "House Robber",
    "url": "https://leetcode.com/problems/house-robber",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 7,
    "chapterTitle": "Dynamic Programming (DP)",
    "topicId": "7.1",
    "topicTitle": "1D Linear DP"
  },
  {
    "id": 264,
    "title": "House Robber II (Circular Array)",
    "url": "https://leetcode.com/problems/house-robber-ii/",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 7,
    "chapterTitle": "Dynamic Programming (DP)",
    "topicId": "7.1",
    "topicTitle": "1D Linear DP"
  },
  {
    "id": 265,
    "title": "Delete and Earn",
    "url": "https://leetcode.com/problems/delete-and-earn",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 7,
    "chapterTitle": "Dynamic Programming (DP)",
    "topicId": "7.1",
    "topicTitle": "1D Linear DP"
  },
  {
    "id": 266,
    "title": "Integer Break",
    "url": "https://leetcode.com/problems/integer-break/",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 7,
    "chapterTitle": "Dynamic Programming (DP)",
    "topicId": "7.1",
    "topicTitle": "1D Linear DP"
  },
  {
    "id": 267,
    "title": "Decode Ways",
    "url": "https://leetcode.com/problems/decode-ways",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 7,
    "chapterTitle": "Dynamic Programming (DP)",
    "topicId": "7.1",
    "topicTitle": "1D Linear DP"
  },
  {
    "id": 268,
    "title": "Word Break",
    "url": "https://leetcode.com/problems/word-break",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 7,
    "chapterTitle": "Dynamic Programming (DP)",
    "topicId": "7.1",
    "topicTitle": "1D Linear DP"
  },
  {
    "id": 269,
    "title": "Jump Game",
    "url": "https://leetcode.com/problems/jump-game",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 7,
    "chapterTitle": "Dynamic Programming (DP)",
    "topicId": "7.1",
    "topicTitle": "1D Linear DP"
  },
  {
    "id": 270,
    "title": "Jump Game II",
    "url": "https://leetcode.com/problems/jump-game-ii/",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 7,
    "chapterTitle": "Dynamic Programming (DP)",
    "topicId": "7.1",
    "topicTitle": "1D Linear DP"
  },
  {
    "id": 271,
    "title": "Maximum Subsequence Sum Such That No Three Are Consecutive",
    "url": "https://www.geeksforgeeks.org/maximum-subsequence-sum-such-that-no-three-are-consecutive/",
    "difficulty": "Medium",
    "platform": "GeeksforGeeks",
    "chapterId": 7,
    "chapterTitle": "Dynamic Programming (DP)",
    "topicId": "7.1",
    "topicTitle": "1D Linear DP"
  },
  {
    "id": 272,
    "title": "Ninja's Training",
    "url": "https://www.geeksforgeeks.org/problems/geeks-training/1",
    "difficulty": "Medium",
    "platform": "GeeksforGeeks",
    "chapterId": 7,
    "chapterTitle": "Dynamic Programming (DP)",
    "topicId": "7.2",
    "topicTitle": "2D Grid DP"
  },
  {
    "id": 273,
    "title": "Grid Unique Paths",
    "url": "https://leetcode.com/problems/unique-paths/",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 7,
    "chapterTitle": "Dynamic Programming (DP)",
    "topicId": "7.2",
    "topicTitle": "2D Grid DP"
  },
  {
    "id": 274,
    "title": "Grid Unique Paths II (with Obstacles)",
    "url": "https://leetcode.com/problems/unique-paths-ii/",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 7,
    "chapterTitle": "Dynamic Programming (DP)",
    "topicId": "7.2",
    "topicTitle": "2D Grid DP"
  },
  {
    "id": 275,
    "title": "Minimum Path Sum",
    "url": "https://leetcode.com/problems/minimum-path-sum",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 7,
    "chapterTitle": "Dynamic Programming (DP)",
    "topicId": "7.2",
    "topicTitle": "2D Grid DP"
  },
  {
    "id": 276,
    "title": "Triangle",
    "url": "https://leetcode.com/problems/triangle/",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 7,
    "chapterTitle": "Dynamic Programming (DP)",
    "topicId": "7.2",
    "topicTitle": "2D Grid DP"
  },
  {
    "id": 277,
    "title": "Minimum / Maximum Falling Path Sum",
    "url": "https://leetcode.com/problems/minimum/",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 7,
    "chapterTitle": "Dynamic Programming (DP)",
    "topicId": "7.2",
    "topicTitle": "2D Grid DP"
  },
  {
    "id": 278,
    "title": "Dungeon Game",
    "url": "https://leetcode.com/problems/dungeon-game/",
    "difficulty": "Hard",
    "platform": "LeetCode",
    "chapterId": 7,
    "chapterTitle": "Dynamic Programming (DP)",
    "topicId": "7.2",
    "topicTitle": "2D Grid DP"
  },
  {
    "id": 279,
    "title": "Out of Boundary Paths",
    "url": "https://leetcode.com/problems/out-of-boundary-paths/",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 7,
    "chapterTitle": "Dynamic Programming (DP)",
    "topicId": "7.2",
    "topicTitle": "2D Grid DP"
  },
  {
    "id": 280,
    "title": "Subset Sum Equal to Target",
    "url": "https://www.geeksforgeeks.org/problems/subset-sum-problem-1611555638/1",
    "difficulty": "Medium",
    "platform": "GeeksforGeeks",
    "chapterId": 7,
    "chapterTitle": "Dynamic Programming (DP)",
    "topicId": "7.3",
    "topicTitle": "Knapsack & Subset DP"
  },
  {
    "id": 281,
    "title": "Partition Equal Subset Sum",
    "url": "https://www.geeksforgeeks.org/problems/subset-sum-problem2014/1",
    "difficulty": "Medium",
    "platform": "GeeksforGeeks",
    "chapterId": 7,
    "chapterTitle": "Dynamic Programming (DP)",
    "topicId": "7.3",
    "topicTitle": "Knapsack & Subset DP"
  },
  {
    "id": 282,
    "title": "Partition a Set into Two Subsets with Min Absolute Diff",
    "url": "https://leetcode.com/problems/partition-array-into-two-arrays-to-minimize-sum-difference/",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 7,
    "chapterTitle": "Dynamic Programming (DP)",
    "topicId": "7.3",
    "topicTitle": "Knapsack & Subset DP"
  },
  {
    "id": 283,
    "title": "Count Subsets with Sum K",
    "url": "https://www.geeksforgeeks.org/problems/perfect-sum-problem5633/1",
    "difficulty": "Medium",
    "platform": "GeeksforGeeks",
    "chapterId": 7,
    "chapterTitle": "Dynamic Programming (DP)",
    "topicId": "7.3",
    "topicTitle": "Knapsack & Subset DP"
  },
  {
    "id": 284,
    "title": "Count Partitions with Given Difference",
    "url": "https://www.geeksforgeeks.org/problems/partitions-with-given-difference/1",
    "difficulty": "Medium",
    "platform": "GeeksforGeeks",
    "chapterId": 7,
    "chapterTitle": "Dynamic Programming (DP)",
    "topicId": "7.3",
    "topicTitle": "Knapsack & Subset DP"
  },
  {
    "id": 285,
    "title": "0/1 Knapsack Problem",
    "url": "https://www.geeksforgeeks.org/problems/0-1-knapsack-problem0945/1",
    "difficulty": "Medium",
    "platform": "GeeksforGeeks",
    "chapterId": 7,
    "chapterTitle": "Dynamic Programming (DP)",
    "topicId": "7.3",
    "topicTitle": "Knapsack & Subset DP"
  },
  {
    "id": 286,
    "title": "Target Sum",
    "url": "https://leetcode.com/problems/target-sum/",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 7,
    "chapterTitle": "Dynamic Programming (DP)",
    "topicId": "7.3",
    "topicTitle": "Knapsack & Subset DP"
  },
  {
    "id": 287,
    "title": "Coin Change (Minimum Coins)",
    "url": "https://leetcode.com/problems/coin-change",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 7,
    "chapterTitle": "Dynamic Programming (DP)",
    "topicId": "7.3",
    "topicTitle": "Knapsack & Subset DP"
  },
  {
    "id": 288,
    "title": "Coin Change 2 (Count Ways / Unbounded Knapsack)",
    "url": "https://leetcode.com/problems/coin-change-ii/",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 7,
    "chapterTitle": "Dynamic Programming (DP)",
    "topicId": "7.3",
    "topicTitle": "Knapsack & Subset DP"
  },
  {
    "id": 289,
    "title": "Rod Cutting Problem",
    "url": "https://www.geeksforgeeks.org/problems/rod-cutting0840/1",
    "difficulty": "Medium",
    "platform": "GeeksforGeeks",
    "chapterId": 7,
    "chapterTitle": "Dynamic Programming (DP)",
    "topicId": "7.3",
    "topicTitle": "Knapsack & Subset DP"
  },
  {
    "id": 290,
    "title": "Ones and Zeroes",
    "url": "https://leetcode.com/problems/ones-and-zeroes",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 7,
    "chapterTitle": "Dynamic Programming (DP)",
    "topicId": "7.3",
    "topicTitle": "Knapsack & Subset DP"
  },
  {
    "id": 291,
    "title": "Longest Common Subsequence (LCS)",
    "url": "https://www.geeksforgeeks.org/problems/longest-common-subsequence-1587115620/1",
    "difficulty": "Medium",
    "platform": "GeeksforGeeks",
    "chapterId": 7,
    "chapterTitle": "Dynamic Programming (DP)",
    "topicId": "7.4",
    "topicTitle": "String DP (LCS & Alignment)"
  },
  {
    "id": 292,
    "title": "Print Longest Common Subsequence",
    "url": "https://www.geeksforgeeks.org/problems/print-all-lcs-sequences3413/1",
    "difficulty": "Medium",
    "platform": "GeeksforGeeks",
    "chapterId": 7,
    "chapterTitle": "Dynamic Programming (DP)",
    "topicId": "7.4",
    "topicTitle": "String DP (LCS & Alignment)"
  },
  {
    "id": 293,
    "title": "Longest Common Substring",
    "url": "https://www.geeksforgeeks.org/problems/longest-common-substring1452/1",
    "difficulty": "Medium",
    "platform": "GeeksforGeeks",
    "chapterId": 7,
    "chapterTitle": "Dynamic Programming (DP)",
    "topicId": "7.4",
    "topicTitle": "String DP (LCS & Alignment)"
  },
  {
    "id": 294,
    "title": "Longest Palindromic Subsequence",
    "url": "https://leetcode.com/problems/longest-palindromic-subsequence/",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 7,
    "chapterTitle": "Dynamic Programming (DP)",
    "topicId": "7.4",
    "topicTitle": "String DP (LCS & Alignment)"
  },
  {
    "id": 295,
    "title": "Minimum Insertions to Make String Palindrome",
    "url": "https://leetcode.com/problems/minimum-insertion-steps-to-make-a-string-palindrome/",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 7,
    "chapterTitle": "Dynamic Programming (DP)",
    "topicId": "7.4",
    "topicTitle": "String DP (LCS & Alignment)"
  },
  {
    "id": 296,
    "title": "Minimum Insertions/Deletions to Convert String A to B",
    "url": "https://leetcode.com/problems/delete-operation-for-two-strings/",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 7,
    "chapterTitle": "Dynamic Programming (DP)",
    "topicId": "7.4",
    "topicTitle": "String DP (LCS & Alignment)"
  },
  {
    "id": 297,
    "title": "Shortest Common Supersequence",
    "url": "https://leetcode.com/problems/shortest-common-supersequence/",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 7,
    "chapterTitle": "Dynamic Programming (DP)",
    "topicId": "7.4",
    "topicTitle": "String DP (LCS & Alignment)"
  },
  {
    "id": 298,
    "title": "Distinct Subsequences",
    "url": "https://leetcode.com/problems/distinct-subsequences",
    "difficulty": "Hard",
    "platform": "LeetCode",
    "chapterId": 7,
    "chapterTitle": "Dynamic Programming (DP)",
    "topicId": "7.4",
    "topicTitle": "String DP (LCS & Alignment)"
  },
  {
    "id": 299,
    "title": "Edit Distance",
    "url": "https://www.geeksforgeeks.org/problems/edit-distance3702/1",
    "difficulty": "Hard",
    "platform": "GeeksforGeeks",
    "chapterId": 7,
    "chapterTitle": "Dynamic Programming (DP)",
    "topicId": "7.4",
    "topicTitle": "String DP (LCS & Alignment)"
  },
  {
    "id": 300,
    "title": "Wildcard Matching",
    "url": "https://leetcode.com/problems/wildcard-matching/",
    "difficulty": "Hard",
    "platform": "LeetCode",
    "chapterId": 7,
    "chapterTitle": "Dynamic Programming (DP)",
    "topicId": "7.4",
    "topicTitle": "String DP (LCS & Alignment)"
  },
  {
    "id": 301,
    "title": "Regular Expression Matching",
    "url": "https://leetcode.com/problems/regular-expression-matching/",
    "difficulty": "Hard",
    "platform": "LeetCode",
    "chapterId": 7,
    "chapterTitle": "Dynamic Programming (DP)",
    "topicId": "7.4",
    "topicTitle": "String DP (LCS & Alignment)"
  },
  {
    "id": 302,
    "title": "Interleaving String",
    "url": "https://leetcode.com/problems/interleaving-string/",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 7,
    "chapterTitle": "Dynamic Programming (DP)",
    "topicId": "7.4",
    "topicTitle": "String DP (LCS & Alignment)"
  },
  {
    "id": 303,
    "title": "Longest Increasing Subsequence (O(N 2 ) and O(NlogN))",
    "url": "https://leetcode.com/problems/longest-increasing-subsequence/",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 7,
    "chapterTitle": "Dynamic Programming (DP)",
    "topicId": "7.5",
    "topicTitle": "Longest Increasing Subsequence (LIS)"
  },
  {
    "id": 304,
    "title": "Print Longest Increasing Subsequence",
    "url": "https://www.geeksforgeeks.org/problems/printing-longest-increasing-subsequence/1",
    "difficulty": "Medium",
    "platform": "GeeksforGeeks",
    "chapterId": 7,
    "chapterTitle": "Dynamic Programming (DP)",
    "topicId": "7.5",
    "topicTitle": "Longest Increasing Subsequence (LIS)"
  },
  {
    "id": 305,
    "title": "Largest Divisible Subset",
    "url": "https://leetcode.com/problems/largest-divisible-subset/",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 7,
    "chapterTitle": "Dynamic Programming (DP)",
    "topicId": "7.5",
    "topicTitle": "Longest Increasing Subsequence (LIS)"
  },
  {
    "id": 306,
    "title": "Longest String Chain",
    "url": "https://leetcode.com/problems/longest-string-chain/",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 7,
    "chapterTitle": "Dynamic Programming (DP)",
    "topicId": "7.5",
    "topicTitle": "Longest Increasing Subsequence (LIS)"
  },
  {
    "id": 307,
    "title": "Longest Bitonic Subsequence",
    "url": "https://leetcode.com/problems/longest-bitonic-subsequence/",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 7,
    "chapterTitle": "Dynamic Programming (DP)",
    "topicId": "7.5",
    "topicTitle": "Longest Increasing Subsequence (LIS)"
  },
  {
    "id": 308,
    "title": "Number of Longest Increasing Subsequences",
    "url": "https://leetcode.com/problems/number-of-longest-increasing-subsequences/",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 7,
    "chapterTitle": "Dynamic Programming (DP)",
    "topicId": "7.5",
    "topicTitle": "Longest Increasing Subsequence (LIS)"
  },
  {
    "id": 309,
    "title": "Russian Doll Envelopes",
    "url": "https://leetcode.com/problems/russian-doll-envelopes/",
    "difficulty": "Hard",
    "platform": "LeetCode",
    "chapterId": 7,
    "chapterTitle": "Dynamic Programming (DP)",
    "topicId": "7.5",
    "topicTitle": "Longest Increasing Subsequence (LIS)"
  },
  {
    "id": 310,
    "title": "Maximum Length of Pair Chain",
    "url": "https://leetcode.com/problems/maximum-length-of-pair-chain",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 7,
    "chapterTitle": "Dynamic Programming (DP)",
    "topicId": "7.5",
    "topicTitle": "Longest Increasing Subsequence (LIS)"
  },
  {
    "id": 311,
    "title": "Best Time to Buy and Sell Stock II",
    "url": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 7,
    "chapterTitle": "Dynamic Programming (DP)",
    "topicId": "7.6",
    "topicTitle": "State-Machine DP"
  },
  {
    "id": 312,
    "title": "Best Time to Buy and Sell Stock III",
    "url": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/",
    "difficulty": "Hard",
    "platform": "LeetCode",
    "chapterId": 7,
    "chapterTitle": "Dynamic Programming (DP)",
    "topicId": "7.6",
    "topicTitle": "State-Machine DP"
  },
  {
    "id": 313,
    "title": "Best Time to Buy and Sell Stock IV",
    "url": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv",
    "difficulty": "Hard",
    "platform": "LeetCode",
    "chapterId": 7,
    "chapterTitle": "Dynamic Programming (DP)",
    "topicId": "7.6",
    "topicTitle": "State-Machine DP"
  },
  {
    "id": 314,
    "title": "Best Time to Buy and Sell Stock with Cooldown",
    "url": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 7,
    "chapterTitle": "Dynamic Programming (DP)",
    "topicId": "7.6",
    "topicTitle": "State-Machine DP"
  },
  {
    "id": 315,
    "title": "Best Time to Buy and Sell Stock with Transaction Fee",
    "url": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 7,
    "chapterTitle": "Dynamic Programming (DP)",
    "topicId": "7.6",
    "topicTitle": "State-Machine DP"
  },
  {
    "id": 316,
    "title": "Matrix Chain Multiplication (MCM)",
    "url": "https://www.geeksforgeeks.org/problems/matrix-chain-multiplication0303/1",
    "difficulty": "Hard",
    "platform": "GeeksforGeeks",
    "chapterId": 7,
    "chapterTitle": "Dynamic Programming (DP)",
    "topicId": "7.7",
    "topicTitle": "Interval / Partition DP"
  },
  {
    "id": 317,
    "title": "Minimum Cost to Cut the Stick",
    "url": "https://leetcode.com/problems/minimum-cost-to-cut-the-stick/",
    "difficulty": "Hard",
    "platform": "LeetCode",
    "chapterId": 7,
    "chapterTitle": "Dynamic Programming (DP)",
    "topicId": "7.7",
    "topicTitle": "Interval / Partition DP"
  },
  {
    "id": 318,
    "title": "Burst Balloons",
    "url": "https://leetcode.com/problems/burst-balloons",
    "difficulty": "Hard",
    "platform": "LeetCode",
    "chapterId": 7,
    "chapterTitle": "Dynamic Programming (DP)",
    "topicId": "7.7",
    "topicTitle": "Interval / Partition DP"
  },
  {
    "id": 319,
    "title": "Evaluate Boolean Expression to True / Boolean Parenthesization",
    "url": "https://www.geeksforgeeks.org/problems/boolean-parenthesization5610/1",
    "difficulty": "Hard",
    "platform": "GeeksforGeeks",
    "chapterId": 7,
    "chapterTitle": "Dynamic Programming (DP)",
    "topicId": "7.7",
    "topicTitle": "Interval / Partition DP"
  },
  {
    "id": 320,
    "title": "Palindrome Partitioning II",
    "url": "https://leetcode.com/problems/palindrome-partitioning-ii/",
    "difficulty": "Hard",
    "platform": "LeetCode",
    "chapterId": 7,
    "chapterTitle": "Dynamic Programming (DP)",
    "topicId": "7.7",
    "topicTitle": "Interval / Partition DP"
  },
  {
    "id": 321,
    "title": "Partition Array for Maximum Sum",
    "url": "https://leetcode.com/problems/partition-array-for-maximum-sum/",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 7,
    "chapterTitle": "Dynamic Programming (DP)",
    "topicId": "7.7",
    "topicTitle": "Interval / Partition DP"
  },
  {
    "id": 322,
    "title": "Super Egg Drop / Egg Dropping Puzzle",
    "url": "https://leetcode.com/problems/super-egg-drop",
    "difficulty": "Hard",
    "platform": "LeetCode",
    "chapterId": 7,
    "chapterTitle": "Dynamic Programming (DP)",
    "topicId": "7.7",
    "topicTitle": "Interval / Partition DP"
  },
  {
    "id": 323,
    "title": "Maximum Profit in Job Scheduling",
    "url": "https://leetcode.com/problems/maximum-profit-in-job-scheduling",
    "difficulty": "Hard",
    "platform": "LeetCode",
    "chapterId": 7,
    "chapterTitle": "Dynamic Programming (DP)",
    "topicId": "7.7",
    "topicTitle": "Interval / Partition DP"
  },
  {
    "id": 324,
    "title": "Subsets",
    "url": "https://leetcode.com/problems/subsets",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 8,
    "chapterTitle": "Backtracking & Recursion",
    "topicId": "8.1",
    "topicTitle": "Subsets & Combinations"
  },
  {
    "id": 325,
    "title": "Subsets II",
    "url": "https://leetcode.com/problems/subsets-ii",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 8,
    "chapterTitle": "Backtracking & Recursion",
    "topicId": "8.1",
    "topicTitle": "Subsets & Combinations"
  },
  {
    "id": 326,
    "title": "Combination Sum",
    "url": "https://leetcode.com/problems/combination-sum",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 8,
    "chapterTitle": "Backtracking & Recursion",
    "topicId": "8.1",
    "topicTitle": "Subsets & Combinations"
  },
  {
    "id": 327,
    "title": "Combination Sum II",
    "url": "https://leetcode.com/problems/combination-sum-ii",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 8,
    "chapterTitle": "Backtracking & Recursion",
    "topicId": "8.1",
    "topicTitle": "Subsets & Combinations"
  },
  {
    "id": 328,
    "title": "Combination Sum III",
    "url": "https://leetcode.com/problems/combination-sum-iii/",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 8,
    "chapterTitle": "Backtracking & Recursion",
    "topicId": "8.1",
    "topicTitle": "Subsets & Combinations"
  },
  {
    "id": 329,
    "title": "Combinations",
    "url": "https://leetcode.com/problems/combinations",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 8,
    "chapterTitle": "Backtracking & Recursion",
    "topicId": "8.1",
    "topicTitle": "Subsets & Combinations"
  },
  {
    "id": 330,
    "title": "Letter Combinations of a Phone Number",
    "url": "https://leetcode.com/problems/letter-combinations-of-a-phone-number",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 8,
    "chapterTitle": "Backtracking & Recursion",
    "topicId": "8.1",
    "topicTitle": "Subsets & Combinations"
  },
  {
    "id": 331,
    "title": "Generate Binary Strings Without Consecutive 1s",
    "url": "https://leetcode.com/problems/generate-binary-strings-without-consecutive-1s/",
    "difficulty": "Easy",
    "platform": "LeetCode",
    "chapterId": 8,
    "chapterTitle": "Backtracking & Recursion",
    "topicId": "8.1",
    "topicTitle": "Subsets & Combinations"
  },
  {
    "id": 332,
    "title": "Permutations",
    "url": "https://leetcode.com/problems/permutations",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 8,
    "chapterTitle": "Backtracking & Recursion",
    "topicId": "8.2",
    "topicTitle": "Permutations & Ordering"
  },
  {
    "id": 333,
    "title": "Permutations II",
    "url": "https://leetcode.com/problems/permutations-ii",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 8,
    "chapterTitle": "Backtracking & Recursion",
    "topicId": "8.2",
    "topicTitle": "Permutations & Ordering"
  },
  {
    "id": 334,
    "title": "Find the K-th Permutation Sequence",
    "url": "https://leetcode.com/problems/permutation-sequence/",
    "difficulty": "Hard",
    "platform": "LeetCode",
    "chapterId": 8,
    "chapterTitle": "Backtracking & Recursion",
    "topicId": "8.2",
    "topicTitle": "Permutations & Ordering"
  },
  {
    "id": 335,
    "title": "Beautiful Arrangement",
    "url": "https://leetcode.com/problems/beautiful-arrangement",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 8,
    "chapterTitle": "Backtracking & Recursion",
    "topicId": "8.2",
    "topicTitle": "Permutations & Ordering"
  },
  {
    "id": 336,
    "title": "Word Search",
    "url": "https://leetcode.com/problems/word-search",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 8,
    "chapterTitle": "Backtracking & Recursion",
    "topicId": "8.3",
    "topicTitle": "Grid Exploration & Path Search"
  },
  {
    "id": 337,
    "title": "Rat in a Maze",
    "url": "https://www.geeksforgeeks.org/problems/rat-in-a-maze-problem/1",
    "difficulty": "Medium",
    "platform": "GeeksforGeeks",
    "chapterId": 8,
    "chapterTitle": "Backtracking & Recursion",
    "topicId": "8.3",
    "topicTitle": "Grid Exploration & Path Search"
  },
  {
    "id": 338,
    "title": "Generate Parentheses",
    "url": "https://leetcode.com/problems/generate-parentheses",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 8,
    "chapterTitle": "Backtracking & Recursion",
    "topicId": "8.3",
    "topicTitle": "Grid Exploration & Path Search"
  },
  {
    "id": 339,
    "title": "Restore IP Addresses",
    "url": "https://leetcode.com/problems/restore-ip-addresses/",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 8,
    "chapterTitle": "Backtracking & Recursion",
    "topicId": "8.3",
    "topicTitle": "Grid Exploration & Path Search"
  },
  {
    "id": 340,
    "title": "Palindrome Partitioning",
    "url": "https://leetcode.com/problems/palindrome-partitioning",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 8,
    "chapterTitle": "Backtracking & Recursion",
    "topicId": "8.3",
    "topicTitle": "Grid Exploration & Path Search"
  },
  {
    "id": 341,
    "title": "N-Queens",
    "url": "https://leetcode.com/problems/n-queens",
    "difficulty": "Hard",
    "platform": "LeetCode",
    "chapterId": 8,
    "chapterTitle": "Backtracking & Recursion",
    "topicId": "8.4",
    "topicTitle": "Constraint Satisfaction & Pruning"
  },
  {
    "id": 342,
    "title": "N-Queens II",
    "url": "https://leetcode.com/problems/n-queens-ii/",
    "difficulty": "Hard",
    "platform": "LeetCode",
    "chapterId": 8,
    "chapterTitle": "Backtracking & Recursion",
    "topicId": "8.4",
    "topicTitle": "Constraint Satisfaction & Pruning"
  },
  {
    "id": 343,
    "title": "Sudoku Solver",
    "url": "https://leetcode.com/problems/sudoku-solver",
    "difficulty": "Hard",
    "platform": "LeetCode",
    "chapterId": 8,
    "chapterTitle": "Backtracking & Recursion",
    "topicId": "8.4",
    "topicTitle": "Constraint Satisfaction & Pruning"
  },
  {
    "id": 344,
    "title": "Word Break II",
    "url": "https://leetcode.com/problems/word-break-ii/",
    "difficulty": "Hard",
    "platform": "LeetCode",
    "chapterId": 8,
    "chapterTitle": "Backtracking & Recursion",
    "topicId": "8.4",
    "topicTitle": "Constraint Satisfaction & Pruning"
  },
  {
    "id": 345,
    "title": "Remove Invalid Parentheses",
    "url": "https://leetcode.com/problems/remove-invalid-parentheses",
    "difficulty": "Hard",
    "platform": "LeetCode",
    "chapterId": 8,
    "chapterTitle": "Backtracking & Recursion",
    "topicId": "8.4",
    "topicTitle": "Constraint Satisfaction & Pruning"
  },
  {
    "id": 346,
    "title": "Expression Add Operators",
    "url": "https://leetcode.com/problems/expression-add-operators/",
    "difficulty": "Hard",
    "platform": "LeetCode",
    "chapterId": 8,
    "chapterTitle": "Backtracking & Recursion",
    "topicId": "8.4",
    "topicTitle": "Constraint Satisfaction & Pruning"
  },
  {
    "id": 347,
    "title": "M-Coloring Problem",
    "url": "https://www.geeksforgeeks.org/problems/m-coloring-problem-1587115620/1",
    "difficulty": "Hard",
    "platform": "GeeksforGeeks",
    "chapterId": 8,
    "chapterTitle": "Backtracking & Recursion",
    "topicId": "8.4",
    "topicTitle": "Constraint Satisfaction & Pruning"
  },
  {
    "id": 348,
    "title": "Matchsticks to Square",
    "url": "https://leetcode.com/problems/matchsticks-to-square/",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 8,
    "chapterTitle": "Backtracking & Recursion",
    "topicId": "8.4",
    "topicTitle": "Constraint Satisfaction & Pruning"
  },
  {
    "id": 349,
    "title": "Partition to K Equal Sum Subsets",
    "url": "https://leetcode.com/problems/partition-to-k-equal-sum-subsets/",
    "difficulty": "Hard",
    "platform": "LeetCode",
    "chapterId": 8,
    "chapterTitle": "Backtracking & Recursion",
    "topicId": "8.4",
    "topicTitle": "Constraint Satisfaction & Pruning"
  },
  {
    "id": 350,
    "title": "Implement Trie (Prefix Tree)",
    "url": "https://leetcode.com/problems/implement-trie-prefix-tree",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 9,
    "chapterTitle": "Tries",
    "topicId": "9.1",
    "topicTitle": "Prefix Matching & Word Dictionaries"
  },
  {
    "id": 351,
    "title": "Implement Trie II (Prefix Count & Erase)",
    "url": "https://leetcode.com/problems/implement-trie-ii/",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 9,
    "chapterTitle": "Tries",
    "topicId": "9.1",
    "topicTitle": "Prefix Matching & Word Dictionaries"
  },
  {
    "id": 352,
    "title": "Longest Word with All Prefixes",
    "url": "https://leetcode.com/problems/longest-word-with-all-prefixes/",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 9,
    "chapterTitle": "Tries",
    "topicId": "9.1",
    "topicTitle": "Prefix Matching & Word Dictionaries"
  },
  {
    "id": 353,
    "title": "Design Add and Search Words Data Structure",
    "url": "https://leetcode.com/problems/design-add-and-search-words-data-structure",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 9,
    "chapterTitle": "Tries",
    "topicId": "9.1",
    "topicTitle": "Prefix Matching & Word Dictionaries"
  },
  {
    "id": 354,
    "title": "Word Search II",
    "url": "https://leetcode.com/problems/word-search-ii",
    "difficulty": "Hard",
    "platform": "LeetCode",
    "chapterId": 9,
    "chapterTitle": "Tries",
    "topicId": "9.1",
    "topicTitle": "Prefix Matching & Word Dictionaries"
  },
  {
    "id": 355,
    "title": "Number of Distinct Substrings in a String",
    "url": "https://leetcode.com/problems/number-of-distinct-substrings-in-a-string/",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 9,
    "chapterTitle": "Tries",
    "topicId": "9.1",
    "topicTitle": "Prefix Matching & Word Dictionaries"
  },
  {
    "id": 356,
    "title": "Replace Words",
    "url": "https://leetcode.com/problems/replace-words/",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 9,
    "chapterTitle": "Tries",
    "topicId": "9.1",
    "topicTitle": "Prefix Matching & Word Dictionaries"
  },
  {
    "id": 357,
    "title": "Maximum XOR of Two Numbers in an Array",
    "url": "https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 9,
    "chapterTitle": "Tries",
    "topicId": "9.2",
    "topicTitle": "Bitwise / Binary Trie"
  },
  {
    "id": 358,
    "title": "Maximum XOR with an Element from Array (Offline Queries)",
    "url": "https://leetcode.com/problems/maximum-xor-with-an-element-from-array/",
    "difficulty": "Hard",
    "platform": "LeetCode",
    "chapterId": 9,
    "chapterTitle": "Tries",
    "topicId": "9.2",
    "topicTitle": "Bitwise / Binary Trie"
  },
  {
    "id": 359,
    "title": "Check if i-th Bit is Set or Not",
    "url": "https://www.geeksforgeeks.org/problems/check-whether-k-th-bit-is-set-or-not-1587115620/1",
    "difficulty": "Easy",
    "platform": "GeeksforGeeks",
    "chapterId": 10,
    "chapterTitle": "Bit Manipulation & Number Theory",
    "topicId": "10.1",
    "topicTitle": "Bit Masking & Arithmetic Bit Hacks"
  },
  {
    "id": 360,
    "title": "Set/Unset the Rightmost Unset Bit",
    "url": "https://www.geeksforgeeks.org/problems/set-the-rightmost-unset-bit4436/1",
    "difficulty": "Easy",
    "platform": "GeeksforGeeks",
    "chapterId": 10,
    "chapterTitle": "Bit Manipulation & Number Theory",
    "topicId": "10.1",
    "topicTitle": "Bit Masking & Arithmetic Bit Hacks"
  },
  {
    "id": 361,
    "title": "Power of 2",
    "url": "https://www.geeksforgeeks.org/problems/power-of-2-1587115620/1",
    "difficulty": "Easy",
    "platform": "GeeksforGeeks",
    "chapterId": 10,
    "chapterTitle": "Bit Manipulation & Number Theory",
    "topicId": "10.1",
    "topicTitle": "Bit Masking & Arithmetic Bit Hacks"
  },
  {
    "id": 362,
    "title": "Counting Bits",
    "url": "https://leetcode.com/problems/counting-bits",
    "difficulty": "Easy",
    "platform": "LeetCode",
    "chapterId": 10,
    "chapterTitle": "Bit Manipulation & Number Theory",
    "topicId": "10.1",
    "topicTitle": "Bit Masking & Arithmetic Bit Hacks"
  },
  {
    "id": 363,
    "title": "Single Number I",
    "url": "https://leetcode.com/problems/single-number-i/",
    "difficulty": "Easy",
    "platform": "LeetCode",
    "chapterId": 10,
    "chapterTitle": "Bit Manipulation & Number Theory",
    "topicId": "10.1",
    "topicTitle": "Bit Masking & Arithmetic Bit Hacks"
  },
  {
    "id": 364,
    "title": "Single Number II",
    "url": "https://leetcode.com/problems/single-number-ii/",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 10,
    "chapterTitle": "Bit Manipulation & Number Theory",
    "topicId": "10.1",
    "topicTitle": "Bit Masking & Arithmetic Bit Hacks"
  },
  {
    "id": 365,
    "title": "Single Number III",
    "url": "https://leetcode.com/problems/single-number-iii/",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 10,
    "chapterTitle": "Bit Manipulation & Number Theory",
    "topicId": "10.1",
    "topicTitle": "Bit Masking & Arithmetic Bit Hacks"
  },
  {
    "id": 366,
    "title": "Find XOR of Numbers in Range [L, R]",
    "url": "https://www.geeksforgeeks.org/problems/find-xor-of-numbers-from-l-to-r/1",
    "difficulty": "Medium",
    "platform": "GeeksforGeeks",
    "chapterId": 10,
    "chapterTitle": "Bit Manipulation & Number Theory",
    "topicId": "10.1",
    "topicTitle": "Bit Masking & Arithmetic Bit Hacks"
  },
  {
    "id": 367,
    "title": "Minimum Bit Flips to Convert Number",
    "url": "https://leetcode.com/problems/minimum-bit-flips-to-convert-number/",
    "difficulty": "Easy",
    "platform": "LeetCode",
    "chapterId": 10,
    "chapterTitle": "Bit Manipulation & Number Theory",
    "topicId": "10.1",
    "topicTitle": "Bit Masking & Arithmetic Bit Hacks"
  },
  {
    "id": 368,
    "title": "Sum of Two Integers (Without + or -)",
    "url": "https://leetcode.com/problems/sum-of-two-integers/",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 10,
    "chapterTitle": "Bit Manipulation & Number Theory",
    "topicId": "10.1",
    "topicTitle": "Bit Masking & Arithmetic Bit Hacks"
  },
  {
    "id": 369,
    "title": "Reverse Bits",
    "url": "https://leetcode.com/problems/reverse-bits",
    "difficulty": "Easy",
    "platform": "LeetCode",
    "chapterId": 10,
    "chapterTitle": "Bit Manipulation & Number Theory",
    "topicId": "10.1",
    "topicTitle": "Bit Masking & Arithmetic Bit Hacks"
  },
  {
    "id": 370,
    "title": "Pow(x, n) (Binary Exponentiation)",
    "url": "https://leetcode.com/problems/pow/",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 10,
    "chapterTitle": "Bit Manipulation & Number Theory",
    "topicId": "10.2",
    "topicTitle": "Number Theory, Primes & Exponential Math"
  },
  {
    "id": 371,
    "title": "Count Primes (Sieve of Eratosthenes)",
    "url": "https://leetcode.com/problems/count-primes/",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 10,
    "chapterTitle": "Bit Manipulation & Number Theory",
    "topicId": "10.2",
    "topicTitle": "Number Theory, Primes & Exponential Math"
  },
  {
    "id": 372,
    "title": "Prime Factorization of a Number",
    "url": "https://www.geeksforgeeks.org/problems/prime-factors5052/1",
    "difficulty": "Easy",
    "platform": "GeeksforGeeks",
    "chapterId": 10,
    "chapterTitle": "Bit Manipulation & Number Theory",
    "topicId": "10.2",
    "topicTitle": "Number Theory, Primes & Exponential Math"
  },
  {
    "id": 373,
    "title": "Divide Two Integers without Multiplication/Division",
    "url": "https://leetcode.com/problems/divide-two-integers-without-multiplication/",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 10,
    "chapterTitle": "Bit Manipulation & Number Theory",
    "topicId": "10.2",
    "topicTitle": "Number Theory, Primes & Exponential Math"
  },
  {
    "id": 374,
    "title": "Greatest Common Divisor of Strings / Euclidean GCD",
    "url": "https://leetcode.com/problems/greatest-common-divisor-of-strings/",
    "difficulty": "Easy",
    "platform": "LeetCode",
    "chapterId": 10,
    "chapterTitle": "Bit Manipulation & Number Theory",
    "topicId": "10.2",
    "topicTitle": "Number Theory, Primes & Exponential Math"
  },
  {
    "id": 375,
    "title": "Factorial Trailing Zeroes",
    "url": "https://leetcode.com/problems/factorial-trailing-zeroes/",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 10,
    "chapterTitle": "Bit Manipulation & Number Theory",
    "topicId": "10.2",
    "topicTitle": "Number Theory, Primes & Exponential Math"
  },
  {
    "id": 376,
    "title": "Reverse Integer",
    "url": "https://leetcode.com/problems/reverse-integer",
    "difficulty": "Medium",
    "platform": "LeetCode",
    "chapterId": 10,
    "chapterTitle": "Bit Manipulation & Number Theory",
    "topicId": "10.2",
    "topicTitle": "Number Theory, Primes & Exponential Math"
  },
  {
    "id": 377,
    "title": "Palindrome Number",
    "url": "https://leetcode.com/problems/palindrome-number",
    "difficulty": "Easy",
    "platform": "LeetCode",
    "chapterId": 10,
    "chapterTitle": "Bit Manipulation & Number Theory",
    "topicId": "10.2",
    "topicTitle": "Number Theory, Primes & Exponential Math"
  }
];
