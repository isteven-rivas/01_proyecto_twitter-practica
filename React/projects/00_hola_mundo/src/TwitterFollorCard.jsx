import { useState } from "react"

export function TwitterFollowCard({formatUserName,userName, name, initialIsFollowing}){
    //cuando se quiere que una prop sea un estado inicial
    //debe agregarse initial
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

    //funcion que cambia el texto del boton
    const text = isFollowing? "siguiendo":"seguir"

    //cambia la clase en css para diferenciar el estado
    const buttonClassName = isFollowing? "tw-followCard-boton is-following"
    :"tw-followCard-boton"

    //funcion que cambia el estado de siguiendo o no del boton seguir
    const handelClick= () => setIsFollowing(!isFollowing)

//se recomienda tener lo renderizado lo más simple posible
    return(
        <article className="tw-followCard">
            <header className="tw-followCard-header">
                <img 
                    src={`https://unavatar.io/${userName}`}
                    alt="imagen de perfil"
                    className="tw-followCard-img"/>
                   
    
                <div className="tw-followCard-info">
                    <strong>{name}</strong>
                    <spam>{formatUserName(userName)}</spam>
                </div>
            </header>
    
            <aside>
                <button className={buttonClassName} onClick={handelClick}>
                    {text}
                </button>
            </aside>
        </article>
  )
}