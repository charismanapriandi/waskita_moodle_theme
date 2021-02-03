const sidebarButton = document.getElementById('sidebar-btn')
const sidebarPanel = document.getElementById('nav-drawer')
const body = document.getElementsByTagName('body')[0]
const navigation = document.getElementById('my_navbar')

// controll navigation 
if (body.classList.contains('drawer-open-left')) {
    navigation.classList.add('my-drawer-open')
} else if (body.classList.contains('risman')) {
    navigation.classList.remove('my-drawer-open')
}
sidebarButton.addEventListener('click', (e) => {
    if (body.classList.contains('drawer-open-left')) {
        navigation.classList.remove('my-drawer-open')
    } else {
        navigation.classList.add('my-drawer-open')
    }
    // button animation
})