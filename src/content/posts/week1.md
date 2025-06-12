---
title: "AIO2025 - Week 1: AIO 2025 Knowledge Synthesis - Comprehensive Learning Guide"
published: 2025-06-11
description: "Comprehensive summary of Week 1 AIO 2025 program covering essential skills, Python fundamentals, database basics, coding methodologies, and practical AI exercises."
image: ""
tags: ["AIO 2025", "Python", "SQL", "Machine Learning", "Study Notes", "Week 1"]
category: "Learning Notes"
draft: false
---

# 📚 Week 1: AIO 2025 Knowledge Synthesis

This document provides a consolidated summary of the key topics covered in the first week of the AIO 2025 program. The content is organized based on the provided PDF materials, covering essential skills, Python fundamentals, database basics, coding methodologies, and practical exercises.

## 🎯 1. Skills for AIO 2025

This section outlines the essential skills and tools you'll need to succeed in your AI research and development journey.

### 1.1 How to Find and Read Scientific Papers 📖

Effectively finding and understanding research is a cornerstone of AI.

#### Where to Find Papers:
- **Google Scholar:** A broad search engine for academic literature
- **IEEE Xplore:** A digital library focused on technical fields like computer science and electronics
- **PubMed:** A database for biomedical and life sciences literature
- **Preprint Repositories (arXiv, bioRxiv):** Access to the latest research before peer review
- **Papers With Code:** A great resource that links research papers to their corresponding code implementations
- **AIO Community:** Leverage the collective knowledge of your peers for recommendations and discussions

#### How to Read Papers (Step-by-Step Roadmap):

<div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px; border-radius: 20px; margin: 30px 0; box-shadow: 0 20px 40px rgba(0,0,0,0.15);">

<h4 style="text-align: center; color: white; margin-bottom: 35px; font-size: 24px; text-shadow: 0 2px 8px rgba(0,0,0,0.3);">📖 Research Paper Reading Roadmap</h4>

<div id="paper-reading-roadmap" style="background: rgba(255,255,255,0.95); border-radius: 15px; box-shadow: 0 10px 25px rgba(0,0,0,0.2); margin-bottom: 30px;"></div>

<div style="background: rgba(255,255,255,0.1); padding: 25px; border-radius: 15px; text-align: center; backdrop-filter: blur(10px);">
<p style="margin: 0; color: white; font-size: 16px; opacity: 0.95;">
<strong>💡 Reading Strategy:</strong> Follow the 7-step sequence for systematic paper comprehension
</p>
</div>

</div>

<div style="background: linear-gradient(135deg, #27ae60 0%, #2ecc71 100%); padding: 40px; border-radius: 20px; margin: 30px 0; box-shadow: 0 20px 40px rgba(0,0,0,0.15);">

<h4 style="text-align: center; color: white; margin-bottom: 35px; font-size: 24px; text-shadow: 0 2px 8px rgba(0,0,0,0.3);">🎓 Dr Experience - Advanced Reading Method</h4>

<div id="dr-experience-method" style="background: rgba(255,255,255,0.95); border-radius: 15px; box-shadow: 0 10px 25px rgba(0,0,0,0.2); margin-bottom: 30px;"></div>

<div style="background: rgba(255,255,255,0.1); padding: 25px; border-radius: 15px; text-align: center; backdrop-filter: blur(10px);">
<p style="margin: 0; color: white; font-size: 16px; opacity: 0.95;">
<strong>🎓 Dr's Approach:</strong> Strategic 4-stage method for efficient paper analysis
</p>
</div>

</div>

<script src="https://d3js.org/d3.v7.min.js"></script>
<script>
(function() {
  // 7-step roadmap based on user's exact specification
  const roadmapSteps = [
    {
      step: 1,
      title: "Abstract",
      description: "Why this paper matters – read this first to decide if you should invest your time in the rest of the paper.",
      color: "#e74c3c",
      x: 100, y: 100
    },
    {
      step: 2,
      title: "Introduction", 
      description: "Get a high-level overview of the problem and the authors' approach; this orients you before diving into details.",
      color: "#f39c12",
      x: 300, y: 100
    },
    {
      step: 3,
      title: "Related Work",
      description: "See what other researchers have done in this area and how this paper distinguishes itself.",
      color: "#f1c40f",
      x: 500, y: 100
    },
    {
      step: 4,
      title: "Approach",
      description: "Study the meat of the paper – the detailed description of the algorithm or method. This is where the novel contributions live.",
      color: "#27ae60",
      x: 650, y: 100
    },
    {
      step: 5,
      title: "Experiments",
      description: "Examine the training setup, evaluation metrics, visualizations, and comparisons with prior work to judge the method's effectiveness.",
      color: "#3498db",
      x: 500, y: 250
    },
    {
      step: 6,
      title: "Conclusion",
      description: "Note the key takeaways and suggested directions for future research.",
      color: "#9b59b6",
      x: 300, y: 250
    },
    {
      step: 7,
      title: "References",
      description: "Use this list to trace back important prior work and follow up on ideas you want to explore further.",
      color: "#95a5a6",
      x: 100, y: 250
    }
  ];

  // Sequential connections 1→2→3→4→5→6→7
  const connections = [
    { from: 0, to: 1 }, // Abstract → Introduction
    { from: 1, to: 2 }, // Introduction → Related Work  
    { from: 2, to: 3 }, // Related Work → Approach
    { from: 3, to: 4 }, // Approach → Experiments
    { from: 4, to: 5 }, // Experiments → Conclusion
    { from: 5, to: 6 }  // Conclusion → References
  ];

  const config = {
    width: 750,
    height: 350,
    nodeRadius: 35
  };

  function createRoadmapDiagram() {
    const container = d3.select("#paper-reading-roadmap");
    if (container.empty()) return;
    
    container.selectAll("*").remove();

    const svg = container.append("svg")
      .attr("width", "100%")
      .attr("height", "100%")
      .attr("viewBox", `0 0 ${config.width} ${config.height}`)
      .attr("preserveAspectRatio", "xMidYMid meet")
      .style("background", "white")
      .style("max-width", "100%")
      .style("height", "auto");

    const defs = svg.append("defs");
    
    // Create gradients
    roadmapSteps.forEach(step => {
      const gradient = defs.append("linearGradient")
        .attr("id", `gradient-step-${step.step}`)
        .attr("x1", "0%").attr("y1", "0%")
        .attr("x2", "100%").attr("y2", "100%");
      
      gradient.append("stop")
        .attr("offset", "0%")
        .attr("stop-color", step.color)
        .attr("stop-opacity", 0.9);
      
      gradient.append("stop")
        .attr("offset", "100%")
        .attr("stop-color", step.color)
        .attr("stop-opacity", 0.7);
    });

    // Add arrowhead marker
    defs.append("marker")
      .attr("id", "arrowhead")
      .attr("viewBox", "0 -5 10 10")
      .attr("refX", 8)
      .attr("refY", 0)
      .attr("markerWidth", 6)
      .attr("markerHeight", 6)
      .attr("orient", "auto")
      .append("path")
      .attr("d", "M0,-5L10,0L0,5")
      .attr("fill", "#34495e");

    const g = svg.append("g");

    // Draw connections
    connections.forEach(conn => {
      const from = roadmapSteps[conn.from];
      const to = roadmapSteps[conn.to];
      
      // Calculate connection points on circle edges
      const dx = to.x - from.x;
      const dy = to.y - from.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const unitX = dx / distance;
      const unitY = dy / distance;
      
      const fromX = from.x + unitX * config.nodeRadius;
      const fromY = from.y + unitY * config.nodeRadius;
      const toX = to.x - unitX * config.nodeRadius;
      const toY = to.y - unitY * config.nodeRadius;
      
      g.append("line")
        .attr("x1", fromX)
        .attr("y1", fromY)
        .attr("x2", toX)
        .attr("y2", toY)
        .attr("stroke", "#34495e")
        .attr("stroke-width", 3)
        .attr("opacity", 0.7)
        .attr("marker-end", "url(#arrowhead)");
    });

    // Create tooltip
    const tooltip = d3.select("body").append("div")
      .attr("class", "roadmap-tooltip")
      .style("position", "absolute")
      .style("background", "rgba(0,0,0,0.9)")
      .style("color", "white")
      .style("padding", "12px 16px")
      .style("border-radius", "8px")
      .style("font-size", "14px")
      .style("max-width", "320px")
      .style("line-height", "1.5")
      .style("pointer-events", "none")
      .style("opacity", 0)
      .style("z-index", 1000);

    // Draw step nodes
    const nodes = g.selectAll(".step-node")
      .data(roadmapSteps)
      .enter().append("g")
      .attr("class", "step-node")
      .attr("transform", d => `translate(${d.x}, ${d.y})`)
      .style("cursor", "pointer");

    // Step circles
    nodes.append("circle")
      .attr("r", config.nodeRadius)
      .attr("fill", d => `url(#gradient-step-${d.step})`)
      .attr("stroke", "#fff")
      .attr("stroke-width", 4)
      .style("filter", "drop-shadow(0 4px 12px rgba(0,0,0,0.2))")
      .on("mouseover", function(event, d) {
        d3.select(this)
          .transition().duration(200)
          .attr("r", config.nodeRadius + 8);
        
        tooltip.style("opacity", 1)
          .style("left", (event.pageX + 15) + "px")
          .style("top", (event.pageY - 15) + "px")
          .html(`
            <strong>Step ${d.step}: ${d.title}</strong><br/>
            <span style="opacity: 0.9;">${d.description}</span>
          `);
      })
      .on("mouseout", function(event, d) {
        d3.select(this)
          .transition().duration(200)
          .attr("r", config.nodeRadius);
        
        tooltip.style("opacity", 0);
      });

    // Step numbers
    nodes.append("circle")
      .attr("r", 16)
      .attr("fill", "#2c3e50")
      .attr("stroke", "#fff")
      .attr("stroke-width", 2);

    nodes.append("text")
      .attr("text-anchor", "middle")
      .attr("dy", "0.35em")
      .attr("fill", "white")
      .attr("font-size", "14px")
      .attr("font-weight", "bold")
      .text(d => d.step)
      .style("pointer-events", "none");

    // Step titles below circles
    nodes.append("text")
      .attr("y", config.nodeRadius + 20)
      .attr("text-anchor", "middle")
      .attr("fill", "#2c3e50")
      .attr("font-size", "12px")
      .attr("font-weight", "bold")
      .text(d => d.title)
      .style("pointer-events", "none");

    // Title
    svg.append("text")
      .attr("x", config.width / 2)
      .attr("y", 25)
      .attr("text-anchor", "middle")
      .attr("font-size", "18px")
      .attr("font-weight", "bold")
      .attr("fill", "#2c3e50")
      .text("7-Step Research Paper Reading Strategy");
  }

  // Initialize
  function initRoadmap() {
    try {
      createRoadmapDiagram();
    } catch (error) {
      console.error("Error creating roadmap diagram:", error);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initRoadmap);
  } else {
    setTimeout(initRoadmap, 100);
  }
})();

