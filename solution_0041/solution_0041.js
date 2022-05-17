//Shark Pontoon - Your friend invites you out to a cool floating pontoon around 1km off the beach. Among other things, the pontoon has a huge slide that drops you out right into the ocean, a small way from a set of stairs used to climb out. As you plunge out of the slide into the water, you see a shark hovering in the darkness under the pontoon... Crap! You need to work out if the shark will get to you before you can get to the pontoon. To make it easier... as you do the mental calculations in the water you either freeze when you realise you are dead, or swim when you realise you can make it!

function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin) {
    if (dolphin) {
        sharkSpeed /= 2;
    }
    return pontoonDistance/youSpeed < sharkDistance/sharkSpeed ? 'Alive' : 'SharkBait'
}

//test cases
shark(12,50,4,8,true) //"Alive"
shark(7,55,4,16,true) //"Alive"
shark(24,0,4,8,true) //"SharkBait"