import { TwitterFollowCard } from "./TwitterFollorCard";

function App(){
    const formatUserName= (userName) => `@${userName}`
    
    //recordar que lo que se renderiza es solo un elemento

    /*los componentes son muchos elementos, y React renderiza elementos*/
    return(
        <section className="App"> 
            <TwitterFollowCard
             formatUserName={formatUserName} 
             initialIsFollowing={false} 
             userName="optimusPrime" 
             name="Malentang"/>

            <TwitterFollowCard 
            formatUserName={formatUserName} 
            initialIsFollowing 
            userName="optimusPrime" 
            name="Malentang"/>
        </section>
    )
}

export default App;