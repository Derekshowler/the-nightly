import React from 'react';
import {Link} from "react-router-dom";
import { 
    HomePageStyle,
    HomePageTitle
} from '../styles/homePageStyle';


export default function HomePage() {
    return (
        <HomePageStyle>
            <div>
                <HomePageTitle>
                    Homepage: Content
                </HomePageTitle>
            </div>
        </HomePageStyle>
    );
}