// Dr Experience Method - Separate script
(function() {
  // 4-stage Dr Experience method
  const drStages = [
    {
      stage: 1,
      title: "Overview",
      steps: ["Read Paper's title", "Read Abstract section"],
      color: "#3498db",
      x: 150, y: 80
    },
    {
      stage: 2,
      title: "Orientation", 
      steps: ["Read Introduction section"],
      color: "#9b59b6",
      x: 400, y: 80
    },
    {
      stage: 3,
      title: "Results & Methods",
      steps: ["Read Experimental Result", "Read \"The proposed Method\""],
      color: "#e74c3c",
      x: 550, y: 200
    },
    {
      stage: 4,
      title: "Broader Context",
      steps: ["Read \"Related Works\""],
      color: "#f39c12",
      x: 200, y: 200
    }
  ];

  // Stage connections
  const stageConnections = [
    { from: 0, to: 1 }, // Overview → Orientation
    { from: 1, to: 2 }, // Orientation → Results & Methods
    { from: 2, to: 3 }  // Results & Methods → Broader Context
  ];

  const drConfig = {
    width: 700,
    height: 280,
    nodeRadius: 40
  };

  function createDrExperienceMethod() {
    const container = d3.select("#dr-experience-method");
    if (container.empty()) return;
    
    container.selectAll("*").remove();

    const svg = container.append("svg")
      .attr("width", "100%")
      .attr("height", "100%")
      .attr("viewBox", `0 0 ${drConfig.width} ${drConfig.height}`)
      .attr("preserveAspectRatio", "xMidYMid meet")
      .style("background", "white")
      .style("max-width", "100%")
      .style("height", "auto");

    const defs = svg.append("defs");
    
    // Create gradients for stages
    drStages.forEach(stage => {
      const gradient = defs.append("linearGradient")
        .attr("id", `gradient-dr-stage-${stage.stage}`)
        .attr("x1", "0%").attr("y1", "0%")
        .attr("x2", "100%").attr("y2", "100%");
      
      gradient.append("stop")
        .attr("offset", "0%")
        .attr("stop-color", stage.color)
        .attr("stop-opacity", 0.9);
      
      gradient.append("stop")
        .attr("offset", "100%")
        .attr("stop-color", stage.color)
        .attr("stop-opacity", 0.7);
    });

    // Add arrowhead marker
    defs.append("marker")
      .attr("id", "dr-arrowhead")
      .attr("viewBox", "0 -5 10 10")
      .attr("refX", 8)
      .attr("refY", 0)
      .attr("markerWidth", 6)
      .attr("markerHeight", 6)
      .attr("orient", "auto")
      .append("path")
      .attr("d", "M0,-5L10,0L0,5")
      .attr("fill", "#2c3e50");

    const g = svg.append("g");

    // Draw connections
    stageConnections.forEach(conn => {
      const from = drStages[conn.from];
      const to = drStages[conn.to];
      
      // Calculate connection points
      const dx = to.x - from.x;
      const dy = to.y - from.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const unitX = dx / distance;
      const unitY = dy / distance;
      
      const fromX = from.x + unitX * drConfig.nodeRadius;
      const fromY = from.y + unitY * drConfig.nodeRadius;
      const toX = to.x - unitX * drConfig.nodeRadius;
      const toY = to.y - unitY * drConfig.nodeRadius;
      
      g.append("line")
        .attr("x1", fromX)
        .attr("y1", fromY)
        .attr("x2", toX)
        .attr("y2", toY)
        .attr("stroke", "#2c3e50")
        .attr("stroke-width", 3)
        .attr("opacity", 0.7)
        .attr("marker-end", "url(#dr-arrowhead)");
    });

    // Create tooltip
    const drTooltip = d3.select("body").append("div")
      .attr("class", "dr-tooltip")
      .style("position", "absolute")
      .style("background", "rgba(0,0,0,0.9)")
      .style("color", "white")
      .style("padding", "12px 16px")
      .style("border-radius", "8px")
      .style("font-size", "14px")
      .style("max-width", "280px")
      .style("line-height", "1.5")
      .style("pointer-events", "none")
      .style("opacity", 0)
      .style("z-index", 1000);

    // Draw stage nodes
    const nodes = g.selectAll(".dr-stage-node")
      .data(drStages)
      .enter().append("g")
      .attr("class", "dr-stage-node")
      .attr("transform", d => `translate(${d.x}, ${d.y})`)
      .style("cursor", "pointer");

    // Stage circles
    nodes.append("circle")
      .attr("r", drConfig.nodeRadius)
      .attr("fill", d => `url(#gradient-dr-stage-${d.stage})`)
      .attr("stroke", "#fff")
      .attr("stroke-width", 4)
      .style("filter", "drop-shadow(0 4px 12px rgba(0,0,0,0.2))")
      .on("mouseover", function(event, d) {
        d3.select(this)
          .transition().duration(200)
          .attr("r", drConfig.nodeRadius + 6);
        
        drTooltip.style("opacity", 1)
          .style("left", (event.pageX + 15) + "px")
          .style("top", (event.pageY - 15) + "px")
          .html(`
            <strong>Stage ${d.stage}: ${d.title}</strong><br/>
            ${d.steps.map(step => `• ${step}`).join('<br/>')}
          `);
      })
      .on("mouseout", function(event, d) {
        d3.select(this)
          .transition().duration(200)
          .attr("r", drConfig.nodeRadius);
        
        drTooltip.style("opacity", 0);
      });

    // Stage numbers
    nodes.append("circle")
      .attr("r", 18)
      .attr("fill", "#2c3e50")
      .attr("stroke", "#fff")
      .attr("stroke-width", 3);

    nodes.append("text")
      .attr("text-anchor", "middle")
      .attr("dy", "0.35em")
      .attr("fill", "white")
      .attr("font-size", "16px")
      .attr("font-weight", "bold")
      .text(d => d.stage)
      .style("pointer-events", "none");

    // Stage titles below circles
    nodes.append("text")
      .attr("y", drConfig.nodeRadius + 25)
      .attr("text-anchor", "middle")
      .attr("fill", "#2c3e50")
      .attr("font-size", "13px")
      .attr("font-weight", "bold")
      .text(d => d.title)
      .style("pointer-events", "none");

    // Step count indicators
    nodes.append("text")
      .attr("y", drConfig.nodeRadius + 40)
      .attr("text-anchor", "middle")
      .attr("fill", "#7f8c8d")
      .attr("font-size", "11px")
      .text(d => `${d.steps.length} step${d.steps.length > 1 ? 's' : ''}`)
      .style("pointer-events", "none");

    // Title
    svg.append("text")
      .attr("x", drConfig.width / 2)
      .attr("y", 25)
      .attr("text-anchor", "middle")
      .attr("font-size", "18px")
      .attr("font-weight", "bold")
      .attr("fill", "#2c3e50")
      .text("Dr Experience - 4-Stage Strategic Reading Method");
  }

  // Initialize Dr Experience method
  function initDrMethod() {
    try {
      createDrExperienceMethod();
    } catch (error) {
      console.error("Error creating Dr Experience method:", error);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initDrMethod);
  } else {
    setTimeout(initDrMethod, 200);
  }
})();
</script>

### 1.2 Making a Research Plan & Documenting Results 📋

- **Research Plan:** Use AI tools like Gemini to help structure your research. Define your objectives, identify key questions, outline your methodology, and set a timeline
- **Documentation:** Use Overleaf (LaTeX) for professional-quality scientific documents. LaTeX is the standard for academic papers, giving you precise control over formatting, especially for mathematical equations

### 1.3 Coding Environment & AI Assistants 💻

#### Local Environment:
- **Jupyter Notebook** or **Anaconda** to set up a powerful local development environment

#### Cloud Environment:
- **Google Colab** is an excellent tool that provides free access to GPUs, making it ideal for training machine learning models. You can easily mount your Google Drive to access datasets

#### AI Coding Assistants:
Leverage tools like **Gemini in Colab** and **ChatGPT** to accelerate your workflow. They can help with:
- Generating boilerplate code
- Explaining complex code snippets
- Debugging errors
- Adding comments to your code
- Summarizing articles or concepts

## 🐍 2. Basic Python

This section covers the foundational elements of the Python programming language, including data types, branching, and a simple rule-based chatbot application.

### 2.1 Variables and Data Types

In Python, a variable is a container for storing data values. The main data types are:

| Data Type | Description | Example | Memory Usage |
|-----------|-------------|---------|--------------|
| `int` | Integer numbers (whole numbers) | `10, -5, 0` | 28 bytes |
| `float` | Floating-point numbers (with decimals) | `3.14, -0.5, 10.0` | 24 bytes |
| `str` | String (sequence of characters) | `"Hello", 'Python'` | Variable |
| `bool` | Boolean (logical value) | `True, False` | 28 bytes |
| `list` | An ordered and mutable collection | `[1, "apple", 3.14]` | Variable |
| `dict` | An unordered collection of key-value pairs | `{'name': 'Alice', 'age': 25}` | Variable |

**📝 Quick Example:**
```python
# Variable assignment examples
name = "AIO Student"        # str
age = 25                    # int
height = 1.75              # float
is_student = True          # bool
skills = ["Python", "SQL"] # list
profile = {"name": name, "age": age}  # dict

# Check data types
print(type(name))     # <class 'str'>
print(type(age))      # <class 'int'>
```

### 2.2 Branching (Conditional Statements) 🌟

Conditional statements allow your program to execute different blocks of code based on whether a condition is True or False.

- **`if`:** Executes a block of code if its condition is true
- **`elif` (else if):** Checks another condition if the previous if/elif conditions were false
- **`else`:** Executes a block of code if all preceding conditions were false

**Syntax:**
```python
score = 85

if score >= 90:
    print("Grade: A")
elif score >= 80:
    print("Grade: B")
elif score >= 70:
    print("Grade: C")
else:
    print("Grade: F")
# Output: Grade: B
```

### 2.3 Functions 🔧

Functions are reusable blocks of code that perform a specific task.

- **Built-in Functions:** Python provides many useful built-in functions like `print()`, `type()`, `int()`, `len()`
- **User-Defined Functions:** You can create your own functions using the `def` keyword

**Syntax:**
```python
def greet(name):
  """This function greets the person passed in as a parameter."""
  return f"Hello, {name}!"

# Calling the function
message = greet("AIO Student")
print(message) # Output: Hello, AIO Student!
```

### 2.4 Application: Rule-Based Chatbot 🤖

A simple chatbot can be created using a series of if-elif-else statements to respond to specific user inputs.

