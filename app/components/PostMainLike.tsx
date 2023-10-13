import { useState } from "react";
import { Comments, Like, PostMainLikesCompTypes } from "../types";
import { BiSolidUpvote, BiUpvote, BiLoaderCircle } from "react-icons/bi";
import { useRouter } from "next/navigation";
import { AiOutlineComment } from "react-icons/ai";
import { PiShareFatFill } from "react-icons/pi";

export default function PostMainLikes({ post }: PostMainLikesCompTypes) {
  const router = useRouter();
  const [hasClickedLike, setHasClickedLike] = useState<boolean>(false);
  const [userLiked, setuserLiked] = useState<boolean>(false);
  const [comments, setComments] = useState<Comments[]>([]);
  const [likes, setLikes] = useState<Like[]>([]);

  const likeOrUnLike = () => {
    console.log("likeOrUnLike");
  };
  return (
    <>
      <div id={`PostMain-${post.id}`} className="relative mr-[75px]">
        <div className="absolute bottom-0 pl-2">
          <div className="pb-4 text-center">
            <button
              disabled={hasClickedLike}
              onClick={() => likeOrUnLike()}
              className="rounded-full p-2 cursor-pointer"
            >
              {!hasClickedLike ? (
                <BiSolidUpvote
                  color={likes?.length > 0 && userLiked ? "#3d5a80" : ""}
                  size="25"
                />
              ) : (
                <BiLoaderCircle className="animate-spin" size="25" />
              )}
            </button>
            <span className="text-xs text-gray-800 font-semibold">
              {likes?.length}
            </span>
          </div>
          <button
            onClick={() => router.push(`/post/${post?.profile?.user_id}`)}
            className="pb-4 text-center"
          >
            <div className="rounded-full p-2 cursor-pointer">
              <AiOutlineComment size="24" />
            </div>
            <span className="text-xs text-gray-800 font-semibold">
              {comments?.length}
            </span>
          </button>
          <button className="text-center">
            <div className="rounded-full p-2 cursor-pointer">
              <PiShareFatFill size="24" />
            </div>
            <span className="text-xs text-gray-800 font-semibold">55 </span>
          </button>
        </div>
      </div>
    </>
  );
}
