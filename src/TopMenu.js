function TopMenu() {
    return (
        <div class="cont">
            <div class="topo">
                <div class="logo">
                    <ion-icon name="logo-instagram"></ion-icon>
                </div>
                <div class="barra"></div>
                <div class="insta"> <img src="./Images and videos/logo.png" /></div>
                <input class="pesquisa" placeholder="Pesquisar" ></input>
                <div class="menusup">
                    <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div class="menuoculto">
                    <ion-icon name="compass-outline"></ion-icon>
                    <ion-icon name="heart-outline"></ion-icon>
                    <ion-icon name="person-outline"></ion-icon>
                </div>
            </div>
        </div>
    )
}
export default TopMenu;