<div style="float: right; margin: 0 0 20px 20px; max-width: 45%;">
  <img src="/blog/images/chatbot-decision-tree.png" alt="Rule-Based Chatbot Decision Tree" style="width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
</div>

The decision tree approach makes chatbot logic easy to understand and modify. Each condition represents a keyword check, and each leaf node contains the appropriate response. This method works well for simple, rule-based interactions where you can predict common user inputs.

**Example Logic:**
```python
user_input = "Tell me about laptops"

if "laptops" in user_input:
    print("We have a wide range of high-performance laptops. What is your budget?")
elif "warranty" in user_input:
    print("Please provide your order number to check the warranty.")
elif "hello" in user_input:
    print("Hello! How can I assist you today?")
else:
    print("I'm sorry, I don't understand. Can you rephrase?")
```

<div style="clear: both;"></div>

## 🗃️ 3. Database & SQL (Part 1)

Databases are organized collections of data, and SQL (Structured Query Language) is the standard language used to interact with them.

### 3.1 What is a Database? 💾

A database is designed for efficient storage, retrieval, and management of data. Instead of storing all information in one massive file (like an Excel sheet), a relational database breaks data into multiple related tables to reduce redundancy and improve integrity.

#### Key Concepts:
- **DBMS (Database Management System):** Software that interacts with the user, applications, and the database itself to capture and analyze the data (e.g., MySQL, PostgreSQL)
- **Relational Database:** Organizes data into tables with rows and columns. Tables can be linked together using keys
- **Primary Key:** A unique identifier for each record in a table
- **Foreign Key:** A key used to link two tables together

<div style="background: #f8f9fa; padding: 30px; border-radius: 12px; margin: 25px 0; border: 2px solid #e9ecef; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">

<h4 style="text-align: center; color: #2c3e50; margin-bottom: 25px; font-size: 18px;">📊 E-commerce Database Entity-Relationship Diagram</h4>

<div id="erd-diagram" style="width: 100%; height: 500px; background: white; border-radius: 8px; box-shadow: inset 0 2px 8px rgba(0,0,0,0.1); position: relative; overflow: hidden;"></div>

<div style="margin-top: 20px; padding: 15px; background: #e3f2fd; border-radius: 8px; border-left: 4px solid #2196f3;">
<p style="margin: 0; color: #1565c0; font-size: 14px;">
<strong>🔍 Diagram Structure:</strong> 4 tables với relationships: CUSTOMERS → ORDERS → ORDER_ITEMS ← PRODUCTS
</p>
</div>

</div>

<script src="https://d3js.org/d3.v7.min.js"></script>
<script>
(function() {
  // Clean, professional ERD implementation
  const erdConfig = {
    width: 800,
    height: 500,
    entities: [
      {
        id: "customers",
        name: "CUSTOMERS", 
        x: 50, y: 50,
        fields: [
          { name: "customer_id", type: "int", key: "PK" },
          { name: "first_name", type: "string" },
          { name: "last_name", type: "string" },
          { name: "email", type: "string" },
          { name: "phone", type: "string" },
          { name: "address", type: "string" }
        ]
      },
      {
        id: "products",
        name: "PRODUCTS",
        x: 450, y: 50,
        fields: [
          { name: "product_id", type: "int", key: "PK" },
          { name: "product_name", type: "string" },
          { name: "unit_price", type: "decimal" },
          { name: "category", type: "string" }
        ]
      },
      {
        id: "orders", 
        name: "ORDERS",
        x: 50, y: 280,
        fields: [
          { name: "order_id", type: "int", key: "PK" },
          { name: "customer_id", type: "int", key: "FK" },
          { name: "order_date", type: "date" },
          { name: "total_amount", type: "decimal" }
        ]
      },
      {
        id: "order_items",
        name: "ORDER_ITEMS", 
        x: 450, y: 280,
        fields: [
          { name: "order_item_id", type: "int", key: "PK" },
          { name: "order_id", type: "int", key: "FK" },
          { name: "product_id", type: "int", key: "FK" },
          { name: "quantity", type: "int" },
          { name: "unit_price", type: "decimal" }
        ]
      }
    ],
    connections: [
      { from: "customers", to: "orders", label: "places" },
      { from: "orders", to: "order_items", label: "contains" },
      { from: "products", to: "order_items", label: "appears in" }
    ]
  };

  function drawERD() {
    const container = d3.select("#erd-diagram");
    container.selectAll("*").remove();

    const svg = container.append("svg")
      .attr("width", "100%")
      .attr("height", "100%")
      .attr("viewBox", `0 0 ${erdConfig.width} ${erdConfig.height}`)
      .style("background", "white");

    // Draw connections first (behind entities)
    erdConfig.connections.forEach(conn => {
      const fromEntity = erdConfig.entities.find(e => e.id === conn.from);
      const toEntity = erdConfig.entities.find(e => e.id === conn.to);
      
      const fromX = fromEntity.x + 150;
      const fromY = fromEntity.y + (fromEntity.fields.length * 20) / 2 + 35;
      const toX = toEntity.x;
      const toY = toEntity.y + (toEntity.fields.length * 20) / 2 + 35;

      // Connection line
      svg.append("line")
        .attr("x1", fromX)
        .attr("y1", fromY)
        .attr("x2", toX)
        .attr("y2", toY)
        .attr("stroke", "#95a5a6")
        .attr("stroke-width", 2)
        .attr("opacity", 0.8);

      // Connection label
      svg.append("text")
        .attr("x", (fromX + toX) / 2)
        .attr("y", (fromY + toY) / 2 - 8)
        .attr("text-anchor", "middle")
        .attr("font-size", "11px")
        .attr("fill", "#7f8c8d")
        .attr("font-style", "italic")
        .text(conn.label);
    });

    // Draw entities
    const entityGroups = svg.selectAll(".entity")
      .data(erdConfig.entities)
      .enter().append("g")
      .attr("class", "entity")
      .attr("transform", d => `translate(${d.x}, ${d.y})`);

    // Entity containers
    entityGroups.each(function(entity) {
      const group = d3.select(this);
      const entityHeight = 35 + entity.fields.length * 20;

      // Main container
      group.append("rect")
        .attr("width", 200)
        .attr("height", entityHeight)
        .attr("fill", "white")
        .attr("stroke", "#34495e")
        .attr("stroke-width", 2)
        .attr("rx", 6)
        .style("filter", "drop-shadow(0 2px 4px rgba(0,0,0,0.1))");

      // Header background
      group.append("rect")
        .attr("width", 200)
        .attr("height", 35)
        .attr("fill", "#3498db")
        .attr("rx", 6)
        .attr("ry", 6);

      // Header text
      group.append("text")
        .attr("x", 100)
        .attr("y", 23)
        .attr("text-anchor", "middle")
        .attr("fill", "white")
        .attr("font-weight", "bold")
        .attr("font-size", "14px")
        .text(entity.name);

      // Fields
      entity.fields.forEach((field, i) => {
        const fieldY = 52 + i * 20;
        
        // Field name and type
        group.append("text")
          .attr("x", 12)
          .attr("y", fieldY)
          .attr("font-size", "12px")
          .attr("fill", "#2c3e50")
          .text(`${field.name}: ${field.type}`);

        // Key indicators
        if (field.key) {
          group.append("text")
            .attr("x", 170)
            .attr("y", fieldY)
            .attr("font-size", "10px")
            .attr("font-weight", "bold")
            .attr("fill", field.key === "PK" ? "#e74c3c" : "#f39c12")
            .text(field.key);
        }
      });
    });
  }

  // Initialize
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', drawERD);
  } else {
    setTimeout(drawERD, 100);
  }
})();
</script>

### 3.2 Introduction to SQL 📊

SQL is used to perform actions like querying data, inserting new records, updating records, and deleting records.

#### The SELECT Statement
The SELECT statement is used to query data from a database.

<div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 15px; margin: 20px 0; color: white; box-shadow: 0 10px 30px rgba(0,0,0,0.2);">

<h4 style="text-align: center; margin-bottom: 25px; color: #fff; text-shadow: 0 2px 4px rgba(0,0,0,0.3);">🎯 SQL SELECT Statement Flow</h4>

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; margin-bottom: 20px;">

<div style="background: rgba(255,255,255,0.1); padding: 20px; border-radius: 10px; backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255,0.2);">
<h5 style="margin: 0 0 10px 0; color: #ffd700;">📋 SELECT Columns</h5>
<ul style="margin: 0; padding-left: 20px;">
<li>* (All columns)</li>
<li>Specific columns</li>
<li>Calculated fields</li>
</ul>
</div>

<div style="background: rgba(255,255,255,0.1); padding: 20px; border-radius: 10px; backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255,0.2);">
<h5 style="margin: 0 0 10px 0; color: #ffd700;">🗃️ FROM Table</h5>
<ul style="margin: 0; padding-left: 20px;">
<li>Single table</li>
<li>Multiple tables (JOIN)</li>
<li>Subqueries</li>
</ul>
</div>

<div style="background: rgba(255,255,255,0.1); padding: 20px; border-radius: 10px; backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255,0.2);">
<h5 style="margin: 0 0 10px 0; color: #ffd700;">🔍 WHERE Conditions</h5>
<ul style="margin: 0; padding-left: 20px;">
<li>Filter criteria</li>
<li>AND/OR logic</li>
<li>LIKE patterns</li>
</ul>
</div>

<div style="background: rgba(255,255,255,0.1); padding: 20px; border-radius: 10px; backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255,0.2);">
<h5 style="margin: 0 0 10px 0; color: #ffd700;">📊 ORDER BY</h5>
<ul style="margin: 0; padding-left: 20px;">
<li>ASC (ascending)</li>
<li>DESC (descending)</li>
<li>Multiple columns</li>
</ul>
</div>

<div style="background: rgba(255,255,255,0.1); padding: 20px; border-radius: 10px; backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255,0.2);">
<h5 style="margin: 0 0 10px 0; color: #ffd700;">🎯 LIMIT Results</h5>
<ul style="margin: 0; padding-left: 20px;">
<li>Top N records</li>
<li>Pagination</li>
<li>Performance optimization</li>
</ul>
</div>

</div>

<div style="text-align: center; margin-top: 15px; padding: 15px; background: rgba(255,255,255,0.1); border-radius: 8px;">
<p style="margin: 0; font-size: 14px; opacity: 0.9;">💡 <strong>Pro Tip:</strong> Use LIMIT for large datasets to improve query performance</p>
</div>

</div>

**Select all columns:**
```sql
SELECT * FROM customers;
```

**Select specific columns:**
```sql
SELECT first_name, last_name, email FROM customers;
```

**Using aliases for columns:**
```sql
SELECT unit_price * 1.1 AS new_price FROM products;
```

#### Filtering Data with WHERE
The WHERE clause is used to filter records based on a specific condition.

