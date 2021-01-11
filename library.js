

// function start(){
//   //background(bgImg)

//   title = createElement("h1")
//     title.html("Save Water Game")
//     title.position(350,20)

//   name1 = createInput("Enter Your Name")
//      name1.position(350,200)
//     var n = name1.value()

//   button = createButton("Play")


//   button2 = createButton("Next")
//     button2.position(400,250)
//     button2.show()

//   //intro = createElement("h2")
//   rules = createElement("h2")
    
//  button2.mousePressed(()=>{
//       button2.hide()
//       name1.hide()
//       title.hide()
//       textSize(24)
//       text("Hello!"+ n, 340, 50)
//      button.position(250,300)
//      intro.position(200,200)
//      intro.html("This is Splash! He is lost! Take him to his family of water bodies, by making correct decisions.Beware! A bad decision can cost you!")
//   })
//   button.mousePressed(()=>{
//       button.hide()
//       intro.hide()
//   })
    
// }
// function mousePressed(){
//     button.hide()
//       name1.hide()
//       title.hide()
//       textSize(24)
//       text("Hello!"+ n, 340, 50) 
// }
function info(){
  fill("red")
  textSize(20)
  text("This is Splash! He is lost! Take him to his family ", 20,400)
  text("of water bodies, by making correct decisions.", 20,425)
  text(" Beware! A bad decision can cost you!", 20,450)
  okay.visible = true;
  textSize(14)
  text("Okay",390,480)
  // drop1.visible= true;
  if(mousePressedOver(okay)){
   flag = 2;
   
  }


}

function play(){
  textSize(24);
  fill(255)
  text("Score : "+ score, 650,30)

  drop2.visible=true;
  s1.visible=true;
  b1.show();
  s2.visible=true;
  b2.show();
  
  if (keyDown(LEFT_ARROW)){
    drop2.x -= 15;
  }
  if (keyDown(RIGHT_ARROW)){
    drop2.x += 15;
  }
  if (keyDown(UP_ARROW)){
    drop2.y -= 15;
  }
  if (keyDown(DOWN_ARROW)){
    drop2.y += 15;
  }
//b1 corresponds to drainage line

t1.position(innerWidth/2,100)
t1.html("abc")

  b1.mousePressed(()=>{
    s1.visible = false;
    s2.visible = false;
    b1.hide();
    b2.hide();
    scene=1;
    score += 5;
  })
//b2 corresponds to watering of plants

t2.position(innerWidth/2+200,100)
t2.html("def")

  b2.mousePressed(()=>{
    s1.visible = false;
    s2.visible = false;
    b1.hide();
    b2.hide();
    scene=2;
    score += 10;
  })

  if(scene===1){
    s3.visible=true;
    b3.show();
    s4.visible=true;
    b4.show();
  //b3 corresponds to a positive scenario  
    b3.mousePressed(()=>{
      s3.visible = false;
      s4.visible = false;
      b3.hide();
      b4.hide();
      scene=3;
      score += 10;
    })

    
   
 
  }
  if(scene===2){
    s5.visible=true;
    b5.show();
    s6.visible=true;
    b6.show();
//b4 corresponds to a negative scenario 
    b5.mousePressed(()=>{
      s5.visible = false;
      s6visible = false;
      b5.hide();
      b6.hide();
      scene=4;
      score += 5;
    })
  }
  




}

function end(){

}