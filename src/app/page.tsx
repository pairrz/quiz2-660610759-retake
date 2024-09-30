"use client";

import { PostOwnnerProps } from "@/libs/types"
import { CommentProps } from "@/libs/types"
import { ReplyProps } from "@/libs/types"
import { comments } from "@/libs/comments"

import Commentt from "@/components/Comment";

import PostOwnnerr from "@/components/PostOwnner";

export default function Home() {

  const postOwner: PostOwnnerProps = 
  {userImagePath : "/profileImages/me.jpg",
    username : "Dararat Buayim 660610759" ,
    commentText : "ท้อแทร่มากกกกกๆๆๆๆ" ,
    likeNum : 999};


  return (
    <div
      style={{ minHeight: "100vh", backgroundColor: "#18191A" }}
      className="p-3"
    >
      {/* Entire App Container */}
      <div
        style={{ maxWidth: "700px", backgroundColor: "#242526" }}
        className="mx-auto p-3 rounded rounded-3 shadow-sm"
      >
        {/* Post Owner Example*/}
        <PostOwnnerr {...postOwner}/>

        {comments.map((comment:CommentProps) => (<Commentt key = {comment.username} {...comment} />))}

      </div>
    </div>
  );
}