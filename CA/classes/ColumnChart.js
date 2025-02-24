class ColumnChart {
    constructor(obj) {
        this.data = obj.data ;
        this.xValue = obj.xValue;
        this.yValues = obj.yValues;
        this.chartHeight=obj.chartHeight || 250 ;
        this.chartWidth=obj.chartWidth || 600;
        this.barWidth=obj.barWidth || 10;
        this.margin=obj.margin || 15;
        this.axisThickness =obj.axisThickness || 3;
        this.axisTickThickness =obj.axisTickThickness || 3;
        this.chartPosX = obj.xPos || 40;
        this.chartPosY = obj.yPos || 270;
        this.maxValue=obj.maxValue
        this.roundedValue = ceil(this.maxValue / 100) * 100
 
        this.gap = (this.chartWidth - (this.data.length * this.barWidth * this.yValues.length) - (this.margin * 2))/(this.data.length-1);
        this.scaler= this.chartHeight / this.roundedValue
 
        this.axisColour= color(158, 163, 176);
        this.axisTickColour= color(0,0,0);
        this.barColour1 = color (255, 0, 0);
        this.barColour2 = color(0,0,255)
        this.axisTextColour = color(13, 31, 45);
        this.numTicks = 10;
        this.tickLength = 3;
    }

    renderColumns() {
    push();
    translate(this.chartPosX,this.chartPosY)
    push()
    translate(this.margin,0)
    for (let i = 0; i < this.data.length; i++) {
        push();
        translate((this.gap + (this.barWidth * this.yValues.length))*i,0)
        console.log(this.yValues.length)
        for(let j=0; j<this.yValues.length; j++){
        noStroke()
        if (j === 0) {
            fill(this.barColour1);
          } else {
            fill(this.barColour2);
          }
        rect(this.barWidth*j,0,this.barWidth,-this.data[i][this.yValues[j]]*this.scaler)

    }
    pop()
}
    pop()
    pop()
    
}
 
    renderColumnAxis() {
        push();
        translate(this.chartPosX,this.chartPosY)
        noFill()
        stroke(this.axisColour)
        strokeWeight(this.axisThickness)
        line(0,0,0,-this.chartHeight)
        line(0,0,this.chartWidth,0)
        pop()
    }
 
    renderColumnLabels() {
    push();
    translate(this.chartPosX,this.chartPosY)
 
    push()
    translate(this.margin,0)
    for (let i = 0; i < this.data.length; i++) {
        let xPos = ((this.gap + (this.barWidth * this.yValues.length))*i)       
        push()
        fill(this.axisTextColour);
        textAlign(LEFT, CENTER)
        translate(xPos + (this.barWidth), 15)
        textSize(12)
        rotate(65)
        text (this.data[i][this.xValue], 0 , 0);
        pop()
    }
    pop()
    pop()
    }
 
    renderColumnTicks() {
    push();
    translate(this.chartPosX,this.chartPosY)
    noFill()
    stroke(this.axisTickColour)
    strokeWeight(this.axisTickThickness)
    let tickIncrement = this.chartHeight/this.numTicks;
    for(let i = 0; i <= this.numTicks; i++) {
        line(0, -tickIncrement*i, -this.tickLength, -tickIncrement*i)
    }
    pop()
    }
    renderColumnTicksText() {
    push();
    translate(this.chartPosX,this.chartPosY)
    fill(this.axisTextColour)
    noStroke()
    let tickIncrement = this.chartHeight/this.numTicks;
    let valueIncrement = this.roundedValue / this.numTicks;
    for(let i = 0; i <= this.numTicks; i++) {
                
    text(valueIncrement*i, this.tickLength-30, -tickIncrement*i)
                
    }
    pop()
    }
}