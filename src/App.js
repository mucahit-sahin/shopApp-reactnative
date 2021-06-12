import React from 'react';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {useDispatch} from 'react-redux';

import SignNavigation from './Navigations/SignNavigation';
import TabNavigation from './Navigations/TabNavigation';
import CreateShop from './Screens/CreateShop';
import {setUserAction} from './Store/Actions/authActions';

const App = () => {
  const [initializing, setInitializing] = React.useState(true);
  const [user, setUser] = React.useState();
  const [userDocument, setUserDocument] = React.useState();
  const dispatch = useDispatch();
  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    dispatch(setUserAction(user));
    if (initializing) setInitializing(false);
  }

  React.useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, [user]);

  if (initializing) return null;

  if (!user) {
    return <SignNavigation />;
  }

  firestore()
    .collection('Shops')
    .doc(user?.email)
    .onSnapshot(documentSnapshot => {
      setUserDocument(documentSnapshot.data());
      if (!userDocument) {
        return <CreateShop user={user} />;
      }
    });
  return <TabNavigation user={user} />;
};

export default App;
