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
let barColours=[];


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
    //barColours.push([0, 0, 128], [0, 0, 160], [0, 0, 192], [0, 0, 224], [0, 0, 255], [70, 130, 180], [100, 149, 237], [135, 206, 250], [176, 224, 230], [240, 248, 255], [173, 216, 230], [135, 206, 235], [0, 191, 255], [30, 144, 255], [70, 130, 180], [0, 255, 255], [135, 206, 250], [176, 224, 230], [0, 255, 255], [100, 149, 237] )
    barColours.push([255, 99, 132],[255, 159, 64],[255, 206, 86],[75, 192, 192],[54, 162, 235],[153, 102, 255],[255, 105, 180],[186, 85, 211],[60, 179, 113],[0, 255, 255],[255, 69, 0],[255, 165, 0],[75, 0, 130],[138, 43, 226],[255, 215, 0],[34, 139, 34],[255, 0, 255],[255, 99, 255],[255, 0, 0],[128, 128, 128] )
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
        yValue: "gross_total",
        barColours: barColours
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
        yValue: "imdb_rating",
        barColours: barColours
    }));
    horizontalChart2.push(new HorizontalChart({
        data: cleanedData,
        xValue: "movie_name",
        yValue: "budget",
        XPos: 1200,
        yPos: 1150,
        barColours: barColours
        
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