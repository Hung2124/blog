---
title: "📚 AIO2025 - Week 2: Python Lists, SQL & Git Mastery"
published: 2025-06-15
description: "Deep dive into Python data structures, database design with ERD, and Git version control - essential skills for AI development"
image: ""
tags: ["Python", "SQL", "Git", "Data Structures", "Database Design", "Version Control", "Week2"]
category: "Learning Notes"
draft: false
---

Welcome to Week 2 of the AIO2025 journey! This week, we'll explore three fundamental pillars of programming and software development: **Python Lists & Data Structures**, **Database Design with SQL**, and **Git Version Control**.

> 💡 **Learning Objectives:** Master Python data structures, design professional databases, and manage source code effectively with Git.

<div class="toc-container" style="background-color: #f8f9fa; border-radius: 10px; padding: 20px; margin: 30px 0; border: 1px solid #e9ecef; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
  <div class="toc-header" style="font-weight: bold; display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
    <div style="font-size: 1.2em; color: #3273dc;">📚 Table of Contents</div>
  </div>
  
  <div class="toc-content" style="display: block; overflow: hidden;">
    <ul style="list-style-type: none; padding-left: 0;">
      <li style="margin-bottom: 8px;">
        <a href="#python-lists" style="color: #3273dc; text-decoration: none; display: flex; align-items: center;">
          <span style="margin-right: 8px;">🐍</span> 1. Python Lists - Dynamic Data Powerhouse
        </a>
        <ul style="list-style-type: none; padding-left: 20px; margin-top: 5px;">
          <li style="margin-bottom: 5px;">
            <a href="#core-characteristics" style="color: #4a4a4a; text-decoration: none;">1.1. Core Characteristics of Lists</a>
          </li>
          <li style="margin-bottom: 5px;">
            <a href="#creating-accessing" style="color: #4a4a4a; text-decoration: none;">1.2. Creating and Accessing Lists</a>
          </li>
          <li style="margin-bottom: 5px;">
            <a href="#list-methods" style="color: #4a4a4a; text-decoration: none;">1.3. List Methods</a>
          </li>
          <li style="margin-bottom: 5px;">
            <a href="#built-in-functions" style="color: #4a4a4a; text-decoration: none;">1.4. Built-in Functions for Lists</a>
          </li>
          <li style="margin-bottom: 5px;">
            <a href="#list-comprehension" style="color: #4a4a4a; text-decoration: none;">1.5. List Comprehension</a>
          </li>
          <li style="margin-bottom: 5px;">
            <a href="#2d-lists" style="color: #4a4a4a; text-decoration: none;">1.6. 2D Lists (Matrices)</a>
          </li>
        </ul>
      </li>
      <li style="margin-bottom: 8px;">
        <a href="#database-sql" style="color: #3273dc; text-decoration: none; display: flex; align-items: center;">
          <span style="margin-right: 8px;">🗄️</span> 2. Database - SQL (Part 2): Professional Database Design
        </a>
        <ul style="list-style-type: none; padding-left: 20px; margin-top: 5px;">
          <li style="margin-bottom: 5px;">
            <a href="#erd" style="color: #4a4a4a; text-decoration: none;">2.1. Entity Relationship Diagram (ERD)</a>
          </li>
          <li style="margin-bottom: 5px;">
            <a href="#normalization" style="color: #4a4a4a; text-decoration: none;">2.2. Database Normalization</a>
          </li>
        </ul>
      </li>
      <li style="margin-bottom: 8px;">
        <a href="#advanced-data-structures" style="color: #3273dc; text-decoration: none; display: flex; align-items: center;">
          <span style="margin-right: 8px;">🔧</span> 3. Advanced Data Structures
        </a>
        <ul style="list-style-type: none; padding-left: 20px; margin-top: 5px;">
          <li style="margin-bottom: 5px;">
            <a href="#tuples" style="color: #4a4a4a; text-decoration: none;">3.1. Tuples - Immutable Sequences</a>
          </li>
          <li style="margin-bottom: 5px;">
            <a href="#sets" style="color: #4a4a4a; text-decoration: none;">3.2. Sets - Unique Collections</a>
          </li>
          <li style="margin-bottom: 5px;">
            <a href="#dictionaries" style="color: #4a4a4a; text-decoration: none;">3.3. Dictionaries - Key-Value Powerhouse</a>
          </li>
        </ul>
      </li>
      <li style="margin-bottom: 8px;">
        <a href="#git-github" style="color: #3273dc; text-decoration: none; display: flex; align-items: center;">
          <span style="margin-right: 8px;">🌿</span> 4. Git & GitHub for Version Control
        </a>
        <ul style="list-style-type: none; padding-left: 20px; margin-top: 5px;">
          <li style="margin-bottom: 5px;">
            <a href="#git-fundamentals" style="color: #4a4a4a; text-decoration: none;">4.1. Git Fundamentals</a>
          </li>
          <li style="margin-bottom: 5px;">
            <a href="#git-branching" style="color: #4a4a4a; text-decoration: none;">4.2. Git Branching & Merging</a>
          </li>
          <li style="margin-bottom: 5px;">
            <a href="#popular-branching-models" style="color: #4a4a4a; text-decoration: none;">4.4. Popular Branching Models</a>
          </li>
          <li style="margin-bottom: 5px;">
            <a href="#github-workflow" style="color: #4a4a4a; text-decoration: none;">4.5. GitHub Fork & Pull Request Workflow</a>
          </li>
        </ul>
      </li>
      <li style="margin-bottom: 8px;">
        <a href="#practical-exercises" style="color: #3273dc; text-decoration: none; display: flex; align-items: center;">
          <span style="margin-right: 8px;">🧠</span> 5. Practical Exercises
        </a>
        <ul style="list-style-type: none; padding-left: 20px; margin-top: 5px;">
          <li style="margin-bottom: 5px;">
            <a href="#sliding-window" style="color: #4a4a4a; text-decoration: none;">5.1. Sliding Window Technique</a>
          </li>
          <li style="margin-bottom: 5px;">
            <a href="#two-pointers" style="color: #4a4a4a; text-decoration: none;">5.2. Two Pointers Technique</a>
          </li>
          <li style="margin-bottom: 5px;">
            <a href="#dynamic-programming" style="color: #4a4a4a; text-decoration: none;">5.3. Dynamic Programming</a>
          </li>
          <li style="margin-bottom: 5px;">
            <a href="#levenshtein-distance" style="color: #4a4a4a; text-decoration: none;">5.4. Levenshtein Distance</a>
          </li>
        </ul>
      </li>
      <li style="margin-bottom: 8px;">
        <a href="#assessment-matrix" style="color: #3273dc; text-decoration: none; display: flex; align-items: center;">
          <span style="margin-right: 8px;">🎯</span> 6. Week 2 Learning Assessment Matrix
        </a>
      </li>
      <li style="margin-bottom: 8px;">
        <a href="#conclusion" style="color: #3273dc; text-decoration: none; display: flex; align-items: center;">
          <span style="margin-right: 8px;">🎉</span> Conclusion
        </a>
      </li>
    </ul>
  </div>

  <script>
    // Chỉ giữ lại phần smooth scrolling cho anchor links
    window.onload = function() {
      // Smooth scrolling for anchor links
      document.querySelectorAll('.toc-content a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
          const targetId = this.getAttribute('href');
          const targetElement = document.querySelector(targetId);
          
          if (targetElement) {
            e.preventDefault();
            window.scrollTo({
              top: targetElement.offsetTop - 20,
              behavior: 'smooth'
            });
          }
        });
      });
    };
  </script>
</div>

## 🐍 1. Python Lists - Dynamic Data Powerhouse
<span id="python-lists"></span>

Lists are fundamental data structures in Python used to store ordered collections of items. The key characteristic of Lists is their **mutability** - contents can be changed after creation.

### 🎯 1.1. Core Characteristics of Lists
<span id="core-characteristics"></span>

- **Ordered**: The items in a list have a defined order, and that order will not change. If you add new items to a list, the new items will be placed at the end of the list.
- **Mutable**: You can change, add, and remove items in a list after it has been created.
- **Allow Duplicates**: Since lists are indexed, they can have items with the same value.
- **Heterogeneous**: Lists can contain elements of different data types (integers, strings, booleans, even other lists).

### 📊 Interactive List Structure Visualization

<div id="d3-list-structure" style="background-color:#f8f9fa; border-radius: 12px; box-shadow: 0 8px 25px rgba(0,0,0,0.15); padding: 3rem; margin: 3rem 0; min-height: 400px; overflow: visible;"></div>

<style>
/* D3.js Professional Styling */
[id^="d3-"] {
    position: relative;
    width: 100%;
    overflow: visible !important;
}

[id^="d3-"] svg {
    width: 100%;
    height: auto;
    display: block;
    margin: 0 auto;
    overflow: visible !important;
}

.d3-tooltip {
    position: absolute !important;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important;
    color: white !important;
    padding: 12px 16px !important;
    border-radius: 8px !important;
    font-size: 13px !important;
    font-weight: 500 !important;
    pointer-events: none !important;
    z-index: 10000 !important;
    box-shadow: 0 8px 25px rgba(0,0,0,0.25) !important;
    border: 2px solid rgba(255,255,255,0.2) !important;
}

@media (max-width: 768px) {
    [id^="d3-"] { padding: 1.5rem !important; }
}
</style>

<style>
/* Perfect D3.js Visualization Styling */
[id^="d3-"] {
    position: relative;
    width: 100%;
    max-width: 100%;
    overflow: visible !important;
    margin: 0 auto !important;
    text-align: center !important;
}

[id^="d3-"] svg {
    max-width: 100%;
    height: auto;
    display: block;
    margin: 0 auto !important;
    overflow: visible !important;
}

/* Perfect tooltips */
.d3-tooltip {
    position: absolute !important;
    background: linear-gradient(135deg, rgba(0,0,0,0.95), rgba(30,30,30,0.95)) !important;
    color: white !important;
    padding: 12px 16px !important;
    border-radius: 8px !important;
    font-size: 13px !important;
    line-height: 1.4 !important;
    pointer-events: none !important;
    z-index: 10000 !important;
    box-shadow: 0 8px 25px rgba(0,0,0,0.3) !important;
    border: 1px solid rgba(255,255,255,0.2) !important;
    backdrop-filter: blur(10px) !important;
    max-width: 300px !important;
}

.d3-tooltip strong {
    color: #60a5fa !important;
    display: block !important;
    margin-bottom: 4px !important;
}

.d3-tooltip code {
    background: rgba(255,255,255,0.1) !important;
    padding: 2px 6px !important;
    border-radius: 4px !important;
    font-family: JetBrains Mono, Consolas, monospace !important;
    font-size: 11px !important;
}

/* Responsive design */
@media (max-width: 768px) {
    [id^="d3-"] {
        padding: 1.5rem !important;
        min-height: auto !important;
    }
    
    .d3-tooltip {
        font-size: 12px !important;
        padding: 10px 12px !important;
        max-width: 250px !important;
    }
}

/* Animations */
[id^="d3-"] .git-stage rect,
[id^="d3-"] .lev-cell rect,
[id^="d3-"] .norm-step rect {
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}
</style>

<script src="https://d3js.org/d3.v7.min.js"></script>
<script>
// 📊 PERFECT List Structure Visualization
(function() {
    const container = d3.select("#d3-list-structure");
    if (container.empty()) return;
    
    container.selectAll("*").remove();
    
    const data = [4, 5, 6, 7, 8, 9];
    const config = {
        width: 900,
        height: 400,
        margin: { top: 100, right: 80, bottom: 100, left: 80 },
        boxWidth: 100,
        boxHeight: 60,
        spacing: 20
    };
    
    const innerWidth = config.width - config.margin.left - config.margin.right;
    const innerHeight = config.height - config.margin.top - config.margin.bottom;
    
    const svg = container.append("svg")
        .attr("viewBox", `0 0 ${config.width} ${config.height}`)
        .attr("preserveAspectRatio", "xMidYMid meet");
    
    const g = svg.append("g")
        .attr("transform", `translate(${config.margin.left}, ${config.margin.top})`);
    
    // Create gradient
    const defs = svg.append("defs");
    const gradient = defs.append("linearGradient")
        .attr("id", "listGradient")
        .attr("x1", "0%").attr("y1", "0%")
        .attr("x2", "100%").attr("y2", "100%");
    
    gradient.append("stop").attr("offset", "0%").style("stop-color", "#3b82f6");
    gradient.append("stop").attr("offset", "100%").style("stop-color", "#1e40af");
    
    // Calculate starting position for centering
    const totalWidth = data.length * config.boxWidth + (data.length - 1) * config.spacing;
    const startX = (innerWidth - totalWidth) / 2;
    
    // Create list boxes
    const boxes = g.selectAll(".list-box")
        .data(data)
        .enter()
        .append("g")
        .attr("class", "list-box")
        .attr("transform", (d, i) => `translate(${startX + i * (config.boxWidth + config.spacing)}, ${innerHeight/2 - config.boxHeight/2})`)
        .style("cursor", "pointer");
    
    // Add rectangles with perfect styling
    boxes.append("rect")
        .attr("width", config.boxWidth)
        .attr("height", config.boxHeight)
        .attr("fill", "url(#listGradient)")
        .attr("stroke", "#1e40af")
        .attr("stroke-width", 3)
        .attr("rx", 8)
        .style("filter", "drop-shadow(0 4px 12px rgba(59, 130, 246, 0.3))")
        .on("mouseover", function(event, d) {
            d3.select(this)
                .transition().duration(200)
                .attr("stroke-width", 4)
                .style("filter", "drop-shadow(0 6px 20px rgba(59, 130, 246, 0.5))");
            
            showTooltip(event, `Value: ${d}`, "List element");
        })
        .on("mouseout", function() {
            d3.select(this)
                .transition().duration(200)
                .attr("stroke-width", 3)
                .style("filter", "drop-shadow(0 4px 12px rgba(59, 130, 246, 0.3))");
            
            hideTooltip();
        });
    
    // Add values with perfect typography
    boxes.append("text")
        .attr("x", config.boxWidth/2)
        .attr("y", config.boxHeight/2)
        .attr("text-anchor", "middle")
        .attr("dominant-baseline", "middle")
        .attr("fill", "white")
        .attr("font-weight", "bold")
        .attr("font-size", "20px")
        .style("text-shadow", "0 2px 4px rgba(0,0,0,0.3)")
        .text(d => d);
    
    // Forward indices (top) - perfect positioning
    boxes.append("text")
        .attr("x", config.boxWidth/2)
        .attr("y", -25)
        .attr("text-anchor", "middle")
        .attr("fill", "#059669")
        .attr("font-weight", "bold")
        .attr("font-size", "16px")
        .text((d, i) => i);
    
    // Backward indices (bottom) - perfect positioning
    boxes.append("text")
        .attr("x", config.boxWidth/2)
        .attr("y", config.boxHeight + 40)
        .attr("text-anchor", "middle")
        .attr("fill", "#dc2626")
        .attr("font-weight", "bold")
        .attr("font-size", "16px")
        .text((d, i) => -(data.length - i));
    
    // Perfect labels
    g.append("text")
        .attr("x", innerWidth/2)
        .attr("y", -50)
        .attr("text-anchor", "middle")
        .attr("fill", "#059669")
        .attr("font-weight", "bold")
        .attr("font-size", "14px")
        .text("Forward Index (0, 1, 2, 3, 4, 5)");
    
    g.append("text")
        .attr("x", innerWidth/2)
        .attr("y", innerHeight + 70)
        .attr("text-anchor", "middle")
        .attr("fill", "#dc2626")
        .attr("font-weight", "bold")
        .attr("font-size", "14px")
        .text("Backward Index (-6, -5, -4, -3, -2, -1)");
    
    // Perfect title
    g.append("text")
        .attr("x", innerWidth/2)
        .attr("y", -75)
        .attr("text-anchor", "middle")
        .attr("fill", "#1f2937")
        .attr("font-weight", "bold")
        .attr("font-size", "18px")
        .text("data = [4, 5, 6, 7, 8, 9]");
    
    // Tooltip functions
    function showTooltip(event, title, subtitle) {
        const tooltip = d3.select("body").append("div")
            .attr("class", "d3-tooltip")
            .style("left", (event.pageX + 15) + "px")
            .style("top", (event.pageY - 15) + "px")
            .html(`<strong>${title}</strong><br><small>${subtitle}</small>`);
    }
    
    function hideTooltip() {
        d3.selectAll(".d3-tooltip").remove();
    }
})();
</script>

