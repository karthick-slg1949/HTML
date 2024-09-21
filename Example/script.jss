document.addEventListener('DOMContentLoaded',function(){
    const button = document.getElementById('toggle button');
    button.addEventListener('click',function()
    {
        button.classList.toggle('on');
        button.textcontent = button.classList.contains('on')? 'ON' : 'OFF';
    });
});