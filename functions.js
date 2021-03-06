var image=null;
var canvas=document.getElementById("can");
var forred=null;
var forgray=null;
var forrain=null;
var forrainbow=null;
var forblur=null;
var forbright=null;
var forsepia=null;

function upload()
{var finput=document.getElementById("up1");
  image=new SimpleImage(finput);
 forred=image;
 forgray=image;
 forrain=image;
 forrainbow=image;
 forblur=image;
 forbright=image;
 forsepia=image;
  image.drawTo(canvas);
}

function filterGray()
{ for(var pixel of forgray.values())
   {
     var avg= (pixel.getRed()+pixel.getBlue()+pixel.getGreen())/3;
     pixel.setRed(avg);
     pixel.setGreen(avg);
     pixel.setBlue(avg);
   }  
}

function imageisloaded(img)
{
if(img==null||!img.complete())
   { alert("Image not yet loaded");
    return false;
   }
 else
   return true;
}

function doGray() {
  if (imageisloaded(forgray)) 
  {
    filterGray();	    
    forgray.drawTo(canvas);
  }
}

function reset()
{
  if(image==null||!image.complete())
  alert("Image not yet loaded");
 else   
 { console.log("mmm");
  image.drawTo(canvas);
upload();
  //var context=canvas.getContext("2d");
  //context.clearRect(0,0,canvas.width,canvas.height);
 }
}

function filterred()
{
  for(var pixel of forred.values())
    {
      var avg=(pixel.getRed()+pixel.getBlue()+pixel.getGreen())/3;
      if(avg<128) //refer to https://d3c33hcgiwev3.cloudfront.net/_f7bd35e0b797fcadd6fece4d90f9dc4b_Red-filter-algorithm.pdf?Expires=1589241600&Signature=AK8Pr52-NP5qxG8b2x1pOLcnCgdbziEwIjkr4Uzx5aXuBgbB5g5PB67ZsXp6wbgW9Ht7TKng5gfZTGWhAFLheMaWw4DRMhvTG9zyi5hD4pprJ6JIB1iQ32cLRD4SfAidjoNnYeFK0680kDJpIS3CQuGSznjxjDbtW6S5uYjL5Fs_&Key-Pair-Id=APKAJLTNE6QMUY6HBC5A
        {
          pixel.setRed(2*avg);
          pixel.setBlue(0);
          pixel.setGreen(0);
        }
      else
      {pixel.setRed(255);
          pixel.setBlue(2*avg-255);
          pixel.setGreen(2*avg-255);
       }
    }
}

function doRed() {
  if (imageisloaded(forred)) 
  {
    filterred();	    
    forred.drawTo(canvas);
  }
}

function horizontalfilterrainbow()
{var f=forrainbow.getHeight()/7;
  for(var pixel of forrainbow.values())
    {var x=pixel.getY()
     var avg=(pixel.getRed()+pixel.getBlue()+pixel.getGreen())/3;
      if(x<f)
        { if(avg<128)
         {pixel.setRed(2*avg);
          pixel.setBlue(0);
          pixel.setGreen(0);}
         else
         {pixel.setRed(2*avg);
          pixel.setBlue(2*avg-255);
          pixel.setGreen(2*avg-255);}
        }
     if(x>f&&x<2*f)
        { if(avg<128)
         {pixel.setRed(2*avg);
          pixel.setBlue(0.8*avg);
          pixel.setGreen(0);}
         else
         {pixel.setRed(255);
          pixel.setBlue(1.2*avg-51);
          pixel.setGreen(2*avg-255);}
        }
     if(x>2*f&&x<3*f)
        { if(avg<128)
         {pixel.setRed(2*avg);
          pixel.setBlue(2*avg);
          pixel.setGreen(0);}
         else
         {pixel.setRed(255);
          pixel.setBlue(255);
          pixel.setGreen(2*avg-255);}
        }
     if(x>3*f&&x<4*f)
        { if(avg<128)
         {pixel.setRed(0);
          pixel.setBlue(2*avg);
          pixel.setGreen(0);}
         else
         {pixel.setRed(2*avg-255);
          pixel.setBlue(255);
          pixel.setGreen(2*avg-255);}
        }
     if(x>4*f&&x<5*f)
        { if(avg<128)
         {pixel.setRed(0);
          pixel.setBlue(0);
          pixel.setGreen(2*avg);}
         else
          { pixel.setRed(2*avg-255);
          pixel.setBlue(2*avg-255);
          pixel.setGreen(255);}
        }
     if(x>5*f&&x<6*f)
        { if(avg<128)
         {pixel.setRed(0.8*avg);
          pixel.setBlue(0);
          pixel.setGreen(2*avg);}
         else
          { pixel.setRed(1.2*avg-51);
          pixel.setBlue(2*avg-255);
          pixel.setGreen(255);}
        }
     if(x>6*f&&x<7*f)
        { if(avg<128)
         {pixel.setRed(1.6*avg);
          pixel.setBlue(0);
          pixel.setGreen(1.6*avg);}
         else
          { pixel.setRed(0.4*avg+153);
          pixel.setBlue(2*avg-255);
          pixel.setGreen(0.4*avg+153);}
        }
    }
}

