const questions = [
    {
        title: "Sum of Digits",
        difficulty: "easy",
        description: `Write a function \`sum_of_digits(n: int) -> int\` that returns the sum of the digits of a number.`,
        example: `# Input: 123\n# Output: 6\n\n# Input: 987\n# Output: 24\n\n# Input: 500\n# Output: 5`,
        boilerplate: `def sum_of_digits(n: int) -> int:\n    # Your code here\n    pass`
    },
    {
        title: "Count Vowels",
        difficulty: "easy",
        description: `Write a function \`count_vowels(s: str) -> int\` that counts the number of vowels in a string.`,
        example: `# Input: 'hello'\n# Output: 2\n\n# Input: 'world'\n# Output: 1\n\n# Input: 'Python'\n# Output: 1`,
        boilerplate: `def count_vowels(s: str) -> int:\n    # Your code here\n    pass`
    },
    {
        title: "Find Maximum in List",
        difficulty: "easy",
        description: `Write a function \`find_max(nums: list[int]) -> int\` that returns the maximum number from the list.`,
        example: `# Input: [1, 3, 5, 2, 4]\n# Output: 5\n\n# Input: [10, 15, 2, 8, 0]\n# Output: 15\n\n# Input: [7, 7, 7]\n# Output: 7`,
        boilerplate: `def find_max(nums: list[int]) -> int:\n    # Your code here\n    pass`
    },
    {
        title: "Count Occurrences of a Character",
        difficulty: "easy",
        description: `Write a function \`count_char(s: str, c: str) -> int\` that counts the occurrences of a specific character in a string.`,
        example: `# Input: 'hello', 'l'\n# Output: 2\n\n# Input: 'world', 'o'\n# Output: 1\n\n# Input: 'banana', 'a'\n# Output: 3`,
        boilerplate: `def count_char(s: str, c: str) -> int:\n    # Your code here\n    pass`
    },
    {
        title: "Palindrome Check",
        difficulty: "easy",
        description: `Write a function \`is_palindrome(s: str) -> bool\` that checks if a string is a palindrome.`,
        example: `# Input: 'madam'\n# Output: True\n\n# Input: 'hello'\n# Output: False\n\n# Input: 'racecar'\n# Output: True`,
        boilerplate: `def is_palindrome(s: str) -> bool:\n    # Your code here\n    pass`
    },
    {
        title: "Fahrenheit to Celsius",
        difficulty: "easy",
        description: `Write a function \`fahrenheit_to_celsius(f: float) -> float\` that converts Fahrenheit to Celsius.`,
        example: `# Input: 32\n# Output: 0\n\n# Input: 100\n# Output: 37.78\n\n# Input: 212\n# Output: 100`,
        boilerplate: `def fahrenheit_to_celsius(f: float) -> float:\n    # Your code here\n    pass`
    },
    {
        title: "Find the Length of a List",
        difficulty: "easy",
        description: `Write a function \`list_length(lst: list) -> int\` that returns the length of a list.`,
        example: `# Input: [1, 2, 3]\n# Output: 3\n\n# Input: [10, 20, 30, 40]\n# Output: 4\n\n# Input: []\n# Output: 0`,
        boilerplate: `def list_length(lst: list) -> int:\n    # Your code here\n    pass`
    },
    {
        title: "Remove Duplicates from List",
        difficulty: "easy",
        description: `Write a function \`remove_duplicates(lst: list) -> list\` that removes duplicate values from a list.`,
        example: `# Input: [1, 2, 2, 3, 3, 4]\n# Output: [1, 2, 3, 4]\n\n# Input: [10, 10, 10, 20, 30]\n# Output: [10, 20, 30]`,
        boilerplate: `def remove_duplicates(lst: list) -> list:\n    # Your code here\n    pass`
    },
    {
        title: "Find the First Non-repeating Character",
        difficulty: "easy",
        description: `Write a function \`first_non_repeating(s: str) -> str\` that returns the first non-repeating character in a string.`,
        example: `# Input: 'swiss'\n# Output: 'w'\n\n# Input: 'aabbcc'\n# Output: ''\n\n# Input: 'abc'\n# Output: 'a'`,
        boilerplate: `def first_non_repeating(s: str) -> str:\n    # Your code here\n    pass`
    },

    {
        title: "Merge Two Sorted Lists",
        difficulty: "medium",
        description: `Write a function \`merge_sorted_lists(list1: list[int], list2: list[int]) -> list[int]\` that merges two sorted lists into one sorted list.`,
        example: `# Input: [1, 3, 5], [2, 4, 6]\n# Output: [1, 2, 3, 4, 5, 6]\n\n# Input: [10, 15, 20], [5, 10, 15]\n# Output: [5, 10, 10, 15, 15, 20]`,
        boilerplate: `def merge_sorted_lists(list1: list[int], list2: list[int]) -> list[int]:\n    # Your code here\n    pass`
    },
    {
        title: "Sort a List of Tuples by the Second Element",
        difficulty: "medium",
        description: `Write a function \`sort_by_second(lst: list[tuple]) -> list[tuple]\` that sorts a list of tuples by the second element.`,
        example: `# Input: [(1, 3), (4, 1), (2, 2)]\n# Output: [(4, 1), (2, 2), (1, 3)]\n\n# Input: [(10, 20), (20, 10), (5, 5)]\n# Output: [(5, 5), (20, 10), (10, 20)]`,
        boilerplate: `def sort_by_second(lst: list[tuple]) -> list[tuple]:\n    # Your code here\n    pass`
    },
    {
        title: "Find Common Elements Between Two Lists",
        difficulty: "medium",
        description: `Write a function \`common_elements(list1: list[int], list2: list[int]) -> list[int]\` that returns a list of common elements between two lists.`,
        example: `# Input: [1, 2, 3, 4], [3, 4, 5, 6]\n# Output: [3, 4]\n\n# Input: [10, 20, 30], [30, 40, 50]\n# Output: [30]`,
        boilerplate: `def common_elements(list1: list[int], list2: list[int]) -> list[int]:\n    # Your code here\n    pass`
    },
    {
        title: "Find the GCD of Two Numbers",
        difficulty: "medium",
        description: `Write a function \`gcd(a: int, b: int) -> int\` that returns the greatest common divisor (GCD) of two numbers.`,
        example: `# Input: 12, 15\n# Output: 3\n\n# Input: 56, 98\n# Output: 14\n\n# Input: 18, 24\n# Output: 6`,
        boilerplate: `def gcd(a: int, b: int) -> int:\n    # Your code here\n    pass`
    },
    {
        title: "Anagram Check",
        difficulty: "medium",
        description: `Write a function \`are_anagrams(s1: str, s2: str) -> bool\` that checks if two strings are anagrams.`,
        example: `# Input: 'listen', 'silent'\n# Output: True\n\n# Input: 'hello', 'world'\n# Output: False`,
        boilerplate: `def are_anagrams(s1: str, s2: str) -> bool:\n    # Your code here\n    pass`
    },
    {
        title: "Rotate List by N Elements",
        difficulty: "medium",
        description: `Write a function \`rotate_list(lst: list[int], n: int) -> list[int]\` that rotates a list by N elements.`,
        example: `# Input: [1, 2, 3, 4, 5], 2\n# Output: [4, 5, 1, 2, 3]\n\n# Input: [10, 20, 30, 40], 1\n# Output: [40, 10, 20, 30]`,
        boilerplate: `def rotate_list(lst: list[int], n: int) -> list[int]:\n    # Your code here\n    pass`
    },
    {
        title: "Count Words in a String",
        difficulty: "medium",
        description: `Write a function \`count_words(s: str) -> int\` that counts the number of words in a string.`,
        example: `# Input: 'Hello world'\n# Output: 2\n\n# Input: 'I am learning Python'\n# Output: 4`,
        boilerplate: `def count_words(s: str) -> int:\n    # Your code here\n    pass`
    },
    {
        title: "Remove Specific Character from a String",
        difficulty: "medium",
        description: `Write a function \`remove_char(s: str, c: str) -> str\` that removes all occurrences of a character from a string.`,
        example: `# Input: 'hello', 'l'\n# Output: 'heo'\n\n# Input: 'banana', 'a'\n# Output: 'bnn'`,
        boilerplate: `def remove_char(s: str, c: str) -> str:\n    # Your code here\n    pass`
    },
    {
        title: "Find the Second Largest Element in a List",
        difficulty: "medium",
        description: `Write a function \`second_largest(nums: list[int]) -> int\` that returns the second largest element in a list.`,
        example: `# Input: [1, 2, 3, 4, 5]\n# Output: 4\n\n# Input: [10, 10, 10, 9]\n# Output: 10`,
        boilerplate: `def second_largest(nums: list[int]) -> int:\n    # Your code here\n    pass`
    },

    {
        title: "Longest Substring Without Repeating Characters",
        difficulty: "hard",
        description: `Write a function \`longest_unique_substring(s: str) -> str\` that returns the longest substring without repeating characters.`,
        example: `# Input: 'abcabcbb'\n# Output: 'abc'\n\n# Input: 'bbbbb'\n# Output: 'b'`,
        boilerplate: `def longest_unique_substring(s: str) -> str:\n    # Your code here\n    pass`
    },
    {
        title: "Matrix Transposition",
        difficulty: "hard",
        description: `Write a function \`transpose_matrix(matrix: list[list[int]]) -> list[list[int]]\` that transposes a matrix.`,
        example: `# Input: [[1, 2, 3], [4, 5, 6], [7, 8, 9]]\n# Output: [[1, 4, 7], [2, 5, 8], [3, 6, 9]]`,
        boilerplate: `def transpose_matrix(matrix: list[list[int]]) -> list[list[int]]:\n    # Your code here\n    pass`
    },
    {
        title: "Spiral Matrix",
        difficulty: "hard",
        description: `Write a function \`spiral_matrix(n: int) -> list[list[int]]\` that generates a spiral matrix of size n x n.`,
        example: `# Input: 3\n# Output: [[1, 2, 3], [8, 9, 4], [7, 6, 5]]`,
        boilerplate: `def spiral_matrix(n: int) -> list[list[int]]:\n    # Your code here\n    pass`
    },
    {
        title: "Find the Median of Two Sorted Arrays",
        difficulty: "hard",
        description: `Write a function \`find_median_sorted_arrays(nums1: list[int], nums2: list[int]) -> float\` that finds the median of two sorted arrays.`,
        example: `# Input: [1, 3], [2]\n# Output: 2.0\n\n# Input: [1, 2], [3, 4]\n# Output: 2.5`,
        boilerplate: `def find_median_sorted_arrays(nums1: list[int], nums2: list[int]) -> float:\n    # Your code here\n    pass`
    },
    {
        title: "Sudoku Solver",
        difficulty: "hard",
        description: `Write a function \`solve_sudoku(board: list[list[int]]) -> bool\` that solves a Sudoku puzzle.`,
        example: `# Input: [[5, 3, 0, 0, 7, 0, 0, 0, 0], ...]\n# Output: True`,
        boilerplate: `def solve_sudoku(board: list[list[int]]) -> bool:\n    # Your code here\n    pass`
    },
    {
        title: "N-Queens Problem",
        difficulty: "hard",
        description: `Write a function \`n_queens(n: int) -> list[list[str]]\` that returns all solutions to the N-Queens problem.`,
        example: `# Input: 4\n# Output: [['.Q..', '...Q', 'Q...', '..Q.'], ...]`,
        boilerplate: `def n_queens(n: int) -> list[list[str]]:\n    # Your code here\n    pass`
    },
    {
        title: "Palindrome Partitioning",
        difficulty: "hard",
        description: `Write a function \`partition_palindrome(s: str) -> list[list[str]]\` that returns all possible palindrome partitioning of a string.`,
        example: `# Input: 'aab'\n# Output: [['a', 'a', 'b'], ['aa', 'b']]`,
        boilerplate: `def partition_palindrome(s: str) -> list[list[str]]:\n    # Your code here\n    pass`
    },
    {
        title: "Word Ladder",
        difficulty: "hard",
        description: `Write a function \`word_ladder(begin: str, end: str, word_list: list[str]) -> int\` that finds the length of the shortest transformation sequence from begin to end.`,
        example: `# Input: 'hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log', 'cog']\n# Output: 5`,
        boilerplate: `def word_ladder(begin: str, end: str, word_list: list[str]) -> int:\n    # Your code here\n    pass`
    },
    {
        title: "Largest Rectangle in Histogram",
        difficulty: "hard",
        description: `Write a function \`largest_rectangle_area(heights: list[int]) -> int\` that returns the area of the largest rectangle in a histogram.`,
        example: `# Input: [2, 1, 5, 6, 2, 3]\n# Output: 10`,
        boilerplate: `def largest_rectangle_area(heights: list[int]) -> int:\n    # Your code here\n    pass`
    }
];
