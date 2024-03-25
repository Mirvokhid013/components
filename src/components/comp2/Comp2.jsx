import { Box, Button } from '@mui/material';
import React, { Component } from 'react';

class Comp2 extends Component {
    state={
        bool : true,
    }
    
    func1 = () => {
        this.setState({
            bool : true,
        })
    }
    
    func2 = () => {
        this.setState({
            bool : false,
        })
    }
    render() {
        return (
            <Box display={'flex'} gap={"40px"} justifyContent={"space-between"}>
                <Box display={'flex'} flexDirection={'column'} gap={"30px"}>
                    <Button onClick={this.func1} variant="contained">Show</Button>
                    <Button onClick={this.func2} variant="outlined" color="error">Hide</Button>
                </Box>
                {this.state.bool ? <Box style={{"border" : "1px solid #000", "padding" : '20px'}}>
                    <h3 style={{'textDecoration': 'underline'}}>My Component 2</h3>
                </Box> : ''}
            </Box>
        );
    }
}

export default Comp2;
