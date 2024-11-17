import { useFetch } from "../hooks/useFetch"
import Card from "./Card"
const Container = () => {
    const { data: cards, isPending, error } = useFetch("http://localhost:4000/api/cards")
    return (
        
            <div className="container">
                {isPending && <div>Loading...</div>}
                {error && <div>{error}</div>}
                {cards && cards.map(card => (
                    <Card key={card._id} card={card}></Card>
                    
        
                ))}
                
            </div>
        
    )
}
export default Container