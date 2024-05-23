document.addEventListener('DOMContentLoaded',function(){
    const button =document.getElementById('toggleButton');
    button.addEventListener('click',function()
    {
        button.classList.toggle('on');
        button.textContent = button.classList.contains('on')? 'ON' : 'OFF';
    });
});