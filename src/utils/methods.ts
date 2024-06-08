export function toggleCategoryNavbar(){
    const mobileNavbar = document.querySelector("#navbar-mobile")
    if(mobileNavbar?.checkVisibility()){
        document.querySelector("#navbar-mobile #nav-item_category")?.click()
    }else{
        document.querySelector("#nav-item_category")?.click()
    }
}