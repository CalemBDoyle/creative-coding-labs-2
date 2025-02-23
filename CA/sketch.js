let data;
let genreData;
let cleanedData = [];
let cleanedGenreData = [];
let barChart = [];
let mirrorChart = [];
let columnChart = [];
let stackedChart = [];


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
        total: "total"
    }))


    console.log("Before parsing:", genreData.rows[1].obj);
    console.log("After parsing:", cleanedGenreData[1]);

}
function draw() {
    background(250, 225, 223)
    //renders all bar chart functions
    // barChart.forEach(chart => chart.renderBars())
    // barChart.forEach(chart => chart.renderAxis())
    // barChart.forEach(chart => chart.renderLabels())
    // barChart.forEach(chart => chart.renderTicks())
    // barChart.forEach(chart => chart.renderTicksText())
    //renders all mirror chart functions
    mirrorChart.forEach(chart => chart.renderMirrorBars())
    mirrorChart.forEach(chart => chart.renderMirrorAxis())
    mirrorChart.forEach(chart => chart.renderMirrorLabels())
    mirrorChart.forEach(chart => chart.renderMirrorTicks())
    // columnChart.forEach(chart => chart.renderColumns())
    // columnChart.forEach(chart => chart.renderColumnAxis())
    // columnChart.forEach(chart => chart.renderColumnLabels())
    // columnChart.forEach(chart => chart.renderColumnTicks())
    stackedChart.forEach(chart => chart.renderStackedBars())
    stackedChart.forEach(chart => chart.renderStackedAxis())
    stackedChart.forEach(chart => chart.renderStackedLabels())
    stackedChart.forEach(chart => chart.renderStackedTicks())
    stackedChart.forEach(chart => chart.renderStackedTicksText())
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