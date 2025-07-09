---
title: "📚 AIO2025 - Week 5 Complete Study Guide: NumPy, NoSQL & Data Science Fundamentals"
published: 2025-07-08
description: "Comprehensive interactive guide covering NumPy arrays, NoSQL databases, cosine similarity, and problem-solving frameworks with practical D3.js visualizations and hands-on exercises"
tags: ["AIO2025", "NumPy", "NoSQL", "MongoDB", "Data Science", "Machine Learning", "Database", "Python", "Mathematics", "Problem Solving"]
category: "Data Science"
draft: false
---

> 🎯 **Learning Objectives:** Master NumPy arrays, understand NoSQL databases, implement cosine similarity, and develop systematic problem-solving skills for data science applications.

This comprehensive guide covers the essential topics from Week 5 of the AIO2025 course with interactive visualizations, practical examples, and hands-on exercises designed to solidify your understanding of fundamental data science concepts.

---

## 🎯 1. NumPy Basics

NumPy (Numerical Python) is a fundamental library for scientific computing in Python. It provides a high-performance multidimensional array object and tools for working with these arrays.

### 💻 1.1. Python Lists vs. NumPy Arrays

While Python lists are versatile, NumPy arrays offer significant advantages in terms of performance, memory, and functionality for numerical operations.

| Feature | Python List | NumPy Array | Performance Impact |
| :--- | :--- | :--- | :--- |
| **Data Type** | Heterogeneous (mixed types) | Homogeneous (same type) | 🔥 Type checking overhead eliminated |
| **Memory** | Pointers to objects (overhead) | Contiguous memory block | 🚀 50-100x faster access |
| **Performance** | Slower (type checking) | Optimized C code | ⚡ 10-100x faster operations |
| **Functionality**| Basic operations | Vectorized operations | 📊 Broadcasting & advanced math |
| **Memory Usage** | Higher (pointer overhead) | Lower (direct storage) | 💾 2-10x less memory |

#### 🔬 Interactive Memory Layout Comparison

<div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 75%, #4facfe 100%); padding: 20px; border-radius: 12px; margin: 30px 0; box-shadow: 0 8px 32px rgba(0,0,0,0.1); clear: both;">
<div id="memory-layout-container" style="background: rgba(255,255,255,0.95); border-radius: 8px; padding: 15px; min-height: 490px;"></div>
</div>

<script is:inline>
// Load D3.js if not already loaded
if (typeof d3 === 'undefined') {
    const script = document.createElement('script');
    script.src = 'https://d3js.org/d3.v7.min.js';
    script.onload = function() {
        initMemoryLayoutViz();
    };
    document.head.appendChild(script);
} else {
    initMemoryLayoutViz();
}

function initMemoryLayoutViz() {
    const container = d3.select("#memory-layout-container");
    const width = 800;
    const height = 470;
    
    const svg = container.append("svg")
        .attr("viewBox", `0 0 ${width} ${height}`)
        .style("width", "100%")
        .style("height", "auto");
    
    // Add title
    svg.append("text")
        .attr("x", width/2)
        .attr("y", 25)
        .attr("text-anchor", "middle")
        .style("font-size", "18px")
        .style("font-weight", "bold")
        .style("fill", "#2d3436")
        .text("Memory Layout: Python List vs NumPy Array");
    
    // Python List Side
    const listGroup = svg.append("g").attr("transform", "translate(50, 60)");
    
    listGroup.append("text")
        .attr("x", 150)
        .attr("y", 15)
        .attr("text-anchor", "middle")
        .style("font-size", "16px")
        .style("font-weight", "bold")
        .style("fill", "#e17055")
        .text("Python List (Scattered Memory)");
    
    // List object
    listGroup.append("rect")
        .attr("x", 50)
        .attr("y", 30)
        .attr("width", 200)
        .attr("height", 60)
        .style("fill", "#fab1a0")
        .style("stroke", "#e17055")
        .style("stroke-width", 2)
        .style("rx", 8);
    
    listGroup.append("text")
        .attr("x", 150)
        .attr("y", 50)
        .style("font-size", "12px")
        .style("text-anchor", "middle")
        .text("Length: 5");
    
    listGroup.append("text")
        .attr("x", 150)
        .attr("y", 70)
        .style("font-size", "12px")
        .style("text-anchor", "middle")
        .text("Items: [pointers]");
    
    // Memory addresses
    const addresses = [0x25012, 0x25009, 0x25034, 0x25001, 0x25087];
    const values = [1, 2, 3, 4, 5];
    const memoryPositions = [
        {x: 30, y: 150}, {x: 80, y: 200}, {x: 200, y: 180},
        {x: 250, y: 220}, {x: 120, y: 240}
    ];
    
    addresses.forEach((addr, i) => {
        // Pointer lines
        listGroup.append("line")
            .attr("x1", 150)
            .attr("y1", 90)
            .attr("x2", memoryPositions[i].x + 25)
            .attr("y2", memoryPositions[i].y + 15)
            .style("stroke", "#e17055")
            .style("stroke-width", 2)
            .style("stroke-dasharray", "5,5");
        
        // Memory blocks
        const memBlock = listGroup.append("g")
            .attr("transform", `translate(${memoryPositions[i].x}, ${memoryPositions[i].y})`);
        
        memBlock.append("rect")
            .attr("width", 50)
            .attr("height", 30)
            .style("fill", "#fd79a8")
            .style("stroke", "#e84393")
            .style("stroke-width", 1)
            .style("rx", 4);
        
        memBlock.append("text")
            .attr("x", 25)
            .attr("y", 20)
            .attr("text-anchor", "middle")
            .style("font-size", "12px")
            .style("fill", "white")
            .text(values[i]);
    });
    
    // NumPy Array Side
    const arrayGroup = svg.append("g").attr("transform", "translate(450, 60)");
    
    arrayGroup.append("text")
        .attr("x", 150)
        .attr("y", 15)
        .attr("text-anchor", "middle")
        .style("font-size", "16px")
        .style("font-weight", "bold")
        .style("fill", "#00b894")
        .text("NumPy Array (Contiguous Memory)");
    
    // Array object
    arrayGroup.append("rect")
        .attr("x", 50)
        .attr("y", 30)
        .attr("width", 200)
        .attr("height", 80)
        .style("fill", "#81ecec")
        .style("stroke", "#00b894")
        .style("stroke-width", 2)
        .style("rx", 8);
    
    arrayGroup.append("text")
        .attr("x", 150)
        .attr("y", 50)
        .style("font-size", "12px")
        .style("text-anchor", "middle")
        .text("Length: 5");
    
    arrayGroup.append("text")
        .attr("x", 150)
        .attr("y", 70)
        .style("font-size", "12px")
        .style("text-anchor", "middle")
        .text("Type: int32");
    
    arrayGroup.append("text")
        .attr("x", 150)
        .attr("y", 90)
        .style("font-size", "12px")
        .style("text-anchor", "middle")
        .text("Shape: (5,)");
    
    // Single pointer to contiguous block
    arrayGroup.append("line")
        .attr("x1", 150)
        .attr("y1", 110)
        .attr("x2", 150)
        .attr("y2", 140)
        .style("stroke", "#00b894")
        .style("stroke-width", 3)
        .attr("marker-end", "url(#arrowhead)");
    
    // Contiguous memory block
    values.forEach((value, i) => {
        const block = arrayGroup.append("g")
            .attr("transform", `translate(${80 + i * 40}, 150)`);
        
        block.append("rect")
            .attr("width", 35)
            .attr("height", 40)
            .style("fill", "#00cec9")
            .style("stroke", "#00b894")
            .style("stroke-width", 2)
            .style("rx", 4);
        
        block.append("text")
            .attr("x", 17.5)
            .attr("y", 25)
            .attr("text-anchor", "middle")
            .style("font-size", "14px")
            .style("fill", "white")
            .style("font-weight", "bold")
            .text(value);
    });
    
    // Arrow marker definition
    svg.append("defs").append("marker")
        .attr("id", "arrowhead")
        .attr("markerWidth", 10)
        .attr("markerHeight", 7)
        .attr("refX", 9)
        .attr("refY", 3.5)
        .attr("orient", "auto")
        .append("polygon")
        .attr("points", "0 0, 10 3.5, 0 7")
        .style("fill", "#00b894");
    
    // Performance comparison - moved down to avoid overlap with memory blocks
    const perfGroup = svg.append("g").attr("transform", "translate(50, 350)");
    
    perfGroup.append("text")
        .attr("x", 350)
        .attr("y", 15)
        .attr("text-anchor", "middle")
        .style("font-size", "16px")
        .style("font-weight", "bold")
        .style("fill", "#2d3436")
        .text("Performance Impact");
    
    const metrics = [
        {label: "Access Speed", list: 1, numpy: 50, unit: "x faster"},
        {label: "Memory Usage", list: 10, numpy: 3, unit: "MB"},
        {label: "Cache Efficiency", list: 20, numpy: 95, unit: "%"}
    ];
    
    metrics.forEach((metric, i) => {
        const y = 40 + i * 25;
        
        perfGroup.append("text")
            .attr("x", 0)
            .attr("y", y)
            .style("font-size", "12px")
            .style("fill", "#636e72")
            .text(metric.label + ":");
        
        perfGroup.append("text")
            .attr("x", 120)
            .attr("y", y)
            .style("font-size", "12px")
            .style("fill", "#e17055")
            .text(`List: ${metric.list}${metric.unit}`);
        
        perfGroup.append("text")
            .attr("x", 250)
            .attr("y", y)
            .style("font-size", "12px")
            .style("fill", "#00b894")
            .text(`NumPy: ${metric.numpy}${metric.unit}`);
    });
    
    // Add hover tooltips
    svg.selectAll("rect")
        .on("mouseover", function(event, d) {
            d3.select(this)
                .style("opacity", 0.8)
                .style("cursor", "pointer");
        })
        .on("mouseout", function(event, d) {
            d3.select(this)
                .style("opacity", 1);
        });
}
</script>

<div style="clear: both;"></div>

### 🔧 1.2. Array Creation

NumPy provides multiple efficient ways to create arrays, each optimized for different use cases.

#### 📋 Creation Methods Comparison

| Method | Use Case | Performance | Memory Efficiency |
|:--- |:--- |:--- |:--- |
| `np.array()` | Convert existing data | ⭐⭐⭐ | ⭐⭐⭐ |
| `np.zeros()` | Initialize with zeros | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| `np.ones()` | Initialize with ones | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| `np.arange()` | Sequential numbers | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| `np.linspace()` | Evenly spaced values | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ |

**From a Python list:**
```python
import numpy as np

# Create a list
my_list = [2, 0, 2, 5, 7, 1]

# Convert the list to a NumPy array
my_array = np.array(my_list)
print(my_array)
# Output: [2 0 2 5 7 1]
print(f"Type: {my_array.dtype}, Shape: {my_array.shape}")
# Output: Type: int64, Shape: (6,)
```

**Using built-in functions:**

```python
# Create an array of 5 floats, initialized with zeros
zeros_arr = np.zeros(5)
print(zeros_arr)
# Output: [0. 0. 0. 0. 0.]

# Create an array of shape (2, 3) filled with ones
ones_arr = np.ones((2, 3))
print(ones_arr)
# Output:
# [[1. 1. 1.]
#  [1. 1. 1.]]

# Create an array with a range of elements
range_arr = np.arange(0, 10, 2) # (start, stop, step)
print(range_arr)
# Output: [0 2 4 6 8]

# Create evenly spaced values
linspace_arr = np.linspace(0, 1, 5)  # 5 values from 0 to 1
print(linspace_arr)
# Output: [0.   0.25 0.5  0.75 1.  ]
```

> 💡 **Pro Tip:** Use `np.zeros()` or `np.ones()` when you need to initialize large arrays efficiently. They're much faster than creating Python lists first!

### 🔍 1.3. Indexing and Slicing

Indexing and slicing work similarly to Python lists but can be extended to multiple dimensions with powerful capabilities.

#### 📝 Basic Operations

```python
a_data = np.array([4, 5, 6, 7, 8, 9])

# Accessing elements
print(a_data[2])    # Output: 6
print(a_data[-1])   # Output: 9

# Slicing: array[start:stop:step]
print(a_data[:3])   # Output: [4 5 6] (first 3 elements)
print(a_data[3:])   # Output: [7 8 9] (from index 3 to end)
print(a_data[::2])  # Output: [4 6 8] (every other element)
```

#### ⚠️ Critical Concept: Views vs Copies

> **Important Note:** Unlike Python lists, slices of NumPy arrays are **views** into the original array, not copies. Modifying a slice will modify the original array.

```python
x = np.array([0., 0.25, 0.5, 0.75, 1.])
y = x[1:4] # Create a slice (view)
y[-1] = 1000.0 # Modify the slice

print(y) # Output: [   0.25    0.5  1000.  ]
print(x) # Output: [   0.     0.25    0.5  1000.     1.  ] -> Original is changed!

# To create a copy, use arr.copy()
z = x[1:4].copy()  # This creates an independent copy
z[0] = 999.0
print(x)  # Original array remains unchanged
```

#### 🎯 Advanced Indexing Examples

```python
# Boolean indexing
arr = np.array([1, 2, 3, 4, 5, 6])
mask = arr > 3
print(arr[mask])  # Output: [4 5 6]

# Fancy indexing with arrays
indices = np.array([0, 2, 4])
print(arr[indices])  # Output: [1 3 5]

# Conditional replacement
arr[arr > 4] = 0
print(arr)  # Output: [1 2 3 4 0 0]
```

| Operation | Syntax | Result | Memory Impact |
|:--- |:--- |:--- |:--- |
| **Single Element** | `arr[2]` | `6` | No extra memory |
| **Slice (View)** | `arr[1:4]` | `[5 6 7]` | Shared memory ⚠️ |
| **Slice (Copy)** | `arr[1:4].copy()` | `[5 6 7]` | New memory allocation |
| **Boolean Mask** | `arr[arr > 5]` | `[6 7 8 9]` | New array created |
| **Fancy Index** | `arr[[0,2,4]]` | `[4 6 8]` | New array created |

### ⚡ 1.4. Basic Operations & Vectorization

NumPy allows for element-wise operations, which is called vectorization. This is much faster than looping through elements as you would with Python lists.

#### 🔥 Vectorization Performance

```python
import numpy as np
import time

# Compare performance: Loop vs Vectorization
size = 1000000
a = np.random.random(size)
b = np.random.random(size)

# Python loop approach
start = time.time()
result_loop = []
for i in range(size):
    result_loop.append(a[i] + b[i])
loop_time = time.time() - start

# NumPy vectorization
start = time.time()
result_vectorized = a + b
vectorized_time = time.time() - start

print(f"Loop time: {loop_time:.4f}s")
print(f"Vectorized time: {vectorized_time:.4f}s")
print(f"Speedup: {loop_time/vectorized_time:.1f}x faster!")
```

#### 📊 Common Vectorized Operations

```python
arr1 = np.array([1, 2, 3])
arr2 = np.array([4, 5, 6])

# Element-wise addition
print(arr1 + arr2)     # Output: [5 7 9]

# Element-wise multiplication
print(arr1 * 3)        # Output: [3 6 9]
print(arr1 * arr2)     # Output: [ 4 10 18]

# More operations
print(arr1 ** 2)       # Output: [1 4 9] (power)
print(np.sqrt(arr1))   # Output: [1.    1.414 1.732] (square root)
print(arr1 > 2)        # Output: [False False True] (comparison)
```

#### 🧮 Mathematical Functions

| Function | Description | Example Input | Example Output |
|:--- |:--- |:--- |:--- |
| `np.sum()` | Sum of elements | `[1, 2, 3]` | `6` |
| `np.mean()` | Average value | `[1, 2, 3]` | `2.0` |
| `np.std()` | Standard deviation | `[1, 2, 3]` | `0.816` |
| `np.min()` | Minimum value | `[1, 2, 3]` | `1` |
| `np.max()` | Maximum value | `[1, 2, 3]` | `3` |
| `np.argmin()` | Index of minimum | `[3, 1, 2]` | `1` |
| `np.argmax()` | Index of maximum | `[3, 1, 2]` | `0` |

> 🚀 **Performance Tip:** Always use NumPy's vectorized operations instead of Python loops when working with arrays. It can be 10-100x faster!

---

## 🎯 2. NumPy Programming: 2D & 3D Data

### 📐 2.1. Multi-dimensional Arrays

NumPy arrays can have multiple dimensions, making them perfect for representing data like matrices (2D) and RGB images (3D).

#### 🔢 Dimensional Concepts

- **1D Array (Vector):** `[1, 2, 3]` → shape: `(3,)`
- **2D Array (Matrix):** `[[1, 2], [3, 4], [5, 6]]` → shape: `(3, 2)` (3 rows, 2 columns)  
- **3D Array (Tensor):** Often used for a collection of matrices, like an RGB image → shape: `(height, width, channels)`

#### 🎨 Interactive Multi-dimensional Array Visualization

<div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 75%, #4facfe 100%); padding: 20px; border-radius: 12px; margin: 40px 0 30px 0; box-shadow: 0 8px 32px rgba(0,0,0,0.1); clear: both;">
<div id="multidim-arrays-container" style="background: rgba(255,255,255,0.95); border-radius: 8px; padding: 15px; min-height: 620px;"></div>
</div>

<script is:inline>
if (typeof d3 === 'undefined') {
    const script = document.createElement('script');
    script.src = 'https://d3js.org/d3.v7.min.js';
    script.onload = function() {
        initMultidimArraysViz();
    };
    document.head.appendChild(script);
} else {
    initMultidimArraysViz();
}

