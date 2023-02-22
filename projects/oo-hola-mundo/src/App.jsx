import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () {
    return (
        <section className='App'>
            <TwitterFollowCard 

                isFollowing 
                userName="kikobeats" 
                name="Juan Perez"
            />
            <TwitterFollowCard 
                isFollowing={false} 
                userName="KingJames" 
                name="LeBron James"
                />
        </section>
    )
}