| Operator | Description |
|----------|-------------|
| `=` | Equal |
| `!= or <>` | Not equal |
| `>` | Greater than |
| `<` | Less than |
| `>=` | Greater than or equal to |
| `<=` | Less than or equal to |
| `BETWEEN` | Between a certain range |
| `LIKE` | Search for a pattern |
| `IN` | To specify multiple possible values |

**Combining Conditions:** Use `AND` (both conditions must be true) and `OR` (at least one condition must be true).

**Example:**
```sql
-- Select customers from Virginia (VA) with more than 1000 points
SELECT first_name, last_name, points
FROM customers
WHERE state = 'VA' AND points > 1000;
```

#### Pattern Matching with LIKE
- `%`: Represents zero, one, or multiple characters
- `_`: Represents a single character

**Example:**
```sql
-- Select customers whose last name starts with 'B'
SELECT * FROM customers WHERE last_name LIKE 'B%';
```

#### Sorting Results with ORDER BY
The ORDER BY keyword is used to sort the result-set in ascending or descending order.

- `ASC`: Ascending order (default)
- `DESC`: Descending order

**Example:**
```sql
-- Select all customers, ordered by points from highest to lowest
SELECT * FROM customers ORDER BY points DESC;
```

#### Limiting Results with LIMIT
The LIMIT clause specifies the maximum number of records to return.

```sql
-- Get the top 3 customers with the highest points
SELECT * FROM customers ORDER BY points DESC LIMIT 3;
```

## 🔄 4. Loops in Python

Loops are used to execute a block of code repeatedly.

### 4.1 for Loops 🔁

A for loop is used for iterating over a sequence (like a list, tuple, dictionary, set, or string).

**Syntax:**
```python
# Iterating over a list
fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
  print(fruit)

# Using the range() function
# range(5) generates numbers from 0 to 4
for i in range(5):
  print(f"Number: {i}")
```

### 4.2 while Loops ⏳

A while loop executes a set of statements as long as its condition is true.

**Syntax:**
```python
count = 0
while count < 5:
  print(f"Count is: {count}")
  count = count + 1 # Important: update the counter to avoid an infinite loop
```

### 4.3 Loop Control Statements 🎛️

- **`break`:** Exits the loop entirely, regardless of the condition
- **`continue`:** Skips the rest of the current iteration and proceeds to the next one

**break Example:**
```python
# Stop the loop when i is 3
for i in range(10):
  if i == 3:
    break
  print(i) # Output: 0, 1, 2
```

**continue Example:**
```python
# Skip printing the number 3
for i in range(5):
  if i == 3:
    continue
  print(i) # Output: 0, 1, 2, 4
```

## 🏗️ 5. Coding Methodology

Writing high-quality code is crucial for collaboration, maintenance, and scalability. This involves following established conventions and principles.

### 5.1 Clean Code & PEP-8 ✨

#### Clean Code:
Code that is easy to read, understand, and maintain by others (and your future self). It should be readable, testable, maintainable, and extensible.

#### PEP-8:
The official style guide for Python code. Adhering to it ensures consistency and readability. Key rules include:

- **Indentation:** Use 4 spaces per indentation level
- **Line Length:** Limit all lines to a maximum of 79 characters
- **Whitespace:** Use whitespace around operators and after commas, but not directly inside brackets
- **Naming Conventions:**
  - `snake_case`: For functions and variables (e.g., `calculate_total`)
  - `PascalCase`: For classes (e.g., `MyClass`)
  - `UPPERCASE_SNAKE_CASE`: For constants (e.g., `MAX_SIZE`)
- **Comments & Docstrings:** Use comments to explain non-obvious code. Use docstrings to explain what a function, module, or class does

### 5.2 Pythonic Code 🐍

"Pythonic" means writing code that leverages Python's unique features to be more readable, concise, and efficient.

#### List/Dict/Set Comprehensions:
A concise way to create lists, dictionaries, or sets.

```python
# Non-Pythonic
squares = []
for i in range(10):
    squares.append(i*i)

# Pythonic
squares = [i*i for i in range(10)]
```

#### Context Managers (with statement):
Ensures that resources (like files) are properly managed (e.g., automatically closed), even if errors occur.

```python
# The file is automatically closed after the block
with open('file.txt', 'r') as f:
    content = f.read()
```

### 5.3 General Coding Principles 📏

<div style="background: linear-gradient(145deg, #2c3e50, #34495e); padding: 40px; border-radius: 20px; margin: 30px 0; box-shadow: 0 15px 35px rgba(0,0,0,0.3);">

<h4 style="text-align: center; color: #ecf0f1; margin-bottom: 35px; font-size: 24px; text-shadow: 0 2px 4px rgba(0,0,0,0.5);">🏗️ Clean Code Principles</h4>

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 25px;">

<div style="background: linear-gradient(135deg, #e74c3c, #c0392b); padding: 25px; border-radius: 15px; transition: transform 0.3s ease; position: relative; overflow: hidden;">
<div style="position: absolute; top: -50%; right: -50%; width: 100%; height: 100%; background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%); border-radius: 50%;"></div>
<h5 style="margin: 0 0 15px 0; color: white; font-size: 18px; position: relative; z-index: 1;">🔄 DRY Principle</h5>
<div style="position: relative; z-index: 1;">
<p style="margin: 5px 0; color: #fff; opacity: 0.9;">• Avoid duplication</p>
<p style="margin: 5px 0; color: #fff; opacity: 0.9;">• Reusable functions</p>
<p style="margin: 5px 0; color: #fff; opacity: 0.9;">• Modular design</p>
</div>
</div>

<div style="background: linear-gradient(135deg, #f39c12, #e67e22); padding: 25px; border-radius: 15px; transition: transform 0.3s ease; position: relative; overflow: hidden;">
<div style="position: absolute; top: -50%; right: -50%; width: 100%; height: 100%; background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%); border-radius: 50%;"></div>
<h5 style="margin: 0 0 15px 0; color: white; font-size: 18px; position: relative; z-index: 1;">💎 KISS Principle</h5>
<div style="position: relative; z-index: 1;">
<p style="margin: 5px 0; color: #fff; opacity: 0.9;">• Simple solutions</p>
<p style="margin: 5px 0; color: #fff; opacity: 0.9;">• Readable code</p>
<p style="margin: 5px 0; color: #fff; opacity: 0.9;">• Clear logic</p>
</div>
</div>

<div style="background: linear-gradient(135deg, #9b59b6, #8e44ad); padding: 25px; border-radius: 15px; transition: transform 0.3s ease; position: relative; overflow: hidden;">
<div style="position: absolute; top: -50%; right: -50%; width: 100%; height: 100%; background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%); border-radius: 50%;"></div>
<h5 style="margin: 0 0 15px 0; color: white; font-size: 18px; position: relative; z-index: 1;">🎯 YAGNI Principle</h5>
<div style="position: relative; z-index: 1;">
<p style="margin: 5px 0; color: #fff; opacity: 0.9;">• Build what's needed</p>
<p style="margin: 5px 0; color: #fff; opacity: 0.9;">• Avoid over-engineering</p>
<p style="margin: 5px 0; color: #fff; opacity: 0.9;">• Iterative development</p>
</div>
</div>

<div style="background: linear-gradient(135deg, #3498db, #2980b9); padding: 25px; border-radius: 15px; transition: transform 0.3s ease; position: relative; overflow: hidden;">
<div style="position: absolute; top: -50%; right: -50%; width: 100%; height: 100%; background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%); border-radius: 50%;"></div>
<h5 style="margin: 0 0 15px 0; color: white; font-size: 18px; position: relative; z-index: 1;">🛠️ SOLID Principles</h5>
<div style="position: relative; z-index: 1;">
<p style="margin: 5px 0; color: #fff; opacity: 0.9;">• Single responsibility</p>
<p style="margin: 5px 0; color: #fff; opacity: 0.9;">• Open/closed principle</p>
<p style="margin: 5px 0; color: #fff; opacity: 0.9;">• Interface segregation</p>
</div>
</div>

</div>

<div style="margin-top: 25px; padding: 20px; background: rgba(255,255,255,0.1); border-radius: 12px; border-left: 4px solid #f1c40f;">
<p style="margin: 0; color: #ecf0f1; text-align: center; font-style: italic;">💡 <strong>Remember:</strong> These principles work together to create maintainable, scalable, and robust code</p>
</div>

</div>

