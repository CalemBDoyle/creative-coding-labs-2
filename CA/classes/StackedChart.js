class StackedChart {
    constructor(obj) {
        this.data = obj.data ;
        this.xValue = obj.xValue;
        this.yValues = obj.yValues;
        this.chartHeight=obj.chartHeight || 250 ;
        this.chartWidth=obj.chartWidth || 500;
        this.barWidth=obj.barWidth || 50;
        this.margin=obj.margin || 15;
        this.axisThickness =obj.axisThickness || 3;
        this.axisTickThickness =obj.axisTickThickness || 3;
        this.chartPosX = obj.xPos || 800;
        this.chartPosY = obj.yPos || 300;
        this.total = obj.total
        this.gap = (this.chartWidth - (this.data.length * this.barWidth) - (this.margin * 2))/(this.data.length-1);
        this.scaler= this.chartHeight / this.total
        this.axisColour = color(158, 163, 176);
        this.axisTickColour = color(0,0,0);
        this.actionColour = color(70, 130, 180)
        this.adventureColour = color(255, 223, 0)
        this.biographyColour = color(144, 238, 144)
        this.crimeColour = color(255, 127, 80)
        this.dramaColour = color(230, 200, 250)
        this.horrorColour = color(255, 140, 180)
        this.barColours = [this.actionColour,this.adventureColour, this.biographyColour, this.crimeColour, this.dramaColour,this.horrorColour];
        this.axisTextColour = color(13, 31, 45);
        
        this.numTicks = 6;
        this.tickLength = 3;
    }
    //Stacked Bars loaded
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
            fill(this.barColours[j])
            rect(0,0,this.barWidth,-this.data[i][this.yValues[j]]*this.scaler)
            //translates to the top of the last bar made so the next bar stacks
            translate(0, -this.data[i][this.yValues[j]]*this.scaler)
        }
        
    pop()
    pop()
    }
    pop();
    pop();
}
//Axis rendered
    renderStackedAxis() {
        push();
        translate(this.chartPosX,this.chartPosY)
        noFill()
        stroke(this.axisColour)
        strokeWeight(this.axisThickness)
        line(0,0,0,-this.chartHeight)
        line(0,0,this.chartWidth,0)
        pop()
    }
//Labels rendered
    renderStackedLabels() {
    push();
    translate(this.chartPosX,this.chartPosY)
 
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

//ticks rendered
    renderStackedTicks() {
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
//text rendered beside ticks
    renderStackedTicksText() {
    push();
    translate(this.chartPosX,this.chartPosY)
    fill(this.axisTextColour)
    noStroke()
    let tickIncrement = this.chartHeight/this.numTicks;
    let valueIncrement = this.total / this.numTicks;
    for(let i = 0; i <= this.numTicks; i++) {
            
    text(valueIncrement*i, this.tickLength-30, -tickIncrement*i)
            
    }
    pop()
    }
    //legend rendered
    renderStackedLegend(){
        push()
        translate(this.chartPosX, this.chartPosY)
        noStroke()
        translate (this.chartWidth+10, -this.chartHeight)
        
        for(let i=0; i <= this.data.length; i++){
        //amount of squares rendered dependent on length of data
        fill(this.barColours[i])
        rect(0,30*i,10,10)
        fill(0)
        //text rendered based on the name of yValues
        text(String(this.yValues[i]),20,(30*i)+10)
        
        }
        pop()
    }
    renderStackedHeader() {
        push()
        
        translate(this.chartPosX,this.chartPosY)
        fill(this.axisTextColour)
        textSize(20)
        textAlign(CENTER)
        text("Genres released per decade",this.chartWidth/2+30,-this.chartHeight-30)
        pop()
        
    }
}