> 💡 **Interactive:** Hover over elements to see exact values!

### 💻 1.2. Creating and Accessing Lists
<span id="creating-accessing"></span>

**Creating Lists:**
Lists are created by placing comma-separated values inside square brackets `[]`.

```python
# Empty list
empty_list = []

# List of integers
numbers = [4, 5, 6, 7, 8, 9]

# Mixed data types
mixed_list = [True, 5, 'some string', 123.45]

# Nested list
nested_list = ["Happy", [2, 0, 1, 5]]
```

**Accessing Elements (Indexing):**
You can access an element in a list by referring to its index number.

```python
data = [4, 5, 6, 7, 8, 9]

# Access the first element
print(data[0])  # Output: 4

# Access the fourth element
print(data[3])  # Output: 7

# Access the last element using backward indexing
print(data[-1]) # Output: 9
```

**Slicing:**
Slicing allows you to access a range of items in a list. Syntax: `list[start:end:step]`.

```python
data = [4, 5, 6, 7, 8, 9]

# Get items from the beginning to index 2 (end is exclusive)
print(data[:3])  # Output: [4, 5, 6]

# Get items from index 2 to index 3
print(data[2:4]) # Output: [6, 7]

# Get every second item
print(data[::2]) # Output: [4, 6, 8]
```

### 🛠️ 1.3. List Methods - Powerful Manipulation Tools
<span id="list-methods"></span>

Here's a comprehensive table of the most common list methods:

| Method | Description | Example | Time Complexity |
|--------|-------------|---------|-----------------|
| `append(item)` | Add item to the end of list | `lst.append(5)` | O(1) |
| `insert(index, item)` | Insert item at specified index | `lst.insert(0, 'first')` | O(n) |
| `extend(iterable)` | Extend list with elements from another iterable | `lst.extend([1,2,3])` | O(k) |
| `remove(item)` | Remove first occurrence of item | `lst.remove('x')` | O(n) |
| `pop(index)` | Remove and return item at index (default: last) | `item = lst.pop()` | O(1) end, O(n) beginning |
| `clear()` | Remove all elements | `lst.clear()` | O(n) |
| `sort()` | Sort ascending (or `reverse=True`) | `lst.sort()` | O(n log n) |
| `reverse()` | Reverse the order of elements | `lst.reverse()` | O(n) |
| `copy()` | Create a shallow copy | `new_lst = lst.copy()` | O(n) |
| `count(item)` | Count occurrences of item | `lst.count('a')` | O(n) |
| `index(item)` | Find index of first occurrence | `idx = lst.index('x')` | O(n) |

> ⚠️ **Note:** Operations at the beginning of list (`insert(0, ...)`, `pop(0)`) have O(n) complexity due to element shifting.

**Practical Examples:**

```python
# Adding elements
data = [6, 5, 7, 1]
data.append(4)      # data = [6, 5, 7, 1, 4]
data.insert(0, 10)  # data = [10, 6, 5, 7, 1, 4]
data.extend([9, 2]) # data = [10, 6, 5, 7, 1, 4, 9, 2]

# Updating and removing elements
data[1] = 99         # Update element at index 1
print(data)          # [10, 99, 5, 7, 1, 4, 9, 2]

data.remove(99)      # Remove value 99
popped_item = data.pop(2)  # Remove element at index 2
print(popped_item)   # 7

# Sorting
data.sort()
print(data)          # [1, 2, 4, 5, 9, 10]
```

### 🔧 1.4. Built-in Functions for Lists
<span id="built-in-functions"></span>

| Function | Description | Example | Use Case |
|----------|-------------|---------|----------|
| `len(list)` | Returns number of items in list | `len([1,2,3])` → 3 | Size checking, loops |
| `min(list)` | Returns smallest value item | `min([5,1,9])` → 1 | Finding minimum |
| `max(list)` | Returns largest value item | `max([5,1,9])` → 9 | Finding maximum |
| `sum(list)` | Returns sum of numeric items | `sum([1,2,3])` → 6 | Statistical calculations |
| `sorted(list)` | Returns new sorted list (original unchanged) | `sorted([3,1,2])` → [1,2,3] | Safe sorting |
| `enumerate(list)` | Returns (index, value) pairs | `list(enumerate(['a','b']))` → [(0,'a'),(1,'b')] | Loops with index |
| `zip(list1, list2)` | Combines elements from multiple lists | `list(zip([1,2],[3,4]))` → [(1,3),(2,4)] | Parallel processing |
| `reversed(list)` | Returns reverse iterator | `list(reversed([1,2,3]))` → [3,2,1] | Reverse traversal |

**Practical Examples:**

```python
data = [6, 5, 7, 1, 9, 2]
print(len(data))      # Output: 6
print(sum(data))      # Output: 30
print(sorted(data))   # Output: [1, 2, 5, 6, 7, 9]

# Enumerate - loop with index
for index, value in enumerate(data):
    print(f"Index: {index}, Value: {value}")

# Zip - combine multiple lists
names = ['Alice', 'Bob']
ages = [25, 30]
for name, age in zip(names, ages):
    print(f"{name} is {age} years old.")
```

### 🚀 1.5. List Comprehension - Pythonic Power
<span id="list-comprehension"></span>

List comprehension is a concise and Pythonic way to create new lists from existing iterables.

**Syntax:** `[expression for item in iterable if condition]`

```python
# Square numbers from 0 to 4
squares = [x**2 for x in range(5)]
# Output: [0, 1, 4, 9, 16]

# Filter even numbers from a list
data = [1, 5, -4, 3, -2]
evens = [x for x in data if x % 2 == 0]
# Output: [-4, -2]

# Apply ReLU activation function
def relu(x):
    return x if x > 0 else 0

relu_applied = [relu(x) for x in data]
# Output: [1, 5, 0, 3, 0]

# Nested list comprehension - 2D Matrix
matrix = [[i+j for j in range(3)] for i in range(3)]
# Output: [[0,1,2], [1,2,3], [2,3,4]]
```

> 💡 **Tip:** List comprehensions are typically faster than traditional `for` loops and result in more concise code!

### 📊 1.6. 2D Lists (Matrices) - Two-Dimensional Data Structure
<span id="2d-lists"></span>

2D Lists are lists where each element is another list. This structure is used to represent grids, tables, or matrices in mathematics and data science.

**Creating and Accessing 2D Lists:**

```python
# 3x3 Matrix
matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

# Access element (row 1, column 2)
print(matrix[1][2])  # Output: 6

# Iterate through entire matrix
num_rows = len(matrix)
num_cols = len(matrix[0])

for r in range(num_rows):
    for c in range(num_cols):
        print(matrix[r][c], end=' ')
    print()  # New line after each row
```

### 📈 Interactive 2D Matrix Visualization

<div id="d3-matrix-vis" style="background-color:#f8f9fa; border-radius: 12px; box-shadow: 0 8px 25px rgba(0,0,0,0.15); padding: 3rem; margin: 3rem 0; min-height: 500px; overflow: visible;"></div>

<script>
// 📈 PERFECT Matrix Visualization
(function() {
    const container = d3.select("#d3-matrix-vis");
    if (container.empty()) return;
    
    container.selectAll("*").remove();
    
    const matrix = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ];
    
    const config = {
        width: 600,
        height: 500,
        margin: { top: 100, right: 80, bottom: 80, left: 100 },
        cellSize: 90
    };
    
    const innerWidth = config.width - config.margin.left - config.margin.right;
    const innerHeight = config.height - config.margin.top - config.margin.bottom;
    
    const svg = container.append("svg")
        .attr("viewBox", `0 0 ${config.width} ${config.height}`)
        .attr("preserveAspectRatio", "xMidYMid meet");
    
    const g = svg.append("g")
        .attr("transform", `translate(${config.margin.left}, ${config.margin.top})`);
    
    // Create gradients
    const defs = svg.append("defs");
    const cellGradient = defs.append("linearGradient")
        .attr("id", "cellGradient")
        .attr("x1", "0%").attr("y1", "0%")
        .attr("x2", "100%").attr("y2", "100%");
    
    cellGradient.append("stop").attr("offset", "0%").style("stop-color", "#e0f2fe");
    cellGradient.append("stop").attr("offset", "100%").style("stop-color", "#bae6fd");
    
    // Calculate center position
    const matrixWidth = matrix[0].length * config.cellSize;
    const matrixHeight = matrix.length * config.cellSize;
    const startX = (innerWidth - matrixWidth) / 2;
    const startY = (innerHeight - matrixHeight) / 2;
    
    // Create matrix cells with perfect positioning
    matrix.forEach((row, i) => {
        row.forEach((value, j) => {
            const cellGroup = g.append("g")
                .attr("class", "matrix-cell")
                .attr("transform", `translate(${startX + j * config.cellSize}, ${startY + i * config.cellSize})`)
                .style("cursor", "pointer");
            
            // Perfect cell rectangle
            cellGroup.append("rect")
                .attr("width", config.cellSize - 8)
                .attr("height", config.cellSize - 8)
                .attr("x", 4)
                .attr("y", 4)
                .attr("fill", "url(#cellGradient)")
                .attr("stroke", "#0891b2")
                .attr("stroke-width", 3)
                .attr("rx", 8)
                .style("filter", "drop-shadow(0 4px 12px rgba(8, 145, 178, 0.3))")
                .on("mouseover", function(event) {
                    d3.select(this)
                        .transition().duration(200)
                        .attr("stroke-width", 4)
                        .style("filter", "drop-shadow(0 6px 20px rgba(8, 145, 178, 0.5))");
                    
                    showTooltip(event, `Position [${i}][${j}]`, `Value: ${value}`);
                })
                .on("mouseout", function() {
                    d3.select(this)
                        .transition().duration(200)
                        .attr("stroke-width", 3)
                        .style("filter", "drop-shadow(0 4px 12px rgba(8, 145, 178, 0.3))");
                    
                    hideTooltip();
                });
            
            // Perfect cell value
            cellGroup.append("text")
                .attr("x", config.cellSize / 2)
                .attr("y", config.cellSize / 2)
                .attr("text-anchor", "middle")
                .attr("dominant-baseline", "middle")
                .attr("fill", "#0c4a6e")
                .attr("font-weight", "bold")
                .attr("font-size", "24px")
                .style("text-shadow", "0 1px 3px rgba(12, 74, 110, 0.3)")
                .text(value);
        });
    });
    
    // Perfect row indices
    matrix.forEach((row, i) => {
        g.append("text")
            .attr("x", startX - 25)
            .attr("y", startY + i * config.cellSize + config.cellSize / 2)
            .attr("text-anchor", "middle")
            .attr("dominant-baseline", "middle")
            .attr("fill", "#dc2626")
            .attr("font-weight", "bold")
            .attr("font-size", "18px")
            .text(i);
    });
    
    // Perfect column indices
    matrix[0].forEach((col, j) => {
        g.append("text")
            .attr("x", startX + j * config.cellSize + config.cellSize / 2)
            .attr("y", startY - 25)
            .attr("text-anchor", "middle")
            .attr("dominant-baseline", "middle")
            .attr("fill", "#059669")
            .attr("font-weight", "bold")
            .attr("font-size", "18px")
            .text(j);
    });
    
    // Perfect title
    g.append("text")
        .attr("x", innerWidth / 2)
        .attr("y", -50)
        .attr("text-anchor", "middle")
        .attr("fill", "#1f2937")
        .attr("font-weight", "bold")
        .attr("font-size", "20px")
        .text("2D Matrix: matrix[row][column]");
    
    // Perfect labels
    g.append("text")
        .attr("x", startX - 25)
        .attr("y", startY - 45)
        .attr("text-anchor", "middle")
        .attr("fill", "#dc2626")
        .attr("font-weight", "bold")
        .attr("font-size", "14px")
        .text("Rows");
    
    g.append("text")
        .attr("x", startX - 55)
        .attr("y", startY - 25)
        .attr("text-anchor", "middle")
        .attr("fill", "#059669")
        .attr("font-weight", "bold")
        .attr("font-size", "14px")
        .text("Cols");
    
    // Tooltip functions
    function showTooltip(event, title, subtitle) {
        const tooltip = d3.select("body").append("div")
            .attr("class", "d3-tooltip")
            .style("left", (event.pageX + 15) + "px")
            .style("top", (event.pageY - 15) + "px")
            .html(`<strong>${title}</strong><br><small>${subtitle}</small>`);
    }
    
    function hideTooltip() {
        d3.selectAll(".d3-tooltip").remove();
    }
})();
</script>

> 🎯 **Interactive:** Hover over cells to see `[row][col]` position and values!

---

## 🗄️ 2. Database - SQL (Part 2): Professional Database Design
<span id="database-sql"></span>

This section focuses on the design and structure of relational databases, with emphasis on **Entity Relationship Diagrams (ERD)** and **Database Normalization** - two core skills for every Database Developer.

### 🎯 2.1. Entity Relationship Diagram (ERD) - Visual Language
<span id="erd"></span>

ERD is a visual model that represents the structure of a database. It illustrates entities, attributes, and relationships between them.

| Component | Symbol | Description | Real-World Example |
|-----------|--------|-------------|-------------------|
| **Entity** | Rectangle | Object or concept in the real world | Customer, Product, Order |
| **Weak Entity** | Double rectangle | Entity that cannot be uniquely identified on its own | OrderDetail (depends on Order) |
| **Attribute** | Oval | Property or characteristic of an entity | first_name, unit_price, email |
| **Key Attribute** | Underlined oval | Unique identifier attribute (Primary Key) | customer_id, product_code |
| **Multivalued Attribute** | Double oval | Attribute that can contain multiple values | phone_numbers, skills |
| **Derived Attribute** | Dashed oval | Attribute that can be calculated from other attributes | age (from birth_date), total_amount |
| **Relationship** | Diamond | Connection between two or more entities | Customer places Order, Product belongs to Category |

### 📊 Interactive ERD Visualization - Student Enrollment System

<div id="d3-erd-diagram" style="background-color:#f8f9fa; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); padding: 1rem; margin: 1.5rem 0;"></div>

