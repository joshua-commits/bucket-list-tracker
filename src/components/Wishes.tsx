import React, { useState, useRef } from "react";
import { Amplify } from "aws-amplify";
import { generateClient } from '@aws-amplify/api';
import config from '../amplifyconfiguration.json';
import { createWish } from '../graphql/mutations';
import '../css/Wishes.css';

Amplify.configure(config);
const client = generateClient();

export interface WishFormState {
    id: string;
    name: string;
    description: string;
    imagePath?: string;
    completed: boolean;
}

const Wishes = () => {
    const [val, setVal] = useState<WishFormState>({
        id: "",
        name: "",
        description: "",
        completed: false
    });
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setVal(prev => ({ ...prev, [name]: value }));
    };

    const addWish = async () => {
        try {
            if (!val.name.trim() || !val.description.trim()) {
                alert("Please fill in both wish name and description");
                return;
            }

            await client.graphql({
                query: createWish,
                variables: {
                    input: {
                        name: val.name.trim(),
                        description: val.description.trim(),
                        completed: val.completed
                    }
                }
            });

            // Reset form state
            setVal({
                id: "",
                name: "",
                description: "",
                completed: false
            });

            // Reset file input
            if (fileInputRef.current) {
                fileInputRef.current.value = "";
            }

            alert("Your wish has been successfully added!");
        } catch (err) {
            console.error(err);
            alert("Error adding wish. Please try again.");
        }
    };

    return (
        <section className="wish">
            <div>
                <input 
                    placeholder="Enter your wish" 
                    type="text"
                    name="name"
                    value={val.name}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <input 
                    placeholder="Wish Description" 
                    type="text"
                    name="description"
                    value={val.description}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <input 
                    id="fileInput"
                    ref={fileInputRef}
                    type="file"
                    name="file"
                    accept="image/png"
                    onChange={handleChange}
                    aria-label="Upload wish image"
                />
            </div>
            <button type="button" onClick={addWish}>
                Add a Wish
            </button>
        </section>
    );
};

export default Wishes;