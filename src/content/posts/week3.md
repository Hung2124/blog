---
title: "📚 AIO2025 - Week 3: Object-Oriented Programming, SQL & Data Structures"
published: 2025-06-23
description: "Comprehensive guide to OOP principles, PyTorch custom modules, SQL advanced queries, and fundamental data structures with interactive D3.js visualizations"
tags: ["AIO2025", "Object-Oriented Programming", "SQL", "Data Structures", "PyTorch", "Python", "Interactive Learning"]
category: "AI Development"
draft: false
---

> 🎯 **Learning Objectives**: Master object-oriented programming principles, advanced SQL operations, and fundamental data structures through interactive visualizations and practical examples.

<div class="toc-container" style="background-color: #f8f9fa; border-radius: 10px; padding: 20px; margin: 30px 0; border: 1px solid #e9ecef; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
  <div class="toc-header" style="font-weight: bold; display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
    <div style="font-size: 1.2em; color: #3273dc;">📚 Table of Contents</div>
  </div>
  
  <div class="toc-content" style="display: block; overflow: hidden;">
    <ul style="list-style-type: none; padding-left: 0;">
      <li style="margin-bottom: 8px;">
        <a href="#object-oriented-programming" style="color: #3273dc; text-decoration: none; display: flex; align-items: center;">
          <span style="margin-right: 8px;">🎯</span> 1. Object-Oriented Programming (OOP)
        </a>
        <ul style="list-style-type: none; padding-left: 20px; margin-top: 5px;">
          <li style="margin-bottom: 5px;">
            <a href="#classes-and-objects-fundamentals" style="color: #4a4a4a; text-decoration: none;">1.1. Classes and Objects Fundamentals</a>
          </li>
          <li style="margin-bottom: 5px;">
            <a href="#four-core-principles" style="color: #4a4a4a; text-decoration: none;">1.2. Four Core Principles of OOP</a>
            <ul style="list-style-type: none; padding-left: 15px; margin-top: 3px;">
              <li style="margin-bottom: 3px;">
                <a href="#encapsulation" style="color: #666; text-decoration: none;">1.2.1. Encapsulation</a>
              </li>
              <li style="margin-bottom: 3px;">
                <a href="#abstraction" style="color: #666; text-decoration: none;">1.2.2. Abstraction</a>
              </li>
              <li style="margin-bottom: 3px;">
                <a href="#inheritance" style="color: #666; text-decoration: none;">1.2.3. Inheritance</a>
              </li>
              <li style="margin-bottom: 3px;">
                <a href="#polymorphism" style="color: #666; text-decoration: none;">1.2.4. Polymorphism</a>
              </li>
            </ul>
          </li>
          <li style="margin-bottom: 5px;">
            <a href="#pytorch-custom-class" style="color: #4a4a4a; text-decoration: none;">1.3. Custom Class in PyTorch (nn.Module)</a>
          </li>
        </ul>
      </li>
      <li style="margin-bottom: 8px;">
        <a href="#database-sql" style="color: #3273dc; text-decoration: none; display: flex; align-items: center;">
          <span style="margin-right: 8px;">💾</span> 2. Database - SQL Advanced Techniques
        </a>
        <ul style="list-style-type: none; padding-left: 20px; margin-top: 5px;">
          <li style="margin-bottom: 5px;">
            <a href="#sql-join-clause" style="color: #4a4a4a; text-decoration: none;">2.1. SQL JOIN Clause</a>
          </li>
          <li style="margin-bottom: 5px;">
            <a href="#subqueries" style="color: #4a4a4a; text-decoration: none;">2.2. Subqueries (Nested Queries)</a>
          </li>
          <li style="margin-bottom: 5px;">
            <a href="#common-table-expressions" style="color: #4a4a4a; text-decoration: none;">2.3. Common Table Expressions (CTEs)</a>
          </li>
          <li style="margin-bottom: 5px;">
            <a href="#temporary-tables" style="color: #4a4a4a; text-decoration: none;">2.4. Temporary Tables</a>
          </li>
          <li style="margin-bottom: 5px;">
            <a href="#stored-procedures" style="color: #4a4a4a; text-decoration: none;">2.5. Stored Procedures and Triggers</a>
          </li>
        </ul>
      </li>
      <li style="margin-bottom: 8px;">
        <a href="#data-structures" style="color: #3273dc; text-decoration: none; display: flex; align-items: center;">
          <span style="margin-right: 8px;">🏗️</span> 3. Data Structures Fundamentals
        </a>
        <ul style="list-style-type: none; padding-left: 20px; margin-top: 5px;">
          <li style="margin-bottom: 5px;">
            <a href="#stack" style="color: #4a4a4a; text-decoration: none;">3.1. Stack</a>
          </li>
          <li style="margin-bottom: 5px;">
            <a href="#queue" style="color: #4a4a4a; text-decoration: none;">3.2. Queue</a>
          </li>
          <li style="margin-bottom: 5px;">
            <a href="#tree" style="color: #4a4a4a; text-decoration: none;">3.3. Tree</a>
          </li>
          <li style="margin-bottom: 5px;">
            <a href="#binary-search-tree" style="color: #4a4a4a; text-decoration: none;">3.4. Binary Search Tree (BST)</a>
          </li>
        </ul>
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

---

## 🎯 1. Object-Oriented Programming (OOP)
<span id="object-oriented-programming"></span>

> 💡 **Core Concept**: OOP is a programming paradigm based on "objects" - entities that encapsulate data (attributes) and behavior (methods) together.

### 💻 1.1. Classes and Objects Fundamentals
<span id="classes-and-objects-fundamentals"></span>

| Concept | Definition | Key Characteristics |
|---------|------------|-------------------|
| **Class** | Blueprint for creating objects | Defines attributes and methods |
| **Object** | Instance of a class | Contains actual data and can execute methods |
| **Attributes** | Data stored in objects | Variables that hold object state |
| **Methods** | Functions defined in classes | Operations that objects can perform |

#### 🎨 Interactive Class-Object Relationship Visualization

<div id="class-object-diagram" style="width: 100%; height: 500px; background: linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 75%, #4facfe 100%); border-radius: 12px; padding: 20px; margin: 20px 0; box-shadow: 0 8px 32px rgba(0,0,0,0.1);"></div>

<script src="https://d3js.org/d3.v7.min.js"></script>
<style>
/* Enhanced tooltip styles for better visibility */
.tooltip, .encapsulation-tooltip, .abstraction-tooltip, 
.inheritance-tooltip, .polymorphism-tooltip, .sql-joins-tooltip,
.tree-tooltip, .traversal-tooltip, .bst-tooltip {
  z-index: 10000 !important;
  pointer-events: none !important;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;
  line-height: 1.4 !important;
  text-align: left !important;
  border: 1px solid rgba(255,255,255,0.2) !important;
}

/* Ensure SVG containers don't interfere with tooltips */
svg {
  overflow: visible !important;
}

/* Stack context for D3 containers */
div[id$="-diagram"] {
  position: relative !important;
  z-index: 1 !important;
}
</style>
<script>
(function() {
  const container = d3.select("#class-object-diagram");
  const width = 800;
  const height = 460;
  
  const svg = container.append("svg")
    .attr("viewBox", `0 0 ${width} ${height}`)
    .style("width", "100%")
    .style("height", "100%");

  // Define unique gradients with proper IDs
  const defs = svg.append("defs");

  // Class gradient - Professional blue-teal spectrum
  const classGradient = defs.append("linearGradient")
    .attr("id", "class-obj-class-gradient")
    .attr("x1", "0%").attr("y1", "0%")
    .attr("x2", "100%").attr("y2", "100%");
  
  classGradient.append("stop")
    .attr("offset", "0%")
    .attr("stop-color", "#00b894");
  classGradient.append("stop")
    .attr("offset", "35%")
    .attr("stop-color", "#00cec9");
  classGradient.append("stop")
    .attr("offset", "70%")
    .attr("stop-color", "#74b9ff");
  classGradient.append("stop")
    .attr("offset", "100%")
    .attr("stop-color", "#0984e3");

  // Object gradients - Individual per object
  const obj1Gradient = defs.append("linearGradient")
    .attr("id", "class-obj-object1-gradient")
    .attr("x1", "0%").attr("y1", "0%")
    .attr("x2", "100%").attr("y2", "100%");
  
  obj1Gradient.append("stop")
    .attr("offset", "0%")
    .attr("stop-color", "#fdcb6e");
  obj1Gradient.append("stop")
    .attr("offset", "35%")
    .attr("stop-color", "#f39c12");
  obj1Gradient.append("stop")
    .attr("offset", "70%")
    .attr("stop-color", "#e17055");
  obj1Gradient.append("stop")
    .attr("offset", "100%")
    .attr("stop-color", "#d63031");

  const obj2Gradient = defs.append("linearGradient")
    .attr("id", "class-obj-object2-gradient")
    .attr("x1", "0%").attr("y1", "0%")
    .attr("x2", "100%").attr("y2", "100%");
  
  obj2Gradient.append("stop")
    .attr("offset", "0%")
    .attr("stop-color", "#e84393");
  obj2Gradient.append("stop")
    .attr("offset", "35%")
    .attr("stop-color", "#fd79a8");
  obj2Gradient.append("stop")
    .attr("offset", "70%")
    .attr("stop-color", "#6c5ce7");
  obj2Gradient.append("stop")
    .attr("offset", "100%")
    .attr("stop-color", "#a29bfe");

  const obj3Gradient = defs.append("linearGradient")
    .attr("id", "class-obj-object3-gradient")
    .attr("x1", "0%").attr("y1", "0%")
    .attr("x2", "100%").attr("y2", "100%");
  
  obj3Gradient.append("stop")
    .attr("offset", "0%")
    .attr("stop-color", "#00b894");
  obj3Gradient.append("stop")
    .attr("offset", "35%")
    .attr("stop-color", "#00cec9");
  obj3Gradient.append("stop")
    .attr("offset", "70%")
    .attr("stop-color", "#55efc4");
  obj3Gradient.append("stop")
    .attr("offset", "100%")
    .attr("stop-color", "#81ecec");

  // Drop shadow filter
  const filter = defs.append("filter")
    .attr("id", "class-obj-drop-shadow")
    .attr("x", "-50%").attr("y", "-50%")
    .attr("width", "200%").attr("height", "200%");
  
  filter.append("feDropShadow")
    .attr("dx", "3").attr("dy", "3")
    .attr("stdDeviation", "3")
    .attr("flood-opacity", "0.3");

  // Arrow markers with coordinated colors
  const classArrowMarker = defs.append("marker")
    .attr("id", "class-obj-class-arrow")
    .attr("viewBox", "-10 -5 10 10")
    .attr("refX", -8).attr("refY", 0)
    .attr("markerWidth", 6).attr("markerHeight", 6)
    .attr("orient", "auto");
  
  classArrowMarker.append("path")
    .attr("d", "M-10,-5 L0,0 L-10,5")
    .attr("fill", "#0984e3");

  // Class definition
  const classData = {
    name: "Class: Car",
    attributes: ["color: String", "brand: String", "model: String"],
    methods: ["start()", "stop()", "accelerate()"],
    x: 120,
    y: 100,
    width: 200,
    height: 190
  };

  // Object instances with gradient theme
  const objects = [
    { name: "Object 1", type: "Red Ferrari", x: 450, y: 50, gradientId: "class-obj-object1-gradient", textColor: "#ffffff" },
    { name: "Object 2", type: "Blue Ford", x: 450, y: 180, gradientId: "class-obj-object2-gradient", textColor: "#ffffff" },
    { name: "Object 3", type: "Black Tesla", x: 450, y: 310, gradientId: "class-obj-object3-gradient", textColor: "#2d3436" }
  ];

  // Draw class with gradient background
  const classGroup = svg.append("g");
  
  classGroup.append("rect")
    .attr("x", classData.x)
    .attr("y", classData.y)
    .attr("width", classData.width)
    .attr("height", classData.height)
    .attr("fill", "url(#class-obj-class-gradient)")
    .attr("stroke", "#ffffff")
    .attr("stroke-width", 2)
    .attr("rx", 12)
    .attr("filter", "url(#class-obj-drop-shadow)");

  classGroup.append("text")
    .attr("x", classData.x + classData.width/2)
    .attr("y", classData.y + 25)
    .attr("text-anchor", "middle")
    .attr("font-size", "16px")
    .attr("font-weight", "bold")
    .attr("fill", "#ffffff")
    .style("text-shadow", "2px 2px 4px rgba(0,0,0,0.5)")
    .text(classData.name);

  // Attributes section
  classGroup.append("text")
    .attr("x", classData.x + 10)
    .attr("y", classData.y + 50)
    .attr("font-size", "12px")
    .attr("font-weight", "bold")
    .attr("fill", "#ffffff")
    .style("text-shadow", "1px 1px 2px rgba(0,0,0,0.5)")
    .text("Attributes:");

  classData.attributes.forEach((attr, i) => {
    classGroup.append("text")
      .attr("x", classData.x + 15)
      .attr("y", classData.y + 70 + i * 16)
      .attr("font-size", "11px")
      .attr("fill", "#f8f9fa")
      .style("text-shadow", "1px 1px 2px rgba(0,0,0,0.3)")
      .text(attr);
  });

  // Methods section
  classGroup.append("text")
    .attr("x", classData.x + 10)
    .attr("y", classData.y + 130)
    .attr("font-size", "12px")
    .attr("font-weight", "bold")
    .attr("fill", "#ffffff")
    .style("text-shadow", "1px 1px 2px rgba(0,0,0,0.5)")
    .text("Methods:");

  classData.methods.forEach((method, i) => {
    classGroup.append("text")
      .attr("x", classData.x + 15)
      .attr("y", classData.y + 150 + i * 16)
      .attr("font-size", "11px")
      .attr("fill", "#f8f9fa")
      .style("text-shadow", "1px 1px 2px rgba(0,0,0,0.3)")
      .text(method);
  });

  // Draw objects with unique gradients
  objects.forEach((obj, i) => {
    const objGroup = svg.append("g");
    
    objGroup.append("rect")
      .attr("x", obj.x)
      .attr("y", obj.y)
      .attr("width", 160)
      .attr("height", 80)
      .attr("fill", `url(#${obj.gradientId})`)
      .attr("stroke", "#ffffff")
      .attr("stroke-width", 2)
      .attr("rx", 12)
      .attr("filter", "url(#class-obj-drop-shadow)")
      .style("cursor", "pointer")
      .on("mouseover", function() {
        d3.select(this)
          .transition()
          .duration(200)
          .attr("stroke-width", 3)
          .attr("filter", "url(#class-obj-drop-shadow) brightness(1.1)");
      })
      .on("mouseout", function() {
        d3.select(this)
          .transition()
          .duration(200)
          .attr("stroke-width", 2)
          .attr("filter", "url(#class-obj-drop-shadow)");
      });

    objGroup.append("text")
      .attr("x", obj.x + 80)
      .attr("y", obj.y + 25)
      .attr("text-anchor", "middle")
      .attr("font-size", "14px")
      .attr("font-weight", "bold")
      .attr("fill", obj.textColor)
      .style("text-shadow", obj.textColor === "#ffffff" ? "2px 2px 4px rgba(0,0,0,0.5)" : "1px 1px 2px rgba(255,255,255,0.5)")
      .text(obj.name);

    objGroup.append("text")
      .attr("x", obj.x + 80)
      .attr("y", obj.y + 45)
      .attr("text-anchor", "middle")
      .attr("font-size", "12px")
      .attr("fill", obj.textColor)
      .style("text-shadow", obj.textColor === "#ffffff" ? "1px 1px 2px rgba(0,0,0,0.3)" : "1px 1px 2px rgba(255,255,255,0.3)")
      .text(obj.type);

    objGroup.append("text")
      .attr("x", obj.x + 80)
      .attr("y", obj.y + 65)
      .attr("text-anchor", "middle")
      .attr("font-size", "10px")
      .attr("fill", obj.textColor)
      .style("text-shadow", obj.textColor === "#ffffff" ? "1px 1px 2px rgba(0,0,0,0.3)" : "1px 1px 2px rgba(255,255,255,0.3)")
      .text("Instance");

    // Arrow from class to object with gradient-coordinated color
    const arrowGroup = svg.append("g");
    
    arrowGroup.append("path")
      .attr("d", `M ${classData.x + classData.width} ${classData.y + 90} Q ${(classData.x + classData.width + obj.x)/2} ${(classData.y + 90 + obj.y + 40)/2} ${obj.x} ${obj.y + 40}`)
      .attr("stroke", "#0984e3")
      .attr("stroke-width", 2.5)
      .attr("fill", "none")
      .attr("marker-end", "url(#class-obj-class-arrow)")
      .style("filter", "drop-shadow(1px 1px 2px rgba(0,0,0,0.2))");

    arrowGroup.append("text")
      .attr("x", (classData.x + classData.width + obj.x)/2)
      .attr("y", (classData.y + 90 + obj.y + 40)/2 - 10)
      .attr("text-anchor", "middle")
      .attr("font-size", "11px")
      .attr("fill", "#f8f9fa")
      .attr("font-weight", "bold")
      .style("text-shadow", "2px 2px 4px rgba(0,0,0,0.8)")
      .text("creates");
  });

  // Interactive tooltip with enhanced styling
  const tooltip = d3.select("body").append("div")
    .attr("class", "tooltip")
    .style("position", "absolute")
    .style("visibility", "hidden")
    .style("background", "linear-gradient(135deg, rgba(0,0,0,0.9) 0%, rgba(45,52,54,0.95) 100%)")
    .style("color", "white")
    .style("padding", "12px 16px")
    .style("border-radius", "8px")
    .style("font-size", "12px")
    .style("font-weight", "500")
    .style("z-index", "10000")
    .style("pointer-events", "none")
    .style("box-shadow", "0 8px 32px rgba(0,0,0,0.3)")
    .style("border", "1px solid rgba(255,255,255,0.2)");

  // Function to show object details with gradient theme
  function showObjectDetails(objectIndex) {
    const objectInfo = objects[objectIndex];
    const infoBox = svg.append("g").attr("class", "info-display");
    
    // Smart positioning for info box
    const boxWidth = 320;
    const boxHeight = 140;
    const svgWidth = 800;
    
    // Calculate position (prefer bottom area, but avoid edges)
    let boxX = Math.max(50, Math.min(objectInfo.x - boxWidth/2, svgWidth - boxWidth - 50));
    let boxY = 310; // Keep at bottom for this diagram
    
    // Create background gradient for info box
    const infoGradient = defs.append("linearGradient")
      .attr("id", `class-obj-info-gradient-${objectIndex}`)
      .attr("x1", "0%").attr("y1", "0%")
      .attr("x2", "100%").attr("y2", "100%");
    
    infoGradient.append("stop")
      .attr("offset", "0%")
      .attr("stop-color", "rgba(45,52,54,0.95)");
    infoGradient.append("stop")
      .attr("offset", "100%")
      .attr("stop-color", "rgba(99,110,114,0.95)");
    
    // Info box background with gradient
    infoBox.append("rect")
      .attr("x", boxX)
      .attr("y", boxY)
      .attr("width", boxWidth)
      .attr("height", boxHeight)
      .attr("fill", `url(#class-obj-info-gradient-${objectIndex})`)
      .attr("stroke", "#ffffff")
      .attr("stroke-width", 2)
      .attr("rx", 12)
      .attr("filter", "url(#class-obj-drop-shadow)");
    
    // Close button with enhanced styling
    const closeButton = infoBox.append("g")
      .style("cursor", "pointer")
      .on("click", function() {
        infoBox.remove();
        // Clean up gradient
        d3.select(`#class-obj-info-gradient-${objectIndex}`).remove();
      });
    
    closeButton.append("circle")
      .attr("cx", boxX + boxWidth - 25)
      .attr("cy", boxY + 20)
      .attr("r", 14)
      .attr("fill", "#e74c3c")
      .attr("stroke", "white")
      .attr("stroke-width", 2)
      .attr("filter", "url(#class-obj-drop-shadow)");
    
    closeButton.append("text")
      .attr("x", boxX + boxWidth - 25)
      .attr("y", boxY + 26)
      .attr("text-anchor", "middle")
      .attr("font-size", "16px")
      .attr("fill", "white")
      .attr("font-weight", "bold")
      .style("pointer-events", "none")
      .text("×");
    
    // Object details with better formatting
    const details = [
      { label: "Object:", value: objectInfo.name, color: "#ffffff" },
      { label: "Type:", value: objectInfo.type, color: "#74b9ff" },
      { label: "Gradient:", value: objectInfo.gradientId.replace("class-obj-", "").replace("-gradient", ""), color: "#00cec9" },
      { label: "Instance of:", value: "Class Car", color: "#fdcb6e" },
      { label: "Attributes:", value: "color, brand, model", color: "#55efc4" },
      { label: "Methods:", value: "start(), stop(), accelerate()", color: "#fd79a8" }
    ];
    
    // Title
    infoBox.append("text")
      .attr("x", boxX + 15)
      .attr("y", boxY + 25)
      .attr("font-size", "14px")
      .attr("font-weight", "bold")
      .attr("fill", "#ffffff")
      .style("text-shadow", "2px 2px 4px rgba(0,0,0,0.5)")
      .text("Object Details");
    
    details.forEach((detail, i) => {
      const y = boxY + 50 + i * 14;
      
      // Label
      infoBox.append("text")
        .attr("x", boxX + 15)
        .attr("y", y)
        .attr("font-size", "11px")
        .attr("font-weight", "600")
        .attr("fill", "#f8f9fa")
        .style("text-shadow", "1px 1px 2px rgba(0,0,0,0.3)")
        .text(detail.label);
      
      // Value with color coding
      infoBox.append("text")
        .attr("x", boxX + 90)
        .attr("y", y)
        .attr("font-size", "11px")
        .attr("fill", detail.color)
        .style("text-shadow", "1px 1px 2px rgba(0,0,0,0.3)")
        .text(detail.value);
    });
    
    // Auto-hide after 7 seconds
    setTimeout(() => {
      if (infoBox.node()) {
        infoBox.remove();
        d3.select(`#class-obj-info-gradient-${objectIndex}`).remove();
      }
    }, 7000);
  }

  // Enhanced interaction handlers
  svg.selectAll("rect")
    .on("mouseover", function(event, d) {
      tooltip.style("visibility", "visible")
        .html("🖱️ Click to explore object properties<br><span style='font-size:10px; opacity:0.8;'>Interactive details panel</span>");
    })
    .on("mousemove", function(event) {
      tooltip.style("top", (event.pageY - 10) + "px")
        .style("left", (event.pageX + 10) + "px");
    })
    .on("mouseout", function() {
      tooltip.style("visibility", "hidden");
    })
    .on("click", function(event, d) {
      // Remove any existing info displays
      svg.selectAll(".info-display").remove();
      d3.selectAll("[id^='class-obj-info-gradient-']").remove();
      
      // Determine which object was clicked based on the rect element
      const rect = d3.select(this);
      const x = +rect.attr("x");
      const y = +rect.attr("y");
      
      // Find matching object by position
      objects.forEach((obj, i) => {
        if (Math.abs(obj.x - x) < 50 && Math.abs(obj.y - y) < 50) {
          showObjectDetails(i);
        }
      });
    });

})();
</script>

<div style="clear: both;"></div>

#### 💻 Practical Python Implementation

```python
# Define a class named 'Dog'
class Dog:
    # Class attribute (shared by all instances)
    species = "Canis familiaris"

    # Initializer / Instance attributes
    def __init__(self, name, age):
        self.name = name        # Public attribute
        self.age = age          # Public attribute
        self._breed = None      # Protected attribute
        self.__id = id(self)    # Private attribute

    # Instance method
    def describe(self):
        return f"{self.name} is {self.age} years old."

    # Another instance method
    def speak(self, sound):
        return f"{self.name} says {sound}."
    
    # Getter method
    def get_breed(self):
        return self._breed
    
    # Setter method  
    def set_breed(self, breed):
        self._breed = breed

# Create instances (objects) of the Dog class
dog1 = Dog("Buddy", 5)
dog2 = Dog("Lucy", 3)

# Accessing attributes and calling methods
print(f"Name: {dog1.name}")              # Output: Name: Buddy
print(f"Description: {dog1.describe()}")  # Output: Description: Buddy is 5 years old.
print(f"Sound: {dog2.speak('Woof!')}")    # Output: Sound: Lucy says Woof!

# Working with breed
dog1.set_breed("Golden Retriever")
print(f"Breed: {dog1.get_breed()}")       # Output: Breed: Golden Retriever
```

> 🔍 **Key Insights**: Notice how the class serves as a template, while each object (dog1, dog2) has its own unique data but shares the same structure and behavior.

### 🏗️ 1.2. Four Core Principles of OOP
<span id="four-core-principles"></span>

#### 🔒 1.2.1. Encapsulation
<span id="encapsulation"></span>

> **Definition**: Encapsulation bundles data (attributes) and methods into a single unit while restricting direct access to internal components.

| Access Level | Python Convention | Visibility | Usage |
|-------------|------------------|------------|-------|
| **Public** | `attribute` | Accessible everywhere | General use attributes/methods |
| **Protected** | `_attribute` | Internal use (convention) | Subclass access intended |
| **Private** | `__attribute` | Name mangled | Strictly internal use |

#### 🎨 Interactive Encapsulation Visualization

<div id="encapsulation-diagram" style="width: 100%; height: 650px; background: linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 75%, #4facfe 100%); border-radius: 12px; padding: 20px; margin: 20px 0; box-shadow: 0 8px 32px rgba(0,0,0,0.1);"></div>

