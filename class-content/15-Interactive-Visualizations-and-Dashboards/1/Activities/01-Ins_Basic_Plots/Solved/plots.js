// Part 1
// Trace consists of x-axis, y-axis, and type of graph
// Uses Arrays for axis
var trace1 = {
  x: ["beer", "wine", "martini", "margarita",
    "ice tea", "rum & coke", "mai tai", "gin & tonic"],
  y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
  type: "bar"
};

var data = [trace1];

var layout = {
  title: "'Bar' Chart"
};

// Plots the trace(data) and applies the layout
Plotly.newPlot("plot", data, layout);


// // Part 2 - Adding attributes
 var trace1 = {
   x: ["beer", "wine", "martini", "margarita",
       "ice tea", "rum & coke", "mai tai", "gin & tonic"],
   y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
   type: "bar"
 };

 var data = [trace1];

 // Create variable layout to apply things like titles and axis names
 var layout = {
   title: "'Bar' Chart",
   xaxis: { title: "Drinks"},
   yaxis: { title: "% of Drinks Ordered"}
 };

 // Plot bar chart with labels and a title
 Plotly.newPlot("plot", data, layout);


// // Part 3 - Line Chart
// Changed type to line chart
 var trace1 = {
   x: ["beer", "wine", "martini", "margarita",
       "ice tea", "rum & coke", "mai tai", "gin & tonic"],
   y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
   type: "line"
 };

 var data = [trace1];

 var layout = {
   title: "Bar Chart",
 };

 Plotly.newPlot("plot", data, layout);

// // Part 4 - Broken Pie Chart
 var trace1 = {
   x: ["beer", "wine", "martini", "margarita",
       "ice tea", "rum & coke", "mai tai", "gin & tonic"],
   y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
   type: "pie"
 };

 var data = [trace1];

 var layout = {
   title: "'Bar' Chart",
 };

 Plotly.newPlot("plot", data, layout);


// // Part 5 - Working Pie Chart
 var trace1 = {
   labels: ["beer", "wine", "martini", "margarita",
       "ice tea", "rum & coke", "mai tai", "gin & tonic"],
   values: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
   type: 'pie'
 };

 var data = [trace1];

 var layout = {
   title: "'Bar' Chart",
 };

 Plotly.newPlot("plot", data, layout);

