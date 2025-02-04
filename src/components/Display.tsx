import { useEffect, useState } from 'react';
import { generateClient, GraphQLSubscription } from '@aws-amplify/api';
import { listWishes } from '../graphql/queries';
import { updateWish } from '../graphql/mutations';
import { onCreateWish } from '../graphql/subscriptions';
import { OnCreateWishSubscription, Wish } from '../API'; // Import generated types
import '../css/Display.css';

const client = generateClient();

const Display = () => {
  const [wishes, setWishes] = useState<Wish[]>([]);

  useEffect(() => {
    // Fetch initial wishes
    const fetchWishes = async () => {
      try {
        const result = await client.graphql({ query: listWishes });
        const items = result.data?.listWishes?.items as Wish[];
        setWishes(items);
      } catch (error) {
        console.error('Error fetching wishes:', error);
      }
    };

    fetchWishes();

    // Setup subscription 
const subscription = client.graphql<GraphQLSubscription<OnCreateWishSubscription>>({
    query: onCreateWish
  }).subscribe({
    next: (event) => {
      // Properly access the nested data structure
      const newWish = event.data?.onCreateWish;
      if (newWish) {
        setWishes(prev => [...prev, newWish]);
      }
    },
    error: (error) => console.error('Subscription error:', error)
  });

    return () => subscription.unsubscribe();
  }, []);

  const handleChange = async (wish: Wish) => {
    const updatedWish = { ...wish, completed: !wish.completed };
    
    // Optimistic update
    setWishes(prev => 
      prev.map(w => w.id === wish.id ? updatedWish : w)
    );

    try {
      await client.graphql({
        query: updateWish,
        variables: {
          input: {
            id: wish.id,
            completed: updatedWish.completed,
          }
        }
      });
    } catch (error) {
      console.error('Update error:', error);
      // Rollback on error
      setWishes(prev => 
        prev.map(w => w.id === wish.id ? wish : w)
      );
    }
  };

  return (
    <>
      <h2>Current Wishes</h2>
      <section>
        <ul>
          {wishes.map(wish => (
            <li className='list' key={wish.id}>
              <span className='wishName'>{wish.name}</span>
              <span className='wishDesc'>{wish.description}</span>
              <input
                type='checkbox'
                checked={wish.completed}
                onChange={() => handleChange(wish)}
                aria-label={`Mark ${wish.name} as ${wish.completed ? 'incomplete' : 'complete'}`}
              />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default Display;