function initMultidimArraysViz() {
    const container = d3.select("#multidim-arrays-container");
    const width = 900;
    const height = 600;
    
    const svg = container.append("svg")
        .attr("viewBox", `0 0 ${width} ${height}`)
        .style("width", "100%")
        .style("height", "auto");
    
    // Add title
    svg.append("text")
        .attr("x", width/2)
        .attr("y", 25)
        .attr("text-anchor", "middle")
        .style("font-size", "20px")
        .style("font-weight", "bold")
        .style("fill", "#2d3436")
        .text("Multi-dimensional Arrays: 1D, 2D, and 3D");
    
    // 1D Array
    const array1D = svg.append("g").attr("transform", "translate(50, 60)");
    
    array1D.append("text")
        .attr("x", 150)
        .attr("y", 20)
        .attr("text-anchor", "middle")
        .style("font-size", "16px")
        .style("font-weight", "bold")
        .style("fill", "#6c5ce7")
        .text("1D Array (Vector)");
    
    array1D.append("text")
        .attr("x", 150)
        .attr("y", 40)
        .attr("text-anchor", "middle")
        .style("font-size", "14px")
        .style("fill", "#636e72")
        .text("Shape: (5,)");
    
    const values1D = [1, 2, 3, 4, 5];
    values1D.forEach((val, i) => {
        const block = array1D.append("g")
            .attr("transform", `translate(${50 + i * 40}, 60)`)
            .style("cursor", "pointer");
        
        block.append("rect")
            .attr("width", 35)
            .attr("height", 35)
            .style("fill", "#a29bfe")
            .style("stroke", "#6c5ce7")
            .style("stroke-width", 2)
            .style("rx", 4);
        
        block.append("text")
            .attr("x", 17.5)
            .attr("y", 23)
            .attr("text-anchor", "middle")
            .style("font-size", "14px")
            .style("fill", "white")
            .style("font-weight", "bold")
            .text(val);
        
        // Add hover effect
        block.on("mouseover", function() {
            d3.select(this).select("rect")
                .style("fill", "#6c5ce7")
                .style("transform", "scale(1.1)");
            
            // Show tooltip
            const tooltip = svg.append("g")
                .attr("id", "tooltip-1d")
                .attr("transform", `translate(${100 + i * 40}, 40)`);
            
            tooltip.append("rect")
                .attr("width", 80)
                .attr("height", 30)
                .style("fill", "rgba(0,0,0,0.8)")
                .style("rx", 4);
            
            tooltip.append("text")
                .attr("x", 40)
                .attr("y", 20)
                .attr("text-anchor", "middle")
                .style("font-size", "12px")
                .style("fill", "white")
                .text(`Index: [${i}]`);
        })
        .on("mouseout", function() {
            d3.select(this).select("rect")
                .style("fill", "#a29bfe")
                .style("transform", "scale(1)");
            svg.select("#tooltip-1d").remove();
        });
    });
    
    // Axis label
    array1D.append("text")
        .attr("x", 150)
        .attr("y", 120)
        .attr("text-anchor", "middle")
        .style("font-size", "12px")
        .style("fill", "#6c5ce7")
        .text("Axis 0");
    
    // 2D Array
    const array2D = svg.append("g").attr("transform", "translate(450, 60)");
    
    array2D.append("text")
        .attr("x", 120)
        .attr("y", 20)
        .attr("text-anchor", "middle")
        .style("font-size", "16px")
        .style("font-weight", "bold")
        .style("fill", "#00b894")
        .text("2D Array (Matrix)");
    
    array2D.append("text")
        .attr("x", 120)
        .attr("y", 40)
        .attr("text-anchor", "middle")
        .style("font-size", "14px")
        .style("fill", "#636e72")
        .text("Shape: (3, 4)");
    
    const values2D = [
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12]
    ];
    
    values2D.forEach((row, i) => {
        row.forEach((val, j) => {
            const block = array2D.append("g")
                .attr("transform", `translate(${40 + j * 35}, ${60 + i * 35})`)
                .style("cursor", "pointer");
            
            block.append("rect")
                .attr("width", 30)
                .attr("height", 30)
                .style("fill", "#00cec9")
                .style("stroke", "#00b894")
                .style("stroke-width", 2)
                .style("rx", 3);
            
            block.append("text")
                .attr("x", 15)
                .attr("y", 20)
                .attr("text-anchor", "middle")
                .style("font-size", "12px")
                .style("fill", "white")
                .style("font-weight", "bold")
                .text(val);
            
            // Add hover effect
            block.on("mouseover", function() {
                d3.select(this).select("rect")
                    .style("fill", "#00b894")
                    .style("transform", "scale(1.1)");
                
                // Show tooltip
                const tooltip = svg.append("g")
                    .attr("id", "tooltip-2d")
                    .attr("transform", `translate(${490 + j * 35}, ${40 + i * 35})`);
                
                tooltip.append("rect")
                    .attr("width", 80)
                    .attr("height", 30)
                    .style("fill", "rgba(0,0,0,0.8)")
                    .style("rx", 4);
                
                tooltip.append("text")
                    .attr("x", 40)
                    .attr("y", 20)
                    .attr("text-anchor", "middle")
                    .style("font-size", "12px")
                    .style("fill", "white")
                    .text(`[${i}, ${j}]`);
            })
            .on("mouseout", function() {
                d3.select(this).select("rect")
                    .style("fill", "#00cec9")
                    .style("transform", "scale(1)");
                svg.select("#tooltip-2d").remove();
            });
        });
    });
    
    // Axis labels for 2D
    array2D.append("text")
        .attr("x", 20)
        .attr("y", 110)
        .attr("text-anchor", "middle")
        .style("font-size", "12px")
        .style("fill", "#00b894")
        .text("Axis 0")
        .attr("transform", "rotate(-90, 20, 110)");
    
    array2D.append("text")
        .attr("x", 120)
        .attr("y", 200)
        .attr("text-anchor", "middle")
        .style("font-size", "12px")
        .style("fill", "#00b894")
        .text("Axis 1");
    
    // 3D Array
    const array3D = svg.append("g").attr("transform", "translate(200, 280)");
    
    array3D.append("text")
        .attr("x", 250)
        .attr("y", 20)
        .attr("text-anchor", "middle")
        .style("font-size", "16px")
        .style("font-weight", "bold")
        .style("fill", "#e17055")
        .text("3D Array (Tensor)");
    
    array3D.append("text")
        .attr("x", 250)
        .attr("y", 40)
        .attr("text-anchor", "middle")
        .style("font-size", "14px")
        .style("fill", "#636e72")
        .text("Shape: (2, 3, 4) - RGB Image Example");
    
    // Create 3D visualization with depth
    const depths = [0, 1];
    const colors3D = ["#fd79a8", "#fdcb6e"];
    
    depths.forEach((depth, d) => {
        const depthGroup = array3D.append("g")
            .attr("transform", `translate(${d * 20}, ${60 - d * 20})`);
        
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 4; j++) {
                const val = d * 12 + i * 4 + j + 1;
                const block = depthGroup.append("g")
                    .attr("transform", `translate(${100 + j * 30}, ${i * 30})`)
                    .style("cursor", "pointer");
                
                block.append("rect")
                    .attr("width", 25)
                    .attr("height", 25)
                    .style("fill", colors3D[d])
                    .style("stroke", "#e17055")
                    .style("stroke-width", 1.5)
                    .style("rx", 3)
                    .style("opacity", d === 0 ? 1 : 0.7);
                
                block.append("text")
                    .attr("x", 12.5)
                    .attr("y", 17)
                    .attr("text-anchor", "middle")
                    .style("font-size", "10px")
                    .style("fill", "white")
                    .style("font-weight", "bold")
                    .text(val);
                
                // Add hover effect
                block.on("mouseover", function() {
                    d3.select(this).select("rect")
                        .style("stroke-width", 3)
                        .style("transform", "scale(1.1)");
                    
                    // Show tooltip
                    const tooltip = svg.append("g")
                        .attr("id", "tooltip-3d")
                        .attr("transform", `translate(${320 + j * 30 + d * 20}, ${300 + i * 30 - d * 20})`);
                    
                    tooltip.append("rect")
                        .attr("width", 90)
                        .attr("height", 30)
                        .style("fill", "rgba(0,0,0,0.8)")
                        .style("rx", 4);
                    
                    tooltip.append("text")
                        .attr("x", 45)
                        .attr("y", 20)
                        .attr("text-anchor", "middle")
                        .style("font-size", "12px")
                        .style("fill", "white")
                        .text(`[${d}, ${i}, ${j}]`);
                })
                .on("mouseout", function() {
                    d3.select(this).select("rect")
                        .style("stroke-width", 1.5)
                        .style("transform", "scale(1)");
                    svg.select("#tooltip-3d").remove();
                });
            }
        }
        
        // Depth label
        depthGroup.append("text")
            .attr("x", 50)
            .attr("y", 50)
            .attr("text-anchor", "middle")
            .style("font-size", "12px")
            .style("fill", "#e17055")
            .style("font-weight", "bold")
            .text(`Depth ${d}`);
    });
    
    // Axis labels for 3D
    array3D.append("text")
        .attr("x", 50)
        .attr("y", 150)
        .attr("text-anchor", "middle")
        .style("font-size", "12px")
        .style("fill", "#e17055")
        .text("Axis 0 (Depth)");
    
    array3D.append("text")
        .attr("x", 80)
        .attr("y", 200)
        .attr("text-anchor", "middle")
        .style("font-size", "12px")
        .style("fill", "#e17055")
        .text("Axis 1 (Rows)")
        .attr("transform", "rotate(-90, 80, 200)");
    
    array3D.append("text")
        .attr("x", 250)
        .attr("y", 230)
        .attr("text-anchor", "middle")
        .style("font-size", "12px")
        .style("fill", "#e17055")
        .text("Axis 2 (Columns)");
    
    // Add interactive legend - moved down to avoid overlap
    const legend = svg.append("g").attr("transform", "translate(50, 540)");
    
    legend.append("text")
        .attr("x", 0)
        .attr("y", 15)
        .style("font-size", "14px")
        .style("font-weight", "bold")
        .style("fill", "#2d3436")
        .text("💡 Hover over any element to see its index coordinates!");
    
    const examples = [
        {text: "1D: arr[2] = 3", x: 0, color: "#6c5ce7"},
        {text: "2D: arr[1, 2] = 7", x: 150, color: "#00b894"},
        {text: "3D: arr[0, 1, 2] = 7", x: 300, color: "#e17055"}
    ];
    
    examples.forEach(ex => {
        legend.append("text")
            .attr("x", ex.x)
            .attr("y", 40)
            .style("font-size", "12px")
            .style("fill", ex.color)
            .style("font-weight", "bold")
            .text(ex.text);
    });
}
</script>

<div style="clear: both;"></div>

### 🔧 2.2. Common Functions for Multi-dimensional Arrays

**reshape(new_shape):** Changes the shape of an array without changing its data. The total number of elements must remain the same.

```python

data = np.arange(6) # [0 1 2 3 4 5]
data_reshaped = data.reshape((2, 3))
print(data_reshaped)
# [[0 1 2]
#  [3 4 5]]
```

**flatten():** Collapses a multi-dimensional array into a single 1D array.

```python
data_2d = np.array([[1, 2], [3, 4]])
flat_data = data_2d.flatten()
print(flat_data) # Output: [1 2 3 4]
```

**sum(axis=...), max(axis=...), min(axis=...):** Perform aggregation along a specified axis.

- **axis=0:** operates along the columns.
- **axis=1:** operates along the rows.

```python
data = np.array([[1, 2], [3, 4]])
print(np.sum(data, axis=0)) # Output: [4 6] (sum of columns)
print(np.sum(data, axis=1)) # Output: [3 7] (sum of rows)
```

### 📡 2.3. Broadcasting

Broadcasting describes how NumPy treats arrays with different shapes during arithmetic operations. The smaller array is "broadcast" across the larger array so that they have compatible shapes.

#### 📐 Broadcasting Rules

1. **Dimension Alignment:** If arrays don't have the same number of dimensions, prepend the shape of the lower-dimensional array with 1s
2. **Size Compatibility:** For each dimension, sizes must be equal, or one of them is 1
3. **Output Shape:** The size of each dimension in the output is the maximum of the input arrays

#### 🎭 Interactive Broadcasting Demonstration

<div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 75%, #4facfe 100%); padding: 20px; border-radius: 12px; margin: 20px 0; box-shadow: 0 8px 32px rgba(0,0,0,0.1);">
<div id="broadcasting-container" style="background: rgba(255,255,255,0.95); border-radius: 8px; padding: 15px;"></div>
</div>

<script is:inline>
if (typeof d3 === 'undefined') {
    const script = document.createElement('script');
    script.src = 'https://d3js.org/d3.v7.min.js';
    script.onload = function() {
        initBroadcastingViz();
    };
    document.head.appendChild(script);
} else {
    initBroadcastingViz();
}