<script>
(function() {
  // Clear any existing content first
  const container = d3.select("#encapsulation-diagram");
  container.selectAll("*").remove();
  
  // Setup dimensions with proper margins
  const margin = {top: 40, right: 60, bottom: 40, left: 60};
  const containerWidth = 900;
  const containerHeight = 610;
  const width = containerWidth - margin.left - margin.right;
  const height = containerHeight - margin.top - margin.bottom;
  
  // Create SVG with proper viewBox and responsive sizing
  const svg = container.append("svg")
    .attr("viewBox", `0 0 ${containerWidth} ${containerHeight}`)
    .style("width", "100%")
    .style("height", "100%")
    .style("overflow", "visible");

  // Main group with proper transform
  const mainGroup = svg.append("g")
    .attr("transform", `translate(${margin.left}, ${margin.top})`);

  // Create gradient definitions with unique IDs
  const defs = svg.append("defs");
  
  // Enhanced multi-color gradients with vivid color transitions
  const publicGradient = defs.append("linearGradient")
    .attr("id", "encap-publicGradient")
    .attr("x1", "0%").attr("y1", "0%")
    .attr("x2", "100%").attr("y2", "100%");
  publicGradient.append("stop").attr("offset", "0%").attr("stop-color", "#00b894");
  publicGradient.append("stop").attr("offset", "30%").attr("stop-color", "#00cec9");
  publicGradient.append("stop").attr("offset", "70%").attr("stop-color", "#74b9ff");
  publicGradient.append("stop").attr("offset", "100%").attr("stop-color", "#0984e3");

  const protectedGradient = defs.append("linearGradient")
    .attr("id", "encap-protectedGradient")
    .attr("x1", "0%").attr("y1", "0%")
    .attr("x2", "100%").attr("y2", "100%");
  protectedGradient.append("stop").attr("offset", "0%").attr("stop-color", "#fdcb6e");
  protectedGradient.append("stop").attr("offset", "25%").attr("stop-color", "#f39c12");
  protectedGradient.append("stop").attr("offset", "75%").attr("stop-color", "#e17055");
  protectedGradient.append("stop").attr("offset", "100%").attr("stop-color", "#d63031");

  const privateGradient = defs.append("linearGradient")
    .attr("id", "encap-privateGradient")
    .attr("x1", "0%").attr("y1", "0%")
    .attr("x2", "100%").attr("y2", "100%");
  privateGradient.append("stop").attr("offset", "0%").attr("stop-color", "#e84393");
  privateGradient.append("stop").attr("offset", "25%").attr("stop-color", "#fd79a8");
  privateGradient.append("stop").attr("offset", "50%").attr("stop-color", "#6c5ce7");
  privateGradient.append("stop").attr("offset", "75%").attr("stop-color", "#a29bfe");
  privateGradient.append("stop").attr("offset", "100%").attr("stop-color", "#5f3dc4");

  // Calculate positions with proper spacing
  const classWidth = 320;
  const classHeight = 420;
  const classX = (width - classWidth) / 2 + 50;
  const classY = 60;
  
  const externalCodeWidth = 200;
  const externalCodeHeight = 140;
  const externalCodeX = classX - externalCodeWidth - 80;
  const externalCodeY = classY + 100;

  // Add gradient for external code block
  const externalGradient = defs.append("linearGradient")
    .attr("id", "encap-externalGradient")
    .attr("x1", "0%").attr("y1", "0%")
    .attr("x2", "100%").attr("y2", "100%");
  externalGradient.append("stop").attr("offset", "0%").attr("stop-color", "#2d3436");
  externalGradient.append("stop").attr("offset", "30%").attr("stop-color", "#636e72");
  externalGradient.append("stop").attr("offset", "70%").attr("stop-color", "#74b9ff");
  externalGradient.append("stop").attr("offset", "100%").attr("stop-color", "#0984e3");

  // Add drop shadow filter
  const filter = defs.append("filter")
    .attr("id", "encap-drop-shadow")
    .attr("x", "-20%").attr("y", "-20%")
    .attr("width", "140%").attr("height", "140%");
  
  filter.append("feDropShadow")
    .attr("dx", 0).attr("dy", 4)
    .attr("stdDeviation", 3)
    .attr("flood-color", "rgba(0,0,0,0.3)");

  // Add gradient for class container
  const classGradient = defs.append("linearGradient")
    .attr("id", "encap-classGradient")
    .attr("x1", "0%").attr("y1", "0%")
    .attr("x2", "100%").attr("y2", "100%");
  classGradient.append("stop").attr("offset", "0%").attr("stop-color", "#ffffff");
  classGradient.append("stop").attr("offset", "30%").attr("stop-color", "#f8f9fa");
  classGradient.append("stop").attr("offset", "70%").attr("stop-color", "#e9ecef");
  classGradient.append("stop").attr("offset", "100%").attr("stop-color", "#dee2e6");

  // Main class container with proper positioning
  const classContainer = mainGroup.append("g")
    .attr("class", "class-container");
  
  // Class outline with enhanced styling
  classContainer.append("rect")
    .attr("x", classX)
    .attr("y", classY)
    .attr("width", classWidth)
    .attr("height", classHeight)
    .attr("fill", "url(#encap-classGradient)")
    .attr("stroke", "#667eea")
    .attr("stroke-width", 3)
    .attr("rx", 15)
    .attr("filter", "url(#encap-drop-shadow)");

  // Class title with improved typography
  classContainer.append("text")
    .attr("x", classX + classWidth / 2)
    .attr("y", classY + 30)
    .attr("text-anchor", "middle")
    .attr("font-family", "Arial, sans-serif")
    .attr("font-size", "22px")
    .attr("font-weight", "bold")
    .attr("fill", "#2d3436")
    .text("Class: BankAccount");

  // Section dimensions with proper spacing
  const sectionWidth = classWidth - 40;
  const sectionStartX = classX + 20;
  let currentY = classY + 60;

  // Public section with calculated positioning
  const publicHeight = 110;
  const publicSection = classContainer.append("g")
    .attr("class", "public-section");
  
  const publicRect = publicSection.append("rect")
    .attr("x", sectionStartX)
    .attr("y", currentY)
    .attr("width", sectionWidth)
    .attr("height", publicHeight)
    .attr("fill", "url(#encap-publicGradient)")
    .attr("rx", 8)
    .style("cursor", "pointer");

  publicSection.append("text")
    .attr("x", sectionStartX + 15)
    .attr("y", currentY + 25)
    .attr("font-family", "Arial, sans-serif")
    .attr("font-size", "16px")
    .attr("font-weight", "bold")
    .attr("fill", "white")
    .text("🔓 PUBLIC INTERFACE");

  // Public methods with proper line spacing
  const publicMethods = ["• deposit(amount)", "• withdraw(amount)", "• get_balance()", "• get_account_info()"];
  publicMethods.forEach((method, i) => {
    publicSection.append("text")
      .attr("x", sectionStartX + 20)
      .attr("y", currentY + 50 + i * 16)
      .attr("font-family", "Arial, sans-serif")
      .attr("font-size", "13px")
      .attr("fill", "white")
      .text(method);
  });

  currentY += publicHeight + 15;

  // Protected section with calculated positioning
  const protectedHeight = 90;
  const protectedSection = classContainer.append("g")
    .attr("class", "protected-section");
  
  const protectedRect = protectedSection.append("rect")
    .attr("x", sectionStartX)
    .attr("y", currentY)
    .attr("width", sectionWidth)
    .attr("height", protectedHeight)
    .attr("fill", "url(#encap-protectedGradient)")
    .attr("rx", 8)
    .style("cursor", "pointer");

  protectedSection.append("text")
    .attr("x", sectionStartX + 15)
    .attr("y", currentY + 25)
    .attr("font-family", "Arial, sans-serif")
    .attr("font-size", "16px")
    .attr("font-weight", "bold")
    .attr("fill", "white")
    .text("🔒 PROTECTED (Internal)");

  const protectedMembers = ["• _validate_transaction()", "• _log_activity()", "• _account_type"];
  protectedMembers.forEach((member, i) => {
    protectedSection.append("text")
      .attr("x", sectionStartX + 20)
      .attr("y", currentY + 50 + i * 16)
      .attr("font-family", "Arial, sans-serif")
      .attr("font-size", "13px")
      .attr("fill", "white")
      .text(member);
  });

  currentY += protectedHeight + 15;

  // Private section with calculated positioning
  const privateHeight = 110;
  const privateSection = classContainer.append("g")
    .attr("class", "private-section");
  
  const privateRect = privateSection.append("rect")
    .attr("x", sectionStartX)
    .attr("y", currentY)
    .attr("width", sectionWidth)
    .attr("height", privateHeight)
    .attr("fill", "url(#encap-privateGradient)")
    .attr("rx", 8)
    .style("cursor", "pointer");

  privateSection.append("text")
    .attr("x", sectionStartX + 15)
    .attr("y", currentY + 25)
    .attr("font-family", "Arial, sans-serif")
    .attr("font-size", "16px")
    .attr("font-weight", "bold")
    .attr("fill", "white")
    .text("🔐 PRIVATE DATA");

  const privateMembers = ["• __balance", "• __account_number", "• __security_key", "• __transaction_history"];
  privateMembers.forEach((member, i) => {
    privateSection.append("text")
      .attr("x", sectionStartX + 20)
      .attr("y", currentY + 50 + i * 16)
      .attr("font-family", "Arial, sans-serif")
      .attr("font-size", "13px")
      .attr("fill", "white")
      .text(member);
  });

  // External code block with proper positioning
  const externalGroup = mainGroup.append("g")
    .attr("class", "external-code");
  
  externalGroup.append("rect")
    .attr("x", externalCodeX)
    .attr("y", externalCodeY)
    .attr("width", externalCodeWidth)
    .attr("height", externalCodeHeight)
    .attr("fill", "url(#encap-externalGradient)")
    .attr("stroke", "#ffffff")
    .attr("stroke-width", 2)
    .attr("rx", 10)
    .attr("filter", "url(#encap-drop-shadow)");

  externalGroup.append("text")
    .attr("x", externalCodeX + externalCodeWidth / 2)
    .attr("y", externalCodeY + 25)
    .attr("text-anchor", "middle")
    .attr("font-family", "Arial, sans-serif")
    .attr("font-size", "16px")
    .attr("font-weight", "bold")
    .attr("fill", "#74b9ff")
    .text("External Code");

  const codeLines = [
    "account = BankAccount()",
    "account.deposit(100)  ✓",
    "# account.__balance",
    "# ❌ AttributeError!"
  ];
  
  codeLines.forEach((line, i) => {
    externalGroup.append("text")
      .attr("x", externalCodeX + 15)
      .attr("y", externalCodeY + 55 + i * 18)
      .attr("font-family", "monospace")
      .attr("font-size", "12px")
      .attr("fill", line.includes("#") ? "#fab1a0" : "#ffffff")
      .text(line);
  });

  // Define arrow markers with optimal size and positioning
  defs.append("marker")
    .attr("id", "encap-greenArrow")
    .attr("viewBox", "0 0 10 10")
    .attr("refX", 8).attr("refY", 5)
    .attr("markerWidth", 6).attr("markerHeight", 6)
    .attr("orient", "auto")
    .append("path")
    .attr("d", "M 0 0 L 10 5 L 0 10 z")
    .attr("fill", "#00cec9");

  defs.append("marker")
    .attr("id", "encap-redArrow")
    .attr("viewBox", "0 0 10 10")
    .attr("refX", 8).attr("refY", 5)
    .attr("markerWidth", 6).attr("markerHeight", 6)
    .attr("orient", "auto")
    .append("path")
    .attr("d", "M 0 0 L 10 5 L 0 10 z")
    .attr("fill", "#fd79a8");

  // Arrows with precise positioning
  const arrowGroup = mainGroup.append("g")
    .attr("class", "arrows");

  // Arrow to public (allowed) with proper positioning
  const publicArrowY = classY + 120;
  arrowGroup.append("line")
    .attr("x1", externalCodeX + externalCodeWidth)
    .attr("y1", publicArrowY)
    .attr("x2", sectionStartX - 15)
    .attr("y2", publicArrowY)
    .attr("stroke", "#00cec9")
    .attr("stroke-width", 4)
    .attr("marker-end", "url(#encap-greenArrow)");

  arrowGroup.append("text")
    .attr("x", externalCodeX + externalCodeWidth + 35)
    .attr("y", publicArrowY - 15)
    .attr("text-anchor", "middle")
    .attr("font-family", "Arial, sans-serif")
    .attr("font-size", "11px")
    .attr("font-weight", "bold")
    .attr("fill", "#00cec9")
    .text("✓ ALLOWED");

  // Arrow to private (blocked) with proper positioning
  const privateArrowY = classY + 360;
  arrowGroup.append("line")
    .attr("x1", externalCodeX + externalCodeWidth)
    .attr("y1", externalCodeY + 100)
    .attr("x2", sectionStartX - 20)
    .attr("y2", privateArrowY)
    .attr("stroke", "#fd79a8")
    .attr("stroke-width", 4)
    .attr("stroke-dasharray", "8,4")
    .attr("marker-end", "url(#encap-redArrow)");

  arrowGroup.append("text")
    .attr("x", externalCodeX + externalCodeWidth + 50)
    .attr("y", externalCodeY + 115)
    .attr("text-anchor", "middle")
    .attr("font-family", "Arial, sans-serif")
    .attr("font-size", "12px")
    .attr("font-weight", "bold")
    .attr("fill", "#fd79a8")
    .text("❌ BLOCKED");

  // Enhanced interactive tooltip with smart positioning
  const tooltip = d3.select("body").append("div")
    .attr("class", "encapsulation-tooltip")
    .style("position", "absolute")
    .style("visibility", "hidden")
    .style("background-color", "rgba(0,0,0,0.95)")
    .style("color", "white")
    .style("padding", "12px 16px")
    .style("border-radius", "8px")
    .style("font-family", "Arial, sans-serif")
    .style("font-size", "14px")
    .style("line-height", "1.4")
    .style("max-width", "300px")
    .style("box-shadow", "0 4px 12px rgba(0,0,0,0.3)")
    .style("z-index", "10000")
    .style("pointer-events", "none")
    .style("border", "1px solid rgba(255,255,255,0.2)");

  // Add hover interactions with improved tooltips
  publicRect.on("mouseover", function(event) {
    d3.select(this).transition().duration(200).style("opacity", 0.9);
    tooltip.style("visibility", "visible")
      .html(`
        <strong>🔓 Public Interface</strong><br/>
        • Accessible from anywhere<br/>
        • Safe external access points<br/>
        • Includes validation and error handling
      `);
  }).on("mouseout", function() {
    d3.select(this).transition().duration(200).style("opacity", 1);
    tooltip.style("visibility", "hidden");
  });

  protectedRect.on("mouseover", function(event) {
    d3.select(this).transition().duration(200).style("opacity", 0.9);
    tooltip.style("visibility", "visible")
      .html(`
        <strong>🔒 Protected Members</strong><br/>
        • Convention: prefix with single _<br/>
        • Intended for subclass access<br/>
        • Not enforced but discouraged for external use
      `);
  }).on("mouseout", function() {
    d3.select(this).transition().duration(200).style("opacity", 1);
    tooltip.style("visibility", "hidden");
  });

  privateRect.on("mouseover", function(event) {
    d3.select(this).transition().duration(200).style("opacity", 0.9);
    tooltip.style("visibility", "visible")
      .html(`
        <strong>🔐 Private Data</strong><br/>
        • Name mangled with double __<br/>
        • Strictly internal access only<br/>
        • Direct access causes AttributeError
      `);
  }).on("mouseout", function() {
    d3.select(this).transition().duration(200).style("opacity", 1);
    tooltip.style("visibility", "hidden");
  });

  // Smart tooltip positioning to avoid viewport overflow
  function updateTooltipPosition(event) {
    const tooltipElement = tooltip.node();
    const tooltipRect = tooltipElement.getBoundingClientRect();
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    
    let left = event.pageX + 15;
    let top = event.pageY - 10;
    
    // Adjust if tooltip would overflow right edge
    if (left + tooltipRect.width > viewportWidth - 20) {
      left = event.pageX - tooltipRect.width - 15;
    }
    
    // Adjust if tooltip would overflow bottom edge
    if (top + tooltipRect.height > viewportHeight - 20) {
      top = event.pageY - tooltipRect.height - 10;
    }
    
    // Ensure tooltip doesn't go above viewport
    if (top < 10) {
      top = event.pageY + 15;
    }
    
    tooltip.style("left", left + "px")
           .style("top", top + "px");
  }

  // Update tooltip position on mouse move
  svg.on("mousemove", updateTooltipPosition);

})();
</script>

<div style="clear: both;"></div>

#### 💻 Practical Encapsulation Example

```python
class BankAccount:
    def __init__(self, account_holder, initial_balance=0):
        # Public attributes
        self.account_holder = account_holder
        self.account_type = "Savings"
        
        # Protected attributes (internal use)
        self._account_number = self._generate_account_number()
        self._creation_date = "2024-12-16"
        
        # Private attributes (strictly internal)
        self.__balance = initial_balance
        self.__security_key = "SECRET_KEY_12345"
        self.__transaction_history = []
    
    # Public methods (safe interface)
    def get_balance(self):
        """Provides controlled read-only access to balance"""
        return self.__balance
    
    def deposit(self, amount):
        """Safe deposit method with validation"""
        if self._validate_transaction(amount):
            self.__balance += amount
            self.__log_transaction("DEPOSIT", amount)
            print(f"✅ Deposited: ${amount:.2f}")
            return True
        return False
    
    def withdraw(self, amount):
        """Safe withdrawal with balance checking"""
        if self._validate_transaction(amount) and amount <= self.__balance:
            self.__balance -= amount
            self.__log_transaction("WITHDRAW", amount)
            print(f"✅ Withdrawn: ${amount:.2f}")
            return True
        print("❌ Insufficient funds or invalid amount")
        return False
    
    def get_account_info(self):
        """Public method returning safe information"""
        return {
            "holder": self.account_holder,
            "type": self.account_type,
            "balance": self.__balance,
            "account_number": self._account_number[-4:]  # Only last 4 digits
        }
    
    # Protected methods (intended for subclasses)
    def _validate_transaction(self, amount):
        """Internal validation logic"""
        return isinstance(amount, (int, float)) and amount > 0
    
    def _generate_account_number(self):
        """Internal account number generation"""
        import random
        return f"ACC{random.randint(100000, 999999)}"
    
    # Private methods (strictly internal)
    def __log_transaction(self, transaction_type, amount):
        """Private transaction logging"""
        self.__transaction_history.append({
            "type": transaction_type,
            "amount": amount,
            "timestamp": "2024-12-16 10:30:00"
        })

# Usage demonstration
account = BankAccount("Alice Smith", 1000)

# ✅ Public interface - Safe and controlled access
print(f"Account Holder: {account.account_holder}")  # Direct access OK
print(f"Balance: ${account.get_balance():.2f}")     # Controlled access
account.deposit(500)                                # Safe method
account.withdraw(200)                               # Safe method
print(account.get_account_info())                   # Safe info retrieval

# 🔒 Protected access - Not recommended but possible
print(f"Account Number: {account._account_number}") # Discouraged but works

# ❌ Private access - Will fail
try:
    print(account.__balance)  # AttributeError!
except AttributeError as e:
    print(f"Error: {e}")

# ⚠️ Name mangling - Python's way of hiding private attributes
print(f"Actual private attribute name: {account._BankAccount__balance}")  # Still accessible but discouraged
```

> 🎯 **Key Benefits of Encapsulation**:
> - **Data Security**: Prevents accidental modification of critical data
> - **Controlled Access**: Validates inputs before changing state  
> - **Code Maintainability**: Changes to internal implementation don't break external code
> - **Error Prevention**: Reduces bugs by limiting direct data manipulation

#### 🎭 1.2.2. Abstraction
<span id="abstraction"></span>

**Abstraction** means hiding the complex implementation details and showing only the essential features of the object. It helps in reducing programming complexity and effort. An abstract class is a class that contains one or more abstract methods. An abstract method is a method that is declared, but contains no implementation.

#### 🎨 Interactive Abstraction Visualization

<div id="abstraction-diagram" style="width: 100%; height: 500px; background: linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 75%, #4facfe 100%); border-radius: 12px; padding: 20px; margin: 20px 0; box-shadow: 0 8px 32px rgba(0,0,0,0.1);"></div>

<script>
(function() {
  const container = d3.select("#abstraction-diagram");
  const width = 900;
  const height = 460;
  
  const svg = container.append("svg")
    .attr("viewBox", `0 0 ${width} ${height}`)
    .style("width", "100%")
    .style("height", "100%");

  // Create enhanced gradient definitions with unique IDs
  const defs = svg.append("defs");
  
  // Interface gradient - Blue-teal spectrum for simplicity
  const interfaceGradient = defs.append("linearGradient")
    .attr("id", "abstraction-interfaceGradient")
    .attr("x1", "0%").attr("y1", "0%")
    .attr("x2", "100%").attr("y2", "100%");
  interfaceGradient.append("stop").attr("offset", "0%").attr("stop-color", "#00b894");
  interfaceGradient.append("stop").attr("offset", "35%").attr("stop-color", "#00cec9");
  interfaceGradient.append("stop").attr("offset", "70%").attr("stop-color", "#74b9ff");
  interfaceGradient.append("stop").attr("offset", "100%").attr("stop-color", "#0984e3");

  // Engine gradient - Orange-red spectrum for complexity  
  const engineGradient = defs.append("linearGradient")
    .attr("id", "abstraction-engineGradient")
    .attr("x1", "0%").attr("y1", "0%")
    .attr("x2", "100%").attr("y2", "100%");
  engineGradient.append("stop").attr("offset", "0%").attr("stop-color", "#fdcb6e");
  engineGradient.append("stop").attr("offset", "35%").attr("stop-color", "#f39c12");
  engineGradient.append("stop").attr("offset", "70%").attr("stop-color", "#e17055");
  engineGradient.append("stop").attr("offset", "100%").attr("stop-color", "#d63031");

  // Connection gradient for smooth flow visualization
  const connectionGradient = defs.append("linearGradient")
    .attr("id", "abstraction-connectionGradient")
    .attr("x1", "0%").attr("y1", "0%")
    .attr("x2", "100%").attr("y2", "0%");
  connectionGradient.append("stop").attr("offset", "0%").attr("stop-color", "#0984e3");
  connectionGradient.append("stop").attr("offset", "50%").attr("stop-color", "#74b9ff");
  connectionGradient.append("stop").attr("offset", "100%").attr("stop-color", "#f39c12");

  // Drop shadow filter
  const filter = defs.append("filter")
    .attr("id", "abstraction-drop-shadow")
    .attr("x", "-50%").attr("y", "-50%")
    .attr("width", "200%").attr("height", "200%");
  
  filter.append("feDropShadow")
    .attr("dx", "3").attr("dy", "3")
    .attr("stdDeviation", "3")
    .attr("flood-opacity", "0.3");

  // Simple Interface Section (Left) with enhanced gradients
  const interfaceGroup = svg.append("g");
  
  // Interface container with gradient and shadow
  interfaceGroup.append("rect")
    .attr("x", 50)
    .attr("y", 80)
    .attr("width", 300)
    .attr("height", 300)
    .attr("fill", "url(#abstraction-interfaceGradient)")
    .attr("stroke", "#ffffff")
    .attr("stroke-width", 2)
    .attr("rx", 15)
    .attr("filter", "url(#abstraction-drop-shadow)");

  // Interface title with enhanced styling
  interfaceGroup.append("text")
    .attr("x", 200)
    .attr("y", 110)
    .attr("text-anchor", "middle")
    .attr("font-size", "18px")
    .attr("font-weight", "bold")
    .attr("fill", "#ffffff")
    .style("text-shadow", "2px 2px 4px rgba(0,0,0,0.5)")
    .text("🎛️ Simple Interface");

  interfaceGroup.append("text")
    .attr("x", 200)
    .attr("y", 130)
    .attr("text-anchor", "middle")
    .attr("font-size", "14px")
    .attr("fill", "#f8f9fa")
    .style("text-shadow", "1px 1px 2px rgba(0,0,0,0.3)")
    .text("(Abstraction Layer)");

  // Enhanced steering wheel with gradient effect
  const steeringWheelGradient = defs.append("radialGradient")
    .attr("id", "abstraction-steeringGradient")
    .attr("cx", "30%").attr("cy", "30%").attr("r", "70%");
  steeringWheelGradient.append("stop").attr("offset", "0%").attr("stop-color", "#ffffff");
  steeringWheelGradient.append("stop").attr("offset", "100%").attr("stop-color", "#ddd");

  interfaceGroup.append("circle")
    .attr("cx", 200)
    .attr("cy", 180)
    .attr("r", 40)
    .attr("fill", "url(#abstraction-steeringGradient)")
    .attr("stroke", "#ffffff")
    .attr("stroke-width", 4)
    .attr("filter", "url(#abstraction-drop-shadow)")
    .style("cursor", "pointer")
    .on("mouseover", function() {
      d3.select(this)
        .transition().duration(200)
        .attr("stroke", "#fdcb6e")
        .attr("stroke-width", 5);
      tooltip.style("visibility", "visible")
        .html("<strong>🎯 Steering Wheel</strong><br/>Simple interface for complex<br/>steering mechanism<br/><em>Click to interact</em>");
    })
    .on("mouseout", function() {
      d3.select(this)
        .transition().duration(200)
        .attr("stroke", "#ffffff")
        .attr("stroke-width", 4);
      tooltip.style("visibility", "hidden");
    });

  // Steering wheel spokes with enhanced styling
  [-45, 45].forEach(angle => {
    const radians = (angle * Math.PI) / 180;
    const x1 = 200 + 20 * Math.cos(radians);
    const y1 = 180 + 20 * Math.sin(radians);
    const x2 = 200 + 35 * Math.cos(radians);
    const y2 = 180 + 35 * Math.sin(radians);
    
    interfaceGroup.append("line")
      .attr("x1", x1).attr("y1", y1)
      .attr("x2", x2).attr("y2", y2)
      .attr("stroke", "#ffffff")
      .attr("stroke-width", 6)
      .attr("stroke-linecap", "round");
  });

  // Enhanced pedals with individual gradients
  const pedals = [
    { name: "Brake", x: 140, y: 280, gradientId: "abstraction-brakeGradient", colors: ["#e17055", "#d63031"] },
    { name: "Accelerator", x: 260, y: 280, gradientId: "abstraction-accelGradient", colors: ["#00b894", "#00a085"] }
  ];

  pedals.forEach(pedal => {
    // Create individual gradient for each pedal
    const pedalGradient = defs.append("linearGradient")
      .attr("id", pedal.gradientId)
      .attr("x1", "0%").attr("y1", "0%")
      .attr("x2", "100%").attr("y2", "100%");
    pedalGradient.append("stop").attr("offset", "0%").attr("stop-color", pedal.colors[0]);
    pedalGradient.append("stop").attr("offset", "100%").attr("stop-color", pedal.colors[1]);

    // Dynamic width based on pedal name length
    const pedalWidth = pedal.name === "Accelerator" ? 70 : 50;
    
    interfaceGroup.append("rect")
      .attr("x", pedal.x - pedalWidth/2)
      .attr("y", pedal.y - 15)
      .attr("width", pedalWidth)
      .attr("height", 30)
      .attr("fill", `url(#${pedal.gradientId})`)
      .attr("stroke", "#ffffff")
      .attr("stroke-width", 2)
      .attr("rx", 8)
      .attr("filter", "url(#abstraction-drop-shadow)")
      .style("cursor", "pointer")
      .on("mouseover", function() {
        d3.select(this)
          .transition().duration(200)
          .attr("stroke", "#fdcb6e")
          .attr("stroke-width", 3);
        tooltip.style("visibility", "visible")
          .html(`<strong>🚗 ${pedal.name} Pedal</strong><br/>Simple interface for<br/>complex control system<br/><em>Click to interact</em>`);
      })
      .on("mouseout", function() {
        d3.select(this)
          .transition().duration(200)
          .attr("stroke", "#ffffff")
          .attr("stroke-width", 2);
        tooltip.style("visibility", "hidden");
      });

    interfaceGroup.append("text")
      .attr("x", pedal.x)
      .attr("y", pedal.y + 5)
      .attr("text-anchor", "middle")
      .attr("font-size", "11px")
      .attr("font-weight", "bold")
      .attr("fill", "#ffffff")
      .style("text-shadow", "1px 1px 2px rgba(0,0,0,0.5)")
      .text(pedal.name);
  });

  // User-friendly labels with enhanced styling
  const labels = ["🚗 Easy to Use", "🎯 Clear Purpose", "✨ Hide Complexity"];
  labels.forEach((label, i) => {
    interfaceGroup.append("text")
      .attr("x", 200)
      .attr("y", 320 + i * 16)
      .attr("text-anchor", "middle")
      .attr("font-size", "12px")
      .attr("font-weight", "500")
      .attr("fill", "#ffffff")
      .style("text-shadow", "1px 1px 2px rgba(0,0,0,0.3)")
      .text(label);
  });

  // Complex Implementation Section (Right) with enhanced gradients
  const engineGroup = svg.append("g");
  
  // Engine container with gradient and shadow
  engineGroup.append("rect")
    .attr("x", 550)
    .attr("y", 80)
    .attr("width", 300)
    .attr("height", 300)
    .attr("fill", "url(#abstraction-engineGradient)")
    .attr("stroke", "#ffffff")
    .attr("stroke-width", 2)
    .attr("rx", 15)
    .attr("filter", "url(#abstraction-drop-shadow)")
    .attr("opacity", 0.9);

  // Engine title with enhanced styling
  engineGroup.append("text")
    .attr("x", 700)
    .attr("y", 110)
    .attr("text-anchor", "middle")
    .attr("font-size", "18px")
    .attr("font-weight", "bold")
    .attr("fill", "#ffffff")
    .style("text-shadow", "2px 2px 4px rgba(0,0,0,0.5)")
    .text("⚙️ Complex Implementation");

  engineGroup.append("text")
    .attr("x", 700)
    .attr("y", 130)
    .attr("text-anchor", "middle")
    .attr("font-size", "14px")
    .attr("fill", "#f8f9fa")
    .style("text-shadow", "1px 1px 2px rgba(0,0,0,0.3)")
    .text("(Hidden Details)");

  // Complex engine components with enhanced gradients
  const engineComponents = [
    { name: "Engine Block", x: 700, y: 160 },
    { name: "Transmission", x: 650, y: 200 },
    { name: "ECU", x: 750, y: 200 },
    { name: "Fuel System", x: 620, y: 250 },
    { name: "Brake System", x: 700, y: 225 },
    { name: "Steering System", x: 780, y: 250 },
    { name: "Sensors", x: 670, y: 300 },
    { name: "Actuators", x: 730, y: 300 }
  ];

  // Create component gradients
  const componentGradient = defs.append("linearGradient")
    .attr("id", "abstraction-componentGradient")
    .attr("x1", "0%").attr("y1", "0%")
    .attr("x2", "100%").attr("y2", "100%");
  componentGradient.append("stop").attr("offset", "0%").attr("stop-color", "rgba(255,255,255,0.6)");
  componentGradient.append("stop").attr("offset", "100%").attr("stop-color", "rgba(255,255,255,0.2)");

  engineComponents.forEach((comp, i) => {
    // Calculate text dimensions for proper sizing
    const tempText = svg.append("text")
      .attr("font-size", "10px")
      .attr("font-weight", "bold")
      .style("visibility", "hidden")
      .text(comp.name);
    
    const textBBox = tempText.node().getBBox();
    tempText.remove();
    
    // Calculate component size based on text with padding
    const padding = 12;
    const width = Math.max(textBBox.width + padding, 30);
    const height = Math.max(textBBox.height + padding, 25);
    
    // Store calculated dimensions
    comp.width = width;
    comp.height = height;

    engineGroup.append("rect")
      .attr("x", comp.x - width/2)
      .attr("y", comp.y - height/2)
      .attr("width", width)
      .attr("height", height)
      .attr("fill", "url(#abstraction-componentGradient)")
      .attr("stroke", "#ffffff")
      .attr("stroke-width", 2)
      .attr("rx", 6)
      .attr("filter", "url(#abstraction-drop-shadow)")
      .style("cursor", "pointer")
      .on("mouseover", function() {
        d3.select(this)
          .transition().duration(200)
          .attr("fill", "rgba(255,255,255,0.9)")
          .attr("stroke", "#fdcb6e")
          .attr("stroke-width", 3);
        tooltip.style("visibility", "visible")
          .html(`<strong>⚙️ ${comp.name}</strong><br/>Complex internal component<br/>Hidden from user interface<br/><em>Click to explore</em>`);
      })
      .on("mouseout", function() {
        d3.select(this)
          .transition().duration(200)
          .attr("fill", "url(#abstraction-componentGradient)")
          .attr("stroke", "#ffffff")
          .attr("stroke-width", 2);
        tooltip.style("visibility", "hidden");
      });

    // Component labels with enhanced styling - full text
    engineGroup.append("text")
      .attr("x", comp.x)
      .attr("y", comp.y + 3)
      .attr("text-anchor", "middle")
      .attr("font-size", "10px")
      .attr("font-weight", "bold")
      .attr("fill", "#ffffff")
      .style("text-shadow", "1px 1px 2px rgba(0,0,0,0.8)")
      .text(comp.name);
  });

  // Enhanced connecting arrows with gradient flow
  const connectionArrows = [
    { x1: 350, y1: 180, x2: 550, y2: 180, label: "🎯 Steering Flow" },
    { x1: 350, y1: 280, x2: 550, y2: 250, label: "🚗 Control Flow" }
  ];

  connectionArrows.forEach((arrow, i) => {
    // Enhanced dotted flow line with better visibility
    svg.append("line")
      .attr("x1", arrow.x1)
      .attr("y1", arrow.y1)
      .attr("x2", arrow.x2)
      .attr("y2", arrow.y2)
      .attr("stroke", "#ffffff")
      .attr("stroke-width", 4)
      .attr("stroke-dasharray", "8,4")
      .attr("opacity", 0.9)
      .attr("marker-end", "url(#abstraction-flowArrow)")
      .style("filter", "drop-shadow(2px 2px 4px rgba(0,0,0,0.5))");

    // Arrow label with enhanced styling for colorful background
    svg.append("text")
      .attr("x", (arrow.x1 + arrow.x2) / 2)
      .attr("y", (arrow.y1 + arrow.y2) / 2 - 8)
      .attr("text-anchor", "middle")
      .attr("font-size", "12px")
      .attr("font-weight", "bold")
      .attr("fill", "#ffffff")
      .style("text-shadow", "3px 3px 6px rgba(0,0,0,0.8)")
      .text(arrow.label);
  });

  // Enhanced arrow marker with better visibility
  defs.append("marker")
    .attr("id", "abstraction-flowArrow")
    .attr("viewBox", "0 0 10 10")
    .attr("refX", 8).attr("refY", 5)
    .attr("markerWidth", 6).attr("markerHeight", 6)
    .attr("orient", "auto")
    .append("path")
    .attr("d", "M 0 0 L 10 5 L 0 10 z")
    .attr("fill", "#ffffff")
    .style("filter", "drop-shadow(1px 1px 2px rgba(0,0,0,0.5))");

  // Enhanced main title
  svg.append("text")
    .attr("x", 450)
    .attr("y", 40)
    .attr("text-anchor", "middle")
    .attr("font-size", "22px")
    .attr("font-weight", "bold")
    .attr("fill", "#f8f9fa")
    .style("text-shadow", "3px 3px 6px rgba(0,0,0,0.8)")
    .text("🎭 Abstraction Principle");

  // Enhanced interactive tooltip
  const tooltip = d3.select("body").append("div")
    .attr("class", "abstraction-tooltip")
    .style("position", "absolute")
    .style("visibility", "hidden")
    .style("background", "linear-gradient(135deg, rgba(0,0,0,0.95) 0%, rgba(45,52,54,0.95) 100%)")
    .style("color", "white")
    .style("padding", "12px 16px")
    .style("border-radius", "8px")
    .style("font-size", "12px")
    .style("font-weight", "500")
    .style("max-width", "250px")
    .style("z-index", "10000")
    .style("pointer-events", "none")
    .style("box-shadow", "0 8px 32px rgba(0,0,0,0.3)")
    .style("border", "1px solid rgba(255,255,255,0.2)");

  svg.on("mousemove", function(event) {
    tooltip.style("top", (event.pageY - 10) + "px")
      .style("left", (event.pageX + 10) + "px");
  });

})();
</script>

