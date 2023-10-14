import { useEffect, useState } from "react";
import { Comments, Like, PostMainLikesCompTypes } from "../types";
import { BiSolidUpvote, BiUpvote, BiLoaderCircle } from "react-icons/bi";
import { useRouter } from "next/navigation";
import { AiOutlineComment } from "react-icons/ai";
import { PiShareFatFill } from "react-icons/pi";
import { useGeneralStore } from "../stores/general";
import { useUser } from "../context/user";
import useGetCommentsByPostId from "../hooks/useGetCommentsByPostId";
import useGetLikesByPostId from "../hooks/useGetLikesByPostId";
import useCreateLike from "../hooks/useCreateLike";
import useDeleteLike from "../hooks/useDeleteLike";
import useIsLiked from "../hooks/useIsLiked";

export default function PostMainLikes({ post }: PostMainLikesCompTypes) {
  let { setIsLoginOpen } = useGeneralStore();

  const contextUser = useUser();
  const router = useRouter();
  const [hasClickedLike, setHasClickedLike] = useState<boolean>(false);
  const [userLiked, setUserLiked] = useState<boolean>(false);
  const [comments, setComments] = useState<Comments[]>([]);
  const [likes, setLikes] = useState<Like[]>([]);

  useEffect(() => {
    getAllLikesByPost();
    getAllCommentsByPost();
  }, [post]);

  useEffect(() => {
    hasUserLikedPost();
  }, [likes, contextUser]);

  const getAllCommentsByPost = async () => {
    let result = await useGetCommentsByPostId(post?.id);
    setComments(result);
  };

  const getAllLikesByPost = async () => {
    let result = await useGetLikesByPostId(post?.id);
    setLikes(result);
  };

  const hasUserLikedPost = () => {
    if (!contextUser) return;

    if (likes?.length < 1 || !contextUser?.user?.id) {
      setUserLiked(false);
      return;
    }
    let res = useIsLiked(contextUser?.user?.id, post?.id, likes);
    setUserLiked(res ? true : false);
  };

  const like = async () => {
    setHasClickedLike(true);
    await useCreateLike(contextUser?.user?.id || "", post?.id);
    await getAllLikesByPost();
    hasUserLikedPost();
    setHasClickedLike(false);
  };

  const unlike = async (id: string) => {
    setHasClickedLike(true);
    await useDeleteLike(id);
    await getAllLikesByPost();
    hasUserLikedPost();
    setHasClickedLike(false);
  };

  const likeOrUnlike = () => {
    if (!contextUser?.user?.id) {
      setIsLoginOpen(true);
      return;
    }

    let res = useIsLiked(contextUser?.user?.id, post?.id, likes);

    if (!res) {
      like();
    } else {
      likes.forEach((like: Like) => {
        if (
          contextUser?.user?.id == like?.user_id &&
          like?.post_id == post?.id
        ) {
          unlike(like?.id);
        }
      });
    }
  };
  return (
    <>
      <div id={`PostMain-${post.id}`} className="relative mr-[75px]">
        <div className="absolute bottom-0 pl-2">
          <div className="pb-4 text-center">
            <button
              disabled={hasClickedLike}
              onClick={() => likeOrUnlike()}
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
function getAllLikesByPost() {
  throw new Error("Function not implemented.");
}

function getAllCommentsByPost() {
  throw new Error("Function not implemented.");
}
