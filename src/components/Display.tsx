import  { useEffect, useState } from 'react';
import { listWishes } from '../graphql/queries';
import { generateClient } from '@aws-amplify/api';
import {WishFormState} from './Wishes'


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
           
        }
        });
        }, []
    );
  return (
    <div>
        <h2>Current Wishes</h2>
        <div>
            {wishes.map(wish => (
                <div key={wish.id}>{wish.name}</div>
            ))}
        </div>
    </div>
  )
}


export default Display
