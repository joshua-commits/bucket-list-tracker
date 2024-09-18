import {  useEffect } from 'react';
import { Amplify } from 'aws-amplify';
import { Authenticator, withAuthenticator } from '@aws-amplify/ui-react';

import { generateClient } from 'aws-amplify/api';
import config from './amplifyconfiguration.json';

import { createWish} from './graphql/mutations';
import { listWishes } from './graphql/queries';

import '@aws-amplify/ui-react/styles.css';
import awsmobile from './aws-exports';

Amplify.configure(config);
Amplify.configure(awsmobile);

const client = generateClient();

const addTodo = async () => {
  try {
      await client.graphql({
      query: createWish,
      variables: {
        input: {
          name: 'My second wish',
          completed: false
        }
      }
    })
    
  }
  catch(err){
    console.log(err)
  }
}

const result = await client.graphql({query: listWishes})

function App() {


  useEffect(() => {
    addTodo()
  }, []);

  return (
    <Authenticator>
      {({signOut}) => (
        <>
          <div>Hello World</div>
          <button type='button' onClick={signOut}> Sign Out</button>
          {console.log(result)}
        </>
      )}

    </Authenticator>
   
  )
}
const AuthenticatedApp = withAuthenticator(App);

export default AuthenticatedApp
