import React from 'react';

import Content from '../components/Content';
import Hero from '../components/Hero';

function AboutPage(props) {

    return(
        <div>
            <Hero title={props.title} />

            <Content>
                <p>Lorem ipsum dolor sit amet, consectetur 
                adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud 
                exercitation ullamco laboris nisi ut aliquip ex 
                a commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur
                sint occaecat cupidatat non proident, sunt 
                in culpa qui officia deserunt mollit anim id 
                est laborum.</p>

                <p>Lorem ipsum dolor sit amet, consectetur 
                adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud 
                exercitation ullamco laboris nisi ut aliquip ex 
                a commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur
                sint occaecat cupidatat non proident, sunt 
                in culpa qui officia deserunt mollit anim id 
                est laborum.</p>

                <p>Lorem ipsum dolor sit amet, consectetur 
                adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud 
                exercitation ullamco laboris nisi ut aliquip ex 
                a commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur
                sint occaecat cupidatat non proident, sunt 
                in culpa qui officia deserunt mollit anim id 
                est laborum.</p>
                
            </Content>
        </div>
    );
}

export default AboutPage;