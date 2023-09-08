import React, { useState } from 'react';

import star from './star.png'
import views from './views.png'

import Input from '../../../../../UI/Input/Input'
import Button from '../../../../../UI/Button/Button';
import Modal from '../../../../../UI/Modal/Modal';
import Pencil from '../../../../../UI/Pencil/Pencil.jsx'
import Comment from '../../Comment/Comment';

import s from './Card.module.css'
const Card = ({id, projectName, authorName, authorAvatar, stargazers, watchersCount}) => {

    const [comments, setComments] = useState([])
    const [comment, setComment] = useState({})

    const [modal, setModal] = useState(false) 
    const [disabled, setDisabled] = useState(true)

    const addNewComment = (e) => {
        e.stopPropagation()
        e.preventDefault()
        let d = new Date();
        const newComment = {
            ...comment,
            time: String(d.toLocaleTimeString('en-US'))
        }
        
        setComments([...comments, newComment])
        console.log(comments);
        if(comments.length!==1) setDisabled(false)
    }

    const openCard = (author, project) => {
        window.open(`https://github.com/${author}/${project}`, '_blank')
    }

    return (
        // мог бы через BrowserRouter, но так более локально
        <div 
        className = {s.card} 
        onClick={e =>{
            if (modal) return
            openCard(authorName, projectName)
        } }
        >
        
            
            <Modal visible={modal} setVisible={setModal} bgColor = {'#e8a87c'}>
                {comments.map ((comment, index)=> (
                    <Comment key={index} body = {comment.body} time = {comment.time}/>
                ))}

            </Modal>

            <div className={s.title}>{projectName}</div>

            <div className={s.author}>
                <img className={s.avatar} src={`${authorAvatar}`} alt="Аватар"/>
                <div className={s.name}>{authorName}</div>
            </div>

            <div className={s.info}>
                <div className={s.info__recense}>
                    <div className={s.rate}>
                        <img className={s.info__img} src = {star} alt = {projectName}/>
                        {stargazers}
                    </div>
                    <div className={s.views}>
                        <img className={s.info__img} src = {views} alt = {projectName}/>
                        {watchersCount}
                    </div>
                </div>
                <Button onClick = {e => {
                    e.stopPropagation()
                    setModal(true)

                }}
                disabled = {disabled}
                >
                    Показать комментарии
                </Button>
                
            </div>

            <form className={s.comment}>
                <Input 
                className={s.comment__input} 
                value = {comment.body}
                placeholder = 'Комментарий к проекту'
                type="text"
                onClick = {e => e.stopPropagation()}
                onChange = {e => {
                    setComment({body: e, id})
                    // setCommentsStorage( {...comment, body: e, key})
                    
                    
                }}
                
                />
                <Button className={s.comment__button} onClick = {addNewComment}>
                    <Pencil/>
                </Button>
            </form>
        </div>
    );
};

export default Card;
