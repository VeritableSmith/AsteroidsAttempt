/**
 *  handleShipAnimation moves the ship based on its direction and
 *    keyboard control
 *
 */

var particleFX = [];
var score = 0;
function handleShipAnimationO() {

  if(SPACE_SHIP.rotation > 180) {SPACE_SHIP.rotation-=360;}
  else if(SPACE_SHIP.rotation < -180) {SPACE_SHIP.rotation+=360;}
  if(SPACE_SHIP.rotationM >180) {SPACE_SHIP.rotationM-=360;}
  else if(SPACE_SHIP.rotationM < -180) {SPACE_SHIP.rotationM+=360;}


    if(SPACE_SHIP.rotation != SPACE_SHIP.rotationM) {
        if(
          (SPACE_SHIP.rotation < SPACE_SHIP.rotationM && Math.abs(SPACE_SHIP.rotationM-SPACE_SHIP.rotation) < 180) ||
          (SPACE_SHIP.rotation > SPACE_SHIP.rotationM && Math.abs(SPACE_SHIP.rotationM-SPACE_SHIP.rotation) > 180))
          {
            SPACE_SHIP.rotationM-=(
          Math.abs(SPACE_SHIP.rotation-SPACE_SHIP.rotationM)/200);}
        else {SPACE_SHIP.rotationM+=(
          Math.abs(SPACE_SHIP.rotation-SPACE_SHIP.rotationM)/200);}

          //Checks proper direction of rotation
          if(
            (SPACE_SHIP.rotation < SPACE_SHIP.rotationM && Math.abs(SPACE_SHIP.rotationM-SPACE_SHIP.rotation) < 180) ||
            (SPACE_SHIP.rotation > SPACE_SHIP.rotationM && Math.abs(SPACE_SHIP.rotationM-SPACE_SHIP.rotation) > 180))
            {
              //Determines magnitude of rotation based on difference in Rotation and RotationM

              if (Math.abs(SPACE_SHIP.rotationM-SPACE_SHIP.rotation)>90) {
                SPACE_SHIP.rotationM-=Math.abs(SPACE_SHIP.rotation-SPACE_SHIP.rotationM)/20;
              }
              else if (Math.abs(SPACE_SHIP.rotationM-SPACE_SHIP.rotation)>60) {
                SPACE_SHIP.rotationM-=Math.abs(SPACE_SHIP.rotation-SPACE_SHIP.rotationM)/40;
              }
              else if(Math.abs(SPACE_SHIP.rotationM-SPACE_SHIP.rotation)>30) {
            SPACE_SHIP.rotationM-=Math.abs(SPACE_SHIP.rotation-SPACE_SHIP.rotationM)/100;}
            else {
              SPACE_SHIP.rotationM-=1;
            }
          }
          else {
            //Determines magnitude of rotation based on difference in Rotation and RotationM

            if (Math.abs(SPACE_SHIP.rotationM-SPACE_SHIP.rotation)>90) {
              SPACE_SHIP.rotationM+=Math.abs(SPACE_SHIP.rotation-SPACE_SHIP.rotationM)/20;
            }
            else if (Math.abs(SPACE_SHIP.rotationM-SPACE_SHIP.rotation)>60) {
              SPACE_SHIP.rotationM+=Math.abs(SPACE_SHIP.rotation-SPACE_SHIP.rotationM)/40;
            }
            else if(Math.abs(SPACE_SHIP.rotationM-SPACE_SHIP.rotation)>30) {
            SPACE_SHIP.rotationM+=Math.abs(SPACE_SHIP.rotation-SPACE_SHIP.rotationM)/100;}
            else {
              SPACE_SHIP.rotationM+=1;
            }
      }
    }


    var radians = (Math.PI / 180) * SPACE_SHIP.rotationM,
        cos = Math.cos(radians),
        sin = Math.sin(radians);
    SPACE_SHIP.x += SPACE_SHIP.speed * sin;
    SPACE_SHIP.y +=  SPACE_SHIP.speed * cos;
    if (CONTROLS.ship.forward) {
      if(SPACE_SHIP.speed <3.5) {SPACE_SHIP.speed+=0.04;}
      if(SPACE_SHIP.rotation != SPACE_SHIP.rotationM) {
          if(
            (SPACE_SHIP.rotation < SPACE_SHIP.rotationM && Math.abs(SPACE_SHIP.rotationM-SPACE_SHIP.rotation) < 180) ||
            (SPACE_SHIP.rotation > SPACE_SHIP.rotationM && Math.abs(SPACE_SHIP.rotationM-SPACE_SHIP.rotation) > 180))
            {
              if (Math.abs(SPACE_SHIP.rotationM-SPACE_SHIP.rotation)>90) {
                SPACE_SHIP.rotationM-=Math.abs(SPACE_SHIP.rotation-SPACE_SHIP.rotationM)/15;
              }
              else if (Math.abs(SPACE_SHIP.rotationM-SPACE_SHIP.rotation)>60) {
                SPACE_SHIP.rotationM-=Math.abs(SPACE_SHIP.rotation-SPACE_SHIP.rotationM)/20;
              }
              else if(Math.abs(SPACE_SHIP.rotationM-SPACE_SHIP.rotation)>30) {
            SPACE_SHIP.rotationM-=Math.abs(SPACE_SHIP.rotation-SPACE_SHIP.rotationM)/60;}
            else {
              SPACE_SHIP.rotationM-=1;
            }
          }
          else {
            if (Math.abs(SPACE_SHIP.rotationM-SPACE_SHIP.rotation)>90) {
              SPACE_SHIP.rotationM+=Math.abs(SPACE_SHIP.rotation-SPACE_SHIP.rotationM)/15;
            }
            else if (Math.abs(SPACE_SHIP.rotationM-SPACE_SHIP.rotation)>60) {
              SPACE_SHIP.rotationM+=Math.abs(SPACE_SHIP.rotation-SPACE_SHIP.rotationM)/20;
            }
            else if(Math.abs(SPACE_SHIP.rotationM-SPACE_SHIP.rotation)>30) {
            SPACE_SHIP.rotationM+=Math.abs(SPACE_SHIP.rotation-SPACE_SHIP.rotationM)/60;}
            else {
              SPACE_SHIP.rotationM+=1;
            }
      }
    }
    }
    else {
      if(SPACE_SHIP.speed>1.6) {SPACE_SHIP.speed-=0.04;}
      else if(SPACE_SHIP.speed>0) {SPACE_SHIP.speed-=0.005;}
    }
  /*if (CONTROLS.ship.backward) {
    if(SPACE_SHIP.speed>-2) {SPACE_SHIP.speed-=0.05;}
  }
  else {
    if(SPACE_SHIP.speed<-1) {SPACE_SHIP.speed+=0.05;}
    else if(SPACE_SHIP.speed<0) {SPACE_SHIP.speed+=0.01;}
  }*/
  if (CONTROLS.ship.rotateClockwise) {
    SPACE_SHIP.rotation -= 3;
    //if(CONTROLS.ship.forward) {
      if(SPACE_SHIP.speed>0.5) {SPACE_SHIP.speed-=0.02};
    //}
  }
  if (CONTROLS.ship.rotateCounterClockwise) {
    SPACE_SHIP.rotation += 3;
    //if(CONTROLS.ship.forward) {
      if(SPACE_SHIP.speed>0.5) {SPACE_SHIP.speed-=0.02};
    //}
  }

  // Check if spaceship is leaving the boundary, if so, switch sides
  if (SPACE_SHIP.x > GAME.canvas.width) {
    SPACE_SHIP.x = 0;
  } else if (SPACE_SHIP.x < 0) {
    SPACE_SHIP.x = GAME.canvas.width;
  } else if (SPACE_SHIP.y > GAME.canvas.height) {
    SPACE_SHIP.y = 0;
  } else if (SPACE_SHIP.y < 0) {
    SPACE_SHIP.y = GAME.canvas.height;
  }
}


