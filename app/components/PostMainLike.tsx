import { useState } from "react";
import { Like, PostMainLikesCompTypes } from "../types";
import { BiSolidUpvote, BiUpvote, BiLoaderCircle } from "react-icons/bi";

export default function PostMainLikes({ post }: PostMainLikesCompTypes) {
  const [hasClickedLike, setHasClickedLike] = useState<boolean>(false);
  const [userLiked, setuserLiked] = useState<boolean>(false);
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
              className="rounded-full bg-gray-200 cursor-pointer"
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
        </div>
      </div>
    </>
  );
}
