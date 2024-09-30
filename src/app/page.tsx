"use client";

import PostOwner from "@/components/PostOwnner";
import Commentt from "@/components/Comment";
import { PostOwnerProps } from "@/libs/types";
import { CommentProps } from "@/libs/types";
import { comments } from "@/libs/comments";
import { ReplyProps } from "@/libs/types";

export default function Home() {

  const postOwner: PostOwnerProps = 
  {userImagePath : "/profileImages/me.jpg",
    username : "Dararat Buayim 660610759" ,
    text : "Quiz ง่ายจังเลยครับ ขอยาก ๆ กว่านี้ได้ไหม #261207" ,
    likes : 999};


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
        <PostOwner {...postOwner}/>

        {comments.map((comment:CommentProps) => (<Commentt key = {comment.username} {...comment} />))}

      </div>
    </div>
  );
}