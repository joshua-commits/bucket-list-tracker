import  { useEffect, useState } from 'react';
import { listWishes } from '../graphql/queries';
import { generateClient } from '@aws-amplify/api';
import {WishFormState} from './Wishes'
import '../App.css'


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
        <div>
            <ul>
                {wishes.map(wish => (
                    <li key={wish.id}>{wish.name}</li>
                ))}
            </ul>
        </div>
    </section>
  )
}


export default Display
