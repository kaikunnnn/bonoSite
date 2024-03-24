import React, { useRef, useState } from "react";
import useMemberStatus from "@/libs/memberstack/useMemberStatus";
import { PLANID } from "@/stripe/planId";

// Import Player
import H5AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

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
      {/* <audio
        ref={audioRef}
        className="w-full"
        controls
        controlsList="nodownload"
      >
        <source src={src} type="audio/mp4" />
        Your browser does not support the audio element.
      </audio> */}

      <H5AudioPlayer autoPlay src={src} onPlay={(e) => console.log("onPlay")} />
    </div>
  );
};

export default AudioPlayer;
