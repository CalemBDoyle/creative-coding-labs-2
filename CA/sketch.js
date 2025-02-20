let data;
let cleanedData = [];
let barChart = [];
let stackedChart = [];
let columnChart = [];

function preload(){
    data= loadTable('data/movies.csv', 'csv', 'header')
}
 
//sets up clean data, canvas the xValue and Yvalue
function setup(){
    createCanvas(1000,1000);
    angleMode(DEGREES);
    noLoop();
    cleanData()
    let maxBudget= max(cleanedData.map(row=> row.budget))
    let maxGross= max(cleanedData.map(row=> row.gross_total))
    let maxValues= []
    maxValues.push(maxBudget, maxGross)
    console.log(maxValues);
    let maxValue=max(maxValues)
    console.log(maxValue)

    barChart.push(new BarChart({
        data: cleanedData,
        xValue: "movie_name",
        yValue: "gross_total"
    }));
    stackedChart.push(new StackedChart({
        data: cleanedData,
        grossValue: "gross_total",
        budgetValue: "budget",
        yValue: "movie_name",
    }
    ));
    columnChart.push(new ColumnChart({
        data: cleanedData,
        xValue: "movie_name",
        yValues: ["gross_total", "budget"],
        maxValue: maxValue
    }))
}
function draw() {
    background(250, 225, 223)
    //renders all bar chart functions
    // barChart.forEach(chart => chart.renderBars())
    // barChart.forEach(chart => chart.renderAxis())
    // barChart.forEach(chart => chart.renderLabels())
    // barChart.forEach(chart => chart.renderTicks())
    // //renders all stacked chart functions
    // stackedChart.forEach(chart => chart.renderStackedBars())
    // stackedChart.forEach(chart => chart.renderStackedAxis())
    // stackedChart.forEach(chart => chart.renderStackedLabels())
    // stackedChart.forEach(chart => chart.renderStackedTicks())
    columnChart.forEach(chart => chart.renderColumns())
    columnChart.forEach(chart => chart.renderColumnAxis())
    columnChart.forEach(chart => chart.renderColumnLabels())
    columnChart.forEach(chart => chart.renderColumnTicks())
}
function cleanData(){
    for(let i=0; i < data.rows.length; i++){
    cleanedData.push(data.rows[i].obj);
    }
}