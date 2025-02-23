class MirrorChart {
    constructor(obj) {
        this.data = obj.data;
        this.grossValue = obj.grossValue ;
        this.budgetValue = obj.budgetValue;
        this.yValue = obj.yValue;
        this.chartHeight=obj.chartHeight || 300 ;
        this.chartWidth=obj.chartWidth || 300;
        this.barWidth=obj.barWidth || 10;
        this.margin=obj.margin || 5;
        this.axisThickness =obj.axisThickness || 3;
        this.axisTickThickness =obj.axisTickThickness || 3;
        this.chartPosX = obj.xPos || 400;
        this.chartPosY = obj.yPos || 900;
        // creates rounded Value (makes reading chart easier)
        this.maxValue = max(cleanedData.map(row => row[this.grossValue]));
        this.roundedValue = ceil(this.maxValue / 100) * 100
 
        this.gap = (this.chartWidth - (this.data.length * this.barWidth) - (this.margin * 2))/(this.data.length-1);
        this.scaler= this.chartHeight / this.roundedValue;
 
        this.axisColour= color(158, 163, 176);
        this.axisTickColour= color(0,0,0);
        this.dataColour = color (120, 150, 120);
        this.budgetColour = color (150,80,80)
        this.axisTextColour = color(13, 31, 45);
        this.numTicks = 10;
        this.tickLength = 3;
    }
    renderMirrorBars() {
    
    push();
    translate((this.chartPosX+(this.chartHeight/-2)),this.chartPosY)
    rotate(270)
    push()
    translate(this.margin,0)
    for (let i = 0; i < this.data.length; i++) {
        let xPos = (this.barWidth + this.gap) * i;
        fill(this.dataColour)
        noStroke()
        rect(xPos,0,this.barWidth,(-this.data[i][this.grossValue]*this.scaler)/2)
        fill(this.budgetColour)
        rect(xPos,0,this.barWidth,(this.data[i][this.budgetValue]*this.scaler)/2)
        console.log
    }
    pop()
    pop()
    }
 
    renderMirrorAxis() {
        push();
        translate(this.chartPosX,this.chartPosY)
        rotate(270)
        noFill()
        stroke(this.axisColour)
        strokeWeight(this.axisThickness)
        line(0,0,0,-this.chartHeight)
        line(0,0,this.chartWidth,0)
        pop()
    }
 
    renderMirrorLabels() {
    push();
    translate(this.chartPosX,this.chartPosY)
    rotate(270) 
 
    push()
    translate(this.margin,0)
    for (let i = 0; i < this.data.length; i++) {
        let yPos = (this.barWidth + this.gap) * i;        
        push()
        fill(this.axisTextColour);
        textAlign(LEFT, CENTER)
        translate(yPos + (this.barWidth/2), 15)
        textSize(13)
        rotate(90)
        text (this.data[i][this.yValue], 0 , 0);
        pop()
    }
    pop()
    pop()
    }
 
    renderMirrorTicks() {
    push();
    translate(this.chartPosX,this.chartPosY)
    rotate(270)
    noFill()
    stroke(this.axisTickColour)
    strokeWeight(this.axisTickThickness)
    let tickIncrement = this.chartHeight/this.numTicks;
    for(let i = 0; i <= this.numTicks; i++) {
        line(0, -tickIncrement*i, -this.tickLength, -tickIncrement*i)
        
    }
    pop()
    }
}
