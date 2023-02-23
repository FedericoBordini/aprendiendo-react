import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'


const users = [
    {
        userName: 'sonickboom13',
        name: 'fede',
        isFollowing: true
    },
    {
        userName: 'KingJames',
        name: 'LeBron James',
        isFollowing: false
    },
    {
        userName: 'midudev',
        name: 'Miguel Angel Durán',
        isFollowing: true
    }
]
{/* NO ES BUENA PRACTICA PONER COMENTARIOS EN EL RETURN SIEMPRE FUERA*/}
export function App () {
    return (
        <section className='App'>
           {
            users.map(user => {
                const { userName, name, isFollowing } = user
                return (
                    <TwitterFollowCard
                        key={userName}
                        userName = {userName}
                        initialIsFollowing = {isFollowing}
                        >
                            {name}
                        </TwitterFollowCard>
                )
            })
           }
        </section>
        
    )
}

