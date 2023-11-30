import cards, { Card } from "../../assets/js/cards.js";
import DrawnCardComponent from "../../assets/js/drawn-card-component.js";

Card.imagePath = '../../assets/imgs/cards';

const containerElem = document.querySelector('#container');

cards
    .sort((card1, card2) => {
        if(card1.points == card2.points){
            return card1.name < card2.name ? -1 : 1; 
        }

        return card1.points - card2.points;
    })
    .forEach(card => {
        let drawnCardComponent = new DrawnCardComponent(card, []);
        containerElem.appendChild(drawnCardComponent.cardContainerElement);
    });