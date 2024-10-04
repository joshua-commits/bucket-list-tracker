import  { useEffect, useState } from 'react';
import { listWishes } from '../graphql/queries';
import { updateWish } from '../graphql/mutations';
import { generateClient } from '@aws-amplify/api';
import {WishFormState} from './Wishes';



const client = generateClient();




const getWishes = async() => {
    try {
        const results = await client.graphql({query: listWishes})
        return results
    } catch (error) {
        console.log(error);
    }

}


const Display = () => {
    const[wishes, setWishes] = useState<WishFormState[]>([]); 

    const handleChange = async(wish:WishFormState) =>{
        const updatedWish = {...wish, completed: !wish.completed};
    
        setWishes(
            wishes.map(w => w.id === wish.id ? updatedWish: w) //local update
        );
    
        try {
    
             await client.graphql({ //cloud update
                query: updateWish,
                variables: { 
                    input: {
                        id: wish.id,
                        completed: updatedWish.completed,
                }}
            });
            
        } catch (error) {
            console.log(error)
        }
    }
    

    useEffect(() => {
        getWishes().then(result => {
        if (result) {
            const wish = result.data.listWishes.items as WishFormState[]
            setWishes(wish); 
            // add in subscription later 
        }
        });
        }, []
    );
  return (
    <section>
        <h2>Current Wishes</h2>
        <ul>
            {wishes.map(wish => (
                <li className='list' key={wish.id}>
                    <span className='wishName'>{wish.name}</span>
                    <span className='wishDesc'>{wish.description}</span>
                    <input type='checkbox' 
                        checked={wish.completed}
                        placeholder='false'
                        onChange={() => handleChange(wish)}
                    />
                </li>
                
            ))}
        </ul>
    </section>
  )
}


export default Display