<script>
(function() {
    const containerId = "#d3-erd-diagram";
    
    const margin = {top: 40, right: 30, bottom: 50, left: 30};
    const width = 850 - margin.left - margin.right;
    const height = 550 - margin.top - margin.bottom;
    
    const svg = d3.select(containerId)
        .append("svg")
        .attr("viewBox", `0 0 ${width + margin.left + margin.right} ${height + margin.top + margin.bottom}`)
        .attr("preserveAspectRatio", "xMidYMid meet")
        .append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);
    
    // Define configuration and styling
    const config = {
        entity: {
            width: 160,
            height: 70,
            cornerRadius: 8,
            padding: 20,
            fill: "#3b82f6",
            stroke: "#2563eb",
            textColor: "white",
            fontSize: 16
        },
        relationship: {
            width: 100,
            height: 40,
            cornerRadius: 0,
            fill: "#10b981",
            stroke: "#059669",
            textColor: "white",
            fontSize: 12
        },
        attribute: {
            rx: 50,
            ry: 22,
            fill: "#f59e0b",
            stroke: "#d97706",
            textColor: "white",
            fontSize: 11
        },
        keyAttribute: {
            rx: 50,
            ry: 22,
            fill: "#dc2626",
            stroke: "#991b1b",
            textColor: "white",
            fontSize: 11
        },
        line: {
            stroke: "#374151",
            strokeWidth: 2
        }
    };
    
    // Add gradients for better visual appearance
    const defs = svg.append("defs");
    
    // Entity gradient
    const entityGradient = defs.append("linearGradient")
        .attr("id", "entityGradient")
        .attr("x1", "0%").attr("y1", "0%")
        .attr("x2", "100%").attr("y2", "100%");
    
    entityGradient.append("stop").attr("offset", "0%").style("stop-color", "#60a5fa");
    entityGradient.append("stop").attr("offset", "100%").style("stop-color", "#2563eb");
    
    // Relationship gradient
    const relationshipGradient = defs.append("linearGradient")
        .attr("id", "relationshipGradient")
        .attr("x1", "0%").attr("y1", "0%")
        .attr("x2", "100%").attr("y2", "100%");
    
    relationshipGradient.append("stop").attr("offset", "0%").style("stop-color", "#34d399");
    relationshipGradient.append("stop").attr("offset", "100%").style("stop-color", "#059669");
    
    // Attribute gradient
    const attributeGradient = defs.append("linearGradient")
        .attr("id", "attributeGradient")
        .attr("x1", "0%").attr("y1", "0%")
        .attr("x2", "100%").attr("y2", "100%");
    
    attributeGradient.append("stop").attr("offset", "0%").style("stop-color", "#fbbf24");
    attributeGradient.append("stop").attr("offset", "100%").style("stop-color", "#d97706");
    
    // Key attribute gradient
    const keyAttributeGradient = defs.append("linearGradient")
        .attr("id", "keyAttributeGradient")
        .attr("x1", "0%").attr("y1", "0%")
        .attr("x2", "100%").attr("y2", "100%");
    
    keyAttributeGradient.append("stop").attr("offset", "0%").style("stop-color", "#f87171");
    keyAttributeGradient.append("stop").attr("offset", "100%").style("stop-color", "#b91c1c");

    // Add subtle background pattern
    defs.append("pattern")
        .attr("id", "diagonalHatch")
        .attr("width", 10)
        .attr("height", 10)
        .attr("patternTransform", "rotate(45)")
        .attr("patternUnits", "userSpaceOnUse")
        .append("rect")
        .attr("width", 10)
        .attr("height", 10)
        .attr("fill", "#f8fafc");
    
    defs.append("pattern")
        .attr("id", "smallGrid")
        .attr("width", 15)
        .attr("height", 15)
        .attr("patternUnits", "userSpaceOnUse")
        .append("path")
        .attr("d", "M 15 0 L 0 0 0 15")
        .attr("fill", "none")
        .attr("stroke", "#e2e8f0")
        .attr("stroke-width", 0.5);
    
    // Add subtle background
    svg.append("rect")
        .attr("width", width)
        .attr("height", height)
        .attr("fill", "url(#smallGrid)")
        .attr("rx", 8)
        .attr("opacity", 0.5);

    // Entity positions and data
    const studentPosX = width * 0.25;
    const studentPosY = height * 0.45;
    const coursePosX = width * 0.75;
    const coursePosY = height * 0.45;
    const relationshipPosX = width * 0.5;
    const relationshipPosY = height * 0.45;

    // Student attributes
    const studentAttributes = [
        {name: "Student_ID", x: studentPosX - 60, y: studentPosY - 100, key: true},
        {name: "First_Name", x: studentPosX - 120, y: studentPosY - 30},
        {name: "Last_Name", x: studentPosX - 120, y: studentPosY + 100},
        {name: "Birth_Date", x: studentPosX - 140, y: studentPosY - 150}
    ];

    // Course attributes
    const courseAttributes = [
        {name: "Course_ID", x: coursePosX + 60, y: coursePosY - 100, key: true},
        {name: "Course_Name", x: coursePosX + 120, y: coursePosY - 30},
        {name: "Credits", x: coursePosX + 120, y: coursePosY + 100}
    ];

    // Add a subtle drop shadow filter
    defs.append("filter")
        .attr("id", "drop-shadow")
        .attr("height", "130%")
        .attr("width", "130%")
        .append("feDropShadow")
        .attr("dx", 0)
        .attr("dy", 3)
        .attr("stdDeviation", 5)
        .attr("flood-color", "rgba(0,0,0,0.2)");

    // Draw Student Entity
    const studentEntity = svg.append("g")
        .attr("class", "entity")
        .style("cursor", "pointer");

    studentEntity.append("rect")
        .attr("x", studentPosX - config.entity.width/2)
        .attr("y", studentPosY - config.entity.height/2)
        .attr("width", config.entity.width)
        .attr("height", config.entity.height)
        .attr("fill", "url(#entityGradient)")
        .attr("stroke", config.entity.stroke)
        .attr("stroke-width", 2)
        .attr("rx", config.entity.cornerRadius)
        .style("filter", "url(#drop-shadow)")
        .on("mouseover", function(event) {
            d3.select(this)
                .transition().duration(200)
                .attr("stroke-width", 3)
                .style("filter", "url(#drop-shadow) drop-shadow(0 0 8px rgba(59, 130, 246, 0.5))");
            
            showEntityTooltip(event, "STUDENT", 
                "Entity representing students in the system.<br><br>" + 
                "<strong>Description:</strong> Contains basic student information<br>" +
                "<strong>Primary Key:</strong> Student_ID<br>" +
                "<strong>Relationships:</strong> Enrolls in courses (M:N)"
            );
        })
        .on("mouseout", function() {
            d3.select(this)
                .transition().duration(200)
                .attr("stroke-width", 2)
                .style("filter", "url(#drop-shadow)");
            
            hideTooltip();
        });

    // Add subtle pattern to entity
    studentEntity.append("rect")
        .attr("x", studentPosX - config.entity.width/2 + 4)
        .attr("y", studentPosY - config.entity.height/2 + 4)
        .attr("width", config.entity.width - 8)
        .attr("height", config.entity.height - 8)
        .attr("fill", "url(#entityGradient)")
        .attr("stroke", "none")
        .attr("rx", config.entity.cornerRadius - 2)
        .attr("opacity", 0.7);

    studentEntity.append("text")
        .attr("x", studentPosX)
        .attr("y", studentPosY + 5)
        .attr("text-anchor", "middle")
        .attr("dominant-baseline", "middle")
        .attr("fill", config.entity.textColor)
        .attr("font-weight", "bold")
        .attr("font-size", config.entity.fontSize)
        .text("STUDENT");

    // Draw Course Entity
    const courseEntity = svg.append("g")
        .attr("class", "entity")
        .style("cursor", "pointer");

    courseEntity.append("rect")
        .attr("x", coursePosX - config.entity.width/2)
        .attr("y", coursePosY - config.entity.height/2)
        .attr("width", config.entity.width)
        .attr("height", config.entity.height)
        .attr("fill", "url(#entityGradient)")
        .attr("stroke", config.entity.stroke)
        .attr("stroke-width", 2)
        .attr("rx", config.entity.cornerRadius)
        .style("filter", "url(#drop-shadow)")
        .on("mouseover", function(event) {
            d3.select(this)
                .transition().duration(200)
                .attr("stroke-width", 3)
                .style("filter", "url(#drop-shadow) drop-shadow(0 0 8px rgba(59, 130, 246, 0.5))");
            
            showEntityTooltip(event, "COURSE", 
                "Entity representing courses offered in the system.<br><br>" + 
                "<strong>Description:</strong> Contains course information<br>" +
                "<strong>Primary Key:</strong> Course_ID<br>" +
                "<strong>Relationships:</strong> Taken by students (N:M)"
            );
        })
        .on("mouseout", function() {
            d3.select(this)
                .transition().duration(200)
                .attr("stroke-width", 2)
                .style("filter", "url(#drop-shadow)");
            
            hideTooltip();
        });

    // Add subtle pattern to entity
    courseEntity.append("rect")
        .attr("x", coursePosX - config.entity.width/2 + 4)
        .attr("y", coursePosY - config.entity.height/2 + 4)
        .attr("width", config.entity.width - 8)
        .attr("height", config.entity.height - 8)
        .attr("fill", "url(#entityGradient)")
        .attr("stroke", "none")
        .attr("rx", config.entity.cornerRadius - 2)
        .attr("opacity", 0.7);

    courseEntity.append("text")
        .attr("x", coursePosX)
        .attr("y", coursePosY + 5)
        .attr("text-anchor", "middle")
        .attr("dominant-baseline", "middle")
        .attr("fill", config.entity.textColor)
        .attr("font-weight", "bold")
        .attr("font-size", config.entity.fontSize)
        .text("COURSE");

    // Draw Relationship
    const relationshipGroup = svg.append("g")
        .attr("class", "relationship")
        .style("cursor", "pointer");

    relationshipGroup.append("polygon")
        .attr("points", `${relationshipPosX-40},${relationshipPosY} ${relationshipPosX},${relationshipPosY-30} ${relationshipPosX+40},${relationshipPosY} ${relationshipPosX},${relationshipPosY+30}`)
        .attr("fill", "url(#relationshipGradient)")
        .attr("stroke", config.relationship.stroke)
        .attr("stroke-width", 2)
        .style("filter", "url(#drop-shadow)")
        .on("mouseover", function(event) {
            d3.select(this)
                .transition().duration(200)
                .attr("stroke-width", 3)
                .style("filter", "url(#drop-shadow) drop-shadow(0 0 8px rgba(16, 185, 129, 0.5))");
            
            showEntityTooltip(event, "ENROLLS", 
                "Represents the many-to-many relationship between STUDENT and COURSE.<br><br>" + 
                "<strong>Type:</strong> Many-to-Many (M:N)<br>" +
                "<strong>Description:</strong> Students can enroll in multiple courses, and each course can have many students<br>" +
                "<strong>Associated Attributes:</strong> Could include enrollment date, grade, etc."
            );
        })
        .on("mouseout", function() {
            d3.select(this)
                .transition().duration(200)
                .attr("stroke-width", 2)
                .style("filter", "url(#drop-shadow)");
            
            hideTooltip();
        });

    relationshipGroup.append("text")
        .attr("x", relationshipPosX)
        .attr("y", relationshipPosY + 2)
        .attr("text-anchor", "middle")
        .attr("dominant-baseline", "middle")
        .attr("fill", config.relationship.textColor)
        .attr("font-weight", "bold")
        .attr("font-size", config.relationship.fontSize)
        .attr("stroke", "rgba(5, 150, 105, 0.2)")  // Add subtle text outline
        .attr("stroke-width", "0.5px")
        .text("ENROLLS");

    // Draw Student Attributes
    studentAttributes.forEach(attr => {
        const attrGroup = svg.append("g")
            .attr("class", attr.key ? "key-attribute" : "attribute")
            .style("cursor", "pointer");

        const gradient = attr.key ? "keyAttributeGradient" : "attributeGradient";
        const config_attr = attr.key ? config.keyAttribute : config.attribute;
        
        attrGroup.append("ellipse")
            .attr("cx", attr.x)
            .attr("cy", attr.y)
            .attr("rx", config_attr.rx)
            .attr("ry", config_attr.ry)
            .attr("fill", `url(#${gradient})`)
            .attr("stroke", config_attr.stroke)
            .attr("stroke-width", 2)
            .style("filter", "url(#drop-shadow)")
            .on("mouseover", function(event) {
                d3.select(this)
                    .transition().duration(200)
                    .attr("stroke-width", 3)
                    .style("filter", "url(#drop-shadow) drop-shadow(0 0 8px rgba(245, 158, 11, 0.5))");
                
                const tooltipType = attr.key ? "Key Attribute" : "Attribute";
                const tooltipDesc = getAttributeDescription(attr.name);
                
                showEntityTooltip(event, `${attr.name} (${tooltipType})`, tooltipDesc);
            })
            .on("mouseout", function() {
                d3.select(this)
                    .transition().duration(200)
                    .attr("stroke-width", 2)
                    .style("filter", "url(#drop-shadow)");
                
                hideTooltip();
            });

        attrGroup.append("text")
            .attr("x", attr.x)
            .attr("y", attr.y + 1)
            .attr("text-anchor", "middle")
            .attr("dominant-baseline", "middle")
            .attr("fill", "white")
            .attr("font-weight", "bold")
            .attr("font-size", config_attr.fontSize)
            .attr("text-decoration", attr.key ? "underline" : "none")
            .text(attr.name);

        // Connect to entity
        svg.append("path")
            .attr("d", `M${attr.x + (attr.x < studentPosX ? 40 : -40)},${attr.y} C${(attr.x + studentPosX)/2},${attr.y} ${(attr.x + studentPosX)/2},${studentPosY} ${studentPosX},${studentPosY}`)
            .attr("stroke", config.line.stroke)
            .attr("stroke-width", config.line.strokeWidth - 0.5)
            .attr("fill", "none")
            .attr("stroke-dasharray", "4,2")
            .attr("opacity", 0.7)
            .lower(); // Move the lines below the text and shapes
    });

    // Draw Course Attributes
    courseAttributes.forEach(attr => {
        const attrGroup = svg.append("g")
            .attr("class", attr.key ? "key-attribute" : "attribute")
            .style("cursor", "pointer");

        const gradient = attr.key ? "keyAttributeGradient" : "attributeGradient";
        const config_attr = attr.key ? config.keyAttribute : config.attribute;
        
        attrGroup.append("ellipse")
            .attr("cx", attr.x)
            .attr("cy", attr.y)
            .attr("rx", config_attr.rx)
            .attr("ry", config_attr.ry)
            .attr("fill", `url(#${gradient})`)
            .attr("stroke", config_attr.stroke)
            .attr("stroke-width", 2)
            .style("filter", "url(#drop-shadow)")
            .on("mouseover", function(event) {
                d3.select(this)
                    .transition().duration(200)
                    .attr("stroke-width", 3)
                    .style("filter", "url(#drop-shadow) drop-shadow(0 0 8px rgba(245, 158, 11, 0.5))");
                
                const tooltipType = attr.key ? "Key Attribute" : "Attribute";
                const tooltipDesc = getAttributeDescription(attr.name);
                
                showEntityTooltip(event, `${attr.name} (${tooltipType})`, tooltipDesc);
            })
            .on("mouseout", function() {
                d3.select(this)
                    .transition().duration(200)
                    .attr("stroke-width", 2)
                    .style("filter", "url(#drop-shadow)");
                
                hideTooltip();
            });

        attrGroup.append("text")
            .attr("x", attr.x)
            .attr("y", attr.y + 1)
            .attr("text-anchor", "middle")
            .attr("dominant-baseline", "middle")
            .attr("fill", "white")
            .attr("font-weight", "bold")
            .attr("font-size", config_attr.fontSize)
            .attr("text-decoration", attr.key ? "underline" : "none")
            .text(attr.name);

        // Connect to entity
        svg.append("path")
            .attr("d", `M${attr.x + (attr.x < coursePosX ? 40 : -40)},${attr.y} C${(attr.x + coursePosX)/2},${attr.y} ${(attr.x + coursePosX)/2},${coursePosY} ${coursePosX},${coursePosY}`)
            .attr("stroke", config.line.stroke)
            .attr("stroke-width", config.line.strokeWidth - 0.5)
            .attr("fill", "none")
            .attr("stroke-dasharray", "4,2")
            .attr("opacity", 0.7)
            .lower(); // Move the lines below the text and shapes
    });

    // Add arrow marker
    defs.append("marker")
        .attr("id", "arrowhead")
        .attr("viewBox", "0 -5 10 10")
        .attr("refX", 5)
        .attr("refY", 0)
        .attr("orient", "auto")
        .attr("markerWidth", 6)
        .attr("markerHeight", 6)
        .append("path")
        .attr("d", "M 0,-5 L 10,0 L 0,5")
        .attr("fill", config.line.stroke);

    // Draw Lines Between Entities and Relationship
    // Student to Relationship
    svg.append("line")
        .attr("x1", studentPosX + config.entity.width/2)
        .attr("y1", studentPosY)
        .attr("x2", relationshipPosX - 45)
        .attr("y2", relationshipPosY)
        .attr("stroke", config.line.stroke)
        .attr("stroke-width", config.line.strokeWidth)
        .attr("marker-end", "url(#arrowhead)")
        .lower(); // Move the lines below other elements

    // Course to Relationship
    svg.append("line")
        .attr("x1", coursePosX - config.entity.width/2)
        .attr("y1", coursePosY)
        .attr("x2", relationshipPosX + 45)
        .attr("y2", relationshipPosY)
        .attr("stroke", config.line.stroke)
        .attr("stroke-width", config.line.strokeWidth)
        .attr("marker-end", "url(#arrowhead)")
        .lower(); // Move the lines below other elements

    // Add cardinality labels with cleaner styling
    // Student to Relationship (M)
    const studentCardLabel = svg.append("g")
        .attr("transform", `translate(${studentPosX + 75}, ${studentPosY - 25})`);
    
    studentCardLabel.append("rect")
        .attr("x", -15)
        .attr("y", -15)
        .attr("width", 30)
        .attr("height", 30)
        .attr("fill", "white")
        .attr("stroke", config.line.stroke)
        .attr("stroke-width", 1)
        .attr("rx", 5)
        .attr("opacity", 0.8);
    
    studentCardLabel.append("text")
        .attr("x", 0)
        .attr("y", 2)
        .attr("text-anchor", "middle")
        .attr("dominant-baseline", "middle")
        .attr("fill", "#374151")
        .attr("font-weight", "bold")
        .attr("font-size", "16px")
        .text("M");

    // Course to Relationship (N)
    const courseCardLabel = svg.append("g")
        .attr("transform", `translate(${coursePosX - 75}, ${coursePosY - 25})`);
    
    courseCardLabel.append("rect")
        .attr("x", -15)
        .attr("y", -15)
        .attr("width", 30)
        .attr("height", 30)
        .attr("fill", "white")
        .attr("stroke", config.line.stroke)
        .attr("stroke-width", 1)
        .attr("rx", 5)
        .attr("opacity", 0.8);
    
    courseCardLabel.append("text")
        .attr("x", 0)
        .attr("y", 2)
        .attr("text-anchor", "middle")
        .attr("dominant-baseline", "middle")
        .attr("fill", "#374151")
        .attr("font-weight", "bold")
        .attr("font-size", "16px")
        .text("N");

    // Title
    svg.append("text")
        .attr("x", width/2)
        .attr("y", -10)
        .attr("text-anchor", "middle")
        .attr("fill", "#1f2937")
        .attr("font-weight", "bold")
        .attr("font-size", "18px")
        .style("text-shadow", "0 2px 4px rgba(31, 41, 55, 0.1)")
        .text("Student-Course Enrollment ERD (Chen's Notation)");

    // Modern, cleaned-up legend
    const legendData = [
        { shape: "rect", color: "url(#entityGradient)", text: "Entity", stroke: config.entity.stroke },
        { shape: "ellipse", color: "url(#keyAttributeGradient)", text: "Key Attribute", stroke: config.keyAttribute.stroke },
        { shape: "ellipse", color: "url(#attributeGradient)", text: "Attribute", stroke: config.attribute.stroke },
        { shape: "diamond", color: "url(#relationshipGradient)", text: "Relationship", stroke: config.relationship.stroke }
    ];

    const legendGroup = svg.append("g")
        .attr("transform", `translate(${width/2 - 220}, ${height - 40})`);

    const legendBackground = legendGroup.append("rect")
        .attr("x", -20)
        .attr("y", -25)
        .attr("width", 440)
        .attr("height", 50)
        .attr("rx", 8)
        .attr("fill", "rgba(255, 255, 255, 0.9)")
        .attr("stroke", "#e2e8f0")
        .attr("stroke-width", 1);

    legendData.forEach((item, i) => {
        const legendItem = legendGroup.append("g")
            .attr("transform", `translate(${i * 110}, 0)`);
        
        if (item.shape === "rect") {
            legendItem.append("rect")
                .attr("width", 20)
                .attr("height", 15)
                .attr("rx", 3)
                .attr("fill", item.color)
                .attr("stroke", item.stroke)
                .attr("stroke-width", 1);
        } else if (item.shape === "ellipse") {
            legendItem.append("ellipse")
                .attr("cx", 10)
                .attr("cy", 7.5)
                .attr("rx", 10)
                .attr("ry", 7.5)
                .attr("fill", item.color)
                .attr("stroke", item.stroke)
                .attr("stroke-width", 1);
        } else if (item.shape === "diamond") {
            legendItem.append("polygon")
                .attr("points", "10,0 20,7.5 10,15 0,7.5")
                .attr("fill", item.color)
                .attr("stroke", item.stroke)
                .attr("stroke-width", 1);
        }
        
        legendItem.append("text")
            .attr("x", 25)
            .attr("y", 11)
            .attr("fill", "#374151")
            .attr("font-size", "12px")
            .attr("font-weight", "500")
            .text(item.text);
    });

    // Helper functions
    function getAttributeDescription(name) {
        const descriptions = {
            "Student_ID": "Primary key that uniquely identifies a student.<br><strong>Type:</strong> Integer<br><strong>Constraints:</strong> NOT NULL, UNIQUE",
            "First_Name": "Student's first name.<br><strong>Type:</strong> VARCHAR(50)<br><strong>Constraints:</strong> NOT NULL",
            "Last_Name": "Student's last name.<br><strong>Type:</strong> VARCHAR(50)<br><strong>Constraints:</strong> NOT NULL",
            "Birth_Date": "Student's date of birth.<br><strong>Type:</strong> DATE<br><strong>Constraints:</strong> NULL allowed",
            "Course_ID": "Primary key that uniquely identifies a course.<br><strong>Type:</strong> VARCHAR(10)<br><strong>Constraints:</strong> NOT NULL, UNIQUE",
            "Course_Name": "Name of the course.<br><strong>Type:</strong> VARCHAR(100)<br><strong>Constraints:</strong> NOT NULL",
            "Credits": "Number of credits the course is worth.<br><strong>Type:</strong> INTEGER<br><strong>Constraints:</strong> NOT NULL, Default 3"
        };
        
        return descriptions[name] || `Attribute of the entity representing ${name.replace("_", " ").toLowerCase()}.`;
    }

    function showEntityTooltip(event, title, content) {
        const tooltip = d3.select("body").append("div")
            .attr("class", "erd-tooltip")
            .style("position", "absolute")
            .style("background", "linear-gradient(135deg, rgba(15,23,42,0.97), rgba(30,41,59,0.97))")
            .style("color", "white")
            .style("padding", "12px 16px")
            .style("border-radius", "8px")
            .style("font-size", "13px")
            .style("line-height", "1.4")
            .style("pointer-events", "none")
            .style("z-index", "1000")
            .style("max-width", "300px")
            .style("box-shadow", "0 10px 25px rgba(0,0,0,0.2)")
            .style("border", "1px solid rgba(255,255,255,0.1)")
            .style("backdrop-filter", "blur(8px)")
            .style("left", (event.pageX + 15) + "px")
            .style("top", (event.pageY - 15) + "px")
            .html(`<div style="font-weight:bold; color:#60a5fa; font-size:14px; margin-bottom:5px">${title}</div>${content}`);
    }
    
    function hideTooltip() {
        d3.selectAll(".erd-tooltip").remove();
    }
})();
</script>

