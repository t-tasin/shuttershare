import { SingleCommentCompTypes } from "@/app/types";
import Link from "next/link";

export default function SingleComment({
  comment,
  params,
}: SingleCommentCompTypes) {
  return (
    <>
      <div
        id="SingleComment"
        className="flex items-center justify-between px-8 mt-4"
      >
        <div className="flex items-center relative w-full">
          <Link href={`/profile/${comment.profile.user_id}`}>
            <img
              className="absolute top-0 rounded-full lg:mx-0 mx-auto"
              width="40"
              src={comment.profile.image}
            />
          </Link>
        </div>
      </div>
    </>
  );
}
