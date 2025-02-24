class StackedChart {
    constructor(obj) {
        this.data = obj.data ;
        this.xValue = obj.xValue;
        this.yValues = obj.yValues;
        this.chartHeight=obj.chartHeight || 250 ;
        this.chartWidth=obj.chartWidth || 500;
        this.barWidth=obj.barWidth || 20;
        this.margin=obj.margin || 15;
        this.axisThickness =obj.axisThickness || 3;
        this.axisTickThickness =obj.axisTickThickness || 3;
        this.chartPosX = obj.xPos || 800;
        this.chartPosY = obj.yPos || 270;
        this.total = obj.total
        this.gap = (this.chartWidth - (this.data.length * this.barWidth) - (this.margin * 2))/(this.data.length-1);
        this.scaler= this.chartHeight / this.total
        this.axisColour= color(158, 163, 176);
        this.axisTickColour= color(0,0,0);
        this.barColour = ['#FF0000','#00FF00', '#0000FF', '#FFFF00', '#00FFFF','#FF00FF'];
        this.axisTextColour = color(13, 31, 45);
        this.numTicks = 6;
        this.tickLength = 3;
    }
    renderStackedBars() {
    push();
    translate(this.chartPosX,this.chartPosY)
    push()
    translate(this.margin,0)
    for (let i = 0; i < this.data.length; i++) {
        let xPos = (this.barWidth + this.gap)*i;
        push()
        translate (xPos,0)
        push()
        for(let j=0; j<this.yValues.length; j++){
            noStroke();
            fill(this.barColour[j])
            rect(0,0,this.barWidth,-this.data[i][this.yValues[j]]*this.scaler)
            translate(0, -this.data[i][this.yValues[j]]*this.scaler)
        }
        
    pop()
    pop()
    }
}
    renderStackedAxis() {
        push();
        translate(-this.margin,0)
        noFill()
        stroke(this.axisColour)
        strokeWeight(this.axisThickness)
        line(0,0,0,-this.chartHeight)
        line(0,0,this.chartWidth,0)
        pop()
    }
 
    renderStackedLabels() {
    push();
    translate(-this.margin,0)
 
    push()
    translate(this.margin,0)
    for (let i = 0; i < this.data.length; i++) {
        let xPos = (this.barWidth + this.gap) * i;        
        push()
        fill(this.axisTextColour);
        textAlign(LEFT, CENTER)
        translate(xPos + (this.barWidth/2), 15)
        textSize(12)
        rotate(65)
        text (this.data[i][this.xValue], 0 , 0);
        pop()
    }
    pop()
    pop()
    }
 
    renderStackedTicks() {
    push();
    translate(-this.margin,0)
    noFill()
    stroke(this.axisTickColour)
    strokeWeight(this.axisTickThickness)
    let tickIncrement = this.chartHeight/this.numTicks;
    for(let i = 0; i <= this.numTicks; i++) {
        line(0, -tickIncrement*i, -this.tickLength, -tickIncrement*i)
        
    }
    pop()
    }

    renderStackedTicksText() {
    push();
    translate(-this.margin,0)
    fill(this.axisTextColour)
    noStroke()
    let tickIncrement = this.chartHeight/this.numTicks;
    let valueIncrement = this.total / this.numTicks;
    for(let i = 0; i <= this.numTicks; i++) {
            
    text(valueIncrement*i, this.tickLength-30, -tickIncrement*i)
            
    }
    pop()
    }
}