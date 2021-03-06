import React from "react";

const posts = [
    { profileImage: "./Images and videos/the-big-bang-theory.png", user: "bigbangtheory", foto: "./Images and videos/tbbt_meme.jpeg", like: "./Images and videos/rick.png", userLike: "rickandmorty" },
    { profileImage: "./Images and videos/emicida.jpeg", user: "emicida", foto: "./Images and videos/amarelo.jpg", like: "./Images and videos/legiao.jpg", userLike: "legiaourbana" },
    { profileImage: "./Images and videos/Hp.jpg", user: "wizardingworld", foto: "./Images and videos/memeharry.webp", like: "./Images and videos/emicida.jpeg", userLike: "emicida" },
]

function Post(props) {
    const [heart, setHeart] = React.useState("heart-outline");
    const [heartColor, setHeartColor] = React.useState("black");


    function clicked(object) {
        if (heartColor === "black") {
            setHeart("heart-sharp");
            setHeartColor("red");
        } else if ((heartColor === "red") && (object === "heart")) {
            setHeart("heart-outline");
            setHeartColor("black");
        }
    }

    return (
        <div class="post">
            <div class="perfil">
                <div><img src={props.profileImage} />
                    <p> {props.user}</p>
                </div>
                <div>
                    <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
                </div>
            </div>
            <div onClick={() => clicked("post")} class="foto" ><img src={props.foto} /></div>
            <div class="interacao">
                <div>
                    <ion-icon onClick={() => clicked("heart")} style={{ color: heartColor }} name={heart}></ion-icon>
                    <ion-icon name="chatbubble-outline"></ion-icon>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div>

                    <ion-icon name="bookmark-outline"></ion-icon>
                </div>
            </div>
            <div class="curtidas"><img src={props.like} />Curtido por<strong>&nbsp;
                {props.userLike}</strong>&nbsp; e &nbsp; <strong>outras 956.527 pessoas</strong></div>
        </div>
    )
}



function Feed() {
    return (
        <div class="feed">
            {posts.map(posts => <Post profileImage={posts.profileImage} user={posts.user} foto={posts.foto} like={posts.like} userLike={posts.userLike} class={posts.class} />)}
        </div>
    )
}
export default Feed;