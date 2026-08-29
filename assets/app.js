const button=document.querySelector('.menu');const nav=document.querySelector('#nav');if(button&&nav){button.addEventListener('click',()=>{const open=button.getAttribute('aria-expanded')==='true';button.setAttribute('aria-expanded',String(!open));nav.classList.toggle('open',!open)});nav.addEventListener('click',()=>{button.setAttribute('aria-expanded','false');nav.classList.remove('open')})}

