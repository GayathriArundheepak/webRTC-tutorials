const videoEl = document.querySelector("#my-video");
let stream =null // init steam var so we anywhere
const constraints={
    audio:true, // use your headphone , or be prepared for feedback!
    video:true,
}


const getMicAndCamara =async(e)=>{
    try{
        stream =await navigator.mediaDevices.getUserMedia(constraints);
        console.log(stream)
    }catch{
        //user denied access tto constraints
        console.log("user denined acess to constraints")
    }
}
const showMyFeed = e=>{
    console.log("showMyFeed is working")
    console.log(videoEl.srcObject ,"videoEl")
     videoEl.srcObject = stream; // this will set your mediaStream (stream) to our  video
     const tracks = stream.getTracks();
    //  console.log(tracks ,"tracks");
}
const stopMyFeed = e=>{
   
     const tracks = stream.getTracks();
     tracks.forEach(track=>{
        console.log('track',track)
        track.stop();
     })
    //  console.log(tracks ,"tracks");
}

document.querySelector("#share").addEventListener("click", e=>getMicAndCamara(e))
document.querySelector("#show-video").addEventListener("click", e=>showMyFeed(e))
document.querySelector("#stop-video").addEventListener("click", e=>stopMyFeed(e))