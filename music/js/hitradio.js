 window.onload =function(){
        var pic1 = document.getElementById('g_pic1');
        var pic2 = document.getElementById('g_pic2');
        var pic3 = document.getElementById('g_pic3');
        var txt1 = document.getElementById('g_t1');
        var txt2 = document.getElementById('g_t2');
        var button1  = document.getElementById('g_b1') ;
         var button2  = document.getElementById('g_b2') ;
         var button3  = document.getElementById('g_b3') ;
        
        txt1.onmouseover = function(){
            pic2.style.zIndex = 2;
           
        }
      txt1.onmouseout = function(){
           pic2.style.zIndex = 1;
       }
        
        txt2.onmouseover = function(){
            pic3.style.zIndex = 3;
        }
     txt2.onmouseout = function(){
           pic3.style.zIndex = 1;
       }
    
        button1.onmouseover = function(){
            pic1.style.zIndex = 1;
        }
      button1.onmouseout = function(){
           pic1.style.zIndex = 1;
       }
        button2.onmouseover = function(){
            pic2.style.zIndex = 2;
        }
      button2.onmouseout = function(){
           pic2.style.zIndex = 1;
       }
      button3.onmouseover = function(){
            pic3.style.zIndex = 3;
        }
      button3.onmouseout = function(){
           pic3.style.zIndex = 1;
       }
    }
    