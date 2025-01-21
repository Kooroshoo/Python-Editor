const questions = [
    // Programming Basics
    {
        title: "Sum of Digits",
        difficulty: "easy",
        category: "basics",
        description: `Write a function \`sum_of_digits(n: int) -> int\` that returns the sum of the digits of a number.`,
        example: `# Input: 123\n# Output: 6\n\n# Input: 987\n# Output: 24\n\n# Input: 500\n# Output: 5`,
        boilerplate: `def sum_of_digits(n: int) -> int:\n    # Your code here\n    pass`
    },
    {
        title: "Count Vowels",
        difficulty: "easy",
        category: "basics",
        description: `Write a function \`count_vowels(s: str) -> int\` that counts the number of vowels in a string.`,
        example: `# Input: 'hello'\n# Output: 2\n\n# Input: 'world'\n# Output: 1\n\n# Input: 'Python'\n# Output: 1`,
        boilerplate: `def count_vowels(s: str) -> int:\n    # Your code here\n    pass`
    },
    {
        title: "Find Maximum in List",
        difficulty: "easy",
        category: "basics",
        description: `Write a function \`find_max(nums: list[int]) -> int\` that returns the maximum number from the list.`,
        example: `# Input: [1, 3, 5, 2, 4]\n# Output: 5\n\n# Input: [10, 15, 2, 8, 0]\n# Output: 15\n\n# Input: [7, 7, 7]\n# Output: 7`,
        boilerplate: `def find_max(nums: list[int]) -> int:\n    # Your code here\n    pass`
    },
    {
        title: "Count Occurrences of a Character",
        difficulty: "easy",
        category: "basics",
        description: `Write a function \`count_char(s: str, c: str) -> int\` that counts the occurrences of a specific character in a string.`,
        example: `# Input: 'hello', 'l'\n# Output: 2\n\n# Input: 'world', 'o'\n# Output: 1\n\n# Input: 'banana', 'a'\n# Output: 3`,
        boilerplate: `def count_char(s: str, c: str) -> int:\n    # Your code here\n    pass`
    },
    {
        title: "Palindrome Check",
        difficulty: "easy",
        category: "basics",
        description: `Write a function \`is_palindrome(s: str) -> bool\` that checks if a string is a palindrome.`,
        example: `# Input: 'madam'\n# Output: True\n\n# Input: 'hello'\n# Output: False\n\n# Input: 'racecar'\n# Output: True`,
        boilerplate: `def is_palindrome(s: str) -> bool:\n    # Your code here\n    pass`
    },
    {
        title: "Fahrenheit to Celsius",
        difficulty: "easy",
        category: "basics",
        description: `Write a function \`fahrenheit_to_celsius(f: float) -> float\` that converts Fahrenheit to Celsius.`,
        example: `# Input: 32\n# Output: 0\n\n# Input: 100\n# Output: 37.78\n\n# Input: 212\n# Output: 100`,
        boilerplate: `def fahrenheit_to_celsius(f: float) -> float:\n    # Your code here\n    pass`
    },
    {
        title: "Find the Length of a List",
        difficulty: "easy",
        category: "basics",
        description: `Write a function \`list_length(lst: list) -> int\` that returns the length of a list.`,
        example: `# Input: [1, 2, 3]\n# Output: 3\n\n# Input: [10, 20, 30, 40]\n# Output: 4\n\n# Input: []\n# Output: 0`,
        boilerplate: `def list_length(lst: list) -> int:\n    # Your code here\n    pass`
    },
    {
        title: "Remove Duplicates from List",
        difficulty: "easy",
        category: "basics",
        description: `Write a function \`remove_duplicates(lst: list) -> list\` that removes duplicate values from a list.`,
        example: `# Input: [1, 2, 2, 3, 3, 4]\n# Output: [1, 2, 3, 4]\n\n# Input: [10, 10, 10, 20, 30]\n# Output: [10, 20, 30]`,
        boilerplate: `def remove_duplicates(lst: list) -> list:\n    # Your code here\n    pass`
    },
    {
        title: "Find the First Non-repeating Character",
        difficulty: "easy",
        category: "basics",
        description: `Write a function \`first_non_repeating(s: str) -> str\` that returns the first non-repeating character in a string.`,
        example: `# Input: 'swiss'\n# Output: 'w'\n\n# Input: 'aabbcc'\n# Output: ''\n\n# Input: 'abc'\n# Output: 'a'`,
        boilerplate: `def first_non_repeating(s: str) -> str:\n    # Your code here\n    pass`
    },

    {
        title: "Merge Two Sorted Lists",
        difficulty: "medium",
        category: "basics",
        description: `Write a function \`merge_sorted_lists(list1: list[int], list2: list[int]) -> list[int]\` that merges two sorted lists into one sorted list.`,
        example: `# Input: [1, 3, 5], [2, 4, 6]\n# Output: [1, 2, 3, 4, 5, 6]\n\n# Input: [10, 15, 20], [5, 10, 15]\n# Output: [5, 10, 10, 15, 15, 20]`,
        boilerplate: `def merge_sorted_lists(list1: list[int], list2: list[int]) -> list[int]:\n    # Your code here\n    pass`
    },
    {
        title: "Sort a List of Tuples by the Second Element",
        difficulty: "medium",
        category: "basics",
        description: `Write a function \`sort_by_second(lst: list[tuple]) -> list[tuple]\` that sorts a list of tuples by the second element.`,
        example: `# Input: [(1, 3), (4, 1), (2, 2)]\n# Output: [(4, 1), (2, 2), (1, 3)]\n\n# Input: [(10, 20), (20, 10), (5, 5)]\n# Output: [(5, 5), (20, 10), (10, 20)]`,
        boilerplate: `def sort_by_second(lst: list[tuple]) -> list[tuple]:\n    # Your code here\n    pass`
    },
    {
        title: "Find Common Elements Between Two Lists",
        difficulty: "medium",
        category: "basics",
        description: `Write a function \`common_elements(list1: list[int], list2: list[int]) -> list[int]\` that returns a list of common elements between two lists.`,
        example: `# Input: [1, 2, 3, 4], [3, 4, 5, 6]\n# Output: [3, 4]\n\n# Input: [10, 20, 30], [30, 40, 50]\n# Output: [30]`,
        boilerplate: `def common_elements(list1: list[int], list2: list[int]) -> list[int]:\n    # Your code here\n    pass`
    },
    {
        title: "Find the GCD of Two Numbers",
        difficulty: "medium",
        category: "basics",
        description: `Write a function \`gcd(a: int, b: int) -> int\` that returns the greatest common divisor (GCD) of two numbers.`,
        example: `# Input: 12, 15\n# Output: 3\n\n# Input: 56, 98\n# Output: 14\n\n# Input: 18, 24\n# Output: 6`,
        boilerplate: `def gcd(a: int, b: int) -> int:\n    # Your code here\n    pass`
    },
    {
        title: "Anagram Check",
        difficulty: "medium",
        category: "basics",
        description: `Write a function \`are_anagrams(s1: str, s2: str) -> bool\` that checks if two strings are anagrams.`,
        example: `# Input: 'listen', 'silent'\n# Output: True\n\n# Input: 'hello', 'world'\n# Output: False`,
        boilerplate: `def are_anagrams(s1: str, s2: str) -> bool:\n    # Your code here\n    pass`
    },
    {
        title: "Rotate List by N Elements",
        difficulty: "medium",
        category: "basics",
        description: `Write a function \`rotate_list(lst: list[int], n: int) -> list[int]\` that rotates a list by N elements.`,
        example: `# Input: [1, 2, 3, 4, 5], 2\n# Output: [4, 5, 1, 2, 3]\n\n# Input: [10, 20, 30, 40], 1\n# Output: [40, 10, 20, 30]`,
        boilerplate: `def rotate_list(lst: list[int], n: int) -> list[int]:\n    # Your code here\n    pass`
    },
    {
        title: "Count Words in a String",
        difficulty: "medium",
        category: "basics",
        description: `Write a function \`count_words(s: str) -> int\` that counts the number of words in a string.`,
        example: `# Input: 'Hello world'\n# Output: 2\n\n# Input: 'I am learning Python'\n# Output: 4`,
        boilerplate: `def count_words(s: str) -> int:\n    # Your code here\n    pass`
    },
    {
        title: "Remove Specific Character from a String",
        difficulty: "medium",
        category: "basics",
        description: `Write a function \`remove_char(s: str, c: str) -> str\` that removes all occurrences of a character from a string.`,
        example: `# Input: 'hello', 'l'\n# Output: 'heo'\n\n# Input: 'banana', 'a'\n# Output: 'bnn'`,
        boilerplate: `def remove_char(s: str, c: str) -> str:\n    # Your code here\n    pass`
    },
    {
        title: "Find the Second Largest Element in a List",
        difficulty: "medium",
        category: "basics",
        description: `Write a function \`second_largest(nums: list[int]) -> int\` that returns the second largest element in a list.`,
        example: `# Input: [1, 2, 3, 4, 5]\n# Output: 4\n\n# Input: [10, 10, 10, 9]\n# Output: 10`,
        boilerplate: `def second_largest(nums: list[int]) -> int:\n    # Your code here\n    pass`
    },

    {
        title: "Longest Substring Without Repeating Characters",
        difficulty: "hard",
        category: "basics",
        description: `Write a function \`longest_unique_substring(s: str) -> str\` that returns the longest substring without repeating characters.`,
        example: `# Input: 'abcabcbb'\n# Output: 'abc'\n\n# Input: 'bbbbb'\n# Output: 'b'`,
        boilerplate: `def longest_unique_substring(s: str) -> str:\n    # Your code here\n    pass`
    },
    {
        title: "Matrix Transposition",
        difficulty: "hard",
        category: "basics",
        description: `Write a function \`transpose_matrix(matrix: list[list[int]]) -> list[list[int]]\` that transposes a matrix.`,
        example: `# Input: [[1, 2, 3], [4, 5, 6], [7, 8, 9]]\n# Output: [[1, 4, 7], [2, 5, 8], [3, 6, 9]]`,
        boilerplate: `def transpose_matrix(matrix: list[list[int]]) -> list[list[int]]:\n    # Your code here\n    pass`
    },
    {
        title: "Spiral Matrix",
        difficulty: "hard",
        category: "basics",
        description: `Write a function \`spiral_matrix(n: int) -> list[list[int]]\` that generates a spiral matrix of size n x n.`,
        example: `# Input: 3\n# Output: [[1, 2, 3], [8, 9, 4], [7, 6, 5]]`,
        boilerplate: `def spiral_matrix(n: int) -> list[list[int]]:\n    # Your code here\n    pass`
    },
    {
        title: "Find the Median of Two Sorted Arrays",
        difficulty: "hard",
        category: "basics",
        description: `Write a function \`find_median_sorted_arrays(nums1: list[int], nums2: list[int]) -> float\` that finds the median of two sorted arrays.`,
        example: `# Input: [1, 3], [2]\n# Output: 2.0\n\n# Input: [1, 2], [3, 4]\n# Output: 2.5`,
        boilerplate: `def find_median_sorted_arrays(nums1: list[int], nums2: list[int]) -> float:\n    # Your code here\n    pass`
    },
    {
        title: "Sudoku Solver",
        difficulty: "hard",
        category: "basics",
        description: `Write a function \`solve_sudoku(board: list[list[int]]) -> bool\` that solves a Sudoku puzzle.`,
        example: `# Input: [[5, 3, 0, 0, 7, 0, 0, 0, 0], ...]\n# Output: True`,
        boilerplate: `def solve_sudoku(board: list[list[int]]) -> bool:\n    # Your code here\n    pass`
    },
    {
        title: "N-Queens Problem",
        difficulty: "hard",
        category: "basics",
        description: `Write a function \`n_queens(n: int) -> list[list[str]]\` that returns all solutions to the N-Queens problem.`,
        example: `# Input: 4\n# Output: [['.Q..', '...Q', 'Q...', '..Q.'], ...]`,
        boilerplate: `def n_queens(n: int) -> list[list[str]]:\n    # Your code here\n    pass`
    },
    {
        title: "Palindrome Partitioning",
        difficulty: "hard",
        category: "basics",
        description: `Write a function \`partition_palindrome(s: str) -> list[list[str]]\` that returns all possible palindrome partitioning of a string.`,
        example: `# Input: 'aab'\n# Output: [['a', 'a', 'b'], ['aa', 'b']]`,
        boilerplate: `def partition_palindrome(s: str) -> list[list[str]]:\n    # Your code here\n    pass`
    },
    {
        title: "Word Ladder",
        difficulty: "hard",
        category: "basics",
        description: `Write a function \`word_ladder(begin: str, end: str, word_list: list[str]) -> int\` that finds the length of the shortest transformation sequence from begin to end.`,
        example: `# Input: 'hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log', 'cog']\n# Output: 5`,
        boilerplate: `def word_ladder(begin: str, end: str, word_list: list[str]) -> int:\n    # Your code here\n    pass`
    },
    {
        title: "Largest Rectangle in Histogram",
        difficulty: "hard",
        category: "basics",
        description: `Write a function \`largest_rectangle_area(heights: list[int]) -> int\` that returns the area of the largest rectangle in a histogram.`,
        example: `# Input: [2, 1, 5, 6, 2, 3]\n# Output: 10`,
        boilerplate: `def largest_rectangle_area(heights: list[int]) -> int:\n    # Your code here\n    pass`
    },

    // Design Pattern Questions
    {
        title: "Singleton Pattern",
        difficulty: "easy",
        category: "design-patterns",
        description: `Implement the Singleton design pattern for a class in Python. Ensure that only one instance of the class is created.`,
        example: `# Example:\nclass Singleton:\n    # Your implementation here\n\n# Ensure only one instance exists:\na = Singleton()\nb = Singleton()\nassert a is b`,
        boilerplate: `class Singleton:\n    _instance = None\n\n    def __new__(cls, *args, **kwargs):\n        # Your code here\n        pass\n\n# Example usage\na = Singleton()\nb = Singleton()\nprint(a is b)  # Should print True`
    },
    {
        title: "Factory Pattern",
        difficulty: "medium",
        category: "design-patterns",
        description: `Implement a Factory pattern to create objects of different types (e.g., Car, Bike) based on input.`,
        example: `# Example:\ndef vehicle_factory(vehicle_type: str):\n    # Returns an object based on vehicle_type\n\ncar = vehicle_factory('car')\nbike = vehicle_factory('bike')\nassert isinstance(car, Car)\nassert isinstance(bike, Bike)`,
        boilerplate: `class Car:\n    def __str__(self):\n        return "Car"\n\nclass Bike:\n    def __str__(self):\n        return "Bike"\n\ndef vehicle_factory(vehicle_type: str):\n    # Your code here\n    pass\n\n# Example usage\nprint(vehicle_factory('car'))  # Should print: Car\nprint(vehicle_factory('bike'))  # Should print: Bike`
    },
    {
        title: "Observer Pattern",
        difficulty: "hard",
        category: "design-patterns",
        description: `Implement the Observer pattern where observers can subscribe to a subject and get notified of changes.`,
        example: `# Example:\nclass Subject:\n    # Subject class to notify observers\n\nclass Observer:\n    # Observer class to receive updates\n\nsubject = Subject()\nobserver1 = Observer()\nobserver2 = Observer()\nsubject.subscribe(observer1)\nsubject.subscribe(observer2)\nsubject.notify("Event occurred")\n# Both observer1 and observer2 should receive the notification.`,
        boilerplate: `class Subject:\n    def __init__(self):\n        self.observers = []\n\n    def subscribe(self, observer):\n        # Add observer to the list\n        pass\n\n    def unsubscribe(self, observer):\n        # Remove observer from the list\n        pass\n\n    def notify(self, message):\n        # Notify all observers\n        pass\n\nclass Observer:\n    def update(self, message):\n        # React to the notification\n        pass\n\n# Example usage\nsubject = Subject()\nobserver1 = Observer()\nobserver2 = Observer()\nsubject.subscribe(observer1)\nsubject.subscribe(observer2)\nsubject.notify("Event occurred")`
    },
    {
        title: "Builder Pattern",
        difficulty: "medium",
        category: "design-patterns",
        description: `Implement the Builder pattern to construct a complex object step by step.`,
        example: `# Example:\nbuilder = HouseBuilder()\nbuilder.set_walls(4).set_doors(2).set_roof(True)\nhouse = builder.build()\nassert house.walls == 4 and house.doors == 2 and house.roof`,
        boilerplate: `class House:\n    def __init__(self, walls, doors, roof):\n        self.walls = walls\n        self.doors = doors\n        self.roof = roof\n\nclass HouseBuilder:\n    def __init__(self):\n        self.walls = 0\n        self.doors = 0\n        self.roof = False\n\n    def set_walls(self, walls):\n        self.walls = walls\n        return self\n\n    def set_doors(self, doors):\n        self.doors = doors\n        return self\n\n    def set_roof(self, roof):\n        self.roof = roof\n        return self\n\n    def build(self):\n        return House(self.walls, self.doors, self.roof)`
    },
    {
        title: "Strategy Pattern",
        difficulty: "medium",
        category: "design-patterns",
        description: `Implement the Strategy pattern where multiple algorithms can be used interchangeably.`,
        example: `# Example:\ndef quick_sort(data):\n    # Implementation\n\nstrategy = SortingStrategy(quick_sort)\nstrategy.execute(data)`,
        boilerplate: `class SortingStrategy:\n    def __init__(self, strategy):\n        self.strategy = strategy\n\n    def execute(self, data):\n        return self.strategy(data)\n\n# Example strategies\ndef quick_sort(data):\n    # Quick sort implementation\n    pass\n\ndef merge_sort(data):\n    # Merge sort implementation\n    pass\n\n# Example usage\nstrategy = SortingStrategy(quick_sort)\nstrategy.execute([3, 1, 2])`
    },
    {
        title: "Command Pattern",
        difficulty: "medium",
        category: "design-patterns",
        description: `Implement the Command pattern to encapsulate a request as an object.`,
        example: `# Example:\nlight = Light()\ncommand = TurnOnCommand(light)\nremote = RemoteControl(command)\nremote.press()`,
        boilerplate: `class Light:\n    def turn_on(self):\n        print("Light is ON")\n\n    def turn_off(self):\n        print("Light is OFF")\n\nclass Command:\n    def execute(self):\n        pass\n\nclass TurnOnCommand(Command):\n    def __init__(self, light):\n        self.light = light\n\n    def execute(self):\n        self.light.turn_on()\n\n# Example usage\nlight = Light()\ncommand = TurnOnCommand(light)\ncommand.execute()`
    },
    
    
    

    // Data Structures and Algorithms
    {
        title: "Reverse a Linked List",
        difficulty: "medium",
        category: "data-structures-and-algorithms",
        description: `Write a function \`reverse_linked_list(head: Node) -> Node\` to reverse a linked list.`,
        example: `# Input: 1 -> 2 -> 3 -> 4 -> None\n# Output: 4 -> 3 -> 2 -> 1 -> None`,
        boilerplate: `class Node:\n    def __init__(self, value):\n        self.value = value\n        self.next = None\n\ndef reverse_linked_list(head: Node) -> Node:\n    # Your code here\n    pass`
    },
    {
        title: "Binary Search",
        difficulty: "easy",
        category: "data-structures-and-algorithms",
        description: `Write a function \`binary_search(nums: list[int], target: int) -> int\` that returns the index of the target in a sorted list, or -1 if not found.`,
        example: `# Input: nums = [1, 3, 5, 7, 9], target = 5\n# Output: 2\n\n# Input: nums = [1, 3, 5, 7, 9], target = 10\n# Output: -1`,
        boilerplate: `def binary_search(nums: list[int], target: int) -> int:\n    # Your code here\n    pass`
    },
    {
        title: "Find Peak Element",
        difficulty: "medium",
        category: "data-structures-and-algorithms",
        description: `Write a function \`find_peak(nums: list[int]) -> int\` to find a peak element in an array.`,
        example: `# Input: [1, 2, 3, 1]\n# Output: 3\n\n# Input: [1, 2, 1, 3, 5, 6, 4]\n# Output: 6`,
        boilerplate: `def find_peak(nums: list[int]) -> int:\n    # Your code here\n    pass`
    },
    {
        title: "Merge Two Sorted Lists",
        difficulty: "medium",
        category: "data-structures-and-algorithms",
        description: `Write a function \`merge_sorted_lists(l1: Node, l2: Node) -> Node\` to merge two sorted linked lists.`,
        example: `# Input: 1 -> 3 -> 5, 2 -> 4 -> 6\n# Output: 1 -> 2 -> 3 -> 4 -> 5 -> 6`,
        boilerplate: `class Node:\n    def __init__(self, value):\n        self.value = value\n        self.next = None\n\ndef merge_sorted_lists(l1: Node, l2: Node) -> Node:\n    # Your code here\n    pass`
    },
    {
        title: "Detect Cycle in Linked List",
        difficulty: "hard",
        category: "data-structures-and-algorithms",
        description: `Write a function \`has_cycle(head: Node) -> bool\` to determine if a linked list has a cycle.`,
        example: `# Input: 1 -> 2 -> 3 -> 4 -> 2 (cycle)\n# Output: True\n\n# Input: 1 -> 2 -> 3 -> 4 -> None\n# Output: False`,
        boilerplate: `class Node:\n    def __init__(self, value):\n        self.value = value\n        self.next = None\n\ndef has_cycle(head: Node) -> bool:\n    # Your code here\n    pass`
    },
    {
        title: "Find Kth Largest Element",
        difficulty: "medium",
        category: "data-structures-and-algorithms",
        description: `Write a function \`find_kth_largest(nums: list[int], k: int) -> int\` to find the kth largest element in an unsorted array.`,
        example: `# Input: nums = [3, 2, 1, 5, 6, 4], k = 2\n# Output: 5`,
        boilerplate: `def find_kth_largest(nums: list[int], k: int) -> int:\n    # Your code here\n    pass`
    },
    {
        title: "Validate Binary Search Tree",
        difficulty: "hard",
        category: "data-structures-and-algorithms",
        description: `Write a function \`is_valid_bst(root: TreeNode) -> bool\` to check if a binary tree is a valid binary search tree.`,
        example: `# Input: [2, 1, 3]\n# Output: True\n\n# Input: [5, 1, 4, null, null, 3, 6]\n# Output: False`,
        boilerplate: `class TreeNode:\n    def __init__(self, val=0, left=None, right=None):\n        self.val = val\n        self.left = left\n        self.right = right\n\ndef is_valid_bst(root: TreeNode) -> bool:\n    # Your code here\n    pass`
    },
    {
        title: "Longest Substring Without Repeating Characters",
        difficulty: "medium",
        category: "data-structures-and-algorithms",
        description: `Write a function \`length_of_longest_substring(s: str) -> int\` to find the length of the longest substring without repeating characters.`,
        example: `# Input: "abcabcbb"\n# Output: 3\n\n# Input: "bbbbb"\n# Output: 1`,
        boilerplate: `def length_of_longest_substring(s: str) -> int:\n    # Your code here\n    pass`
    },
    {
        title: "Lowest Common Ancestor in Binary Tree",
        difficulty: "hard",
        category: "data-structures-and-algorithms",
        description: `Write a function \`lowest_common_ancestor(root: TreeNode, p: TreeNode, q: TreeNode) -> TreeNode\` to find the lowest common ancestor of two nodes in a binary tree.`,
        example: `# Input: [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1\n# Output: 3`,
        boilerplate: `class TreeNode:\n    def __init__(self, val=0, left=None, right=None):\n        self.val = val\n        self.left = left\n        self.right = right\n\ndef lowest_common_ancestor(root: TreeNode, p: TreeNode, q: TreeNode) -> TreeNode:\n    # Your code here\n    pass`
    },

    

    // System Design
    {
        title: "Design a Parking Lot System",
        difficulty: "easy",
        category: "system-design",
        description: `Design a parking lot system that supports different types of parking spaces (e.g., small, medium, large) and allows cars to park, leave, and check if parking is available.`,
        example: `# Input: parking_lot = ParkingLot()\n# parking_lot.park("car1", "small")\n# parking_lot.leave("car1")\n# Output: True or False (depending on availability)`,
        boilerplate: `class ParkingLot:\n    def __init__(self):\n        # Your code here\n        pass\n\n    def park(self, car_id: str, size: str) -> bool:\n        # Your code here\n        pass\n\n    def leave(self, car_id: str) -> bool:\n        # Your code here\n        pass\n\n    def is_available(self, size: str) -> bool:\n        # Your code here\n        pass`
    },
    {
        title: "Design a File System",
        difficulty: "easy",
        category: "system-design",
        description: `Design a file system that supports creating, deleting, and retrieving files and directories. The system should handle nested directories and file sizes.`,
        example: `# Input: file_system = FileSystem()\n# file_system.create("/home/user/file1.txt")\n# file_system.read("/home/user/file1.txt")\n# Output: file content`,
        boilerplate: `class FileSystem:\n    def __init__(self):\n        # Your code here\n        pass\n\n    def create(self, path: str, content: str = "") -> None:\n        # Your code here\n        pass\n\n    def read(self, path: str) -> str:\n        # Your code here\n        pass\n\n    def delete(self, path: str) -> bool:\n        # Your code here\n        pass`
    },
    {
        title: "Design a To-Do List Application",
        difficulty: "easy",
        category: "system-design",
        description: `Design a simple To-Do list application where users can add tasks, mark tasks as completed, and delete tasks.`,
        example: `# Input: todo_list = TodoList()\n# todo_list.add_task("Buy groceries")\n# todo_list.complete_task("Buy groceries")\n# todo_list.delete_task("Buy groceries")`,
        boilerplate: `class TodoList:\n    def __init__(self):\n        # Your code here\n        pass\n\n    def add_task(self, task: str) -> None:\n        # Your code here\n        pass\n\n    def complete_task(self, task: str) -> bool:\n        # Your code here\n        pass\n\n    def delete_task(self, task: str) -> bool:\n        # Your code here\n        pass`
    },
    {
        title: "Design an ATM System",
        difficulty: "easy",
        category: "system-design",
        description: `Design an ATM system that allows users to deposit, withdraw, and check their balance. The system should support basic operations like authenticating users and limiting withdrawals based on the user's balance.`,
        example: `# Input: atm = ATM()\n# atm.create_account("user1", 1000)\n# atm.deposit("user1", 500)\n# atm.withdraw("user1", 200)\n# Output: Updated balance`,
        boilerplate: `class ATM:\n    def __init__(self):\n        # Your code here\n        pass\n\n    def create_account(self, user: str, balance: float) -> None:\n        # Your code here\n        pass\n\n    def deposit(self, user: str, amount: float) -> bool:\n        # Your code here\n        pass\n\n    def withdraw(self, user: str, amount: float) -> bool:\n        # Your code here\n        pass\n\n    def check_balance(self, user: str) -> float:\n        # Your code here\n        pass`
    },
    {
        title: "Design an Email Notification System",
        difficulty: "easy",
        category: "system-design",
        description: `Design an email notification system that allows users to send, receive, and track email deliveries. The system should support basic operations like composing and sending emails.`,
        example: `# Input: email_system = EmailSystem()\n# email_system.send_email("from@example.com", "to@example.com", "Hello", "This is an email.")\n# Output: Delivery status`,
        boilerplate: `class EmailSystem:\n    def __init__(self):\n        # Your code here\n        pass\n\n    def send_email(self, from_email: str, to_email: str, subject: str, body: str) -> bool:\n        # Your code here\n        pass\n\n    def check_status(self) -> str:\n        # Your code here\n        pass`
    },

    {
        title: "Design a Rate Limiter",
        difficulty: "medium",
        category: "system-design",
        description: `Implement a rate limiter in Python that limits the number of function calls within a time window.`,
        example: `# Input: rate_limiter = RateLimiter(2, 10)\n# rate_limiter.call(func)\n# Output: Executes func only twice in 10 seconds.`,
        boilerplate: `import time\n\nclass RateLimiter:\n    def __init__(self, max_calls: int, time_window: int):\n        # Your code here\n        pass\n\n    def call(self, func):\n        # Your code here\n        pass`
    },
    {
        title: "Implement a URL Shortener",
        difficulty: "medium",
        category: "system-design",
        description: `Design a basic URL shortener with functionality to shorten and retrieve URLs.`,
        example: `# Input: shortener = URLShortener()\n# short_url = shortener.shorten('https://example.com')\n# Output: Retrieve the original URL using short_url.`,
        boilerplate: `class URLShortener:\n    def __init__(self):\n        self.url_map = {}\n        self.counter = 0\n\n    def shorten(self, url: str) -> str:\n        # Your code here\n        pass\n\n    def retrieve(self, short_url: str) -> str:\n        # Your code here\n        pass`
    },
    {
        title: "Cache System",
        difficulty: "hard",
        category: "system-design",
        description: `Design and implement a cache system with \`get\` and \`put\` operations and a Least Recently Used (LRU) eviction policy.`,
        example: `# Example:\ncache = LRUCache(2)\ncache.put(1, 1)\ncache.put(2, 2)\nassert cache.get(1) == 1\ncache.put(3, 3) # Evicts key 2\nassert cache.get(2) == -1`,
        boilerplate: `class LRUCache:\n    def __init__(self, capacity: int):\n        # Your code here\n        pass\n\n    def get(self, key: int) -> int:\n        # Your code here\n        pass\n\n    def put(self, key: int, value: int):\n        # Your code here\n        pass`
    },
    {
        title: "Message Queue",
        difficulty: "medium",
        category: "system-design",
        description: `Design and implement a basic message queue system with enqueue and dequeue operations.`,
        example: `# Example:\nqueue = MessageQueue()\nqueue.enqueue("Message 1")\nqueue.enqueue("Message 2")\nassert queue.dequeue() == "Message 1"\nassert queue.dequeue() == "Message 2"`,
        boilerplate: `class MessageQueue:\n    def __init__(self):\n        # Your code here\n        pass\n\n    def enqueue(self, message: str):\n        # Your code here\n        pass\n\n    def dequeue(self) -> str:\n        # Your code here\n        pass`
    },
    {
        title: "Search Autocomplete System",
        difficulty: "hard",
        category: "system-design",
        description: `Design and implement a search autocomplete system that suggests words based on a prefix.`,
        example: `# Example:\nautocomplete = SearchAutocomplete()\nautocomplete.add_word("apple")\nautocomplete.add_word("application")\nautocomplete.add_word("banana")\nassert autocomplete.get_suggestions("app") == ["apple", "application"]`,
        boilerplate: `class SearchAutocomplete:\n    def __init__(self):\n        # Your code here\n        pass\n\n    def add_word(self, word: str):\n        # Your code here\n        pass\n\n    def get_suggestions(self, prefix: str) -> list:\n        # Your code here\n        pass`
    },
    {
        title: "Notification System",
        difficulty: "medium",
        category: "system-design",
        description: `Design and implement a notification system where users can subscribe to topics and get notified about updates.`,
        example: `# Example:\nnotification_system = NotificationSystem()\nnotification_system.subscribe("user1", "sports")\nnotification_system.notify("sports", "Game starts at 7 PM")\nassert notification_system.get_user_notifications("user1") == ["Game starts at 7 PM"]`,
        boilerplate: `class NotificationSystem:\n    def __init__(self):\n        # Your code here\n        pass\n\n    def subscribe(self, user: str, topic: str):\n        # Your code here\n        pass\n\n    def notify(self, topic: str, message: str):\n        # Your code here\n        pass\n\n    def get_user_notifications(self, user: str) -> list:\n        # Your code here\n        pass`
    },
    {
        title: "File Storage System",
        difficulty: "hard",
        category: "system-design",
        description: `Design and implement a file storage system with basic operations like upload, download, and delete.`,
        example: `# Example:\nstorage = FileStorage()\nstorage.upload("file1.txt", "content")\nassert storage.download("file1.txt") == "content"\nstorage.delete("file1.txt")\nassert storage.download("file1.txt") is None`,
        boilerplate: `class FileStorage:\n    def __init__(self):\n        # Your code here\n        pass\n\n    def upload(self, filename: str, content: str):\n        # Your code here\n        pass\n\n    def download(self, filename: str) -> str:\n        # Your code here\n        pass\n\n    def delete(self, filename: str):\n        # Your code here\n        pass`
    },
    {
        title: "Distributed Key-Value Store",
        difficulty: "hard",
        category: "system-design",
        description: `Design and implement a distributed key-value store with basic get, set, and delete operations.`,
        example: `# Example:\nkvs = KeyValueStore()\nkvs.set("key1", "value1")\nassert kvs.get("key1") == "value1"\nkvs.delete("key1")\nassert kvs.get("key1") is None`,
        boilerplate: `class KeyValueStore:\n    def __init__(self):\n        # Your code here\n        pass\n\n    def set(self, key: str, value: str):\n        # Your code here\n        pass\n\n    def get(self, key: str) -> str:\n        # Your code here\n        pass\n\n    def delete(self, key: str):\n        # Your code here\n        pass`
    },
    {
        title: "Content Delivery Network",
        difficulty: "hard",
        category: "system-design",
        description: `Design and implement a simplified Content Delivery Network (CDN) to cache and serve content closer to users.`,
        example: `# Example:\ncdn = CDN()\ncdn.cache_content("file1.txt", "content")\nassert cdn.serve_content("file1.txt") == "content"`,
        boilerplate: `class CDN:\n    def __init__(self):\n        # Your code here\n        pass\n\n    def cache_content(self, filename: str, content: str):\n        # Your code here\n        pass\n\n    def serve_content(self, filename: str) -> str:\n        # Your code here\n        pass`
    },
    {
        title: "Load Balancer",
        difficulty: "medium",
        category: "system-design",
        description: `Design and implement a load balancer to distribute traffic among multiple servers.`,
        example: `# Example:\nlb = LoadBalancer()\nlb.add_server("server1")\nlb.add_server("server2")\nassert lb.route_request() in ["server1", "server2"]`,
        boilerplate: `class LoadBalancer:\n    def __init__(self):\n        # Your code here\n        pass\n\n    def add_server(self, server: str):\n        # Your code here\n        pass\n\n    def route_request(self) -> str:\n        # Your code here\n        pass`
    }
    
    
    
    
    
    
    

];
