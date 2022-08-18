
import styles from '../styles/Home.module.css'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Card from '../components/Card'
 
export default function Home() {
  const [pokes, setPokes] = useState([]);

  const fetchData = async () => {
    const limitPoke = 251
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${limitPoke}`)
    const data = await response.json()
    data.results.forEach((item, index) => {
      item.id = index + 1;
    });
    setPokes(data.results)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="main-container">
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>Poke<span>Next</span></h1>
        <Image
                        src={'/images/pokeball.png'}
                        height="50"
                        width="50"
                        alt="pokeball" />
      </div>

      <div className={styles.pokemon_container}>
        {pokes.map((pokemon) => (
          <Card key={pokemon.id} pokemon={pokemon}/>
        ))}
      </div>

    </div>

  )
}
