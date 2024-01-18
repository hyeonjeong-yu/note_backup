// * Redux
import { configureStore, createSlice } from '@reduxjs/toolkit';

let noteList = JSON.parse(localStorage.getItem('noteList'));

let note = createSlice({
    name: 'note',
    initialState:
        JSON.parse(localStorage.getItem('noteList')),
        // 1. localStorage에 저장소의 정보를 객체화
        // 2. state로 저장
    reducers: {
        createNote(state, action) {
            // 데이터 생성
            // console.log(action.payload);
            // state.concat(action.payload);
            noteList.push(action.payload);
            localStorage.setItem('noteList', JSON.stringify(noteList));
            window.location.replace("/");
        },
        deleteNote(state, action) {
            // 데이터 삭제
            // 1. 로컬스토리지에서 id 값이 동일한 배열의 인덱스값을 저장
            // 2. 해당 인덱스 객체를 삭제
            // 3. 저장소에 새로 저장

            let findIdx = noteList.findIndex(element => element.id == action.payload);

            noteList.splice(findIdx, 1);
            localStorage.setItem('noteList', JSON.stringify(noteList));
            window.location.reload();
            // *** page reload 고민, state가 변경되면 ...
        },
        editNote(state, action) {
            // 데이터 수정
            let findIdx = noteList.findIndex(element => element.id == action.payload.id);
            noteList[findIdx] = action.payload;
            localStorage.setItem('noteList', JSON.stringify(noteList));
            window.location.replace("/");
        }
    }
})

export default configureStore({
  reducer: {
    // 등록
    note : note.reducer,
  }
})

export let { createNote, deleteNote, editNote } = note.actions;


