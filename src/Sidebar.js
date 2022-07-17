import Sugestions from "./Sugestions";

function Profile(props) {
    return (
        <div class="profile"><img src={props.imgUser} />
            <p><strong>{props.login}</strong><br />{props.userName}</p>
        </div>
    )
}


function Sidebar() {
    return (
        <div class="sidebar">
            <Profile imgUser={"./Images and videos/profile.jpeg"} login={"francksuelbarbosa"} userName={"Francksuel"} />
            <Sugestions />
            <div>
                <p> Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade •
                    Termos • Localizações • Contas mais relevantes • Hashtags •
                    Idioma <br /> <br /> © 2021 INSTAGRAM DO FACEBOOK</p>
            </div>
        </div>
    )
}
export default Sidebar;