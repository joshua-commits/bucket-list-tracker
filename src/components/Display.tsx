import  { useEffect } from 'react';
import { listWishes } from '../graphql/queries';
import { generateClient } from '@aws-amplify/api';



const client = generateClient();
let value = "";

const getWishes = async() => {
    try {
        const wishes = await client.graphql({query: listWishes})
        return wishes
    } catch (error) {
        console.log(error);
    }

}

const Display = () => {
    useEffect(() => {
        getWishes().then(result => {
        if (result) {
            value = "Fetched wishes:" + JSON.stringify(result.data.listWishes.items);
        }
        });
        }, []
    );
  return (
    <div>
        <h2>Current Wishes</h2>
        <div>
            {value}
        </div>
    </div>
  )
}

export default Display