function handleShipAnimation(context) {
  /*
    Here I will define the values used in this method:
    - Rotation: The visual rotation of the ship
    - RotationM: The rotation of the movement of the ship

    Having two different rotation values allows for the ship to maintain its
    initial direction of motion while rotating along the same trajectory.
  */


  //Ensures that the Rotation and RotationM values stay within [-180, 180] (in degrees).
  if(SPACE_SHIP.rotation > 180) {SPACE_SHIP.rotation-=360;}
  else if(SPACE_SHIP.rotation < -180) {SPACE_SHIP.rotation+=360;}
  if(SPACE_SHIP.rotationM >180) {SPACE_SHIP.rotationM-=360;}
  else if(SPACE_SHIP.rotationM < -180) {SPACE_SHIP.rotationM+=360;}


  //RotationM approaches Rotation while the thruster is off
  if(SPACE_SHIP.rotation != SPACE_SHIP.rotationM) {
    //Detrmine direction to increment RotationM.
    var rotationMDirection;
    if((SPACE_SHIP.rotation > SPACE_SHIP.rotationM && Math.abs(SPACE_SHIP.rotation-SPACE_SHIP.rotationM) < 180) ||
       (SPACE_SHIP.rotation < SPACE_SHIP.rotationM && Math.abs(SPACE_SHIP.rotation-SPACE_SHIP.rotationM) > 180)) {
         rotationMDirection=1;
       }
    else {
         rotationMDirection=-1;
    }

    //Calculate the positive difference between the two rotation values
    var rotationDifference;
    if(SPACE_SHIP.rotation > SPACE_SHIP.rotationM) {
      if(SPACE_SHIP.rotation-SPACE_SHIP.rotationM<180) {
        rotationDifference=SPACE_SHIP.rotation-SPACE_SHIP.rotationM;
      }
      else {
        rotationDifference=Math.abs(SPACE_SHIP.rotation-Math.abs(SPACE_SHIP.rotationM));
      }
    }
    else {
      if(Math.abs(SPACE_SHIP.rotation-SPACE_SHIP.rotationM)<180) {
        rotationDifference=Math.abs(SPACE_SHIP.rotation-SPACE_SHIP.rotationM);
      }
      else {
        rotationDifference=Math.abs(Math.abs(SPACE_SHIP.rotation)-SPACE_SHIP.rotationM);
      }
    }


    //Apply the rotation increment to RotationM dependent on the difference in rotation values
    if(rotationDifference>120) {
      SPACE_SHIP.rotationM+=rotationMDirection*rotationDifference/10;
    }
    else if(rotationDifference>90) {
      SPACE_SHIP.rotationM+=rotationMDirection*rotationDifference/15;
    }
    else if(rotationDifference>60) {
      SPACE_SHIP.rotationM+=rotationMDirection*rotationDifference/75;
    }
    else if(rotationDifference>30) {
      SPACE_SHIP.rotationM+=rotationMDirection*rotationDifference/100;
    }
    else {
      SPACE_SHIP.rotationM+=rotationMDirection;
    }

  }


  //Activate thruster/Accelerate the ship
  if(CONTROLS.ship.forward) {
    if(SPACE_SHIP.speed<3.8) {SPACE_SHIP.speed+=0.035;}
  }
  else {
    if(SPACE_SHIP.speed>1.8) {SPACE_SHIP.speed-=0.03;}
    else if(SPACE_SHIP.speed>0) {SPACE_SHIP.speed-=0.005;}
  }


  //Updates the position of the spaceship
  var radians = (Math.PI / 180) * SPACE_SHIP.rotationM,
      cos = Math.cos(radians),
      sin = Math.sin(radians);
  SPACE_SHIP.x += SPACE_SHIP.speed * sin;
  SPACE_SHIP.y +=  SPACE_SHIP.speed * cos;


  //RotationM approaches Rotation while the thurster is on
  if(CONTROLS.ship.forward && SPACE_SHIP.rotation != SPACE_SHIP.rotationM) {
    //Detrmine direction to increment RotationM.
    var rotationMDirection;
    if((SPACE_SHIP.rotation > SPACE_SHIP.rotationM && Math.abs(SPACE_SHIP.rotation-SPACE_SHIP.rotationM) < 180) ||
       (SPACE_SHIP.rotation < SPACE_SHIP.rotationM && Math.abs(SPACE_SHIP.rotation-SPACE_SHIP.rotationM) > 180)) {
         rotationMDirection=1;
       }
    else {
         rotationMDirection=-1;
    }

    //Calculate the positive difference between the two rotation values
    var rotationDifference;
    if(SPACE_SHIP.rotation > SPACE_SHIP.rotationM) {
      if(SPACE_SHIP.rotation-SPACE_SHIP.rotationM<180) {
        rotationDifference=SPACE_SHIP.rotation-SPACE_SHIP.rotationM;
      }
      else {
        rotationDifference=Math.abs(SPACE_SHIP.rotation-Math.abs(SPACE_SHIP.rotationM));
      }
    }
    else {
      if(Math.abs(SPACE_SHIP.rotation-SPACE_SHIP.rotationM)<180) {
        rotationDifference=Math.abs(SPACE_SHIP.rotation-SPACE_SHIP.rotationM);
      }
      else {
        rotationDifference=Math.abs(Math.abs(SPACE_SHIP.rotation)-SPACE_SHIP.rotationM);
      }
    }


    //Apply the rotation increment to RotationM dependent on the difference in rotation values
    if(rotationDifference>120) {
      SPACE_SHIP.rotationM+=rotationMDirection*rotationDifference/10;
    }
    else if(rotationDifference>90) {
      SPACE_SHIP.rotationM+=rotationMDirection*rotationDifference/15;
    }
    else if(rotationDifference>60) {
      SPACE_SHIP.rotationM+=rotationMDirection*rotationDifference/30;
    }
    else if(rotationDifference>30) {
      SPACE_SHIP.rotationM+=rotationMDirection*rotationDifference/60;
    }
    else {
      SPACE_SHIP.rotationM+=rotationMDirection;
    }
  }


  //Rotate the ship (Update Rotation) and decrease speed up to a certain value.
  if(CONTROLS.ship.rotateClockwise) {
    if(SPACE_SHIP.speed<2) {SPACE_SHIP.rotation -= 4;}
    else {SPACE_SHIP.rotation-=2.5;}
    if(SPACE_SHIP.speed>1) {SPACE_SHIP.speed-=0.015;}
  }
  if(CONTROLS.ship.rotateCounterClockwise) {
    if(SPACE_SHIP.speed<2) {SPACE_SHIP.rotation += 4;}
    else {SPACE_SHIP.rotation+=2.5;}
    if(SPACE_SHIP.speed>1) {SPACE_SHIP.speed-=0.015;}
  }


  //If the spaceship is leaving the boundary, it will switch sides, create a continuous game space.
  if (SPACE_SHIP.x > GAME.canvas.width) {
    SPACE_SHIP.x = 0;
  } else if (SPACE_SHIP.x < 0) {
    SPACE_SHIP.x = GAME.canvas.width;
  } else if (SPACE_SHIP.y > GAME.canvas.height) {
    SPACE_SHIP.y = 0;
  } else if (SPACE_SHIP.y < 0) {
    SPACE_SHIP.y = GAME.canvas.height;
  }
}

