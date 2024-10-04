import React, { useState } from "react";
import { Amplify } from "aws-amplify";
import { generateClient } from '@aws-amplify/api';
import config from '../amplifyconfiguration.json';

import { createWish} from '../graphql/mutations';
Amplify.configure(config);


const client = generateClient();
export interface WishFormState {
    id?: string,
    name: string,
    description: string,
    imagePath?: string,
    completed: boolean
}

const Wishes = () => {
  const [val, setVal] = useState<WishFormState>({
    name: "",
    description: "",
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
                name: val.name,
                description: val.description,
                completed: val.completed
            }
            }
        })
        alert("Your wish has been successfully added!")
    }
    catch(err){
        console.log(err)
    }

}
  

  return (
    <section className="container">
            <span>
                <input 
                placeholder="Enter your wish" 
                type="text"
                name="name"
                value={val.name}
                onChange={handleChange}
                />
            </span>
            <span>
                <input 
                placeholder="Wish Description" 
                type="text"
                name="description"
                value={val.description}
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
    </section>
  )
}

export default Wishes
