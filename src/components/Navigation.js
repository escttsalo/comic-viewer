import React from 'react';
import { Box, Icon, Navbar } from 'react-bulma-components';

// const home = () => {
//     return (
//         <Box>
//             {/* <Icon renderAs={Link} color="primary" to="/" style={{ border: '1px solid red'}}> */}
//             <Icon style={{ color:'turquoise'}}>
//                 <i className="fas fa-home fa-2x" />
//             </Icon>
//         </Box>
//     );
// };

const logo = () => {
    return (
        <Box flexDirection={'column'} justifyContent={'space-around'} style={{ color: 'turquoise'}}>
            <Icon style={{ color: 'turquoise'}}>
                <i className="fab fa-github fa-3x"/>
            </Icon>
        </Box>
    );
};

// const menu = () => {
//     return ( 
//         <Box>
            
//         </Box>
//     );
// };

export default function Navigation(){
    return (
        <Navbar color={'dark'}>
            <Navbar.Brand renderAs={'div'} href="#">
                {/* <Navbar.Link active={false}> */}
                    { logo() }
                {/* </Navbar.Link> */}
            </Navbar.Brand>
            <span>Menu</span>
        </Navbar>

        // <nav>
        //     {
        //         home()
        //     }
        //     <span>Logo</span>
        //     <span>Menu</span>
        // </nav>
    );
};