
function Spot(i, j) {
  // Location
  this.i = i;
  this.j = j;

  
  this.f = 0;
  this.g = 0;
  this.h = 0;

  // Neighbors
  this.neighbors = [];

 
  this.previous = undefined;

 var i=0;
  this.wall = false;
  if (random(1) < 0.3 ) {
    this.wall = true;
      i=i+1;
  }
    i=0;

  // Display me
  this.show = function(col) {
    if (this.wall&&i<10) {
      fill(0);
      noStroke();
     //rect(this.i * w, this.j * h, w, h);
         ellipse(this.i * w + w / 2, this.j * h + h / 2, w / 2, h / 2);
    } else if (col) {
      fill(col);
      rect(this.i * w, this.j * h, w, h);
    }
  };

  // Figure out who my neighbors are
  this.addNeighbors = function(grid) {
    var i = this.i;
    var j = this.j;
    if (i < cols - 1) {
      this.neighbors.push(grid[i + 1][j]);
    }
    if (i > 0) {
      this.neighbors.push(grid[i - 1][j]);
    }
    if (j < rows - 1) {
      this.neighbors.push(grid[i][j + 1]);
    }
    if (j > 0) {
      this.neighbors.push(grid[i][j - 1]);
    }
      
  };
}