- **DRY (Don't Repeat Yourself):** Avoid duplicating code. Abstract common logic into functions or classes
- **KISS (Keep It Simple, Stupid):** Prefer simple, straightforward solutions over overly complex ones
- **YAGNI (You Aren't Gonna Need It):** Don't add functionality until it's actually required. Avoid premature optimization
- **SOLID Principles:** Design principles for writing maintainable and scalable code

## 🧪 6. Practical Exercises (Activation Functions & Metrics)

This section summarizes the practical exercises involving the implementation of common functions used in machine learning.

### 6.1 Exercise 1: Calculate F1-Score 🎯

The F1-Score is a metric used to evaluate a classification model's accuracy. It is the harmonic mean of Precision and Recall.

- **Precision:** Of all the positive predictions, how many were actually correct?
  $$\text{Precision} = \frac{TP}{TP + FP}$$

- **Recall:** Of all the actual positives, how many did the model correctly identify?
  $$\text{Recall} = \frac{TP}{TP + FN}$$

- **F1-Score:**
  $$F1 = \frac{2 \times (\text{Precision} \times \text{Recall})}{\text{Precision} + \text{Recall}}$$

Where:
- TP = True Positives
- FP = False Positives  
- FN = False Negatives

### 6.2 Exercise 2: Calculate Activation Functions ⚡

Activation functions introduce non-linearity into a neural network, allowing it to learn more complex patterns.

#### Sigmoid:
Maps any value to a range between 0 and 1.
$$\text{sigmoid}(x) = \frac{1}{1 + e^{-x}}$$

#### ReLU (Rectified Linear Unit):
Returns 0 for any negative input, and the input value itself for any positive input. It's computationally efficient and widely used.
$$\text{ReLU}(x) = \max(0, x)$$

#### ELU (Exponential Linear Unit):
A variant of ReLU that allows negative values, which can sometimes help learning.

**Formula:** ELU(x) = x if x > 0, else α(e^x - 1) if x ≤ 0

### 📊 Activation Functions - Simple & Clear

| Function | Formula | When to Use | Why? |
|----------|---------|-------------|------|
| **Sigmoid** | `1/(1 + e^(-x))` | Output probabilities | Range: 0-1 |
| **ReLU** | `max(0, x)` | Hidden layers | Simple & fast |
| **ELU** | `x if x>0, α(e^x-1) if x≤0` | Deep networks | Smooth curve |

**💡 Quick Guide:** Start with ReLU → Use Sigmoid for final output → Try ELU for deeper networks

### 📈 Interactive Activation Functions Visualization

<div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 15px; margin: 25px 0; color: white; box-shadow: 0 10px 30px rgba(0,0,0,0.2);">

<h4 style="text-align: center; margin-bottom: 25px; color: #fff; text-shadow: 0 2px 4px rgba(0,0,0,0.3);">🎯 Activation Functions Interactive Charts</h4>

<div id="activation-functions-container" style="background: white; border-radius: 12px; padding: 20px; margin: 20px 0;">

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; margin-bottom: 20px;">

<div id="sigmoid-chart" style="height: 200px; border: 1px solid #ddd; border-radius: 8px; background: #f8f9fa;"></div>
<div id="relu-chart" style="height: 200px; border: 1px solid #ddd; border-radius: 8px; background: #f8f9fa;"></div>
<div id="elu-chart" style="height: 200px; border: 1px solid #ddd; border-radius: 8px; background: #f8f9fa;"></div>

</div>

<div style="background: #e8f4f8; padding: 15px; border-radius: 8px; color: #2c3e50; text-align: center;">
<p style="margin: 0; font-size: 14px;">
<strong>🎮 Interactive:</strong> Hover over lines to see exact values • Professional mathematical visualization with D3.js
</p>
</div>

</div>

</div>

<script src="https://d3js.org/d3.v7.min.js"></script>
<script>
(function() {
  // Mathematical functions
  const functions = {
    sigmoid: x => 1 / (1 + Math.exp(-x)),
    relu: x => Math.max(0, x),
    elu: x => x > 0 ? x : 0.1 * (Math.exp(x) - 1) // α = 0.1
  };

  // Chart configuration
  const chartConfig = {
    width: 250,
    height: 200,
    margin: { top: 20, right: 20, bottom: 40, left: 50 },
    xRange: [-5, 5],
    colors: {
      sigmoid: "#e74c3c",
      relu: "#3498db", 
      elu: "#2ecc71"
    }
  };

  function createFunctionChart(containerId, functionName, func) {
    const container = d3.select(`#${containerId}`);
    container.selectAll("*").remove();

    const svg = container.append("svg")
      .attr("width", chartConfig.width)
      .attr("height", chartConfig.height);

    const innerWidth = chartConfig.width - chartConfig.margin.left - chartConfig.margin.right;
    const innerHeight = chartConfig.height - chartConfig.margin.top - chartConfig.margin.bottom;

    const g = svg.append("g")
      .attr("transform", `translate(${chartConfig.margin.left}, ${chartConfig.margin.top})`);

    // Generate data points
    const data = [];
    for (let x = chartConfig.xRange[0]; x <= chartConfig.xRange[1]; x += 0.1) {
      data.push({ x: x, y: func(x) });
    }

    // Scales
    const xScale = d3.scaleLinear()
      .domain(chartConfig.xRange)
      .range([0, innerWidth]);

    const yExtent = d3.extent(data, d => d.y);
    const yScale = d3.scaleLinear()
      .domain([Math.min(yExtent[0], -1), Math.max(yExtent[1], 2)])
      .range([innerHeight, 0]);

    // Line generator
    const line = d3.line()
      .x(d => xScale(d.x))
      .y(d => yScale(d.y))
      .curve(d3.curveMonotoneX);

    // Grid lines
    g.selectAll(".grid-x")
      .data(xScale.ticks(5))
      .enter().append("line")
      .attr("class", "grid-x")
      .attr("x1", d => xScale(d))
      .attr("x2", d => xScale(d))
      .attr("y1", 0)
      .attr("y2", innerHeight)
      .attr("stroke", "#f0f0f0")
      .attr("stroke-width", 1);

    g.selectAll(".grid-y")
      .data(yScale.ticks(4))
      .enter().append("line")
      .attr("class", "grid-y")
      .attr("x1", 0)
      .attr("x2", innerWidth)
      .attr("y1", d => yScale(d))
      .attr("y2", d => yScale(d))
      .attr("stroke", "#f0f0f0")
      .attr("stroke-width", 1);

    // Axes
    g.append("g")
      .attr("transform", `translate(0, ${innerHeight})`)
      .call(d3.axisBottom(xScale).ticks(5))
      .selectAll("text")
      .style("font-size", "10px");

    g.append("g")
      .call(d3.axisLeft(yScale).ticks(4))
      .selectAll("text")
      .style("font-size", "10px");

    // Zero lines
    g.append("line")
      .attr("x1", xScale(0))
      .attr("x2", xScale(0))
      .attr("y1", 0)
      .attr("y2", innerHeight)
      .attr("stroke", "#333")
      .attr("stroke-width", 1)
      .attr("opacity", 0.3);

    g.append("line")
      .attr("x1", 0)
      .attr("x2", innerWidth)
      .attr("y1", yScale(0))
      .attr("y2", yScale(0))
      .attr("stroke", "#333")
      .attr("stroke-width", 1)
      .attr("opacity", 0.3);

    // Function curve
    g.append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", chartConfig.colors[functionName])
      .attr("stroke-width", 3)
      .attr("d", line);

    // Title
    g.append("text")
      .attr("x", innerWidth / 2)
      .attr("y", -5)
      .attr("text-anchor", "middle")
      .attr("font-size", "14px")
      .attr("font-weight", "bold")
      .attr("fill", chartConfig.colors[functionName])
      .text(functionName.toUpperCase());

    // Interactive dots for precision
    const dots = g.selectAll(".dot")
      .data(data.filter((d, i) => i % 10 === 0)) // Sample every 10th point
      .enter().append("circle")
      .attr("class", "dot")
      .attr("cx", d => xScale(d.x))
      .attr("cy", d => yScale(d.y))
      .attr("r", 0)
      .attr("fill", chartConfig.colors[functionName])
      .attr("opacity", 0);

    // Tooltip
    const tooltip = d3.select("body").append("div")
      .attr("class", `tooltip-${functionName}`)
      .style("position", "absolute")
      .style("background", "rgba(0,0,0,0.8)")
      .style("color", "white")
      .style("padding", "8px")
      .style("border-radius", "4px")
      .style("font-size", "12px")
      .style("pointer-events", "none")
      .style("opacity", 0);

    // Hover interactions
    g.append("rect")
      .attr("width", innerWidth)
      .attr("height", innerHeight)
      .attr("fill", "none")
      .attr("pointer-events", "all")
      .on("mouseover", function() {
        dots.attr("r", 3).attr("opacity", 0.7);
      })
      .on("mouseout", function() {
        dots.attr("r", 0).attr("opacity", 0);
        tooltip.style("opacity", 0);
      })
      .on("mousemove", function(event) {
        const [mouseX] = d3.pointer(event);
        const x = xScale.invert(mouseX);
        const y = func(x);
        
        tooltip.style("opacity", 1)
          .style("left", (event.pageX + 10) + "px")
          .style("top", (event.pageY - 10) + "px")
          .html(`<strong>${functionName}(${x.toFixed(2)})</strong><br/>= ${y.toFixed(4)}`);
      });
  }

  function initializeCharts() {
    // Create all three charts
    createFunctionChart("sigmoid-chart", "sigmoid", functions.sigmoid);
    createFunctionChart("relu-chart", "relu", functions.relu);
    createFunctionChart("elu-chart", "elu", functions.elu);
  }

  // Initialize when ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeCharts);
  } else {
    setTimeout(initializeCharts, 200);
  }
})();
</script>

### 6.3 Exercise 3: Calculate Loss Functions 📉

Loss functions measure how well a model's prediction matches the actual target value. The goal of training is to minimize this loss.

#### MAE (Mean Absolute Error):
The average of the absolute differences between predictions and actual values.

$$\text{MAE} = \frac{1}{n} \sum_{i=1}^{n} |y_i - \hat{y}_i|$$

#### MSE (Mean Squared Error):
The average of the squared differences. It penalizes larger errors more heavily than MAE.

$$\text{MSE} = \frac{1}{n} \sum_{i=1}^{n} (y_i - \hat{y}_i)^2$$

### 6.4 Exercise 4: Estimate Trigonometric Functions 📐

Trigonometric functions like sin(x) and cos(x) can be approximated using their Taylor series expansions. This is a great exercise in using loops and factorials.

#### Sine Approximation:
$$\sin(x) \approx x - \frac{x^3}{3!} + \frac{x^5}{5!} - \frac{x^7}{7!} + \cdots$$

#### Cosine Approximation:
$$\cos(x) \approx 1 - \frac{x^2}{2!} + \frac{x^4}{4!} - \frac{x^6}{6!} + \cdots$$

This requires implementing a factorial function and then summing the terms of the series in a loop.

### 📊 Interactive Taylor Series Visualization

<div class="d3-container" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 35px; border-radius: 20px; margin: 25px 0; box-shadow: 0 20px 40px rgba(0,0,0,0.15);">

<h4 style="text-align: center; color: white; margin-bottom: 35px; font-size: 24px; text-shadow: 0 2px 8px rgba(0,0,0,0.3);">📐 Taylor Series Approximation Progress</h4>

<div id="taylor-series-chart" style="background: rgba(255,255,255,0.95); border-radius: 15px; box-shadow: 0 10px 25px rgba(0,0,0,0.2); margin-bottom: 25px;"></div>

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px; margin-bottom: 25px;">

<div style="background: rgba(255,255,255,0.1); padding: 20px; border-radius: 12px; backdrop-filter: blur(10px);">
<h5 style="color: white; margin: 0 0 15px 0; display: flex; align-items: center; gap: 8px;">
  <span style="color: #ff6b6b;">●</span> Term 1: sin(x) ≈ x
</h5>
<p style="color: white; margin: 0; opacity: 0.9; font-size: 14px;">Basic linear approximation</p>
<div style="margin-top: 10px; padding: 8px 12px; background: rgba(255,107,107,0.2); border-radius: 6px; color: white; font-weight: bold; font-size: 12px;">Accuracy: Poor</div>
</div>

<div style="background: rgba(255,255,255,0.1); padding: 20px; border-radius: 12px; backdrop-filter: blur(10px);">
<h5 style="color: white; margin: 0 0 15px 0; display: flex; align-items: center; gap: 8px;">
  <span style="color: #4ecdc4;">●</span> Term 2: + x³/3!
</h5>
<p style="color: white; margin: 0; opacity: 0.9; font-size: 14px;">Cubic correction term</p>
<div style="margin-top: 10px; padding: 8px 12px; background: rgba(78,205,196,0.2); border-radius: 6px; color: white; font-weight: bold; font-size: 12px;">Accuracy: Fair</div>
</div>

<div style="background: rgba(255,255,255,0.1); padding: 20px; border-radius: 12px; backdrop-filter: blur(10px);">
<h5 style="color: white; margin: 0 0 15px 0; display: flex; align-items: center; gap: 8px;">
  <span style="color: #95e1d3;">●</span> Term 3: + x⁵/5!
</h5>
<p style="color: white; margin: 0; opacity: 0.9; font-size: 14px;">Fifth order term</p>
<div style="margin-top: 10px; padding: 8px 12px; background: rgba(149,225,211,0.2); border-radius: 6px; color: white; font-weight: bold; font-size: 12px;">Accuracy: Good</div>
</div>

<div style="background: rgba(255,255,255,0.1); padding: 20px; border-radius: 12px; backdrop-filter: blur(10px);">
<h5 style="color: white; margin: 0 0 15px 0; display: flex; align-items: center; gap: 8px;">
  <span style="color: #a8e6cf;">●</span> Term 4: + x⁷/7!
</h5>
<p style="color: white; margin: 0; opacity: 0.9; font-size: 14px;">Seventh order term</p>
<div style="margin-top: 10px; padding: 8px 12px; background: rgba(168,230,207,0.2); border-radius: 6px; color: white; font-weight: bold; font-size: 12px;">Accuracy: Very Good</div>
</div>

<div style="background: rgba(255,255,255,0.1); padding: 20px; border-radius: 12px; backdrop-filter: blur(10px);">
<h5 style="color: white; margin: 0 0 15px 0; display: flex; align-items: center; gap: 8px;">
  <span style="color: #fce38a;">●</span> Term 5+: Higher Orders
</h5>
<p style="color: white; margin: 0; opacity: 0.9; font-size: 14px;">x⁹/9! + x¹¹/11! + ...</p>
<div style="margin-top: 10px; padding: 8px 12px; background: rgba(252,227,138,0.2); border-radius: 6px; color: white; font-weight: bold; font-size: 12px;">Accuracy: Excellent</div>
</div>

</div>

<div style="background: rgba(255,255,255,0.1); padding: 25px; border-radius: 12px; text-align: center; backdrop-filter: blur(10px);">
<p style="margin: 0; color: white; font-size: 16px; opacity: 0.95;">
<strong>🔍 Key Insight:</strong> Each additional term dramatically improves accuracy, especially for values further from x=0
</p>
</div>

</div>

<script src="https://d3js.org/d3.v7.min.js"></script>
<script>
(function() {
  // Check if D3 is loaded
  if (typeof d3 === 'undefined') {
    console.error("D3.js not loaded!");
    return;
  }

  // Taylor series approximation functions
  function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
  }

  function taylorSine(x, terms) {
    let result = 0;
    for (let n = 0; n < terms; n++) {
      const term = Math.pow(-1, n) * Math.pow(x, 2*n + 1) / factorial(2*n + 1);
      result += term;
    }
    return result;
  }

  // Chart configuration
  const config = {
    width: 900,
    height: 500,
    margin: { top: 40, right: 120, bottom: 60, left: 80 },
    xRange: [-Math.PI, Math.PI],
    colors: {
      exact: "#2c3e50",
      term1: "#ff6b6b", 
      term2: "#4ecdc4",
      term3: "#95e1d3",
      term4: "#a8e6cf",
      term5: "#fce38a"
    }
  };

  function createTaylorChart() {
    const container = d3.select("#taylor-series-chart");
    if (container.empty()) {
      console.error("Container #taylor-series-chart not found!");
      return;
    }
    
    container.selectAll("*").remove();

    const svg = container.append("svg")
      .attr("width", config.width)
      .attr("height", config.height);

    const innerWidth = config.width - config.margin.left - config.margin.right;
    const innerHeight = config.height - config.margin.top - config.margin.bottom;

    const g = svg.append("g")
      .attr("transform", `translate(${config.margin.left}, ${config.margin.top})`);

    // Generate data
    const xValues = [];
    for (let x = config.xRange[0]; x <= config.xRange[1]; x += 0.05) {
      xValues.push(x);
    }

    const datasets = {
      exact: xValues.map(x => ({ x, y: Math.sin(x) })),
      term1: xValues.map(x => ({ x, y: taylorSine(x, 1) })),
      term2: xValues.map(x => ({ x, y: taylorSine(x, 2) })),
      term3: xValues.map(x => ({ x, y: taylorSine(x, 3) })),
      term4: xValues.map(x => ({ x, y: taylorSine(x, 4) })),
      term5: xValues.map(x => ({ x, y: taylorSine(x, 5) }))
    };

    // Scales
    const xScale = d3.scaleLinear()
      .domain(config.xRange)
      .range([0, innerWidth]);

    const yScale = d3.scaleLinear()
      .domain([-2, 2])
      .range([innerHeight, 0]);

    // Grid
    const xGrid = g.append("g")
      .attr("class", "grid")
      .selectAll(".grid-x")
      .data(xScale.ticks(8))
      .enter().append("line")
      .attr("x1", d => xScale(d))
      .attr("x2", d => xScale(d))
      .attr("y1", 0)
      .attr("y2", innerHeight)
      .attr("stroke", "#e0e0e0")
      .attr("stroke-width", 1)
      .attr("opacity", 0.7);

    const yGrid = g.append("g")
      .attr("class", "grid")
      .selectAll(".grid-y")
      .data(yScale.ticks(6))
      .enter().append("line")
      .attr("x1", 0)
      .attr("x2", innerWidth)
      .attr("y1", d => yScale(d))
      .attr("y2", d => yScale(d))
      .attr("stroke", "#e0e0e0")
      .attr("stroke-width", 1)
      .attr("opacity", 0.7);

    // Axes
    g.append("g")
      .attr("transform", `translate(0, ${innerHeight})`)
      .call(d3.axisBottom(xScale)
        .ticks(8)
        .tickFormat(d => {
          if (d === 0) return "0";
          if (d === Math.PI) return "π";
          if (d === -Math.PI) return "-π";
          if (d === Math.PI/2) return "π/2";
          if (d === -Math.PI/2) return "-π/2";
          return d.toFixed(1);
        }))
      .selectAll("text")
      .style("font-size", "12px")
      .style("font-weight", "500");

    g.append("g")
      .call(d3.axisLeft(yScale).ticks(6))
      .selectAll("text")
      .style("font-size", "12px")
      .style("font-weight", "500");

    // Zero lines
    g.append("line")
      .attr("x1", xScale(0))
      .attr("x2", xScale(0))
      .attr("y1", 0)
      .attr("y2", innerHeight)
      .attr("stroke", "#666")
      .attr("stroke-width", 2)
      .attr("opacity", 0.4);

    g.append("line")
      .attr("x1", 0)
      .attr("x2", innerWidth)
      .attr("y1", yScale(0))
      .attr("y2", yScale(0))
      .attr("stroke", "#666")
      .attr("stroke-width", 2)
      .attr("opacity", 0.4);

    // Line generator
    const line = d3.line()
      .x(d => xScale(d.x))
      .y(d => yScale(Math.max(-2, Math.min(2, d.y))))
      .curve(d3.curveMonotoneX);

    // State for toggling
    const visible = {
      exact: true,
      term1: true,
      term2: true,
      term3: true,
      term4: true,
      term5: true
    };

    // Plot lines
    const lines = {};
    Object.keys(datasets).forEach(key => {
      lines[key] = g.append("path")
        .datum(datasets[key])
        .attr("fill", "none")
        .attr("stroke", config.colors[key])
        .attr("stroke-width", key === 'exact' ? 4 : 3)
        .attr("stroke-dasharray", key === 'exact' ? "none" : "none")
        .attr("opacity", key === 'exact' ? 1 : 0.8)
        .attr("d", line)
        .style("filter", "drop-shadow(0 2px 4px rgba(0,0,0,0.1))");
    });

    // Interactive legend
    const legend = svg.append("g")
      .attr("transform", `translate(${config.width - 110}, 60)`);

    const legendData = [
      { key: 'exact', label: 'sin(x) exact', color: config.colors.exact },
      { key: 'term1', label: '1 term', color: config.colors.term1 },
      { key: 'term2', label: '2 terms', color: config.colors.term2 },
      { key: 'term3', label: '3 terms', color: config.colors.term3 },
      { key: 'term4', label: '4 terms', color: config.colors.term4 },
      { key: 'term5', label: '5 terms', color: config.colors.term5 }
    ];

    const legendItems = legend.selectAll(".legend-item")
      .data(legendData)
      .enter().append("g")
      .attr("class", "legend-item")
      .attr("transform", (d, i) => `translate(0, ${i * 25})`)
      .style("cursor", "pointer")
      .on("click", function(event, d) {
        visible[d.key] = !visible[d.key];
        lines[d.key].attr("opacity", visible[d.key] ? (d.key === 'exact' ? 1 : 0.8) : 0.1);
        d3.select(this).select("text").attr("opacity", visible[d.key] ? 1 : 0.5);
        d3.select(this).select("line").attr("opacity", visible[d.key] ? 1 : 0.3);
      });

    legendItems.append("line")
      .attr("x1", 0)
      .attr("x2", 20)
      .attr("y1", 0)
      .attr("y2", 0)
      .attr("stroke", d => d.color)
      .attr("stroke-width", 3);

    legendItems.append("text")
      .attr("x", 25)
      .attr("y", 4)
      .text(d => d.label)
      .style("font-size", "12px")
      .style("font-weight", "500")
      .attr("fill", "#333");



    // Axis labels
    g.append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 0 - config.margin.left)
      .attr("x", 0 - (innerHeight / 2))
      .attr("dy", "1em")
      .style("text-anchor", "middle")
      .style("font-size", "14px")
      .style("font-weight", "600")
      .attr("fill", "#444")
      .text("Function Value");

    g.append("text")
      .attr("transform", `translate(${innerWidth / 2}, ${innerHeight + config.margin.bottom - 15})`)
      .style("text-anchor", "middle")
      .style("font-size", "14px")
      .style("font-weight", "600")
      .attr("fill", "#444")
      .text("x (radians)");

    // Title
    g.append("text")
      .attr("x", innerWidth / 2)
      .attr("y", -15)
      .attr("text-anchor", "middle")
      .style("font-size", "18px")
      .style("font-weight", "bold")
      .attr("fill", "#333")
      .text("Taylor Series Approximation of sin(x)");
  }

   // Initialize when DOM is ready
   function initChart() {
     try {
       createTaylorChart();
     } catch (error) {
       console.error("Error creating chart:", error);
     }
   }
   
   if (document.readyState === 'loading') {
     document.addEventListener('DOMContentLoaded', initChart);
   } else {
     setTimeout(initChart, 500);
   }
 })();
 </script>

