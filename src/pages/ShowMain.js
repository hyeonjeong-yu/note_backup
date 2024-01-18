import { useNavigate } from 'react-router-dom';
import { Button, Container, Form } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import Selectbox from './../components/Selectbox.js';
import Note from '../components/Note.js';
import Check from './../components/Check.js';
import { useEffect, useState } from 'react';

function ShowMain() {
    let navigate = useNavigate();
    let state = useSelector((state) => {return state});
    let note = state.note;
    let [modal, setModal] = useState(false);
    let [modalTitle, setModalTitle] = useState(0);
    
    // console.log(note);
    useEffect(() => {
        let noteList = [];
        let savedNote = localStorage.getItem('noteList');
        if (savedNote == null) {
            localStorage.setItem('noteList', JSON.stringify(noteList));
        }
    })

    return (
        <>
        <div className="note-wrap">
            <div className="note-content">
                <div className="note-header">
                    <h1 className="note-header__heading">My Note</h1>
                    <h4>기록하는 즐거움</h4>
                <Selectbox />
                </div>
                <Container className="note-container">
                    {
                    note !== null
                    ? note.map((param, i) => {
                        return (
                            <Note note={note[i]}
                                key={i}
                                setModal={setModal}
                                setModalTitle={setModalTitle}
                                num={i}
                            />
                        )
                    })
                    : <div></div>
                    }
                </Container>
                <Button className="note-button"
                    variant="outline-primary"
                    onClick={()=>{navigate("/create")}}>
                    새 노트
                </Button>
            </div>
        </div>
        {
            modal === true
            ? <Check note={note} setModal={setModal} modalTitle={modalTitle}/>
            : null
        }
        </>
    )
}

export default ShowMain;