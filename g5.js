//here is our array of aphorisms



//here is our array of aphorisms


window.onload = choosePic;

var myPix1 = new Array('assets2/8.JPG', 'assets2/3.JPG', 'assets2/2.JPG','assets2/9.jpg', 'assets2/10.jpg',);
var myPix2 = new Array('assets2/1.JPG', 'assets2/4.JPG', 'assets2/7.JPG','assets2/9.jpg','assets2/11.jpg');


   function choosePic() {
        var randomNum1 = Math.floor(Math.random() * myPix1.length);
        document.getElementById("myPicture1").src = myPix1[randomNum1];
          setTimeout("choosePic()", 2000);

          var randomNum2 = Math.floor(Math.random() * myPix2.length);
          document.getElementById("myPicture2").src = myPix2[randomNum2];

      }