function handleBulletAnimation(context) {
  for(var i = 0; i < SPACE_SHIP.bullets.length; i++) {

    var radians = (Math.PI / 180) * SPACE_SHIP.bullets[i].rotation,
        cos = Math.cos(radians),
        sin = Math.sin(radians);
    SPACE_SHIP.bullets[i].x += SPACE_SHIP.speedB * sin;
    SPACE_SHIP.bullets[i].y +=  SPACE_SHIP.speedB * cos;

    SPACE_SHIP.bullets[i].distanceTraveled+=
    Math.abs(SPACE_SHIP.speedB*sin) + Math.abs(SPACE_SHIP.speedB*cos);

    if (SPACE_SHIP.bullets[i].x > GAME.canvas.width) {
      SPACE_SHIP.bullets[i].x = 0;
    } else if (SPACE_SHIP.bullets[i].x < 0 && SPACE_SHIP.bullets[i].x > -15) {
      SPACE_SHIP.bullets[i].x = GAME.canvas.width;
    } else if (SPACE_SHIP.bullets[i].y > GAME.canvas.height) {
      SPACE_SHIP.bullets[i].y = 0;
    } else if (SPACE_SHIP.bullets[i].y < 0) {
      SPACE_SHIP.bullets[i].y = GAME.canvas.height;
    }
  }


    if(SPACE_SHIP.bullets.length>0) {
      SPACE_SHIP.bullets.reverse();
      if(SPACE_SHIP.bullets[SPACE_SHIP.bullets.length-1].distanceTraveled>(GAME.canvas.width+GAME.canvas.height)/3+80){
        SPACE_SHIP.bullets.pop();
      }
      SPACE_SHIP.bullets.reverse();
    }

  if(CONTROLS.fire.lastFireTime > 0) {CONTROLS.fire.lastFireTime-=1}

    if(CONTROLS.fire.active) {
      if(CONTROLS.fire.lastFireTime == 0) {
      var radiansB = (Math.PI / 180) * SPACE_SHIP.rotation,
          cos = Math.cos(radiansB-(Math.PI/2)),
          sin = Math.sin(radiansB-(Math.PI/2));
      SPACE_SHIP.bullets.push(
        new Bullet(SPACE_SHIP.x+(2*SPACE_SHIP.scale*cos)-1.5,
        SPACE_SHIP.y-(2*SPACE_SHIP.scale*sin)-3,
        SPACE_SHIP.rotation)
      );
      CONTROLS.fire.lastFireTime=30;
    }
  }
  else {
    if(CONTROLS.fire.lastFireTime>0&&CONTROLS.fire.lastFireTime%3==0) {CONTROLS.fire.lastFireTime-=3;}
    else if(CONTROLS.fire.lastFireTime>0) {CONTROLS.fire.lastFireTime-=1;}
  }
}

