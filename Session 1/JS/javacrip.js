function getInfo(){
    var fullname = document.getElementById("fullName").value;
    if(fullname===""){
        console.log("Chào mọi người");
    }else{
        console.log(`Chào ${fullname}! Chúc bạn một buổi tối vui vẻ`);
    }
    
}