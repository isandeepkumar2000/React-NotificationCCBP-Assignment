import React from "react";
import NxtwatchContext from "../../Contexts/NxtWatchContexts";
import { TendingContentType } from "../TrendingContent";
import { formatDistanceToNow } from "date-fns";
import { Link } from "react-router-dom";
import {
  ContainerLink,
  VideoItem,
  VideoItemChannel,
  VideoItemContent,
  VideoItemDetail,
  VideoItemDetailContainer,
  VideoItemImage,
  VideoItemImageContainer,
  VideoItemLogo,
  VideoItemOtherDetail,
  VideoItemOtherDetailContainer,
  VideoItemTitle,
} from "./styleComponets";
import { GoPrimitiveDot } from "react-icons/go";

interface SavedVideoPp {
  data: TendingContentType;
}

export type SavedVideoStyle = {
  darkMode: boolean;
};

const SavedVideoItem: React.FC<SavedVideoPp> = (props) => {
  const { data } = props;
  return (
    <NxtwatchContext.Consumer>
      {(value) => {
        const { isDarkMode } = value;
        const date = formatDistanceToNow(new Date(data.publishedAt), {
          addSuffix: true,
        });
        return (
          <ContainerLink
            to={"/Nxtwatch/video/" + data.id}
            className="nxtwatch-savedvideo-item"
          >
            <VideoItem>
              <VideoItemImageContainer>
                <VideoItemImage src={data.thumbnailUrl} alt="" />
              </VideoItemImageContainer>
              <VideoItemContent>
                <VideoItemLogo src={data.channel.profile_image_url} alt="" />
                <VideoItemDetail>
                  <VideoItemTitle darkMode={isDarkMode}>
                    {data.title}
                  </VideoItemTitle>
                  <VideoItemDetailContainer darkMode={isDarkMode}>
                    <VideoItemChannel>{data.channel.name}</VideoItemChannel>
                    <GoPrimitiveDot className="nxtwatch-video-item-dot nxtwatch-video-item-dot-small" />
                    <VideoItemOtherDetailContainer>
                      <VideoItemOtherDetail>
                        {data.viewCount}
                      </VideoItemOtherDetail>
                      <GoPrimitiveDot className="nxtwatch-video-item-dot" />
                      <VideoItemOtherDetail>{date}</VideoItemOtherDetail>
                    </VideoItemOtherDetailContainer>
                  </VideoItemDetailContainer>
                </VideoItemDetail>
              </VideoItemContent>
            </VideoItem>
          </ContainerLink>
        );
      }}
    </NxtwatchContext.Consumer>
  );
};

export default SavedVideoItem;