function Bullet(x, y, rotation) {
  this.x=x;
  this.y=y;
  this.distanceTraveled=0;
  this.rotation=rotation;
}

function RenderBullets(context) {
context.fillStyle = "white";
  for(var i = 0; i < SPACE_SHIP.bullets.length; i++) {
    //context.arc(SPACE_SHIP.bullets[i].x, SPACE_SHIP.bullets[i].y, 1, 0, 5, false);
    context.fillRect(SPACE_SHIP.bullets[i].x, SPACE_SHIP.bullets[i].y, 3, 3);
  }
}




var lastAsteroidTime = 0;

function handleAsteroidsAnimation() {

  for(var i = 0; i < ASTEROIDS.asteroids.length; i++) {
    var radians = (Math.PI / 180) * ASTEROIDS.asteroids[i].rotation,
        cos = Math.cos(radians),
        sin = Math.sin(radians);
    ASTEROIDS.asteroids[i].x += ASTEROIDS.asteroids[i].speed * sin;
    ASTEROIDS.asteroids[i].y += ASTEROIDS.asteroids[i].speed * cos;

    if (ASTEROIDS.asteroids[i].x > GAME.canvas.width) {
      ASTEROIDS.asteroids[i].x = 0;
    } else if (ASTEROIDS.asteroids[i].x < 0 && ASTEROIDS.asteroids[i].x>-10) {
      ASTEROIDS.asteroids[i].x = GAME.canvas.width;
    } else if (ASTEROIDS.asteroids[i].y > GAME.canvas.height) {
      ASTEROIDS.asteroids[i].y = 0;
    } else if (ASTEROIDS.asteroids[i].y < 0) {
      ASTEROIDS.asteroids[i].y = GAME.canvas.height;
    }
}


  if(ASTEROIDS.asteroids.length>0) {
    if( ASTEROIDS.asteroids[0].x<0 || ASTEROIDS.asteroids[0].x > GAME.canvas.width ||
        ASTEROIDS.asteroids[0].y<0 || ASTEROIDS.asteroids[0].y > GAME.canvas.height) {
    ASTEROIDS.asteroids.reverse();
    ASTEROIDS.asteroids.pop();
    ASTEROIDS.asteroids.reverse();
  }

}
  if(lastAsteroidTime > 0 && ASTEROIDS.asteroids.length < 11) {lastAsteroidTime-=1;}
  else if (ASTEROIDS.asteroids.length < 8) {
      var ay, ax;
      if(Math.random() > 0.5) {
        if(Math.random() > 0.5) {ay=0;} else {ay=GAME.canvas.height;}
        ax = Math.ceil(Math.random()*GAME.canvas.width);
      }
      else {
        if(Math.random() > 0.5) {ax=0;} else {ax=GAME.canvas.width;}
        ay = Math.ceil(Math.random()*GAME.canvas.height);
      }

      var typeRand = Math.floor(Math.random()*7);
      var typeSet=-1;
      if(typeRand>=5) {typeSet=2;}
      else if(typeRand>=2) {typeSet=1;}
      else {typeSet=0;}

      ASTEROIDS.asteroids.push(new Asteroid(ax, ay, Math.floor(Math.random()*180), typeSet));
      lastAsteroidTime=30+Math.ceil(Math.random()*45);
    }
}