> 💡 **Interactive:** Hover over components to see details about Entity, Attribute, and Relationship!

### 🔗 Cardinality (Relationships)

Cardinality defines the number of entities that can participate in a relationship:

| Type | Symbol | Description | Real-World Example |
|------|---------|-------------|-------------------|
| **One-to-One (1:1)** | 1:1 | Each entity relates to exactly one other entity | Person - Passport |
| **One-to-Many (1:N)** | 1:N | One entity can relate to multiple other entities | Customer - Orders |
| **Many-to-Many (M:N)** | M:N | Multiple entities can relate to multiple other entities | Student - Courses |

> ⚠️ **Note:** M:N relationships are typically resolved by creating a junction table (associative entity).

### 🏗️ 2.2. Database Normalization - Structural Excellence
<span id="normalization"></span>

Normalization is the process of organizing columns and tables in a relational database to minimize data redundancy. It involves dividing large tables into smaller, well-structured tables and defining relationships between them.

**Why Normalize?**

✅ **Minimize Redundancy:** Avoid storing the same data in multiple places.

✅ **Prevent Anomalies:**
- **Insertion Anomaly:** Difficulty inserting new data due to missing required data.
- **Update Anomaly:** Inconsistency when only updating some redundant copies.
- **Deletion Anomaly:** Unwanted data loss when deleting a record.

**Normal Forms:**

#### 🥇 First Normal Form (1NF)
- ✅ Table must have a Primary Key
- ✅ Each cell contains only single, atomic values (no lists or repeating groups)
- ✅ All columns must contain values of the same data type

#### 🥈 Second Normal Form (2NF)  
- ✅ Must satisfy 1NF
- ✅ All non-key attributes must be fully functionally dependent on the entire Primary Key
- ✅ Eliminate **Partial Dependencies** (applies to Composite Primary Keys)

#### 🥉 Third Normal Form (3NF)
- ✅ Must satisfy 2NF
- ✅ No **Transitive Dependencies**
- ✅ Non-key attributes must not depend on other non-key attributes
- ✅ Example: `StudentID → ZipCode → City` is a transitive dependency

### 📊 Interactive Normalization Process Visualization

<div id="d3-normalization" style="background-color:#f0f4f8; border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.1); padding: 40px; margin: 30px 0; min-height: 600px;"></div>

<script>
// 📊 Database Normalization Visualization - Fixed Version
(function() {
    const container = d3.select("#d3-normalization");
    if (container.empty()) return;
    
    container.selectAll("*").remove();

    // Fixed dimensions to ensure all elements fit perfectly
    const width = 800;
    const height = 760; // Increased height for better spacing
    const margin = {top: 60, right: 40, bottom: 80, left: 40};
    
    const svg = container.append("svg")
        .attr("viewBox", `0 0 ${width} ${height}`)
        .attr("preserveAspectRatio", "xMidYMid meet");
    
    // Create definitions for gradients and filters
    const defs = svg.append("defs");
    
    // Add better drop shadow filter
    defs.append("filter")
        .attr("id", "norm-shadow")
        .attr("height", "130%")
        .append("feDropShadow")
        .attr("flood-opacity", 0.2)
        .attr("stdDeviation", 2);
    
    // Create gradients for each step
    const gradients = [
        {id: "unnormalized-gradient", color1: "#f87171", color2: "#ef4444"}, // red
        {id: "first-gradient", color1: "#fbbf24", color2: "#d97706"},        // amber
        {id: "second-gradient", color1: "#34d399", color2: "#059669"},       // emerald
        {id: "third-gradient", color1: "#60a5fa", color2: "#2563eb"}         // blue
    ];
    
    gradients.forEach(g => {
        const gradient = defs.append("linearGradient")
            .attr("id", g.id)
            .attr("x1", "0%")
            .attr("y1", "0%")
            .attr("x2", "100%")
            .attr("y2", "100%");
            
        gradient.append("stop").attr("offset", "0%").style("stop-color", g.color1);
        gradient.append("stop").attr("offset", "100%").style("stop-color", g.color2);
    });
    
    // Arrow marker for path connections
    defs.append("marker")
        .attr("id", "norm-arrow")
        .attr("viewBox", "0 -5 10 10")
        .attr("refX", 8)
        .attr("refY", 0)
        .attr("orient", "auto")
        .attr("markerWidth", 8)
        .attr("markerHeight", 8)
        .append("path")
        .attr("d", "M 0,-5 L 10,0 L 0,5")
        .attr("fill", "#6366f1");
    
    const g = svg.append("g")
        .attr("transform", `translate(${margin.left}, ${margin.top})`);
    
    // Improved light background
    g.append("rect")
        .attr("width", width - margin.left - margin.right)
        .attr("height", height - margin.top - margin.bottom)
        .attr("fill", "#f8fafc")
        .attr("rx", 15)
        .attr("stroke", "#e2e8f0")
        .attr("stroke-width", 1);
    
    // Fixed steps with better vertical spacing
    const steps = [
        {
            title: "Unnormalized",
            y: 40,
            gradientId: "unnormalized-gradient",
            data: "Student_ID | Name | Course1, Course2 | Dept",
            issues: ["Repeating groups in Courses", "Multi-valued fields", "Redundant data"],
            description: "Data contains non-atomic values and redundancy",
            example: "1001 | John | Math, Physics | Science",
            problems: "Searching, updating, and inserting data is inefficient"
        },
        {
            title: "1NF",
            y: 180, // More space between steps
            gradientId: "first-gradient",
            data: "Student_ID | Name | Course | Dept",
            fixes: ["Atomic values only", "No repeating groups", "Each field contains single value"],
            description: "All values are atomic (indivisible)",
            example: "1001 | John | Math | Science\n1001 | John | Physics | Science",
            benefits: "Simpler queries, but still has redundancy"
        },
        {
            title: "2NF",
            y: 320, // More space between steps
            gradientId: "second-gradient",
            data: "Students(ID, Name, Dept) | Enrollments(ID, Course)",
            fixes: ["No partial dependencies", "Separate tables for entities", "Proper relations"],
            description: "All non-key attributes depend on the entire primary key",
            example: "Students: 1001, John, Science\nEnrollments: 1001, Math | 1001, Physics",
            benefits: "Reduces redundancy of student information"
        },
        {
            title: "3NF",
            y: 460, // More space between steps
            gradientId: "third-gradient",
            data: "Students | Departments | Enrollments",
            fixes: ["No transitive dependencies", "Optimal design", "Each attribute depends only on the key"],
            description: "No non-key attribute depends on another non-key attribute",
            example: "Students(ID, Name, Dept_ID)\nDepartments(Dept_ID, Dept_Name)",
            benefits: "Eliminates all data redundancy and anomalies"
        }
    ];
    
    // Draw smoother connection paths
    steps.forEach((step, i) => {
        if (i < steps.length - 1) {
            const nextStep = steps[i+1];
            
            // Draw a simple straight path with animation
            const path = g.append("path")
                .attr("d", `M 350 ${step.y + 80} L 350 ${nextStep.y - 10}`)
                .attr("fill", "none")
                .attr("stroke", "#6366f1")
                .attr("stroke-width", 2)
                .attr("stroke-dasharray", "6,3")
                .attr("marker-end", "url(#norm-arrow)")
                .style("opacity", 0.7);
                
            // Add animation to path
            path.append("animate")
                .attr("attributeName", "stroke-dashoffset")
                .attr("values", "50;0")
                .attr("dur", "8s")
                .attr("repeatCount", "indefinite");
        }
    });
    
    // Draw normalization steps with clean, simple design
    steps.forEach((step, i) => {
        const stepGroup = g.append("g")
            .attr("class", "norm-step")
            .attr("transform", `translate(100, ${step.y})`);
        
        // Main box
        stepGroup.append("rect")
            .attr("width", 520)
            .attr("height", 100) 
            .attr("fill", "white")
            .attr("stroke", `url(#${step.gradientId})`)
            .attr("stroke-width", 2.5)
            .attr("rx", 12)
            .style("filter", "url(#norm-shadow)")
            .style("cursor", "pointer")
            .on("mouseover", function(event) {
                d3.select(this)
                    .transition().duration(200)
                    .attr("stroke-width", 4);
                    
                showEnhancedTooltip(event, step);
            })
            .on("mouseout", function() {
                d3.select(this)
                    .transition().duration(200)
                    .attr("stroke-width", 2.5);
                    
                hideTooltip();
            });
        
        // Title block
        const titleGroup = stepGroup.append("g");
        
        titleGroup.append("rect")
            .attr("x", 10)
            .attr("y", 10)
            .attr("width", 150)
            .attr("height", 30)
            .attr("fill", `url(#${step.gradientId})`)
            .attr("rx", 6);
            
        titleGroup.append("text")
            .attr("x", 85)
            .attr("y", 30)
            .attr("text-anchor", "middle")
            .attr("fill", "white")
            .attr("font-weight", "bold")
            .attr("font-size", "16px")
            .text(step.title);
        
        // Data structure container
        const dataGroup = stepGroup.append("g")
            .attr("transform", "translate(170, 10)");
            
        dataGroup.append("rect")
            .attr("width", 310)
            .attr("height", 30)
            .attr("fill", "#1e293b")
            .attr("rx", 6);
            
        dataGroup.append("text")
            .attr("x", 10)
            .attr("y", 20)
            .attr("fill", "#e2e8f0")
            .attr("font-family", "monospace")
            .attr("font-size", "12.5px")
            .text(step.data);
        
        // Example button - moved to far right
        const exampleBadge = stepGroup.append("g")
            .attr("transform", "translate(490, 25)")
            .style("cursor", "help")
            .on("mouseover", function(event) {
                showExampleTooltip(event, step.example);
            })
            .on("mouseout", function() {
                hideTooltip();
            });
            
        exampleBadge.append("circle")
            .attr("r", 10)
            .attr("fill", "#475569");
            
        exampleBadge.append("text")
            .attr("text-anchor", "middle")
            .attr("dominant-baseline", "middle")
            .attr("fill", "white")
            .attr("font-weight", "bold")
            .attr("font-size", "10px")
            .text("Ex");
        
        // Issues/Fixes list with clear icons
        const items = step.fixes || step.issues || [];
        items.forEach((item, j) => {
            // Limit to 3 items per box for better formatting
            if (j > 2) return;
            
            const icon = step.fixes ? "✓" : "✗";
            const iconColor = step.fixes ? "#059669" : "#dc2626";
            
            const itemGroup = stepGroup.append("g")
                .attr("transform", `translate(20, ${55 + j * 18})`); // Adjusted spacing
                
            itemGroup.append("text")
                .attr("fill", iconColor)
                .attr("font-weight", "bold")
                .attr("font-size", "13px")
                .text(icon);
                
            itemGroup.append("text")
                .attr("x", 20)
                .attr("fill", "#334155")
                .attr("font-size", "12.5px") // Smaller text size
                .text(item);
        });
    });
    
    // Title and subtitle
    const titleGroup = g.append("g");
    
    titleGroup.append("text")
        .attr("x", (width - margin.left - margin.right) / 2)
        .attr("y", -30)
        .attr("text-anchor", "middle")
        .attr("fill", "#0f172a")
        .attr("font-weight", "bold")
        .attr("font-size", "22px")
        .text("Database Normalization Process");
        
    titleGroup.append("text")
        .attr("x", (width - margin.left - margin.right) / 2)
        .attr("y", -5)
        .attr("text-anchor", "middle")
        .attr("fill", "#64748b")
        .attr("font-size", "14px")
        .text("Progressive refinement of database structure to minimize redundancy");
    
    // Legend moved to bottom of diagram
    const legendGroup = g.append("g")
        .attr("transform", `translate(${(width - margin.left - margin.right) / 2 - 240}, ${height - margin.top - margin.bottom - 20})`);
        
    legendGroup.append("rect")
        .attr("width", 480)
        .attr("height", 26)
        .attr("rx", 6)
        .attr("fill", "white")
        .attr("stroke", "#cbd5e1")
        .attr("stroke-width", 1);
        
    const legendItems = [
        { x: 40, color: "#ef4444", text: "Issues Detection" },
        { x: 150, color: "#d97706", text: "Atomic Values" },
        { x: 270, color: "#059669", text: "Reduce Redundancy" },
        { x: 410, color: "#2563eb", text: "Optimal Structure" }
    ];
    
    legendItems.forEach(item => {
        const itemGroup = legendGroup.append("g")
            .attr("transform", `translate(${item.x - 20}, 13)`);
            
        itemGroup.append("circle")
            .attr("r", 5)
            .attr("fill", item.color);
            
        itemGroup.append("text")
            .attr("x", 12)
            .attr("y", 4)
            .attr("fill", "#334155")
            .attr("font-size", "11px")
            .text(item.text);
    });
    
    // Enhanced tooltip function
    function showEnhancedTooltip(event, step) {
        const tooltip = d3.select("body").append("div")
            .attr("class", "d3-tooltip")
            .style("left", (event.pageX + 20) + "px")
            .style("top", (event.pageY - 10) + "px")
            .style("width", "300px")
            .style("background", "linear-gradient(135deg, #1e293b, #0f172a)")
            .style("border", "1px solid rgba(255,255,255,0.1)")
            .style("border-radius", "8px")
            .style("padding", "15px")
            .style("box-shadow", "0 10px 25px rgba(0,0,0,0.25)")
            .style("z-index", "1000");
            
        const title = tooltip.append("div")
            .style("font-weight", "bold")
            .style("font-size", "16px")
            .style("margin-bottom", "8px")
            .style("color", "#f8fafc")
            .html(`${step.title} Normalization`);
            
        const desc = tooltip.append("div")
            .style("margin-bottom", "12px")
            .style("color", "#e2e8f0")
            .html(step.description);
            
        const benefits = tooltip.append("div")
            .style("padding", "10px")
            .style("border-radius", "6px")
            .style("background", "rgba(255,255,255,0.1)")
            .style("margin-top", "8px")
            .style("color", "#e2e8f0")
            .style("font-size", "13px")
            .html(step.benefits || step.problems);
    }
    
    // Example data tooltip
    function showExampleTooltip(event, example) {
        const tooltip = d3.select("body").append("div")
            .attr("class", "d3-tooltip")
            .style("left", (event.pageX - 200) + "px") // Further to the left to avoid overflow
            .style("top", (event.pageY - 10) + "px")
            .style("background", "linear-gradient(135deg, #1e293b, #0f172a)")
            .style("border", "1px solid rgba(255,255,255,0.1)")
            .style("border-radius", "8px")
            .style("padding", "15px")
            .style("z-index", "1000");
            
        tooltip.append("div")
            .style("font-weight", "bold")
            .style("margin-bottom", "6px")
            .style("color", "#f8fafc")
            .text("Example Data");
            
        tooltip.append("div")
            .style("font-family", "monospace")
            .style("white-space", "pre")
            .style("background", "rgba(0,0,0,0.25)")
            .style("padding", "8px")
            .style("border-radius", "4px")
            .style("color", "#e2e8f0")
            .text(example);
    }
    
    function hideTooltip() {
        d3.selectAll(".d3-tooltip").transition().duration(200).style("opacity", 0).remove();
    }
})();
</script>

