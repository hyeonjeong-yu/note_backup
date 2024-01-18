// 삭제 모달 컴포넌트
import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { deleteNote } from '../store';

function Check(props) {
    let dispatch = useDispatch();
    let note = props.note[props.modalTitle];
    return (
        <>
            <Modal.Dialog className="note-modal">
                <Modal.Header>
                    <Modal.Title>{note.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>노트를 정말 삭제할까요?</p>
                </Modal.Body>
                <Modal.Footer className="note-modal-footer">
                    <Button variant="secondary"
                        onClick={()=>{
                            props.setModal(false);
                        }}>닫기</Button>
                    <Button variant="primary"
                        onClick={()=>{
                            dispatch(deleteNote(note.id));
                        }}
                    >삭제하기</Button>
                </Modal.Footer>
            </Modal.Dialog>
            <div className="deem"></div>
        </>
    )
}
export default Check;