**📊 Taylor Series Accuracy Comparison for sin(π/4) ≈ 0.7071:**

| Terms | Formula | Approximation | Error | Accuracy |
|-------|---------|---------------|-------|----------|
| 1 | x | 0.7854 | 0.0783 | ❌ Poor |
| 2 | x - x³/6 | 0.6846 | 0.0225 | ⚠️ Fair |
| 3 | x - x³/6 + x⁵/120 | 0.7071 | 0.0000 | ✅ Good |
| 4 | + x⁷/5040 | 0.7071 | 0.0000 | ✅ Excellent |

**🎯 Key Insights:**
- **More terms = Higher accuracy** especially away from x=0
- **Convergence radius** determines where series works well
- **Computational trade-off** between accuracy and speed

The Taylor series expansion is a powerful mathematical tool that allows us to approximate complex functions using polynomial terms. As shown in the progression above, adding more terms progressively improves the accuracy of the approximation. This concept is fundamental in numerical computing and machine learning algorithms where exact calculations may be computationally expensive.

## 🛠️ 7. Development Environment Setup

### 7.1 Python Environment Management

<div style="background: linear-gradient(135deg, #2c3e50, #3498db); padding: 35px; border-radius: 20px; margin: 25px 0; box-shadow: 0 20px 40px rgba(0,0,0,0.2);">

