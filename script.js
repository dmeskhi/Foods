document.querySelector('.menu').addEventListener('click',
() =>  {
    document.querySelectorAll('.target').forEach((item) => {
        item.classList.toggle('change')
    })
})



//Slideshow. To switch between icons I had to add and remove class 'change'
//to all the icons. 

//Select all the icons
const icons = document.querySelectorAll('.section-1-icons i');
let i = 1;
//Set transition intervals between the icons 
setInterval(() => {
    //Select first icon to remove class 'change' and add it to the next icon
    i++;
    const myIcon = document.querySelector('.section-1-icons .change');
    myIcon.classList.remove('change');

    if(i > icons.length) {
        icons[0].classList.add('change');
        i = 1;
    }else{
      myIcon.nextElementSibling.classList.add('change');
      }

    

}, 4000);