---

## 🔧 3. Advanced Data Structures
<span id="advanced-data-structures"></span>

This section delves into other built-in Python data structures: **Tuples**, **Sets**, and **Dictionaries**.

### 🎯 3.1. Tuples - Immutable Sequences
<span id="tuples"></span>

Tuples are ordered collections of items, similar to lists. The key difference is that tuples are **immutable**, meaning they cannot be changed after creation.

**Characteristics:**
- **Ordered**: Items have a defined order and maintain that order
- **Immutable**: Cannot be changed after creation
- **Allow Duplicates**: Can contain duplicate values
- **Heterogeneous**: Can store different data types

**Syntax:** Created with parentheses `()`

**Use Cases:** 
- Ideal for data that should not change
- Returning multiple values from functions
- Using as dictionary keys (since they're immutable)
- Representing coordinates or fixed data structures

```python
# Creating a tuple
person = ("Camedinh", 2004, "Student")

# Accessing elements (same as lists)
print(person[0])  # Output: Camedinh

# Tuples are immutable
# person[0] = "Hacked"  # This will raise a TypeError

# Unpacking a tuple
name, age, occupation = person
print(age)  # Output: 2004

# Creating a single-item tuple (note the comma)
single_tuple = (42,)

# Tuple methods
coordinates = (10, 20, 10, 30)
print(coordinates.count(10))  # Output: 2
print(coordinates.index(20))  # Output: 1
```

### 🎯 3.2. Sets - Unique Collections
<span id="sets"></span>

Sets are **unordered** collections of **unique** items. They are mutable and perfect for mathematical set operations.

**Characteristics:**
- **Unordered**: No defined order (items can appear in any sequence)
- **Mutable**: Can add and remove items
- **No Duplicates**: Automatically removes duplicate values
- **Fast Membership Testing**: O(1) average time complexity

**Syntax:** Created with curly braces `{}` or `set()`

**Use Cases:**
- Membership testing
- Removing duplicates from data
- Mathematical set operations (union, intersection, difference)
- Finding unique elements

```python
# Creating a set (duplicates are automatically removed)
animals = {"cat", "dog", "tiger", "cat"}
print(animals)  # Output: {'cat', 'dog', 'tiger'}

# Adding items
animals.add("bear")
animals.update({"chicken", "duck"})

# Set Operations
set1 = {1, 2, 3}
set2 = {3, 4, 5}

# Union (all unique elements from both sets)
print(set1 | set2)  # Output: {1, 2, 3, 4, 5}
print(set1.union(set2))  # Alternative syntax

# Intersection (common elements)
print(set1 & set2)  # Output: {3}
print(set1.intersection(set2))  # Alternative syntax

# Difference (elements in set1 but not in set2)
print(set1 - set2)  # Output: {1, 2}
print(set1.difference(set2))  # Alternative syntax

# Symmetric difference (elements in either set, but not both)
print(set1 ^ set2)  # Output: {1, 2, 4, 5}

# Membership testing (very fast)
print("cat" in animals)  # Output: True
```

### 🎯 3.3. Dictionaries - Key-Value Powerhouse
<span id="dictionaries"></span>

Dictionaries are **ordered** (as of Python 3.7+) collections of **key-value pairs**. They are mutable and provide fast lookups.

**Characteristics:**
- **Ordered**: Maintain insertion order (Python 3.7+)
- **Mutable**: Can add, modify, and remove items
- **Keys must be unique**: Each key can appear only once
- **Keys must be immutable**: Strings, numbers, tuples (but not lists)
- **Fast Access**: O(1) average time complexity for lookups

**Syntax:** Created with curly braces `{key: value}`

**Use Cases:**
- Storing structured data with fast lookups
- Mapping relationships between data
- Caching and memoization
- Configuration settings
- Counting and frequency analysis

### 📊 Interactive Data Structure Comparison - List vs Dictionary

<div id="d3-list-dict-comparison" style="background-color:#f0f4f8; border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.1); padding: 40px; margin: 30px 0; min-height: 400px;"></div>

<script>
// 📊 NEW List vs Dictionary Comparison
(function() {
    const container = d3.select("#d3-list-dict-comparison");
    if (container.empty()) return;
    
    container.selectAll("*").remove();
    
    const width = 700;
    const height = 400;
    const margin = {top: 60, right: 60, bottom: 60, left: 60};
    
    const svg = container.append("svg")
        .attr("viewBox", `0 0 ${width} ${height}`)
        .attr("preserveAspectRatio", "xMidYMid meet");
        
        const g = svg.append("g")
            .attr("transform", `translate(${margin.left}, ${margin.top})`);
        
    // Data
    const listData = ["beauty", "joy", "computing"];
    const dictData = [
        {key: "b", value: "beauty"},
        {key: "j", value: "joy"},
        {key: "c", value: "computing"}
    ];
    
         // List visualization (left side)
     const listGroup = g.append("g")
         .attr("transform", "translate(50, 50)");
     
     listGroup.append("text")
         .attr("x", 50)
         .attr("y", -20)
         .attr("text-anchor", "middle")
         .attr("font-weight", "bold")
         .attr("font-size", "18px")
         .text("LIST");
     
     listData.forEach((item, i) => {
         const y = i * 60;
         
         // Index
         listGroup.append("text")
             .attr("x", -10)
             .attr("y", y + 25)
             .attr("text-anchor", "middle")
             .attr("fill", "#059669")
             .attr("font-weight", "bold")
             .text(`[${i}]`);
         
         // Value box
         const box = listGroup.append("g")
             .style("cursor", "pointer");
         
         box.append("rect")
             .attr("x", 10)
             .attr("y", y)
             .attr("width", 100)
             .attr("height", 40)
             .attr("fill", "#3b82f6")
             .attr("stroke", "#2563eb")
             .attr("stroke-width", 2)
             .attr("rx", 4)
             .on("mouseover", function(event) {
                 d3.select(this).attr("stroke-width", 3);
                 showTooltip(event, `list[${i}] = "${item}"`);
             })
             .on("mouseout", function() {
                 d3.select(this).attr("stroke-width", 2);
                 hideTooltip();
             });
         
         box.append("text")
             .attr("x", 60)
             .attr("y", y + 25)
             .attr("text-anchor", "middle")
             .attr("fill", "white")
             .attr("font-weight", "bold")
             .text(item);
     });
     
     // Dictionary visualization (right side)
     const dictGroup = g.append("g")
         .attr("transform", "translate(350, 50)");
     
     dictGroup.append("text")
         .attr("x", 80)
         .attr("y", -20)
         .attr("text-anchor", "middle")
         .attr("font-weight", "bold")
         .attr("font-size", "18px")
         .text("DICTIONARY");
     
     dictData.forEach((item, i) => {
         const y = i * 60;
         
         // Key box
         const keyBox = dictGroup.append("g")
             .style("cursor", "pointer");
         
         keyBox.append("rect")
             .attr("x", 0)
             .attr("y", y)
             .attr("width", 40)
             .attr("height", 40)
             .attr("fill", "#ef4444")
             .attr("stroke", "#dc2626")
             .attr("stroke-width", 2)
             .attr("rx", 4)
             .on("mouseover", function(event) {
                 d3.select(this).attr("stroke-width", 3);
                 showTooltip(event, `dict["${item.key}"] = "${item.value}"`);
             })
             .on("mouseout", function() {
                 d3.select(this).attr("stroke-width", 2);
                 hideTooltip();
             });
         
         keyBox.append("text")
             .attr("x", 20)
             .attr("y", y + 25)
             .attr("text-anchor", "middle")
             .attr("fill", "white")
             .attr("font-weight", "bold")
             .text(item.key);
         
         // Arrow
         dictGroup.append("line")
             .attr("x1", 45)
             .attr("y1", y + 20)
             .attr("x2", 65)
             .attr("y2", y + 20)
             .attr("stroke", "#6b7280")
             .attr("stroke-width", 2);
         
         // Value box
         const valueBox = dictGroup.append("g")
             .style("cursor", "pointer");
         
         valueBox.append("rect")
             .attr("x", 70)
             .attr("y", y)
             .attr("width", 100)
             .attr("height", 40)
             .attr("fill", "#10b981")
             .attr("stroke", "#059669")
             .attr("stroke-width", 2)
             .attr("rx", 4)
             .on("mouseover", function(event) {
                 d3.select(this).attr("stroke-width", 3);
                 showTooltip(event, `Value: "${item.value}"`);
             })
             .on("mouseout", function() {
                 d3.select(this).attr("stroke-width", 2);
                 hideTooltip();
             });
         
         valueBox.append("text")
             .attr("x", 120)
             .attr("y", y + 25)
             .attr("text-anchor", "middle")
             .attr("fill", "white")
             .attr("font-weight", "bold")
             .text(item.value);
     });
     
     // Title
     g.append("text")
         .attr("x", 280)
         .attr("y", -20)
         .attr("text-anchor", "middle")
         .attr("font-size", "20px")
         .attr("font-weight", "bold")
         .text("List vs Dictionary Data Access");
     
     function showTooltip(event, text) {
         const tooltip = d3.select("body").append("div")
             .attr("class", "d3-tooltip")
             .style("left", (event.pageX + 10) + "px")
             .style("top", (event.pageY - 10) + "px")
             .html(text);
     }
     
     function hideTooltip() {
         d3.selectAll(".d3-tooltip").remove();
     }
 })();
 </script>

 > 💡 **Interactive:** Hover over list indices or dictionary keys to see access patterns!

 **Code Examples:**

 ```python
 # Creating a dictionary
 params = {
     'learning_rate': 0.1,
     'optimizer': 'Adam',
     'metric': 'Accuracy'
 }

 # Accessing a value by key
 print(params['optimizer']) # Output: Adam

 # Using .get() to avoid errors for non-existent keys
 print(params.get('batch_size', 32))  # Output: 32 (default value)

 # Adding or updating an item
 params['epochs'] = 100
 params['learning_rate'] = 0.05

 # Iterating over a dictionary
 for key, value in params.items():
     print(f"{key}: {value}")
 ```

 ### 🎯 3.4. Data Structure Applications

 **Image Histogram with Dictionaries:** A dictionary can be used to count pixel intensity frequencies. The pixel value is the key, and its count is the value.

 **Text Vectorization with Sets/Dictionaries:** A set can create a unique vocabulary from a text corpus. A dictionary can then map each unique word to an integer index for machine learning.

 **Non-Maximum Suppression (NMS) with Tuples/Lists:** NMS in object detection uses lists of bounding boxes. Each box can be represented as a tuple `(x_min, y_min, x_max, y_max, confidence_score)`, which is immutable and perfect for this data.

 ---

 ## 🌿 4. Git & GitHub for Version Control
<span id="git-github"></span>

Version Control Systems (VCS) track and manage changes to files over time. Git is a powerful, distributed VCS. GitHub is a web-based hosting service for Git repositories.

 ### 🎯 4.1. Git Fundamentals
<span id="git-fundamentals"></span>

**Core Concepts:**

- **VCS (Version Control System):** A system that records changes to a file or set of files over time so that you can recall specific versions later.
 - **Distributed VCS (DVCS):** Systems (like Git) where clients don't just check out the latest snapshot of the files; they fully mirror the repository.
 - **Repository (Repo):** A directory where your project's files and their revision history are stored.
 - **Commit:** A snapshot of your files at a specific point in time.
 - **Branch:** A lightweight movable pointer to a commit. It allows for developing features in isolation. `main` is the default branch.
 - **SHA-1 Hash:** A unique 40-character identifier for every commit, file, and object in Git, ensuring data integrity.

 ### 🔄 Interactive Git Workflow Visualization

 <div id="d3-git-workflow" style="background-color:#f8f9fa; border-radius: 12px; box-shadow: 0 8px 25px rgba(0,0,0,0.15); padding: 3rem; margin: 3rem 0; min-height: 500px; overflow: visible;"></div>

 <script>
 // 🔄 PERFECT Git Workflow Visualization
 (function() {
     const container = d3.select("#d3-git-workflow");
     if (container.empty()) return;
     
     container.selectAll("*").remove();
     
     const config = {
         width: 900,
         height: 500,
         margin: { top: 80, right: 80, bottom: 80, left: 80 }
     };
     
     const innerWidth = config.width - config.margin.left - config.margin.right;
     const innerHeight = config.height - config.margin.top - config.margin.bottom;
     
     const svg = container.append("svg")
         .attr("viewBox", `0 0 ${config.width} ${config.height}`)
         .attr("preserveAspectRatio", "xMidYMid meet");
     
     const g = svg.append("g")
         .attr("transform", `translate(${config.margin.left}, ${config.margin.top})`);
     
     // Perfect workflow stages
     const stages = [
         {
             name: "Working Directory", 
             x: 120, 
             y: innerHeight / 2, 
             color: "#3b82f6",
             bgColor: "#eff6ff",
             command: "edit files",
             description: "Modify, create, delete files in your project folder",
             icon: "📝"
         },
         {
             name: "Staging Area", 
             x: innerWidth / 2, 
             y: innerHeight / 2, 
             color: "#f59e0b",
             bgColor: "#fffbeb",
             command: "git add",
             description: "Prepare files for the next commit",
             icon: "📦"
         },
         {
             name: "Local Repository", 
             x: innerWidth - 120, 
             y: innerHeight / 2, 
             color: "#10b981",
             bgColor: "#f0fdf4",
             command: "git commit",
             description: "Save a snapshot with a descriptive message",
             icon: "💾"
         }
     ];
     
     // Create gradients and markers
     const defs = svg.append("defs");
     
     stages.forEach((stage, i) => {
         const gradient = defs.append("linearGradient")
             .attr("id", `stageGradient-${i}`)
             .attr("x1", "0%").attr("y1", "0%")
             .attr("x2", "100%").attr("y2", "100%");
         
         gradient.append("stop").attr("offset", "0%").style("stop-color", stage.color);
         gradient.append("stop").attr("offset", "100%").style("stop-color", stage.color + "80");
     });
     
     // Arrow marker
     defs.append("marker")
         .attr("id", "gitArrowhead")
         .attr("viewBox", "0 -5 10 10")
         .attr("refX", 8)
         .attr("refY", 0)
         .attr("orient", "auto")
         .attr("markerWidth", 10)
         .attr("markerHeight", 10)
         .append("path")
         .attr("d", "M 0,-5 L 10,0 L 0,5")
         .attr("fill", "#6b7280");
     
     // Draw perfect workflow stages
     stages.forEach((stage, i) => {
         const stageGroup = g.append("g")
             .attr("class", "git-stage")
             .style("cursor", "pointer");
         
         // Main stage container
         stageGroup.append("rect")
             .attr("x", stage.x - 90)
             .attr("y", stage.y - 60)
             .attr("width", 180)
             .attr("height", 120)
             .attr("fill", stage.bgColor)
             .attr("stroke", stage.color)
             .attr("stroke-width", 3)
             .attr("rx", 15)
             .style("filter", `drop-shadow(0 4px 12px ${stage.color}40)`)
             .on("mouseover", function(event) {
                 d3.select(this)
                     .transition().duration(200)
                     .attr("stroke-width", 4)
                     .style("filter", `drop-shadow(0 6px 20px ${stage.color}60)`);
                 
                 showGitTooltip(event, stage);
             })
             .on("mouseout", function() {
                 d3.select(this)
                     .transition().duration(200)
                     .attr("stroke-width", 3)
                     .style("filter", `drop-shadow(0 4px 12px ${stage.color}40)`);
                 
                 hideTooltip();
             });
         
         // Stage icon
         stageGroup.append("text")
             .attr("x", stage.x)
             .attr("y", stage.y - 25)
             .attr("text-anchor", "middle")
             .attr("font-size", "24px")
             .text(stage.icon);
         
         // Stage name
         stageGroup.append("text")
             .attr("x", stage.x)
             .attr("y", stage.y - 5)
             .attr("text-anchor", "middle")
             .attr("fill", stage.color)
             .attr("font-weight", "bold")
             .attr("font-size", "14px")
             .text(stage.name);
         
         // File representation
         const fileGroup = stageGroup.append("g")
             .attr("transform", `translate(${stage.x}, ${stage.y + 15})`);
         
         fileGroup.append("rect")
             .attr("x", -15)
             .attr("y", -10)
             .attr("width", 30)
             .attr("height", 20)
             .attr("fill", "white")
             .attr("stroke", stage.color)
             .attr("stroke-width", 2)
             .attr("rx", 3);
         
         fileGroup.append("line")
             .attr("x1", -10)
             .attr("y1", -5)
             .attr("x2", 10)
             .attr("y2", -5)
             .attr("stroke", stage.color)
             .attr("stroke-width", 1);
         
         fileGroup.append("line")
             .attr("x1", -10)
             .attr("y1", 0)
             .attr("x2", 5)
             .attr("y2", 0)
             .attr("stroke", stage.color)
             .attr("stroke-width", 1);
         
         fileGroup.append("line")
             .attr("x1", -10)
             .attr("y1", 5)
             .attr("x2", 8)
             .attr("y2", 5)
             .attr("stroke", stage.color)
             .attr("stroke-width", 1);
         
         // Command below
         stageGroup.append("text")
             .attr("x", stage.x)
             .attr("y", stage.y + 80)
             .attr("text-anchor", "middle")
             .attr("fill", "#6b7280")
             .attr("font-weight", "bold")
             .attr("font-size", "12px")
             .text(stage.command);
     });
     
     // Perfect arrows between stages
     const arrows = [
         {
             from: {x: stages[0].x + 90, y: stages[0].y}, 
             to: {x: stages[1].x - 90, y: stages[1].y}, 
             label: "git add",
             curve: false
         },
         {
             from: {x: stages[1].x + 90, y: stages[1].y}, 
             to: {x: stages[2].x - 90, y: stages[2].y}, 
             label: "git commit",
             curve: false
         },
         {
             from: {x: stages[2].x - 30, y: stages[2].y + 80}, 
             to: {x: stages[0].x + 30, y: stages[0].y + 80}, 
             label: "continue editing",
             curve: true
         }
     ];
     
     arrows.forEach((arrow, i) => {
         if (arrow.curve) {
             // Curved arrow for cycle back
             const path = g.append("path")
                 .attr("d", `M ${arrow.from.x} ${arrow.from.y} Q ${(arrow.from.x + arrow.to.x) / 2} ${arrow.from.y + 60} ${arrow.to.x} ${arrow.to.y}`)
                 .attr("stroke", "#6b7280")
                 .attr("stroke-width", 2)
                 .attr("fill", "none")
                 .attr("stroke-dasharray", "5,5")
                 .attr("marker-end", "url(#gitArrowhead)");
             
             // Curved arrow label
             g.append("text")
                 .attr("x", (arrow.from.x + arrow.to.x) / 2)
                 .attr("y", arrow.from.y + 75)
                 .attr("text-anchor", "middle")
                 .attr("fill", "#6b7280")
                 .attr("font-size", "11px")
                 .attr("font-style", "italic")
                 .text(arrow.label);
         } else {
             // Straight arrows
             g.append("line")
                 .attr("x1", arrow.from.x)
                 .attr("y1", arrow.from.y)
                 .attr("x2", arrow.to.x)
                 .attr("y2", arrow.to.y)
                 .attr("stroke", "#6b7280")
                 .attr("stroke-width", 3)
                 .attr("marker-end", "url(#gitArrowhead)");
             
             // Arrow label
             g.append("text")
                 .attr("x", (arrow.from.x + arrow.to.x) / 2)
                 .attr("y", arrow.from.y - 20)
                 .attr("text-anchor", "middle")
                 .attr("fill", "#374151")
                 .attr("font-weight", "bold")
                 .attr("font-size", "12px")
                 .text(arrow.label);
         }
     });
     
     // Perfect title
     g.append("text")
         .attr("x", innerWidth / 2)
         .attr("y", -40)
         .attr("text-anchor", "middle")
         .attr("fill", "#1f2937")
         .attr("font-weight", "bold")
         .attr("font-size", "22px")
         .text("Git Workflow: Working Directory → Staging → Repository");
     
     // Subtitle
     g.append("text")
         .attr("x", innerWidth / 2)
         .attr("y", -20)
         .attr("text-anchor", "middle")
         .attr("fill", "#6b7280")
         .attr("font-size", "14px")
         .text("The fundamental three-stage process of Git version control");
     
     // Tooltip functions
     function showGitTooltip(event, stage) {
         const tooltip = d3.select("body").append("div")
             .attr("class", "d3-tooltip")
             .style("left", (event.pageX + 15) + "px")
             .style("top", (event.pageY - 15) + "px")
             .html(`<strong>${stage.icon} ${stage.name}</strong><br><small>${stage.description}</small><br><code>${stage.command}</code>`);
     }
     
     function hideTooltip() {
         d3.selectAll(".d3-tooltip").remove();
     }
 })();
 </script>

 > 🔄 **Interactive:** Hover over each stage to understand the Git workflow process!

 #### 💻 Basic Git Workflow

 **Initialize or Clone a Repository:**

 ```bash
 # Initialize a new repository in the current directory
 git init

 # Clone an existing repository from a URL
 git clone https://github.com/user/repo.git
 ```

 **Make Changes and Stage Them:**

 ```bash
 # Check the status of your files
 git status

 # Add a specific file to the staging area
 git add <filename>

 # Add all modified files to the staging area
 git add .
 ```

 **Commit the Changes:**

 ```bash
 # Commit staged changes with a message
 git commit -m "Your descriptive commit message"
 ```

 **Work with Remotes:**

 ```bash
 # List your remote repositories (usually 'origin')
 git remote -v

 # Push your committed changes to the remote repository
 git push origin main

 # Pull changes from the remote repository
 git pull origin main
 ```

 ### 🌿 4.2. Git Branching & Merging
<span id="git-branching"></span>

Branching is a core feature of Git that allows for parallel development.

### 🌿 Interactive Git Branching & Merging

<div id="d3-git-branching" style="background-color:#f8f9fa; border-radius: 12px; box-shadow: 0 8px 25px rgba(0,0,0,0.15); padding: 3rem; margin: 3rem 0; min-height: 500px; overflow: visible;"></div>

<script>
// 🌿 PREMIUM Git Branching & Merging Visualization
(function() {
    const container = d3.select("#d3-git-branching");
    if (container.empty()) return;
    
    container.selectAll("*").remove();
    
    const config = {
        width: 950,
        height: 500,
        margin: { top: 60, right: 80, bottom: 80, left: 80 },
        commitRadius: 22,
        branchLineWidth: 4,
        mainBranchColor: "#3b82f6", // blue
        featureBranchColor: "#f59e0b", // amber
        mergeColor: "#10b981", // emerald
    };
    
    const innerWidth = config.width - config.margin.left - config.margin.right;
    const innerHeight = config.height - config.margin.top - config.margin.bottom;
    
    const svg = container.append("svg")
        .attr("viewBox", `0 0 ${config.width} ${config.height}`)
        .attr("preserveAspectRatio", "xMidYMid meet");
    
    const g = svg.append("g")
        .attr("transform", `translate(${config.margin.left}, ${config.margin.top})`);
    
    // Create gradients with enhanced colors
    const defs = svg.append("defs");
    
    // Main branch gradient (blue)
    const mainGradient = defs.append("linearGradient")
        .attr("id", "mainGradient")
        .attr("x1", "0%").attr("y1", "0%")
        .attr("x2", "100%").attr("y2", "100%");
    
    mainGradient.append("stop").attr("offset", "0%").style("stop-color", "#60a5fa");
    mainGradient.append("stop").attr("offset", "100%").style("stop-color", "#2563eb");
    
    // Feature branch gradient (amber)
    const featureGradient = defs.append("linearGradient")
        .attr("id", "featureGradient")
        .attr("x1", "0%").attr("y1", "0%")
        .attr("x2", "100%").attr("y2", "100%");
    
    featureGradient.append("stop").attr("offset", "0%").style("stop-color", "#fbbf24");
    featureGradient.append("stop").attr("offset", "100%").style("stop-color", "#d97706");
    
    // Merge commit gradient (green-blue)
    const mergeGradient = defs.append("linearGradient")
        .attr("id", "mergeGradient")
        .attr("x1", "0%").attr("y1", "0%")
        .attr("x2", "100%").attr("y2", "100%");
    
    mergeGradient.append("stop").attr("offset", "0%").style("stop-color", "#34d399");
    mergeGradient.append("stop").attr("offset", "100%").style("stop-color", "#059669");
    
    // Arrow marker for animations
    defs.append("marker")
        .attr("id", "arrowhead")
        .attr("viewBox", "-0 -5 10 10")
        .attr("refX", 9)
        .attr("refY", 0)
        .attr("orient", "auto")
        .attr("markerWidth", 6)
        .attr("markerHeight", 6)
        .append("path")
        .attr("d", "M 0,-5 L 10 ,0 L 0,5")
        .attr("fill", "#9ca3af");
    
    // Add subtle background regions
    const bgHeight = 80;
    g.append("rect")
        .attr("x", 0)
        .attr("y", innerHeight * 0.6 - bgHeight/2)
        .attr("width", innerWidth)
        .attr("height", bgHeight)
        .attr("rx", 12)
        .attr("fill", "rgba(219, 234, 254, 0.3)")
        .attr("stroke", "rgba(59, 130, 246, 0.2)")
        .attr("stroke-width", 1);
    
    g.append("rect")
        .attr("x", innerWidth * 0.3)
        .attr("y", innerHeight * 0.3 - bgHeight/2)
        .attr("width", innerWidth * 0.5)
        .attr("height", bgHeight)
        .attr("rx", 12)
        .attr("fill", "rgba(254, 240, 138, 0.2)")
        .attr("stroke", "rgba(245, 158, 11, 0.2)")
        .attr("stroke-width", 1);
    
    // Branch positions - perfectly balanced
    const mainY = innerHeight * 0.6;
    const featureY = innerHeight * 0.3;
    
    // Improved horizontal spacing
    const horizontalPositions = {
        A: innerWidth * 0.1,
        B: innerWidth * 0.3,
        C: innerWidth * 0.4,
        D: innerWidth * 0.55, 
        E: innerWidth * 0.7,
        M: innerWidth * 0.85
    };
    
    // Better commits data
    const commits = [
        {
            id: "A", 
            x: horizontalPositions.A, 
            y: mainY, 
            branch: "main", 
            message: "Initial commit",
            desc: "Repository initialization with README and basic structure", 
            time: "Day 1", 
            gradient: "mainGradient"
        },
        {
            id: "B", 
            x: horizontalPositions.B, 
            y: mainY, 
            branch: "main", 
            message: "Add basic features", 
            desc: "Core functionality implementation",
            time: "Day 2", 
            gradient: "mainGradient"
        },
        {
            id: "C", 
            x: horizontalPositions.C, 
            y: featureY, 
            branch: "feature", 
            message: "Start new feature", 
            desc: "Initial login page scaffolding",
            time: "Day 3", 
            gradient: "featureGradient"
        },
        {
            id: "D", 
            x: horizontalPositions.D, 
            y: featureY, 
            branch: "feature", 
            message: "Add tests", 
            desc: "Unit tests for authentication flow",
            time: "Day 4", 
            gradient: "featureGradient"
        },
        {
            id: "E", 
            x: horizontalPositions.E, 
            y: featureY, 
            branch: "feature", 
            message: "Complete feature", 
            desc: "Finalize login implementation with validation",
            time: "Day 5", 
            gradient: "featureGradient"
        },
        {
            id: "M", 
            x: horizontalPositions.M, 
            y: mainY, 
            branch: "main", 
            message: "Merge feature branch", 
            desc: "Integrate login feature into main branch",
            time: "Day 6", 
            gradient: "mergeGradient"
        }
    ];
    
    // Draw branch lines with enhanced styling
    // Main branch line
    g.append("line")
        .attr("x1", 20)
        .attr("y1", mainY)
        .attr("x2", innerWidth - 20)
        .attr("y2", mainY)
        .attr("stroke", config.mainBranchColor)
        .attr("stroke-width", config.branchLineWidth)
        .attr("stroke-linecap", "round")
        .style("filter", "drop-shadow(0 2px 6px rgba(59, 130, 246, 0.3))");
    
    // Feature branch creation line
    g.append("line")
        .attr("x1", horizontalPositions.B)
        .attr("y1", mainY)
        .attr("x2", horizontalPositions.C)
        .attr("y2", featureY)
        .attr("stroke", config.featureBranchColor)
        .attr("stroke-width", config.branchLineWidth - 1)
        .attr("stroke-linecap", "round")
        .style("filter", "drop-shadow(0 2px 6px rgba(245, 158, 11, 0.3))");
    
    // Feature branch line
    g.append("line")
        .attr("x1", horizontalPositions.C)
        .attr("y1", featureY)
        .attr("x2", horizontalPositions.E)
        .attr("y2", featureY)
        .attr("stroke", config.featureBranchColor)
        .attr("stroke-width", config.branchLineWidth)
        .attr("stroke-linecap", "round")
        .style("filter", "drop-shadow(0 2px 6px rgba(245, 158, 11, 0.3))");
    
    // Merge line with improved dashed style
    g.append("line")
        .attr("x1", horizontalPositions.E)
        .attr("y1", featureY)
        .attr("x2", horizontalPositions.M)
        .attr("y2", mainY)
        .attr("stroke", config.mergeColor)
        .attr("stroke-width", config.branchLineWidth - 1)
        .attr("stroke-dasharray", "10,5")
        .attr("stroke-linecap", "round")
        .style("filter", "drop-shadow(0 2px 6px rgba(16, 185, 129, 0.3))");
    
    // Branch labels with improved styling
    // Main branch label
    const mainLabel = g.append("g")
        .attr("transform", `translate(${horizontalPositions.A - 65}, ${mainY - 32})`);
    
    mainLabel.append("rect")
        .attr("x", -5)
        .attr("y", -18)
        .attr("width", 75)
        .attr("height", 24)
        .attr("rx", 12)
        .attr("fill", "rgba(59, 130, 246, 0.1)")
        .attr("stroke", config.mainBranchColor)
        .attr("stroke-width", 1);
    
    mainLabel.append("text")
        .attr("x", 32)
        .attr("y", 0)
        .attr("text-anchor", "middle")
        .attr("dominant-baseline", "middle")
        .attr("fill", config.mainBranchColor)
        .attr("font-weight", "bold")
        .attr("font-size", "14px")
        .text("🌟 main");
    
    // Feature branch label
    const featureLabel = g.append("g")
        .attr("transform", `translate(${horizontalPositions.D}, ${featureY - 32})`);
    
    featureLabel.append("rect")
        .attr("x", -65)
        .attr("y", -18)
        .attr("width", 150)
        .attr("height", 24)
        .attr("rx", 12)
        .attr("fill", "rgba(245, 158, 11, 0.1)")
        .attr("stroke", config.featureBranchColor)
        .attr("stroke-width", 1);
    
    featureLabel.append("text")
        .attr("x", 10)
        .attr("y", 0)
        .attr("text-anchor", "middle")
        .attr("dominant-baseline", "middle")
        .attr("fill", config.featureBranchColor)
        .attr("font-weight", "bold")
        .attr("font-size", "14px")
        .text("🚀 feature/new-login");
    
    // Draw commits with enhanced styling
    commits.forEach(commit => {
        const commitGroup = g.append("g")
            .attr("class", "commit-group")
            .style("cursor", "pointer")
            .on("mouseover", function(event) {
                // Highlight commit on hover
                d3.select(this).select("circle")
                    .transition().duration(200)
                    .attr("r", config.commitRadius * 1.2)
                    .style("filter", "drop-shadow(0 6px 16px rgba(0,0,0,0.25))");
                
                // Show detailed tooltip
                showCommitTooltip(event, commit);
            })
            .on("mouseout", function() {
                // Restore normal size
                d3.select(this).select("circle")
                    .transition().duration(200)
                    .attr("r", config.commitRadius)
                    .style("filter", "drop-shadow(0 4px 10px rgba(0,0,0,0.15))");
                
                // Hide tooltip
                hideTooltip();
            });
        
        // Commit circle with glow effect
        commitGroup.append("circle")
            .attr("cx", commit.x)
            .attr("cy", commit.y)
            .attr("r", config.commitRadius)
            .attr("fill", `url(#${commit.gradient})`)
            .attr("stroke", "white")
            .attr("stroke-width", 3)
            .style("filter", "drop-shadow(0 4px 10px rgba(0,0,0,0.15))");
        
        // Add subtle inner shadow for depth
        commitGroup.append("circle")
            .attr("cx", commit.x)
            .attr("cy", commit.y)
            .attr("r", config.commitRadius - 8)
            .attr("fill", "none")
            .attr("stroke", "rgba(255,255,255,0.4)")
            .attr("stroke-width", 2);
        
        // Commit ID in circle
        commitGroup.append("text")
            .attr("x", commit.x)
            .attr("y", commit.y + 1)
            .attr("text-anchor", "middle")
            .attr("dominant-baseline", "middle")
            .attr("fill", "white")
            .attr("font-weight", "bold")
            .attr("font-size", "16px")
            .style("text-shadow", "0 1px 2px rgba(0,0,0,0.3)")
            .text(commit.id);
    });
    
    // Improved workflow steps with visual indicators
    const steps = [
        {
            x: (horizontalPositions.B + horizontalPositions.C) / 2,
            y: (mainY + featureY) / 2 - 10,
            text: "1. Branch",
            icon: "↗️",
            desc: "Create feature branch"
        },
        {
            x: (horizontalPositions.C + horizontalPositions.E) / 2,
            y: featureY + 40,
            text: "2. Develop",
            icon: "📝",
            desc: "Work on isolated feature"
        },
        {
            x: (horizontalPositions.E + horizontalPositions.M) / 2,
            y: (mainY + featureY) / 2 + 10,
            text: "3. Merge",
            icon: "🔄",
            desc: "Integrate changes"
        }
    ];
    
    // Add fancy step indicators
    steps.forEach(step => {
        const stepGroup = g.append("g")
            .attr("transform", `translate(${step.x}, ${step.y})`)
            .style("cursor", "help")
            .on("mouseover", function(event) {
                d3.select(this).select("rect")
                    .transition().duration(200)
                    .attr("stroke-width", 2);
                
                showTooltip(event, `<strong>${step.text}</strong><br>${step.desc}`);
            })
            .on("mouseout", function() {
                d3.select(this).select("rect")
                    .transition().duration(200)
                    .attr("stroke-width", 1);
                
                hideTooltip();
            });
        
        stepGroup.append("rect")
            .attr("x", -60)
            .attr("y", -15)
            .attr("width", 120)
            .attr("height", 30)
            .attr("rx", 15)
            .attr("fill", "rgba(255, 255, 255, 0.9)")
            .attr("stroke", "#9ca3af")
            .attr("stroke-width", 1);
        
        stepGroup.append("text")
            .attr("x", 0)
            .attr("y", 2)
            .attr("text-anchor", "middle")
            .attr("dominant-baseline", "middle")
            .attr("fill", "#374151")
            .attr("font-weight", "600")
            .attr("font-size", "13px")
            .text(`${step.icon} ${step.text}`);
    });
    
    // Tooltip functions with enhanced styling
    function showCommitTooltip(event, commit) {
        const tooltip = d3.select("body").append("div")
            .attr("class", "d3-tooltip")
            .style("left", (event.pageX + 15) + "px")
            .style("top", (event.pageY - 15) + "px")
            .html(`
                <div style="border-left: 4px solid ${commit.branch === 'main' ? '#3b82f6' : commit.id === 'M' ? '#10b981' : '#f59e0b'}; padding-left: 8px;">
                    <strong style="font-size: 14px;">Commit ${commit.id}</strong>
                    <div style="font-weight: 600; margin: 4px 0;">${commit.message}</div>
                    <div style="opacity: 0.8; font-size: 12px;">${commit.desc}</div>
                    <div style="margin-top: 6px; font-size: 11px; opacity: 0.6;">
                        Branch: ${commit.branch} · ${commit.time}
                    </div>
                </div>
            `);
    }
    
    function showTooltip(event, html) {
        const tooltip = d3.select("body").append("div")
            .attr("class", "d3-tooltip")
            .style("left", (event.pageX + 15) + "px")
            .style("top", (event.pageY - 15) + "px")
            .html(html);
    }
    
    function hideTooltip() {
        d3.selectAll(".d3-tooltip").remove();
    }
})();
</script>

> 🌿 **Interactive:** Hover over commits to see details and understand the complete branching workflow!

**Branching Workflow:**

```bash
# Create a new branch and switch to it
git checkout -b feature-x

# Work on the feature branch (add, commit)
git add .
git commit -m "Add new feature"

# Switch back to the main branch
git checkout main

# Merge the feature branch into main
git merge feature-x

# Delete the feature branch (optional)
git branch -d feature-x
```

**Conflict Resolution:**
If the same lines are changed in both branches, a merge conflict occurs. Git will mark the conflicted areas in the file. You must manually edit the file to resolve the conflict, then `git add` and `git commit` to finalize the merge.

### 🔀 4.4. Popular Branching Models
<span id="popular-branching-models"></span>

| Model | Description | Best For |
|-------|-------------|----------|
| **GitFlow** | Robust model with dedicated branches for features, releases, and hotfixes | Projects with scheduled releases, complex workflows |
| **GitHub Flow** | Simple model where `main` is always deployable. Feature branches merged via PRs | Continuous deployment, CI/CD pipelines |
| **Trunk-Based Development** | Small, frequent commits to single `main` branch with feature flags | High-frequency releases, advanced teams |

### 🤝 4.5. Collaboration with GitHub Fork & Pull Request Workflow
<span id="github-workflow"></span>

**Key Concepts:**

- **Fork:** Create a personal copy of someone else's repository
- **Pull Request (PR):** Propose changes from your fork or branch back to the original repository

**Complete Workflow:**

1. **Fork** the target repository on GitHub
2. **Clone** your forked repository to your local machine
3. **Create** a new branch for your changes
4. **Make** your changes, commit, and push to your forked repository
5. **Open** a Pull Request from your branch to the original repository's main branch
6. **Participate** in code review and discussion. Once approved, your changes will be merged

```bash
# Step 1: Fork on GitHub (done through web interface)

# Step 2: Clone your fork
git clone https://github.com/YOUR_USERNAME/REPO_NAME.git

# Step 3: Create feature branch
git checkout -b feature/new-login

# Step 4: Make changes and commit
git add .
git commit -m "Add login functionality"
git push origin feature/new-login

# Step 5: Create Pull Request (done through GitHub web interface)
```

---

## 🧠 5. Practical Exercises
<span id="practical-exercises"></span>

This section summarizes the problems and solution approaches from the TA session.

### 🔍 5.1. Sliding Window Technique
<span id="sliding-window"></span>

**Problem:** Given a list of numbers and a window size k, find the maximum value in the sliding window as it moves from left to right.

**Solution Approach:**

1. Iterate through the list to create slices (sub-lists) of size k
2. For each sub-list, calculate the `max()` value
3. Append the result to a new list
4. The number of iterations will be `len(num_list) - k + 1`

```python
def max_kernel(num_list, k):
    result = []
    for i in range(len(num_list) - k + 1):
        kernel = num_list[i : i + k]
        result.append(max(kernel))
    return result

# Example
print(max_kernel([3, 4, 5, 1, -44], 3))  # Output: [5, 5, 5]
```

### 📊 5.2. Two Pointers Technique
<span id="two-pointers"></span>

**Problem:** Count the occurrences of each character in a given string.

**Solution Approach:**

1. Initialize an empty dictionary
2. Iterate through each character of the string
3. Use the character as a key in the dictionary. If the key exists, increment its value. If not, add it to the dictionary with a value of 1
4. It's good practice to convert the string to lowercase first to treat A and a as the same character

```python
def count_characters(word):
    char_stats = {}
    for char in word.lower():
        char_stats[char] = char_stats.get(char, 0) + 1
    return char_stats

# Example
print(count_characters("Baby"))  # Output: {'b': 2, 'a': 1, 'y': 1}
```

### 📝 5.3. Dynamic Programming
<span id="dynamic-programming"></span>

**Problem:** Count the occurrences of each word in a text file.

**Solution Approach:**

1. Read the content of the file
2. Preprocess the text: convert to lowercase, remove punctuation
3. Split the text into a list of words
4. Use the same dictionary-based counting method as in character counting

```python
def count_words_in_file(filepath):
    with open(filepath, 'r') as f:
        text = f.read()

    # Preprocessing
    text = text.lower()
    text = text.replace('.', '').replace(',', '')
    words = text.split()

    word_counts = {}
    for word in words:
        word_counts[word] = word_counts.get(word, 0) + 1
    return word_counts
```

### 🧮 5.4. Levenshtein Distance
<span id="levenshtein-distance"></span>

**Problem:** Calculate the minimum number of single-character edits (insertions, deletions, or substitutions) required to change one word into the other.

**Solution Approach (Dynamic Programming):**

1. Create a 2D matrix (a list of lists) of size `(len(source)+1) x (len(target)+1)`
2. Initialize the first row and column with 0, 1, 2, ... representing the cost of transforming an empty string to a prefix of the target/source
3. Iterate through the matrix. For each cell `D[i, j]`, calculate the cost:
   - If `source[i-1] == target[j-1]`, the cost is `D[i-1, j-1]` (no operation)
   - Otherwise, the cost is `1 + min(D[i-1, j], D[i, j-1], D[i-1, j-1])`, which corresponds to the minimum cost of a deletion, insertion, or substitution
4. The final value at `D[len(source)][len(target)]` is the Levenshtein distance

### 🧮 Interactive Levenshtein Distance Matrix

<div id="d3-levenshtein-grid" style="background-color:#f8f9fa; border-radius: 12px; box-shadow: 0 6px 20px rgba(0,0,0,0.1); padding: 0.5rem; margin: 1.5rem 0; overflow: visible;"></div>

<script>
// 🧮 UPGRADED Interactive Levenshtein Distance Matrix
(function() {
    const container = d3.select("#d3-levenshtein-grid");
    if (container.empty()) return;

    container.selectAll("*").remove();

    const source = "HOLA";
    const target = "HELLO";

    const config = {
        width: 800,
        height: 680,  // Increased height
        margin: { top: 100, right: 100, bottom: 80, left: 100 }, // Increased top margin
        cellSize: 70,
        headerSpacing: 40, // Added explicit header spacing
    };
    
    const colors = {
        text: '#1f2937',
        lightText: '#6b7280',
        headerBg: '#dbeafe',
        headerStroke: '#93c5fd',
        matchBg: '#dcfce7',
        matchStroke: '#86efac',
        substBg: '#fef3c7',
        substStroke: '#fde047',
        insDelBg: '#fee2e2',
        insDelStroke: '#fca5a5',
        finalBg: '#c026d3',
        finalStroke: '#a21caf',
        pathHighlight: 'rgba(192, 38, 211, 0.25)',
        arrow: '#6b7280'
    };

    const svg = container.append("svg")
        .attr("viewBox", `0 0 ${config.width} ${config.height}`)
        .attr("preserveAspectRatio", "xMidYMid meet");

    // Calculate centered positioning for the grid
    const m = source.length;
    const n = target.length;
    const gridWidth = (n + 1) * config.cellSize;
    const gridHeight = (m + 1) * config.cellSize;
    
    // Adjust margins to center the grid
    const adjustedLeft = (config.width - gridWidth) / 2;
    const adjustedTop = config.margin.top;

    const g = svg.append("g")
        .attr("transform", `translate(${adjustedLeft}, ${adjustedTop})`);

    // DP Calculation with path tracking
    const matrix = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
    const path = Array.from({ length: m + 1 }, () => Array(n + 1).fill(null));

    for (let i = 0; i <= m; i++) {
        for (let j = 0; j <= n; j++) {
            if (i === 0) {
                matrix[i][j] = j;
                if (j > 0) path[i][j] = { from: [i, j - 1], op: 'Insertion' };
            } else if (j === 0) {
                matrix[i][j] = i;
                if (i > 0) path[i][j] = { from: [i - 1, j], op: 'Deletion' };
            } else {
                const cost = source[i - 1] === target[j - 1] ? 0 : 1;
                const deletionCost = matrix[i - 1][j] + 1;
                const insertionCost = matrix[i][j - 1] + 1;
                const substitutionCost = matrix[i - 1][j - 1] + cost;
                
                const minCost = Math.min(deletionCost, insertionCost, substitutionCost);
                matrix[i][j] = minCost;

                if (minCost === substitutionCost) {
                    path[i][j] = { from: [i - 1, j - 1], op: cost === 0 ? 'Match' : 'Substitution' };
                } else if (minCost === deletionCost) {
                    path[i][j] = { from: [i - 1, j], op: 'Deletion' };
                } else {
                    path[i][j] = { from: [i, j - 1], op: 'Insertion' };
                }
            }
        }
    }

    // Arrow marker
    svg.append("defs").append("marker")
        .attr("id", "lev-arrowhead")
        .attr("viewBox", "-0 -5 10 10")
        .attr("refX", 5)
        .attr("refY", 0)
        .attr("orient", "auto")
        .attr("markerWidth", 5)
        .attr("markerHeight", 5)
        .append("svg:path")
        .attr("d", "M 0,-5 L 10 ,0 L 0,5")
        .attr("fill", colors.arrow);

    // Title - centered and with more space above the grid
    g.append("text")
        .attr("x", gridWidth / 2)
        .attr("y", -60)  // Increased distance from grid
        .attr("text-anchor", "middle")
        .attr("font-size", "22px")
        .attr("font-weight", "bold")
        .attr("fill", colors.text)
        .text(`Levenshtein Distance: "${source}" → "${target}" = ${matrix[m][n]}`);

    // Column Headers (target string) - more space between headers and grid
    const headerBg = g.append("g");
    
    targetChars = ["", ...target.split("")];
    targetChars.forEach((char, j) => {
        headerBg.append("rect")
            .attr("x", j * config.cellSize - 5)
            .attr("y", -config.headerSpacing + 5)
            .attr("width", config.cellSize - 2)
            .attr("height", 30)
            .attr("fill", "rgba(224, 231, 255, 0.6)")
            .attr("rx", 6);
            
        headerBg.append("text")
            .attr("x", j * config.cellSize + config.cellSize / 2)
            .attr("y", -config.headerSpacing + 25)
            .attr("text-anchor", "middle")
            .attr("dominant-baseline", "middle")
            .attr("fill", colors.text)
            .attr("font-weight", "bold")
            .attr("font-size", "18px")
            .text(char || 'Ø');
    });
    
    // Row Headers (source string) - more space between headers and grid
    sourceChars = ["", ...source.split("")];
    sourceChars.forEach((char, i) => {
        headerBg.append("rect")
            .attr("x", -35)
            .attr("y", i * config.cellSize + 5)
            .attr("width", 30)
            .attr("height", config.cellSize - 12)
            .attr("fill", "rgba(224, 231, 255, 0.6)")
            .attr("rx", 6);
            
        headerBg.append("text")
            .attr("x", -20)
            .attr("y", i * config.cellSize + config.cellSize / 2 + 3)
            .attr("text-anchor", "middle")
            .attr("dominant-baseline", "middle")
            .attr("fill", colors.text)
            .attr("font-weight", "bold")
            .attr("font-size", "18px")
            .text(char || 'Ø');
    });

    // Draw grid
    for (let i = 0; i <= m; i++) {
        for (let j = 0; j <= n; j++) {
            const x = j * config.cellSize;
            const y = i * config.cellSize;

            const cell = g.append("g")
                .attr("class", `cell cell-${i}-${j}`)
                .style("cursor", "pointer")
                .on("mouseover", (event) => {
                    highlightPath(i, j);
                    showCellTooltip(event, i, j);
                })
                .on("mouseout", () => {
                    g.selectAll('.path-highlight').remove();
                    g.selectAll('.cell line').style('opacity', 0);
                    highlightPath(m, n); // Re-highlight the final path
                    hideTooltip();
                });

            let bgColor = colors.substBg;
            let strokeColor = colors.substStroke;
            if (i === 0 || j === 0) {
                bgColor = colors.headerBg;
                strokeColor = colors.headerStroke;
            } else if (path[i][j].op === 'Match') {
                bgColor = colors.matchBg;
                strokeColor = colors.matchStroke;
            } else if (path[i][j].op === 'Substitution') {
                bgColor = colors.substBg;
                strokeColor = colors.substStroke;
            } else {
                bgColor = colors.insDelBg;
                strokeColor = colors.insDelStroke;
            }
            if (i === m && j === n) {
                bgColor = colors.finalBg;
                strokeColor = colors.finalStroke;
            }
            
            cell.append("rect")
                .attr("x", x)
                .attr("y", y)
                .attr("width", config.cellSize - 2)
                .attr("height", config.cellSize - 2)
                .attr("fill", bgColor)
                .attr("stroke", strokeColor)
                .attr("stroke-width", 2)
                .attr("rx", 6);

            cell.append("text")
                .attr("x", x + config.cellSize / 2)
                .attr("y", y + config.cellSize / 2 + 5)
                .attr("text-anchor", "middle")
                .attr("fill", (i === m && j === n) ? "white" : colors.text)
                .attr("font-weight", "bold")
                .attr("font-size", "20px")
                .text(matrix[i][j]);

            // Draw path arrow
            if (path[i][j]) {
                const [fromI, fromJ] = path[i][j].from;
                const startX = fromJ * config.cellSize + config.cellSize / 2;
                const startY = fromI * config.cellSize + config.cellSize / 2;
                const endX = j * config.cellSize + config.cellSize / 2;
                const endY = i * config.cellSize + config.cellSize / 2;
                
                const angle = Math.atan2(endY - startY, endX - startX);
                const finalEndX = endX - (config.cellSize / 2 - 10) * Math.cos(angle);
                const finalEndY = endY - (config.cellSize / 2 - 10) * Math.sin(angle);
                
                cell.append("line")
                    .attr("x1", startX)
                    .attr("y1", startY)
                    .attr("x2", finalEndX)
                    .attr("y2", finalEndY)
                    .attr("stroke", colors.arrow)
                    .attr("stroke-width", 1.5)
                    .attr("marker-end", "url(#lev-arrowhead)")
                    .style("opacity", 0);
            }
        }
    }

    // Legend - centered under the grid
    const legendData = [
        { text: 'Match (Cost 0)', color: colors.matchBg },
        { text: 'Substitution (Cost 1)', color: colors.substBg },
        { text: 'Insertion/Deletion', color: colors.insDelBg },
        { text: 'Optimal Path', color: colors.pathHighlight }
    ];

    const legendGroup = g.append("g");
    const legendYStart = gridHeight + 30;
    
    // Calculate total width needed for legend items
    const legendItemWidth = 150;
    const totalLegendWidth = legendItemWidth * legendData.length;
    const legendStartX = (gridWidth - totalLegendWidth) / 2;
    
    legendData.forEach((item, index) => {
        const legendItem = legendGroup.append('g')
            .attr('transform', `translate(${legendStartX + index * legendItemWidth}, ${legendYStart})`);
        
        legendItem.append('rect')
            .attr('width', 18)
            .attr('height', 18)
            .attr('fill', item.color)
            .attr('rx', 3);
            
        legendItem.append('text')
            .attr('x', 24)
            .attr('y', 14)
            .attr('font-size', '12px')
            .attr('fill', colors.lightText)
            .text(item.text);
    });

    function highlightPath(startI, startJ) {
        g.selectAll('.path-highlight').remove();
        g.selectAll('.cell line').style('opacity', 0);

        let currentI = startI;
        let currentJ = startJ;
        
        while (currentI > 0 || currentJ > 0) {
            const cell = g.select(`.cell-${currentI}-${currentJ}`);
            
            cell.insert("rect", ":first-child")
                .attr("class", "path-highlight")
                .attr("x", currentJ * config.cellSize)
                .attr("y", currentI * config.cellSize)
                .attr("width", config.cellSize - 2)
                .attr("height", config.cellSize - 2)
                .attr("fill", colors.pathHighlight)
                .attr("stroke", colors.finalStroke)
                .attr("stroke-width", 2)
                .attr("rx", 6)
                .style("pointer-events", "none");
            
            cell.select('line').style('opacity', 1);

            if (path[currentI][currentJ]) {
                const [prevI, prevJ] = path[currentI][currentJ].from;
                currentI = prevI;
                currentJ = prevJ;
            } else {
                break;
            }
        }
    }
    
    function showCellTooltip(event, i, j) {
        if (i === 0 && j === 0) {
            showTooltip(event, "<strong>Start</strong><br>Initial empty state");
            return;
        }

        const currentPath = path[i][j];
        const cost = (i > 0 && j > 0) ? (source[i - 1] === target[j - 1] ? 0 : 1) : 1;

        let calcHtml = '';
        if (i > 0 && j > 0) {
            calcHtml = `
            <hr style="margin: 4px 0; border-color: rgba(255,255,255,0.2);">
            <div style="font-family: monospace; font-size: 11px;">
            min {<br>
            &nbsp;&nbsp;Deletion (↑): ${matrix[i-1][j]} + 1 = <strong>${matrix[i-1][j] + 1}</strong><br>
            &nbsp;&nbsp;Insertion (←): ${matrix[i][j-1]} + 1 = <strong>${matrix[i][j-1] + 1}</strong><br>
            &nbsp;&nbsp;Subst/Match (↖): ${matrix[i-1][j-1]} + ${cost} = <strong>${matrix[i-1][j-1] + cost}</strong><br>
            }</div>`;
        } else if (i > 0) {
            calcHtml = `<hr style="margin: 4px 0; border-color: rgba(255,255,255,0.2);">Deletion (↑): ${matrix[i-1][j]} + 1`;
        } else if (j > 0) {
            calcHtml = `<hr style="margin: 4px 0; border-color: rgba(255,255,255,0.2);">Insertion (←): ${matrix[i][j-1]} + 1`;
        }

        const opText = `<strong style="color: #a5b4fc;">Operation: ${currentPath.op}</strong>`;
        const html = `${opText}${calcHtml}`;
        showTooltip(event, html);
    }

    function showTooltip(event, html) {
        const tooltip = d3.select("body").append("div")
            .attr("class", "d3-tooltip")
            .style("left", (event.pageX + 20) + "px")
            .style("top", (event.pageY) + "px");
        
        tooltip.html(html)
            .style("opacity", 0)
            .transition()
            .duration(200)
            .style("opacity", 1);
    }
    
    function hideTooltip() {
        d3.selectAll(".d3-tooltip").transition().duration(200).style("opacity", 0).remove();
    }

    // Initial highlight of the final path
    highlightPath(m, n);
})();
</script>

---

## 🎯 6. Week 2 Learning Assessment Matrix
<span id="assessment-matrix"></span>

### 📊 Interactive Self-Assessment Tool

<div id="d3-assessment-matrix" style="background-color:#f0f4f8; border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.1); padding: 40px; margin: 30px 0; min-height: 600px;"></div>

<script>
// 📊 NEW Self-Assessment Tool
(function() {
    const container = d3.select("#d3-assessment-matrix");
    if (container.empty()) return;
    
    container.selectAll("*").remove();
    
    const width = 700;
    const height = 600;
    const margin = {top: 80, right: 150, bottom: 80, left: 200};
    
    const svg = container.append("svg")
        .attr("viewBox", `0 0 ${width} ${height}`)
        .attr("preserveAspectRatio", "xMidYMid meet");
    
    const g = svg.append("g")
        .attr("transform", `translate(${margin.left}, ${margin.top})`);
    
    const skills = [
        {name: "Python Lists", beginner: 85, intermediate: 65, advanced: 40},
        {name: "List Comprehension", beginner: 75, intermediate: 55, advanced: 30},
        {name: "Database ERD", beginner: 80, intermediate: 60, advanced: 35},
        {name: "SQL Normalization", beginner: 70, intermediate: 50, advanced: 25},
        {name: "Git Commands", beginner: 90, intermediate: 70, advanced: 45},
        {name: "GitHub Workflow", beginner: 85, intermediate: 65, advanced: 40},
        {name: "Problem Solving", beginner: 80, intermediate: 60, advanced: 35}
    ];
    
    const levels = ["beginner", "intermediate", "advanced"];
    const colors = ["#10b981", "#f59e0b", "#ef4444"];
    const levelNames = ["Beginner", "Intermediate", "Advanced"];
    
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;
    
    const xScale = d3.scaleLinear()
        .domain([0, 100])
        .range([0, innerWidth]);
    
    const yScale = d3.scaleBand()
        .domain(skills.map(d => d.name))
        .range([0, innerHeight])
        .padding(0.3);
    
    // Draw bars
    skills.forEach((skill, i) => {
        const skillGroup = g.append("g")
            .attr("transform", `translate(0, ${yScale(skill.name)})`);
        
        levels.forEach((level, j) => {
            const barHeight = yScale.bandwidth() / 3 - 2;
            const y = j * (yScale.bandwidth() / 3);
            
            skillGroup.append("rect")
                .attr("x", 0)
                .attr("y", y)
                .attr("width", xScale(skill[level]))
                .attr("height", barHeight)
                .attr("fill", colors[j])
                .attr("rx", 3)
                .style("cursor", "pointer")
                .on("mouseover", function(event) {
                    d3.select(this).attr("opacity", 0.8);
                    showTooltip(event, `${skill.name} - ${levelNames[j]}: ${skill[level]}%`);
                })
                .on("mouseout", function() {
                    d3.select(this).attr("opacity", 1);
                    hideTooltip();
                });
            
            // Value text
            skillGroup.append("text")
                .attr("x", xScale(skill[level]) + 5)
                .attr("y", y + barHeight/2 + 3)
                .attr("fill", "#374151")
                .attr("font-size", "11px")
                .text(`${skill[level]}%`);
    });
    
        // Skill name
        g.append("text")
            .attr("x", -10)
            .attr("y", yScale(skill.name) + yScale.bandwidth()/2 + 3)
            .attr("text-anchor", "end")
            .attr("fill", "#1f2937")
            .attr("font-size", "13px")
            .attr("font-weight", "bold")
            .text(skill.name);
    });
    
    // X-axis
    const xAxis = d3.axisBottom(xScale).ticks(5);
    g.append("g")
        .attr("transform", `translate(0, ${innerHeight})`)
        .call(xAxis);
    
    // Legend
    const legend = g.append("g")
        .attr("transform", `translate(${innerWidth + 20}, 20)`);
    
    levelNames.forEach((name, i) => {
        const item = legend.append("g")
            .attr("transform", `translate(0, ${i * 25})`);
        
        item.append("rect")
            .attr("width", 18)
            .attr("height", 18)
            .attr("fill", colors[i])
            .attr("rx", 3);
        
        item.append("text")
            .attr("x", 25)
            .attr("y", 13)
            .attr("fill", "#374151")
            .attr("font-size", "12px")
            .text(name);
    });
    
    // Title
    g.append("text")
        .attr("x", innerWidth/2)
        .attr("y", -40)
        .attr("text-anchor", "middle")
        .attr("font-size", "20px")
        .attr("font-weight", "bold")
        .text("Week 2 Skills Assessment");
    
    function showTooltip(event, text) {
        const tooltip = d3.select("body").append("div")
            .attr("class", "d3-tooltip")
            .style("left", (event.pageX + 10) + "px")
            .style("top", (event.pageY - 10) + "px")
            .html(text);
    }
    
    function hideTooltip() {
        d3.selectAll(".d3-tooltip").remove();
    }
})();
</script>

---

## 🎉 Conclusion
<span id="conclusion"></span>

Week 2 of AIO2025 has covered fundamental building blocks of programming and data management:

### 🔑 Key Takeaways

1. **Python Lists Mastery**: From basic operations to advanced comprehensions and 2D matrices
2. **Database Design Excellence**: ERD modeling and normalization principles for robust data architecture  
3. **Advanced Data Structures**: Tuples, sets, and dictionaries for efficient data manipulation
4. **Version Control Proficiency**: Git and GitHub for collaborative development
5. **Problem-Solving Skills**: Practical algorithms from sliding windows to dynamic programming

### 🚀 Next Steps

- Practice implementing the covered algorithms with different datasets
- Design your own database schema using ERD principles
- Create a personal Git repository for your AIO2025 journey
- Combine these skills in real-world projects

### 📚 Additional Resources

- **Python Documentation**: [docs.python.org](https://docs.python.org)
- **Database Design**: "Database Design for Mere Mortals" by Michael Hernandez
- **Git Learning**: [Git Interactive Tutorial](https://learngitbranching.js.org/)
- **Practice Problems**: LeetCode, HackerRank algorithm challenges

> 💪 **Challenge**: Try implementing a complete student management system using all the concepts learned this week - from data structures to database design to version control!

---

*Happy coding, and see you in Week 3 of the AIO2025 journey! 🎯*

