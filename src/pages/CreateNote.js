import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { createNote, editNote } from './../store.js';
import Radio from './../components/Radio.js'

function CreateNote() {
    let state = useSelector((state) => {return state});
    let note = state.note;
    let dispatch = useDispatch();
    let { id, mode } = useParams();
    let result = note.find(element => element.id === id);
    
    let [titleinputs, setTitle] = useState('');
    let [continputs, setContent] = useState('');
    let uuid = crypto.randomUUID(); 
    let [priority, setPriority] = useState('Low');
    let [variant, setVariant] = useState('warning');
    let priorityChk = (param) => {setPriority(param);}
    let variantChk = (param) => {setVariant(param)};
    // param: 자식인 Radio 컴포넌트에서 받은 값

    let newNote = {
        id : mode === "edit" ? result.id : uuid,
        title : titleinputs,
        priority : priority,
        variant: variant,
        content : continputs,
        update : mode === "edit"
            ? result.update
            : moment().format('YYYY-MM-DD HH:mm:ss'),
        editdate : mode === "edit" ? moment().format('YYYY-MM-DD HH:mm:ss') : null
    };

    useEffect(() => {
        // console.log(newNote);
        
    }, [titleinputs, continputs, priority])

    return (
        <>
        <div className="create-wrap">
            <div className="create-header">
                <h1 className="create-header__heading">New Note</h1>
            </div>
            <div className="create-content">
                <input type="text"
                    className="input__title"
                    placeholder="Enter title here"
                    onChange={(e)=>{
                        setTitle(e.target.value);
                    }}/>

                <Radio className="input__priority" priorityChk={priorityChk} variantChk={variantChk}/>
                
                <input type="textarea"
                    className="input__content"
                    placeholder="Enter detail here"
                    onChange={(e)=>{
                        setContent(e.target.value);}}
                />
                <Button variant="outline-primary"
                    onClick={ ()=> {
                        dispatch(
                            mode === "edit"
                            ? editNote(newNote)
                            : createNote(newNote)
                        );
                        console.log(state.note);
                        // let noteList = JSON.parse(localStorage.getItem('noteList'));
                        // noteList.push(newNote);
                        // localStorage.setItem('noteList', JSON.stringify(noteList));
                    }}>
                        {mode === "edit" ? "수정" : "완료"}
                    </Button>
            </div>
        </div>
        </>
    )
}

export default CreateNote;