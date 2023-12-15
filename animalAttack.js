var bodyX = 200;
// var bodyY = 220;
// var bodyW = 118;
// var faceW = bodyW/2;

draw = function() {
    background(207, 254, 255);
    fill(240, 209, 36);
    noStroke();
    ellipse(bodyX, bodyX * 11/10, bodyX * 59/100, bodyX * 53/100); // body?
    ellipse(bodyX, bodyX * 75/100, bodyX * 29.5/100, bodyX * 23.5/100); // face?
    ellipse(bodyX * 37/40, bodyX * 1/2, bodyX * 11.5/100, bodyX * 2/5); // left ear
    ellipse(bodyX * 43/40, bodyX * 1/2, bodyX * 11.5/100, bodyX * 2/5); // right ear
    ellipse(bodyX * 3/4, bodyX * 27/20, bodyX * 22/50, bodyX * 3/20); // left foot
    ellipse(bodyX * 5/4, bodyX * 27/20, bodyX * 22/50, bodyX * 3/20); // right foot
    fill(255, 255, 255);
    ellipse(bodyX, bodyX *31/40, bodyX * 23/200, bodyX * 3/40);
    fill(0, 0, 0);
    ellipse(bodyX * 19/20, bodyX * 29/40, bodyX * 1/20, bodyX * 1/20); // left eye
    ellipse(bodyX * 21/20, bodyX * 29/40, bodyX * 1/20, bodyX * 1/20);
    noFill();
    stroke(255, 255, 255);
    strokeWeight(1.8);
    arc(bodyX * 9/10, bodyX * 9/10, bodyX * 7/50, bodyX * 9/20, 20, 135); // left arm
    arc(bodyX * 11/10, bodyX * 9/10, bodyX * 7/50, bodyX * 9/20, 45, 160); // right arm
    bodyX += 0.4;
    if (bodyX === 270) { // bodyX > 270
        bodyX -= 200;
    
    }
    
};
