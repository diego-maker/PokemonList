import { useRouter } from 'next/router'
import Styles from '../../styles/PokemonAbout.module.css'
import Image from 'next/image'
import { useEffect, useState } from 'react';

export default function InfoPokemon() {

    const [dataPoke, setDataPoke] = useState([]);
    const [dataName, setDataName] = useState([]);
    const [datasP, setDatasP] = useState([]);




    const router = useRouter();
    const todoId = router.query.pokemonId


    const getFecth = async () => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${todoId}`)
        const data = await response.json();
        setDatasP(data)
        setDataName(data.name);
        setDataPoke(data.types);
    }

    useEffect(() => {
        getFecth();
    }, [])
    return (
        <>
            <div className='main-container'>

                <div className={Styles.pokemon_container}>
                    
                        <h3 className={Styles.pokemon_title}> {dataName} </h3>
                    

                    <div>
                        <div>
                            <Image
                                src={`https://cdn.traction.one/pokedex/pokemon/${todoId}.png`}
                                width="200"
                                height="200"
                                alt="pokemon"
                            />
                        </div>

                    </div>
                    <div>
                        <h3>Tipo :</h3>
                        <div className={Styles.types_container}>
                            {
                                dataPoke.map((item, index) => (
                                    <span key={item.id} className={`${Styles.type} ${Styles['type_' + item.type.name]}`}>
                                        {item.type.name}

                                    </span>
                                ))
                            }
                        </div>

                        <h3></h3>
                    </div>
                    <div className={Styles.data_container}>

                        <div className={Styles.height}>
                            <h4>Altura</h4>
                            <p>{datasP.height * 10} cm</p>
                        </div>

                        <div clasName={Styles.weight}>
                            <h4>Peso</h4>
                            <p>{datasP.weight / 10} kg</p>
                        </div>

                    </div>

                </div>

            </div>
        </>
    )
}