function initBroadcastingViz() {
    const container = d3.select("#broadcasting-container");
    const width = 900;
    const height = 500;
    
    const svg = container.append("svg")
        .attr("viewBox", `0 0 ${width} ${height}`)
        .style("width", "100%")
        .style("height", "auto");
    
    // Add title
    svg.append("text")
        .attr("x", width/2)
        .attr("y", 25)
        .attr("text-anchor", "middle")
        .style("font-size", "20px")
        .style("font-weight", "bold")
        .style("fill", "#2d3436")
        .text("NumPy Broadcasting: Matrix + Vector");
    
    // Step 1: Original Arrays
    const step1 = svg.append("g").attr("transform", "translate(50, 60)");
    
    step1.append("text")
        .attr("x", 100)
        .attr("y", 15)
        .attr("text-anchor", "middle")
        .style("font-size", "16px")
        .style("font-weight", "bold")
        .style("fill", "#2d3436")
        .text("Step 1: Original Arrays");
    
    // Matrix A (2x3)
    const matrixA = [
        [1, 2, 3],
        [4, 5, 6]
    ];
    
    step1.append("text")
        .attr("x", 50)
        .attr("y", 40)
        .style("font-size", "14px")
        .style("font-weight", "bold")
        .style("fill", "#00b894")
        .text("Matrix A (2, 3)");
    
    matrixA.forEach((row, i) => {
        row.forEach((val, j) => {
            const block = step1.append("g")
                .attr("transform", `translate(${30 + j * 40}, ${50 + i * 40})`)
                .style("cursor", "pointer");
            
            block.append("rect")
                .attr("width", 35)
                .attr("height", 35)
                .style("fill", "#00cec9")
                .style("stroke", "#00b894")
                .style("stroke-width", 2)
                .style("rx", 4);
            
            block.append("text")
                .attr("x", 17.5)
                .attr("y", 23)
                .attr("text-anchor", "middle")
                .style("font-size", "14px")
                .style("fill", "white")
                .style("font-weight", "bold")
                .text(val);
            
            // Hover effect
            block.on("mouseover", function() {
                d3.select(this).select("rect").style("fill", "#00b894");
            }).on("mouseout", function() {
                d3.select(this).select("rect").style("fill", "#00cec9");
            });
        });
    });
    
    // Vector B (3,)
    const vectorB = [10, 20, 30];
    
    step1.append("text")
        .attr("x", 50)
        .attr("y", 160)
        .style("font-size", "14px")
        .style("font-weight", "bold")
        .style("fill", "#e17055")
        .text("Vector B (3,)");
    
    vectorB.forEach((val, j) => {
        const block = step1.append("g")
            .attr("transform", `translate(${30 + j * 40}, 170)`)
            .style("cursor", "pointer");
        
        block.append("rect")
            .attr("width", 35)
            .attr("height", 35)
            .style("fill", "#fd79a8")
            .style("stroke", "#e17055")
            .style("stroke-width", 2)
            .style("rx", 4);
        
        block.append("text")
            .attr("x", 17.5)
            .attr("y", 23)
            .attr("text-anchor", "middle")
            .style("font-size", "14px")
            .style("fill", "white")
            .style("font-weight", "bold")
            .text(val);
        
        // Hover effect
        block.on("mouseover", function() {
            d3.select(this).select("rect").style("fill", "#e17055");
        }).on("mouseout", function() {
            d3.select(this).select("rect").style("fill", "#fd79a8");
        });
    });
    
    // Step 2: Broadcasting
    const step2 = svg.append("g").attr("transform", "translate(350, 60)");
    
    step2.append("text")
        .attr("x", 100)
        .attr("y", 15)
        .attr("text-anchor", "middle")
        .style("font-size", "16px")
        .style("font-weight", "bold")
        .style("fill", "#2d3436")
        .text("Step 2: Broadcasting");
    
    step2.append("text")
        .attr("x", 100)
        .attr("y", 40)
        .attr("text-anchor", "middle")
        .style("font-size", "12px")
        .style("fill", "#636e72")
        .text("Vector B stretched to (2, 3)");
    
    // Show stretched vector
    [0, 1].forEach(i => {
        vectorB.forEach((val, j) => {
            const block = step2.append("g")
                .attr("transform", `translate(${30 + j * 40}, ${50 + i * 40})`)
                .style("cursor", "pointer");
            
            block.append("rect")
                .attr("width", 35)
                .attr("height", 35)
                .style("fill", "#fd79a8")
                .style("stroke", "#e17055")
                .style("stroke-width", 2)
                .style("stroke-dasharray", i === 1 ? "5,5" : "none")
                .style("rx", 4)
                .style("opacity", i === 1 ? 0.7 : 1);
            
            block.append("text")
                .attr("x", 17.5)
                .attr("y", 23)
                .attr("text-anchor", "middle")
                .style("font-size", "14px")
                .style("fill", "white")
                .style("font-weight", "bold")
                .text(val);
        });
    });
    
    // Add broadcasting arrow
    step2.append("path")
        .attr("d", "M 70 150 Q 100 140 130 150")
        .style("stroke", "#e17055")
        .style("stroke-width", 3)
        .style("fill", "none")
        .attr("marker-end", "url(#broadcast-arrow)");
    
    step2.append("text")
        .attr("x", 100)
        .attr("y", 135)
        .attr("text-anchor", "middle")
        .style("font-size", "12px")
        .style("fill", "#e17055")
        .style("font-weight", "bold")
        .text("Broadcast");
    
    // Step 3: Addition
    const step3 = svg.append("g").attr("transform", "translate(650, 60)");
    
    step3.append("text")
        .attr("x", 100)
        .attr("y", 15)
        .attr("text-anchor", "middle")
        .style("font-size", "16px")
        .style("font-weight", "bold")
        .style("fill", "#2d3436")
        .text("Step 3: Element-wise Addition");
    
    step3.append("text")
        .attr("x", 100)
        .attr("y", 40)
        .attr("text-anchor", "middle")
        .style("font-size", "12px")
        .style("fill", "#636e72")
        .text("Result: A + B");
    
    // Calculate and show result
    const result = matrixA.map((row, i) => 
        row.map((val, j) => val + vectorB[j])
    );
    
    result.forEach((row, i) => {
        row.forEach((val, j) => {
            const block = step3.append("g")
                .attr("transform", `translate(${30 + j * 40}, ${50 + i * 40})`)
                .style("cursor", "pointer");
            
            block.append("rect")
                .attr("width", 35)
                .attr("height", 35)
                .style("fill", "#6c5ce7")
                .style("stroke", "#a29bfe")
                .style("stroke-width", 2)
                .style("rx", 4);
            
            block.append("text")
                .attr("x", 17.5)
                .attr("y", 23)
                .attr("text-anchor", "middle")
                .style("font-size", "14px")
                .style("fill", "white")
                .style("font-weight", "bold")
                .text(val);
            
            // Hover effect with calculation
            block.on("mouseover", function() {
                d3.select(this).select("rect").style("fill", "#a29bfe");
                
                // Show calculation tooltip
                const tooltip = svg.append("g")
                    .attr("id", "calc-tooltip")
                    .attr("transform", `translate(${680 + j * 40}, ${30 + i * 40})`);
                
                tooltip.append("rect")
                    .attr("width", 80)
                    .attr("height", 30)
                    .style("fill", "rgba(0,0,0,0.8)")
                    .style("rx", 4);
                
                tooltip.append("text")
                    .attr("x", 40)
                    .attr("y", 20)
                    .attr("text-anchor", "middle")
                    .style("font-size", "12px")
                    .style("fill", "white")
                    .text(`${matrixA[i][j]} + ${vectorB[j]} = ${val}`);
            })
            .on("mouseout", function() {
                d3.select(this).select("rect").style("fill", "#6c5ce7");
                svg.select("#calc-tooltip").remove();
            });
        });
    });
    
    // Arrow marker definition
    svg.append("defs").append("marker")
        .attr("id", "broadcast-arrow")
        .attr("markerWidth", 10)
        .attr("markerHeight", 7)
        .attr("refX", 9)
        .attr("refY", 3.5)
        .attr("orient", "auto")
        .append("polygon")
        .attr("points", "0 0, 10 3.5, 0 7")
        .style("fill", "#e17055");
    
    // Add mathematical notation
    const notation = svg.append("g").attr("transform", "translate(50, 270)");
    
    notation.append("text")
        .attr("x", 0)
        .attr("y", 15)
        .style("font-size", "16px")
        .style("font-weight", "bold")
        .style("fill", "#2d3436")
        .text("Broadcasting Rules Visualization:");
    
    const rules = [
        "1. Matrix A: shape (2, 3) ✓",
        "2. Vector B: shape (3,) → conceptually (1, 3)",
        "3. Broadcasting: (1, 3) → (2, 3)",
        "4. Element-wise addition: A[i,j] + B[j] = Result[i,j]"
    ];
    
    rules.forEach((rule, i) => {
        notation.append("text")
            .attr("x", 20)
            .attr("y", 40 + i * 20)
            .style("font-size", "12px")
            .style("fill", "#636e72")
            .text(rule);
    });
    
    // Add performance note
    const perfNote = svg.append("g").attr("transform", "translate(450, 270)");
    
    perfNote.append("rect")
        .attr("width", 400)
        .attr("height", 80)
        .style("fill", "#f8f9fa")
        .style("stroke", "#00b894")
        .style("stroke-width", 2)
        .style("rx", 8);
    
    perfNote.append("text")
        .attr("x", 200)
        .attr("y", 20)
        .attr("text-anchor", "middle")
        .style("font-size", "14px")
        .style("font-weight", "bold")
        .style("fill", "#00b894")
        .text("🚀 Performance Benefit");
    
    perfNote.append("text")
        .attr("x", 20)
        .attr("y", 40)
        .style("font-size", "12px")
        .style("fill", "#2d3436")
        .text("Broadcasting happens automatically - no explicit loops needed!");
    
    perfNote.append("text")
        .attr("x", 20)
        .attr("y", 60)
        .style("font-size", "12px")
        .style("fill", "#2d3436")
        .text("Memory efficient: No actual copying of data in memory.");
}
</script>

#### 💻 Code Example

```python
import numpy as np

# Example: Adding a vector to each row of a matrix
matrix = np.array([[1, 2, 3],
                   [4, 5, 6]])  # shape (2, 3)

vector = np.array([10, 20, 30])  # shape (3,)

result = matrix + vector  # Broadcasting happens here
print(result)
# [[11 22 33]
#  [14 25 36]]

# The vector is conceptually stretched to shape (2, 3) to match matrix
```

#### 🎯 Broadcasting Examples

| Array 1 Shape | Array 2 Shape | Result Shape | Compatible? |
|:--- |:--- |:--- |:--- |
| `(3, 4)` | `(4,)` | `(3, 4)` | ✅ Yes |
| `(3, 4)` | `(3, 1)` | `(3, 4)` | ✅ Yes |
| `(3, 4)` | `(1, 4)` | `(3, 4)` | ✅ Yes |
| `(3, 4)` | `(3, 2)` | `N/A` | ❌ No |
| `(2, 3, 4)` | `(3, 4)` | `(2, 3, 4)` | ✅ Yes |

<div style="clear: both;"></div>

### 🖼️ 2.4. Application: Image Representation & Manipulation

**Grayscale Image:** A 2D NumPy array where each element represents the intensity of a pixel (0=black, 255=white). Shape: (height, width).

**RGB Image:** A 3D NumPy array. Shape: (height, width, 3). The last dimension represents the three color channels (Red, Green, Blue).

> **Note:** Libraries like OpenCV read images in BGR order by default, while Matplotlib expects RGB. You may need to convert between them: `image_rgb = image_bgr[:, :, ::-1]`.

#### Brightness Adjustment

Image data is often stored as uint8 (unsigned 8-bit integer, 0-255). Simple addition can cause values to "wrap around" (e.g., 250 + 10 becomes 4, not 255).

```python
# Incorrect way
image = cv2.imread('image.png')
bright_image = image + 100 # This will cause wrap-around issues

# Correct way using np.clip
image = image.astype(np.float32) # Convert to float to avoid overflow
bright_image = image + 100
bright_image = np.clip(bright_image, 0, 255) # Clip values to the 0-255 range
bright_image = bright_image.astype(np.uint8) # Convert back to uint8
```

## 🗄️ 3. Database - NoSQL

### 📊 3.1. Introduction to Databases

A database is an organized collection of data. A Database Management System (DBMS) is the software that interacts with users, applications, and the database itself to capture and analyze the data.

### 🔄 3.2. SQL vs. NoSQL

| Aspect | SQL (Relational) | NoSQL (Non-relational) |
|:--- |:--- |:--- |
| **Model** | Data is stored in tables with rows and columns | Data can be stored in various models (document, key-value, graph, etc.) |
| **Schema** | Predefined, rigid schema (schema-on-write) | Dynamic or flexible schema (schema-on-read) |
| **Scalability** | Typically scales vertically (increasing power of a single server) | Typically scales horizontally (distributing load across many servers) |
| **Language** | Uses Structured Query Language (SQL) | Varies by database; often called "Not Only SQL" |
| **Examples** | MySQL, PostgreSQL, SQL Server | MongoDB, Redis, Cassandra, Neo4j |

### 🗂️ 3.3. Types of NoSQL Databases

#### 📄 Document Databases
Store data in documents, similar to JSON objects. Each document contains field-value pairs. The values can be a variety of types, including nested documents and arrays.

- **Example:** MongoDB
- **Use Case:** Content management, user profiles

#### 🔑 Key-Value Stores
The simplest model. Every item is stored as a key-value pair.

- **Example:** Redis, Amazon DynamoDB
- **Use Case:** Caching, session management

#### 🕸️ Graph Databases
Use nodes and edges to represent and store data. Excellent for exploring relationships between entities.

- **Example:** Neo4j
- **Use Case:** Social networks, recommendation engines, fraud detection

#### 📊 Column-Family Stores
Store data in columns rather than rows. Optimized for fast queries over large datasets.

- **Example:** Cassandra, HBase
- **Use Case:** Big data analytics, time-series data

#### 📊 Interactive NoSQL Database Types Overview

<div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 75%, #4facfe 100%); padding: 20px; border-radius: 12px; margin: 20px 0; box-shadow: 0 8px 32px rgba(0,0,0,0.1);">
<div id="nosql-types-container" style="background: rgba(255,255,255,0.95); border-radius: 8px; padding: 15px;"></div>
</div>

<script is:inline>
if (typeof d3 === 'undefined') {
    const script = document.createElement('script');
    script.src = 'https://d3js.org/d3.v7.min.js';
    script.onload = function() {
        initNoSQLTypesViz();
    };
    document.head.appendChild(script);
} else {
    initNoSQLTypesViz();
}

function initNoSQLTypesViz() {
    const container = d3.select("#nosql-types-container");
    const width = 800;
    const height = 500;
    
    const svg = container.append("svg")
        .attr("viewBox", `0 0 ${width} ${height}`)
        .style("width", "100%")
        .style("height", "auto");
    
    // Add title
    svg.append("text")
        .attr("x", width/2)
        .attr("y", 25)
        .attr("text-anchor", "middle")
        .style("font-size", "20px")
        .style("font-weight", "bold")
        .style("fill", "#2d3436")
        .text("Four Types of NoSQL Databases");
    
    // Database types data
    const dbTypes = [
        {
            name: "Document Database",
            icon: "{}",
            description: "Stores data in flexible, JSON-like documents",
            example: "MongoDB",
            color: "#6c5ce7",
            lightColor: "#a29bfe",
            x: 100,
            y: 100,
            features: ["Flexible Schema", "Nested Data", "Rich Queries", "Horizontal Scaling"]
        },
        {
            name: "Key-Value Store",
            icon: "🔑",
            description: "Stores data as simple key-value pairs",
            example: "Redis",
            color: "#00b894",
            lightColor: "#00cec9",
            x: 500,
            y: 100,
            features: ["Simple Model", "High Performance", "Caching", "Session Storage"]
        },
        {
            name: "Graph Database",
            icon: "🕸️",
            description: "Stores data as nodes and relationships (edges)",
            example: "Neo4j",
            color: "#e17055",
            lightColor: "#fd79a8",
            x: 100,
            y: 300,
            features: ["Relationships", "Social Networks", "Recommendations", "Fraud Detection"]
        },
        {
            name: "Column-Family",
            icon: "📊",
            description: "Stores data in columns for fast aggregation",
            example: "Cassandra",
            color: "#f39c12",
            lightColor: "#fdcb6e",
            x: 500,
            y: 300,
            features: ["Big Data", "Time Series", "Analytics", "Write-Heavy"]
        }
    ];
    
    // Create groups for each database type
    dbTypes.forEach((db, i) => {
        const dbGroup = svg.append("g")
            .attr("transform", `translate(${db.x}, ${db.y})`)
            .style("cursor", "pointer");
        
        // Main card background
        const cardBg = dbGroup.append("rect")
            .attr("width", 250)
            .attr("height", 140)
            .style("fill", db.lightColor)
            .style("stroke", db.color)
            .style("stroke-width", 3)
            .style("rx", 12)
            .style("filter", "drop-shadow(0 4px 8px rgba(0,0,0,0.1))");
        
        // Icon circle
        dbGroup.append("circle")
            .attr("cx", 40)
            .attr("cy", 40)
            .attr("r", 25)
            .style("fill", db.color)
            .style("stroke", "white")
            .style("stroke-width", 3);
        
        // Icon text
        dbGroup.append("text")
            .attr("x", 40)
            .attr("y", 50)
            .attr("text-anchor", "middle")
            .style("font-size", "20px")
            .text(db.icon);
        
        // Database name
        dbGroup.append("text")
            .attr("x", 80)
            .attr("y", 25)
            .style("font-size", "16px")
            .style("font-weight", "bold")
            .style("fill", "#2d3436")
            .text(db.name);
        
        // Example
        dbGroup.append("text")
            .attr("x", 80)
            .attr("y", 45)
            .style("font-size", "14px")
            .style("fill", db.color)
            .style("font-weight", "bold")
            .text(`Example: ${db.example}`);
        
        // Description
        const words = db.description.split(' ');
        const lines = [];
        let currentLine = [];
        
        words.forEach(word => {
            currentLine.push(word);
            if (currentLine.join(' ').length > 25) {
                lines.push(currentLine.slice(0, -1).join(' '));
                currentLine = [word];
            }
        });
        if (currentLine.length > 0) {
            lines.push(currentLine.join(' '));
        }
        
        lines.forEach((line, j) => {
            dbGroup.append("text")
                .attr("x", 15)
                .attr("y", 85 + j * 15)
                .style("font-size", "12px")
                .style("fill", "#636e72")
                .text(line);
        });
        
        // Features on hover
        const featuresGroup = dbGroup.append("g")
            .attr("class", "features")
            .style("opacity", 0);
        
        featuresGroup.append("rect")
            .attr("x", -10)
            .attr("y", -10)
            .attr("width", 270)
            .attr("height", 160)
            .style("fill", "rgba(255,255,255,0.95)")
            .style("stroke", db.color)
            .style("stroke-width", 2)
            .style("rx", 12);
        
        featuresGroup.append("text")
            .attr("x", 125)
            .attr("y", 20)
            .attr("text-anchor", "middle")
            .style("font-size", "14px")
            .style("font-weight", "bold")
            .style("fill", db.color)
            .text("Key Features:");
        
        db.features.forEach((feature, k) => {
            featuresGroup.append("text")
                .attr("x", 20)
                .attr("y", 45 + k * 20)
                .style("font-size", "12px")
                .style("fill", "#2d3436")
                .text(`• ${feature}`);
        });
        
        // Hover effects
        dbGroup.on("mouseover", function() {
            cardBg.style("transform", "scale(1.02)");
            featuresGroup.transition().duration(200).style("opacity", 1);
        })
        .on("mouseout", function() {
            cardBg.style("transform", "scale(1)");
            featuresGroup.transition().duration(200).style("opacity", 0);
        });
    });
    
    // Add comparison table
    const tableGroup = svg.append("g").attr("transform", "translate(50, 450)");
    
    const comparisonData = [
        ["Aspect", "Document", "Key-Value", "Graph", "Column-Family"],
        ["Best For", "Content Mgmt", "Caching", "Relationships", "Big Data"],
        ["Complexity", "Medium", "Low", "High", "Medium"],
        ["Scalability", "Good", "Excellent", "Good", "Excellent"]
    ];
    
    comparisonData.forEach((row, i) => {
        row.forEach((cell, j) => {
            const cellGroup = tableGroup.append("g");
            
            cellGroup.append("rect")
                .attr("x", j * 140)
                .attr("y", i * 25)
                .attr("width", 138)
                .attr("height", 23)
                .style("fill", i === 0 ? "#f8f9fa" : "white")
                .style("stroke", "#ddd")
                .style("stroke-width", 1);
            
            cellGroup.append("text")
                .attr("x", j * 140 + 70)
                .attr("y", i * 25 + 16)
                .attr("text-anchor", "middle")
                .style("font-size", "11px")
                .style("font-weight", i === 0 ? "bold" : "normal")
                .style("fill", i === 0 ? "#2d3436" : "#636e72")
                .text(cell);
        });
    });
}
</script>

### 🍃 3.4. Introduction to MongoDB

MongoDB is a leading document database.

**Database:** A container for collections.

**Collection:** A group of MongoDB documents. It is the equivalent of a table in a relational database.

**Document:** A set of key-value pairs, represented in a format called BSON (Binary JSON). Documents have a dynamic schema. The `_id` field is a unique primary key automatically added if not provided.

#### Example Document:

```json
{
  "_id": " ObjectId('...') ",
  "username": "aivn_student",
  "course": "AIO2025",
  "enrollment_date": "ISODate('2025-07-01T00:00:00Z')",
  "scores": [95, 88, 92],
  "address": {
    "city": "Hanoi",
    "country": "Vietnam"
  }
}
```

### 🔍 3.5. Basic MongoDB Query Language (MQL)

