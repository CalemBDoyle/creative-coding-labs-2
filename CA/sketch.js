let data;
let genreData;
let cleanedData = [];
let cleanedGenreData = [];
let barChart = [];
let mirrorChart = [];
let columnChart = [];
let stackedChart = [];
let horizontalChart1 = [];
let horizontalChart2 = [];


//loads all data
function preload(){
    data= loadTable('data/movies.csv', 'csv', 'header')
    genreData=loadTable('data/movie_genre.csv', 'csv', 'header')
}
 
//sets up clean data, canvas the xValue and Yvalue
function setup(){
    createCanvas(2000,2000);
    angleMode(DEGREES);
    noLoop();
    cleanData()
    cleanGenreData()
    //max Value calculation for column chart
    let maxBudget= max(cleanedData.map(row=> row.budget))
    let maxGross= max(cleanedData.map(row=> row.gross_total))
    let total = max(cleanedGenreData.map(row => row.total))
    let maxValues= []
    maxValues.push(maxBudget, maxGross)
    console.log(maxValues);
    let maxValue=max(maxValues)
    console.log(maxValue)
    //pushing all the data into classes
    barChart.push(new BarChart({
        data: cleanedData,
        xValue: "movie_name",
        yValue: "gross_total"
    }));
    mirrorChart.push(new MirrorChart({
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
    }
    ));

    stackedChart.push(new StackedChart({
        data: cleanedGenreData,
        xValue: "year",
        yValues: ["action","adventure","biography","crime","drama","horror"],
        total: total
    }))
    horizontalChart1.push(new HorizontalChart({
        data: cleanedData,
        xValue: "movie_name",
        yValue: "imdb_rating"
    }));
    horizontalChart2.push(new HorizontalChart({
        data: cleanedData,
        xValue: "movie_name",
        yValue: "budget",
        XPos: 1200,
        yPos: 1150,
    }));
}
function draw() {
    background(250, 225, 223)
    //renders bar chart functions
    renderBarChart()
    //renders mirror chart
    renderMirrorChart()
    //renders column chart
    //renderColumnChart()
    //renders horizontal chart
    renderHorizontalChart1()
    renderHorizontalChart2()
    //renders stacked chart
    renderStackedChart()
   

}

//cleaning data
function cleanData(){
    for(let i=0; i < data.rows.length; i++){
    cleanedData.push(data.rows[i].obj);
    console.log();
    }
}

function cleanGenreData() {
    for (let i=0; i < genreData.rows.length; i++){
    cleanedGenreData.push(genreData.rows[i].obj);
    
    }   
}

function renderBarChart() {
    barChart.forEach(chart => chart.renderBars())
    barChart.forEach(chart => chart.renderAxis())
    barChart.forEach(chart => chart.renderLabels())
    barChart.forEach(chart => chart.renderTicks())
    barChart.forEach(chart => chart.renderTicksText())
    barChart.forEach(chart => chart.renderHeader())
}
function renderMirrorChart(){
    mirrorChart.forEach(chart => chart.renderMirrorBars())
    mirrorChart.forEach(chart => chart.renderMirrorAxis())
    mirrorChart.forEach(chart => chart.renderMirrorLabels())
    mirrorChart.forEach(chart => chart.renderMirrorTicks())
    mirrorChart.forEach(chart => chart.renderMirrorHeader())
}
function renderStackedChart(){
    stackedChart.forEach(chart => chart.renderStackedBars())
    stackedChart.forEach(chart => chart.renderStackedAxis())
    stackedChart.forEach(chart => chart.renderStackedLabels())
    stackedChart.forEach(chart => chart.renderStackedTicks())
    stackedChart.forEach(chart => chart.renderStackedTicksText())
}
function renderHorizontalChart1(){
    horizontalChart1.forEach(chart => chart.renderHorizontalBars())
    horizontalChart1.forEach(chart => chart.renderHorizontalAxis())
    horizontalChart1.forEach(chart => chart.renderHorizontalLabels())
    horizontalChart1.forEach(chart => chart.renderHorizontalTicks())
    horizontalChart1.forEach(chart => chart.renderHorizontalTicksText())
}
function renderHorizontalChart2(){
    horizontalChart2.forEach(chart => chart.renderHorizontalBars())
    horizontalChart2.forEach(chart => chart.renderHorizontalAxis())
    horizontalChart2.forEach(chart => chart.renderHorizontalLabels())
    horizontalChart2.forEach(chart => chart.renderHorizontalTicks())
    horizontalChart2.forEach(chart => chart.renderHorizontalTicksText())
}
function renderColumnChart(){
    columnChart.forEach(chart => chart.renderColumns())
    columnChart.forEach(chart => chart.renderColumnAxis())
    columnChart.forEach(chart => chart.renderColumnLabels())
    columnChart.forEach(chart => chart.renderColumnTicks())
    columnChart.forEach(chart => chart.renderColumnTicksText())
}