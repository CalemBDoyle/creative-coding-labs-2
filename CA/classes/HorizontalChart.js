class HorizontalChart {
    constructor(obj) {
        this.data = obj.data ;
        this.xValue = obj.xValue;
        this.yValue = obj.yValue;
        this.chartHeight=obj.chartHeight || 250 ;
        this.chartWidth=obj.chartWidth || 500;
        this.barWidth=obj.barWidth || 20;
        this.margin=obj.margin || 15;
        this.axisThickness =obj.axisThickness || 3;
        this.axisTickThickness =obj.axisTickThickness || 3;
        this.chartPosX = obj.xPos || 1400;
        this.chartPosY = obj.yPos || 600;
        // creates rounded Value (makes reading chart easier)
        this.maxValue = max(cleanedData.map(row => row[this.yValue]));
        if (this.maxValue < 100) {
            this.roundedValue = ceil(this.maxValue / 10) * 10
        } else {
            this.roundedValue = ceil(this.maxValue / 100) * 100
        }
 
        this.gap = (this.chartWidth - (this.data.length * this.barWidth) - (this.margin * 2))/(this.data.length-1);
        this.scaler= this.chartHeight / this.roundedValue
        this.axisColour= color(158, 163, 176);
        this.axisTickColour= color(0,0,0);
        this.barColours = color(110, 160, 255);
        this.axisTextColour = color(13, 31, 45);
        this.numTicks = 10;
        this.tickLength = 3;
    }
    //horizontal bars rotated
    renderHorizontalBars() {
    push();
    translate(this.chartPosX,this.chartPosY)
    rotate(90)
    push()
    translate(this.margin,0)
    for (let i = 0; i < this.data.length; i++) {
        let xPos = (this.barWidth + this.gap) * i;
        fill(this.barColours)
        noStroke()
        rect(xPos,0,this.barWidth,-this.data[i][this.yValue]*this.scaler)
       
    }
    pop()
    pop()
    }
 
    //axis rotated
    renderHorizontalAxis() {
        push();
        translate(this.chartPosX,this.chartPosY)
        rotate(90)
        noFill()
        stroke(this.axisColour)
        strokeWeight(this.axisThickness)
        //x Axis moved accordingly
        line(this.chartWidth,0,this.chartWidth,-this.chartHeight)
        line(0,0,this.chartWidth,0)
        pop()
    }
    
    //labels rotated
    renderHorizontalLabels() {
    push();
    translate(this.chartPosX,this.chartPosY)
    rotate(90)
    push()
    translate(this.margin,0)
    for (let i = 0; i < this.data.length; i++) {
        let xPos = (this.barWidth + this.gap) * i;    
        push()
        fill(this.axisTextColour);
        //text aligned accordingly with horizontal bar chart    
        textAlign(RIGHT, CENTER)
        translate(xPos + (this.barWidth/2), 15)
        textSize(12)
        rotate(-90)
        text (this.data[i][this.xValue], 0 , 0);
        pop()
    }
    pop()
    pop()
    }
    
    //ticks rotated
    renderHorizontalTicks() {
    push();
    translate(this.chartPosX,this.chartPosY)
    rotate(90)
    noFill()
    stroke(this.axisTickColour)
    strokeWeight(this.axisTickThickness)
    let tickIncrement = this.chartHeight/this.numTicks;
    for(let i = 0; i <= this.numTicks; i++) {
        //location moved to be on the x axis
        line(this.chartWidth,-tickIncrement*i, (this.chartWidth + this.tickLength), -tickIncrement*i)
        
    }
    pop()
    }

    //text rotated
    renderHorizontalTicksText() {
    push();
    translate(this.chartPosX,this.chartPosY)
    rotate(90)
    fill(this.axisTextColour)
    
    noStroke()
    let tickIncrement = this.chartHeight/this.numTicks;
    let valueIncrement = this.roundedValue / this.numTicks;
    
    for (let i = 0; i <= this.numTicks; i++) {
            let yPos = tickIncrement * i;
        //text moved and rotated for easy readability 
        push();
        translate(this.tickLength + this.chartWidth + 15, -yPos+5);
        rotate(-90)  
        text(valueIncrement * i, 0, 0);
        pop();
    }
    pop()
    }

    renderHorizontalHeader() {
        push()
        //Header rendered. yValue turned into a string for the header
        translate(this.chartPosX,this.chartPosY)
        fill(this.axisTextColour)
        textSize(20)
        textAlign(CENTER)
        text(String(this.yValue),this.chartHeight/2-10,-10)
        pop()
        
    }
}