function verticalfilterrainbow()
{var f=forrainbow.getWidth()/7;
  for(var pixel of forrainbow.values())
    {var x=pixel.getX()
     var avg=(pixel.getRed()+pixel.getBlue()+pixel.getGreen())/3;
      if(x<f)
        { if(avg<128)
         {pixel.setRed(2*avg);
          pixel.setBlue(0);
          pixel.setGreen(0);}
         else
         {pixel.setRed(2*avg);
          pixel.setBlue(2*avg-255);
          pixel.setGreen(2*avg-255);}
        }
     if(x>f&&x<2*f)
        { if(avg<128)
         {pixel.setRed(2*avg);
          pixel.setBlue(0.8*avg);
          pixel.setGreen(0);}
         else
         {pixel.setRed(255);
          pixel.setBlue(1.2*avg-51);
          pixel.setGreen(2*avg-255);}
        }
     if(x>2*f&&x<3*f)
        { if(avg<128)
         {pixel.setRed(2*avg);
          pixel.setBlue(2*avg);
          pixel.setGreen(0);}
         else
         {pixel.setRed(255);
          pixel.setBlue(255);
          pixel.setGreen(2*avg-255);}
        }
     if(x>3*f&&x<4*f)
        { if(avg<128)
         {pixel.setRed(0);
          pixel.setBlue(2*avg);
          pixel.setGreen(0);}
         else
         {pixel.setRed(2*avg-255);
          pixel.setBlue(255);
          pixel.setGreen(2*avg-255);}
        }
     if(x>4*f&&x<5*f)
        { if(avg<128)
         {pixel.setRed(0);
          pixel.setBlue(0);
          pixel.setGreen(2*avg);}
         else
          { pixel.setRed(2*avg-255);
          pixel.setBlue(2*avg-255);
          pixel.setGreen(255);}
        }
     if(x>5*f&&x<6*f)
        { if(avg<128)
         {pixel.setRed(0.8*avg);
          pixel.setBlue(0);
          pixel.setGreen(2*avg);}
         else
          { pixel.setRed(1.2*avg-51);
          pixel.setBlue(2*avg-255);
          pixel.setGreen(255);}
        }
     if(x>6*f&&x<7*f)
        { if(avg<128)
         {pixel.setRed(1.6*avg);
          pixel.setBlue(0);
          pixel.setGreen(1.6*avg);}
         else
          { pixel.setRed(0.4*avg+153);
          pixel.setBlue(2*avg-255);
          pixel.setGreen(0.4*avg+153);}
        }
    }
}

function doRainbow() {
  if (imageisloaded(forrainbow)) 
  {var choice = prompt("Vertical or Horizontal design?");
   
   if(choice=="vertical"||choice=="Vertical")
    verticalfilterrainbow();	
   else
      if(choice=="horizontal"||choice=="Horizontal")
    horizontalfilterrainbow();	
    forrainbow.drawTo(canvas);
  }
}

function filterblur()
{
  var w=forblur.getWidth();
  var h=forblur.getHeight();
   var offset=10;
  for(var pixel of forblur.values())
    {
      var x=pixel.getX();
      var y=pixel.getY();
      var random=Math.random();
      
      if(random<0.5)
      {forblur.setPixel(x,y,pixel);}
      else
        {
          var x1= Math.floor(Math.random()*offset);
           var y1= Math.floor(Math.random()*offset);
          
          if(x1>w-1)
            x1=w-1;
          if(y1>h-1)
            y1=h-1;
         
          var io=forblur.getPixel(x1,y1);
          forblur.setPixel(x,y,io);
          
        }
    }
}

function doblur() 
{
  if (imageisloaded(forblur)) 
  {
    filterblur();	    
    forblur.drawTo(canvas);
  }
}

function brightnessrange()
{
 var inp=document.getElementById("slider");
 var sz=inp.value;
  for(var pixel of forbright.values())
   {
     pixel.setRed(pixel.getRed()+sz);
     pixel.setGreen(pixel.getGreen()+sz);
     pixel.setBlue(pixel.getBlue()+sz);
   }  
  forbright.drawTo(canvas);
}

function filtersepia()
{
  for(var pixel of forsepia.values())
   {
   var tr = 0.393*pixel.getRed() + 0.769*pixel.getGreen() + 0.189*pixel.getBlue();
   var tg = 0.349*pixel.getRed()+ 0.686*pixel.getGreen()+ 0.168*pixel.getBlue();
   var tb = 0.272*pixel.getRed()+ 0.534*pixel.getGreen()+ 0.131*pixel.getBlue();
     
     if(tr>255)
     pixel.setRed(255);
     else
     pixel.setRed(tr);
     
     if(tg>255)
     pixel.setGreen(255);
     else
     pixel.setGreen(tg);
     
     if(tb>255)
     pixel.setBlue(255);
     else
     pixel.setBlue(tb);
    
   }  
}
function dosepia() 
{
  if (imageisloaded(forsepia)) 
  {
    filtersepia();	    
    forsepia.drawTo(canvas);
  }
}

function doborder()
{
  var dd1=document.getElementById("can");
  var inp=document.getElementById("ch1");
 var color=inp.value;
 dd1.style.borderColor=color; 
  
}
function download()
{
   var link = document.createElement('a');
  link.download = 'Composite_Image.png';
  link.href = document.getElementById('can').toDataURL(); //href is used to get location
  link.click();
}