function Asteroid(x, y, rotation, type) {
  this.x=x;
  this.y=y;
  this.rotation=rotation;
  this.type=type;

  this.speed=0;
  if(type==0) {this.speed=0.15*(4+Math.ceil(Math.random()*4));}
  else if(type==1) {this.speed=0.04*(3+Math.ceil(Math.random()*3));}
  else if(type==2) {this.speed=0.01*(1+Math.ceil(Math.random()*3));}
}

function RenderAsteroids(context) {
  for(var i = 0; i < ASTEROIDS.asteroids.length; i++) {
    if(ASTEROIDS.asteroids[i].type==0) {
      RenderAsteroidT0(i, context);
    }
    else if(ASTEROIDS.asteroids[i].type==1) {
      RenderAsteroidT1(i, context);
    }
    else if(ASTEROIDS.asteroids[i].type==2) {
      RenderAsteroidT2(i, context);
    }
    else {}
  }
}

function RenderAsteroidT0(index, context) {
  context.strokeStyle='white';
  var rotatedPoint = RotateAroundOrigin(
    ASTEROIDS.positionsT0[0].x,
    ASTEROIDS.positionsT0[0].y,
    ASTEROIDS.asteroids[index].rotation
  );
  context.moveTo(ASTEROIDS.asteroids[index].x + rotatedPoint[0],ASTEROIDS.asteroids[index].y +  rotatedPoint[1]);
  ASTEROIDS.asteroids[index].x = ASTEROIDS.asteroids[index].x + rotatedPoint[0];
  ASTEROIDS.asteroids[index].y = ASTEROIDS.asteroids[index].y + rotatedPoint[1];
  // Begin rendering the asteroid points (rotating them each time)
  context.beginPath();
  for (var i = 0; i < ASTEROIDS.positionsT0.length; i++) {
    var rotatedPoint = RotateAroundOrigin(
      ASTEROIDS.positionsT0[i].x,
      ASTEROIDS.positionsT0[i].y,
      ASTEROIDS.asteroids[index].rotation
    );
    context.lineTo(
      ASTEROIDS.asteroids[index].x + (rotatedPoint[0] * ASTEROIDS.scale),
      ASTEROIDS.asteroids[index].y + (rotatedPoint[1] * ASTEROIDS.scale)
    );
  }

    context.stroke();
}

