import { Amplify } from 'aws-amplify';
import { Authenticator, withAuthenticator } from '@aws-amplify/ui-react';



import Wishes from './components/Wishes';
import './App.css'


import '@aws-amplify/ui-react/styles.css';
import awsmobile from './aws-exports';
import Display from './components/Display';

Amplify.configure(awsmobile);

function App() {

  return (
    <Authenticator>
      {({signOut}) => (
        <body>
          <header>
            <h1>Bucket List Tracker</h1>
          </header>
          <main>
            <Wishes/>
            <Display/>
          </main>
          
          <footer>
            <button type='button' onClick={signOut}> Sign Out</button>
          </footer>
          
        </body>
      )}

    </Authenticator>
   
  )
}
const AuthenticatedApp = withAuthenticator(App);

export default AuthenticatedApp
