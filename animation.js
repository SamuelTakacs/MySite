window.addEventListener('DOMContentLoaded',function() {
    setTimeout(function(){
        document.body.setAttribute('class','visible');
        document.getElementById('monday').setAttribute('class','day-div-v')
    },100);
    setTimeout(function(){
        document.getElementById('tuesday').setAttribute('class','day-div-v')
    },500)
    setTimeout(function(){
        document.getElementById('wednesday').setAttribute('class','day-div-v')
    },800)
    setTimeout(function(){
        document.getElementById('thursday').setAttribute('class','day-div-v')
    },1100)
    setTimeout(function(){
        document.getElementById('friday').setAttribute('class','day-div-v')
    },1400)
    setTimeout(function(){
        document.getElementById('saturday').setAttribute('class','day-div-v')
    },1700)
    setTimeout(function(){
        document.getElementById('sunday').setAttribute('class','day-div-v')
    },2000)
})

