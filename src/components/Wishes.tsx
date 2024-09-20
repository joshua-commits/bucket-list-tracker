import React, { useState } from "react";
import { Amplify } from "aws-amplify";
import { generateClient } from '@aws-amplify/api';
import config from '../amplifyconfiguration.json';

import { createWish} from '../graphql/mutations';
Amplify.configure(config);


const client = generateClient();
interface WishFormState {
    wish: string,
    desc: string,
    imagePath?: string,
    completed: boolean
}

const Wishes = () => {
  const [val, setVal] = useState<WishFormState>({
    wish: "",
    desc: "",
    completed: false
  });

const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
const {name, value} = e.target;

setVal((prevVal) => ({
    ...prevVal,
    [name]: value, // Dynamically update 'wish' or 'desc'
    }));
};


const addWish = async () => {
    try {
        await client.graphql({
            query: createWish,
            variables: {
            input: {
                name: val.wish,
                description: val.desc,
                completed: val.completed
            }
            }
        })
    }
    catch(err){
        console.log(err)
    }

}
  

  return (
    <div className="container">
            <span>
                <input 
                placeholder="Enter your wish" 
                type="text"
                name="wish"
                value={val.wish}
                onChange={handleChange}
                />
            </span>
            <span>
                <input 
                placeholder="Wish Description" 
                type="text"
                name="desc"
                value={val.desc}
                onChange={handleChange}
                />
        </span>
        <span>
                <input 
                placeholder="Enter your wish" 
                type="file"
                name="file"
                accept='image/png'
                />
        </span>
        
        <span>
            <button type="button" onClick={addWish}> Add a Wish</button>
        </span>
    </div>
  )
}

export default Wishes
