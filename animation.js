window.addEventListener('DOMContentLoaded',function() {
    document.body.setAttribute('class','visible');
    document.getElementById('monday').setAttribute('class','day-div-v')
    setTimeout(function(){
        document.getElementById('tuesday').setAttribute('class','day-div-v')
    },500)
    setTimeout(function(){
        document.getElementById('wednesday').setAttribute('class','day-div-v')
    },1000)
    setTimeout(function(){
        document.getElementById('thursday').setAttribute('class','day-div-v')
    },1500)
    setTimeout(function(){
        document.getElementById('friday').setAttribute('class','day-div-v')
    },2000)
    setTimeout(function(){
        document.getElementById('saturday').setAttribute('class','day-div-v')
    },2500)
    setTimeout(function(){
        document.getElementById('sunday').setAttribute('class','day-div-v')
    },3000)
})

