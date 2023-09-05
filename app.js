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
let plus = (e) => {
    iCount=parseInt(document.getElementById("count").innerHTML);
    if(iCount>0){
        document.getElementById("count").style.display="flex";
    }
sessionStorage.setItem("itemCount",iCount);
    let parent = e.parentNode;
    let childarr = parent.children;
    // alert(parent);
    // alert(childarr);
    // alert(childarr[1]);
    if (childarr[1].value == '') {
        childarr[1].value = 1;
        iCount++;      
        
    } else {
        childarr[1].value = parseInt(childarr[1].value) + 1;
        iCount++;       
        
    }
    if(iCount>0){
        document.getElementById("count").style.display="flex";
    }
    else{
        document.getElementById("count").style.display="none";
    }
    sessionStorage.setItem("itemCount",iCount);
    document.getElementById("count").innerHTML=iCount;
}

let minus = (e) => {
    iCount=parseInt(document.getElementById("count").innerHTML);
    // alert(iCount);
    let parent = e.parentNode;
    let childarr = parent.children;
    // alert(parent);
    // alert(childarr);
    // alert(childarr[1]);
    if (childarr[1].value == '') {
        alert(" You haven't chosen even one! ");
    } else if (childarr[1].value == 1) {
        childarr[1].value = "";
        iCount--;
        // document.getElementById("count").innerHTML=iCount;
    } else {
        childarr[1].value = parseInt(childarr[1].value) - 1;
        iCount--;
        // document.getElementById("count").innerHTML=iCount;
    }
    
    if(iCount>0){
        document.getElementById("count").style.display="flex";
    }
    else{
        document.getElementById("count").style.display="none";
    }
    sessionStorage.setItem("itemCount",iCount);
    document.getElementById("count").innerHTML=iCount;
}

let showVideos=()=>{
   
    document.getElementById("btnlectures").style.background="antiquewhite";
    document.getElementById("btnlectures").classList.add("boxshadow");
    document.getElementById("btndocuments").style.background="aliceblue";
    document.getElementById("btndocuments").classList.remove("boxshadow");

    document.getElementById("lectureGp").style.display="inline-block";
    
    document.getElementById("pignationNav").style.display="inline-block";
    alert("ShowVideos");
    document.getElementById("documentGp").style.display="none";
    
}
let showDocuments=()=>{
   
    document.getElementById("btnlectures").style.background="aliceblue";
    document.getElementById("btnlectures").classList.remove("boxshadow");
    document.getElementById("btndocuments").style.background="antiquewhite";                  
    document.getElementById("btndocuments").classList.add("boxshadow");

    document.getElementById("lectureGp").style.display="none";
   
    document.getElementById("pignationNav").style.display="none";    
    document.getElementById("documentGp").style.display="inline-block";
    alert("ShowDocuments");


}

let pressed=3;
let pressingP1=()=>{
    document.getElementById("p1").classList.add("active");
    document.getElementById("lectureGp").style.display="inline-block";
    document.getElementById("lectureGp1").style.display="none";
    document.getElementById("lectureGp2").style.display="none";
    document.getElementById("p2").classList.remove("active");
    document.getElementById("p3").classList.remove("active");
    pressed=0;

}
let pressingP2=()=>{
    document.getElementById("p2").classList.add("active");
    document.getElementById("lectureGp1").style.display="inline-block";
    document.getElementById("lectureGp").style.display="none";
    document.getElementById("lectureGp2").style.display="none"; 
    document.getElementById("p1").classList.remove("active");
    document.getElementById("p3").classList.remove("active");
    pressed=1;

}

let pressingP3=()=>{
    document.getElementById("p3").classList.add("active");
    document.getElementById("lectureGp2").style.display="inline-block";
    document.getElementById("lectureGp").style.display="none";
    document.getElementById("lectureGp1").style.display="none";
    document.getElementById("p1").classList.remove("active");
    document.getElementById("p2").classList.remove("active");
    pressed=2;

}

let pages=['p1','p2','p3'];
let lectures=['lectureGp','lectureGp1','lectureGp2'];
let pressingPrev=()=>{
    for(i=0;i<pages.length;i++){       
        document.getElementById(lectures[i]).style.display="none";
        document.getElementById(pages[i]).classList.remove("active");   
    }
    if(pressed==0){
        document.getElementById(lectures[2]).style.display="inline-block";
        document.getElementById(pages[2]).classList.add("active");
        pressed=2;        
    }
    else if(pressed==1){
        document.getElementById(lectures[0]).style.display="inline-block";
        document.getElementById(pages[0]).classList.add("active"); 
        pressed=0;      
    }
    else if(pressed==2){
        document.getElementById(lectures[1]).style.display="inline-block";
        document.getElementById(pages[1]).classList.add("active");
        pressed=1;        
    }
    else{
        document.getElementById(lectures[2]).style.display="inline-block";
        document.getElementById(pages[2]).classList.add("active"); 
        pressed=2;       
    }
    

}
let pressingNext=()=>{

    for(i=0;i<pages.length;i++){
        document.getElementById(lectures[i]).style.display="none";
        document.getElementById(pages[i]).classList.remove("active");
    }

    if(pressed==0){
        document.getElementById(lectures[1]).style.display="inline-block";
        document.getElementById(pages[1]).classList.add("active");
        pressed=1;
        
    }
    else if(pressed==1){
        document.getElementById(lectures[2]).style.display="inline-block";
        document.getElementById(pages[2]).classList.add("active");
        pressed=2;
    }
    else if(pressed==2){
        document.getElementById(lectures[0]).style.display="inline-block";
        document.getElementById(pages[0]).classList.add("active");
        pressed=0;
    }
    else{
        document.getElementById(lectures[1]).style.display="inline-block";
        document.getElementById(pages[1]).classList.add("active");
        pressed=1;
    }
    

}