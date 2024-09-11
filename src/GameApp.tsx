import { useEffect, useState } from "react"
import { GamePage } from "./game/pages"
import { Loader } from "./ui/Loader"

const GameApp = () => {

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() =>{
    setTimeout(() => {
      setIsLoading(false)
    }, 1500);
  }, [])

  return (
    <>
      {
        isLoading ? <Loader/> : <GamePage/>
      }
    </>
  )
}

export default GameApp