<h4 style="text-align: center; color: white; margin-bottom: 30px; font-size: 22px; text-shadow: 0 2px 4px rgba(0,0,0,0.3);">🛠️ Python Development Environment Ecosystem</h4>

<div style="position: relative; padding: 20px 0;">

<!-- Python Development Root -->
<div style="background: linear-gradient(135deg, #e74c3c, #c0392b); padding: 20px; border-radius: 15px; text-align: center; margin-bottom: 30px; box-shadow: 0 10px 25px rgba(0,0,0,0.3);">
<h5 style="margin: 0; color: white; font-size: 20px;">🐍 Python Development</h5>
<p style="margin: 5px 0 0 0; color: white; opacity: 0.9; font-size: 14px;">Foundation for AI/ML Development</p>
</div>

<!-- Two Main Branches -->
<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 30px; margin-bottom: 25px;">

<!-- Local Environment Branch -->
<div style="background: rgba(255,255,255,0.1); padding: 25px; border-radius: 15px; backdrop-filter: blur(10px);">
<h5 style="margin: 0 0 20px 0; color: #f39c12; text-align: center; font-size: 18px;">💻 Local Environment</h5>

<div style="margin-bottom: 15px; background: rgba(255,255,255,0.1); padding: 15px; border-radius: 10px;">
<h6 style="margin: 0 0 8px 0; color: white;">📦 Anaconda Distribution</h6>
<p style="margin: 0; color: white; opacity: 0.8; font-size: 13px;">→ Package Management</p>
</div>

<div style="margin-bottom: 15px; background: rgba(255,255,255,0.1); padding: 15px; border-radius: 10px;">
<h6 style="margin: 0 0 8px 0; color: white;">🏗️ Virtual Environments</h6>
<p style="margin: 0; color: white; opacity: 0.8; font-size: 13px;">→ Isolated Dependencies</p>
</div>

<div style="background: rgba(255,255,255,0.1); padding: 15px; border-radius: 10px;">
<h6 style="margin: 0 0 8px 0; color: white;">📔 Jupyter Notebook</h6>
<p style="margin: 0; color: white; opacity: 0.8; font-size: 13px;">→ Interactive Development</p>
</div>

</div>

<!-- Cloud Environment Branch -->
<div style="background: rgba(255,255,255,0.1); padding: 25px; border-radius: 15px; backdrop-filter: blur(10px);">
<h5 style="margin: 0 0 20px 0; color: #9b59b6; text-align: center; font-size: 18px;">☁️ Cloud Environment</h5>

<div style="margin-bottom: 15px; background: rgba(255,255,255,0.1); padding: 15px; border-radius: 10px;">
<h6 style="margin: 0 0 8px 0; color: white;">🔬 Google Colab</h6>
<p style="margin: 0; color: white; opacity: 0.8; font-size: 13px;">Free GPU/TPU access</p>
</div>

<div style="margin-bottom: 15px; background: rgba(255,255,255,0.1); padding: 15px; border-radius: 10px;">
<h6 style="margin: 0 0 8px 0; color: white;">🚀 Replit</h6>
<p style="margin: 0; color: white; opacity: 0.8; font-size: 13px;">Collaborative coding</p>
</div>

<div style="background: rgba(255,255,255,0.1); padding: 15px; border-radius: 10px;">
<h6 style="margin: 0 0 8px 0; color: white;">📊 Codespaces</h6>
<p style="margin: 0; color: white; opacity: 0.8; font-size: 13px;">GitHub integration</p>
</div>

</div>

</div>

<div style="margin-top: 25px; padding: 20px; background: rgba(255,255,255,0.1); border-radius: 12px; text-align: center;">
<p style="margin: 0; color: white; font-size: 14px; opacity: 0.9;">
<strong>🎯 Recommendation:</strong> Start with Google Colab for learning, then transition to local Anaconda setup for serious projects
</p>
</div>

</div>

</div>

**Recommended Setup:**
```bash
# Install Anaconda (includes Python + popular packages)
# Download from: https://www.anaconda.com/download

# Create virtual environment
conda create -n aio2025 python=3.11
conda activate aio2025

# Install essential packages for AI
pip install numpy pandas matplotlib scikit-learn jupyter
```

### 7.2 Essential AI Libraries 

| Library | Purpose | Installation |
|---------|---------|-------------|
| **NumPy** | Numerical computing | `pip install numpy` |
| **Pandas** | Data manipulation | `pip install pandas` |
| **Matplotlib** | Data visualization | `pip install matplotlib` |
| **Scikit-learn** | Machine learning | `pip install scikit-learn` |
| **TensorFlow** | Deep learning | `pip install tensorflow` |
| **PyTorch** | Deep learning | `pip install torch` |

<div style="float: right; margin: 0 0 20px 20px; max-width: 40%;">
  <img src="/blog/images/ai-development-stack.png" alt="AI Development Technology Stack" style="width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
</div>

The AI development stack follows a hierarchical structure where each layer builds upon the previous one. Python serves as the foundation language, providing the syntax and basic functionality. NumPy and Pandas handle numerical computing and data manipulation respectively. Matplotlib enables data visualization, while Scikit-learn provides traditional machine learning algorithms. At the top, TensorFlow and PyTorch offer deep learning capabilities for building neural networks and advanced AI applications.

Understanding this stack progression helps you learn systematically - master the fundamentals before moving to more complex libraries. Each tool has its specialized purpose in the AI development workflow.

<div style="clear: both;"></div>

## 📊 8. Learning Progress Tracker

### 8.1 Week 1 Skills Checklist

<div style="background: linear-gradient(135deg, #8e44ad, #3498db); padding: 35px; border-radius: 20px; margin: 25px 0; box-shadow: 0 20px 40px rgba(0,0,0,0.2);">

<h4 style="text-align: center; color: white; margin-bottom: 30px; font-size: 22px; text-shadow: 0 2px 4px rgba(0,0,0,0.3);">📅 Week 1 Learning Timeline & Progress</h4>

<div style="position: relative;">

<!-- Research Skills Section -->
<div style="margin-bottom: 25px;">
<h5 style="color: #f39c12; margin-bottom: 15px; font-size: 16px;">🔍 Research Skills</h5>
<div style="position: relative; background: rgba(255,255,255,0.1); border-radius: 10px; padding: 15px;">
<div style="display: flex; gap: 15px;">
<div style="flex: 1; background: linear-gradient(135deg, #27ae60, #2ecc71); padding: 12px; border-radius: 8px; text-align: center;">
<div style="color: white; font-size: 14px; font-weight: bold;">Paper Reading (3-Pass)</div>
<div style="color: white; opacity: 0.8; font-size: 12px;">✅ Completed Days 1-2</div>
</div>
<div style="flex: 1; background: linear-gradient(135deg, #27ae60, #2ecc71); padding: 12px; border-radius: 8px; text-align: center;">
<div style="color: white; font-size: 14px; font-weight: bold;">Documentation Setup</div>
<div style="color: white; opacity: 0.8; font-size: 12px;">✅ Completed Days 2-3</div>
</div>
</div>
</div>
</div>

<!-- Python Basics Section -->
<div style="margin-bottom: 25px;">
<h5 style="color: #f39c12; margin-bottom: 15px; font-size: 16px;">🐍 Python Basics</h5>
<div style="position: relative; background: rgba(255,255,255,0.1); border-radius: 10px; padding: 15px;">
<div style="display: flex; gap: 15px;">
<div style="flex: 1; background: linear-gradient(135deg, #27ae60, #2ecc71); padding: 12px; border-radius: 8px; text-align: center;">
<div style="color: white; font-size: 14px; font-weight: bold;">Variables & Data Types</div>
<div style="color: white; opacity: 0.8; font-size: 12px;">✅ Days 3-4</div>
</div>
<div style="flex: 1; background: linear-gradient(135deg, #27ae60, #2ecc71); padding: 12px; border-radius: 8px; text-align: center;">
<div style="color: white; font-size: 14px; font-weight: bold;">Control Flow</div>
<div style="color: white; opacity: 0.8; font-size: 12px;">✅ Days 4-5</div>
</div>
<div style="flex: 1; background: linear-gradient(135deg, #27ae60, #2ecc71); padding: 12px; border-radius: 8px; text-align: center;">
<div style="color: white; font-size: 14px; font-weight: bold;">Functions</div>
<div style="color: white; opacity: 0.8; font-size: 12px;">✅ Days 5-6</div>
</div>
</div>
</div>
</div>

<!-- Database & SQL Section -->
<div style="margin-bottom: 25px;">
<h5 style="color: #f39c12; margin-bottom: 15px; font-size: 16px;">🗃️ Database & SQL</h5>
<div style="position: relative; background: rgba(255,255,255,0.1); border-radius: 10px; padding: 15px;">
<div style="display: flex; gap: 15px;">
<div style="flex: 1; background: linear-gradient(135deg, #27ae60, #2ecc71); padding: 12px; border-radius: 8px; text-align: center;">
<div style="color: white; font-size: 14px; font-weight: bold;">Database Concepts</div>
<div style="color: white; opacity: 0.8; font-size: 12px;">✅ Days 6-7</div>
</div>
<div style="flex: 1; background: linear-gradient(135deg, #27ae60, #2ecc71); padding: 12px; border-radius: 8px; text-align: center;">
<div style="color: white; font-size: 14px; font-weight: bold;">Basic SQL Queries</div>
<div style="color: white; opacity: 0.8; font-size: 12px;">✅ Days 7-8</div>
</div>
</div>
</div>
</div>

