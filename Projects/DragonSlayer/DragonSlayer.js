var DS = function() {
var slaying = true;
var youHit = Math.floor(Math.random() * 2);
var damageThisRound = Math.floor(Math.random() * 5 + 1);
var totalDamage = 0;
while(slaying) {
    if(youHit === 1) {
        confirm("Congratulations, you hit the dragon!");
        totalDamage += damageThisRound;
        if(totalDamage >= 4) {
            confirm("Wonderful, you've killed the dragon!");
            slaying = false;
        }
        else {
            youHit = Math.floor(Math.random() * 2);
        }
    }
    else {
        confirm("Whoops, you missed and the dragon slew you!");
    slaying = false;
}
}
}