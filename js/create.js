//    创建小路障
    function Hinder() {
        this.hinderObj = new Image();
        this.hinderObj.src = imgs.hinder;
        this.img = this.hinderObj;
        this.w = this.hinderObj.width;
        this.h = this.hinderObj.height;
        this.x = rand(w*2,(line-2)*30);
        this.y = -h;
        this.bol = false;
    }
    Hinder.prototype.draw = function () {
        if (carBol){this.y += 2;}else {this.y += 3;}
        if (this.y == carB){
            if(this.bol == false){
                score++;
                $(".again_p1 span").html(score);
                $(".invite_p1 span").html(score);
                this.bol = true;
            }
        }
        ctx.drawImage(this.img,0,0,this.w,this.h,this.x,this.y,this.w*imgScale*0.6,this.h*imgScale*0.6);
        if (this.y>=canvas.height){
            hinderArr.shift();
            return true;
        }
        return false;
    }
//     创建汽车路障
    function CarHinder(){
        this.carhinderObj = new Image();
        this.carhinderObj.src = imgs.car;
        this.img = this.carhinderObj;
        this.w = this.carhinderObj.width;
        this.h = this.carhinderObj.height;
        this.x = rand(w*2,(line-2)*30);
        this.y = -h;
        this.bol = false;
    }
    CarHinder.prototype.draw = function () {    
        if (carBol){this.y += 2;}else {this.y += 3;}
        if (this.y >= carB){
            if(this.bol == false){
                score++;
                $(".again_p1 span").html(score);
                $(".invite_p1 span").html(score);
                this.bol = true;
            }
        }
        ctx.drawImage(this.img,0,0,this.w,this.h,this.x,this.y,this.w*imgScale*0.6,this.h*imgScale*0.6);
        if (this.y>=canvas.height){
            carhinderArr.shift();
            return true;
        }
        return false;
    }
//    创建汽车门
    function Door(door,x,y) {
        this.doorObj = new Image();
        this.doorObj.src = door;
        this.w = 50*imgScale/2;
        this.h = 50*imgScale/2;
        this.img = this.doorObj;
        this.x = x;
        this.y = y;
    }
    Door.prototype.draw = function () {
        if (carBol){this.y += 2;}else {this.y += 3;}
        ctx.drawImage(this.img,this.x,this.y,this.w,this.h);
        if (this.y>=canvas.height){
            doorArr.shift();
            return true;
        }
        return false;
    }
    

