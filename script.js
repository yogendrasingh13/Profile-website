document.querySelector('.cross').style.display = 'none';
document.querySelector('.hamburger').addEventListener("click", ()=> {
    document.querySelector('.sideBar').classList.toggle('sideBarGo');
    if (document.querySelector('.sideBar').classList.contains('sideBarGo')) {
        document.querySelector('.ham').style.display = 'inline'
        document.querySelector('.cross').style.display = 'none'
    }

    else {
        document.querySelector('.ham').style.display = 'none'
        setTimeout(() => {
            document.querySelector('.cross').style.display = 'inline'
        }, 400);
    }
})