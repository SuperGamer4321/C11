var weight = [10,27,34,14];

function average(){
  var sum = 0;
  
  for(var i = 0 ; i < weight.length ; i++){
    sum = sum+weight[i];
  }
  //0,1,2,3
  var avg = sum/weight.length
  console.log(avg)
}

function setup() 
{
  average()
  createCanvas(400,400);
}

function draw() 
{
background(51);

}

