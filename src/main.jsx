import React from "react"
import boxes from "./boxes"
import Box from "./Box"

export default function Main(props) {
    const [squares, setSquares] = React.useState(boxes)
    const styles = {
        backgroundColor: props.copy? "white" : "#202020"
        
    }
    
    function toggle(id) {
        setSquares(prevSquares => {
            return prevSquares.map((square) => {
              return square.id === id ? {...square, on: !square.on} : square
               
            })
        })
    }
    
    const squareElements = squares.map(square => (
        <Box 
            key={square.id} 
            on={square.on}
         
            toggle={() => toggle(square.id)}
        />
    ))
    
    return (
        <main style={styles} className="hello" >
            {squareElements}
        </main>
    )
}