#### Insert a document:

```javascript
db.students.insertOne({ name: "Thai", age: 20, likes: ["AI", "Data"] })
```

#### Find documents:

```javascript
// Find all documents
db.students.find()

// Find documents where age is greater than 21
db.students.find({ age: { $gt: 21 } })

// Find documents matching two conditions (implicit AND)
db.students.find({ age: { $gt: 21 }, likes: "AI" })
```

#### Update a document:

```javascript
// Find the first student named "Thai" and set their age to 21
db.students.updateOne(
  { name: "Thai" },
  { $set: { age: 21 } }
)
```

#### Delete a document:

```javascript
db.students.deleteOne({ name: "Thai" })
```

## 🎯 4. Measuring Data Similarity: Cosine Similarity

### 🧮 4.1. Vector Dot Product

The dot product of two vectors A and B can be defined in two ways:

#### 📊 Mathematical Definitions

**Algebraic:** The sum of the products of the corresponding entries.
```
A · B = Σ(Aᵢ * Bᵢ)
```

**Geometric:** The product of the Euclidean magnitudes of the two vectors and the cosine of the angle between them.
```
A · B = ||A|| * ||B|| * cos(θ)
```

### 📐 4.2. Cosine Similarity

By rearranging the geometric definition of the dot product, we get the formula for Cosine Similarity. It measures the cosine of the angle between two non-zero vectors, which indicates their directional similarity.

```
Cosine Similarity (cs) = cos(θ) = (A · B) / (||A|| * ||B||)
```

#### 🎯 Interpretation Guide

| Range | Value | Meaning | Use Case |
|:--- |:--- |:--- |:--- |
| **1** | Perfect similarity | Vectors point in exact same direction | Identical documents |
| **0** | No similarity | Vectors are orthogonal (90°) | Unrelated topics |
| **-1** | Perfect dissimilarity | Vectors point in opposite directions | Contradictory content |
| **0.5 to 1** | High similarity | Small angle between vectors | Related documents |
| **-0.5 to 0.5** | Moderate similarity | Medium angle | Somewhat related |

> 🔑 **Key Property:** Cosine similarity is a measure of **orientation**, not magnitude. Two vectors with the same orientation but different magnitudes will have a cosine similarity of 1. This makes it perfect for text analysis, where document length varies greatly.

#### 🎨 Interactive Vector Similarity Visualization

<div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 75%, #4facfe 100%); padding: 20px; border-radius: 12px; margin: 20px 0; box-shadow: 0 8px 32px rgba(0,0,0,0.1);">
<div id="cosine-similarity-container" style="background: rgba(255,255,255,0.95); border-radius: 8px; padding: 15px;"></div>
</div>

<script is:inline>
if (typeof d3 === 'undefined') {
    const script = document.createElement('script');
    script.src = 'https://d3js.org/d3.v7.min.js';
    script.onload = function() {
        initCosineSimilarityViz();
    };
    document.head.appendChild(script);
} else {
    initCosineSimilarityViz();
}

function initCosineSimilarityViz() {
    const container = d3.select("#cosine-similarity-container");
    const width = 800;
    const height = 600;
    
    const svg = container.append("svg")
        .attr("viewBox", `0 0 ${width} ${height}`)
        .style("width", "100%")
        .style("height", "auto");
    
    // Add title
    svg.append("text")
        .attr("x", width/2)
        .attr("y", 25)
        .attr("text-anchor", "middle")
        .style("font-size", "20px")
        .style("font-weight", "bold")
        .style("fill", "#2d3436")
        .text("Interactive Cosine Similarity Calculator");
    
    // Create coordinate system
    const centerX = 250;
    const centerY = 300;
    const scale = 50;
    
    const plotGroup = svg.append("g").attr("transform", `translate(${centerX}, ${centerY})`);
    
    // Draw grid
    for (let i = -4; i <= 4; i++) {
        if (i !== 0) {
            // Vertical grid lines
            plotGroup.append("line")
                .attr("x1", i * scale)
                .attr("y1", -4 * scale)
                .attr("x2", i * scale)
                .attr("y2", 4 * scale)
                .style("stroke", "#ddd")
                .style("stroke-width", 1);
            
            // Horizontal grid lines
            plotGroup.append("line")
                .attr("x1", -4 * scale)
                .attr("y1", i * scale)
                .attr("x2", 4 * scale)
                .attr("y2", i * scale)
                .style("stroke", "#ddd")
                .style("stroke-width", 1);
        }
    }
    
    // Draw axes
    plotGroup.append("line")
        .attr("x1", -4 * scale)
        .attr("y1", 0)
        .attr("x2", 4 * scale)
        .attr("y2", 0)
        .style("stroke", "#636e72")
        .style("stroke-width", 2);
    
    plotGroup.append("line")
        .attr("x1", 0)
        .attr("y1", -4 * scale)
        .attr("x2", 0)
        .attr("y2", 4 * scale)
        .style("stroke", "#636e72")
        .style("stroke-width", 2);
    
    // Add axis labels
    plotGroup.append("text")
        .attr("x", 4 * scale - 10)
        .attr("y", -10)
        .style("font-size", "14px")
        .style("fill", "#636e72")
        .text("X");
    
    plotGroup.append("text")
        .attr("x", 10)
        .attr("y", -4 * scale + 5)
        .style("font-size", "14px")
        .style("fill", "#636e72")
        .text("Y");
    
    // Initial vector values
    let vectorA = {x: 3, y: 2};
    let vectorB = {x: 2, y: 3};
    
    // Function to calculate cosine similarity
    function calculateCosineSimilarity(a, b) {
        const dotProduct = a.x * b.x + a.y * b.y;
        const magnitudeA = Math.sqrt(a.x * a.x + a.y * a.y);
        const magnitudeB = Math.sqrt(b.x * b.x + b.y * b.y);
        
        if (magnitudeA === 0 || magnitudeB === 0) return 0;
        
        return dotProduct / (magnitudeA * magnitudeB);
    }
    
    // Function to calculate angle in degrees
    function calculateAngle(a, b) {
        const cosSim = calculateCosineSimilarity(a, b);
        return Math.acos(Math.max(-1, Math.min(1, cosSim))) * 180 / Math.PI;
    }
    
    // Draw vectors
    function drawVectors() {
        // Remove existing vectors
        plotGroup.selectAll(".vector-line").remove();
        plotGroup.selectAll(".vector-point").remove();
        plotGroup.selectAll(".angle-arc").remove();
        
        // Vector A
        plotGroup.append("line")
            .attr("class", "vector-line")
            .attr("x1", 0)
            .attr("y1", 0)
            .attr("x2", vectorA.x * scale)
            .attr("y2", -vectorA.y * scale)
            .style("stroke", "#00b894")
            .style("stroke-width", 4)
            .attr("marker-end", "url(#arrow-a)");
        
        // Vector B
        plotGroup.append("line")
            .attr("class", "vector-line")
            .attr("x1", 0)
            .attr("y1", 0)
            .attr("x2", vectorB.x * scale)
            .attr("y2", -vectorB.y * scale)
            .style("stroke", "#e17055")
            .style("stroke-width", 4)
            .attr("marker-end", "url(#arrow-b)");
        
        // Draggable points
        const pointA = plotGroup.append("circle")
            .attr("class", "vector-point")
            .attr("cx", vectorA.x * scale)
            .attr("cy", -vectorA.y * scale)
            .attr("r", 8)
            .style("fill", "#00b894")
            .style("stroke", "white")
            .style("stroke-width", 2)
            .style("cursor", "grab");
        
        const pointB = plotGroup.append("circle")
            .attr("class", "vector-point")
            .attr("cx", vectorB.x * scale)
            .attr("cy", -vectorB.y * scale)
            .attr("r", 8)
            .style("fill", "#e17055")
            .style("stroke", "white")
            .style("stroke-width", 2)
            .style("cursor", "grab");
        
        // Add drag behavior
        pointA.call(d3.drag()
            .on("drag", function(event) {
                vectorA.x = Math.max(-4, Math.min(4, event.x / scale));
                vectorA.y = Math.max(-4, Math.min(4, -event.y / scale));
                drawVectors();
                updateCalculations();
            }));
        
        pointB.call(d3.drag()
            .on("drag", function(event) {
                vectorB.x = Math.max(-4, Math.min(4, event.x / scale));
                vectorB.y = Math.max(-4, Math.min(4, -event.y / scale));
                drawVectors();
                updateCalculations();
            }));
        
        // Draw angle arc
        const angle = calculateAngle(vectorA, vectorB);
        const angleA = Math.atan2(-vectorA.y, vectorA.x);
        const angleB = Math.atan2(-vectorB.y, vectorB.x);
        
        if (angle > 0 && angle < 180) {
            const arcRadius = 30;
            const startAngle = Math.min(angleA, angleB);
            const endAngle = Math.max(angleA, angleB);
            
            const arc = d3.arc()
                .innerRadius(arcRadius)
                .outerRadius(arcRadius)
                .startAngle(startAngle)
                .endAngle(endAngle);
            
            plotGroup.append("path")
                .attr("class", "angle-arc")
                .attr("d", arc)
                .style("stroke", "#6c5ce7")
                .style("stroke-width", 2)
                .style("fill", "none");
        }
        
        // Vector labels
        plotGroup.append("text")
            .attr("class", "vector-point")
            .attr("x", vectorA.x * scale + 10)
            .attr("y", -vectorA.y * scale - 10)
            .style("font-size", "14px")
            .style("font-weight", "bold")
            .style("fill", "#00b894")
            .text("A");
        
        plotGroup.append("text")
            .attr("class", "vector-point")
            .attr("x", vectorB.x * scale + 10)
            .attr("y", -vectorB.y * scale - 10)
            .style("font-size", "14px")
            .style("font-weight", "bold")
            .style("fill", "#e17055")
            .text("B");
    }
    
    // Arrow markers
    const defs = svg.append("defs");
    
    defs.append("marker")
        .attr("id", "arrow-a")
        .attr("markerWidth", 10)
        .attr("markerHeight", 10)
        .attr("refX", 8)
        .attr("refY", 3)
        .attr("orient", "auto")
        .append("polygon")
        .attr("points", "0 0, 10 3, 0 6")
        .style("fill", "#00b894");
    
    defs.append("marker")
        .attr("id", "arrow-b")
        .attr("markerWidth", 10)
        .attr("markerHeight", 10)
        .attr("refX", 8)
        .attr("refY", 3)
        .attr("orient", "auto")
        .append("polygon")
        .attr("points", "0 0, 10 3, 0 6")
        .style("fill", "#e17055");
    
    // Calculations panel
    const calcPanel = svg.append("g").attr("transform", "translate(550, 80)");
    
    calcPanel.append("rect")
        .attr("width", 220)
        .attr("height", 400)
        .style("fill", "#f8f9fa")
        .style("stroke", "#ddd")
        .style("stroke-width", 1)
        .style("rx", 8);
    
    calcPanel.append("text")
        .attr("x", 110)
        .attr("y", 25)
        .attr("text-anchor", "middle")
        .style("font-size", "16px")
        .style("font-weight", "bold")
        .style("fill", "#2d3436")
        .text("Live Calculations");
    
    function updateCalculations() {
        // Clear previous calculations
        calcPanel.selectAll(".calc-text").remove();
        
        const cosSim = calculateCosineSimilarity(vectorA, vectorB);
        const angle = calculateAngle(vectorA, vectorB);
        const dotProduct = vectorA.x * vectorB.x + vectorA.y * vectorB.y;
        const magnitudeA = Math.sqrt(vectorA.x * vectorA.x + vectorA.y * vectorA.y);
        const magnitudeB = Math.sqrt(vectorB.x * vectorB.x + vectorB.y * vectorB.y);
        
        const calculations = [
            `Vector A: (${vectorA.x.toFixed(1)}, ${vectorA.y.toFixed(1)})`,
            `Vector B: (${vectorB.x.toFixed(1)}, ${vectorB.y.toFixed(1)})`,
            ``,
            `Dot Product: ${dotProduct.toFixed(2)}`,
            `||A|| = ${magnitudeA.toFixed(2)}`,
            `||B|| = ${magnitudeB.toFixed(2)}`,
            ``,
            `Cosine Similarity:`,
            `${cosSim.toFixed(4)}`,
            ``,
            `Angle: ${angle.toFixed(1)}°`,
            ``,
            `Interpretation:`,
            cosSim > 0.8 ? "High Similarity" :
            cosSim > 0.5 ? "Moderate Similarity" :
            cosSim > 0 ? "Low Similarity" :
            cosSim === 0 ? "Orthogonal" : "Opposite Direction"
        ];
        
        calculations.forEach((text, i) => {
            calcPanel.append("text")
                .attr("class", "calc-text")
                .attr("x", text === "" ? 0 : 15)
                .attr("y", 50 + i * 20)
                .style("font-size", text.includes("Cosine Similarity:") || text.includes("Interpretation:") ? "12px" : "11px")
                .style("font-weight", text.includes(":") || text === `${cosSim.toFixed(4)}` ? "bold" : "normal")
                .style("fill", 
                    text.includes("Vector A") ? "#00b894" :
                    text.includes("Vector B") ? "#e17055" :
                    text === `${cosSim.toFixed(4)}` ? "#6c5ce7" :
                    "#2d3436")
                .text(text);
        });
        
        // Color-coded similarity indicator
        const similarityColor = 
            cosSim > 0.8 ? "#00b894" :
            cosSim > 0.5 ? "#f39c12" :
            cosSim > 0 ? "#e17055" :
            cosSim === 0 ? "#636e72" : "#d63031";
        
        calcPanel.append("rect")
            .attr("class", "calc-text")
            .attr("x", 15)
            .attr("y", 320)
            .attr("width", 190)
            .attr("height", 30)
            .style("fill", similarityColor)
            .style("opacity", 0.2)
            .style("rx", 4);
        
        calcPanel.append("text")
            .attr("class", "calc-text")
            .attr("x", 110)
            .attr("y", 340)
            .attr("text-anchor", "middle")
            .style("font-size", "14px")
            .style("font-weight", "bold")
            .style("fill", similarityColor)
            .text(`Similarity: ${(cosSim * 100).toFixed(1)}%`);
    }
    
    // Instructions
    svg.append("text")
        .attr("x", 50)
        .attr("y", 550)
        .style("font-size", "14px")
        .style("fill", "#636e72")
        .text("💡 Drag the vector endpoints to see how cosine similarity changes!");
    
    // Initial draw
    drawVectors();
    updateCalculations();
}
</script>

<div style="clear: both;"></div>

### 💻 4.3. Python Implementation

```python
import numpy as np

def cosine_similarity(v1, v2):
  """Computes the cosine similarity between two vectors."""
  dot_product = np.dot(v1, v2)
  norm_v1 = np.linalg.norm(v1)
  norm_v2 = np.linalg.norm(v2)
  
  # Avoid division by zero
  if norm_v1 == 0 or norm_v2 == 0:
    return 0.0
    
  return dot_product / (norm_v1 * norm_v2)

# Example usage
doc1_vector = np.array([1, 1, 0, 1]) # "AI is fun"
doc2_vector = np.array([1, 1, 1, 0]) # "AI is cool"
similarity = cosine_similarity(doc1_vector, doc2_vector)
print(f"Cosine Similarity: {similarity:.4f}")
# Cosine Similarity: 0.6667
```

## 🧠 5. Logic Thinking and Problem Solving
A structured approach to problem-solving is crucial for the success of any Data Science or AI project.

### 🔄 5.1. The 7-Step Problem-Solving Framework

This is an iterative process to systematically tackle complex problems.

#### 🔄 Interactive 7-Step Problem-Solving Framework

<div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 75%, #4facfe 100%); padding: 20px; border-radius: 12px; margin: 20px 0; box-shadow: 0 8px 32px rgba(0,0,0,0.1);">
<div id="problem-solving-container" style="background: rgba(255,255,255,0.95); border-radius: 8px; padding: 15px;"></div>
</div>

<script is:inline>
if (typeof d3 === 'undefined') {
    const script = document.createElement('script');
    script.src = 'https://d3js.org/d3.v7.min.js';
    script.onload = function() {
        initProblemSolvingViz();
    };
    document.head.appendChild(script);
} else {
    initProblemSolvingViz();
}

