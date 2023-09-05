let show=(e)=>{
let arr=e.children;
// alert(arr.length);
if(arr[1].style.display=="inline"){
    arr[1].style.display="none";
}
else{
    arr[1].style.display="inline";
}
arr[1].classList.add('aniclass');

}
let hide=(e)=>{
    let arr=e.children;
    // alert(arr.length);
    if(arr[1].style.display=="inline"){
        arr[1].style.display="none";
    }
    else{
        arr[1].style.display="inline";
    }
    
    arr[1].classList.remove('aniclass');
}
let hideModal = () => {
    modalcontainer.style.display = "none";


}
let visited = false;
let iCount=0;


let shownew=()=>{
   
    document.getElementById("btnlectures").style.background="antiquewhite";
    document.getElementById("btnlectures").classList.add("boxshadow");
    document.getElementById("btndocuments").style.background="aliceblue";
    document.getElementById("btndocuments").classList.remove("boxshadow");

    document.getElementById("lectureGp").style.display="inline-block";
    
    
    // alert("ShowVideos");
    document.getElementById("documentGp").style.display="none";
    
}
let showexist=()=>{
   
    document.getElementById("btnlectures").style.background="aliceblue";
    document.getElementById("btnlectures").classList.remove("boxshadow");
    document.getElementById("btndocuments").style.background="antiquewhite";                  
    document.getElementById("btndocuments").classList.add("boxshadow");

    document.getElementById("lectureGp").style.display="none";
   
    // document.getElementById("pignationNav").style.display="none";    
    document.getElementById("documentGp").style.display="inline-block";
    // alert("ShowDocuments");


}
