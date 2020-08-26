import React from'react';

import Card from '../components/Card';
import {Container, Row, Col} from 'react-bootstrap';
import phonic_carousel from '../assets/images/phonic_carousel.png';
import ctd_carousel from '../assets/images/ctd_carousel.png';
import house_chore_carousel from '../assets/images/house_chore_carousel.png';

class Carousel extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            items: [
                {
                    id: 0, 
                    title: 'House Chore',
                    subTitle: 'Personalized chores',
                    imgSrc: house_chore_carousel,
                    link: 'https://yahoo.com',
                    selected: false

                },
                {
                    id: 1,
                    title: 'Creative Tech Design',
                    subTitle: 'Spearheaded the design team',
                    imgSrc: ctd_carousel,
                    link: 'https://youtube.come',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Phonic',
                    subTitle: '9 projects from this internship',
                    imgSrc: phonic_carousel,
                    link: 'https://google.com',
                    selected: false
                },
            ]
        }
    }

    handleCardClick = (id, card) => {

        let items = [...this.state.items];
        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
            
        });

        this.setState({
            items
        });
    }

    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
         
        
        })
    }
    render() {
        return(
                <Container fluid={true}>
                    

                            <Row className="justify-content-center">
                                {this.makeItems(this.state.items)}  

                            </Row>
                    
                </Container>
        );
    }

}

export default Carousel;