<div style="clear: both;"></div>

**Example using abc module:**

```python
from abc import ABC, abstractmethod

class Shape(ABC): # Abstract class
    @abstractmethod
    def area(self):
        pass

    @abstractmethod
    def perimeter(self):
        pass

class Square(Shape):
    def __init__(self, side):
        self.__side = side

    def area(self):
        return self.__side * self.__side

    def perimeter(self):
        return 4 * self.__side
```

#### 🧬 1.2.3. Inheritance
<span id="inheritance"></span>

**Inheritance** is a mechanism in which one class (child/derived) acquires the properties (methods and fields) of another class (parent/base). This promotes code reusability.

**Types of Inheritance:** Single, Multiple, Multilevel, Hierarchical.

#### 🎨 Interactive Inheritance Types Visualization

<div id="inheritance-diagram" style="width: 100%; height: 600px; background: linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 75%, #4facfe 100%); border-radius: 12px; padding: 20px; margin: 20px 0; box-shadow: 0 8px 32px rgba(0,0,0,0.1);"></div>

<script>
(function() {
  const container = d3.select("#inheritance-diagram");
  const width = 900;
  const height = 560;
  
  const svg = container.append("svg")
    .attr("viewBox", `0 0 ${width} ${height}`)
    .style("width", "100%")
    .style("height", "100%")
    .style("overflow", "visible");

  // Create enhanced gradient definitions
  const defs = svg.append("defs");
  
  // Parent class gradient - Teal to Blue spectrum
  const parentGradient = defs.append("linearGradient")
    .attr("id", "inherit-parent-gradient")
    .attr("x1", "0%").attr("y1", "0%")
    .attr("x2", "100%").attr("y2", "100%");
  parentGradient.append("stop").attr("offset", "0%").attr("stop-color", "#00b894");
  parentGradient.append("stop").attr("offset", "25%").attr("stop-color", "#00cec9");
  parentGradient.append("stop").attr("offset", "75%").attr("stop-color", "#74b9ff");
  parentGradient.append("stop").attr("offset", "100%").attr("stop-color", "#0984e3");

  // Child class gradient - Pink to Purple spectrum
  const childGradient = defs.append("linearGradient")
    .attr("id", "inherit-child-gradient")
    .attr("x1", "0%").attr("y1", "0%")
    .attr("x2", "100%").attr("y2", "100%");
  childGradient.append("stop").attr("offset", "0%").attr("stop-color", "#e84393");
  childGradient.append("stop").attr("offset", "25%").attr("stop-color", "#fd79a8");
  childGradient.append("stop").attr("offset", "75%").attr("stop-color", "#6c5ce7");
  childGradient.append("stop").attr("offset", "100%").attr("stop-color", "#a29bfe");

  // Intermediate class gradient - Orange to Red spectrum
  const intermediateGradient = defs.append("linearGradient")
    .attr("id", "inherit-intermediate-gradient")
    .attr("x1", "0%").attr("y1", "0%")
    .attr("x2", "100%").attr("y2", "100%");
  intermediateGradient.append("stop").attr("offset", "0%").attr("stop-color", "#fdcb6e");
  intermediateGradient.append("stop").attr("offset", "25%").attr("stop-color", "#f39c12");
  intermediateGradient.append("stop").attr("offset", "75%").attr("stop-color", "#e17055");
  intermediateGradient.append("stop").attr("offset", "100%").attr("stop-color", "#d63031");

  // Example box gradient - Green to Cyan spectrum
  const exampleGradient = defs.append("linearGradient")
    .attr("id", "inherit-example-gradient")
    .attr("x1", "0%").attr("y1", "0%")
    .attr("x2", "100%").attr("y2", "100%");
  exampleGradient.append("stop").attr("offset", "0%").attr("stop-color", "#00b894");
  exampleGradient.append("stop").attr("offset", "25%").attr("stop-color", "#55a3ff");
  exampleGradient.append("stop").attr("offset", "75%").attr("stop-color", "#74b9ff");
  exampleGradient.append("stop").attr("offset", "100%").attr("stop-color", "#00cec9");

  // Enhanced arrow marker
  defs.append("marker")
    .attr("id", "inheritanceArrow")
    .attr("viewBox", "0 0 10 10")
    .attr("refX", 5)
    .attr("refY", 5)
    .attr("markerWidth", 8)
    .attr("markerHeight", 8)
    .attr("orient", "auto")
    .append("path")
    .attr("d", "M 0 0 L 10 5 L 0 10 z")
    .attr("fill", "white")
    .attr("stroke", "#2d3436")
    .attr("stroke-width", "1");

  // Enhanced function to create a class box with gradients and shadows
  function createClassBox(x, y, width, height, text, fill, textColor = "white") {
    const group = svg.append("g");
    
    // Add drop shadow
    group.append("rect")
      .attr("x", x + 3)
      .attr("y", y + 3)
      .attr("width", width)
      .attr("height", height)
      .attr("fill", "rgba(0,0,0,0.3)")
      .attr("rx", 8);
    
    // Main class box
    group.append("rect")
      .attr("x", x)
      .attr("y", y)
      .attr("width", width)
      .attr("height", height)
      .attr("fill", fill)
      .attr("stroke", "white")
      .attr("stroke-width", 2)
      .attr("rx", 8)
      .style("cursor", "pointer")
      .on("mouseover", function() {
        d3.select(this).attr("stroke", "#fdcb6e").attr("stroke-width", 3);
        tooltip.style("visibility", "visible")
          .html(`<strong>${text}</strong><br/>Click to see details`);
      })
      .on("mouseout", function() {
        d3.select(this).attr("stroke", "white").attr("stroke-width", 2);
        tooltip.style("visibility", "hidden");
      })
      .on("click", function() {
        showClassDetails(text, x, y);
      });

    // Enhanced text with shadow
    group.append("text")
      .attr("x", x + width/2)
      .attr("y", y + height/2 + 4)
      .attr("text-anchor", "middle")
      .attr("font-size", "12px")
      .attr("font-weight", "bold")
      .attr("fill", textColor)
      .attr("filter", "drop-shadow(1px 1px 2px rgba(0,0,0,0.5))")
      .text(text);

    return group;
  }

  // Function to show class details
  function showClassDetails(className, x, y) {
    // Remove any existing detail displays
    svg.selectAll(".class-details").remove();
    
    const detailsGroup = svg.append("g").attr("class", "class-details");
    
    // Smart positioning to avoid cutting off
    const popupWidth = 200;
    const popupHeight = 120;
    const svgWidth = 900; // viewBox width
    
    // Calculate popup position
    let popupX, popupY;
    
    // If element is on the right side, show popup to the left
    if (x + 100 + popupWidth > svgWidth) {
      popupX = x - popupWidth - 20; // Show to the left
    } else {
      popupX = x + 100; // Show to the right (default)
    }
    
    // Ensure popup doesn't go above SVG boundary
    popupY = Math.max(y - 20, 10);
    
    // Ensure popup doesn't go below SVG boundary
    if (popupY + popupHeight > 500) {
      popupY = 500 - popupHeight - 10;
    }
    
    // Details box
    detailsGroup.append("rect")
      .attr("x", popupX)
      .attr("y", popupY)
      .attr("width", popupWidth)
      .attr("height", popupHeight)
      .attr("fill", "rgba(0,0,0,0.9)")
      .attr("stroke", "#fdcb6e")
      .attr("stroke-width", 3)
      .attr("rx", 10);
    
    // Close button
    const closeButton = detailsGroup.append("g")
      .style("cursor", "pointer")
      .on("click", function() {
        detailsGroup.remove();
      });
    
    closeButton.append("circle")
      .attr("cx", popupX + popupWidth - 15)
      .attr("cy", popupY + 15)
      .attr("r", 10)
      .attr("fill", "#e74c3c")
      .attr("stroke", "white")
      .attr("stroke-width", 1);
    
    closeButton.append("text")
      .attr("x", popupX + popupWidth - 15)
      .attr("y", popupY + 20)
      .attr("text-anchor", "middle")
      .attr("font-size", "12px")
      .attr("fill", "white")
      .attr("font-weight", "bold")
      .style("pointer-events", "none")
      .text("×");
    
    // Class details
    const classInfo = getClassInfo(className);
    classInfo.forEach((info, i) => {
      detailsGroup.append("text")
        .attr("x", popupX + 10)
        .attr("y", popupY + 35 + i * 15)
        .attr("font-size", "11px")
        .attr("fill", "white")
        .text(info);
    });
    
    // Auto-hide after 4 seconds
    setTimeout(() => {
      if (detailsGroup.node()) detailsGroup.remove();
    }, 4000);
  }

  function getClassInfo(className) {
    const classDetails = {
      "Class A": ["Base class", "Attributes: name, id", "Methods: init(), display()"],
      "Class B": ["Inherits from A", "Adds: age attribute", "Methods: init(), show_age()"],
      "Class C": ["Child class", "Extends functionality", "Custom implementations"]
    };
    return classDetails[className] || ["Class information", "Attributes: various", "Methods: inherited + custom"];
  }

  // Enhanced function to create arrow with better visibility
  function createArrow(x1, y1, x2, y2) {
    svg.append("line")
      .attr("x1", x1)
      .attr("y1", y1)
      .attr("x2", x2)
      .attr("y2", y2)
      .attr("stroke", "white")
      .attr("stroke-width", 3)
      .attr("marker-end", "url(#inheritanceArrow)")
      .attr("filter", "drop-shadow(1px 1px 2px rgba(0,0,0,0.5))");
  }

  // 1. Single Inheritance
  svg.append("text")
    .attr("x", 110)
    .attr("y", 30)
    .attr("text-anchor", "middle")
    .attr("font-size", "14px")
    .attr("font-weight", "bold")
    .attr("fill", "white")
    .attr("filter", "drop-shadow(1px 1px 2px rgba(0,0,0,0.8))")
    .text("🔗 Single Inheritance");

  createClassBox(70, 50, 80, 40, "Class A", "url(#inherit-parent-gradient)", "white");
  createClassBox(70, 120, 80, 40, "Class B", "url(#inherit-child-gradient)", "white");
  createArrow(110, 120, 110, 90);

  // 2. Multiple Inheritance
  svg.append("text")
    .attr("x", 340)
    .attr("y", 30)
    .attr("text-anchor", "middle")
    .attr("font-size", "14px")
    .attr("font-weight", "bold")
    .attr("fill", "white")
    .attr("filter", "drop-shadow(1px 1px 2px rgba(0,0,0,0.8))")
    .text("🔀 Multiple Inheritance");

  createClassBox(260, 50, 80, 40, "Class A", "url(#inherit-parent-gradient)", "white");
  createClassBox(360, 50, 80, 40, "Class B", "url(#inherit-parent-gradient)", "white");
  createClassBox(310, 120, 80, 40, "Class C", "url(#inherit-child-gradient)", "white");
  createArrow(330, 120, 300, 90);
  createArrow(370, 120, 400, 90);

  // 3. Multilevel Inheritance
  svg.append("text")
    .attr("x", 570)
    .attr("y", 30)
    .attr("text-anchor", "middle")
    .attr("font-size", "14px")
    .attr("font-weight", "bold")
    .attr("fill", "white")
    .attr("filter", "drop-shadow(1px 1px 2px rgba(0,0,0,0.8))")
    .text("⛓️ Multilevel Inheritance");

  createClassBox(530, 50, 80, 40, "Class A", "url(#inherit-parent-gradient)", "white");
  createClassBox(530, 100, 80, 40, "Class B", "url(#inherit-intermediate-gradient)", "white");
  createClassBox(530, 150, 80, 40, "Class C", "url(#inherit-child-gradient)", "white");
  createArrow(570, 100, 570, 90);
  createArrow(570, 150, 570, 140);

  // 4. Hierarchical Inheritance
  svg.append("text")
    .attr("x", 780)
    .attr("y", 30)
    .attr("text-anchor", "middle")
    .attr("font-size", "14px")
    .attr("font-weight", "bold")
    .attr("fill", "white")
    .attr("filter", "drop-shadow(1px 1px 2px rgba(0,0,0,0.8))")
    .text("🌳 Hierarchical Inheritance");

  createClassBox(740, 50, 80, 40, "Class A", "url(#inherit-parent-gradient)", "white");
  createClassBox(680, 120, 60, 35, "Class B", "url(#inherit-child-gradient)", "white");
  createClassBox(750, 120, 60, 35, "Class C", "url(#inherit-child-gradient)", "white");
  createClassBox(820, 120, 60, 35, "Class D", "url(#inherit-child-gradient)", "white");
  createArrow(710, 120, 770, 90);
  createArrow(780, 120, 780, 90);
  createArrow(850, 120, 790, 90);

  // Practical examples section
  svg.append("text")
    .attr("x", 450)
    .attr("y", 220)
    .attr("text-anchor", "middle")
    .attr("font-size", "18px")
    .attr("font-weight", "bold")
    .attr("fill", "white")
    .attr("filter", "drop-shadow(1px 1px 2px rgba(0,0,0,0.8))")
    .text("💻 Real-World Examples");

  // Example boxes with enhanced gradients
  const examples = [
    {
      type: "Single", 
      x: 50, y: 250, 
      parent: "Animal", 
      child: "Dog",
      desc: "Dog inherits from Animal"
    },
    {
      type: "Multiple", 
      x: 250, y: 250, 
      parent: "Flyable + Swimmable", 
      child: "Duck",
      desc: "Duck can fly and swim"
    },
    {
      type: "Multilevel", 
      x: 500, y: 250, 
      parent: "Vehicle → Car", 
      child: "SportsCar",
      desc: "SportsCar extends Car extends Vehicle"
    },
    {
      type: "Hierarchical", 
      x: 720, y: 250, 
      parent: "Shape", 
      child: "Circle, Square, Triangle",
      desc: "Multiple shapes from Shape"
    }
  ];

  examples.forEach(example => {
    const exampleGroup = svg.append("g");
    
    // Drop shadow for example box
    exampleGroup.append("rect")
      .attr("x", example.x + 3)
      .attr("y", example.y + 3)
      .attr("width", 180)
      .attr("height", 120)
      .attr("fill", "rgba(0,0,0,0.3)")
      .attr("rx", 10);
    
    // Enhanced container with gradient
    exampleGroup.append("rect")
      .attr("x", example.x)
      .attr("y", example.y)
      .attr("width", 180)
      .attr("height", 120)
      .attr("fill", "url(#inherit-example-gradient)")
      .attr("stroke", "white")
      .attr("stroke-width", 2)
      .attr("rx", 10)
      .attr("opacity", 0.95)
      .style("cursor", "pointer")
      .on("mouseover", function() {
        d3.select(this).attr("opacity", 1).attr("stroke-width", 3);
        tooltip.style("visibility", "visible")
          .html(`<strong>${example.type} Inheritance</strong><br/>${example.desc}`);
      })
      .on("mouseout", function() {
        d3.select(this).attr("opacity", 0.95).attr("stroke-width", 2);
        tooltip.style("visibility", "hidden");
      });

    // Type label with enhanced styling
    exampleGroup.append("text")
      .attr("x", example.x + 90)
      .attr("y", example.y + 20)
      .attr("text-anchor", "middle")
      .attr("font-size", "12px")
      .attr("font-weight", "bold")
      .attr("fill", "white")
      .attr("filter", "drop-shadow(1px 1px 2px rgba(0,0,0,0.8))")
      .text(example.type);

    // Parent class with enhanced styling
    exampleGroup.append("text")
      .attr("x", example.x + 90)
      .attr("y", example.y + 45)
      .attr("text-anchor", "middle")
      .attr("font-size", "10px")
      .attr("fill", "white")
      .attr("font-weight", "bold")
      .attr("filter", "drop-shadow(1px 1px 1px rgba(0,0,0,0.8))")
      .text("Parent:");

    exampleGroup.append("text")
      .attr("x", example.x + 90)
      .attr("y", example.y + 60)
      .attr("text-anchor", "middle")
      .attr("font-size", "9px")
      .attr("fill", "white")
      .attr("filter", "drop-shadow(1px 1px 1px rgba(0,0,0,0.8))")
      .text(example.parent);

    // Child class with enhanced styling
    exampleGroup.append("text")
      .attr("x", example.x + 90)
      .attr("y", example.y + 80)
      .attr("text-anchor", "middle")
      .attr("font-size", "10px")
      .attr("fill", "white")
      .attr("font-weight", "bold")
      .attr("filter", "drop-shadow(1px 1px 1px rgba(0,0,0,0.8))")
      .text("Child:");

    exampleGroup.append("text")
      .attr("x", example.x + 90)
      .attr("y", example.y + 95)
      .attr("text-anchor", "middle")
      .attr("font-size", "9px")
      .attr("fill", "white")
      .attr("filter", "drop-shadow(1px 1px 1px rgba(0,0,0,0.8))")
      .text(example.child);
  });

  // Benefits section with enhanced styling
  svg.append("text")
    .attr("x", 450)
    .attr("y", 420)
    .attr("text-anchor", "middle")
    .attr("font-size", "16px")
    .attr("font-weight", "bold")
    .attr("fill", "white")
    .attr("filter", "drop-shadow(1px 1px 2px rgba(0,0,0,0.8))")
    .text("🎯 Key Benefits of Inheritance");

  const benefits = [
    "🔄 Code Reusability", 
    "📝 Cleaner Code", 
    "🛠️ Easy Maintenance", 
    "🎭 Polymorphism Support"
  ];

  benefits.forEach((benefit, i) => {
    svg.append("text")
      .attr("x", 200 + (i % 2) * 300)
      .attr("y", 450 + Math.floor(i / 2) * 20)
      .attr("font-size", "12px")
      .attr("fill", "white")
      .attr("font-weight", "500")
      .attr("filter", "drop-shadow(1px 1px 1px rgba(0,0,0,0.8))")
      .text(benefit);
  });

  // Enhanced interactive tooltip with gradient background
  const tooltip = d3.select("body").append("div")
    .attr("class", "inheritance-tooltip")
    .style("position", "absolute")
    .style("visibility", "hidden")
    .style("background", "linear-gradient(135deg, rgba(0,0,0,0.95) 0%, rgba(45,52,54,0.95) 100%)")
    .style("color", "white")
    .style("padding", "12px 16px")
    .style("border-radius", "8px")
    .style("font-size", "12px")
    .style("font-weight", "500")
    .style("max-width", "250px")
    .style("z-index", "10000")
    .style("pointer-events", "none")
    .style("box-shadow", "0 8px 32px rgba(0,0,0,0.3)")
    .style("border", "1px solid rgba(255,255,255,0.2)");

  svg.on("mousemove", function(event) {
    tooltip.style("top", (event.pageY - 10) + "px")
      .style("left", (event.pageX + 10) + "px");
  });

})();
</script>

<div style="clear: both;"></div>

**Example:**

```python
# Parent class
class Animal:
    def __init__(self, name):
        self.name = name

    def eat(self):
        print(f"{self.name} is eating.")

# Child class inheriting from Animal
class Dog(Animal):
    def __init__(self, name, breed):
        super().__init__(name) # Call parent constructor
        self.breed = breed

    def bark(self):
        print(f"{self.name} says woof!")

my_dog = Dog("Rex", "German Shepherd")
my_dog.eat()   # Inherited method
my_dog.bark()  # Child's own method
```

#### 🎭 1.2.4. Polymorphism
<span id="polymorphism"></span>

**Polymorphism**, which means "many forms," allows us to perform a single action in different ways. It allows methods to do different things based on the object it is acting upon. Method overriding is a key example.

#### 🎨 Interactive Polymorphism Visualization

<div id="polymorphism-diagram" style="width: 100%; height: 500px; background: linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 75%, #4facfe 100%); border-radius: 12px; padding: 20px; margin: 20px 0; box-shadow: 0 8px 32px rgba(0,0,0,0.1);"></div>

<script>
(function() {
  const container = d3.select("#polymorphism-diagram");
  const width = 900;
  const height = 460;
  
  const svg = container.append("svg")
    .attr("viewBox", `0 0 ${width} ${height}`)
    .style("width", "100%")
    .style("height", "100%")
    .style("overflow", "visible");

  // Create enhanced gradient definitions for polymorphism
  const defs = svg.append("defs");
  
  // Central method gradient - Purple to Blue spectrum
  const methodGradient = defs.append("linearGradient")
    .attr("id", "poly-method-gradient")
    .attr("x1", "0%").attr("y1", "0%")
    .attr("x2", "100%").attr("y2", "100%");
  methodGradient.append("stop").attr("offset", "0%").attr("stop-color", "#6c5ce7");
  methodGradient.append("stop").attr("offset", "25%").attr("stop-color", "#a29bfe");
  methodGradient.append("stop").attr("offset", "75%").attr("stop-color", "#74b9ff");
  methodGradient.append("stop").attr("offset", "100%").attr("stop-color", "#0984e3");

  // Dog gradient - Green to Teal spectrum
  const dogGradient = defs.append("linearGradient")
    .attr("id", "poly-dog-gradient")
    .attr("x1", "0%").attr("y1", "0%")
    .attr("x2", "100%").attr("y2", "100%");
  dogGradient.append("stop").attr("offset", "0%").attr("stop-color", "#00b894");
  dogGradient.append("stop").attr("offset", "25%").attr("stop-color", "#00cec9");
  dogGradient.append("stop").attr("offset", "75%").attr("stop-color", "#55a3ff");
  dogGradient.append("stop").attr("offset", "100%").attr("stop-color", "#74b9ff");

  // Cat gradient - Orange to Red spectrum
  const catGradient = defs.append("linearGradient")
    .attr("id", "poly-cat-gradient")
    .attr("x1", "0%").attr("y1", "0%")
    .attr("x2", "100%").attr("y2", "100%");
  catGradient.append("stop").attr("offset", "0%").attr("stop-color", "#fdcb6e");
  catGradient.append("stop").attr("offset", "25%").attr("stop-color", "#f39c12");
  catGradient.append("stop").attr("offset", "75%").attr("stop-color", "#e17055");
  catGradient.append("stop").attr("offset", "100%").attr("stop-color", "#d63031");

  // Cow gradient - Pink to Purple spectrum
  const cowGradient = defs.append("linearGradient")
    .attr("id", "poly-cow-gradient")
    .attr("x1", "0%").attr("y1", "0%")
    .attr("x2", "100%").attr("y2", "100%");
  cowGradient.append("stop").attr("offset", "0%").attr("stop-color", "#e84393");
  cowGradient.append("stop").attr("offset", "25%").attr("stop-color", "#fd79a8");
  cowGradient.append("stop").attr("offset", "75%").attr("stop-color", "#6c5ce7");
  cowGradient.append("stop").attr("offset", "100%").attr("stop-color", "#a29bfe");

  // Enhanced arrow markers
  defs.append("marker")
    .attr("id", "polyArrow")
    .attr("viewBox", "0 0 10 10")
    .attr("refX", 5)
    .attr("refY", 5)
    .attr("markerWidth", 8)
    .attr("markerHeight", 8)
    .attr("orient", "auto")
    .append("path")
    .attr("d", "M 0 0 L 10 5 L 0 10 z")
    .attr("fill", "white")
    .attr("stroke", "#2d3436")
    .attr("stroke-width", "1");

  // Enhanced central method call with drop shadow
  const centralMethod = svg.append("g");
  
  // Drop shadow for central method
  centralMethod.append("rect")
    .attr("x", 353)
    .attr("y", 153)
    .attr("width", 200)
    .attr("height", 80)
    .attr("fill", "rgba(0,0,0,0.3)")
    .attr("rx", 15);
  
  // Main central method box
  centralMethod.append("rect")
    .attr("x", 350)
    .attr("y", 150)
    .attr("width", 200)
    .attr("height", 80)
    .attr("fill", "url(#poly-method-gradient)")
    .attr("stroke", "white")
    .attr("stroke-width", 3)
    .attr("rx", 15)
    .style("cursor", "pointer")
    .on("mouseover", function() {
      d3.select(this).attr("stroke", "#fdcb6e").attr("stroke-width", 4);
      // Highlight all connecting lines
      svg.selectAll(".poly-line").attr("stroke-width", 4).attr("opacity", 1);
      tooltip.style("visibility", "visible")
        .html("<strong>Polymorphic Method Call</strong><br/>Same interface, different implementations<br/>Click to see results!");
    })
    .on("mouseout", function() {
      d3.select(this).attr("stroke", "white").attr("stroke-width", 3);
      svg.selectAll(".poly-line").attr("stroke-width", 3).attr("opacity", 0.8);
      tooltip.style("visibility", "hidden");
    })
    .on("click", function() {
      // Animate the method call
      animateMethodCall();
    });

  // Enhanced text with shadows
  centralMethod.append("text")
    .attr("x", 450)
    .attr("y", 180)
    .attr("text-anchor", "middle")
    .attr("font-size", "16px")
    .attr("font-weight", "bold")
    .attr("fill", "white")
    .attr("filter", "drop-shadow(1px 1px 2px rgba(0,0,0,0.8))")
    .text("🎯 animal.make_sound()");

  centralMethod.append("text")
    .attr("x", 450)
    .attr("y", 205)
    .attr("text-anchor", "middle")
    .attr("font-size", "12px")
    .attr("fill", "white")
    .attr("filter", "drop-shadow(1px 1px 1px rgba(0,0,0,0.8))")
    .text("Polymorphic Method Call");

  // Enhanced animal definitions with gradients
  const animals = [
    { 
      name: "Dog", 
      sound: "Woof!", 
      x: 150, 
      y: 80, 
      gradient: "url(#poly-dog-gradient)",
      emoji: "🐕",
      desc: "Loyal companion"
    },
    { 
      name: "Cat", 
      sound: "Meow!", 
      x: 150, 
      y: 280, 
      gradient: "url(#poly-cat-gradient)",
      emoji: "🐱",
      desc: "Independent hunter"
    },
    { 
      name: "Cow", 
      sound: "Moo!", 
      x: 700, 
      y: 180, 
      gradient: "url(#poly-cow-gradient)",
      emoji: "🐄",
      desc: "Gentle giant"
    }
  ];

  // Draw enhanced animals and their responses
  animals.forEach((animal, i) => {
    const animalGroup = svg.append("g");
    
    // Drop shadow for animal container
    animalGroup.append("rect")
      .attr("x", animal.x - 57)
      .attr("y", animal.y - 37)
      .attr("width", 120)
      .attr("height", 80)
      .attr("fill", "rgba(0,0,0,0.3)")
      .attr("rx", 10);
    
    // Enhanced animal container with gradient
    animalGroup.append("rect")
      .attr("x", animal.x - 60)
      .attr("y", animal.y - 40)
      .attr("width", 120)
      .attr("height", 80)
      .attr("fill", animal.gradient)
      .attr("stroke", "white")
      .attr("stroke-width", 2)
      .attr("rx", 10)
      .attr("opacity", 0.95)
      .style("cursor", "pointer")
      .on("mouseover", function() {
        d3.select(this).attr("opacity", 1).attr("stroke-width", 3);
        tooltip.style("visibility", "visible")
          .html(`<strong>${animal.name}</strong><br/>${animal.desc}<br/>Sound: ${animal.sound}`);
      })
      .on("mouseout", function() {
        d3.select(this).attr("opacity", 0.95).attr("stroke-width", 2);
        tooltip.style("visibility", "hidden");
      });

    // Animal emoji with shadow effect
    animalGroup.append("text")
      .attr("x", animal.x)
      .attr("y", animal.y - 10)
      .attr("text-anchor", "middle")
      .attr("font-size", "24px")
      .attr("filter", "drop-shadow(1px 1px 2px rgba(0,0,0,0.5))")
      .text(animal.emoji);

    // Enhanced animal name with shadow
    animalGroup.append("text")
      .attr("x", animal.x)
      .attr("y", animal.y + 15)
      .attr("text-anchor", "middle")
      .attr("font-size", "12px")
      .attr("font-weight", "bold")
      .attr("fill", "white")
      .attr("filter", "drop-shadow(1px 1px 2px rgba(0,0,0,0.8))")
      .text(animal.name);

    // Speech bubble (initially hidden)
    const speechBubble = animalGroup.append("g")
      .attr("class", `speech-${i}`)
      .style("opacity", 0);

    // Enhanced speech bubble background with gradient
    speechBubble.append("ellipse")
      .attr("cx", animal.x)
      .attr("cy", animal.y - 80)
      .attr("rx", 35)
      .attr("ry", 20)
      .attr("fill", "rgba(255,255,255,0.95)")
      .attr("stroke", "white")
      .attr("stroke-width", 3)
      .attr("filter", "drop-shadow(2px 2px 4px rgba(0,0,0,0.3))");

    // Enhanced speech bubble text
    speechBubble.append("text")
      .attr("x", animal.x)
      .attr("y", animal.y - 75)
      .attr("text-anchor", "middle")
      .attr("font-size", "14px")
      .attr("font-weight", "bold")
      .attr("fill", "#2d3436")
      .attr("filter", "drop-shadow(1px 1px 1px rgba(0,0,0,0.3))")
      .text(animal.sound);

    // Enhanced speech bubble tail
    speechBubble.append("path")
      .attr("d", `M ${animal.x - 5} ${animal.y - 60} L ${animal.x} ${animal.y - 45} L ${animal.x + 5} ${animal.y - 60} Z`)
      .attr("fill", "rgba(255,255,255,0.95)")
      .attr("stroke", "white")
      .attr("stroke-width", 3)
      .attr("filter", "drop-shadow(1px 1px 2px rgba(0,0,0,0.3))");

    // Enhanced connecting line from method to animal
    const lineEndX = animal.x > 450 ? animal.x - 60 : animal.x + 60;
    const lineStartX = animal.x > 450 ? 550 : 350;
    
    svg.append("line")
      .attr("class", "poly-line")
      .attr("x1", lineStartX)
      .attr("y1", 190)
      .attr("x2", lineEndX)
      .attr("y2", animal.y)
      .attr("stroke", "white")
      .attr("stroke-width", 3)
      .attr("stroke-dasharray", "8,4")
      .attr("opacity", 0.9)
      .attr("marker-end", "url(#polyArrow)")
      .attr("filter", "drop-shadow(1px 1px 2px rgba(0,0,0,0.5))");

    // Method call animation trigger
    animalGroup.on("click", function() {
      showAnimalResponse(i);
    });
  });

  // Animation function
  function animateMethodCall() {
    // Hide all speech bubbles first
    svg.selectAll("[class^='speech-']").style("opacity", 0);
    
    // Show speech bubbles with delay
    animals.forEach((animal, i) => {
      setTimeout(() => {
        showAnimalResponse(i);
      }, i * 500);
    });
  }

  function showAnimalResponse(index) {
    svg.select(`.speech-${index}`)
      .transition()
      .duration(300)
      .style("opacity", 1)
      .transition()
      .delay(2000)
      .duration(300)
      .style("opacity", 0);
  }

  // Enhanced title with shadow
  svg.append("text")
    .attr("x", 450)
    .attr("y", 30)
    .attr("text-anchor", "middle")
    .attr("font-size", "22px")
    .attr("font-weight", "bold")
    .attr("fill", "white")
    .attr("filter", "drop-shadow(2px 2px 4px rgba(0,0,0,0.8))")
    .text("🎭 Polymorphism in Action");

  // Enhanced explanation
  svg.append("text")
    .attr("x", 450)
    .attr("y", 50)
    .attr("text-anchor", "middle")
    .attr("font-size", "14px")
    .attr("fill", "white")
    .attr("filter", "drop-shadow(1px 1px 2px rgba(0,0,0,0.8))")
    .text("Same method call → Different results based on object type");

  // Enhanced benefits section
  const benefits = [
    "🔄 Same Interface, Different Behavior",
    "🎯 Code Flexibility & Extensibility", 
    "📝 Cleaner, More Maintainable Code",
    "🚀 Runtime Method Resolution"
  ];

  benefits.forEach((benefit, i) => {
    svg.append("text")
      .attr("x", 50 + (i % 2) * 400)
      .attr("y", 380 + Math.floor(i / 2) * 20)
      .attr("font-size", "12px")
      .attr("font-weight", "bold")
      .attr("fill", "white")
      .attr("filter", "drop-shadow(1px 1px 2px rgba(0,0,0,0.8))")
      .text(benefit);
  });

  // Enhanced click instruction
  svg.append("text")
    .attr("x", 450)
    .attr("y", 430)
    .attr("text-anchor", "middle")
    .attr("font-size", "12px")
    .attr("fill", "white")
    .attr("font-weight", "500")
    .attr("filter", "drop-shadow(1px 1px 1px rgba(0,0,0,0.8))")
    .text("💡 Click the method call or any animal to see polymorphism in action!");

  // Enhanced interactive tooltip with gradient background
  const tooltip = d3.select("body").append("div")
    .attr("class", "polymorphism-tooltip")
    .style("position", "absolute")
    .style("visibility", "hidden")
    .style("background", "linear-gradient(135deg, rgba(0,0,0,0.95) 0%, rgba(45,52,54,0.95) 100%)")
    .style("color", "white")
    .style("padding", "12px 16px")
    .style("border-radius", "8px")
    .style("font-size", "12px")
    .style("font-weight", "500")
    .style("max-width", "250px")
    .style("z-index", "10000")
    .style("pointer-events", "none")
    .style("box-shadow", "0 8px 32px rgba(0,0,0,0.3)")
    .style("border", "1px solid rgba(255,255,255,0.2)");

  svg.on("mousemove", function(event) {
    tooltip.style("top", (event.pageY - 10) + "px")
      .style("left", (event.pageX + 10) + "px");
  });

})();
</script>

