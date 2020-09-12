import React from 'react';
import './filter.styles.css';
import { Container} from 'react-bootstrap';
import { CSSTransition } from 'react-transition-group';
import { Button } from '@material-ui/core';
import { BsFillFunnelFill } from "react-icons/bs";

const FilterdropDown = (props) => {
    return (

        <Container style={{ paddingTop: '2rem' }}>
        {props.show && (
            <div>
          <Button variant="outlined">Floor Area</Button>
            
          <Button disableElevation>Bed Rooms</Button>
          
          <Button disableFocusRipple>Kitchen</Button>

          <Button size='small'>Bathrooms</Button>
          
          <Button startIcon>This is Button</Button>

          <Button color="primary" variant="outlined">This is Button</Button>
          </div>
        )}
        </Container>
    )
} 

export default FilterdropDown;