function initProblemSolvingViz() {
    const container = d3.select("#problem-solving-container");
    const width = 700;
    const height = 700;
    
    const svg = container.append("svg")
        .attr("viewBox", `0 0 ${width} ${height}`)
        .style("width", "100%")
        .style("height", "auto");
    
    // Add title
    svg.append("text")
        .attr("x", width/2)
        .attr("y", 30)
        .attr("text-anchor", "middle")
        .style("font-size", "20px")
        .style("font-weight", "bold")
        .style("fill", "#2d3436")
        .text("7-Step Problem-Solving Framework");
    
    const centerX = width / 2;
    const centerY = height / 2 + 20;
    const radius = 220;
    const innerRadius = 120;
    
    // Framework steps
    const steps = [
        { name: "1. Define\nProblem", icon: "🔍", angle: 0, color: "#6c5ce7", description: "Clearly articulate the problem using 5W1H method" },
        { name: "2. Decompose\nProblem", icon: "🧩", angle: Math.PI * 2 / 7, color: "#00b894", description: "Break down complex problems using MECE principle" },
        { name: "3. Prioritize\nIssues", icon: "⭐", angle: Math.PI * 4 / 7, color: "#e17055", description: "Focus resources using Impact-Feasibility Matrix" },
        { name: "4. Data\nCollection", icon: "🗄️", angle: Math.PI * 6 / 7, color: "#f39c12", description: "Gather accurate, complete, timely data" },
        { name: "5. Data\nAnalysis", icon: "📊", angle: Math.PI * 8 / 7, color: "#d63031", description: "Clean → EDA → Diagnostic → Insights" },
        { name: "6. Design\nSolution", icon: "💡", angle: Math.PI * 10 / 7, color: "#a29bfe", description: "Brainstorm and prototype solutions" },
        { name: "7. Implement\n& Present", icon: "🚀", angle: Math.PI * 12 / 7, color: "#fd79a8", description: "Execute and communicate using Pyramid Principle" }
    ];
    
    let currentStep = 0;
    let isAnimating = false;
    
    // Create circular path for animation
    const circleGroup = svg.append("g").attr("transform", `translate(${centerX}, ${centerY})`);
    
    // Background circle
    circleGroup.append("circle")
        .attr("r", radius + 10)
        .style("fill", "none")
        .style("stroke", "#f8f9fa")
        .style("stroke-width", 20);
    
    // Create step segments
    steps.forEach((step, i) => {
        const stepGroup = circleGroup.append("g")
            .attr("class", `step-${i}`)
            .style("cursor", "pointer");
        
        // Calculate position
        const x = Math.cos(step.angle - Math.PI/2) * radius;
        const y = Math.sin(step.angle - Math.PI/2) * radius;
        
        // Step circle
        const stepCircle = stepGroup.append("circle")
            .attr("cx", x)
            .attr("cy", y)
            .attr("r", 45)
            .style("fill", step.color)
            .style("stroke", "white")
            .style("stroke-width", 4)
            .style("filter", "drop-shadow(0 4px 8px rgba(0,0,0,0.2))")
            .style("transition", "all 0.3s ease");
        
        // Step icon
        stepGroup.append("text")
            .attr("x", x)
            .attr("y", y - 5)
            .attr("text-anchor", "middle")
            .style("font-size", "24px")
            .style("pointer-events", "none")
            .text(step.icon);
        
        // Step number
        stepGroup.append("text")
            .attr("x", x)
            .attr("y", y + 15)
            .attr("text-anchor", "middle")
            .style("font-size", "12px")
            .style("font-weight", "bold")
            .style("fill", "white")
            .style("pointer-events", "none")
            .text(i + 1);
        
        // Step name (outside circle)
        const labelX = Math.cos(step.angle - Math.PI/2) * (radius + 70);
        const labelY = Math.sin(step.angle - Math.PI/2) * (radius + 70);
        
        stepGroup.append("text")
            .attr("x", labelX)
            .attr("y", labelY)
            .attr("text-anchor", "middle")
            .style("font-size", "14px")
            .style("font-weight", "bold")
            .style("fill", step.color)
            .style("pointer-events", "none")
            .selectAll("tspan")
            .data(step.name.split('\n'))
            .enter()
            .append("tspan")
            .attr("x", labelX)
            .attr("dy", (d, j) => j === 0 ? 0 : "1.2em")
            .text(d => d);
        
        // Connect steps with arrows
        if (i < steps.length - 1) {
            const nextStep = steps[i + 1];
            const startX = Math.cos(step.angle - Math.PI/2) * (radius - 30);
            const startY = Math.sin(step.angle - Math.PI/2) * (radius - 30);
            const endX = Math.cos(nextStep.angle - Math.PI/2) * (radius - 30);
            const endY = Math.sin(nextStep.angle - Math.PI/2) * (radius - 30);
            
            const midAngle = (step.angle + nextStep.angle) / 2;
            const controlX = Math.cos(midAngle - Math.PI/2) * (radius - 50);
            const controlY = Math.sin(midAngle - Math.PI/2) * (radius - 50);
            
            circleGroup.append("path")
                .attr("d", `M ${startX} ${startY} Q ${controlX} ${controlY} ${endX} ${endY}`)
                .style("stroke", "#ddd")
                .style("stroke-width", 3)
                .style("fill", "none")
                .attr("marker-end", "url(#arrowhead)");
        }
        
        // Close the circle with final arrow
        if (i === steps.length - 1) {
            const firstStep = steps[0];
            const startX = Math.cos(step.angle - Math.PI/2) * (radius - 30);
            const startY = Math.sin(step.angle - Math.PI/2) * (radius - 30);
            const endX = Math.cos(firstStep.angle - Math.PI/2) * (radius - 30);
            const endY = Math.sin(firstStep.angle - Math.PI/2) * (radius - 30);
            
            circleGroup.append("path")
                .attr("d", `M ${startX} ${startY} A ${radius-30} ${radius-30} 0 0 1 ${endX} ${endY}`)
                .style("stroke", "#ddd")
                .style("stroke-width", 3)
                .style("fill", "none")
                .attr("marker-end", "url(#arrowhead)");
        }
        
        // Click handler
        stepGroup.on("click", function() {
            if (!isAnimating) {
                showStepDetails(i);
                highlightStep(i);
            }
        })
        .on("mouseover", function() {
            if (!isAnimating) {
                stepCircle.style("transform", "scale(1.1)");
            }
        })
        .on("mouseout", function() {
            if (!isAnimating) {
                stepCircle.style("transform", "scale(1)");
            }
        });
    });
    
    // Arrow marker
    svg.append("defs").append("marker")
        .attr("id", "arrowhead")
        .attr("markerWidth", 10)
        .attr("markerHeight", 7)
        .attr("refX", 9)
        .attr("refY", 3.5)
        .attr("orient", "auto")
        .append("polygon")
        .attr("points", "0 0, 10 3.5, 0 7")
        .style("fill", "#ddd");
    
    // Central info panel
    const infoPanel = circleGroup.append("g").attr("class", "info-panel");
    
    infoPanel.append("circle")
        .attr("r", innerRadius)
        .style("fill", "#f8f9fa")
        .style("stroke", "#ddd")
        .style("stroke-width", 2);
    
    const infoText = infoPanel.append("text")
        .attr("text-anchor", "middle")
        .style("font-size", "14px")
        .style("fill", "#636e72");
    
    // Auto-animation button
    const controlGroup = svg.append("g").attr("transform", `translate(${width - 150}, 50)`);
    
    const animateButton = controlGroup.append("g")
        .style("cursor", "pointer");
    
    animateButton.append("rect")
        .attr("width", 120)
        .attr("height", 35)
        .style("fill", "#6c5ce7")
        .style("rx", 8);
    
    animateButton.append("text")
        .attr("x", 60)
        .attr("y", 23)
        .attr("text-anchor", "middle")
        .style("font-size", "12px")
        .style("fill", "white")
        .style("font-weight", "bold")
        .text("▶️ Auto Demo");
    
    animateButton.on("click", startAutoAnimation);
    
    function showStepDetails(stepIndex) {
        const step = steps[stepIndex];
        
        infoText.selectAll("*").remove();
        
        infoText.append("tspan")
            .attr("x", 0)
            .attr("dy", "-20")
            .style("font-size", "16px")
            .style("font-weight", "bold")
            .style("fill", step.color)
            .text(step.name.replace('\n', ' '));
        
        const words = step.description.split(' ');
        const lines = [];
        let currentLine = [];
        
        words.forEach(word => {
            currentLine.push(word);
            if (currentLine.join(' ').length > 20) {
                lines.push(currentLine.slice(0, -1).join(' '));
                currentLine = [word];
            }
        });
        if (currentLine.length > 0) {
            lines.push(currentLine.join(' '));
        }
        
        lines.forEach((line, i) => {
            infoText.append("tspan")
                .attr("x", 0)
                .attr("dy", i === 0 ? "25" : "18")
                .style("font-size", "12px")
                .style("fill", "#636e72")
                .text(line);
        });
    }
    
    function highlightStep(stepIndex) {
        // Reset all steps
        circleGroup.selectAll('.step-0, .step-1, .step-2, .step-3, .step-4, .step-5, .step-6')
            .select('circle')
            .style("opacity", 0.7);
        
        // Highlight current step
        circleGroup.select(`.step-${stepIndex}`)
            .select('circle')
            .style("opacity", 1)
            .style("transform", "scale(1.2)");
    }
    
    function startAutoAnimation() {
        if (isAnimating) return;
        
        isAnimating = true;
        currentStep = 0;
        
        function animateStep() {
            highlightStep(currentStep);
            showStepDetails(currentStep);
            
            currentStep = (currentStep + 1) % steps.length;
            
            if (currentStep === 0) {
                // Animation complete
                setTimeout(() => {
                    isAnimating = false;
                    // Reset all steps
                    circleGroup.selectAll('.step-0, .step-1, .step-2, .step-3, .step-4, .step-5, .step-6')
                        .select('circle')
                        .style("opacity", 1)
                        .style("transform", "scale(1)");
                    
                    infoText.selectAll("*").remove();
                    infoText.append("tspan")
                        .attr("x", 0)
                        .style("font-size", "14px")
                        .style("font-weight", "bold")
                        .style("fill", "#6c5ce7")
                        .text("Click any step to learn more");
                }, 1500);
            } else {
                setTimeout(animateStep, 1500);
            }
        }
        
        animateStep();
    }
    
    // Initial state
    infoText.append("tspan")
        .attr("x", 0)
        .style("font-size", "14px")
        .style("font-weight", "bold")
        .style("fill", "#6c5ce7")
        .text("Click any step to learn more");
}
</script>

#### 🔍 Step 1: Define the Problem

**Goal:** Clearly articulate the problem. A problem is the gap between the current state and the desired state.

**Techniques:**

- **5W1H:** Who, What, Where, When, Why, How
- **5 Whys:** Repeatedly ask "Why?" to uncover the root cause
- **SMART Goals:** Ensure the objective is Specific, Measurable, Achievable, Relevant, and Time-bound

#### 🧩 Step 2: Decompose the Problem

**Goal:** Break down a complex problem into smaller, more manageable components.

**Techniques:**

- **MECE Principle:** Mutually Exclusive, Collectively Exhaustive. Ensure sub-problems don't overlap and that all parts of the original problem are covered
- **Logic Trees:** A visual tool to structure the decomposition

#### 🌳 Interactive Logic Tree Example

<div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 75%, #4facfe 100%); padding: 20px; border-radius: 12px; margin: 20px 0; box-shadow: 0 8px 32px rgba(0,0,0,0.1);">
<div id="logic-tree-container" style="background: rgba(255,255,255,0.95); border-radius: 8px; padding: 15px;"></div>
</div>

<script is:inline>
if (typeof d3 === 'undefined') {
    const script = document.createElement('script');
    script.src = 'https://d3js.org/d3.v7.min.js';
    script.onload = function() {
        initLogicTreeViz();
    };
    document.head.appendChild(script);
} else {
    initLogicTreeViz();
}

function initLogicTreeViz() {
    const container = d3.select("#logic-tree-container");
    const width = 900;
    const height = 500;
    
    const svg = container.append("svg")
        .attr("viewBox", `0 0 ${width} ${height}`)
        .style("width", "100%")
        .style("height", "auto");
    
    // Add title
    svg.append("text")
        .attr("x", width/2)
        .attr("y", 25)
        .attr("text-anchor", "middle")
        .style("font-size", "20px")
        .style("font-weight", "bold")
        .style("fill", "#2d3436")
        .text("Logic Tree: Problem Decomposition Example");
    
    // Tree data structure
    const treeData = {
        name: "Declining Sales",
        level: 0,
        color: "#d63031",
        x: width/2,
        y: 70,
        expanded: false,
        children: [
            {
                name: "Internal Factors",
                level: 1,
                color: "#6c5ce7",
                x: width/3,
                y: 150,
                expanded: false,
                children: [
                    {
                        name: "Product",
                        level: 2,
                        color: "#00b894",
                        x: width/6,
                        y: 230,
                        expanded: false,
                        children: [
                            { name: "Quality Issues", level: 3, color: "#00cec9", x: width/12, y: 310 },
                            { name: "Out of Stock", level: 3, color: "#00cec9", x: width/6, y: 310 },
                            { name: "Poor Product Mix", level: 3, color: "#00cec9", x: width/4, y: 310 }
                        ]
                    },
                    { name: "Pricing", level: 2, color: "#00b894", x: width/3, y: 230 },
                    { name: "Marketing", level: 2, color: "#00b894", x: width/2, y: 230 },
                    { name: "Operations", level: 2, color: "#00b894", x: 2*width/3, y: 230 }
                ]
            },
            {
                name: "External Factors",
                level: 1,
                color: "#e17055",
                x: 2*width/3,
                y: 150,
                expanded: false,
                children: [
                    { name: "Competitors", level: 2, color: "#fd79a8", x: 3*width/4, y: 230 },
                    { name: "Market Trends", level: 2, color: "#fd79a8", x: 5*width/6, y: 230 },
                    { name: "Economic Conditions", level: 2, color: "#fd79a8", x: 11*width/12, y: 230 }
                ]
            }
        ]
    };
    
    let allNodes = [];
    let allLinks = [];
    
    // Function to extract all nodes and create links
    function extractNodes(node, parent = null) {
        allNodes.push(node);
        if (parent) {
            allLinks.push({
                source: parent,
                target: node
            });
        }
        if (node.children) {
            node.children.forEach(child => extractNodes(child, node));
        }
    }
    
    extractNodes(treeData);
    
    // Create groups for better organization
    const linkGroup = svg.append("g").attr("class", "links");
    const nodeGroup = svg.append("g").attr("class", "nodes");
    
    // Draw links
    function updateLinks() {
        const links = linkGroup.selectAll("line")
            .data(allLinks, d => `${d.source.name}-${d.target.name}`);
        
        links.enter()
            .append("line")
            .merge(links)
            .attr("x1", d => d.source.x)
            .attr("y1", d => d.source.y)
            .attr("x2", d => d.target.x)
            .attr("y2", d => d.target.y)
            .style("stroke", "#ddd")
            .style("stroke-width", 2)
            .style("opacity", d => {
                if (d.source.level === 0) return 1;
                if (d.source.level === 1) return d.source.expanded ? 1 : 0.3;
                if (d.source.level === 2) return d.source.expanded ? 1 : 0.3;
                return 1;
            });
        
        links.exit().remove();
    }
    
    // Draw nodes
    function updateNodes() {
        const nodes = nodeGroup.selectAll("g")
            .data(allNodes, d => d.name);
        
        const nodeEnter = nodes.enter()
            .append("g")
            .style("cursor", "pointer");
        
        const nodeUpdate = nodeEnter.merge(nodes);
        
        // Node background
        nodeUpdate.selectAll("rect").remove();
        nodeUpdate.append("rect")
            .attr("x", d => -d.name.length * 4 - 10)
            .attr("y", -20)
            .attr("width", d => d.name.length * 8 + 20)
            .attr("height", 35)
            .style("fill", d => d.color)
            .style("stroke", "white")
            .style("stroke-width", 2)
            .style("rx", 8)
            .style("opacity", d => {
                if (d.level === 0) return 1;
                if (d.level === 1) return 1;
                if (d.level === 2) return getParent(d).expanded ? 1 : 0.3;
                if (d.level === 3) return getParent(getParent(d)).expanded ? 1 : 0.3;
                return 1;
            })
            .style("filter", "drop-shadow(0 2px 4px rgba(0,0,0,0.2))");
        
        // Node text
        nodeUpdate.selectAll("text").remove();
        nodeUpdate.append("text")
            .attr("text-anchor", "middle")
            .attr("dy", "0.3em")
            .style("font-size", d => d.level === 0 ? "14px" : "12px")
            .style("font-weight", d => d.level === 0 ? "bold" : "normal")
            .style("fill", "white")
            .style("pointer-events", "none")
            .text(d => d.name);
        
        // Expansion indicator
        nodeUpdate.selectAll("circle").remove();
        nodeUpdate.filter(d => d.children && d.children.length > 0)
            .append("circle")
            .attr("cx", d => d.name.length * 4 + 15)
            .attr("cy", 0)
            .attr("r", 8)
            .style("fill", "#f39c12")
            .style("stroke", "white")
            .style("stroke-width", 2);
        
        nodeUpdate.filter(d => d.children && d.children.length > 0)
            .append("text")
            .attr("x", d => d.name.length * 4 + 15)
            .attr("y", 0)
            .attr("text-anchor", "middle")
            .attr("dy", "0.3em")
            .style("font-size", "10px")
            .style("font-weight", "bold")
            .style("fill", "white")
            .style("pointer-events", "none")
            .text(d => d.expanded ? "−" : "+");
        
        // Position nodes
        nodeUpdate.attr("transform", d => `translate(${d.x}, ${d.y})`);
        
        // Click handler
        nodeUpdate.on("click", function(event, d) {
            if (d.children && d.children.length > 0) {
                d.expanded = !d.expanded;
                updateVisualization();
            }
        })
        .on("mouseover", function(event, d) {
            d3.select(this).select("rect")
                .style("transform", "scale(1.05)");
            
            // Show tooltip
            showTooltip(d, event);
        })
        .on("mouseout", function(event, d) {
            d3.select(this).select("rect")
                .style("transform", "scale(1)");
            
            hideTooltip();
        });
        
        nodes.exit().remove();
    }
    
    function getParent(node) {
        for (let link of allLinks) {
            if (link.target === node) {
                return link.source;
            }
        }
        return null;
    }
    
    function updateVisualization() {
        updateLinks();
        updateNodes();
    }
    
    // Tooltip
    const tooltip = d3.select("body").append("div")
        .style("position", "absolute")
        .style("background", "rgba(0,0,0,0.8)")
        .style("color", "white")
        .style("padding", "8px")
        .style("border-radius", "4px")
        .style("font-size", "12px")
        .style("pointer-events", "none")
        .style("opacity", 0)
        .style("z-index", "10000");
    
    function showTooltip(d, event) {
        let content = `<strong>${d.name}</strong><br/>`;
        if (d.level === 0) content += "Root problem - click to explore";
        else if (d.children) content += "Click to expand/collapse";
        else content += "Leaf node - specific issue to address";
        
        tooltip.style("opacity", 1)
            .html(content)
            .style("left", (event.pageX + 10) + "px")
            .style("top", (event.pageY - 10) + "px");
    }
    
    function hideTooltip() {
        tooltip.style("opacity", 0);
    }
    
    // Instructions
    svg.append("text")
        .attr("x", 50)
        .attr("y", height - 30)
        .style("font-size", "14px")
        .style("fill", "#636e72")
        .text("💡 Click nodes with + to expand the tree and explore the problem breakdown");
    
    // MECE principle note
    const meceNote = svg.append("g").attr("transform", "translate(50, 380)");
    
    meceNote.append("rect")
        .attr("width", 300)
        .attr("height", 80)
        .style("fill", "#f8f9fa")
        .style("stroke", "#6c5ce7")
        .style("stroke-width", 2)
        .style("rx", 8);
    
    meceNote.append("text")
        .attr("x", 150)
        .attr("y", 20)
        .attr("text-anchor", "middle")
        .style("font-size", "14px")
        .style("font-weight", "bold")
        .style("fill", "#6c5ce7")
        .text("MECE Principle");
    
    meceNote.append("text")
        .attr("x", 15)
        .attr("y", 40)
        .style("font-size", "11px")
        .style("fill", "#2d3436")
        .text("Mutually Exclusive: No overlap between categories");
    
    meceNote.append("text")
        .attr("x", 15)
        .attr("y", 55)
        .style("font-size", "11px")
        .style("fill", "#2d3436")
        .text("Collectively Exhaustive: Covers all possibilities");
    
    // Initial render
    updateVisualization();
}
</script>