<div style="clear: both;"></div>

**Example (Method Overriding):**

```python
class Bird:
    def intro(self):
        print("There are many types of birds.")

    def flight(self):
        print("Most of the birds can fly but some cannot.")

class Sparrow(Bird):
    # Overriding the flight method
    def flight(self):
        print("Sparrows can fly.")

class Ostrich(Bird):
    # Overriding the flight method
    def flight(self):
        print("Ostriches cannot fly.")

obj_bird = Bird()
obj_sparrow = Sparrow()
obj_ostrich = Ostrich()

obj_bird.flight()
obj_sparrow.flight()
obj_ostrich.flight()
```

### 🧠 1.3. Custom Class in PyTorch (nn.Module)
<span id="pytorch-custom-class"></span>

In PyTorch, all neural network modules, including layers and activation functions, are subclasses of `torch.nn.Module`. To create a custom layer or model, you must inherit from this class.

- **`__init__(self)`**: Define the layers (e.g., `nn.Linear`, `nn.Conv2d`) you will use. You must call `super().__init__()`.
- **`forward(self, x)`**: Defines the forward pass of the module. This is where the computation happens, connecting the defined layers.

#### Example: Custom Sigmoid Function

The sigmoid function is given by: \\( \text{sigmoid}(x) = \frac{1}{1 + e^{-x}} \\)

```python
import torch
import torch.nn as nn

class CustomSigmoid(nn.Module):
    def __init__(self):
        super().__init__() # Call the constructor of the parent class (nn.Module)

    def forward(self, x):
        # Define the forward pass computation
        return 1 / (1 + torch.exp(-x))

# Usage
data = torch.tensor([1.0, 5.0, -4.0])
custom_sigmoid = CustomSigmoid()
output = custom_sigmoid(data)
print(output)
# Expected output: tensor([0.7311, 0.9933, 0.0180])
```

#### Example: Custom Softmax Function

The softmax function is: \\( \text{softmax}(x_i) = \frac{\exp(x_i)}{\sum_j \exp(x_j)} \\)

A numerically stable version is: \\( \text{softmax}_{\text{stable}}(x_i) = \frac{\exp(x_i - c)}{\sum_j \exp(x_j - c)} \\) where \\( c = \max(x) \\).

```python
import torch
import torch.nn as nn

class StableSoftmax(nn.Module):
    def __init__(self):
        super().__init__()

    def forward(self, x):
        c = torch.max(x, dim=0).values
        exp_x_minus_c = torch.exp(x - c)
        sum_exp = torch.sum(exp_x_minus_c)
        return exp_x_minus_c / sum_exp

# Usage
data = torch.tensor([1.0, 2.0, 3.0])
stable_softmax = StableSoftmax()
output = stable_softmax(data)
print(output)
# Expected output: tensor([0.0900, 0.2447, 0.6652])
```

---

## 💾 2. Database - SQL Advanced Techniques
<span id="database-sql"></span>

**Structured Query Language (SQL)** is used to communicate with a database. It is the standard language for relational database management systems.

### 🔗 2.1. SQL JOIN Clause
<span id="sql-join-clause"></span>

Joins are used to combine rows from two or more tables, based on a related column between them.