function RenderAsteroidT1(index, context) {
  context.strokeStyle='white';
  var rotatedPoint = RotateAroundOrigin(
    ASTEROIDS.positionsT1[0].x,
    ASTEROIDS.positionsT1[0].y,
    ASTEROIDS.asteroids[index].rotation
  );
  context.moveTo(ASTEROIDS.asteroids[index].x + rotatedPoint[0],ASTEROIDS.asteroids[index].y +  rotatedPoint[1]);
  ASTEROIDS.asteroids[index].x = ASTEROIDS.asteroids[index].x + rotatedPoint[0];
  ASTEROIDS.asteroids[index].y = ASTEROIDS.asteroids[index].y + rotatedPoint[1];
  // Begin rendering the asteroid points (rotating them each time)
  context.beginPath();
  for (var i = 0; i < ASTEROIDS.positionsT1.length; i++) {
    var rotatedPoint = RotateAroundOrigin(
      ASTEROIDS.positionsT1[i].x,
      ASTEROIDS.positionsT1[i].y,
      ASTEROIDS.asteroids[index].rotation
    );
    context.lineTo(
      ASTEROIDS.asteroids[index].x + (rotatedPoint[0] * 2.5 *ASTEROIDS.scale),
      ASTEROIDS.asteroids[index].y + (rotatedPoint[1] * 2.5 *ASTEROIDS.scale)
    );
  }

    context.stroke();
}

