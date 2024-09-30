"use client";

import { PostOwnerProps } from "@/libs/types"
import { CommentProps } from "@/libs/types"
import { ReplyProps } from "@/libs/types"


import Commentt from "@/components/Comment";

export default function PostOwner({
  userImagePath,
  username,
  text,
  likes
}:PostOwnerProps) {

  return (
    <div>
      <div className="vstack gap-3">
            <div className="d-flex align-items-center gap-3">
              <img
                src={userImagePath}
                width="48"
                height="48"
                className="rounded-circle"
                style={{ objectFit: "cover" }}
              />
              <span className="fw-semibold fs-5 text-white">
                {username}
              </span>
            </div>

            <span className="text-white">
              {text}
            </span>
            { likes > 0 &&
            <div className="d-flex align-items-center gap-1">
              <img src="/like.svg" width={20}></img>
              <span style={{ color: "#B0B3B8" }}>{likes} คน</span>
            </div>
            }
            <hr className="m-0 border" />
      </div>
    </div>
  )
}