| Join Type | Description |
|-----------|-------------|
| **INNER JOIN** | Returns records that have matching values in both tables. |
| **LEFT JOIN** | Returns all records from the left table, and the matched records from the right table. |
| **RIGHT JOIN** | Returns all records from the right table, and the matched records from the left table. |
| **FULL OUTER JOIN** | Returns all records when there is a match in either left or right table. (MySQL doesn't support this directly; it can be emulated with UNION) |
| **SELF JOIN** | A regular join, but the table is joined with itself. |
| **CROSS JOIN** | Creates the Cartesian product of the two tables, returning all possible combinations of rows. |

#### 🎨 Interactive SQL JOINs Visualization

<div id="sql-joins-diagram" style="width: 100%; height: 780px; background: linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 75%, #4facfe 100%); border-radius: 12px; padding: 20px; margin: 20px 0; box-shadow: 0 8px 32px rgba(0,0,0,0.1);"></div>

<script>
(function() {
  const container = d3.select("#sql-joins-diagram");
  const width = 900;
  const height = 660; // Increased height to provide extra space for performance section
  
  const svg = container.append("svg")
    .attr("viewBox", `0 0 ${width} ${height}`)
    .style("width", "100%")
    .style("height", "100%");

  // Define gradients in defs
  const defs = svg.append("defs");

  // Table A gradient (Teal to Blue spectrum)
  const tableAGradient = defs.append("linearGradient")
    .attr("id", "sql-tableA-gradient")
    .attr("x1", "0%").attr("y1", "0%")
    .attr("x2", "100%").attr("y2", "100%");
  tableAGradient.append("stop").attr("offset", "0%").attr("stop-color", "#00b894");
  tableAGradient.append("stop").attr("offset", "25%").attr("stop-color", "#00cec9");
  tableAGradient.append("stop").attr("offset", "75%").attr("stop-color", "#74b9ff");
  tableAGradient.append("stop").attr("offset", "100%").attr("stop-color", "#0984e3");

  // Table B gradient (Pink to Purple spectrum)
  const tableBGradient = defs.append("linearGradient")
    .attr("id", "sql-tableB-gradient")
    .attr("x1", "0%").attr("y1", "0%")
    .attr("x2", "100%").attr("y2", "100%");
  tableBGradient.append("stop").attr("offset", "0%").attr("stop-color", "#fd79a8");
  tableBGradient.append("stop").attr("offset", "25%").attr("stop-color", "#e84393");
  tableBGradient.append("stop").attr("offset", "75%").attr("stop-color", "#a29bfe");
  tableBGradient.append("stop").attr("offset", "100%").attr("stop-color", "#6c5ce7");

  // Intersection gradient (Green to Cyan spectrum)
  const intersectionGradient = defs.append("linearGradient")
    .attr("id", "sql-intersection-gradient")
    .attr("x1", "0%").attr("y1", "0%")
    .attr("x2", "100%").attr("y2", "100%");
  intersectionGradient.append("stop").attr("offset", "0%").attr("stop-color", "#00b894");
  intersectionGradient.append("stop").attr("offset", "25%").attr("stop-color", "#00cec9");
  intersectionGradient.append("stop").attr("offset", "75%").attr("stop-color", "#81ecec");
  intersectionGradient.append("stop").attr("offset", "100%").attr("stop-color", "#74b9ff");

  // Container background gradient
  const containerGradient = defs.append("linearGradient")
    .attr("id", "sql-container-gradient")
    .attr("x1", "0%").attr("y1", "0%")
    .attr("x2", "100%").attr("y2", "100%");
  containerGradient.append("stop").attr("offset", "0%").attr("stop-color", "rgba(255,255,255,0.95)");
  containerGradient.append("stop").attr("offset", "50%").attr("stop-color", "rgba(248,249,250,0.9)");
  containerGradient.append("stop").attr("offset", "100%").attr("stop-color", "rgba(255,255,255,0.95)");

  // Performance gradients
  const performanceGradients = [
    { id: "sql-inner-perf", colors: ["#00b894", "#00cec9", "#74b9ff"] },
    { id: "sql-left-perf", colors: ["#00b894", "#00cec9", "#74b9ff", "#0984e3"] },
    { id: "sql-right-perf", colors: ["#fd79a8", "#e84393", "#a29bfe", "#6c5ce7"] },
    { id: "sql-full-perf", colors: ["#fdcb6e", "#f39c12", "#e17055", "#d63031"] }
  ];

  performanceGradients.forEach(grad => {
    const gradient = defs.append("linearGradient")
      .attr("id", grad.id)
      .attr("x1", "0%").attr("y1", "0%")
      .attr("x2", "100%").attr("y2", "0%");
    
    grad.colors.forEach((color, i) => {
      gradient.append("stop")
        .attr("offset", `${(i / (grad.colors.length - 1)) * 100}%`)
        .attr("stop-color", color);
    });
  });

  // Drop shadow filter
  const filter = defs.append("filter")
    .attr("id", "sql-drop-shadow")
    .attr("height", "130%");
  filter.append("feDropShadow")
    .attr("dx", 2).attr("dy", 2)
    .attr("stdDeviation", 3)
    .attr("flood-opacity", 0.4);

  // Define colors with gradient references
  const colors = {
    tableA: "url(#sql-tableA-gradient)",
    tableB: "url(#sql-tableB-gradient)", 
    intersection: "url(#sql-intersection-gradient)",
    background: "url(#sql-container-gradient)"
  };

  // Join types data
  const joinTypes = [
    {
      name: "INNER JOIN",
      x: 150,
      y: 100,
      description: "Returns only matching records",
      shadeLeft: false,
      shadeRight: false,
      shadeIntersection: true,
      example: "SELECT * FROM users u INNER JOIN orders o ON u.id = o.user_id"
    },
    {
      name: "LEFT JOIN",
      x: 550,
      y: 100,
      description: "Returns all from left table + matches from right",
      shadeLeft: true,
      shadeRight: false,
      shadeIntersection: true,
      example: "SELECT * FROM users u LEFT JOIN orders o ON u.id = o.user_id"
    },
    {
      name: "RIGHT JOIN",
      x: 150,
      y: 320,
      description: "Returns all from right table + matches from left",
      shadeLeft: false,
      shadeRight: true,
      shadeIntersection: true,
      example: "SELECT * FROM users u RIGHT JOIN orders o ON u.id = o.user_id"
    },
    {
      name: "FULL OUTER JOIN",
      x: 550,
      y: 320,
      description: "Returns all records from both tables",
      shadeLeft: true,
      shadeRight: true,
      shadeIntersection: true,
      example: "SELECT * FROM users u FULL OUTER JOIN orders o ON u.id = o.user_id"
    }
  ];

  // Title with gradient styling
  svg.append("text")
    .attr("x", 450)
    .attr("y", 30)
    .attr("text-anchor", "middle")
    .attr("font-size", "24px")
    .attr("font-weight", "bold")
    .attr("fill", "#ffffff")
    .style("text-shadow", "3px 3px 6px rgba(0,0,0,0.8)")
    .text("🔗 SQL JOIN Types - Interactive Venn Diagrams");

  // Create each JOIN diagram
  joinTypes.forEach((join, index) => {
    const joinGroup = svg.append("g");
    
    // Background container with enhanced gradient styling
    joinGroup.append("rect")
      .attr("x", join.x - 80)
      .attr("y", join.y - 50)
      .attr("width", 260)
      .attr("height", 180)
      .attr("fill", colors.background)
      .attr("stroke", "#2d3436")
      .attr("stroke-width", 2)
      .attr("rx", 12)
      .style("cursor", "pointer")
      .style("filter", "url(#sql-drop-shadow)")
      .on("mouseover", function() {
        d3.select(this)
          .transition().duration(200)
          .attr("stroke", "#fdcb6e")
          .attr("stroke-width", 3)
          .style("filter", "url(#sql-drop-shadow) drop-shadow(0 0 12px rgba(253, 203, 110, 0.4))");
        tooltip.style("visibility", "visible")
          .html(`<strong>${join.name}</strong><br/>${join.description}<br/><em>Click to see SQL example</em>`);
      })
      .on("mouseout", function() {
        d3.select(this)
          .transition().duration(200)
          .attr("stroke", "#2d3436")
          .attr("stroke-width", 2)
          .style("filter", "url(#sql-drop-shadow)");
        tooltip.style("visibility", "hidden");
      })
      .on("click", function() {
        showSQLExample(join);
      });

    // Title for each diagram with enhanced styling
    joinGroup.append("text")
      .attr("x", join.x + 50)
      .attr("y", join.y - 25)
      .attr("text-anchor", "middle")
      .attr("font-size", "16px")
      .attr("font-weight", "bold")
      .attr("fill", "#2d3436")
      .style("text-shadow", "1px 1px 2px rgba(255,255,255,0.8)")
      .text(join.name);

    // Circle A (Table A) with gradient enhancement
    const circleA = joinGroup.append("circle")
      .attr("cx", join.x + 20)
      .attr("cy", join.y + 30)
      .attr("r", 40)
      .attr("stroke", "#0984e3")
      .attr("stroke-width", 3)
      .attr("fill", join.shadeLeft ? colors.tableA : "none")
      .attr("fill-opacity", join.shadeLeft ? 0.8 : 0)
      .style("filter", "url(#sql-drop-shadow)");

    // Circle B (Table B) with gradient enhancement
    const circleB = joinGroup.append("circle")
      .attr("cx", join.x + 80)
      .attr("cy", join.y + 30)
      .attr("r", 40)
      .attr("stroke", "#6c5ce7")
      .attr("stroke-width", 3)
      .attr("fill", join.shadeRight ? colors.tableB : "none")
      .attr("fill-opacity", join.shadeRight ? 0.8 : 0)
      .style("filter", "url(#sql-drop-shadow)");

    // Intersection highlight (if needed) with enhanced gradient
    if (join.shadeIntersection && !join.shadeLeft && !join.shadeRight) {
      // Create intersection path
      joinGroup.append("path")
        .attr("d", createIntersectionPath(join.x + 20, join.y + 30, join.x + 80, join.y + 30, 40))
        .attr("fill", colors.intersection)
        .attr("fill-opacity", 0.9)
        .style("filter", "url(#sql-drop-shadow)");
    }

    // Labels with enhanced styling and contrast
    joinGroup.append("text")
      .attr("x", join.x + 5)
      .attr("y", join.y + 35)
      .attr("text-anchor", "middle")
      .attr("font-size", "12px")
      .attr("font-weight", "bold")
      .attr("fill", "#ffffff")
      .style("text-shadow", "2px 2px 4px rgba(0,0,0,0.8)")
      .text("Table A");

    joinGroup.append("text")
      .attr("x", join.x + 95)
      .attr("y", join.y + 35)
      .attr("text-anchor", "middle")
      .attr("font-size", "12px")
      .attr("font-weight", "bold")
      .attr("fill", "#ffffff")
      .style("text-shadow", "2px 2px 4px rgba(0,0,0,0.8)")
      .text("Table B");

    // Description with better contrast
    joinGroup.append("text")
      .attr("x", join.x + 50)
      .attr("y", join.y + 95)
      .attr("text-anchor", "middle")
      .attr("font-size", "11px")
      .attr("fill", "#2d3436")
      .attr("font-weight", "500")
      .style("text-shadow", "1px 1px 2px rgba(255,255,255,0.8)")
      .text(join.description);

    // Record count indicators with enhanced styling
    const counts = getJoinCounts(join.name);
    joinGroup.append("text")
      .attr("x", join.x + 50)
      .attr("y", join.y + 110)
      .attr("text-anchor", "middle")
      .attr("font-size", "10px")
      .attr("font-weight", "bold")
      .attr("fill", "#e17055")
      .style("text-shadow", "1px 1px 2px rgba(255,255,255,0.9)")
      .text(`Result: ${counts} records`);
  });

  // Function to create intersection path
  function createIntersectionPath(x1, y1, x2, y2, r) {
    const d = Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
    const a = (r * r - r * r + d * d) / (2 * d);
    const h = Math.sqrt(r * r - a * a);
    
    const cx = x1 + a * (x2 - x1) / d;
    const cy = y1 + a * (y2 - y1) / d;
    
    const ix1 = cx + h * (y2 - y1) / d;
    const iy1 = cy - h * (x2 - x1) / d;
    const ix2 = cx - h * (y2 - y1) / d;
    const iy2 = cy + h * (x2 - x1) / d;
    
    return `M ${ix1} ${iy1} A ${r} ${r} 0 0 1 ${ix2} ${iy2} A ${r} ${r} 0 0 1 ${ix1} ${iy1}`;
  }

  // Function to get example record counts
  function getJoinCounts(joinType) {
    const counts = {
      "INNER JOIN": "Matching only",
      "LEFT JOIN": "All left + matches",
      "RIGHT JOIN": "All right + matches", 
      "FULL OUTER JOIN": "All records"
    };
    return counts[joinType];
  }

  // SQL Example display with gradient enhancements
  function showSQLExample(join) {
    // Remove existing example if any
    svg.select(".sql-example").remove();
    
    const exampleGroup = svg.append("g").attr("class", "sql-example");
    
    // Create example gradient
    const exampleGradient = defs.append("linearGradient")
      .attr("id", "sql-example-gradient")
      .attr("x1", "0%").attr("y1", "0%")
      .attr("x2", "100%").attr("y2", "100%");
    exampleGradient.append("stop").attr("offset", "0%").attr("stop-color", "rgba(45, 52, 54, 0.98)");
    exampleGradient.append("stop").attr("offset", "50%").attr("stop-color", "rgba(30, 41, 59, 0.95)");
    exampleGradient.append("stop").attr("offset", "100%").attr("stop-color", "rgba(15, 23, 42, 0.98)");
    
    // Enhanced background with gradient and glow
    exampleGroup.append("rect")
      .attr("x", 50)
      .attr("y", 480)
      .attr("width", 800)
      .attr("height", 60)
      .attr("fill", "url(#sql-example-gradient)")
      .attr("stroke", "#00b894")
      .attr("stroke-width", 2)
      .attr("rx", 12)
      .style("filter", "url(#sql-drop-shadow) drop-shadow(0 0 12px rgba(0, 184, 148, 0.3))");
    
    // SQL text with enhanced styling
    exampleGroup.append("text")
      .attr("x", 450)
      .attr("y", 500)
      .attr("text-anchor", "middle")
      .attr("font-size", "12px")
      .attr("font-weight", "bold")
      .attr("fill", "#00b894")
      .style("text-shadow", "1px 1px 3px rgba(0,0,0,0.8)")
      .text("💻 SQL EXAMPLE:");
    
    exampleGroup.append("text")
      .attr("x", 450)
      .attr("y", 520)
      .attr("text-anchor", "middle")
      .attr("font-size", "11px")
      .attr("font-weight", "500")
      .attr("fill", "#74b9ff")
      .style("text-shadow", "1px 1px 2px rgba(0,0,0,0.8)")
      .text(join.example);
    
    // Close button
    const closeBtn = exampleGroup.append("g")
      .style("cursor", "pointer")
      .on("click", function() {
        exampleGroup.transition().duration(300).style("opacity", 0).remove();
      });
    
    closeBtn.append("circle")
      .attr("cx", 830)
      .attr("cy", 490)
      .attr("r", 12)
      .attr("fill", "#e17055")
      .style("filter", "url(#sql-drop-shadow)");
    
    closeBtn.append("text")
      .attr("x", 830)
      .attr("y", 495)
      .attr("text-anchor", "middle")
      .attr("font-size", "12px")
      .attr("font-weight", "bold")
      .attr("fill", "#ffffff")
      .text("×");
    
    // Auto-hide after 5 seconds
    setTimeout(() => {
      if (exampleGroup.node()) {
        exampleGroup.transition().duration(500).style("opacity", 0).remove();
      }
    }, 5000);
  }

  // Performance comparison with gradient enhancements
  const performanceData = [
    { join: "INNER", performance: 95, color: "url(#sql-inner-perf)" },
    { join: "LEFT", performance: 85, color: "url(#sql-left-perf)" },
    { join: "RIGHT", performance: 85, color: "url(#sql-right-perf)" },
    { join: "FULL OUTER", performance: 65, color: "url(#sql-full-perf)" }
  ];

  // Performance section with enhanced styling
  svg.append("text")
    .attr("x", 450) // center below JOIN diagrams
    .attr("y", 500)
    .attr("text-anchor", "middle")
    .attr("font-size", "16px")
    .attr("font-weight", "bold")
    .attr("fill", "#ffffff")
    .style("text-shadow", "2px 2px 4px rgba(0,0,0,0.7)")
    .text("⚡ Performance Comparison");

  performanceData.forEach((data, i) => {
    const y = 520 + i * 25; // start beneath performance label
    
    // Performance bar background with gradient
    const bgGradient = defs.append("linearGradient")
      .attr("id", `sql-bg-${i}`)
      .attr("x1", "0%").attr("y1", "0%")
      .attr("x2", "100%").attr("y2", "0%");
    bgGradient.append("stop").attr("offset", "0%").attr("stop-color", "#ecf0f1");
    bgGradient.append("stop").attr("offset", "100%").attr("stop-color", "#ddd6fe");
    
    svg.append("rect")
      .attr("x", 300)
      .attr("y", y - 8)
      .attr("width", 300)
      .attr("height", 16)
      .attr("fill", `url(#sql-bg-${i})`)
      .attr("rx", 8)
      .style("filter", "url(#sql-drop-shadow)");
    
    // Performance bar with enhanced gradients
    svg.append("rect")
      .attr("x", 300)
      .attr("y", y - 8)
      .attr("width", 0)
      .attr("height", 16)
      .attr("fill", data.color)
      .attr("rx", 8)
      .style("filter", "url(#sql-drop-shadow)")
      .transition()
      .duration(1200)
      .delay(i * 250)
      .attr("width", (data.performance / 100) * 300);
    
    // Label with enhanced styling
    svg.append("text")
      .attr("x", 290)
      .attr("y", y + 2)
      .attr("text-anchor", "end")
      .attr("font-size", "11px")
      .attr("font-weight", "600")
      .attr("fill", "#ffffff")
      .style("text-shadow", "1px 1px 3px rgba(0,0,0,0.8)")
      .text(data.join);

    // Performance percentage with styling
    svg.append("text")
      .attr("x", 610)
      .attr("y", y + 2)
      .attr("font-size", "10px")
      .attr("font-weight", "bold")
      .attr("fill", "#ffffff")
      .style("text-shadow", "1px 1px 2px rgba(0,0,0,0.8)")
      .text(`${data.performance}%`);
  });

  // Usage tips with enhanced styling
  const tips = [
    "💡 Use INNER JOIN for best performance with matching data",
    "🎯 LEFT JOIN preserves all records from the primary table",
    "⚠️ FULL OUTER JOIN combines everything but needs more resources"
  ];

  tips.forEach((tip, i) => {
    svg.append("text")
      .attr("x", 300)
      .attr("y", 680 + i * 16)
      .attr("font-size", "11px")
      .attr("font-weight", "500")
      .attr("fill", "#ffffff")
      .style("text-shadow", "1px 1px 2px rgba(0,0,0,0.7)")
      .text(tip);
  });

  // Interactive tooltip with gradient styling
  const tooltip = d3.select("body").append("div")
    .attr("class", "sql-joins-tooltip")
    .style("position", "absolute")
    .style("visibility", "hidden")
    .style("background", "linear-gradient(135deg, rgba(0,0,0,0.95), rgba(30,41,59,0.95))")
    .style("color", "white")
    .style("padding", "12px 16px")
    .style("border-radius", "12px")
    .style("font-size", "13px")
    .style("line-height", "1.4")
    .style("max-width", "320px")
    .style("z-index", "10000")
    .style("pointer-events", "none")
    .style("box-shadow", "0 8px 25px rgba(0,0,0,0.3)")
    .style("border", "1px solid rgba(255,255,255,0.1)")
    .style("backdrop-filter", "blur(10px)");

  svg.on("mousemove", function(event) {
    const tooltipWidth = 320;
    const tooltipHeight = 80;
    const pageX = event.pageX;
    const pageY = event.pageY;
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    
    // Smart positioning to avoid viewport overflow
    let left = pageX + 15;
    let top = pageY - 10;
    
    if (left + tooltipWidth > windowWidth) {
      left = pageX - tooltipWidth - 15;
    }
    
    if (top + tooltipHeight > windowHeight) {
      top = pageY - tooltipHeight - 15;
    }
    
    tooltip.style("top", top + "px")
      .style("left", left + "px");
  });

})();
</script>

<div style="clear: both;"></div>

**Example: Joining orders and customers tables**

```sql
SELECT 
    o.order_id,
    c.first_name,
    c.last_name,
    os.name AS status
FROM orders AS o
JOIN customers AS c ON o.customer_id = c.customer_id
JOIN order_statuses AS os ON o.status = os.order_status_id
WHERE c.state = 'VA'; -- Example of filtering after joining
```

### 🔍 2.2. Subqueries (Nested Queries)
<span id="subqueries"></span>

A subquery is a query nested inside another query. It can be used in SELECT, FROM, WHERE, or HAVING clauses.

**Example: Find clients with an invoice total above the average.**

```sql
SELECT *
FROM invoices
WHERE invoice_total > (
    -- Subquery to calculate the average invoice total
    SELECT AVG(invoice_total) 
    FROM invoices
);
```

### 📋 2.3. Common Table Expressions (CTEs)
<span id="common-table-expressions"></span>

A CTE provides a temporary, named result set that you can reference within another SELECT, INSERT, UPDATE, or DELETE statement. CTEs improve readability and help break down complex queries.

**Example: Find the client with the highest total invoice amount.**

```sql
WITH client_sales AS (
    -- CTE to calculate total sales per client
    SELECT
        client_id,
        SUM(invoice_total) AS total_sales
    FROM invoices
    GROUP BY client_id
)
SELECT
    c.name,
    cs.total_sales
FROM clients c
JOIN client_sales cs ON c.client_id = cs.client_id
ORDER BY cs.total_sales DESC
LIMIT 1;
```

### 🗃️ 2.4. Temporary Tables
<span id="temporary-tables"></span>

A temporary table is a table that is created and exists only for the duration of a database session. It's useful for storing intermediate results.

```sql
-- Create a temporary table to hold aggregated data
CREATE TEMPORARY TABLE temp_client_summary AS
SELECT
    client_id,
    SUM(invoice_total) AS total_spent,
    COUNT(invoice_id) AS number_of_invoices
FROM invoices
GROUP BY client_id;

-- Now you can query this temporary table multiple times
SELECT * FROM temp_client_summary WHERE total_spent > 500;
```

### ⚙️ 2.5. Stored Procedures and Triggers
<span id="stored-procedures"></span>

- **Stored Procedure**: A prepared SQL code that you can save, so the code can be reused over and over again. You can pass parameters to a stored procedure.
- **Trigger**: A special type of stored procedure that automatically runs when an event (INSERT, UPDATE, DELETE) occurs in a database table.

**Example: Stored Procedure**

```sql
DELIMITER $$

CREATE PROCEDURE get_clients_by_state(IN state_abbreviation CHAR(2))
BEGIN
    SELECT * FROM clients
    WHERE state = state_abbreviation;
END$$

DELIMITER ;

-- To use it:
CALL get_clients_by_state('CA');
```

---

## 🏗️ 3. Data Structures Fundamentals
<span id="data-structures"></span>

> 💡 **Core Concept**: Data structures are a way of organizing and storing data so that they can be accessed and worked with efficiently.

### 📚 3.1. Stack
<span id="stack"></span>

A **stack** is a linear data structure that follows the **LIFO (Last-In, First-Out)** principle. The last element added to the stack will be the first one to be removed.

**Key Operations:**
- **push**: Adds an element to the top of the stack
- **pop**: Removes the top element from the stack
- **peek/top**: Returns the top element without removing it
- **is_empty**: Checks if the stack is empty

#### 🎨 Interactive Stack Visualization

<div id="stack-diagram" style="width: 100%; height: 500px; background: linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 75%, #4facfe 100%); border-radius: 12px; padding: 20px; margin: 20px 0; box-shadow: 0 8px 32px rgba(0,0,0,0.1);"></div>

<script>
(function() {
  const container = d3.select("#stack-diagram");
  const width = 900;
  const height = 460;
  
  const svg = container.append("svg")
    .attr("viewBox", `0 0 ${width} ${height}`)
    .style("width", "100%")
    .style("height", "100%");

  // Define gradients and filters
  const defs = svg.append("defs");

  // Stack element gradient (Teal to Blue spectrum)
  const elementGradient = defs.append("linearGradient")
    .attr("id", "stack-element-gradient")
    .attr("x1", "0%").attr("y1", "0%")
    .attr("x2", "100%").attr("y2", "100%");
  elementGradient.append("stop").attr("offset", "0%").attr("stop-color", "#00b894");
  elementGradient.append("stop").attr("offset", "25%").attr("stop-color", "#00cec9");
  elementGradient.append("stop").attr("offset", "75%").attr("stop-color", "#74b9ff");
  elementGradient.append("stop").attr("offset", "100%").attr("stop-color", "#0984e3");

  // Container gradient (Dark theme)
  const containerGradient = defs.append("linearGradient")
    .attr("id", "stack-container-gradient")
    .attr("x1", "0%").attr("y1", "0%")
    .attr("x2", "100%").attr("y2", "100%");
  containerGradient.append("stop").attr("offset", "0%").attr("stop-color", "#2d3436");
  containerGradient.append("stop").attr("offset", "50%").attr("stop-color", "#636e72");
  containerGradient.append("stop").attr("offset", "100%").attr("stop-color", "#2d3436");

  // Highlight gradient (Gold to Orange)
  const highlightGradient = defs.append("linearGradient")
    .attr("id", "stack-highlight-gradient")
    .attr("x1", "0%").attr("y1", "0%")
    .attr("x2", "100%").attr("y2", "100%");
  highlightGradient.append("stop").attr("offset", "0%").attr("stop-color", "#fdcb6e");
  highlightGradient.append("stop").attr("offset", "50%").attr("stop-color", "#f39c12");
  highlightGradient.append("stop").attr("offset", "100%").attr("stop-color", "#e17055");

  // Top indicator gradient (Green spectrum)
  const topGradient = defs.append("linearGradient")
    .attr("id", "stack-top-gradient")
    .attr("x1", "0%").attr("y1", "0%")
    .attr("x2", "100%").attr("y2", "0%");
  topGradient.append("stop").attr("offset", "0%").attr("stop-color", "#00b894");
  topGradient.append("stop").attr("offset", "50%").attr("stop-color", "#00cec9");
  topGradient.append("stop").attr("offset", "100%").attr("stop-color", "#55efc4");

  // Drop shadow filter
  const filter = defs.append("filter")
    .attr("id", "stack-drop-shadow")
    .attr("height", "130%");
  filter.append("feDropShadow")
    .attr("dx", 3).attr("dy", 3)
    .attr("stdDeviation", 4)
    .attr("flood-opacity", 0.4);

  // Stack state
  let stackElements = [];
  let animating = false;

  // Enhanced colors with gradient references
  const colors = {
    container: "url(#stack-container-gradient)",
    element: "url(#stack-element-gradient)",
    highlight: "url(#stack-highlight-gradient)",
    top: "url(#stack-top-gradient)"
  };

  // Enhanced stack container
  const stackContainer = svg.append("g");
  
  // Stack base and sides with enhanced styling
  stackContainer.append("rect")
    .attr("x", 350)
    .attr("y", 300)
    .attr("width", 100)
    .attr("height", 12)
    .attr("fill", colors.container)
    .attr("rx", 2)
    .style("filter", "url(#stack-drop-shadow)");

  stackContainer.append("rect")
    .attr("x", 338)
    .attr("y", 150)
    .attr("width", 12)
    .attr("height", 150)
    .attr("fill", colors.container)
    .attr("rx", 2)
    .style("filter", "url(#stack-drop-shadow)");

  stackContainer.append("rect")
    .attr("x", 450)
    .attr("y", 150)
    .attr("width", 12)
    .attr("height", 150)
    .attr("fill", colors.container)
    .attr("rx", 2)
    .style("filter", "url(#stack-drop-shadow)");

  // Enhanced title
  svg.append("text")
    .attr("x", 450)
    .attr("y", 30)
    .attr("text-anchor", "middle")
    .attr("font-size", "24px")
    .attr("font-weight", "bold")
    .attr("fill", "#ffffff")
    .style("text-shadow", "3px 3px 6px rgba(0,0,0,0.8)")
    .text("📚 Stack Data Structure - LIFO Operations");

  // Enhanced LIFO explanation
  svg.append("text")
    .attr("x", 450)
    .attr("y", 55)
    .attr("text-anchor", "middle")
    .attr("font-size", "15px")
    .attr("font-weight", "500")
    .attr("fill", "#f8f9fa")
    .style("text-shadow", "2px 2px 4px rgba(0,0,0,0.7)")
    .text("Last-In, First-Out: Elements are added and removed from the top");

  // Enhanced control buttons with gradients
  const buttonGroup = svg.append("g");

  // Create button gradients
  const pushGradient = defs.append("linearGradient")
    .attr("id", "stack-push-gradient")
    .attr("x1", "0%").attr("y1", "0%")
    .attr("x2", "100%").attr("y2", "100%");
  pushGradient.append("stop").attr("offset", "0%").attr("stop-color", "#00b894");
  pushGradient.append("stop").attr("offset", "50%").attr("stop-color", "#00cec9");
  pushGradient.append("stop").attr("offset", "100%").attr("stop-color", "#55efc4");

  const popGradient = defs.append("linearGradient")
    .attr("id", "stack-pop-gradient")
    .attr("x1", "0%").attr("y1", "0%")
    .attr("x2", "100%").attr("y2", "100%");
  popGradient.append("stop").attr("offset", "0%").attr("stop-color", "#e17055");
  popGradient.append("stop").attr("offset", "50%").attr("stop-color", "#fd79a8");
  popGradient.append("stop").attr("offset", "100%").attr("stop-color", "#e84393");

  // Enhanced Push button
  buttonGroup.append("rect")
    .attr("x", 150)
    .attr("y", 200)
    .attr("width", 100)
    .attr("height", 40)
    .attr("fill", "url(#stack-push-gradient)")
    .attr("rx", 8)
    .style("cursor", "pointer")
    .style("filter", "url(#stack-drop-shadow)")
    .on("mouseover", function() {
      d3.select(this)
        .transition().duration(200)
        .style("filter", "url(#stack-drop-shadow) drop-shadow(0 0 12px rgba(0, 184, 148, 0.5))")
        .attr("transform", "scale(1.05)");
    })
    .on("mouseout", function() {
      d3.select(this)
        .transition().duration(200)
        .style("filter", "url(#stack-drop-shadow)")
        .attr("transform", "scale(1)");
    })
    .on("click", function() {
      if (!animating) pushElement();
    });

  buttonGroup.append("text")
    .attr("x", 200)
    .attr("y", 225)
    .attr("text-anchor", "middle")
    .attr("font-size", "15px")
    .attr("font-weight", "bold")
    .attr("fill", "white")
    .style("text-shadow", "2px 2px 4px rgba(0,0,0,0.8)")
    .text("📥 PUSH")
    .style("pointer-events", "none");

  // Enhanced Pop button
  buttonGroup.append("rect")
    .attr("x", 650)
    .attr("y", 200)
    .attr("width", 100)
    .attr("height", 40)
    .attr("fill", "url(#stack-pop-gradient)")
    .attr("rx", 8)
    .style("cursor", "pointer")
    .style("filter", "url(#stack-drop-shadow)")
    .on("mouseover", function() {
      d3.select(this)
        .transition().duration(200)
        .style("filter", "url(#stack-drop-shadow) drop-shadow(0 0 12px rgba(225, 112, 85, 0.5))")
        .attr("transform", "scale(1.05)");
    })
    .on("mouseout", function() {
      d3.select(this)
        .transition().duration(200)
        .style("filter", "url(#stack-drop-shadow)")
        .attr("transform", "scale(1)");
    })
    .on("click", function() {
      if (!animating) popElement();
    });

  buttonGroup.append("text")
    .attr("x", 700)
    .attr("y", 225)
    .attr("text-anchor", "middle")
    .attr("font-size", "15px")
    .attr("font-weight", "bold")
    .attr("fill", "white")
    .style("text-shadow", "2px 2px 4px rgba(0,0,0,0.8)")
    .text("📤 POP")
    .style("pointer-events", "none");

  // Create additional button gradients
  const clearGradient = defs.append("linearGradient")
    .attr("id", "stack-clear-gradient")
    .attr("x1", "0%").attr("y1", "0%")
    .attr("x2", "100%").attr("y2", "100%");
  clearGradient.append("stop").attr("offset", "0%").attr("stop-color", "#636e72");
  clearGradient.append("stop").attr("offset", "50%").attr("stop-color", "#2d3436");
  clearGradient.append("stop").attr("offset", "100%").attr("stop-color", "#636e72");

  const demoGradient = defs.append("linearGradient")
    .attr("id", "stack-demo-gradient")
    .attr("x1", "0%").attr("y1", "0%")
    .attr("x2", "100%").attr("y2", "100%");
  demoGradient.append("stop").attr("offset", "0%").attr("stop-color", "#a29bfe");
  demoGradient.append("stop").attr("offset", "50%").attr("stop-color", "#6c5ce7");
  demoGradient.append("stop").attr("offset", "100%").attr("stop-color", "#fd79a8");

  // Enhanced Clear button
  buttonGroup.append("rect")
    .attr("x", 400)
    .attr("y", 380)
    .attr("width", 100)
    .attr("height", 32)
    .attr("fill", "url(#stack-clear-gradient)")
    .attr("rx", 8)
    .style("cursor", "pointer")
    .style("filter", "url(#stack-drop-shadow)")
    .on("mouseover", function() {
      d3.select(this)
        .transition().duration(200)
        .style("filter", "url(#stack-drop-shadow) drop-shadow(0 0 8px rgba(99, 110, 114, 0.4))")
        .attr("transform", "scale(1.02)");
    })
    .on("mouseout", function() {
      d3.select(this)
        .transition().duration(200)
        .style("filter", "url(#stack-drop-shadow)")
        .attr("transform", "scale(1)");
    })
    .on("click", function() {
      if (!animating) clearStack();
    });

  buttonGroup.append("text")
    .attr("x", 450)
    .attr("y", 400)
    .attr("text-anchor", "middle")
    .attr("font-size", "13px")
    .attr("font-weight", "bold")
    .attr("fill", "white")
    .style("text-shadow", "1px 1px 3px rgba(0,0,0,0.8)")
    .text("🗑️ CLEAR")
    .style("pointer-events", "none");

  // Enhanced stack operations
  function pushElement() {
    if (stackElements.length >= 5) return; // Max 5 elements

    animating = true;
    const element = String.fromCharCode(65 + stackElements.length); // A, B, C, D, E
    stackElements.push(element);

    const elementGroup = svg.append("g").attr("class", "stack-element");
    
    // Enhanced element rectangle with gradient
    const rect = elementGroup.append("rect")
      .attr("x", 360)
      .attr("y", 100) // Start above stack
      .attr("width", 80)
      .attr("height", 32)
      .attr("fill", colors.element)
      .attr("stroke", "#ffffff")
      .attr("stroke-width", 2)
      .attr("rx", 8)
      .style("filter", "url(#stack-drop-shadow)")
      .style("opacity", 0.9);

    // Enhanced element text
    const text = elementGroup.append("text")
      .attr("x", 400)
      .attr("y", 120)
      .attr("text-anchor", "middle")
      .attr("font-size", "17px")
      .attr("font-weight", "bold")
      .attr("fill", "white")
      .style("text-shadow", "2px 2px 4px rgba(0,0,0,0.8)")
      .text(element);

    // Enhanced push animation with bounce effect
    const targetY = 298 - (stackElements.length * 32);
    
    elementGroup
      .style("opacity", 0)
      .transition()
      .duration(200)
      .style("opacity", 1)
      .transition()
      .duration(400)
      .ease(d3.easeBounceOut)
      .attr("transform", `translate(0, ${targetY - 100})`)
      .on("end", function() {
        updateTopIndicator();
        animating = false;
      });
  }

  function popElement() {
    if (stackElements.length === 0) return;

    animating = true;
    const lastElement = stackElements.pop();
    
    const elementToRemove = d3.selectAll(".stack-element").nodes()[stackElements.length];
    
    // Enhanced pop animation with highlight gradient
    d3.select(elementToRemove)
      .select("rect")
      .transition()
      .duration(300)
      .attr("fill", colors.highlight)
      .style("filter", "url(#stack-drop-shadow) drop-shadow(0 0 12px rgba(253, 203, 110, 0.6))");

    // Enhanced removal animation with scale and fade
    d3.select(elementToRemove)
      .transition()
      .duration(200)
      .delay(300)
      .attr("transform", "scale(1.1)")
      .transition()
      .duration(400)
      .attr("transform", "translate(200, -120) scale(0.8)")
      .style("opacity", 0)
      .on("end", function() {
        d3.select(this).remove();
        updateTopIndicator();
        animating = false;
      });
  }

  function clearStack() {
    stackElements = [];
    svg.selectAll(".stack-element").remove();
    svg.selectAll(".top-indicator").remove();
  }

  function updateTopIndicator() {
    svg.selectAll(".top-indicator").remove();
    
    if (stackElements.length > 0) {
      const topY = 298 - (stackElements.length * 32) + 16;
      
      const topGroup = svg.append("g").attr("class", "top-indicator");
      
      // Enhanced TOP arrow with gradient
      const arrowPath = topGroup.append("path")
        .attr("d", `M 480 ${topY} L 520 ${topY} M 515 ${topY - 5} L 520 ${topY} L 515 ${topY + 5}`)
        .attr("stroke", "url(#stack-top-gradient)")
        .attr("stroke-width", 4)
        .attr("fill", "none")
        .style("filter", "url(#stack-drop-shadow)");

      // Enhanced TOP label with background
      const labelBg = topGroup.append("rect")
        .attr("x", 525)
        .attr("y", topY - 8)
        .attr("width", 35)
        .attr("height", 18)
        .attr("fill", "rgba(255,255,255,0.95)")
        .attr("stroke", "url(#stack-top-gradient)")
        .attr("stroke-width", 2)
        .attr("rx", 9)
        .style("filter", "url(#stack-drop-shadow)");

      topGroup.append("text")
        .attr("x", 542)
        .attr("y", topY + 4)
        .attr("text-anchor", "middle")
        .attr("font-size", "12px")
        .attr("font-weight", "bold")
        .attr("fill", "#00b894")
        .text("TOP");

      // Animate indicator appearance
      topGroup
        .style("opacity", 0)
        .transition()
        .duration(300)
        .style("opacity", 1);
    }
  }

  // Enhanced operation explanations with better visibility
  const explanations = [
    { text: "📥 PUSH: Add element to top", x: 150, y: 270 },
    { text: "📤 POP: Remove top element", x: 650, y: 270 },
    { text: "🎯 TOP: Always points to last added", x: 480, y: 120 }
  ];

  explanations.forEach(exp => {
    // Background for better readability
    svg.append("rect")
      .attr("x", exp.x - exp.text.length * 3.5)
      .attr("y", exp.y - 12)
      .attr("width", exp.text.length * 7)
      .attr("height", 16)
      .attr("fill", "rgba(255,255,255,0.9)")
      .attr("rx", 8)
      .style("filter", "url(#stack-drop-shadow)");

    svg.append("text")
      .attr("x", exp.x)
      .attr("y", exp.y)
      .attr("text-anchor", "middle")
      .attr("font-size", "12px")
      .attr("font-weight", "600")
      .attr("fill", "#2d3436")
      .text(exp.text);
  });

  // Enhanced demo sequence button
  svg.append("rect")
    .attr("x", 50)
    .attr("y", 350)
    .attr("width", 130)
    .attr("height", 38)
    .attr("fill", "url(#stack-demo-gradient)")
    .attr("rx", 8)
    .style("cursor", "pointer")
    .style("filter", "url(#stack-drop-shadow)")
    .on("mouseover", function() {
      d3.select(this)
        .transition().duration(200)
        .style("filter", "url(#stack-drop-shadow) drop-shadow(0 0 12px rgba(162, 155, 254, 0.5))")
        .attr("transform", "scale(1.03)");
    })
    .on("mouseout", function() {
      d3.select(this)
        .transition().duration(200)
        .style("filter", "url(#stack-drop-shadow)")
        .attr("transform", "scale(1)");
    })
    .on("click", function() {
      if (!animating) runDemo();
    });

  svg.append("text")
    .attr("x", 115)
    .attr("y", 373)
    .attr("text-anchor", "middle")
    .attr("font-size", "13px")
    .attr("font-weight", "bold")
    .attr("fill", "white")
    .style("text-shadow", "2px 2px 4px rgba(0,0,0,0.8)")
    .text("🎬 Run Demo")
    .style("pointer-events", "none");

  function runDemo() {
    clearStack();
    
    setTimeout(() => pushElement(), 500);
    setTimeout(() => pushElement(), 1500);
    setTimeout(() => pushElement(), 2500);
    setTimeout(() => popElement(), 4000);
    setTimeout(() => popElement(), 5500);
  }

  // Initial demo
  setTimeout(() => {
    pushElement();
    setTimeout(() => pushElement(), 1000);
  }, 1000);

})();
</script>

<div style="clear: both;"></div>

**Python Implementation:**

```python
class MyStack:
    def __init__(self, capacity):
        self._capacity = capacity
        self._stack = []

    def is_empty(self):
        return len(self._stack) == 0

    def is_full(self):
        return len(self._stack) == self._capacity

    def push(self, item):
        if self.is_full():
            raise Exception("Stack Overflow")
        self._stack.append(item)

    def pop(self):
        if self.is_empty():
            raise Exception("Stack Underflow")
        return self._stack.pop()

    def top(self):
        if self.is_empty():
            return "Stack is empty"
        return self._stack[-1]
```

### 🚀 3.2. Queue
<span id="queue"></span>

A **queue** is a linear data structure that follows the **FIFO (First-In, First-Out)** principle. The first element added to the queue will be the first one to be removed.

**Key Operations:**
- **enqueue**: Adds an element to the rear of the queue
- **dequeue**: Removes an element from the front of the queue
- **front**: Returns the first element
- **rear**: Returns the last element
- **is_empty**: Checks if the queue is empty

#### 🎨 Interactive Queue Visualization

<div id="queue-diagram" style="width: 100%; height: 500px; background: linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 75%, #4facfe 100%); border-radius: 12px; padding: 20px; margin: 20px 0; box-shadow: 0 8px 32px rgba(0,0,0,0.1);"></div>

<script>
(function() {
  const container = d3.select("#queue-diagram");
  const width = 900;
  const height = 460;
  
  const svg = container.append("svg")
    .attr("viewBox", `0 0 ${width} ${height}`)
    .style("width", "100%")
    .style("height", "100%");

  // Define gradients and filters
  const defs = svg.append("defs");

  // Queue element gradient (Purple to Blue spectrum)
  const elementGradient = defs.append("linearGradient")
    .attr("id", "queue-element-gradient")
    .attr("x1", "0%").attr("y1", "0%")
    .attr("x2", "100%").attr("y2", "100%");
  elementGradient.append("stop").attr("offset", "0%").attr("stop-color", "#a29bfe");
  elementGradient.append("stop").attr("offset", "25%").attr("stop-color", "#74b9ff");
  elementGradient.append("stop").attr("offset", "75%").attr("stop-color", "#0984e3");
  elementGradient.append("stop").attr("offset", "100%").attr("stop-color", "#00b894");

  // Container gradient (Dark theme)
  const containerGradient = defs.append("linearGradient")
    .attr("id", "queue-container-gradient")
    .attr("x1", "0%").attr("y1", "0%")
    .attr("x2", "100%").attr("y2", "100%");
  containerGradient.append("stop").attr("offset", "0%").attr("stop-color", "#2d3436");
  containerGradient.append("stop").attr("offset", "50%").attr("stop-color", "#636e72");
  containerGradient.append("stop").attr("offset", "100%").attr("stop-color", "#2d3436");

  // Highlight gradient (Gold to Orange)
  const highlightGradient = defs.append("linearGradient")
    .attr("id", "queue-highlight-gradient")
    .attr("x1", "0%").attr("y1", "0%")
    .attr("x2", "100%").attr("y2", "100%");
  highlightGradient.append("stop").attr("offset", "0%").attr("stop-color", "#fdcb6e");
  highlightGradient.append("stop").attr("offset", "50%").attr("stop-color", "#f39c12");
  highlightGradient.append("stop").attr("offset", "100%").attr("stop-color", "#e17055");

  // Front indicator gradient (Red spectrum)
  const frontGradient = defs.append("linearGradient")
    .attr("id", "queue-front-gradient")
    .attr("x1", "0%").attr("y1", "0%")
    .attr("x2", "100%").attr("y2", "0%");
  frontGradient.append("stop").attr("offset", "0%").attr("stop-color", "#e17055");
  frontGradient.append("stop").attr("offset", "50%").attr("stop-color", "#fd79a8");
  frontGradient.append("stop").attr("offset", "100%").attr("stop-color", "#e84393");

  // Rear indicator gradient (Pink spectrum)
  const rearGradient = defs.append("linearGradient")
    .attr("id", "queue-rear-gradient")
    .attr("x1", "0%").attr("y1", "0%")
    .attr("x2", "100%").attr("y2", "0%");
  rearGradient.append("stop").attr("offset", "0%").attr("stop-color", "#fd79a8");
  rearGradient.append("stop").attr("offset", "50%").attr("stop-color", "#e84393");
  rearGradient.append("stop").attr("offset", "100%").attr("stop-color", "#fd79a8");

  // Drop shadow filter
  const filter = defs.append("filter")
    .attr("id", "queue-drop-shadow")
    .attr("height", "130%");
  filter.append("feDropShadow")
    .attr("dx", 3).attr("dy", 3)
    .attr("stdDeviation", 4)
    .attr("flood-opacity", 0.4);

  // Queue state
  let queueElements = [];
  let animating = false;

  // Enhanced colors with gradient references
  const colors = {
    container: "url(#queue-container-gradient)",
    element: "url(#queue-element-gradient)",
    highlight: "url(#queue-highlight-gradient)",
    front: "url(#queue-front-gradient)",
    rear: "url(#queue-rear-gradient)"
  };

  // Enhanced queue container
  const queueContainer = svg.append("g");
  
  // Enhanced queue container outline with gradient
  queueContainer.append("rect")
    .attr("x", 200)
    .attr("y", 180)
    .attr("width", 500)
    .attr("height", 80)
    .attr("fill", "rgba(255,255,255,0.1)")
    .attr("stroke", colors.container)
    .attr("stroke-width", 4)
    .attr("rx", 12)
    .style("filter", "url(#queue-drop-shadow)");

  // Enhanced title
  svg.append("text")
    .attr("x", 450)
    .attr("y", 30)
    .attr("text-anchor", "middle")
    .attr("font-size", "24px")
    .attr("font-weight", "bold")
    .attr("fill", "#ffffff")
    .style("text-shadow", "3px 3px 6px rgba(0,0,0,0.8)")
    .text("🚀 Queue Data Structure - FIFO Operations");

  // Enhanced FIFO explanation
  svg.append("text")
    .attr("x", 450)
    .attr("y", 55)
    .attr("text-anchor", "middle")
    .attr("font-size", "15px")
    .attr("font-weight", "500")
    .attr("fill", "#f8f9fa")
    .style("text-shadow", "2px 2px 4px rgba(0,0,0,0.7)")
    .text("First-In, First-Out: Elements are added at rear and removed from front");

  // Enhanced Front and Rear labels with backgrounds
  // Front label with background
  svg.append("rect")
    .attr("x", 120)
    .attr("y", 210)
    .attr("width", 60)
    .attr("height", 20)
    .attr("fill", "rgba(255,255,255,0.95)")
    .attr("stroke", colors.front)
    .attr("stroke-width", 2)
    .attr("rx", 10)
    .style("filter", "url(#queue-drop-shadow)");

  svg.append("text")
    .attr("x", 150)
    .attr("y", 224)
    .attr("text-anchor", "middle")
    .attr("font-size", "14px")
    .attr("font-weight", "bold")
    .attr("fill", "#e17055")
    .text("FRONT");

  // Rear label with background
  svg.append("rect")
    .attr("x", 720)
    .attr("y", 210)
    .attr("width", 60)
    .attr("height", 20)
    .attr("fill", "rgba(255,255,255,0.95)")
    .attr("stroke", colors.rear)
    .attr("stroke-width", 2)
    .attr("rx", 10)
    .style("filter", "url(#queue-drop-shadow)");

  svg.append("text")
    .attr("x", 750)
    .attr("y", 224)
    .attr("text-anchor", "middle")
    .attr("font-size", "14px")
    .attr("font-weight", "bold")
    .attr("fill", "#fd79a8")
    .text("REAR");

  // Enhanced control buttons with gradients
  const buttonGroup = svg.append("g");

  // Enhanced Enqueue button
  buttonGroup.append("rect")
    .attr("x", 650)
    .attr("y", 320)
    .attr("width", 120)
    .attr("height", 40)
    .attr("fill", colors.rear)
    .attr("rx", 8)
    .style("cursor", "pointer")
    .style("filter", "url(#queue-drop-shadow)")
    .on("mouseover", function() {
      d3.select(this)
        .transition().duration(200)
        .style("filter", "url(#queue-drop-shadow) drop-shadow(0 0 12px rgba(253, 121, 168, 0.5))")
        .attr("transform", "scale(1.05)");
    })
    .on("mouseout", function() {
      d3.select(this)
        .transition().duration(200)
        .style("filter", "url(#queue-drop-shadow)")
        .attr("transform", "scale(1)");
    })
    .on("click", function() {
      if (!animating) enqueueElement();
    });

  buttonGroup.append("text")
    .attr("x", 710)
    .attr("y", 345)
    .attr("text-anchor", "middle")
    .attr("font-size", "15px")
    .attr("font-weight", "bold")
    .attr("fill", "white")
    .style("text-shadow", "2px 2px 4px rgba(0,0,0,0.8)")
    .text("📥 ENQUEUE")
    .style("pointer-events", "none");

  // Enhanced Dequeue button
  buttonGroup.append("rect")
    .attr("x", 130)
    .attr("y", 320)
    .attr("width", 120)
    .attr("height", 40)
    .attr("fill", colors.front)
    .attr("rx", 8)
    .style("cursor", "pointer")
    .style("filter", "url(#queue-drop-shadow)")
    .on("mouseover", function() {
      d3.select(this)
        .transition().duration(200)
        .style("filter", "url(#queue-drop-shadow) drop-shadow(0 0 12px rgba(225, 112, 85, 0.5))")
        .attr("transform", "scale(1.05)");
    })
    .on("mouseout", function() {
      d3.select(this)
        .transition().duration(200)
        .style("filter", "url(#queue-drop-shadow)")
        .attr("transform", "scale(1)");
    })
    .on("click", function() {
      if (!animating) dequeueElement();
    });

  buttonGroup.append("text")
    .attr("x", 190)
    .attr("y", 345)
    .attr("text-anchor", "middle")
    .attr("font-size", "15px")
    .attr("font-weight", "bold")
    .attr("fill", "white")
    .style("text-shadow", "2px 2px 4px rgba(0,0,0,0.8)")
    .text("📤 DEQUEUE")
    .style("pointer-events", "none");

  // Create clear button gradient
  const clearGradient = defs.append("linearGradient")
    .attr("id", "queue-clear-gradient")
    .attr("x1", "0%").attr("y1", "0%")
    .attr("x2", "100%").attr("y2", "100%");
  clearGradient.append("stop").attr("offset", "0%").attr("stop-color", "#636e72");
  clearGradient.append("stop").attr("offset", "50%").attr("stop-color", "#2d3436");
  clearGradient.append("stop").attr("offset", "100%").attr("stop-color", "#636e72");

  // Enhanced Clear button
  buttonGroup.append("rect")
    .attr("x", 400)
    .attr("y", 380)
    .attr("width", 100)
    .attr("height", 32)
    .attr("fill", "url(#queue-clear-gradient)")
    .attr("rx", 8)
    .style("cursor", "pointer")
    .style("filter", "url(#queue-drop-shadow)")
    .on("mouseover", function() {
      d3.select(this)
        .transition().duration(200)
        .style("filter", "url(#queue-drop-shadow) drop-shadow(0 0 8px rgba(99, 110, 114, 0.4))")
        .attr("transform", "scale(1.02)");
    })
    .on("mouseout", function() {
      d3.select(this)
        .transition().duration(200)
        .style("filter", "url(#queue-drop-shadow)")
        .attr("transform", "scale(1)");
    })
    .on("click", function() {
      if (!animating) clearQueue();
    });

  buttonGroup.append("text")
    .attr("x", 450)
    .attr("y", 400)
    .attr("text-anchor", "middle")
    .attr("font-size", "13px")
    .attr("font-weight", "bold")
    .attr("fill", "white")
    .style("text-shadow", "1px 1px 3px rgba(0,0,0,0.8)")
    .text("🗑️ CLEAR")
    .style("pointer-events", "none");

  // Enhanced queue operations
  function enqueueElement() {
    if (queueElements.length >= 6) return; // Max 6 elements

    animating = true;
    const element = String.fromCharCode(65 + queueElements.length); // A, B, C, D, E, F
    const targetX = 210 + (queueElements.length * 80);
    
    const elementGroup = svg.append("g")
      .attr("class", "queue-element")
      .attr("data-index", queueElements.length);
    
    // Enhanced element rectangle with gradient
    const rect = elementGroup.append("rect")
      .attr("x", 780) // Start at rear
      .attr("y", 190)
      .attr("width", 70)
      .attr("height", 60)
      .attr("fill", colors.element)
      .attr("stroke", "#ffffff")
      .attr("stroke-width", 2)
      .attr("rx", 8)
      .style("filter", "url(#queue-drop-shadow)")
      .style("opacity", 0.9);

    // Enhanced element text
    const text = elementGroup.append("text")
      .attr("x", 815)
      .attr("y", 225)
      .attr("text-anchor", "middle")
      .attr("font-size", "19px")
      .attr("font-weight", "bold")
      .attr("fill", "white")
      .style("text-shadow", "2px 2px 4px rgba(0,0,0,0.8)")
      .text(element);

    // Add to data array immediately but animate DOM
    queueElements.push(element);
    
    // Enhanced enqueue animation with scale and fade
    elementGroup
      .style("opacity", 0)
      .attr("transform", "scale(0.8)")
      .transition()
      .duration(300)
      .style("opacity", 1)
      .attr("transform", "scale(1)")
      .transition()
      .duration(600)
      .ease(d3.easeQuadOut)
      .attr("transform", `translate(${targetX - 780}, 0) scale(1)`)
      .on("end", function() {
        // Update final position in DOM
        d3.select(this)
          .select("rect")
          .attr("x", targetX);
        d3.select(this)
          .select("text")
          .attr("x", targetX + 35);
        d3.select(this).attr("transform", null);
        
        updatePointers();
        animating = false;
      });
  }

  function dequeueElement() {
    if (queueElements.length === 0) return;

    animating = true;
    
    const elementToRemove = d3.select(d3.selectAll(".queue-element").nodes()[0]);
    
    // Highlight element being removed
    elementToRemove
      .select("rect")
      .transition()
      .duration(300)
      .attr("fill", colors.highlight);

    // Remove element with smooth animation
    elementToRemove
      .transition()
      .duration(600)
      .delay(300)
      .ease(d3.easeQuadIn)
      .style("opacity", 0)
      .attr("transform", "translate(-200, -20) scale(0.8)")
      .on("end", function() {
        d3.select(this).remove();
        
        // NOW remove from data array AFTER DOM removal
        queueElements.shift();
        
        // Check if there are remaining elements to shift
        if (queueElements.length > 0) {
          shiftElementsLeft();
        } else {
          // No elements left, just clean up
          updatePointers();
          animating = false;
        }
      });
  }

  function shiftElementsLeft() {
    const remainingElements = d3.selectAll(".queue-element");
    
    remainingElements.each(function(d, i) {
      const element = d3.select(this);
      const newX = 210 + (i * 80);
      
      // Get current position
      const currentRect = element.select("rect");
      const currentX = +currentRect.attr("x");
      
      // Animate to new position
      element.transition()
        .duration(500)
        .ease(d3.easeQuadOut)
        .on("start", function() {
          // Clear any existing transforms
          d3.select(this).attr("transform", null);
        })
        .tween("position", function() {
          const interpolateX = d3.interpolate(currentX, newX);
          return function(t) {
            const x = interpolateX(t);
            element.select("rect").attr("x", x);
            element.select("text").attr("x", x + 35);
          };
        })
        .on("end", function() {
          // Update data index
          element.attr("data-index", i);
          if (i === remainingElements.size() - 1) {
            // Last element finished animating
            updatePointers();
            animating = false;
          }
        });
    });
  }

  function clearQueue() {
    queueElements = [];
    svg.selectAll(".queue-element").remove();
    svg.selectAll(".pointer-indicator").remove();
    animating = false;
  }

  function updatePointers() {
    svg.selectAll(".pointer-indicator").remove();
    
    if (queueElements.length > 0) {
      const pointerGroup = svg.append("g").attr("class", "pointer-indicator");
      
      // Front pointer
      const frontX = 245;
      pointerGroup.append("path")
        .attr("d", `M ${frontX} 150 L ${frontX} 180 M ${frontX - 5} 175 L ${frontX} 180 L ${frontX + 5} 175`)
        .attr("stroke", colors.front)
        .attr("stroke-width", 3)
        .attr("fill", "none");

      // Rear pointer
      const rearX = 210 + (queueElements.length - 1) * 80 + 35;
      pointerGroup.append("path")
        .attr("d", `M ${rearX} 290 L ${rearX} 260 M ${rearX - 5} 265 L ${rearX} 260 L ${rearX + 5} 265`)
        .attr("stroke", colors.rear)
        .attr("stroke-width", 3)
        .attr("fill", "none");
    }
  }

  // Operation explanations
  const explanations = [
    { text: "⬅️ DEQUEUE: Remove from front", x: 190, y: 380 },
    { text: "➡️ ENQUEUE: Add to rear", x: 710, y: 380 },
    { text: "📈 Elements flow from rear to front", x: 450, y: 130 }
  ];

  explanations.forEach(exp => {
    svg.append("text")
      .attr("x", exp.x)
      .attr("y", exp.y)
      .attr("text-anchor", "middle")
      .attr("font-size", "11px")
      .attr("fill", "#2d3436")
      .text(exp.text);
  });

  // Demo sequence button
  svg.append("rect")
    .attr("x", 790)
    .attr("y", 380)
    .attr("width", 100)
    .attr("height", 35)
    .attr("fill", "#a29bfe")
    .attr("rx", 5)
    .style("cursor", "pointer")
    .on("click", function() {
      if (!animating) runDemo();
    });

  svg.append("text")
    .attr("x", 840)
    .attr("y", 402)
    .attr("text-anchor", "middle")
    .attr("font-size", "12px")
    .attr("font-weight", "bold")
    .attr("fill", "white")
    .text("🎬 Demo")
    .style("pointer-events", "none");

  function runDemo() {
    clearQueue();
    
    // Phase 1: Add all elements (A, B, C, D)
    setTimeout(() => enqueueElement(), 500);
    setTimeout(() => enqueueElement(), 1300);
    setTimeout(() => enqueueElement(), 2100);
    setTimeout(() => enqueueElement(), 2900);
    
    // Phase 2: Remove all elements (showing FIFO - A first, then B, C, D)
    setTimeout(() => dequeueElement(), 4500);
    setTimeout(() => dequeueElement(), 5800);
    setTimeout(() => dequeueElement(), 7100);
    setTimeout(() => dequeueElement(), 8400);
  }

  // Flow direction indicator
  svg.append("path")
    .attr("d", "M 250 100 L 650 100")
    .attr("stroke", "#cfd8dc") // lighter grey for better contrast
    .attr("stroke-width", 2)
    .attr("stroke-dasharray", "5,5")
    .attr("marker-end", "url(#flowArrow)");

  svg.append("defs").append("marker")
    .attr("id", "flowArrow")
    .attr("viewBox", "0 0 10 10")
    .attr("refX", 5)
    .attr("refY", 5)
    .attr("markerWidth", 6)
    .attr("markerHeight", 6)
    .attr("orient", "auto")
    .append("path")
    .attr("d", "M 0 0 L 10 5 L 0 10 z")
    .attr("fill", "#cfd8dc");

  svg.append("text")
    .attr("x", 450)
    .attr("y", 95)
    .attr("text-anchor", "middle")
    .attr("font-size", "12px")
    .attr("fill", "#ecf0f1")
    .text("Data Flow Direction");

  // Initial demo
  setTimeout(() => {
    enqueueElement();
    setTimeout(() => enqueueElement(), 1000);
    setTimeout(() => enqueueElement(), 2000);
  }, 1000);

})();
</script>

<div style="clear: both;"></div>

**Python Implementation:**

```python
from collections import deque

class MyQueue:
    def __init__(self, capacity):
        self._capacity = capacity
        self._queue = deque()

    def is_empty(self):
        return len(self._queue) == 0

    def is_full(self):
        return len(self._queue) == self._capacity

    def enqueue(self, item):
        if self.is_full():
            raise Exception("Queue Overflow")
        self._queue.append(item)

    def dequeue(self):
        if self.is_empty():
            raise Exception("Queue Underflow")
        return self._queue.popleft()

    def front(self):
        if self.is_empty():
            return "Queue is empty"
        return self._queue[0]
```

### 🌳 3.3. Tree
<span id="tree"></span>

A **tree** is a non-linear hierarchical data structure that consists of nodes connected by edges.

**Key Terminology:**
- **Node**: The fundamental part of a tree. It can have a name, which we call a 'key', and it holds the data
- **Root**: The topmost node in a tree
- **Edge**: The link between two nodes
- **Parent**: The node which has a branch from it to any other node
- **Child**: A node that is a descendant of another node
- **Leaf Node**: A node with no children
- **Height**: The length of the longest path to a leaf
- **Depth**: The length of the path to its root

#### 🎨 Interactive Tree Structure Visualization

<div id="tree-structure-diagram" style="width: 100%; height: 600px; background: linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 75%, #4facfe 100%); border-radius: 12px; padding: 20px; margin: 20px 0; box-shadow: 0 8px 32px rgba(0,0,0,0.1);"></div>

<script>
(function() {
  const container = d3.select("#tree-structure-diagram");
  const width = 800;
  const height = 560;
  
  const svg = container.append("svg")
    .attr("viewBox", `0 0 ${width} ${height}`)
    .style("width", "100%")
    .style("height", "100%");

  // Define gradients and filters
  const defs = svg.append("defs");

  // Root node gradient - Unique prefix
  const rootGradient = defs.append("radialGradient")
    .attr("id", "tree-struct-root-grad")
    .attr("cx", "50%").attr("cy", "50%").attr("r", "50%");
  rootGradient.append("stop").attr("offset", "0%").attr("stop-color", "#fd79a8");
  rootGradient.append("stop").attr("offset", "50%").attr("stop-color", "#e17055");
  rootGradient.append("stop").attr("offset", "100%").attr("stop-color", "#d63031");

  // Internal node gradient - Unique prefix
  const internalGradient = defs.append("radialGradient")
    .attr("id", "tree-struct-internal-grad")
    .attr("cx", "50%").attr("cy", "50%").attr("r", "50%");
  internalGradient.append("stop").attr("offset", "0%").attr("stop-color", "#a29bfe");
  internalGradient.append("stop").attr("offset", "50%").attr("stop-color", "#74b9ff");
  internalGradient.append("stop").attr("offset", "100%").attr("stop-color", "#0984e3");

  // Leaf node gradient - Unique prefix  
  const leafGradient = defs.append("radialGradient")
    .attr("id", "tree-struct-leaf-grad")
    .attr("cx", "50%").attr("cy", "50%").attr("r", "50%");
  leafGradient.append("stop").attr("offset", "0%").attr("stop-color", "#55efc4");
  leafGradient.append("stop").attr("offset", "50%").attr("stop-color", "#00b894");
  leafGradient.append("stop").attr("offset", "100%").attr("stop-color", "#00a085");

  // Highlight gradient - Unique prefix
  const highlightGradient = defs.append("radialGradient")
    .attr("id", "tree-struct-highlight-grad")
    .attr("cx", "50%").attr("cy", "50%").attr("r", "50%");
  highlightGradient.append("stop").attr("offset", "0%").attr("stop-color", "#ffeaa7");
  highlightGradient.append("stop").attr("offset", "50%").attr("stop-color", "#fdcb6e");
  highlightGradient.append("stop").attr("offset", "100%").attr("stop-color", "#f39c12");

  // Edge gradient - Unique prefix
  const edgeGradient = defs.append("linearGradient")
    .attr("id", "tree-struct-edge-grad")
    .attr("x1", "0%").attr("y1", "0%")
    .attr("x2", "100%").attr("y2", "100%");
  edgeGradient.append("stop").attr("offset", "0%").attr("stop-color", "#636e72");
  edgeGradient.append("stop").attr("offset", "50%").attr("stop-color", "#2d3436");
  edgeGradient.append("stop").attr("offset", "100%").attr("stop-color", "#636e72");

  // Drop shadow filter - Unique prefix
  const filter = defs.append("filter")
    .attr("id", "tree-struct-shadow")
    .attr("height", "130%");
  filter.append("feDropShadow")
    .attr("dx", 3).attr("dy", 3)
    .attr("stdDeviation", 4)
    .attr("flood-opacity", 0.4);

  // Tree structure data
  const treeData = [
    { id: 'A', x: 450, y: 80, level: 0, type: 'root' },
    { id: 'B', x: 300, y: 160, level: 1, type: 'internal' },
    { id: 'C', x: 600, y: 160, level: 1, type: 'internal' },
    { id: 'D', x: 200, y: 240, level: 2, type: 'internal' },
    { id: 'E', x: 400, y: 240, level: 2, type: 'leaf' },
    { id: 'F', x: 550, y: 240, level: 2, type: 'leaf' },
    { id: 'G', x: 650, y: 240, level: 2, type: 'internal' },
    { id: 'H', x: 150, y: 320, level: 3, type: 'leaf' },
    { id: 'I', x: 250, y: 320, level: 3, type: 'leaf' },
    { id: 'J', x: 600, y: 320, level: 3, type: 'leaf' },
    { id: 'K', x: 700, y: 320, level: 3, type: 'leaf' }
  ];

  // Connections between nodes
  const connections = [
    { from: 'A', to: 'B' }, { from: 'A', to: 'C' },
    { from: 'B', to: 'D' }, { from: 'B', to: 'E' },
    { from: 'C', to: 'F' }, { from: 'C', to: 'G' },
    { from: 'D', to: 'H' }, { from: 'D', to: 'I' },
    { from: 'G', to: 'J' }, { from: 'G', to: 'K' }
  ];

  // Enhanced colors with unique gradient references
  const colors = {
    root: "url(#tree-struct-root-grad)",
    internal: "url(#tree-struct-internal-grad)",
    leaf: "url(#tree-struct-leaf-grad)",
    edge: "url(#tree-struct-edge-grad)",
    highlight: "url(#tree-struct-highlight-grad)",
    subtree: "#fd79a8"
  };

  // Enhanced Title
  svg.append("text")
    .attr("x", 450)
    .attr("y", 30)
    .attr("text-anchor", "middle")
    .attr("font-size", "24px")
    .attr("font-weight", "bold")
    .attr("fill", "#ecf0f1")
    .style("text-shadow", "2px 2px 4px rgba(0,0,0,0.5)")
    .text("🌳 Interactive Tree Structure - Educational Demo");

  // Performance tips
  svg.append("text")
    .attr("x", 450)
    .attr("y", 50)
    .attr("text-anchor", "middle")
    .attr("font-size", "14px")
    .attr("fill", "#ecf0f1")
    .text("💡 Hover nodes for details • Click nodes for educational info");

  // Draw edges first
  connections.forEach(conn => {
    const fromNode = treeData.find(n => n.id === conn.from);
    const toNode = treeData.find(n => n.id === conn.to);
    
    svg.append("line")
      .attr("class", "tree-edge")
      .attr("x1", fromNode.x)
      .attr("y1", fromNode.y)
      .attr("x2", toNode.x)
      .attr("y2", toNode.y)
      .attr("stroke", colors.edge)
      .attr("stroke-width", 3)
      .attr("opacity", 0.7);
  });

  // Subtree highlighting (around node C and its descendants) - Enhanced visibility
  svg.append("path")
    .attr("d", "M 520 140 Q 720 140 720 240 Q 720 340 600 340 Q 480 340 480 240 Q 480 140 520 140 Z")
    .attr("fill", "none")
    .attr("stroke", "#ffffff")
    .attr("stroke-width", 4)
    .attr("stroke-dasharray", "12,6")
    .attr("opacity", 0.9)
    .style("filter", "drop-shadow(1px 1px 3px rgba(0,0,0,0.5))");

  svg.append("text")
    .attr("x", 720)
    .attr("y", 280)
    .attr("font-size", "13px")
    .attr("font-weight", "bold")
    .attr("fill", "#ffffff")
    .style("text-shadow", "2px 2px 4px rgba(0,0,0,0.7)")
    .text("Subtree");

  // Draw enhanced nodes with click functionality
  treeData.forEach(node => {
    const nodeGroup = svg.append("g")
      .attr("class", "tree-node-group")
      .attr("data-node-id", node.id);
    
    // Node circle with enhanced styling
    nodeGroup.append("circle")
      .attr("cx", node.x)
      .attr("cy", node.y)
      .attr("r", 28)
      .attr("fill", colors[node.type])
      .attr("stroke", "#2d3436")
      .attr("stroke-width", 3)
      .attr("filter", "url(#tree-struct-shadow)")
      .style("cursor", "pointer")
      .on("mouseover", function() {
        d3.select(this)
          .transition()
          .duration(300)
          .attr("r", 34)
          .attr("stroke", colors.highlight)
          .attr("stroke-width", 4);
        
        showNodeInfo(node);
      })
      .on("mouseout", function() {
        d3.select(this)
          .transition()
          .duration(300)
          .attr("r", 28)
          .attr("stroke", "#2d3436")
          .attr("stroke-width", 3);
        tooltip.style("visibility", "hidden");
      })
      .on("click", function() {
        showNodeEducationalInfo(node);
      });

    // Node label with better styling
    nodeGroup.append("text")
      .attr("x", node.x)
      .attr("y", node.y + 6)
      .attr("text-anchor", "middle")
      .attr("font-size", "18px")
      .attr("font-weight", "bold")
      .attr("fill", "white")
      .style("text-shadow", "1px 1px 2px rgba(0,0,0,0.7)")
      .style("pointer-events", "none")
      .text(node.id);
  });

  // Height indicator
  svg.append("path")
    .attr("d", "M 50 80 L 50 320 M 45 85 L 50 80 L 55 85 M 45 315 L 50 320 L 55 315")
    .attr("stroke", "#00b894")
    .attr("stroke-width", 3)
    .attr("fill", "none");

  svg.append("text")
    .attr("x", 30)
    .attr("y", 200)
    .attr("text-anchor", "middle")
    .attr("font-size", "14px")
    .attr("font-weight", "bold")
    .attr("fill", "#00b894")
    .attr("transform", "rotate(-90, 30, 200)")
    .text("HEIGHT = 3");

  // Depth indicator for node D - Enhanced visibility, perfect position
  svg.append("path")
    .attr("d", "M 690 80 L 690 240 M 685 85 L 690 80 L 695 85 M 685 235 L 690 240 L 695 235")
    .attr("stroke", "#ffffff")
    .attr("stroke-width", 4)
    .attr("fill", "none")
    .style("filter", "drop-shadow(2px 2px 4px rgba(0,0,0,0.5))");

  svg.append("text")
    .attr("x", 710)
    .attr("y", 160)
    .attr("font-size", "15px")
    .attr("font-weight", "bold")
    .attr("fill", "#ffffff")
    .style("text-shadow", "2px 2px 4px rgba(0,0,0,0.8)")
    .text("DEPTH of D = 2");

  // Relationship indicators - Enhanced visibility
  // Parent-Child relationship
  svg.append("path")
    .attr("d", "M 300 130 Q 350 100 400 130")
    .attr("stroke", "#ffffff")
    .attr("stroke-width", 4)
    .attr("fill", "none")
    .attr("marker-end", "url(#tree-struct-arrow)")
    .style("filter", "drop-shadow(1px 1px 3px rgba(0,0,0,0.5))");

  svg.append("text")
    .attr("x", 350)
    .attr("y", 110)
    .attr("text-anchor", "middle")
    .attr("font-size", "13px")
    .attr("font-weight", "bold")
    .attr("fill", "#ffffff")
    .style("text-shadow", "2px 2px 4px rgba(0,0,0,0.7)")
    .text("Parent-Child");

  // Siblings relationship
  svg.append("path")
    .attr("d", "M 570 140 Q 585 130 600 140")
    .attr("stroke", "#ffffff")
    .attr("stroke-width", 4)
    .attr("fill", "none")
    .style("filter", "drop-shadow(1px 1px 3px rgba(0,0,0,0.5))");

  svg.append("text")
    .attr("x", 585)
    .attr("y", 125)
    .attr("text-anchor", "middle")
    .attr("font-size", "13px")
    .attr("font-weight", "bold")
    .attr("fill", "#ffffff")
    .style("text-shadow", "2px 2px 4px rgba(0,0,0,0.7)")
    .text("Siblings");

  // Add arrow marker to existing defs - Enhanced visibility
  defs.append("marker")
    .attr("id", "tree-struct-arrow")
    .attr("viewBox", "0 0 10 10")
    .attr("refX", 5)
    .attr("refY", 5)
    .attr("markerWidth", 10)
    .attr("markerHeight", 10)
    .attr("orient", "auto")
    .append("path")
    .attr("d", "M 0 0 L 10 5 L 0 10 z")
    .attr("fill", "#ffffff")
    .attr("stroke", "#2d3436")
    .attr("stroke-width", 1);

  // Node type legend
  const legend = [
    { type: "root", color: colors.root, label: "Root Node", x: 50, y: 400 },
    { type: "internal", color: colors.internal, label: "Internal Node", x: 200, y: 400 },
    { type: "leaf", color: colors.leaf, label: "Leaf Node", x: 380, y: 400 }
  ];

  legend.forEach(item => {
    svg.append("circle")
      .attr("cx", item.x)
      .attr("cy", item.y)
      .attr("r", 15)
      .attr("fill", item.color)
      .attr("stroke", "#2d3436")
      .attr("stroke-width", 2);

    svg.append("text")
      .attr("x", item.x + 25)
      .attr("y", item.y + 5)
      .attr("font-size", "12px")
      .attr("font-weight", "bold")
      .attr("fill", "#ecf0f1")
      .text(item.label);
  });



  // Enhanced tree properties with better layout
  const properties = [
    "🌿 Root: Single starting node (A)",
    "🔗 Edge: Connection between nodes", 
    "👨‍👩‍👧‍👦 Parent-Child: Direct connection relationship",
    "👫 Siblings: Nodes with same parent",
    "🍃 Leaf: Node with no children",
    "📏 Height: Longest path from root to leaf",
    "📍 Depth: Distance from root to specific node"
  ];

  // Create background for properties - Adjusted size
  svg.append("rect")
    .attr("x", 480)
    .attr("y", 360)
    .attr("width", 300)
    .attr("height", 180)
    .attr("fill", "rgba(255,255,255,0.15)")
    .attr("rx", 10)
    .attr("stroke", "rgba(255,255,255,0.3)")
    .attr("stroke-width", 2);

  properties.forEach((prop, i) => {
    svg.append("text")
      .attr("x", 490)
      .attr("y", 380 + i * 22)
      .attr("font-size", "12px")
      .attr("fill", "#ffffff")
      .style("font-weight", "600")
      .style("text-shadow", "1px 1px 2px rgba(0,0,0,0.7)")
      .text(prop);
  });



  // Enhanced interactive tooltip
  const tooltip = d3.select("body").append("div")
    .attr("class", "tree-tooltip")
    .style("position", "absolute")
    .style("visibility", "hidden")
    .style("background-color", "rgba(0,0,0,0.95)")
    .style("color", "white")
    .style("padding", "15px")
    .style("border-radius", "12px")
    .style("font-size", "13px")
    .style("max-width", "280px")
    .style("z-index", "10000")
    .style("pointer-events", "none")
    .style("box-shadow", "0 8px 24px rgba(0,0,0,0.3)")
    .style("border", "2px solid rgba(255,255,255,0.2)");

  // Educational information box
  const educationalBox = d3.select("body").append("div")
    .attr("class", "tree-educational-box")
    .style("position", "fixed")
    .style("top", "50%")
    .style("left", "50%")
    .style("transform", "translate(-50%, -50%)")
    .style("visibility", "hidden")
    .style("background-color", "rgba(0,0,0,0.95)")
    .style("color", "white")
    .style("padding", "25px")
    .style("border-radius", "15px")
    .style("font-size", "14px")
    .style("max-width", "400px")
    .style("z-index", "10001")
    .style("box-shadow", "0 16px 48px rgba(0,0,0,0.4)")
    .style("border", "2px solid rgba(255,255,255,0.3)");

  // Close button for educational box
  educationalBox.append("div")
    .style("position", "absolute")
    .style("top", "10px")
    .style("right", "15px")
    .style("cursor", "pointer")
    .style("font-size", "18px")
    .style("color", "#ff6b6b")
    .text("✕")
    .on("click", function() {
      educationalBox.style("visibility", "hidden");
    });

  function showNodeInfo(node) {
    const children = connections.filter(c => c.from === node.id).map(c => c.to);
    const parent = connections.find(c => c.to === node.id)?.from || "None";
    const siblings = connections.filter(c => c.from === parent && c.to !== node.id).map(c => c.to);
    
    tooltip.style("visibility", "visible")
      .html(`<div style="font-weight: bold; margin-bottom: 8px; color: #fdcb6e;">🌳 Node ${node.id} Details</div>
             <div><strong>Type:</strong> ${node.type.charAt(0).toUpperCase() + node.type.slice(1)}</div>
             <div><strong>Level:</strong> ${node.level}</div>
             <div><strong>Depth:</strong> ${node.level}</div>
             <div><strong>Parent:</strong> ${parent}</div>
             <div><strong>Children:</strong> ${children.length > 0 ? children.join(', ') : 'None'}</div>
             <div><strong>Siblings:</strong> ${siblings.length > 0 ? siblings.join(', ') : 'None'}</div>
             <div style="margin-top: 10px; font-style: italic; color: #74b9ff;">💡 Click for educational info</div>`);
  }

  function showNodeEducationalInfo(node) {
    const typeInfo = {
      root: {
        title: "Root Node",
        description: "The starting point of the tree structure. Every tree has exactly one root node.",
        properties: [
          "• Has no parent node",
          "• All other nodes are descendants",
          "• Depth is always 0",
          "• Entry point for tree operations"
        ]
      },
      internal: {
        title: "Internal Node",
        description: "A node that has at least one child. Internal nodes form the backbone of the tree structure.",
        properties: [
          "• Has one parent (except root)",
          "• Has at least one child",
          "• Intermediate point in tree paths",
          "• Can be part of multiple subtrees"
        ]
      },
      leaf: {
        title: "Leaf Node",
        description: "A node with no children. Leaf nodes represent the endpoints of tree branches.",
        properties: [
          "• Has one parent",
          "• Has no children",
          "• Terminal node in tree paths",
          "• Often contains actual data values"
        ]
      }
    };

    const info = typeInfo[node.type];
    const children = connections.filter(c => c.from === node.id).map(c => c.to);
    const parent = connections.find(c => c.to === node.id)?.from || "None";

    educationalBox.style("visibility", "visible")
      .html(`<div style="font-weight: bold; font-size: 18px; margin-bottom: 15px; color: #fdcb6e;">
               🎓 ${info.title} - Node ${node.id}
             </div>
             <div style="margin-bottom: 15px; line-height: 1.6;">
               ${info.description}
             </div>
             <div style="margin-bottom: 15px;">
               <strong>Key Properties:</strong><br/>
               ${info.properties.join('<br/>')}
             </div>
             <div style="margin-bottom: 15px; padding: 10px; background-color: rgba(255,255,255,0.1); border-radius: 8px;">
               <strong>Node ${node.id} Specifics:</strong><br/>
               • Level: ${node.level}<br/>
               • Parent: ${parent}<br/>
               • Children: ${children.length > 0 ? children.join(', ') : 'None'}<br/>
               • Type: ${node.type.charAt(0).toUpperCase() + node.type.slice(1)}
             </div>
             <div style="text-align: center; margin-top: 20px;">
               <button onclick="this.parentElement.parentElement.style.visibility='hidden'" 
                       style="background: #74b9ff; color: white; border: none; padding: 8px 16px; border-radius: 6px; cursor: pointer;">
                 Close
               </button>
             </div>`);
  }

  svg.on("mousemove", function(event) {
    tooltip.style("top", (event.pageY - 10) + "px")
      .style("left", (event.pageX + 10) + "px");
  });

})();
</script>



<div style="clear: both;"></div>

#### 🔄 Tree Traversal Algorithms

**Tree traversal** is the process of visiting each node in a tree data structure exactly once. There are two main categories:

**Breadth-First Search (BFS):** Explores all nodes at the present depth prior to moving on to the nodes at the next depth level. It uses a **queue**.

**Depth-First Search (DFS):** Explores as far as possible along each branch before backtracking. It uses a **stack**.

**DFS Variants:**
- **In-order**: Left, Root, Right
- **Pre-order**: Root, Left, Right  
- **Post-order**: Left, Right, Root

#### 🎨 Interactive DFS Traversal Variants

<div id="dfs-variants-diagram" style="width: 100%; height: 550px; background: linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 75%, #4facfe 100%); border-radius: 12px; padding: 20px; margin: 20px 0; box-shadow: 0 8px 32px rgba(0,0,0,0.3);"></div>

<script>
(function() {
  const container = d3.select("#dfs-variants-diagram");
  const width = 900;
  const height = 510;
  
  const svg = container.append("svg")
    .attr("viewBox", `0 0 ${width} ${height}`)
    .style("width", "100%")
    .style("height", "100%");

  // Enhanced gradient definitions
  const defs = svg.append("defs");

  // Inorder gradient - Orange to Red theme
  const inorderGradient = defs.append("linearGradient")
    .attr("id", "dfs-inorder-gradient")
    .attr("x1", "0%").attr("y1", "0%")
    .attr("x2", "100%").attr("y2", "100%");
  inorderGradient.append("stop").attr("offset", "0%").attr("stop-color", "#fdcb6e");
  inorderGradient.append("stop").attr("offset", "25%").attr("stop-color", "#f39c12");
  inorderGradient.append("stop").attr("offset", "75%").attr("stop-color", "#e17055");
  inorderGradient.append("stop").attr("offset", "100%").attr("stop-color", "#d63031");

  // Preorder gradient - Teal to Blue theme
  const preorderGradient = defs.append("linearGradient")
    .attr("id", "dfs-preorder-gradient")
    .attr("x1", "0%").attr("y1", "0%")
    .attr("x2", "100%").attr("y2", "100%");
  preorderGradient.append("stop").attr("offset", "0%").attr("stop-color", "#00b894");
  preorderGradient.append("stop").attr("offset", "25%").attr("stop-color", "#00cec9");
  preorderGradient.append("stop").attr("offset", "75%").attr("stop-color", "#74b9ff");
  preorderGradient.append("stop").attr("offset", "100%").attr("stop-color", "#0984e3");

  // Postorder gradient - Pink to Purple theme
  const postorderGradient = defs.append("linearGradient")
    .attr("id", "dfs-postorder-gradient")
    .attr("x1", "0%").attr("y1", "0%")
    .attr("x2", "100%").attr("y2", "100%");
  postorderGradient.append("stop").attr("offset", "0%").attr("stop-color", "#e84393");
  postorderGradient.append("stop").attr("offset", "25%").attr("stop-color", "#fd79a8");
  postorderGradient.append("stop").attr("offset", "75%").attr("stop-color", "#6c5ce7");
  postorderGradient.append("stop").attr("offset", "100%").attr("stop-color", "#a29bfe");

  // Node gradient - Neutral professional
  const nodeGradient = defs.append("linearGradient")
    .attr("id", "dfs-node-gradient")
    .attr("x1", "0%").attr("y1", "0%")
    .attr("x2", "100%").attr("y2", "100%");
  nodeGradient.append("stop").attr("offset", "0%").attr("stop-color", "#636e72");
  nodeGradient.append("stop").attr("offset", "50%").attr("stop-color", "#2d3436");
  nodeGradient.append("stop").attr("offset", "100%").attr("stop-color", "#2d3436");

  // Button gradient for default state
  const buttonGradient = defs.append("linearGradient")
    .attr("id", "dfs-button-gradient")
    .attr("x1", "0%").attr("y1", "0%")
    .attr("x2", "100%").attr("y2", "100%");
  buttonGradient.append("stop").attr("offset", "0%").attr("stop-color", "#74b9ff");
  buttonGradient.append("stop").attr("offset", "50%").attr("stop-color", "#0984e3");
  buttonGradient.append("stop").attr("offset", "100%").attr("stop-color", "#2d3436");

  // Shadow filter
  const shadow = defs.append("filter")
    .attr("id", "dfs-shadow")
    .attr("x", "-50%").attr("y", "-50%")
    .attr("width", "200%").attr("height", "200%");
  shadow.append("feDropShadow")
    .attr("dx", 3).attr("dy", 3)
    .attr("stdDeviation", 4)
    .attr("flood-opacity", 0.3);

  // Tree structure data - binary tree
  const treeNodes = [
    { id: 'A', x: 450, y: 80, level: 0 },
    { id: 'B', x: 350, y: 160, level: 1 },
    { id: 'C', x: 550, y: 160, level: 1 },
    { id: 'D', x: 300, y: 240, level: 2 },
    { id: 'E', x: 400, y: 240, level: 2 },
    { id: 'F', x: 500, y: 240, level: 2 },
    { id: 'G', x: 600, y: 240, level: 2 }
  ];

  // Tree connections
  const connections = [
    { from: 'A', to: 'B' }, { from: 'A', to: 'C' },
    { from: 'B', to: 'D' }, { from: 'B', to: 'E' },
    { from: 'C', to: 'F' }, { from: 'C', to: 'G' }
  ];

  // Traversal orders
  const traversalOrders = {
    inorder: ['D', 'B', 'E', 'A', 'F', 'C', 'G'],    // Left, Root, Right
    preorder: ['A', 'B', 'D', 'E', 'C', 'F', 'G'],   // Root, Left, Right
    postorder: ['D', 'E', 'B', 'F', 'G', 'C', 'A']   // Left, Right, Root
  };

  // Enhanced gradient colors
  const colors = {
    inorder: "url(#dfs-inorder-gradient)",
    preorder: "url(#dfs-preorder-gradient)", 
    postorder: "url(#dfs-postorder-gradient)",
    node: "url(#dfs-node-gradient)",
    edge: "#ffffff",
    highlight: "#fdcb6e"
  };

  let currentAnimation = null;

  // Title
  svg.append("text")
    .attr("x", 450)
    .attr("y", 30)
    .attr("text-anchor", "middle")
    .attr("font-size", "22px")
    .attr("font-weight", "bold")
    .attr("fill", "#ecf0f1")
    .text("🔄 DFS Traversal Variants - Interactive Demo");

  // Draw tree edges with enhanced styling
  connections.forEach(conn => {
    const fromNode = treeNodes.find(n => n.id === conn.from);
    const toNode = treeNodes.find(n => n.id === conn.to);
    
    svg.append("line")
      .attr("class", "tree-edge")
      .attr("x1", fromNode.x)
      .attr("y1", fromNode.y)
      .attr("x2", toNode.x)
      .attr("y2", toNode.y)
      .attr("stroke", colors.edge)
      .attr("stroke-width", 4)
      .attr("opacity", 0.9)
      .style("filter", "drop-shadow(1px 1px 2px rgba(0,0,0,0.3))")
      .style("stroke-linecap", "round");
  });

  // Draw tree nodes with professional styling
  treeNodes.forEach(node => {
    const nodeGroup = svg.append("g")
      .attr("class", "tree-node")
      .attr("data-id", node.id);
    
    // Node circle with gradient and shadow
    nodeGroup.append("circle")
      .attr("cx", node.x)
      .attr("cy", node.y)
      .attr("r", 28)
      .attr("fill", colors.node)
      .attr("stroke", colors.edge)
      .attr("stroke-width", 3)
      .attr("filter", "url(#dfs-shadow)")
      .style("cursor", "pointer")
      .on("mouseover", function() {
        d3.select(this)
          .transition()
          .duration(300)
          .attr("r", 32)
          .attr("stroke-width", 4);
      })
      .on("mouseout", function() {
        d3.select(this)
          .transition()
          .duration(300)
          .attr("r", 28)
          .attr("stroke-width", 3);
      });

    // Node label with enhanced typography
    nodeGroup.append("text")
      .attr("x", node.x)
      .attr("y", node.y + 6)
      .attr("text-anchor", "middle")
      .attr("font-size", "18px")
      .attr("font-weight", "bold")
      .attr("fill", "#ffffff")
      .style("text-shadow", "2px 2px 4px rgba(0,0,0,0.7)")
      .style("pointer-events", "none")
      .text(node.id);

    // Order number (initially hidden) with enhanced gradient
    nodeGroup.append("circle")
      .attr("class", "order-circle")
      .attr("cx", node.x + 35)
      .attr("cy", node.y - 35)
      .attr("r", 15)
      .attr("fill", "#fdcb6e")
      .attr("stroke", "#ffffff")
      .attr("stroke-width", 3)
      .attr("filter", "url(#dfs-shadow)")
      .style("opacity", 0);

    nodeGroup.append("text")
      .attr("class", "order-text")
      .attr("x", node.x + 35)
      .attr("y", node.y - 30)
      .attr("text-anchor", "middle")
      .attr("font-size", "12px")
      .attr("font-weight", "bold")
      .attr("fill", "#2d3436")
      .style("text-shadow", "1px 1px 2px rgba(255,255,255,0.8)")
      .style("opacity", 0);
  });

  // Enhanced control buttons with gradient themes
  const buttonGroup = svg.append("g");
  const buttonData = [
    { type: 'inorder', label: 'In-order\n(L→R→Rt)', x: 150, color: colors.inorder, accent: "#d63031" },
    { type: 'preorder', label: 'Pre-order\n(Rt→L→R)', x: 350, color: colors.preorder, accent: "#0984e3" },
    { type: 'postorder', label: 'Post-order\n(L→R→Rt)', x: 550, color: colors.postorder, accent: "#a29bfe" }
  ];

  buttonData.forEach(btn => {
    const btnGroup = buttonGroup.append("g");
    
    // Enhanced button with gradient, shadow, and hover effects
    btnGroup.append("rect")
      .attr("x", btn.x)
      .attr("y", 350)
      .attr("width", 160)
      .attr("height", 65)
      .attr("fill", btn.color)
      .attr("stroke", "#ffffff")
      .attr("stroke-width", 2)
      .attr("rx", 12)
      .attr("ry", 12)
      .attr("filter", "url(#dfs-shadow)")
      .style("cursor", "pointer")
      .on("mouseover", function() {
        d3.select(this)
          .transition()
          .duration(200)
          .attr("stroke-width", 3)
          .style("filter", "url(#dfs-shadow) brightness(1.1)");
      })
      .on("mouseout", function() {
        d3.select(this)
          .transition()
          .duration(200)
          .attr("stroke-width", 2)
          .style("filter", "url(#dfs-shadow)");
      })
      .on("click", function() {
        // Enhanced click feedback
        d3.select(this)
          .transition()
          .duration(100)
          .attr("rx", 8)
          .transition()
          .duration(100)
          .attr("rx", 12);
        animateTraversal(btn.type, btn.color);
      });

    // Enhanced button text with better typography
    const lines = btn.label.split('\n');
    lines.forEach((line, i) => {
      btnGroup.append("text")
        .attr("x", btn.x + 80)
        .attr("y", 375 + i * 18)
        .attr("text-anchor", "middle")
        .attr("font-size", "14px")
        .attr("font-weight", "bold")
        .attr("fill", "#ffffff")
        .style("text-shadow", "2px 2px 4px rgba(0,0,0,0.5)")
        .style("pointer-events", "none")
        .text(line);
    });

    // Button accent indicator
    btnGroup.append("circle")
      .attr("cx", btn.x + 20)
      .attr("cy", 365)
      .attr("r", 8)
      .attr("fill", btn.accent)
      .attr("stroke", "#ffffff")
      .attr("stroke-width", 2)
      .style("pointer-events", "none");
  });

  // Enhanced traversal explanations with gradient-friendly styling
  const explanations = [
    { text: "In-order: Visit Left subtree → Root → Right subtree", x: 150, y: 435, icon: "🔄", color: "#ffffff" },
    { text: "Pre-order: Visit Root → Left subtree → Right subtree", x: 150, y: 455, icon: "⏭️", color: "#ffffff" },
    { text: "Post-order: Visit Left subtree → Right subtree → Root", x: 150, y: 475, icon: "⏪", color: "#ffffff" }
  ];

  // Create enhanced background panel for explanations
  svg.append("rect")
    .attr("x", 140)
    .attr("y", 420)
    .attr("width", 620)
    .attr("height", 70)
    .attr("fill", "rgba(0,0,0,0.4)")
    .attr("stroke", "rgba(255,255,255,0.3)")
    .attr("stroke-width", 2)
    .attr("rx", 12)
    .attr("ry", 12)
    .style("backdrop-filter", "blur(10px)");

  explanations.forEach((exp, i) => {
    // Icon
    svg.append("text")
      .attr("x", exp.x)
      .attr("y", exp.y)
      .attr("font-size", "14px")
      .attr("fill", exp.color)
      .text(exp.icon);

    // Explanation text with enhanced styling
    svg.append("text")
      .attr("x", exp.x + 25)
      .attr("y", exp.y)
      .attr("font-size", "13px")
      .attr("font-weight", "600")
      .attr("fill", exp.color)
      .style("text-shadow", "2px 2px 4px rgba(0,0,0,0.8)")
      .text(exp.text);
  });

  // Enhanced reset function
  function resetVisualization() {
    if (currentAnimation) {
      currentAnimation.forEach(timeout => clearTimeout(timeout));
      currentAnimation = null;
    }
    
    // Reset all nodes with smooth transition
    svg.selectAll(".tree-node circle:first-child")
      .transition()
      .duration(300)
      .attr("fill", colors.node)
      .attr("r", 28);
    
    // Hide order indicators with enhanced animation
    svg.selectAll(".order-circle, .order-text")
      .transition()
      .duration(300)
      .style("opacity", 0)
      .on("end", function() {
        d3.select(this.parentNode).select(".order-circle")
          .attr("fill", "#fdcb6e");
      });
  }

  // Enhanced animation function with gradient support
  function animateTraversal(type, color) {
    resetVisualization();
    
    const order = traversalOrders[type];
    const timeouts = [];
    
    // Show traversal sequence with enhanced animations
    order.forEach((nodeId, index) => {
      const timeout = setTimeout(() => {
        const node = treeNodes.find(n => n.id === nodeId);
        const nodeGroup = svg.select(`g[data-id="${nodeId}"]`);
        
        // Enhanced node highlight with pulse effect
        nodeGroup.select("circle:first-child")
          .transition()
          .duration(150)
          .attr("r", 35)
          .transition()
          .duration(150)
          .attr("r", 32)
          .attr("fill", color)
          .style("filter", "url(#dfs-shadow) brightness(1.2)");
        
        // Enhanced order number with gradient and animation
        const orderCircle = nodeGroup.select(".order-circle");
        const orderText = nodeGroup.select(".order-text");
        
        orderCircle
          .transition()
          .duration(400)
          .style("opacity", 1)
          .attr("fill", type === 'inorder' ? "#d63031" : 
                       type === 'preorder' ? "#0984e3" : "#a29bfe")
          .attr("r", 18)
          .transition()
          .duration(200)
          .attr("r", 15);
        
        orderText
          .transition()
          .duration(400)
          .style("opacity", 1)
          .text(index + 1);
        
      }, index * 800);
      
      timeouts.push(timeout);
    });
    
    currentAnimation = timeouts;
  }

  // Enhanced clear button with gradient styling
  const clearButton = svg.append("g");
  
  clearButton.append("rect")
    .attr("x", 740)
    .attr("y", 370)
    .attr("width", 120)
    .attr("height", 50)
    .attr("fill", "url(#dfs-button-gradient)")
    .attr("stroke", "#ffffff")
    .attr("stroke-width", 2)
    .attr("rx", 10)
    .attr("ry", 10)
    .attr("filter", "url(#dfs-shadow)")
    .style("cursor", "pointer")
    .on("mouseover", function() {
      d3.select(this)
        .transition()
        .duration(200)
        .attr("stroke-width", 3)
        .style("filter", "url(#dfs-shadow) brightness(1.1)");
    })
    .on("mouseout", function() {
      d3.select(this)
        .transition()
        .duration(200)
        .attr("stroke-width", 2)
        .style("filter", "url(#dfs-shadow)");
    })
    .on("click", function() {
      d3.select(this)
        .transition()
        .duration(100)
        .attr("rx", 6)
        .transition()
        .duration(100)
        .attr("rx", 10);
      resetVisualization();
    });

  clearButton.append("text")
    .attr("x", 800)
    .attr("y", 400)
    .attr("text-anchor", "middle")
    .attr("font-size", "13px")
    .attr("font-weight", "bold")
    .attr("fill", "#ffffff")
    .style("text-shadow", "2px 2px 4px rgba(0,0,0,0.5)")
    .style("pointer-events", "none")
    .text("🔄 Reset");

  // Enhanced usage note with better visibility
  svg.append("rect")
    .attr("x", 270)
    .attr("y", 300)
    .attr("width", 360)
    .attr("height", 30)
    .attr("fill", "rgba(0,0,0,0.3)")
    .attr("stroke", "rgba(255,255,255,0.4)")
    .attr("stroke-width", 1)
    .attr("rx", 8)
    .style("backdrop-filter", "blur(8px)");

  svg.append("text")
    .attr("x", 450)
    .attr("y", 320)
    .attr("text-anchor", "middle")
    .attr("font-size", "13px")
    .attr("font-weight", "600")
    .attr("fill", "#ffffff")
    .style("text-shadow", "2px 2px 4px rgba(0,0,0,0.8)")
    .text("💡 Click buttons to see different DFS traversal patterns");

})();
</script>

<div style="clear: both;"></div>

#### 🎨 Interactive BFS vs DFS Traversal Comparison

<div id="bfs-dfs-diagram" style="width: 100%; height: 750px; background: linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 75%, #4facfe 100%); border-radius: 12px; padding: 20px; margin: 20px 0; box-shadow: 0 8px 32px rgba(0,0,0,0.3);"></div>

<script>
(function() {
  const container = d3.select("#bfs-dfs-diagram");
  const width = 900; 
  const height = 710;
  
  const svg = container.append("svg")
    .attr("viewBox", `0 0 ${width} ${height}`)
    .style("width", "100%")
    .style("height", "100%");

  // Enhanced gradient definitions
  const defs = svg.append("defs");

  // BFS gradient - Teal to Blue theme  
  const bfsGradient = defs.append("linearGradient")
    .attr("id", "bfs-gradient")
    .attr("x1", "0%").attr("y1", "0%")
    .attr("x2", "100%").attr("y2", "100%");
  bfsGradient.append("stop").attr("offset", "0%").attr("stop-color", "#00b894");
  bfsGradient.append("stop").attr("offset", "25%").attr("stop-color", "#00cec9");
  bfsGradient.append("stop").attr("offset", "75%").attr("stop-color", "#74b9ff");
  bfsGradient.append("stop").attr("offset", "100%").attr("stop-color", "#0984e3");

  // DFS gradient - Orange to Red theme
  const dfsGradient = defs.append("linearGradient")
    .attr("id", "dfs-gradient")
    .attr("x1", "0%").attr("y1", "0%")
    .attr("x2", "100%").attr("y2", "100%");
  dfsGradient.append("stop").attr("offset", "0%").attr("stop-color", "#fdcb6e");
  dfsGradient.append("stop").attr("offset", "25%").attr("stop-color", "#f39c12");
  dfsGradient.append("stop").attr("offset", "75%").attr("stop-color", "#e17055");
  dfsGradient.append("stop").attr("offset", "100%").attr("stop-color", "#d63031");

  // Node gradient - Neutral professional
  const nodeGradient = defs.append("linearGradient")
    .attr("id", "bfs-dfs-node-gradient")
    .attr("x1", "0%").attr("y1", "0%")
    .attr("x2", "100%").attr("y2", "100%");
  nodeGradient.append("stop").attr("offset", "0%").attr("stop-color", "#ffffff");
  nodeGradient.append("stop").attr("offset", "50%").attr("stop-color", "#f8f9fa");
  nodeGradient.append("stop").attr("offset", "100%").attr("stop-color", "#e9ecef");

  // Button gradient
  const buttonGradient = defs.append("linearGradient")
    .attr("id", "bfs-dfs-button-gradient")
    .attr("x1", "0%").attr("y1", "0%")
    .attr("x2", "100%").attr("y2", "100%");
  buttonGradient.append("stop").attr("offset", "0%").attr("stop-color", "#6c5ce7");
  buttonGradient.append("stop").attr("offset", "50%").attr("stop-color", "#a29bfe");
  buttonGradient.append("stop").attr("offset", "100%").attr("stop-color", "#2d3436");

  // Shadow filter
  const shadow = defs.append("filter")
    .attr("id", "bfs-dfs-shadow")
    .attr("x", "-50%").attr("y", "-50%")
    .attr("width", "200%").attr("height", "200%");
  shadow.append("feDropShadow")
    .attr("dx", 3).attr("dy", 3)
    .attr("stdDeviation", 4)
    .attr("flood-opacity", 0.3);

  // Tree structure (same for both sides) - Moved down significantly to avoid title overlap
  const treeNodes = [
    { id: 'A', x: 225, y: 160, bfsOrder: 1, dfsOrder: 1 },
    { id: 'B', x: 150, y: 240, bfsOrder: 2, dfsOrder: 2 },
    { id: 'C', x: 300, y: 240, bfsOrder: 3, dfsOrder: 5 },
    { id: 'D', x: 100, y: 320, bfsOrder: 4, dfsOrder: 3 },
    { id: 'E', x: 200, y: 320, bfsOrder: 5, dfsOrder: 4 },
    { id: 'F', x: 250, y: 320, bfsOrder: 6, dfsOrder: 6 },
    { id: 'G', x: 350, y: 320, bfsOrder: 7, dfsOrder: 7 }
  ];

  // Connections
  const connections = [
    { from: 'A', to: 'B' }, { from: 'A', to: 'C' },
    { from: 'B', to: 'D' }, { from: 'B', to: 'E' },
    { from: 'C', to: 'F' }, { from: 'C', to: 'G' }
  ];

  // Enhanced gradient colors
  const colors = {
    bfs: "url(#bfs-gradient)",
    dfs: "url(#dfs-gradient)",
    node: "url(#bfs-dfs-node-gradient)",
    edge: "#ffffff",
    highlight: "#fdcb6e"
  };

  // Enhanced title with gradient-friendly styling
  svg.append("text")
    .attr("x", 450)
    .attr("y", 35)
    .attr("text-anchor", "middle")
    .attr("font-size", "24px")
    .attr("font-weight", "bold")
    .attr("fill", "#ffffff")
    .style("text-shadow", "3px 3px 6px rgba(0,0,0,0.7)")
    .text("🔍 Tree Traversal: BFS vs DFS Comparison");

  // Create BFS side (left)
  createTraversalSide(svg, "BFS", colors.bfs, 0, "Breadth-First Search", "Level by Level");

  // Create DFS side (right)
  createTraversalSide(svg, "DFS", colors.dfs, 450, "Depth-First Search", "Deep First, Then Backtrack");

  // Enhanced separator line - Adjusted to avoid title overlap
  svg.append("line")
    .attr("x1", 450)
    .attr("y1", 110)
    .attr("x2", 450)
    .attr("y2", 380)
    .attr("stroke", "#ffffff")
    .attr("stroke-width", 3)
    .attr("stroke-dasharray", "12,6")
    .attr("opacity", 0.8)
    .style("filter", "drop-shadow(1px 1px 2px rgba(0,0,0,0.3))");

  function createTraversalSide(svg, type, color, offsetX, title, subtitle) {
    const sideGroup = svg.append("g").attr("transform", `translate(${offsetX}, 0)`);
    
    // Enhanced side title with better visibility - Moved up to avoid overlap
    sideGroup.append("text")
      .attr("x", 225)
      .attr("y", 80)
      .attr("text-anchor", "middle")
      .attr("font-size", "20px")
      .attr("font-weight", "bold")
      .attr("fill", "#ffffff")
      .style("text-shadow", "2px 2px 4px rgba(0,0,0,0.8)")
      .text(title);

    sideGroup.append("text")
      .attr("x", 225)
      .attr("y", 95)
      .attr("text-anchor", "middle")
      .attr("font-size", "13px")
      .attr("font-weight", "600")
      .attr("fill", "#ffffff")
      .style("text-shadow", "2px 2px 4px rgba(0,0,0,0.8)")
      .text(subtitle);

    // Enhanced edges with professional styling
    connections.forEach(conn => {
      const fromNode = treeNodes.find(n => n.id === conn.from);
      const toNode = treeNodes.find(n => n.id === conn.to);
      
      sideGroup.append("line")
        .attr("class", `${type}-edge`)
        .attr("x1", fromNode.x)
        .attr("y1", fromNode.y)
        .attr("x2", toNode.x)
        .attr("y2", toNode.y)
        .attr("stroke", colors.edge)
        .attr("stroke-width", 3)
        .attr("opacity", 0.9)
        .style("filter", "drop-shadow(1px 1px 2px rgba(0,0,0,0.3))")
        .style("stroke-linecap", "round");
    });

    // Enhanced nodes with gradient and shadows
    treeNodes.forEach(node => {
      const nodeGroup = sideGroup.append("g");
      
      // Node circle with gradient and enhanced interactions
      nodeGroup.append("circle")
        .attr("cx", node.x)
        .attr("cy", node.y)
        .attr("r", 28)
        .attr("fill", colors.node)
        .attr("stroke", color)
        .attr("stroke-width", 3)
        .attr("filter", "url(#bfs-dfs-shadow)")
        .style("cursor", "pointer")
        .on("mouseover", function() {
          d3.select(this)
            .transition()
            .duration(200)
            .attr("r", 32)
            .attr("stroke-width", 4)
            .attr("fill", colors.highlight);
          
          tooltip.style("visibility", "visible")
            .html(`<strong>Node ${node.id}</strong><br/>
                   ${type} Order: ${type === 'BFS' ? node.bfsOrder : node.dfsOrder}<br/>
                   ${type === 'BFS' ? 'Level-by-level traversal' : 'Depth-first traversal'}`);
        })
        .on("mouseout", function() {
          d3.select(this)
            .transition()
            .duration(200)
            .attr("r", 28)
            .attr("stroke-width", 3)
            .attr("fill", colors.node);
          tooltip.style("visibility", "hidden");
        });

      // Enhanced node label with better typography
      nodeGroup.append("text")
        .attr("x", node.x)
        .attr("y", node.y + 6)
        .attr("text-anchor", "middle")
        .attr("font-size", "18px")
        .attr("font-weight", "bold")
        .attr("fill", "#2d3436")
        .style("text-shadow", "1px 1px 2px rgba(255,255,255,0.8)")
        .style("pointer-events", "none")
        .text(node.id);

      // Enhanced traversal order number with gradient
      nodeGroup.append("circle")
        .attr("cx", node.x + 25)
        .attr("cy", node.y - 25)
        .attr("r", 15)
        .attr("fill", color)
        .attr("stroke", "#ffffff")
        .attr("stroke-width", 3)
        .attr("filter", "url(#bfs-dfs-shadow)");

      nodeGroup.append("text")
        .attr("x", node.x + 25)
        .attr("y", node.y - 20)
        .attr("text-anchor", "middle")
        .attr("font-size", "12px")
        .attr("font-weight", "bold")
        .attr("fill", "#ffffff")
        .style("text-shadow", "1px 1px 2px rgba(0,0,0,0.7)")
        .style("pointer-events", "none")
        .text(type === 'BFS' ? node.bfsOrder : node.dfsOrder);
    });

    // Enhanced animation controls with gradient styling - Adjusted position
    const controlGroup = sideGroup.append("g");
    
    controlGroup.append("rect")
      .attr("x", 140)
      .attr("y", 370)
      .attr("width", 170)
      .attr("height", 50)
      .attr("fill", color)
      .attr("stroke", "#ffffff")
      .attr("stroke-width", 2)
      .attr("rx", 12)
      .attr("ry", 12)
      .attr("filter", "url(#bfs-dfs-shadow)")
      .style("cursor", "pointer")
      .on("mouseover", function() {
        d3.select(this)
          .transition()
          .duration(200)
          .attr("stroke-width", 3)
          .style("filter", "url(#bfs-dfs-shadow) brightness(1.1)");
      })
      .on("mouseout", function() {
        d3.select(this)
          .transition()
          .duration(200)
          .attr("stroke-width", 2)
          .style("filter", "url(#bfs-dfs-shadow)");
      })
      .on("click", function() {
        d3.select(this)
          .transition()
          .duration(100)
          .attr("rx", 8)
          .transition()
          .duration(100)
          .attr("rx", 12);
        animateTraversal(type, color, offsetX);
      });

    controlGroup.append("text")
      .attr("x", 225)
      .attr("y", 400)
      .attr("text-anchor", "middle")
      .attr("font-size", "15px")
      .attr("font-weight", "bold")
      .attr("fill", "#ffffff")
      .style("text-shadow", "2px 2px 4px rgba(0,0,0,0.5)")
      .style("pointer-events", "none")
      .text(`🎬 Animate ${type}`);

    // Enhanced traversal sequence explanation with background panel
    const sequence = type === 'BFS' ? 
      ["1️⃣ Start at root (A)", "2️⃣ Visit level 1 (B, C)", "3️⃣ Visit level 2 (D, E, F, G)"] :
      ["1️⃣ Start at root (A)", "2️⃣ Go deep left (B, D)", "3️⃣ Backtrack and continue (E)", "4️⃣ Go to right subtree (C, F, G)"];

    // Background panel for sequence explanation - Adjusted position
    sideGroup.append("rect")
      .attr("x", 40)
      .attr("y", 435)
      .attr("width", 370)
      .attr("height", sequence.length * 22 + 10)
      .attr("fill", "rgba(0,0,0,0.4)")
      .attr("stroke", "rgba(255,255,255,0.3)")
      .attr("stroke-width", 1)
      .attr("rx", 8)
      .style("backdrop-filter", "blur(8px)");

    sequence.forEach((step, i) => {
      sideGroup.append("text")
        .attr("x", 50)
        .attr("y", 455 + i * 22)
        .attr("font-size", "12px")
        .attr("font-weight", "600")
        .attr("fill", "#ffffff")
        .style("text-shadow", "2px 2px 4px rgba(0,0,0,0.8)")
        .text(step);
    });
  }

  function animateTraversal(type, color, offsetX) {
    const sideGroup = svg.select(`g[transform="translate(${offsetX}, 0)"]`);
    const order = type === 'BFS' ? 
      ['A', 'B', 'C', 'D', 'E', 'F', 'G'] : 
      ['A', 'B', 'D', 'E', 'C', 'F', 'G'];

    // Reset all nodes - Fixed to work with new radius
    sideGroup.selectAll("circle")
      .filter(function(d, i, nodes) {
        return d3.select(nodes[i]).attr("r") === "28";
      })
      .attr("fill", colors.node);

    // Animate each node in sequence with enhanced effects
    order.forEach((nodeId, index) => {
      setTimeout(() => {
        const node = treeNodes.find(n => n.id === nodeId);
        const nodeCircle = sideGroup.select(`circle[cx="${node.x}"][cy="${node.y}"]`)
          .filter(function(d, i, nodes) {
            return d3.select(nodes[i]).attr("r") === "28";
          });
        
        // Enhanced animation with pulse effect
        nodeCircle
          .transition()
          .duration(200)
          .attr("r", 35)
          .attr("fill", color)
          .transition()
          .duration(200)
          .attr("r", 32)
          .transition()
          .delay(600)
          .duration(300)
          .attr("r", 28)
          .attr("fill", colors.node);
      }, index * 800);
    });
  }

  // Enhanced comparison table with gradient styling
  const comparisonData = [
    { aspect: "Strategy", bfs: "Level by level", dfs: "Deep first, backtrack" },
    { aspect: "Data Structure", bfs: "Queue (FIFO)", dfs: "Stack (LIFO)" },
    { aspect: "Memory Usage", bfs: "High (stores level)", dfs: "Low (recursion stack)" },
    { aspect: "Best for", bfs: "Shortest path", dfs: "Path existence" }
  ];

  const tableGroup = svg.append("g").attr("transform", "translate(50, 550)");
  
  // Enhanced table title with better visibility
  tableGroup.append("text")
    .attr("x", 400)
    .attr("y", 25)
    .attr("text-anchor", "middle")
    .attr("font-size", "18px")
    .attr("font-weight", "bold")
    .attr("fill", "#ffffff")
    .style("text-shadow", "3px 3px 6px rgba(0,0,0,0.7)")
    .text("📊 Comparison Table");

  // Enhanced table headers with gradient backgrounds
  const headers = ["Aspect", "BFS", "DFS"];
  const headerColors = ["url(#bfs-dfs-button-gradient)", "url(#bfs-gradient)", "url(#dfs-gradient)"];
  
  headers.forEach((header, i) => {
    tableGroup.append("rect")
      .attr("x", i * 250 + 50)
      .attr("y", 40)
      .attr("width", 240)
      .attr("height", 35)
      .attr("fill", headerColors[i])
      .attr("stroke", "#ffffff")
      .attr("stroke-width", 2)
      .attr("rx", 6)
      .attr("filter", "url(#bfs-dfs-shadow)");

    tableGroup.append("text")
      .attr("x", i * 250 + 170)
      .attr("y", 62)
      .attr("text-anchor", "middle")
      .attr("font-size", "14px")
      .attr("font-weight", "bold")
      .attr("fill", "#ffffff")
      .style("text-shadow", "2px 2px 4px rgba(0,0,0,0.7)")
      .text(header);
  });

  // Enhanced table rows with gradient backgrounds
  comparisonData.forEach((row, i) => {
    const rowY = 75 + i * 30;
    
    // Aspect column with neutral gradient
    tableGroup.append("rect")
      .attr("x", 50)
      .attr("y", rowY)
      .attr("width", 240)
      .attr("height", 30)
      .attr("fill", "rgba(255,255,255,0.9)")
      .attr("stroke", "#ffffff")
      .attr("stroke-width", 1)
      .attr("rx", 4);

    tableGroup.append("text")
      .attr("x", 170)
      .attr("y", rowY + 20)
      .attr("text-anchor", "middle")
      .attr("font-size", "12px")
      .attr("font-weight", "600")
      .attr("fill", "#2d3436")
      .text(row.aspect);

    // BFS column with BFS gradient background
    tableGroup.append("rect")
      .attr("x", 300)
      .attr("y", rowY)
      .attr("width", 240)
      .attr("height", 30)
      .attr("fill", "rgba(0, 184, 148, 0.2)")
      .attr("stroke", "#ffffff")
      .attr("stroke-width", 1)
      .attr("rx", 4);

    tableGroup.append("text")
      .attr("x", 420)
      .attr("y", rowY + 20)
      .attr("text-anchor", "middle")
      .attr("font-size", "12px")
      .attr("font-weight", "600")
      .attr("fill", "#ffffff")
      .style("text-shadow", "2px 2px 4px rgba(0,0,0,0.8)")
      .text(row.bfs);

    // DFS column with DFS gradient background
    tableGroup.append("rect")
      .attr("x", 550)
      .attr("y", rowY)
      .attr("width", 240)
      .attr("height", 30)
      .attr("fill", "rgba(225, 112, 85, 0.2)")
      .attr("stroke", "#ffffff")
      .attr("stroke-width", 1)
      .attr("rx", 4);

    tableGroup.append("text")
      .attr("x", 670)
      .attr("y", rowY + 20)
      .attr("text-anchor", "middle")
      .attr("font-size", "12px")
      .attr("font-weight", "600")
      .attr("fill", "#ffffff")
      .style("text-shadow", "2px 2px 4px rgba(0,0,0,0.8)")
      .text(row.dfs);
  });

  // Interactive tooltip
  const tooltip = d3.select("body").append("div")
    .attr("class", "traversal-tooltip")
    .style("position", "absolute")
    .style("visibility", "hidden")
    .style("background-color", "rgba(0,0,0,0.9)")
    .style("color", "white")
    .style("padding", "10px")
    .style("border-radius", "8px")
    .style("font-size", "12px")
    .style("max-width", "200px")
    .style("z-index", "10000")
    .style("pointer-events", "none")
    .style("box-shadow", "0 4px 6px rgba(0,0,0,0.1)");

  svg.on("mousemove", function(event) {
    tooltip.style("top", (event.pageY - 10) + "px")
      .style("left", (event.pageX + 10) + "px");
  });

})();
</script>

<div style="clear: both;"></div>

### 🌲 3.4. Binary Search Tree (BST)
<span id="binary-search-tree"></span>

A **binary tree** where for each node, all keys in the left subtree are less than the node's key, and all keys in the right subtree are greater than the node's key. This property makes searching very efficient.

**Key Properties:**
- **Left Subtree**: All values are smaller than the current node
- **Right Subtree**: All values are larger than the current node
- **Search Time**: \\( O(\log n) \\) average case, \\( O(n) \\) worst case
- **Insertion/Deletion**: \\( O(\log n) \\) average case

#### 🎨 Interactive Binary Search Tree Visualization

<div id="bst-diagram" style="width: 100%; height: 550px; background: linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 75%, #4facfe 100%); border-radius: 12px; padding: 20px; margin: 20px 0; box-shadow: 0 8px 32px rgba(0,0,0,0.3);"></div>

<script>
(function() {
  const container = d3.select("#bst-diagram");
  const width = 900;
  const height = 510;
  
  const svg = container.append("svg")
    .attr("viewBox", `0 0 ${width} ${height}`)
    .style("width", "100%")
    .style("height", "100%");

  // Enhanced gradient definitions
  const defs = svg.append("defs");

  // Root node gradient - Orange to Red theme
  const rootGradient = defs.append("linearGradient")
    .attr("id", "bst-root-gradient")
    .attr("x1", "0%").attr("y1", "0%")
    .attr("x2", "100%").attr("y2", "100%");
  rootGradient.append("stop").attr("offset", "0%").attr("stop-color", "#fdcb6e");
  rootGradient.append("stop").attr("offset", "25%").attr("stop-color", "#f39c12");
  rootGradient.append("stop").attr("offset", "75%").attr("stop-color", "#e17055");
  rootGradient.append("stop").attr("offset", "100%").attr("stop-color", "#d63031");

  // Internal node gradient - Blue theme
  const internalGradient = defs.append("linearGradient")
    .attr("id", "bst-internal-gradient")
    .attr("x1", "0%").attr("y1", "0%")
    .attr("x2", "100%").attr("y2", "100%");
  internalGradient.append("stop").attr("offset", "0%").attr("stop-color", "#74b9ff");
  internalGradient.append("stop").attr("offset", "25%").attr("stop-color", "#0984e3");
  internalGradient.append("stop").attr("offset", "75%").attr("stop-color", "#0066cc");
  internalGradient.append("stop").attr("offset", "100%").attr("stop-color", "#004499");

  // Leaf node gradient - Green theme  
  const leafGradient = defs.append("linearGradient")
    .attr("id", "bst-leaf-gradient")
    .attr("x1", "0%").attr("y1", "0%")
    .attr("x2", "100%").attr("y2", "100%");
  leafGradient.append("stop").attr("offset", "0%").attr("stop-color", "#00b894");
  leafGradient.append("stop").attr("offset", "25%").attr("stop-color", "#00cec9");
  leafGradient.append("stop").attr("offset", "75%").attr("stop-color", "#00a085");
  leafGradient.append("stop").attr("offset", "100%").attr("stop-color", "#008573");

  // Search path gradient - Pink theme
  const searchGradient = defs.append("linearGradient")
    .attr("id", "bst-search-gradient")
    .attr("x1", "0%").attr("y1", "0%")
    .attr("x2", "100%").attr("y2", "100%");
  searchGradient.append("stop").attr("offset", "0%").attr("stop-color", "#fd79a8");
  searchGradient.append("stop").attr("offset", "25%").attr("stop-color", "#e84393");
  searchGradient.append("stop").attr("offset", "75%").attr("stop-color", "#d63384");
  searchGradient.append("stop").attr("offset", "100%").attr("stop-color", "#c2185b");

  // Button gradient
  const buttonGradient = defs.append("linearGradient")
    .attr("id", "bst-button-gradient")
    .attr("x1", "0%").attr("y1", "0%")
    .attr("x2", "100%").attr("y2", "100%");
  buttonGradient.append("stop").attr("offset", "0%").attr("stop-color", "#6c5ce7");
  buttonGradient.append("stop").attr("offset", "50%").attr("stop-color", "#a29bfe");
  buttonGradient.append("stop").attr("offset", "100%").attr("stop-color", "#2d3436");

  // Shadow filter
  const shadow = defs.append("filter")
    .attr("id", "bst-shadow")
    .attr("x", "-50%").attr("y", "-50%")
    .attr("width", "200%").attr("height", "200%");
  shadow.append("feDropShadow")
    .attr("dx", 3).attr("dy", 3)
    .attr("stdDeviation", 4)
    .attr("flood-opacity", 0.3);

  // BST node data with search path highlighting
  const nodes = [
    { value: 50, x: 450, y: 80, level: 0, type: 'root' },
    { value: 30, x: 300, y: 160, level: 1, type: 'internal' },
    { value: 70, x: 600, y: 160, level: 1, type: 'internal' },
    { value: 20, x: 200, y: 240, level: 2, type: 'internal' },
    { value: 40, x: 400, y: 240, level: 2, type: 'leaf' },
    { value: 60, x: 500, y: 240, level: 2, type: 'leaf' },
    { value: 80, x: 700, y: 240, level: 2, type: 'internal' },
    { value: 15, x: 150, y: 320, level: 3, type: 'leaf' },
    { value: 25, x: 250, y: 320, level: 3, type: 'leaf' },
    { value: 85, x: 750, y: 320, level: 3, type: 'leaf' }
  ];

  // Connections between nodes
  const connections = [
    { from: 0, to: 1 }, { from: 0, to: 2 }, // 50 -> 30, 70
    { from: 1, to: 3 }, { from: 1, to: 4 }, // 30 -> 20, 40
    { from: 2, to: 5 }, { from: 2, to: 6 }, // 70 -> 60, 80
    { from: 3, to: 7 }, { from: 3, to: 8 }, // 20 -> 15, 25
    { from: 6, to: 9 } // 80 -> 85
  ];

  // Enhanced gradient colors
  const colors = {
    root: "url(#bst-root-gradient)",
    internal: "url(#bst-internal-gradient)", 
    leaf: "url(#bst-leaf-gradient)",
    edge: "#ffffff",
    highlight: "#fdcb6e",
    searchPath: "url(#bst-search-gradient)",
    leftSubtree: "#00cec9",
    rightSubtree: "#a29bfe"
  };

  // Enhanced title with gradient-friendly styling
  svg.append("text")
    .attr("x", 450)
    .attr("y", 35)
    .attr("text-anchor", "middle")
    .attr("font-size", "24px")
    .attr("font-weight", "bold")
    .attr("fill", "#ffffff")
    .style("text-shadow", "3px 3px 6px rgba(0,0,0,0.7)")
    .text("🌲 Binary Search Tree - Search Operations");

  // Enhanced connections with professional styling
  connections.forEach(conn => {
    const fromNode = nodes[conn.from];
    const toNode = nodes[conn.to];
    
    svg.append("line")
      .attr("class", "bst-edge")
      .attr("x1", fromNode.x)
      .attr("y1", fromNode.y)
      .attr("x2", toNode.x)
      .attr("y2", toNode.y)
      .attr("stroke", colors.edge)
      .attr("stroke-width", 4)
      .attr("opacity", 0.9)
      .style("filter", "drop-shadow(1px 1px 2px rgba(0,0,0,0.3))")
      .style("stroke-linecap", "round");
  });

  // Enhanced subtree highlighting with professional styling
  // Left subtree highlight with enhanced visuals - Extended to include node 40
  svg.append("path")
    .attr("d", "M 120 130 Q 120 100 150 100 Q 420 100 430 130 Q 430 350 420 350 Q 150 350 120 350 Q 120 320 120 130 Z")
    .attr("fill", "rgba(0, 206, 201, 0.1)")
    .attr("stroke", colors.leftSubtree)
    .attr("stroke-width", 3)
    .attr("stroke-dasharray", "10,5")
    .attr("opacity", 0.8)
    .style("filter", "drop-shadow(1px 1px 3px rgba(0,0,0,0.2))");

  svg.append("text")
    .attr("x", 275)
    .attr("y", 385)
    .attr("text-anchor", "middle")
    .attr("font-size", "15px")
    .attr("font-weight", "bold")
    .attr("fill", "#ffffff")
    .style("text-shadow", "2px 2px 4px rgba(0,0,0,0.8)")
    .text("Left Subtree: < 50");

  // Right subtree highlight with enhanced visuals - Adjusted to start after left subtree
  svg.append("path")
    .attr("d", "M 460 130 Q 460 100 500 100 Q 770 100 800 130 Q 800 350 770 350 Q 500 350 460 350 Q 460 320 460 130 Z")
    .attr("fill", "rgba(162, 155, 254, 0.1)")
    .attr("stroke", colors.rightSubtree)
    .attr("stroke-width", 3)
    .attr("stroke-dasharray", "10,5")
    .attr("opacity", 0.8)
    .style("filter", "drop-shadow(1px 1px 3px rgba(0,0,0,0.2))");

  svg.append("text")
    .attr("x", 635)
    .attr("y", 385)
    .attr("text-anchor", "middle")
    .attr("font-size", "15px")
    .attr("font-weight", "bold")
    .attr("fill", "#ffffff")
    .style("text-shadow", "2px 2px 4px rgba(0,0,0,0.8)")
    .text("Right Subtree: > 50");

  // Enhanced nodes with gradient fills
  nodes.forEach((node, i) => {
    const nodeGroup = svg.append("g")
      .attr("class", "bst-node")
      .attr("data-value", node.value);
    
    // Enhanced node circle with gradient fills
    nodeGroup.append("circle")
      .attr("cx", node.x)
      .attr("cy", node.y)
      .attr("r", 28)
      .attr("fill", colors[node.type])
      .attr("stroke", "#ffffff")
      .attr("stroke-width", 3)
      .style("cursor", "pointer")
      .style("filter", "url(#bst-shadow)")
      .on("mouseover", function() {
        d3.select(this)
          .transition()
          .duration(200)
          .attr("r", 35)
          .attr("stroke", colors.highlight)
          .attr("stroke-width", 4)
          .style("filter", "url(#bst-shadow) brightness(1.2)");
        
        showBSTTooltip(node);
      })
      .on("mouseout", function() {
        d3.select(this)
          .transition()
          .duration(200)
          .attr("r", 28)
          .attr("stroke", "#ffffff")
          .attr("stroke-width", 3)
          .style("filter", "url(#bst-shadow)");
        tooltip.style("visibility", "hidden");
      });

    // Enhanced node value text with shadows
    nodeGroup.append("text")
      .attr("x", node.x)
      .attr("y", node.y + 6)
      .attr("text-anchor", "middle")
      .attr("font-size", "18px")
      .attr("font-weight", "bold")
      .attr("fill", "#ffffff")
      .style("text-shadow", "2px 2px 4px rgba(0,0,0,0.8)")
      .style("pointer-events", "none")
      .text(node.value);
  });

  // Enhanced search demonstration controls with gradient styling
  const searchValues = [15, 25, 40, 60, 85];
  const controlGroup = svg.append("g");
  
  searchValues.forEach((value, i) => {
    const x = 100 + i * 140;
    
    const buttonGroup = controlGroup.append("g")
      .style("cursor", "pointer")
      .on("click", function() {
        animateSearch(value);
      })
      .on("mouseover", function() {
        d3.select(this).select("rect")
          .transition()
          .duration(200)
          .attr("height", 42)
          .attr("y", 417)
          .style("filter", "url(#bst-shadow) brightness(1.2)");
      })
      .on("mouseout", function() {
        d3.select(this).select("rect")
          .transition()
          .duration(200)
          .attr("height", 38)
          .attr("y", 419)
          .style("filter", "url(#bst-shadow)");
      });

    buttonGroup.append("rect")
      .attr("x", x)
      .attr("y", 419)
      .attr("width", 125)
      .attr("height", 38)
      .attr("fill", "url(#bst-button-gradient)")
      .attr("rx", 8)
      .style("filter", "url(#bst-shadow)");

    buttonGroup.append("text")
      .attr("x", x + 62.5)
      .attr("y", 444)
      .attr("text-anchor", "middle")
      .attr("font-size", "15px")
      .attr("font-weight", "bold")
      .attr("fill", "#ffffff")
      .style("text-shadow", "1px 1px 2px rgba(0,0,0,0.7)")
      .style("pointer-events", "none")
      .text(`Search ${value}`);
  });



  // Enhanced BST properties explanation with professional styling
  const properties = [
    "🔍 Search: O(log n) average, O(n) worst case",
    "📥 Insert: O(log n) average, O(n) worst case", 
    "❌ Delete: O(log n) average, O(n) worst case",
    "🔄 In-order traversal gives sorted sequence"
  ];

  // Enhanced properties panel
  svg.append("rect")
    .attr("x", 30)
    .attr("y", 470)
    .attr("width", 450)
    .attr("height", 85)
    .attr("fill", "rgba(255, 255, 255, 0.1)")
    .attr("stroke", "rgba(255, 255, 255, 0.3)")
    .attr("stroke-width", 1)
    .attr("rx", 8)
    .style("backdrop-filter", "blur(10px)");

  properties.forEach((prop, i) => {
    svg.append("text")
      .attr("x", 45)
      .attr("y", 495 + i * 18)
      .attr("font-size", "13px")
      .attr("font-weight", "500")
      .attr("fill", "#ffffff")
      .style("text-shadow", "1px 1px 2px rgba(0,0,0,0.8)")
      .text(prop);
  });

  function animateSearch(targetValue) {
    clearSearch();
    const path = findSearchPath(targetValue);
    
    path.forEach((nodeIndex, step) => {
      setTimeout(() => {
        const node = nodes[nodeIndex];
        svg.select(`g[data-value="${node.value}"] circle`)
          .transition()
          .duration(400)
          .attr("fill", colors.searchPath)
          .attr("stroke", colors.highlight)
          .attr("stroke-width", 5)
          .attr("r", 32)
          .style("filter", "url(#bst-shadow) brightness(1.3)")
          .transition()
          .duration(200)
          .attr("r", 28);
          
        // Enhanced step number with background
        const stepGroup = svg.append("g").attr("class", "search-step");
        
        stepGroup.append("circle")
          .attr("cx", node.x + 35)
          .attr("cy", node.y - 35)
          .attr("r", 12)
          .attr("fill", "#ffffff")
          .attr("stroke", colors.highlight)
          .attr("stroke-width", 2)
          .style("filter", "url(#bst-shadow)");
          
        stepGroup.append("text")
          .attr("x", node.x + 35)
          .attr("y", node.y - 31)
          .attr("text-anchor", "middle")
          .attr("font-size", "14px")
          .attr("font-weight", "bold")
          .attr("fill", "#2d3436")
          .text(step + 1);
      }, step * 900);
    });
  }

  function findSearchPath(targetValue) {
    const path = [];
    let currentIndex = 0; // Start at root
    
    while (currentIndex < nodes.length) {
      path.push(currentIndex);
      const currentValue = nodes[currentIndex].value;
      
      if (currentValue === targetValue) {
        break;
      } else if (targetValue < currentValue) {
        // Go left - find left child
        const leftChild = connections.find(c => c.from === currentIndex && nodes[c.to].value < currentValue);
        if (leftChild) {
          currentIndex = leftChild.to;
        } else {
          break; // Not found
        }
      } else {
        // Go right - find right child
        const rightChild = connections.find(c => c.from === currentIndex && nodes[c.to].value > currentValue);
        if (rightChild) {
          currentIndex = rightChild.to;
        } else {
          break; // Not found
        }
      }
    }
    
    return path;
  }

  function clearSearch() {
    // Reset all nodes to original gradients
    nodes.forEach(node => {
      svg.select(`g[data-value="${node.value}"] circle`)
        .transition()
        .duration(300)
        .attr("fill", colors[node.type])
        .attr("stroke", "#ffffff")
        .attr("stroke-width", 3)
        .attr("r", 28)
        .style("filter", "url(#bst-shadow)");
    });
    
    // Remove all search step indicators
    svg.selectAll(".search-step").remove();
  }



  function showBSTTooltip(node) {
    const leftChildren = connections.filter(c => c.from === nodes.indexOf(node) && nodes[c.to].value < node.value);
    const rightChildren = connections.filter(c => c.from === nodes.indexOf(node) && nodes[c.to].value > node.value);
    
    tooltip.style("visibility", "visible")
      .html(`<strong>Node: ${node.value}</strong><br/>
             Type: ${node.type}<br/>
             Level: ${node.level}<br/>
             Left children: ${leftChildren.length > 0 ? leftChildren.map(c => nodes[c.to].value).join(', ') : 'None'}<br/>
             Right children: ${rightChildren.length > 0 ? rightChildren.map(c => nodes[c.to].value).join(', ') : 'None'}<br/>
             <em>Click search buttons to see path!</em>`);
  }

  // Enhanced interactive tooltip with professional styling
  const tooltip = d3.select("body").append("div")
    .attr("class", "bst-tooltip")
    .style("position", "absolute")
    .style("visibility", "hidden")
    .style("background", "linear-gradient(135deg, rgba(108, 92, 231, 0.95), rgba(162, 155, 254, 0.95))")
    .style("color", "#ffffff")
    .style("padding", "16px")
    .style("border-radius", "12px")
    .style("font-size", "13px")
    .style("font-weight", "500")
    .style("max-width", "280px")
    .style("z-index", "10000")
    .style("pointer-events", "none")
    .style("box-shadow", "0 8px 32px rgba(0,0,0,0.3)")
    .style("backdrop-filter", "blur(10px)")
    .style("border", "1px solid rgba(255,255,255,0.2)");

  svg.on("mousemove", function(event) {
    tooltip.style("top", (event.pageY - 10) + "px")
      .style("left", (event.pageX + 10) + "px");
  });

})();
</script>

---

## 📊 4. Interactive Learning Dashboard
<span id="learning-dashboard"></span>

### 🎯 Progress Tracker

<div id="progress-tracker" style="width: 100%; height: 450px; background: linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 75%, #4facfe 100%); border-radius: 12px; padding: 20px; margin: 20px 0; box-shadow: 0 8px 32px rgba(0,0,0,0.3);"></div>

<script>
(function() {
  const container = d3.select("#progress-tracker");
  const width = 950;
  const height = 410;
  
  const svg = container.append("svg")
    .attr("viewBox", `0 0 ${width} ${height}`)
    .style("width", "100%")
    .style("height", "100%");

  // Enhanced gradient definitions for progress bars
  const defs = svg.append("defs");

  // Classes & Objects gradient - Green theme
  const classesGradient = defs.append("linearGradient")
    .attr("id", "progress-classes-gradient")
    .attr("x1", "0%").attr("y1", "0%")
    .attr("x2", "100%").attr("y2", "0%");
  classesGradient.append("stop").attr("offset", "0%").attr("stop-color", "#00b894");
  classesGradient.append("stop").attr("offset", "25%").attr("stop-color", "#00cec9");
  classesGradient.append("stop").attr("offset", "75%").attr("stop-color", "#00a085");
  classesGradient.append("stop").attr("offset", "100%").attr("stop-color", "#008573");

  // Encapsulation gradient - Blue theme
  const encapsulationGradient = defs.append("linearGradient")
    .attr("id", "progress-encapsulation-gradient")
    .attr("x1", "0%").attr("y1", "0%")
    .attr("x2", "100%").attr("y2", "0%");
  encapsulationGradient.append("stop").attr("offset", "0%").attr("stop-color", "#74b9ff");
  encapsulationGradient.append("stop").attr("offset", "25%").attr("stop-color", "#0984e3");
  encapsulationGradient.append("stop").attr("offset", "75%").attr("stop-color", "#0066cc");
  encapsulationGradient.append("stop").attr("offset", "100%").attr("stop-color", "#004499");

  // Inheritance gradient - Purple theme
  const inheritanceGradient = defs.append("linearGradient")
    .attr("id", "progress-inheritance-gradient")
    .attr("x1", "0%").attr("y1", "0%")
    .attr("x2", "100%").attr("y2", "0%");
  inheritanceGradient.append("stop").attr("offset", "0%").attr("stop-color", "#6c5ce7");
  inheritanceGradient.append("stop").attr("offset", "25%").attr("stop-color", "#a29bfe");
  inheritanceGradient.append("stop").attr("offset", "75%").attr("stop-color", "#5b4bd5");
  inheritanceGradient.append("stop").attr("offset", "100%").attr("stop-color", "#4a3bc2");

  // SQL JOINs gradient - Orange to Red theme
  const sqlGradient = defs.append("linearGradient")
    .attr("id", "progress-sql-gradient")
    .attr("x1", "0%").attr("y1", "0%")
    .attr("x2", "100%").attr("y2", "0%");
  sqlGradient.append("stop").attr("offset", "0%").attr("stop-color", "#fdcb6e");
  sqlGradient.append("stop").attr("offset", "25%").attr("stop-color", "#f39c12");
  sqlGradient.append("stop").attr("offset", "75%").attr("stop-color", "#e17055");
  sqlGradient.append("stop").attr("offset", "100%").attr("stop-color", "#d63031");

  // Data Structures gradient - Pink theme
  const dataStructuresGradient = defs.append("linearGradient")
    .attr("id", "progress-data-gradient")
    .attr("x1", "0%").attr("y1", "0%")
    .attr("x2", "100%").attr("y2", "0%");
  dataStructuresGradient.append("stop").attr("offset", "0%").attr("stop-color", "#fd79a8");
  dataStructuresGradient.append("stop").attr("offset", "25%").attr("stop-color", "#e84393");
  dataStructuresGradient.append("stop").attr("offset", "75%").attr("stop-color", "#d63384");
  dataStructuresGradient.append("stop").attr("offset", "100%").attr("stop-color", "#c2185b");

  // Shadow filter
  const shadow = defs.append("filter")
    .attr("id", "progress-shadow")
    .attr("x", "-50%").attr("y", "-50%")
    .attr("width", "200%").attr("height", "200%");
  shadow.append("feDropShadow")
    .attr("dx", 3).attr("dy", 3)
    .attr("stdDeviation", 4)
    .attr("flood-opacity", 0.3);

  // Enhanced progress data with gradient URLs
  const progressData = [
    { topic: "Classes & Objects", progress: 85, color: "url(#progress-classes-gradient)", textColor: "#00b894" },
    { topic: "Encapsulation", progress: 75, color: "url(#progress-encapsulation-gradient)", textColor: "#0984e3" },
    { topic: "Inheritance", progress: 60, color: "url(#progress-inheritance-gradient)", textColor: "#6c5ce7" },
    { topic: "SQL JOINs", progress: 90, color: "url(#progress-sql-gradient)", textColor: "#e17055" },
    { topic: "Data Structures", progress: 70, color: "url(#progress-data-gradient)", textColor: "#fd79a8" }
  ];

  const barHeight = 55;
  const barMargin = 25;
  const startY = 60;

  progressData.forEach((data, i) => {
    const y = startY + i * (barHeight + barMargin);
    
    // Enhanced background bar with shadow
    svg.append("rect")
      .attr("x", 200)
      .attr("y", y)
      .attr("width", 520)
      .attr("height", barHeight)
      .attr("fill", "rgba(255, 255, 255, 0.2)")
      .attr("stroke", "rgba(255, 255, 255, 0.4)")
      .attr("stroke-width", 2)
      .attr("rx", 30)
      .style("filter", "url(#progress-shadow)");

    // Enhanced progress bar with gradients
    const progressBar = svg.append("rect")
      .attr("x", 205)
      .attr("y", y + 2.5)
      .attr("width", 0)
      .attr("height", barHeight - 5)
      .attr("fill", data.color)
      .attr("rx", 27)
      .style("filter", "url(#progress-shadow)")
      .on("mouseover", function() {
        d3.select(this)
          .transition()
          .duration(200)
          .style("filter", "url(#progress-shadow) brightness(1.2)");
      })
      .on("mouseout", function() {
        d3.select(this)
          .transition()
          .duration(200)
          .style("filter", "url(#progress-shadow)");
      });

    // Animate progress bar
    progressBar.transition()
      .duration(1200)
      .delay(i * 250)
      .ease(d3.easeCubicOut)
      .attr("width", (data.progress / 100) * 510);

    // Enhanced topic label with shadow
    svg.append("text")
      .attr("x", 190)
      .attr("y", y + barHeight/2 + 7)
      .attr("text-anchor", "end")
      .attr("font-size", "16px")
      .attr("font-weight", "bold")
      .attr("fill", "#ffffff")
      .style("text-shadow", "2px 2px 4px rgba(0,0,0,0.8)")
      .text(data.topic);

    // Enhanced progress percentage with background
    const percentageGroup = svg.append("g");
    
    percentageGroup.append("circle")
      .attr("cx", 200 + (data.progress / 100) * 510 + 35)
      .attr("cy", y + barHeight/2)
      .attr("r", 18)
      .attr("fill", "#ffffff")
      .attr("stroke", data.textColor)
      .attr("stroke-width", 3)
      .style("filter", "url(#progress-shadow)")
      .style("opacity", 0)
      .transition()
      .duration(800)
      .delay(i * 250 + 600)
      .style("opacity", 1);

    percentageGroup.append("text")
      .attr("x", 200 + (data.progress / 100) * 510 + 35)
      .attr("y", y + barHeight/2 + 6)
      .attr("text-anchor", "middle")
      .attr("font-size", "14px")
      .attr("font-weight", "bold")
      .attr("fill", data.textColor)
      .style("opacity", 0)
      .text(`${data.progress}%`)
      .transition()
      .duration(800)
      .delay(i * 250 + 600)
      .style("opacity", 1);
  });

  // Enhanced title with gradient-friendly styling
  svg.append("text")
    .attr("x", 450)
    .attr("y", 35)
    .attr("text-anchor", "middle")
    .attr("font-size", "24px")
    .attr("font-weight", "bold")
    .attr("fill", "#ffffff")
    .style("text-shadow", "3px 3px 6px rgba(0,0,0,0.7)")
    .text("🎯 Week 3 Learning Progress");

  // Add interactive legend
  const legendGroup = svg.append("g");
  
  legendGroup.append("rect")
    .attr("x", 730)
    .attr("y", 50)
    .attr("width", 150)
    .attr("height", 120)
    .attr("fill", "rgba(255, 255, 255, 0.1)")
    .attr("stroke", "rgba(255, 255, 255, 0.3)")
    .attr("stroke-width", 1)
    .attr("rx", 8)
    .style("backdrop-filter", "blur(10px)");

  legendGroup.append("text")
    .attr("x", 805)
    .attr("y", 75)
    .attr("text-anchor", "middle")
    .attr("font-size", "14px")
    .attr("font-weight", "bold")
    .attr("fill", "#ffffff")
    .style("text-shadow", "1px 1px 2px rgba(0,0,0,0.8)")
    .text("Progress Legend");

  const legendItems = [
    { range: "90-100%", color: "#4CAF50", label: "Excellent" },
    { range: "75-89%", color: "#FF9800", label: "Good" },
    { range: "60-74%", color: "#2196F3", label: "Learning" },
    { range: "<60%", color: "#9C27B0", label: "Needs Focus" }
  ];

  legendItems.forEach((item, i) => {
    const y = 95 + i * 18;
    
    legendGroup.append("circle")
      .attr("cx", 745)
      .attr("cy", y)
      .attr("r", 4)
      .attr("fill", item.color);
    
    legendGroup.append("text")
      .attr("x", 755)
      .attr("y", y + 4)
      .attr("font-size", "11px")
      .attr("fill", "#ffffff")
      .style("text-shadow", "1px 1px 2px rgba(0,0,0,0.8)")
      .text(`${item.range} ${item.label}`);
  });

})();
</script>

<div style="clear: both;"></div>

---

## 🎯 5. Self-Assessment & Action Plan
<span id="assessment"></span>

### ✅ Knowledge Check

| Topic | Confidence Level | Next Steps |
|-------|------------------|------------|
| **OOP Principles** | ⭐⭐⭐⭐⭐ | Practice advanced patterns |
| **PyTorch Custom Modules** | ⭐⭐⭐⭐☆ | Build more complex architectures |
| **SQL Advanced Queries** | ⭐⭐⭐⭐⭐ | Optimize query performance |
| **Data Structures** | ⭐⭐⭐☆☆ | Implement algorithms |


### 💡 Key Takeaways

> 🌟 **This Week's Achievements**:
> - Mastered OOP fundamentals with practical examples
> - Explored advanced SQL techniques for data manipulation
> - Built solid foundation in data structures
> - Created interactive visualizations for better understanding

---

> **📖 Keep Learning!** The journey to AI mastery requires consistent practice and application. Use these concepts in your daily coding practice!

<div style="clear: both;"></div>