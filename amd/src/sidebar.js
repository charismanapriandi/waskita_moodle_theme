const sidebarButton = document.getElementById('sidebar-btn')
const sidebarPanel = document.getElementById('nav-drawer')
const body = document.querySelector('body')
const navigation = document.getElementById('my_navbar')
    // const iconDrawer = document.querySelectorAll('#nav-drawer #sidebar ul li a .media-left')
const iconDrawer = document.querySelectorAll('.media-left')

if (body.classList.contains('drawer-open-left')) {
    // icon 
    for (let i = 0; i < iconDrawer.length; i++) {
        iconDrawer[i].classList.add('drawer-close-icon')
    }
    // navigation 
    navigation.classList.add('my-drawer-open')
} else if (body.classList.contains('')) {
    // navigation 
    navigation.classList.remove('my-drawer-open')
}
sidebarButton.addEventListener('click', (e) => {
    if (body.classList.contains('drawer-open-left')) {
        navigation.classList.remove('my-drawer-open')
    } else {
        // icon 
        for (let i = 0; i < iconDrawer.length; i++) {
            iconDrawer[i].classList.add('drawer-close-icon')
        }
        navigation.classList.add('my-drawer-open')
    }
    // button animation
})