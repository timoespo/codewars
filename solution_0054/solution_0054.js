//You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square. If it is a square, return its area. If it is a rectangle, return its perimeter.
const areaOrPerimeter = function (l,w){
    return l === w ? l * w : (l + w) * 2
}

//test cases
areaOrPerimeter(3,3) // 9
areaOrPerimeter(5,4) // 18

