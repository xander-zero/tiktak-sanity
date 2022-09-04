import React from "react";
import { NextPage } from "next";
import { Video } from "../../interface/types";

interface IProps {
  post: Video;
}

const VideoCard: NextPage<IProps> = ({ post }) => {
  return <div></div>;
};

export default VideoCard;