<!-- Coding Standards Section -->
<div style="margin-bottom: 25px;">
<h5 style="color: #f39c12; margin-bottom: 15px; font-size: 16px;">🏗️ Coding Standards</h5>
<div style="position: relative; background: rgba(255,255,255,0.1); border-radius: 10px; padding: 15px;">
<div style="display: flex; gap: 15px;">
<div style="flex: 1; background: linear-gradient(135deg, #27ae60, #2ecc71); padding: 12px; border-radius: 8px; text-align: center;">
<div style="color: white; font-size: 14px; font-weight: bold;">Clean Code Principles</div>
<div style="color: white; opacity: 0.8; font-size: 12px;">✅ Days 8-9</div>
</div>
<div style="flex: 1; background: linear-gradient(135deg, #27ae60, #2ecc71); padding: 12px; border-radius: 8px; text-align: center;">
<div style="color: white; font-size: 14px; font-weight: bold;">PEP-8 Guidelines</div>
<div style="color: white; opacity: 0.8; font-size: 12px;">✅ Days 9-10</div>
</div>
</div>
</div>
</div>

<!-- AI Mathematics Section -->
<div style="margin-bottom: 20px;">
<h5 style="color: #f39c12; margin-bottom: 15px; font-size: 16px;">🧮 AI Mathematics</h5>
<div style="position: relative; background: rgba(255,255,255,0.1); border-radius: 10px; padding: 15px;">
<div style="display: flex; gap: 15px;">
<div style="flex: 1; background: linear-gradient(135deg, #27ae60, #2ecc71); padding: 12px; border-radius: 8px; text-align: center;">
<div style="color: white; font-size: 14px; font-weight: bold;">Activation Functions</div>
<div style="color: white; opacity: 0.8; font-size: 12px;">✅ Days 10-11</div>
</div>
<div style="flex: 1; background: linear-gradient(135deg, #27ae60, #2ecc71); padding: 12px; border-radius: 8px; text-align: center;">
<div style="color: white; font-size: 14px; font-weight: bold;">Loss Functions</div>
<div style="color: white; opacity: 0.8; font-size: 12px;">✅ Days 11-12</div>
</div>
<div style="flex: 1; background: linear-gradient(135deg, #27ae60, #2ecc71); padding: 12px; border-radius: 8px; text-align: center;">
<div style="color: white; font-size: 14px; font-weight: bold;">Metrics Calculation</div>
<div style="color: white; opacity: 0.8; font-size: 12px;">✅ Days 12-13</div>
</div>
</div>
</div>
</div>

<div style="margin-top: 25px; padding: 20px; background: rgba(46, 204, 113, 0.2); border-radius: 12px; text-align: center; border: 2px solid rgba(46, 204, 113, 0.4);">
<p style="margin: 0; color: white; font-size: 16px; font-weight: bold;">
🎉 Week 1 Complete! All learning objectives achieved on schedule
</p>
</div>

</div>

</div>

### 8.2 Self-Assessment Matrix

| Skill Area | Beginner (1-2) | Intermediate (3-4) | Advanced (5) | My Level |
|------------|------------------|-------------------|--------------|----------|
| **Paper Reading** | Can skim abstracts | Uses 3-pass method | Critical analysis | ⭐⭐⭐___ |
| **Python Basics** | Basic syntax | Control flow + functions | OOP + advanced | ⭐⭐⭐⭐_ |
| **SQL Queries** | SELECT statements | JOINs + filtering | Complex queries | ⭐⭐⭐___ |
| **Clean Code** | Basic formatting | PEP-8 compliance | Design patterns | ⭐⭐⭐___ |
| **AI Math** | Basic formulas | Implementation | Optimization | ⭐⭐_____ |

---

## 🎯 Week 1 Summary

Week 1 of AIO 2025 has provided a solid foundation in:

✅ **Research Skills:** Paper reading and documentation strategies  
✅ **Python Fundamentals:** Variables, functions, control flow  
✅ **Database Basics:** SQL queries and data management  
✅ **Code Quality:** Clean coding practices and methodologies  
✅ **AI Mathematics:** Activation functions, metrics, and approximations

### 📚 Next Steps & Action Plan:

<div style="background: linear-gradient(135deg, #16a085, #2ecc71); padding: 35px; border-radius: 20px; margin: 25px 0; box-shadow: 0 20px 40px rgba(0,0,0,0.2);">

<h4 style="text-align: center; color: white; margin-bottom: 30px; font-size: 22px; text-shadow: 0 2px 4px rgba(0,0,0,0.3);">🎯 Next Steps & Action Plan</h4>

<div style="position: relative;">

<!-- Starting Point -->
<div style="background: rgba(255,255,255,0.2); padding: 20px; border-radius: 15px; text-align: center; margin-bottom: 30px; border: 3px solid rgba(255,255,255,0.3);">
<h5 style="margin: 0; color: white; font-size: 18px;">🎉 Week 1 Complete</h5>
<p style="margin: 5px 0 0 0; color: white; opacity: 0.9; font-size: 14px;">Foundations established, ready for next phase</p>
</div>

<!-- Three Main Action Branches -->
<div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 25px; margin-bottom: 30px;">

<!-- Practice Coding Branch -->
<div style="background: rgba(255,255,255,0.1); padding: 20px; border-radius: 15px; backdrop-filter: blur(10px);">
<h5 style="margin: 0 0 15px 0; color: #f1c40f; text-align: center; font-size: 16px;">💻 Practice Coding</h5>

<div style="margin-bottom: 12px; background: rgba(255,255,255,0.1); padding: 12px; border-radius: 8px;">
<div style="color: white; font-size: 14px; font-weight: bold;">🔧 Implement Exercises</div>
<div style="color: white; opacity: 0.8; font-size: 12px;">F1-Score, activation functions</div>
</div>

<div style="background: rgba(255,255,255,0.1); padding: 12px; border-radius: 8px;">
<div style="color: white; font-size: 14px; font-weight: bold;">📂 Build Portfolio</div>
<div style="color: white; opacity: 0.8; font-size: 12px;">GitHub projects showcase</div>
</div>

</div>

<!-- Setup Environment Branch -->
<div style="background: rgba(255,255,255,0.1); padding: 20px; border-radius: 15px; backdrop-filter: blur(10px);">
<h5 style="margin: 0 0 15px 0; color: #e74c3c; text-align: center; font-size: 16px;">⚙️ Setup Environment</h5>

<div style="margin-bottom: 12px; background: rgba(255,255,255,0.1); padding: 12px; border-radius: 8px;">
<div style="color: white; font-size: 14px; font-weight: bold;">🛠️ Install Tools</div>
<div style="color: white; opacity: 0.8; font-size: 12px;">Anaconda, Python 3.11</div>
</div>

<div style="background: rgba(255,255,255,0.1); padding: 12px; border-radius: 8px;">
<div style="color: white; font-size: 14px; font-weight: bold;">🎨 Configure IDE</div>
<div style="color: white; opacity: 0.8; font-size: 12px;">VS Code, Jupyter setup</div>
</div>

</div>

<!-- Read AI Papers Branch -->
<div style="background: rgba(255,255,255,0.1); padding: 20px; border-radius: 15px; backdrop-filter: blur(10px);">
<h5 style="margin: 0 0 15px 0; color: #9b59b6; text-align: center; font-size: 16px;">📚 Read AI Papers</h5>

<div style="margin-bottom: 12px; background: rgba(255,255,255,0.1); padding: 12px; border-radius: 8px;">
<div style="color: white; font-size: 14px; font-weight: bold;">📖 Apply 3-Pass Method</div>
<div style="color: white; opacity: 0.8; font-size: 12px;">Skim → Read → Analyze</div>
</div>

<div style="background: rgba(255,255,255,0.1); padding: 12px; border-radius: 8px;">
<div style="color: white; font-size: 14px; font-weight: bold;">📝 Take Notes</div>
<div style="color: white; opacity: 0.8; font-size: 12px;">Document key insights</div>
</div>

</div>

</div>

<!-- Final Destination -->
<div style="background: linear-gradient(135deg, #3498db, #2980b9); padding: 20px; border-radius: 15px; text-align: center; border: 3px solid rgba(255,255,255,0.3); box-shadow: 0 10px 25px rgba(0,0,0,0.3);">
<h5 style="margin: 0; color: white; font-size: 18px;">🚀 Week 2 Ready</h5>
<p style="margin: 5px 0 0 0; color: white; opacity: 0.9; font-size: 14px;">Advanced Python, ML fundamentals, first AI model</p>
</div>

</div>

<div style="margin-top: 25px; padding: 20px; background: rgba(255,255,255,0.1); border-radius: 12px; text-align: center; border-left: 4px solid #f1c40f;">
<p style="margin: 0; color: white; font-size: 14px; opacity: 0.9;">
<strong>⏰ Timeline:</strong> Complete all branches within 24-48 hours for optimal momentum into Week 2
</p>
</div>

</div>

</div>

#### 🎯 Immediate Actions (Next 24 hours):
1. **Setup Development Environment**
   - Install Anaconda/Python 3.11
   - Create `aio2025` virtual environment
   - Install essential libraries

2. **Practice Coding**
   - Implement F1-Score calculator
   - Code activation functions (Sigmoid, ReLU, ELU)
   - Create Taylor series approximations

3. **Start Paper Reading**
   - Find 1 AI paper related to your interests
   - Apply the 3-pass reading method
   - Document key insights

#### 📈 Week 2 Preparation:
- Review and strengthen any weak areas identified in self-assessment
- Prepare questions for upcoming lectures
- Set up a learning journal to track daily progress

### 🏆 Key Achievements Unlocked:

✅ **Research Foundation:** Master the art of finding and reading scientific papers  
✅ **Python Proficiency:** Understand core programming concepts and syntax  
✅ **Database Basics:** Query data effectively with SQL  
✅ **Code Quality:** Write clean, maintainable Python code following PEP-8  
✅ **AI Mathematics:** Implement activation functions, loss functions, and metrics  
✅ **Environment Setup:** Ready to develop AI applications  

### 💡 Weekly Reflection Questions:

1. **What was the most challenging concept this week?**
2. **Which skill do you want to improve most?**
3. **How will you apply these fundamentals in future projects?**
4. **What questions do you have for Week 2?**

### 🔗 Additional Resources:

- **Python Practice:** [LeetCode](https://leetcode.com/), [HackerRank](https://hackerrank.com/)
- **SQL Practice:** [SQLBolt](https://sqlbolt.com/), [W3Schools SQL](https://w3schools.com/sql/)
- **AI Papers:** [ArXiv](https://arxiv.org/), [Papers With Code](https://paperswithcode.com/)
- **Documentation:** [Python Docs](https://docs.python.org/), [NumPy Docs](https://numpy.org/doc/)

---

*Week 1 knowledge synthesis completed. Foundation built. Ready to advance to Week 2 topics! 🚀*

**Next Post Preview:** *Week 2 will cover advanced Python concepts, machine learning fundamentals, and your first AI model implementation!*

---
