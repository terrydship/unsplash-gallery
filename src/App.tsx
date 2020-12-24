import React from 'react';
import Main from "./main/Main";
import {StylesProvider} from '@material-ui/core';

function App() {
    return (
        <StylesProvider injectFirst>
            <Main />
        </StylesProvider>
    );
}

export default App;