#### ⭐ Step 3: Prioritize Issues

**Goal:** Focus resources on the most critical issues.

**Techniques:**

- **Impact-Feasibility Matrix:** A 2x2 grid to plot tasks based on their potential impact and ease of implementation
- **Pareto Principle (80/20 Rule):** Identify the 20% of causes that are responsible for 80% of the effects

#### 📊 Interactive Impact-Feasibility Matrix

<div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 75%, #4facfe 100%); padding: 20px; border-radius: 12px; margin: 20px 0; box-shadow: 0 8px 32px rgba(0,0,0,0.1);">
<div id="impact-feasibility-container" style="background: rgba(255,255,255,0.95); border-radius: 8px; padding: 15px;"></div>
</div>

<script is:inline>
if (typeof d3 === 'undefined') {
    const script = document.createElement('script');
    script.src = 'https://d3js.org/d3.v7.min.js';
    script.onload = function() {
        initImpactFeasibilityViz();
    };
    document.head.appendChild(script);
} else {
    initImpactFeasibilityViz();
}

function initImpactFeasibilityViz() {
    const container = d3.select("#impact-feasibility-container");
    const width = 600;
    const height = 500;
    const margin = {top: 50, right: 50, bottom: 80, left: 80};
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;
    
    const svg = container.append("svg")
        .attr("viewBox", `0 0 ${width} ${height}`)
        .style("width", "100%")
        .style("height", "auto");
    
    // Add title
    svg.append("text")
        .attr("x", width/2)
        .attr("y", 25)
        .attr("text-anchor", "middle")
        .style("font-size", "18px")
        .style("font-weight", "bold")
        .style("fill", "#2d3436")
        .text("Impact-Feasibility Priority Matrix");
    
    const mainGroup = svg.append("g")
        .attr("transform", `translate(${margin.left}, ${margin.top})`);
    
    // Create scales
    const xScale = d3.scaleLinear()
        .domain([0, 10])
        .range([0, innerWidth]);
    
    const yScale = d3.scaleLinear()
        .domain([0, 10])
        .range([innerHeight, 0]);
    
    // Draw quadrant backgrounds
    const quadrants = [
        {x: 0, y: 0, width: innerWidth/2, height: innerHeight/2, label: "Deprioritize/Avoid", color: "#fab1a0", priority: "Low"},
        {x: innerWidth/2, y: 0, width: innerWidth/2, height: innerHeight/2, label: "Quick Wins", color: "#fdcb6e", priority: "Medium"},
        {x: 0, y: innerHeight/2, width: innerWidth/2, height: innerHeight/2, label: "Consider/Plan", color: "#fd79a8", priority: "Medium-High"},
        {x: innerWidth/2, y: innerHeight/2, width: innerWidth/2, height: innerHeight/2, label: "Do First", color: "#00b894", priority: "High"}
    ];
    
    quadrants.forEach(quad => {
        mainGroup.append("rect")
            .attr("x", quad.x)
            .attr("y", quad.y)
            .attr("width", quad.width)
            .attr("height", quad.height)
            .style("fill", quad.color)
            .style("opacity", 0.2)
            .style("stroke", "white")
            .style("stroke-width", 2);
        
        // Quadrant labels
        mainGroup.append("text")
            .attr("x", quad.x + quad.width/2)
            .attr("y", quad.y + 20)
            .attr("text-anchor", "middle")
            .style("font-size", "14px")
            .style("font-weight", "bold")
            .style("fill", quad.color.replace('#', '#').replace(/[a-f0-9]{2}$/, '55'))
            .text(quad.label);
        
        mainGroup.append("text")
            .attr("x", quad.x + quad.width/2)
            .attr("y", quad.y + 40)
            .attr("text-anchor", "middle")
            .style("font-size", "12px")
            .style("fill", "#636e72")
            .text(`Priority: ${quad.priority}`);
    });
    
    // Sample tasks/projects
    const tasks = [
        {name: "UI Redesign", feasibility: 8, impact: 9, type: "product"},
        {name: "AI Integration", feasibility: 3, impact: 9, type: "technology"},
        {name: "Bug Fixes", feasibility: 9, impact: 4, type: "maintenance"},
        {name: "Team Training", feasibility: 7, impact: 6, type: "people"},
        {name: "Documentation", feasibility: 8, impact: 3, type: "process"},
        {name: "Security Audit", feasibility: 5, impact: 8, type: "security"},
        {name: "Performance Opt", feasibility: 6, impact: 7, type: "performance"},
        {name: "New Feature A", feasibility: 4, impact: 2, type: "feature"},
        {name: "Database Migration", feasibility: 2, impact: 7, type: "infrastructure"},
        {name: "User Research", feasibility: 9, impact: 8, type: "research"}
    ];
    
    const colorScale = d3.scaleOrdinal()
        .domain(["product", "technology", "maintenance", "people", "process", "security", "performance", "feature", "infrastructure", "research"])
        .range(["#6c5ce7", "#e17055", "#00b894", "#f39c12", "#d63031", "#a29bfe", "#fd79a8", "#fdcb6e", "#74b9ff", "#00cec9"]);
    
    // Draw axes
    mainGroup.append("g")
        .attr("transform", `translate(0, ${innerHeight})`)
        .call(d3.axisBottom(xScale).ticks(5))
        .selectAll("text")
        .style("font-size", "12px");
    
    mainGroup.append("g")
        .call(d3.axisLeft(yScale).ticks(5))
        .selectAll("text")
        .style("font-size", "12px");
    
    // Axis labels
    svg.append("text")
        .attr("x", width/2)
        .attr("y", height - 20)
        .attr("text-anchor", "middle")
        .style("font-size", "14px")
        .style("font-weight", "bold")
        .style("fill", "#2d3436")
        .text("Feasibility (How easy to implement)");
    
    svg.append("text")
        .attr("transform", "rotate(-90)")
        .attr("x", -height/2)
        .attr("y", 20)
        .attr("text-anchor", "middle")
        .style("font-size", "14px")
        .style("font-weight", "bold")
        .style("fill", "#2d3436")
        .text("Impact (Business Value)");
    
    // Draw task points
    const taskGroups = mainGroup.selectAll(".task")
        .data(tasks)
        .enter()
        .append("g")
        .attr("class", "task")
        .attr("transform", d => `translate(${xScale(d.feasibility)}, ${yScale(d.impact)})`)
        .style("cursor", "pointer");
    
    taskGroups.append("circle")
        .attr("r", 8)
        .style("fill", d => colorScale(d.type))
        .style("stroke", "white")
        .style("stroke-width", 2)
        .style("filter", "drop-shadow(0 2px 4px rgba(0,0,0,0.3))");
    
    taskGroups.append("text")
        .attr("x", 12)
        .attr("y", 4)
        .style("font-size", "11px")
        .style("font-weight", "bold")
        .style("fill", "#2d3436")
        .text(d => d.name);
    
    // Hover effects
    taskGroups.on("mouseover", function(event, d) {
        d3.select(this).select("circle")
            .transition()
            .duration(200)
            .attr("r", 12);
        
        // Show detailed tooltip
        const tooltip = svg.append("g")
            .attr("id", "task-tooltip")
            .attr("transform", `translate(${xScale(d.feasibility) + margin.left + 15}, ${yScale(d.impact) + margin.top - 15})`);
        
        const tooltipBg = tooltip.append("rect")
            .attr("width", 150)
            .attr("height", 60)
            .style("fill", "rgba(0,0,0,0.8)")
            .style("rx", 6);
        
        tooltip.append("text")
            .attr("x", 10)
            .attr("y", 18)
            .style("font-size", "12px")
            .style("font-weight", "bold")
            .style("fill", "white")
            .text(d.name);
        
        tooltip.append("text")
            .attr("x", 10)
            .attr("y", 35)
            .style("font-size", "11px")
            .style("fill", "#f1c40f")
            .text(`Impact: ${d.impact}/10`);
        
        tooltip.append("text")
            .attr("x", 10)
            .attr("y", 50)
            .style("font-size", "11px")
            .style("fill", "#74b9ff")
            .text(`Feasibility: ${d.feasibility}/10`);
    })
    .on("mouseout", function(event, d) {
        d3.select(this).select("circle")
            .transition()
            .duration(200)
            .attr("r", 8);
        
        svg.select("#task-tooltip").remove();
    });
    
    // Add grid lines
    mainGroup.selectAll(".grid-line-x")
        .data(xScale.ticks(5))
        .enter()
        .append("line")
        .attr("class", "grid-line-x")
        .attr("x1", d => xScale(d))
        .attr("x2", d => xScale(d))
        .attr("y1", 0)
        .attr("y2", innerHeight)
        .style("stroke", "#ddd")
        .style("stroke-width", 1)
        .style("opacity", 0.5);
    
    mainGroup.selectAll(".grid-line-y")
        .data(yScale.ticks(5))
        .enter()
        .append("line")
        .attr("class", "grid-line-y")
        .attr("x1", 0)
        .attr("x2", innerWidth)
        .attr("y1", d => yScale(d))
        .attr("y2", d => yScale(d))
        .style("stroke", "#ddd")
        .style("stroke-width", 1)
        .style("opacity", 0.5);
    
    // Add priority legend
    const legend = svg.append("g").attr("transform", "translate(450, 420)");
    
    legend.append("text")
        .attr("x", 0)
        .attr("y", 0)
        .style("font-size", "12px")
        .style("font-weight", "bold")
        .style("fill", "#2d3436")
        .text("Priority Guide:");
    
    const priorityItems = [
        {color: "#00b894", text: "Do First: High impact + feasible"},
        {color: "#fd79a8", text: "Consider: High impact, plan carefully"},
        {color: "#fdcb6e", text: "Quick Wins: Easy to implement"},
        {color: "#fab1a0", text: "Avoid: Low value initiatives"}
    ];
    
    priorityItems.forEach((item, i) => {
        legend.append("circle")
            .attr("cx", 5)
            .attr("cy", 20 + i * 15)
            .attr("r", 4)
            .style("fill", item.color);
        
        legend.append("text")
            .attr("x", 15)
            .attr("y", 24 + i * 15)
            .style("font-size", "10px")
            .style("fill", "#636e72")
            .text(item.text);
    });
}
</script>

#### 🗄️ Step 4: Data Collection

**Goal:** Gather the necessary data to analyze hypotheses.

**Methods:** Interviews, surveys, system logs, databases, A/B testing, etc.

**Data Quality:** Ensure data is Accurate, Complete, Consistent, Timely, and Valid.

#### 📊 Step 5: Data Analysis

**Goal:** Extract insights from the data.

**Process:** Clean data → Exploratory Data Analysis (EDA) → Diagnostic Analysis → Generate actionable insights.

#### 💡 Step 6: Design Solution

**Goal:** Develop potential solutions based on the analysis.

**Techniques:** Brainstorming, SCAMPER, prototyping, A/B testing.

#### 🚀 Step 7: Implement & Present

**Goal:** Execute the chosen solution and communicate the results effectively.

**Technique:**

- **Pyramid Principle:** Structure your communication by starting with the main conclusion, followed by supporting arguments, and finally the data evidence

#### 🔺 Interactive Pyramid Principle Structure

<div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 75%, #4facfe 100%); padding: 20px; border-radius: 12px; margin: 20px 0; box-shadow: 0 8px 32px rgba(0,0,0,0.1);">
<div id="pyramid-principle-container" style="background: rgba(255,255,255,0.95); border-radius: 8px; padding: 15px;"></div>
</div>

<script is:inline>
if (typeof d3 === 'undefined') {
    const script = document.createElement('script');
    script.src = 'https://d3js.org/d3.v7.min.js';
    script.onload = function() {
        initPyramidPrincipleViz();
    };
    document.head.appendChild(script);
} else {
    initPyramidPrincipleViz();
}

