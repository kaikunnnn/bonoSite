import React, { useRef, useState } from "react";
import useMemberStatus from "@/libs/memberstack/useMemberStatus";
import { PLANID } from "@/stripe/planId";

// Import Player
import H5AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import CustomAudioUi from "./CustomAudioUi";

const AudioPlayer = ({ src }) => {
  const audioRef = useRef(null);
  const member = useMemberStatus();

  // 特定のプランIDを持つユーザーのみにコンテンツを表示する例
  // standard と growth のプランIDを取得
  const allowedPlanIds = [
    PLANID.standard.onemonth,
    PLANID.standard.threemonth,
    PLANID.growth.onemonth,
    PLANID.growth.threemonth,
  ];
  const hasAccess =
    member &&
    member.planConnections &&
    member.planConnections.some((plan) =>
      allowedPlanIds.includes(plan.payment.priceId)
    );

  if (!hasAccess) {
    return (
      <div>このコンテンツを聴くには、適切なサブスクリプションが必要です。</div>
    );
  }

  return (
    <div className="AudioPlayer w-full">
      <CustomAudioUi src={src} />
      {/* <H5AudioPlayer src={src} onPlay={(e) => console.log("onPlay")} /> */}
    </div>
  );
};

export default AudioPlayer;
