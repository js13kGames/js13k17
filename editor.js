﻿// EDITOR
// ======

// When the page loads
onload = function(){
  
  /////////////////////////////////////////////////////////////////////////////
  
  // Startup 
  
  // Set default values to the form
  gridsize.value = snakesize.value = 5;
  ground.checked = true;
  wall.checked = false;
  wrap.checked = false;

  // Puzzle (ground/wall) checkboxes can't be both disabled
  ground.onclick = function(e){
    if(ground.checked == false) wall.checked = true;
  }
  
  wall.onclick = function(e){
    if(wall.checked == false) ground.checked = true
  }
  
  wrap.onclick = function(e){
    wrapenabled = wrap.checked;
  }

  // Data arrays for wall and ground puzzle
  dw = [];
  dg = [];
    
  // Reset and resize the snake (when the snake size range changes)
  snakesize.onchange =
  snakesize.oninput = function(e){
    
    // Update range indicator
    snakeval.innerHTML = snakelength = +snakesize.value;
    resetsnake();
  }
  
  /////////////////////////////////////////////////////////////////////////////
  
  // Editor
  
  // Grids size (in numbers of cells squared)
  size = 5;
  
  // Resize the grid
  // Called on load, on reset and when the grid size input is changed
  // This also resizes the snake (so it can fit in the cells)
  reset.onclick =
  gridsize.onchange =
  gridsize.oninput =
  resizegrid = 
  function(e){
    
    // Update range indicator (z = value)
    gridval.innerHTML = size = +gridsize.value;
 
    // Compute cells size (in %)
    var cellsize = 100 / size;
    
    // Reset grids (html and data)
    down.innerHTML = '';
    back.innerHTML = '';
    whtml = '';
    ghtml = '';
    dw = [];
    dg = [];
    for(i = 0; i < size; i++){
      dw[i] = [];
      dg[i] = [];
      for(j = 0; j < size; j++){
        dw[i][j] = 0;
        dg[i][j] = 0;
      }
    }
    
    // Fill grids HTML
    for(i = 0; i < size; i++){
      for(j = 0; j < size; j++){
        whtml += `<div class=cell id=w${i}${j} style='width:${cellsize}%;padding-top:${cellsize}%' onmousedown='paint(${i},${j},this,0)' onmousemove='paint(${i},${j},this,0,1)'></div>`;
        ghtml += `<div class=cell id=g${i}${j} style='width:${cellsize}%;padding-top:${cellsize}%' onmousedown='paint(${i},${j},this,1)' onmousemove='paint(${i},${j},this,1,1)'></div>`;
      }
    }
    down.innerHTML += ghtml;
    back.innerHTML += whtml;
    
    // Resize and place snake at the right place
    resetsnake();
    movesnake();
  }
  
  // Initialize the grid (with size 5)
  resizegrid();
  
  // On click on a call, toggle its color
  // On mousedown + mousemove, paint it in black
  // Params: i, j (coords), this (current cell), ground (1 = ground, 0 = wall), force (1 = mousemove, 0 = click)
  paint = function(i,j,t,g,f){
    
    // Do nothing in playing mode 
    if(playing) return;
    
    // Choose ground or wall
    var d = g ? dg : dw;
    
    // Force
    if(f && mousedown) d[i][j] = 1;
    
    // Toggle
    if(!f) d[i][j] ^= 1;
    
    // Update CSS
    t.style.background = d[i][j] ? "#000" : "#fff";
  };

  
  // Share a puzzle
  // Generates an url with the hash "#gridsize,snakesize,wrap,wall,ground".
  print = function(a){
    var r = "";
    for(i in a){
      for(j in a[i]){
        r += a[i][j];
      }
    }
    return r;
  }

  share.onclick = function(){
    var r = [];
    r.push(size)
    r.push(snakesize.value);
    r.push(wrap.checked ? 1 : 0);
    r.push(wall.checked ? print(dw) : '')
    r.push(ground.checked ? print(dg) : '')
    prompt("Share this link:", location + "#" + r);
  }
  
  // Mouse inputs
  // update mousedown flag
  mousedown = 0;
  onmousedown = function(e) {
    mousedown = 1;
  }
  
  onmouseup = function(e){
    mousedown = 0;
  }
  
  // Ignore all drag events
  ondragstart = function(e){
    e.preventDefault();
  }

  // playing
  playing = puzzling = 0;
  test.onclick = function(){
    playing = puzzling = 1;
    b.className = "editor playing";
  }
  
  // Quit
  quit.onclick = function(){
    
    // Quit playing
    if(playing){
      playing = puzzling = 0;
      b.className = "editor";
      resetsnake();
      checkgrid();
    }
    
    // Quit editor
    else {
      location = "index.html"
    }
  }
  
  // DEBUG
  
  // Camera rotation
  move_scene = function(){
    scene.style.transform = "rotateX(38deg)translateX(-18vh)rotateZ(" + rot + "rad)";
  }
  move_scene();
}