function initPyramidPrincipleViz() {
    const container = d3.select("#pyramid-principle-container");
    const width = 800;
    const height = 500;
    
    const svg = container.append("svg")
        .attr("viewBox", `0 0 ${width} ${height}`)
        .style("width", "100%")
        .style("height", "auto");
    
    // Add title
    svg.append("text")
        .attr("x", width/2)
        .attr("y", 25)
        .attr("text-anchor", "middle")
        .style("font-size", "20px")
        .style("font-weight", "bold")
        .style("fill", "#2d3436")
        .text("Pyramid Principle: Communication Structure");
    
    const centerX = width / 2;
    const pyramidGroup = svg.append("g").attr("transform", `translate(${centerX}, 70)`);
    
    // Pyramid structure data
    const pyramidData = {
        top: {
            x: 0,
            y: 0,
            width: 280,
            height: 60,
            text: "Main Insight / Recommendation",
            subtext: "Answer the key question first",
            color: "#6c5ce7",
            level: 1
        },
        middle: [
            {
                x: -200,
                y: 100,
                width: 120,
                height: 50,
                text: "Supporting Argument #1",
                subtext: "Key reason",
                color: "#00b894",
                level: 2
            },
            {
                x: -40,
                y: 100,
                width: 120,
                height: 50,
                text: "Supporting Argument #2",
                subtext: "Key reason",
                color: "#00b894",
                level: 2
            },
            {
                x: 120,
                y: 100,
                width: 120,
                height: 50,
                text: "Supporting Argument #3",
                subtext: "Key reason",
                color: "#00b894",
                level: 2
            }
        ],
        bottom: [
            {
                x: -230,
                y: 200,
                width: 80,
                height: 40,
                text: "Data Point A",
                color: "#fd79a8",
                level: 3
            },
            {
                x: -140,
                y: 200,
                width: 80,
                height: 40,
                text: "Evidence B",
                color: "#fd79a8",
                level: 3
            },
            {
                x: -70,
                y: 200,
                width: 80,
                height: 40,
                text: "Research C",
                color: "#fd79a8",
                level: 3
            },
            {
                x: 20,
                y: 200,
                width: 80,
                height: 40,
                text: "Analysis D",
                color: "#fd79a8",
                level: 3
            },
            {
                x: 110,
                y: 200,
                width: 80,
                height: 40,
                text: "Case Study E",
                color: "#fd79a8",
                level: 3
            },
            {
                x: 200,
                y: 200,
                width: 80,
                height: 40,
                text: "Metrics F",
                color: "#fd79a8",
                level: 3
            }
        ]
    };
    
    // Draw connecting lines
    function drawConnections() {
        // Top to middle connections
        pyramidData.middle.forEach(block => {
            pyramidGroup.append("line")
                .attr("x1", pyramidData.top.x)
                .attr("y1", pyramidData.top.y + pyramidData.top.height)
                .attr("x2", block.x + block.width/2)
                .attr("y2", block.y)
                .style("stroke", "#ddd")
                .style("stroke-width", 2);
        });
        
        // Middle to bottom connections
        pyramidData.bottom.forEach((block, i) => {
            const middleIndex = Math.floor(i / 2);
            if (middleIndex < pyramidData.middle.length) {
                const middleBlock = pyramidData.middle[middleIndex];
                pyramidGroup.append("line")
                    .attr("x1", middleBlock.x + middleBlock.width/2)
                    .attr("y1", middleBlock.y + middleBlock.height)
                    .attr("x2", block.x + block.width/2)
                    .attr("y2", block.y)
                    .style("stroke", "#ddd")
                    .style("stroke-width", 2);
            }
        });
    }
    
    drawConnections();
    
    // Draw pyramid blocks
    function drawBlock(block, index = 0) {
        const blockGroup = pyramidGroup.append("g")
            .attr("class", `pyramid-block level-${block.level}`)
            .style("cursor", "pointer");
        
        // Block background
        const rect = blockGroup.append("rect")
            .attr("x", block.x - block.width/2)
            .attr("y", block.y)
            .attr("width", block.width)
            .attr("height", block.height)
            .style("fill", block.color)
            .style("stroke", "white")
            .style("stroke-width", 3)
            .style("rx", 8)
            .style("filter", "drop-shadow(0 4px 8px rgba(0,0,0,0.2))")
            .style("transition", "all 0.3s ease");
        
        // Block text
        const textGroup = blockGroup.append("g");
        
        // Main text
        const words = block.text.split(' ');
        const lines = [];
        let currentLine = [];
        const maxCharsPerLine = block.level === 1 ? 25 : block.level === 2 ? 15 : 12;
        
        words.forEach(word => {
            currentLine.push(word);
            if (currentLine.join(' ').length > maxCharsPerLine) {
                lines.push(currentLine.slice(0, -1).join(' '));
                currentLine = [word];
            }
        });
        if (currentLine.length > 0) {
            lines.push(currentLine.join(' '));
        }
        
        lines.forEach((line, i) => {
            textGroup.append("text")
                .attr("x", block.x)
                .attr("y", block.y + 20 + i * 14)
                .attr("text-anchor", "middle")
                .style("font-size", block.level === 1 ? "14px" : block.level === 2 ? "12px" : "10px")
                .style("font-weight", "bold")
                .style("fill", "white")
                .style("pointer-events", "none")
                .text(line);
        });
        
        // Subtext for top and middle levels
        if (block.subtext) {
            textGroup.append("text")
                .attr("x", block.x)
                .attr("y", block.y + block.height - 8)
                .attr("text-anchor", "middle")
                .style("font-size", "10px")
                .style("fill", "rgba(255,255,255,0.8)")
                .style("pointer-events", "none")
                .text(block.subtext);
        }
        
        // Hover effects
        blockGroup.on("mouseover", function() {
            rect.style("transform", "scale(1.05)");
            
            // Show example content
            showExampleContent(block, blockGroup);
        })
        .on("mouseout", function() {
            rect.style("transform", "scale(1)");
            hideExampleContent();
        });
        
        return blockGroup;
    }
    
    // Draw all blocks
    drawBlock(pyramidData.top);
    pyramidData.middle.forEach((block, i) => drawBlock(block, i));
    pyramidData.bottom.forEach((block, i) => drawBlock(block, i));
    
    // Example content system
    function showExampleContent(block, blockGroup) {
        const examples = {
            "Main Insight / Recommendation": {
                title: "Example: Sales Decline Analysis",
                content: "We should implement customer retention strategy immediately to address 15% quarterly revenue decline"
            },
            "Supporting Argument #1": {
                title: "Customer Churn Analysis",
                content: "Customer retention rate dropped from 85% to 70% in Q3"
            },
            "Supporting Argument #2": {
                title: "Market Competition",
                content: "Two new competitors captured 20% market share"
            },
            "Supporting Argument #3": {
                title: "Product Issues",
                content: "Customer satisfaction scores decreased by 25 points"
            },
            "Data Point A": {
                title: "Survey Results",
                content: "500 customer interviews"
            },
            "Evidence B": {
                title: "Usage Analytics",
                content: "Dashboard metrics"
            }
        };
        
        const example = examples[block.text] || {
            title: "Evidence/Data",
            content: "Supporting facts and figures"
        };
        
        const tooltip = svg.append("g")
            .attr("id", "pyramid-tooltip")
            .attr("transform", `translate(${block.x + centerX + 150}, ${block.y + 100})`);
        
        const tooltipBg = tooltip.append("rect")
            .attr("width", 200)
            .attr("height", 60)
            .style("fill", "rgba(0,0,0,0.9)")
            .style("stroke", block.color)
            .style("stroke-width", 2)
            .style("rx", 8);
        
        tooltip.append("text")
            .attr("x", 10)
            .attr("y", 20)
            .style("font-size", "12px")
            .style("font-weight", "bold")
            .style("fill", block.color)
            .text(example.title);
        
        // Word wrap for content
        const words = example.content.split(' ');
        const lines = [];
        let currentLine = [];
        
        words.forEach(word => {
            currentLine.push(word);
            if (currentLine.join(' ').length > 30) {
                lines.push(currentLine.slice(0, -1).join(' '));
                currentLine = [word];
            }
        });
        if (currentLine.length > 0) {
            lines.push(currentLine.join(' '));
        }
        
        lines.forEach((line, i) => {
            tooltip.append("text")
                .attr("x", 10)
                .attr("y", 38 + i * 12)
                .style("font-size", "10px")
                .style("fill", "white")
                .text(line);
        });
    }
    
    function hideExampleContent() {
        svg.select("#pyramid-tooltip").remove();
    }
    
    // Add instruction text
    svg.append("text")
        .attr("x", 50)
        .attr("y", height - 50)
        .style("font-size", "14px")
        .style("fill", "#636e72")
        .text("💡 Hover over blocks to see communication structure examples");
    
    // Add principles explanation
    const principlesGroup = svg.append("g").attr("transform", "translate(500, 320)");
    
    principlesGroup.append("rect")
        .attr("width", 250)
        .attr("height", 120)
        .style("fill", "#f8f9fa")
        .style("stroke", "#6c5ce7")
        .style("stroke-width", 2)
        .style("rx", 8);
    
    principlesGroup.append("text")
        .attr("x", 125)
        .attr("y", 20)
        .attr("text-anchor", "middle")
        .style("font-size", "14px")
        .style("font-weight", "bold")
        .style("fill", "#6c5ce7")
        .text("Pyramid Principle Benefits");
    
    const benefits = [
        "• Start with the conclusion",
        "• Group supporting arguments",
        "• Order by importance",
        "• Support with evidence",
        "• Clear logical flow"
    ];
    
    benefits.forEach((benefit, i) => {
        principlesGroup.append("text")
            .attr("x", 15)
            .attr("y", 40 + i * 15)
            .style("font-size", "11px")
            .style("fill", "#2d3436")
            .text(benefit);
    });
}
</script>

## 🛠️ 6. TA-Exercise: Practical Applications

This section covers the practical exercises applying the concepts learned.

### 🎨 6.1. Image Processing: Grayscale Conversion

A color image (3 channels: R, G, B) can be converted to a grayscale image (1 channel) using several methods.

#### Conversion Methods

**Lightness Method:** Averages the most and least prominent colors.
```
Grayscale = (max(R, G, B) + min(R, G, B)) / 2
```

**Average Method:** Averages all three channels.
```
Grayscale = (R + G + B) / 3
```

**Luminosity Method:** A weighted average that accounts for human perception (we are more sensitive to green). This is generally the best method.
```
Grayscale = 0.21*R + 0.72*G + 0.07*B
```

#### Implementation (Luminosity):

```python
# Assuming 'img' is a NumPy array of shape (H, W, 3)
gray_img = 0.21*img[:,:,0] + 0.72*img[:,:,1] + 0.07*img[:,:,2]
```

### 🎬 6.2. Image Processing: Background Subtraction
This technique, often used with green screens, involves replacing the background of one image with another.

#### 📸 Interactive Background Subtraction Process

<div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 75%, #4facfe 100%); padding: 20px; border-radius: 12px; margin: 20px 0; box-shadow: 0 8px 32px rgba(0,0,0,0.1);">
<div id="background-subtraction-container" style="background: rgba(255,255,255,0.95); border-radius: 8px; padding: 15px;"></div>
</div>

<script is:inline>
if (typeof d3 === 'undefined') {
    const script = document.createElement('script');
    script.src = 'https://d3js.org/d3.v7.min.js';
    script.onload = function() {
        initBackgroundSubtractionViz();
    };
    document.head.appendChild(script);
} else {
    initBackgroundSubtractionViz();
}

function initBackgroundSubtractionViz() {
    const container = d3.select("#background-subtraction-container");
    const width = 900;
    const height = 650;
    
    const svg = container.append("svg")
        .attr("viewBox", `0 0 ${width} ${height}`)
        .style("width", "100%")
        .style("height", "auto");
    
    // Add title
    svg.append("text")
        .attr("x", width/2)
        .attr("y", 25)
        .attr("text-anchor", "middle")
        .style("font-size", "20px")
        .style("font-weight", "bold")
        .style("fill", "#2d3436")
        .text("Background Subtraction Process Flow");
    
    // Panel dimensions
    const panelWidth = 120;
    const panelHeight = 90;
    const panelSpacing = 140;
    
    // Process steps data
    const processSteps = [
        {
            id: 1,
            title: "Object Image",
            subtitle: "Person on green screen",
            x: 50,
            y: 80,
            color: "#6c5ce7",
            description: "Original image with subject against green background",
            pattern: "greenscreen"
        },
        {
            id: 2,
            title: "Original Background",
            subtitle: "Clean green screen",
            x: 50 + panelSpacing,
            y: 80,
            color: "#00b894",
            description: "Reference background without any objects",
            pattern: "background"
        },
        {
            id: 3,
            title: "Foreground Mask",
            subtitle: "B&W silhouette",
            x: 50 + panelSpacing * 2,
            y: 80,
            color: "#e17055",
            description: "Binary mask showing object vs background",
            pattern: "mask"
        },
        {
            id: 4,
            title: "Target Background",
            subtitle: "New scene",
            x: 50,
            y: 250,
            color: "#f39c12",
            description: "Desired background for final composition",
            pattern: "newbg"
        },
        {
            id: 5,
            title: "Segmented Object",
            subtitle: "Isolated subject",
            x: 50 + panelSpacing,
            y: 250,
            color: "#d63031",
            description: "Object extracted using the mask",
            pattern: "segmented"
        },
        {
            id: 6,
            title: "Final Output",
            subtitle: "Composite result",
            x: 50 + panelSpacing * 2,
            y: 250,
            color: "#a29bfe",
            description: "Object composited over new background",
            pattern: "final"
        }
    ];
    
    // Create patterns for visual representation
    const defs = svg.append("defs");
    
    // Green screen pattern
    const greenPattern = defs.append("pattern")
        .attr("id", "greenscreen")
        .attr("patternUnits", "userSpaceOnUse")
        .attr("width", 20)
        .attr("height", 20);
    
    greenPattern.append("rect")
        .attr("width", 20)
        .attr("height", 20)
        .style("fill", "#2ecc71");
    
    greenPattern.append("circle")
        .attr("cx", 10)
        .attr("cy", 10)
        .attr("r", 6)
        .style("fill", "#3498db");
    
    // Background pattern
    const bgPattern = defs.append("pattern")
        .attr("id", "background")
        .attr("patternUnits", "userSpaceOnUse")
        .attr("width", 20)
        .attr("height", 20);
    
    bgPattern.append("rect")
        .attr("width", 20)
        .attr("height", 20)
        .style("fill", "#27ae60");
    
    // Mask pattern
    const maskPattern = defs.append("pattern")
        .attr("id", "mask")
        .attr("patternUnits", "userSpaceOnUse")
        .attr("width", 20)
        .attr("height", 20);
    
    maskPattern.append("rect")
        .attr("width", 20)
        .attr("height", 20)
        .style("fill", "#2c3e50");
    
    maskPattern.append("circle")
        .attr("cx", 10)
        .attr("cy", 10)
        .attr("r", 6)
        .style("fill", "white");
    
    // New background pattern
    const newBgPattern = defs.append("pattern")
        .attr("id", "newbg")
        .attr("patternUnits", "userSpaceOnUse")
        .attr("width", 15)
        .attr("height", 15);
    
    newBgPattern.append("rect")
        .attr("width", 15)
        .attr("height", 15)
        .style("fill", "#e74c3c");
    
    newBgPattern.append("rect")
        .attr("x", 5)
        .attr("y", 5)
        .attr("width", 5)
        .attr("height", 5)
        .style("fill", "#f39c12");
    
    // Segmented pattern
    const segmentedPattern = defs.append("pattern")
        .attr("id", "segmented")
        .attr("patternUnits", "userSpaceOnUse")
        .attr("width", 20)
        .attr("height", 20);
    
    segmentedPattern.append("rect")
        .attr("width", 20)
        .attr("height", 20)
        .style("fill", "none")
        .style("stroke", "#34495e")
        .style("stroke-width", 1)
        .style("stroke-dasharray", "2,2");
    
    segmentedPattern.append("circle")
        .attr("cx", 10)
        .attr("cy", 10)
        .attr("r", 6)
        .style("fill", "#3498db");
    
    // Final pattern
    const finalPattern = defs.append("pattern")
        .attr("id", "final")
        .attr("patternUnits", "userSpaceOnUse")
        .attr("width", 20)
        .attr("height", 20);
    
    finalPattern.append("rect")
        .attr("width", 20)
        .attr("height", 20)
        .style("fill", "#e74c3c");
    
    finalPattern.append("circle")
        .attr("cx", 10)
        .attr("cy", 10)
        .attr("r", 6)
        .style("fill", "#3498db");
    
    // Draw panels
    processSteps.forEach((step, i) => {
        const stepGroup = svg.append("g")
            .attr("class", `step-${step.id}`)
            .style("cursor", "pointer");
        
        // Panel border
        stepGroup.append("rect")
            .attr("x", step.x)
            .attr("y", step.y)
            .attr("width", panelWidth)
            .attr("height", panelHeight)
            .style("fill", "white")
            .style("stroke", step.color)
            .style("stroke-width", 3)
            .style("rx", 8)
            .style("filter", "drop-shadow(0 4px 8px rgba(0,0,0,0.2))");
        
        // Panel content area
        stepGroup.append("rect")
            .attr("x", step.x + 10)
            .attr("y", step.y + 25)
            .attr("width", panelWidth - 20)
            .attr("height", panelHeight - 35)
            .style("fill", `url(#${step.pattern})`)
            .style("stroke", step.color)
            .style("stroke-width", 1)
            .style("rx", 4);
        
        // Panel number
        stepGroup.append("circle")
            .attr("cx", step.x + 15)
            .attr("cy", step.y + 15)
            .attr("r", 10)
            .style("fill", step.color)
            .style("stroke", "white")
            .style("stroke-width", 2);
        
        stepGroup.append("text")
            .attr("x", step.x + 15)
            .attr("y", step.y + 20)
            .attr("text-anchor", "middle")
            .style("font-size", "12px")
            .style("font-weight", "bold")
            .style("fill", "white")
            .text(step.id);
        
        // Panel title
        stepGroup.append("text")
            .attr("x", step.x + panelWidth/2)
            .attr("y", step.y + panelHeight + 20)
            .attr("text-anchor", "middle")
            .style("font-size", "12px")
            .style("font-weight", "bold")
            .style("fill", step.color)
            .text(step.title);
        
        // Panel subtitle
        stepGroup.append("text")
            .attr("x", step.x + panelWidth/2)
            .attr("y", step.y + panelHeight + 35)
            .attr("text-anchor", "middle")
            .style("font-size", "10px")
            .style("fill", "#636e72")
            .text(step.subtitle);
        
        // Hover effects
        stepGroup.on("mouseover", function() {
            d3.select(this).select("rect")
                .style("transform", "scale(1.05)");
            
            showStepDetails(step);
        })
        .on("mouseout", function() {
            d3.select(this).select("rect")
                .style("transform", "scale(1)");
            
            hideStepDetails();
        });
    });
    
    // Draw flow arrows
    const arrows = [
        {from: 1, to: 3, type: "subtract"},
        {from: 2, to: 3, type: "subtract"},
        {from: 1, to: 5, type: "apply"},
        {from: 3, to: 5, type: "apply"},
        {from: 4, to: 6, type: "composite"},
        {from: 5, to: 6, type: "composite"}
    ];
    
    arrows.forEach(arrow => {
        const fromStep = processSteps.find(s => s.id === arrow.from);
        const toStep = processSteps.find(s => s.id === arrow.to);
        
        const fromX = fromStep.x + panelWidth/2;
        const fromY = fromStep.y + panelHeight;
        const toX = toStep.x + panelWidth/2;
        const toY = toStep.y;
        
        // Calculate arrow path
        let path;
        if (arrow.type === "subtract") {
            // Curved arrow for subtraction operations
            const midY = fromY + 30;
            path = `M ${fromX} ${fromY} Q ${(fromX + toX)/2} ${midY} ${toX} ${toY}`;
        } else {
            // Straight arrow for other operations
            path = `M ${fromX} ${fromY} L ${toX} ${toY}`;
        }
        
        svg.append("path")
            .attr("d", path)
            .style("stroke", arrow.type === "subtract" ? "#e74c3c" : "#3498db")
            .style("stroke-width", 2)
            .style("fill", "none")
            .attr("marker-end", `url(#arrow-${arrow.type})`);
        
        // Arrow label
        const midX = (fromX + toX) / 2;
        const midY = arrow.type === "subtract" ? fromY + 30 : (fromY + toY) / 2;
        
        svg.append("text")
            .attr("x", midX)
            .attr("y", midY - 5)
            .attr("text-anchor", "middle")
            .style("font-size", "10px")
            .style("font-weight", "bold")
            .style("fill", arrow.type === "subtract" ? "#e74c3c" : "#3498db")
            .text(arrow.type === "subtract" ? "subtract" : arrow.type);
    });
    
    // Arrow markers
    defs.append("marker")
        .attr("id", "arrow-subtract")
        .attr("markerWidth", 10)
        .attr("markerHeight", 7)
        .attr("refX", 9)
        .attr("refY", 3.5)
        .attr("orient", "auto")
        .append("polygon")
        .attr("points", "0 0, 10 3.5, 0 7")
        .style("fill", "#e74c3c");
    
    defs.append("marker")
        .attr("id", "arrow-apply")
        .attr("markerWidth", 10)
        .attr("markerHeight", 7)
        .attr("refX", 9)
        .attr("refY", 3.5)
        .attr("orient", "auto")
        .append("polygon")
        .attr("points", "0 0, 10 3.5, 0 7")
        .style("fill", "#3498db");
    
    defs.append("marker")
        .attr("id", "arrow-composite")
        .attr("markerWidth", 10)
        .attr("markerHeight", 7)
        .attr("refX", 9)
        .attr("refY", 3.5)
        .attr("orient", "auto")
        .append("polygon")
        .attr("points", "0 0, 10 3.5, 0 7")
        .style("fill", "#3498db");
    
    // Details panel
    function showStepDetails(step) {
        const detailsPanel = svg.append("g")
            .attr("id", "details-panel")
            .attr("transform", "translate(500, 400)");
        
        detailsPanel.append("rect")
            .attr("width", 350)
            .attr("height", 100)
            .style("fill", "rgba(0,0,0,0.9)")
            .style("stroke", step.color)
            .style("stroke-width", 2)
            .style("rx", 8);
        
        detailsPanel.append("text")
            .attr("x", 15)
            .attr("y", 25)
            .style("font-size", "14px")
            .style("font-weight", "bold")
            .style("fill", step.color)
            .text(`Step ${step.id}: ${step.title}`);
        
        detailsPanel.append("text")
            .attr("x", 15)
            .attr("y", 45)
            .style("font-size", "12px")
            .style("fill", "white")
            .text(step.description);
        
        // Add technical details
        const techDetails = {
            1: "cv2.imread('object.png')",
            2: "cv2.imread('background.png')",
            3: "cv2.absdiff() + cv2.threshold()",
            4: "cv2.imread('new_bg.jpg')",
            5: "np.where(mask, object, 0)",
            6: "np.where(mask, object, new_bg)"
        };
        
        detailsPanel.append("text")
            .attr("x", 15)
            .attr("y", 70)
            .style("font-size", "11px")
            .style("font-family", "monospace")
            .style("fill", "#f39c12")
            .text(`Code: ${techDetails[step.id]}`);
    }
    
    function hideStepDetails() {
        svg.select("#details-panel").remove();
    }
    
    // Add algorithm explanation
    const algoGroup = svg.append("g").attr("transform", "translate(50, 450)");
    
    algoGroup.append("text")
        .attr("x", 0)
        .attr("y", 15)
        .style("font-size", "16px")
        .style("font-weight", "bold")
        .style("fill", "#2d3436")
        .text("Algorithm Steps:");
    
    const steps = [
        "1. Capture object against green screen & clean background",
        "2. Calculate absolute difference between images",
        "3. Apply threshold to create binary mask",
        "4. Use mask to extract object and composite with new background"
    ];
    
    steps.forEach((step, i) => {
        algoGroup.append("text")
            .attr("x", 20)
            .attr("y", 40 + i * 20)
            .style("font-size", "12px")
            .style("fill", "#636e72")
            .text(step);
    });
    
    // Add instruction
    svg.append("text")
        .attr("x", 50)
        .attr("y", height - 20)
        .style("font-size", "14px")
        .style("fill", "#636e72")
        .text("💡 Hover over panels to see technical details and code examples");
}
</script>