function RenderAsteroidT2(index, context) {
  context.strokeStyle='white';
  var rotatedPoint = RotateAroundOrigin(
    ASTEROIDS.positionsT2[0].x,
    ASTEROIDS.positionsT2[0].y,
    ASTEROIDS.asteroids[index].rotation
  );
  context.moveTo(ASTEROIDS.asteroids[index].x + rotatedPoint[0],ASTEROIDS.asteroids[index].y +  rotatedPoint[1]);
  ASTEROIDS.asteroids[index].x = ASTEROIDS.asteroids[index].x + rotatedPoint[0];
  ASTEROIDS.asteroids[index].y = ASTEROIDS.asteroids[index].y + rotatedPoint[1];
  // Begin rendering the asteroid points (rotating them each time)
  context.beginPath();
  for (var i = 0; i < ASTEROIDS.positionsT2.length; i++) {
    var rotatedPoint = RotateAroundOrigin(
      ASTEROIDS.positionsT2[i].x,
      ASTEROIDS.positionsT2[i].y,
      ASTEROIDS.asteroids[index].rotation
    );
    context.lineTo(
      ASTEROIDS.asteroids[index].x + (rotatedPoint[0] * 4 * ASTEROIDS.scale),
      ASTEROIDS.asteroids[index].y + (rotatedPoint[1] * 4 * ASTEROIDS.scale)
    );
  }

    context.stroke();
}


function checkBulletCollision() {
  for(var b = 0; b < SPACE_SHIP.bullets.length; b++) {
    var collision = false;
    for(var a = 0; a < ASTEROIDS.asteroids.length; a++) {
      if(!collision) {
      if(ASTEROIDS.asteroids[a].type==0) {
        if(Math.sqrt(Math.pow(SPACE_SHIP.bullets[b].x-ASTEROIDS.asteroids[a].x,2) +
                  Math.pow(SPACE_SHIP.bullets[b].y-ASTEROIDS.asteroids[a].y, 2))<10) {
          // The best way I could think of for removing the objects in the collision.
          explode(ASTEROIDS.asteroids[a]);
          SPACE_SHIP.bullets.splice(b, 1);
          ASTEROIDS.asteroids.splice(a, 1);
          collision=true;
          score+=100;
        }

      }
      else if(ASTEROIDS.asteroids[a].type==1) {
        if(Math.sqrt(Math.pow(SPACE_SHIP.bullets[b].x-ASTEROIDS.asteroids[a].x,2) +
                  Math.pow(SPACE_SHIP.bullets[b].y-ASTEROIDS.asteroids[a].y, 2))<25) {
          // The best way I could think of for removing the objects in the collision.
          for(var i = 0; i < 2; i++) {
            ASTEROIDS.asteroids.push(new Asteroid(ASTEROIDS.asteroids[a].x, ASTEROIDS.asteroids[a].y,
              ASTEROIDS.asteroids[a].rotation-60+Math.floor(Math.random()*120), 0));
          }
          explode(ASTEROIDS.asteroids[a]);
          SPACE_SHIP.bullets.splice(b, 1);
          ASTEROIDS.asteroids.splice(a, 1);
          collision=true;
          score+=200;
        }

      }
      else if(ASTEROIDS.asteroids[a].type==2) {
        if(Math.sqrt(Math.pow(SPACE_SHIP.bullets[b].x-ASTEROIDS.asteroids[a].x,2) +
                  Math.pow(SPACE_SHIP.bullets[b].y-ASTEROIDS.asteroids[a].y, 2))<38) {
          // The best way I could think of for removing the objects in the collision.

          for(var i = 0; i < 2; i++) {
            ASTEROIDS.asteroids.push(new Asteroid(ASTEROIDS.asteroids[a].x, ASTEROIDS.asteroids[a].y,
              ASTEROIDS.asteroids[a].rotation-60+Math.floor(Math.random()*120), 1));
          }
          explode(ASTEROIDS.asteroids[a]);
          SPACE_SHIP.bullets.splice(b, 1);
          ASTEROIDS.asteroids.splice(a, 1);
          collision=true;
          score+=400;
        }

      }
}
    }
  }
}


