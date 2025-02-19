let data;
let cleanedData = [];
let charts = [];
// let chartHeight=300;
// let chartWidth=500;
// let barWidth=5;
// let margin=15;
// let gap;
// let scaler;
// let axisThickness = 1;
// let chartPosX = 100;
// let chartPosY = 400;
// let axisColour;
// let barColour;
// let axisTextColour;

function preload(){
    data= loadTable('data/movies.csv', 'csv', 'header')
}
 
function setup(){
    createCanvas(1000,700);
    angleMode(DEGREES);
    noLoop();
    cleanData()
    charts.push(new BarChart({
        data: cleanedData,
        xValue: "movie_name",
        yValue: "gross_total",
    }
    ));
}
function draw() {
    background(250, 225, 223)
    charts.forEach(chart => chart.renderBars())
    charts.forEach(chart => chart.renderAxis())
    charts.forEach(chart => chart.renderLabels())
    charts.forEach(chart => chart.renderTicks())

}
function cleanData(){
    for(let i=0; i < data.rows.length; i++){
    cleanedData.push(data.rows[i].obj);
    cleanedData.gross_total = parseFloat(cleanedData.gross_total);
    }
}
