import React, { Component } from 'react';
import Comp1 from './components/comp1/Comp1';
import Comp2 from './components/comp2/Comp2';
import { Box } from '@mui/material';

class App extends Component {
    render() {
        return (
            <Box display={'flex'} flexDirection={'column'} gap={"50px"} style={{"padding" : "30px", "border" : "2px solid #001", "width" : "40%"}}>
                <Comp1/>
                <Comp2/>
            </Box>
        );
    }
}

export default App;
