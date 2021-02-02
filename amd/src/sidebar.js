const sidebarButton = document.getElementById('sidebar-btn')
const sidebarPanel = document.getElementById('nav-drawer')
const pageContent = document.getElementById('page')
    // pageContent.style.marginLeft = "60px"
sidebarButton.addEventListener('click', function(e) {
    sidebarPanel.classList.toggle('closed')
})