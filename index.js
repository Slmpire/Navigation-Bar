// The function to allow the toggle button to work 
function myFunction(){
    var x = 
    document.getElementById("mobileList");
    if (x.style.display === "none"){
        x.style.display = "block";
    } else {
        x.style.display ="none";
    }
}
//   to allow the user to scroll through the page without 
//   the header scrolling with it 
window.onscroll =function(){
    myScroll()
};
// To get the header
var header = 
document.getElementById('header');
//  To get the offset position  of the header
var sticky = header.offsetTop;
//  The function to add the stickyg position we reach it 
//   position andx viseversa

function myScroll(){
    if(window.pageYOffset >= sticky){
        header.classList.add("sticky")
    } else{
        header.classList.remove("sticky");
    }
}
