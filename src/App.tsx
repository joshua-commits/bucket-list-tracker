import { Amplify } from 'aws-amplify';
import { Authenticator, withAuthenticator } from '@aws-amplify/ui-react';



import Wishes from './components/Wishes';
import './App.css'


import '@aws-amplify/ui-react/styles.css';
import awsmobile from './aws-exports';
import Display from './components/Display';

Amplify.configure(awsmobile);

// const client = generateClient();

// const addTodo = async () => {
//   try {
//       await client.graphql({
//       query: createWish,
//       variables: {
//         input: {
//           name: 'My second wish',
//           completed: false
//         }
//       }
//     })
    
//   }
//   catch(err){
//     console.log(err)
//   }
// }



function App() {


  // useEffect(() => {
  //   addTodo()
  // }, []);

  // useEffect(() => {
  //   fetchWishes().then(result => {
  //     if (result) {
  //       console.log("Fetched wishes:", result);
  //     }
  //   });
  // }, []);

  return (
    <Authenticator>
      {({signOut}) => (
        <>
          <h1>Bucket List Tracker</h1>
          <Wishes/>
          <Display/>
          <button type='button' onClick={signOut}> Sign Out</button>
        </>
      )}

    </Authenticator>
   
  )
}
const AuthenticatedApp = withAuthenticator(App);

export default AuthenticatedApp
