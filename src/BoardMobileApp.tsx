import React from 'react';
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import BoardHomeMobileView from './mobile/pages/BoardHomeMobileView';
import BoardDetailMobileView from './mobile/pages/BoardHomeMobileView';
import PostDetailMobileView from './mobile/pages/BoardHomeMobileView';
import PostWriteMobileView from './mobile/pages/BoardHomeMobileView';
import PostEditMobileView from './mobile/pages/BoardHomeMobileView';
import PostSearchMobileView from './mobile/pages/BoardHomeMobileView';
import CommentListMobileView from './mobile/pages/BoardHomeMobileView';
import CommentEditMobileView from './mobile/pages/BoardHomeMobileView';



const BoardMoibileApp = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element = {<Navigate replace to="/mobile/board-home"/> /*게시판 홈으로 리다이렉트 */}/> 
          <Route path="/mobile/board-home" element = {<BoardHomeMobileView/> /*게시판 홈 */}/>
          <Route path="/mobile/board-search" element = {<PostSearchMobileView/> /*포스트 찾기 */}/>
          <Route path="/mobile/board-detail/:boardId" element = {<BoardDetailMobileView/> /*게시판 상세보기 */}/>
          <Route path="/mobile/post-detail/:postId" element = {<PostDetailMobileView/> /*포스트 상세보기 */}/>
          <Route path="/mobile/post-write" element = {<PostWriteMobileView/> /*포스트 쓰기 */}/>
          <Route path="/mobile/post-edit" element = {<PostEditMobileView/> /*포스트 수정하기 */}/>
          <Route path="/mobile/post-detail/:postId/comment-list" element = {<CommentListMobileView/> /*댓글 리스트보기 */}/>
          <Route path="/mobile/comment-edit" element = {<CommentEditMobileView/> /*댓글 수정하기 */}/>
          </Routes>
      </BrowserRouter>
    </>
  );  
};

export default BoardMoibileApp;
