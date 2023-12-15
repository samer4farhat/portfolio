let isModalOpen = false
let contrastToggle = false
const scaleFactor = 1/20
function moveBackground(event){
    const shapes=document.querySelectorAll('.shape')
    const x = event.clientX*scaleFactor
    const y = event.clientY*scaleFactor
    console.log(x,y)
    for(let i =0; i<shapes.length; ++i){
        const booleanInt = i%2 !==0 ? -1: 1
        shapes[i].style.transform=`translate(${x*booleanInt}px,${y*booleanInt}px)`
    }
}
function toggleContrast(){
    contrastToggle = !contrastToggle
    if(contrastToggle){
        document.body.classList += ' dark-theme'
    }else{
        document.body.classList.remove('dark-theme')
    }
}
function contact(event){
    event.preventDefault()
    const loading = document.querySelector('.modal__overlay--loading')
    const success = document.querySelector('.modal__overlay--success')
    loading.classList += ' modal__overlay--visible'
    emailjs
        .sendForm(
            'service_e8v1i3y',
            'template_j70jpdr',
            event.target,
            'ZTh8dEDpHM1V1VEfg'
        ).then(() => {
            loading.classList.remove('modal__overlay--visible')
            success.classList += ' modal__overlay--visible'
        }).catch(() => {
            loading.classList.remove('modal__overlay--visible')
            alert(
                'The email service is temporarily unavailable. Please contact me directly on farhatsamer7417@gmail.com'
            )
        })
}
function toggleModal(){
    isModalOpen = !isModalOpen
    if(isModalOpen){
        document.body.classList += ' modal--open'
    }else{
        document.body.classList.remove('modal--open')
    }
}