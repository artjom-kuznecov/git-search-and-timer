import React from 'react'
import { useLocalStorage } from '../../../../hooks/useLocalStorage';
import Card from './Card/Card'
import s from './Cards.module.css'

// id!
// [
//     com1, ----> cards
//     com2,
//     com3,
// ]
const Cards = ({cards}) => {
    const [commentsStorage, setCommentsStorage] = useLocalStorage([], 'comments')
    return (
        <div className={s.cards}>
            {
                cards.map(card => 
                <Card 
                commentsStorage = {commentsStorage}
                setCommentsStorage = {setCommentsStorage}
                key = {card.id}
                id = {card.id}
                projectName = {card.name} 
                authorName = {card.owner.login} 
                authorAvatar = {card.owner.avatar_url}  
                stargazers = {card.stargazers_count}  
                watchersCount= {card.watchers_count} 
                />)
            }
            
        </div>
    );
};

export default Cards;