function checkAsteroidCollision() {
  for(var p = 0; p < SPACE_SHIP.positions.length; p++) {
    var sx = SPACE_SHIP.x+SPACE_SHIP.scale*SPACE_SHIP.positions[p].x;
    var sy = SPACE_SHIP.y+SPACE_SHIP.scale*SPACE_SHIP.positions[p].y;

    if(GAME.started) {
    for(var a = 0; a < ASTEROIDS.asteroids.length; a++) {
      if(ASTEROIDS.asteroids[a].type==0) {
        if(Math.sqrt(Math.pow(sx-ASTEROIDS.asteroids[a].x,2) +
                  Math.pow(sy-ASTEROIDS.asteroids[a].y, 2))<10) {
          // The best way I could think of for removing the objects in the collision.
          explode(ASTEROIDS.asteroids[a]);
          ASTEROIDS.asteroids.splice(a, 1);
          GAME.started=false;
          score+=100;
        }

      }
      else if(ASTEROIDS.asteroids[a].type==1) {
        if(Math.sqrt(Math.pow(sx-ASTEROIDS.asteroids[a].x,2) +
                  Math.pow(sy-ASTEROIDS.asteroids[a].y, 2))<24) {
          // The best way I could think of for removing the objects in the collision.
          for(var i = 0; i < 2; i++) {
            ASTEROIDS.asteroids.push(new Asteroid(ASTEROIDS.asteroids[a].x, ASTEROIDS.asteroids[a].y,
              ASTEROIDS.asteroids[a].rotation-60+Math.floor(Math.random()*120), 0));
          }
          explode(ASTEROIDS.asteroids[a]);
          ASTEROIDS.asteroids.splice(a, 1);
          GAME.started=false;
          score+=200;
        }

      }
      else if(ASTEROIDS.asteroids[a].type==2) {
        if(Math.sqrt(Math.pow(sx-ASTEROIDS.asteroids[a].x,2) +
                  Math.pow(sy-ASTEROIDS.asteroids[a].y, 2))<38) {
          // The best way I could think of for removing the objects in the collision.

          for(var i = 0; i < 2; i++) {
            ASTEROIDS.asteroids.push(new Asteroid(ASTEROIDS.asteroids[a].x, ASTEROIDS.asteroids[a].y,
              ASTEROIDS.asteroids[a].rotation-60+Math.floor(Math.random()*120), 1));
          }
          explode(ASTEROIDS.asteroids[a]);
          ASTEROIDS.asteroids.splice(a, 1);
          GAME.started=false;
          score+=400;
        }

      }
    }
  }
}
}



function handleExplosionFXAnimation() {
  for(var i = 0; i < particleFX.length; i++) {
    var radians = (Math.PI / 180) * particleFX[i].rotation,
        cos = Math.cos(radians),
        sin = Math.sin(radians);
    particleFX[i].x += particleFX[i].speed * sin;
    particleFX[i].y +=  particleFX[i].speed * cos;

    particleFX[i].distanceTraveled+=
    Math.abs(particleFX[i].speed * sin) + Math.abs(particleFX[i].speed * cos);

    if(particleFX[i].distanceTraveled>50) {
      particleFX.splice(i, 1);
    }
  }
}

function RenderExplosionFX(context) {
  context.fillStyle='white';
  for(var i = 0; i < particleFX.length; i++) {
    context.fillRect(particleFX[i].x, particleFX[i].y, 2, 2);
  }
}

function explode(asteroid) {
  for(var i = 0; i < asteroid.type+4+Math.floor(Math.random()*4); i++) {
    particleFX.push(new Particle(asteroid.x, asteroid.y, asteroid.rotation-60+Math.floor(Math.random()*120)));
  }
}

function Particle(x, y, rotation) {
  this.x = x;
  this.y=y;
  this.rotation=rotation;
  this.distanceTraveled=0;
  this.speed=Math.ceil(Math.random()*3);
}



function displayScore(context) {
  context.fill='white';
  context.font="18px Arial";
  context.fillText("SCORE: " + score, 5, 20);
}

function runGame() {
  var canvas = document.getElementById('mainCanvas');
  var context = canvas.getContext('2d');
  if (GAME.started) {

    // 1 - Reposition the objects
    handleShipAnimation();
    handleBulletAnimation();
    handleAsteroidsAnimation();
    handleExplosionFXAnimation();

    // 2 - Check collisions
    checkBulletCollision();
    checkAsteroidCollision();


    // 2 - Clear the CANVAS
    context.clearRect(0, 0, 800, 600);

    context.fillStyle='black';
    context.fillRect(0, 0, GAME.canvas.width, GAME.canvas.height);

    // 3 - Draw new items
    RenderSpaceship(context);
    RenderBullets(context);
    RenderAsteroids(context);
    RenderExplosionFX(context);
    //RenderAsteroids(context);

    displayScore(context);

  } else {
    context.font = "30px Arial";
    context.fillText("Game Over", GAME.canvas.width/2-75, GAME.canvas.height/2-30);
  }
  window.requestAnimationFrame(runGame);
}

window.requestAnimationFrame(runGame);
