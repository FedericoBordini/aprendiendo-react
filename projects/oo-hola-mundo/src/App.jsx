import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () {
    return (
        <section className='App'>
            <TwitterFollowCard userName="kikobeats" name="Juan Perez"/>
            <TwitterFollowCard userName="KingJames" name="LeBron James"/>
        </section>
    )
}