import React from 'react';
import './App.scss';
import DestinationProvider from "./context/destination-context";
import {Destinations} from "./component/view/destinations/destinations";
import {HeaderActionDestination} from "./component/layout/header-action-destination/header-action-destination";

function App() {
    return (
        <DestinationProvider>
            <main className='appContainer'>
                <HeaderActionDestination></HeaderActionDestination>
                <Destinations></Destinations>
            </main>
        </DestinationProvider>
    );
}

export default App;