#### 📝 Steps & Code Implementation:

##### 1. Read Images
Load the object image, original background, and target background. Ensure they are the same size.

```python
import cv2
import numpy as np

obj_img = cv2.imread('Object.png')
bg1_img = cv2.imread('GreenBackground.png')
bg2_img = cv2.imread('NewBackground.jpg')

# Resize images to be the same
IMG_SIZE = (obj_img.shape[1], obj_img.shape[0])
bg1_img = cv2.resize(bg1_img, IMG_SIZE)
bg2_img = cv2.resize(bg2_img, IMG_SIZE)
```

##### 2. Compute Difference
Find the absolute difference between the object image and the original background.

```python
diff = cv2.absdiff(bg1_img, obj_img)
diff_single_channel = np.mean(diff, axis=2)
```

##### 3. Create Binary Mask
Threshold the difference image to create a mask that separates the foreground (object) from the background.

```python
# Where the difference is low (background), value is 0. Where it's high (object), value is 255.
_, binary_mask = cv2.threshold(diff_single_channel.astype(np.uint8), 15, 255, cv2.THRESH_BINARY)

# Expand to 3 channels to apply to color image
binary_mask_3ch = np.stack((binary_mask,)*3, axis=-1)
```

##### 4. Replace Background
Use np.where to combine the images. Where the mask is 255 (object), use the object image's pixels. Otherwise, use the new background's pixels.

```python
output = np.where(binary_mask_3ch == 255, obj_img, bg2_img)
cv2.imwrite('final_output.png', output)
```

### 📊 6.3. Tabular Data Analysis

Using NumPy to perform quick analysis on tabular data (e.g., from a CSV file).

```python
import pandas as pd
import numpy as np

# Load data using pandas and convert to NumPy array
df = pd.read_csv('advertising.csv')
data = df.to_numpy()

# Get the 'Sales' column (last column)
sales = data[:, -1]

# 1. Get the maximum sales value
max_sales = np.max(sales)
print(f"Max Sales: {max_sales}")

# 2. Get the average value of the 'TV' column (first column)
tv_ads = data[:, 0]
mean_tv = np.mean(tv_ads)
print(f"Average TV spending: {mean_tv:.2f}")

# 3. Count how many records have Sales >= 20
high_sales_count = np.sum(sales >= 20)
print(f"Number of high sales records: {high_sales_count}")

# 4. Calculate the average 'Radio' spending for records where Sales >= 15
radio_ads = data[:, 1]
avg_radio_for_high_sales = np.mean(radio_ads[sales >= 15])
print(f"Average Radio for high sales: {avg_radio_for_high_sales:.2f}")
```

---

## 📈 Learning Progress Tracker

### 🎯 Learning Progress Dashboard

Track your mastery of Week 5 concepts with this clean progress tracker:

<div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 75%, #4facfe 100%); padding: 20px; border-radius: 12px; margin: 25px 0; box-shadow: 0 8px 32px rgba(0,0,0,0.1);">
<div style="background: white; border-radius: 8px; padding: 30px; box-shadow: 0 4px 20px rgba(0,0,0,0.1);">

<h4 style="text-align: center; color: #2d3436; margin-bottom: 25px; font-size: 20px;">📚 Week 5 Learning Tracker</h4>

<div style="display: flex; flex-wrap: wrap; gap: 20px; justify-content: center; margin-bottom: 30px;">

<!-- NumPy Basics -->
<div style="background: linear-gradient(135deg, #6c5ce7, #a29bfe); border-radius: 12px; padding: 20px; color: white; min-width: 280px; flex: 1; max-width: 320px;">
<h5 style="margin: 0 0 15px 0; font-size: 16px; font-weight: bold;">📊 NumPy Basics</h5>
<div style="space-y: 10px;">
<label style="display: block; margin-bottom: 10px; cursor: pointer;">
<input type="checkbox" style="margin-right: 8px; transform: scale(1.1);"> Arrays vs Lists
</label>
<label style="display: block; margin-bottom: 10px; cursor: pointer;">
<input type="checkbox" style="margin-right: 8px; transform: scale(1.1);"> Array Creation
</label>
<label style="display: block; margin-bottom: 10px; cursor: pointer;">
<input type="checkbox" style="margin-right: 8px; transform: scale(1.1);"> Vectorization
</label>
</div>
</div>

<!-- Advanced NumPy -->
<div style="background: linear-gradient(135deg, #00b894, #00cec9); border-radius: 12px; padding: 20px; color: white; min-width: 280px; flex: 1; max-width: 320px;">
<h5 style="margin: 0 0 15px 0; font-size: 16px; font-weight: bold;">🚀 Advanced NumPy</h5>
<div style="space-y: 10px;">
<label style="display: block; margin-bottom: 10px; cursor: pointer;">
<input type="checkbox" style="margin-right: 8px; transform: scale(1.1);"> Multi-dimensional Arrays
</label>
<label style="display: block; margin-bottom: 10px; cursor: pointer;">
<input type="checkbox" style="margin-right: 8px; transform: scale(1.1);"> Broadcasting
</label>
<label style="display: block; margin-bottom: 10px; cursor: pointer;">
<input type="checkbox" style="margin-right: 8px; transform: scale(1.1);"> Image Processing
</label>
</div>
</div>

<!-- Databases -->
<div style="background: linear-gradient(135deg, #e17055, #fd79a8); border-radius: 12px; padding: 20px; color: white; min-width: 280px; flex: 1; max-width: 320px;">
<h5 style="margin: 0 0 15px 0; font-size: 16px; font-weight: bold;">🗄️ Databases</h5>
<div style="space-y: 10px;">
<label style="display: block; margin-bottom: 10px; cursor: pointer;">
<input type="checkbox" style="margin-right: 8px; transform: scale(1.1);"> SQL vs NoSQL
</label>
<label style="display: block; margin-bottom: 10px; cursor: pointer;">
<input type="checkbox" style="margin-right: 8px; transform: scale(1.1);"> MongoDB Basics
</label>
</div>
</div>

<!-- Data Similarity -->
<div style="background: linear-gradient(135deg, #f39c12, #fdcb6e); border-radius: 12px; padding: 20px; color: white; min-width: 280px; flex: 1; max-width: 320px;">
<h5 style="margin: 0 0 15px 0; font-size: 16px; font-weight: bold;">🔢 Data Similarity</h5>
<div style="space-y: 10px;">
<label style="display: block; margin-bottom: 10px; cursor: pointer;">
<input type="checkbox" style="margin-right: 8px; transform: scale(1.1);"> Dot Product
</label>
<label style="display: block; margin-bottom: 10px; cursor: pointer;">
<input type="checkbox" style="margin-right: 8px; transform: scale(1.1);"> Cosine Similarity
</label>
</div>
</div>

<!-- Problem Solving -->
<div style="background: linear-gradient(135deg, #d63031, #e84393); border-radius: 12px; padding: 20px; color: white; min-width: 280px; flex: 1; max-width: 320px;">
<h5 style="margin: 0 0 15px 0; font-size: 16px; font-weight: bold;">🧠 Problem Solving</h5>
<div style="space-y: 10px;">
<label style="display: block; margin-bottom: 10px; cursor: pointer;">
<input type="checkbox" style="margin-right: 8px; transform: scale(1.1);"> 7-Step Framework
</label>
<label style="display: block; margin-bottom: 10px; cursor: pointer;">
<input type="checkbox" style="margin-right: 8px; transform: scale(1.1);"> Analysis Process
</label>
</div>
</div>

</div>

<!-- Progress Summary -->
<div style="background: linear-gradient(135deg, #74b9ff, #0984e3); border-radius: 12px; padding: 25px; color: white; text-align: center;">
<h5 style="margin: 0 0 15px 0; font-size: 18px;">🎯 Overall Progress</h5>
<div style="display: flex; align-items: center; justify-content: center; gap: 20px; margin-bottom: 15px;">
<div style="font-size: 24px; font-weight: bold;">
<span id="completed-count">0</span>/<span id="total-count">12</span>
</div>
<div style="font-size: 18px;">Topics Mastered</div>
</div>
<div style="background: rgba(255,255,255,0.3); border-radius: 20px; height: 12px; overflow: hidden; margin-bottom: 15px;">
<div id="progress-fill" style="background: white; height: 100%; width: 0%; transition: width 0.3s ease; border-radius: 20px;"></div>
</div>
<div id="progress-message" style="font-size: 14px; opacity: 0.9;">🌟 Start checking off topics to track your progress!</div>
</div>

</div>
</div>

<script is:inline>
document.addEventListener('DOMContentLoaded', function() {
    // Get all checkboxes
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const completedCount = document.getElementById('completed-count');
    const progressFill = document.getElementById('progress-fill');
    const progressMessage = document.getElementById('progress-message');
    const totalTopics = checkboxes.length;
    
    // Load saved progress
    const savedProgress = localStorage.getItem('week5-clean-progress');
    if (savedProgress) {
        const progress = JSON.parse(savedProgress);
        checkboxes.forEach((checkbox, index) => {
            if (progress[index]) {
                checkbox.checked = true;
            }
        });
    }
    
    function updateProgress() {
        const checkedCount = document.querySelectorAll('input[type="checkbox"]:checked').length;
        const percentage = (checkedCount / totalTopics) * 100;
        
        // Update display
        completedCount.textContent = checkedCount;
        progressFill.style.width = percentage + '%';
        
        // Update message based on progress
        if (checkedCount === 0) {
            progressMessage.textContent = '🌟 Start checking off topics to track your progress!';
        } else if (checkedCount < totalTopics / 3) {
            progressMessage.textContent = '🚀 Great start! Keep learning!';
        } else if (checkedCount < totalTopics * 2/3) {
            progressMessage.textContent = '💪 You\'re making excellent progress!';
        } else if (checkedCount < totalTopics) {
            progressMessage.textContent = '🔥 Almost there! You\'re doing amazing!';
        } else {
            progressMessage.textContent = '🎉 Congratulations! You\'ve mastered Week 5!';
            progressFill.style.background = 'linear-gradient(90deg, #00b894, #00cec9)';
        }
        
        // Save progress
        const progress = Array.from(checkboxes).map(cb => cb.checked);
        localStorage.setItem('week5-clean-progress', JSON.stringify(progress));
    }
    
    // Add event listeners
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            updateProgress();
            
            // Add visual feedback
            if (this.checked) {
                this.parentElement.style.transform = 'scale(1.05)';
                setTimeout(() => {
                    this.parentElement.style.transform = 'scale(1)';
                }, 200);
            }
        });
    });
    
    // Initial update
    updateProgress();
});
</script>

### ✅ Learning Checklist

Mark your progress as you work through each section:

- [ ] **NumPy Fundamentals**
  - [ ] Understand memory layout differences between Python lists and NumPy arrays
  - [ ] Create arrays using various methods (`array()`, `zeros()`, `ones()`, `arange()`)
  - [ ] Master indexing, slicing, and the view vs copy concept
  - [ ] Apply vectorized operations for performance

- [ ] **Multi-dimensional Data**
  - [ ] Work with 1D, 2D, and 3D arrays confidently
  - [ ] Use `reshape()`, `flatten()`, and aggregation functions
  - [ ] Understand and apply broadcasting rules
  - [ ] Process images as NumPy arrays

- [ ] **Database Knowledge**
  - [ ] Compare SQL vs NoSQL approaches
  - [ ] Identify appropriate NoSQL database types for different use cases
  - [ ] Write basic MongoDB queries (insert, find, update, delete)
  - [ ] Understand document-oriented data modeling

- [ ] **Data Similarity**
  - [ ] Calculate dot products both algebraically and geometrically
  - [ ] Implement cosine similarity from scratch
  - [ ] Interpret similarity scores in practical contexts
  - [ ] Apply similarity measures to text analysis problems

- [ ] **Problem-Solving Skills**
  - [ ] Follow the 7-step problem-solving framework
  - [ ] Decompose complex problems using MECE principles
  - [ ] Use prioritization matrices for decision making
  - [ ] Structure communication using the Pyramid Principle

### 🎯 Action Plan

**Week 5 Goals:**
1. **Practice Daily:** Spend 30 minutes daily on NumPy array manipulation
2. **Build Projects:** Create 2 mini-projects using the concepts learned
3. **Apply Knowledge:** Use cosine similarity in a real text analysis task
4. **Document Learning:** Write summary notes for each major concept

**Next Steps:**
- [ ] Set up a local Python environment with NumPy and MongoDB
- [ ] Download sample datasets for practice
- [ ] Join online communities for additional practice problems
- [ ] Schedule time for hands-on coding exercises

### 🔗 Additional Resources

#### 📚 Recommended Reading
- **NumPy Official Documentation:** [numpy.org](https://numpy.org/doc/)
- **MongoDB Tutorial:** [mongodb.com/docs](https://www.mongodb.com/docs/)
- **Linear Algebra for ML:** Khan Academy Linear Algebra course
- **Problem-Solving Methods:** "Thinking, Fast and Slow" by Daniel Kahneman

#### 🛠️ Practice Platforms
- **Kaggle Learn:** Free micro-courses on data science topics
- **LeetCode:** Array and database problems
- **MongoDB University:** Free MongoDB courses
- **NumPy Exercises:** [github.com/rougier/numpy-100](https://github.com/rougier/numpy-100)

### 🎉 Key Achievements

After completing this study guide, you should be able to:

- ✅ **Optimize Performance:** Use NumPy for 10-100x faster numerical operations
- ✅ **Handle Big Data:** Work with multi-dimensional arrays efficiently
- ✅ **Choose Databases:** Select appropriate database technologies for projects
- ✅ **Measure Similarity:** Implement and apply cosine similarity in real applications
- ✅ **Solve Problems:** Apply systematic approaches to complex data science challenges

### 🚀 What's Next?

**Week 6 Preview:** Advanced machine learning algorithms, feature engineering, and model evaluation techniques. We'll build on these NumPy and similarity concepts to create intelligent systems!

---

> 💬 **Questions or Feedback?** Drop a comment below or reach out through the contact form. Let's learn together! 

> 🔔 **Stay Updated:** Subscribe to the newsletter for more interactive learning content and weekly study guides.

<div style="clear: both;"></div>
