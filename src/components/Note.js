// 노트 컴포넌트
import { useNavigate } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import { FaTrashCan, FaPencil } from 'react-icons/fa6';

function Note(props) {
    let navigate = useNavigate();
    let mode = "edit";

    return (
        <Card className="note-container__card">
            <Card.Header className="card-header">
                <div className="card-header__heading">
                    {props.note.title}{' '}
                    <span className={`badge badge-${props.note.variant} pill`}>
                        {props.note.priority}
                    </span>
                </div>
                <div className="card-header__button">
                    <span className="button__edit"
                        onClick={()=>{
                            navigate(`/${mode}/${props.note.id}`);
                        }}>
                    <FaPencil/></span>{' '}
                    <span className="button__delete"
                        onClick={()=>{
                            props.setModal(true);
                            props.setModalTitle(props.num);
                        }}
                    ><FaTrashCan/></span>
                </div>
            </Card.Header>
            <Card.Body>
                <blockquote className="blockquote mb-0">
                <p>
                    {props.note.content}{' '}
                </p>
                <footer className="blockquote-footer">
                    <cite title="Source Title">n분 전</cite>
                </footer>
                </blockquote>
            </Card.Body>
        </Card>
    )
}
export default Note;