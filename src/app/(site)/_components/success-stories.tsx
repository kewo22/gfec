"use client";

import React, { useRef, useState } from "react";

import Image from "next/image";
import Plyr, { APITypes, PlyrProps } from "plyr-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPause, faPlay, faStop } from "@fortawesome/free-solid-svg-icons";
import Container from "./layouts/container";

import { Typography } from "../../_components/ui/typography";

import "plyr-react/plyr.css";

type SuccessStoryAudio = {
  image: string;
  audio: string;
  state: "playing" | "paused" | "stopped";
};

export default function SuccessStories() {
  const audioPlayer = useRef<APITypes | null>(null);

  const plyrProps2: PlyrProps = {
    source: {
      type: "audio",
      sources: [
        {
          src: "",
          type: "audio/mpeg",
        },
      ],
    },
  };

  const [plyrProps2State, setPlyrProps2State] = useState<PlyrProps | null>(
    plyrProps2
  );

  const xxx: SuccessStoryAudio[] = [
    {
      image: "/success-story.jpeg",
      audio: "/audio-1.mp3",
      state: "stopped",
    },
    {
      image: "/success-story.jpeg",
      audio: "/audio-2.mp3",
      state: "stopped",
    },
    {
      image: "/success-story.jpeg",
      audio: "/audio-3.mp3",
      state: "stopped",
    },
    {
      image: "/success-story.jpeg",
      audio: "/audio-1.mp3",
      state: "stopped",
    },
    {
      image: "/success-story.jpeg",
      audio: "/audio-2.mp3",
      state: "stopped",
    },
    {
      image: "/success-story.jpeg",
      audio: "/audio-1.mp3",
      state: "stopped",
    },
    {
      image: "/success-story.jpeg",
      audio: "/audio-2.mp3",
      state: "stopped",
    },
    {
      image: "/success-story.jpeg",
      audio: "/audio-3.mp3",
      state: "stopped",
    },
  ];

  const [xxxState, setXxxState] = useState<SuccessStoryAudio[]>(xxx);

  const onPlayAudio = (data: SuccessStoryAudio, i: number) => {
    setPlyrProps2State(null);
    if (!audioPlayer || !audioPlayer.current || !audioPlayer.current.plyr)
      return;

    const copy = { ...plyrProps2 };
    copy.source!.sources[0] = {
      ...copy.source!.sources[0],
      src: data.audio,
    };
    setPlyrProps2State(copy);
    setTimeout(() => {
      if (!audioPlayer || !audioPlayer.current || !audioPlayer.current.plyr)
        return;

      const audioCopy = [...xxxState];
      const allStopped: SuccessStoryAudio[] = audioCopy.map((obj) => {
        return {
          ...obj,
          state: "stopped",
        };
      });
      allStopped[i].state = "playing";
      setXxxState(allStopped);

      audioPlayer.current.plyr.play();
    }, 500);
  };

  const onPauseAudio = (data: SuccessStoryAudio, i: number) => {
    if (!audioPlayer || !audioPlayer.current || !audioPlayer.current.plyr)
      return;
    const audioCopy = [...xxxState];
    audioCopy[i].state = "paused";
    setXxxState(audioCopy);
    audioPlayer.current.plyr.pause();
  };

  const onResumeAudio = (data: SuccessStoryAudio, i: number) => {
    if (!audioPlayer || !audioPlayer.current || !audioPlayer.current.plyr)
      return;
    const audioCopy = [...xxxState];
    audioCopy[i].state = "playing";
    setXxxState(audioCopy);
    audioPlayer.current.plyr.play();
  };

  const onStopAudio = (data: SuccessStoryAudio, i: number) => {
    if (!audioPlayer || !audioPlayer.current || !audioPlayer.current.plyr)
      return;
    const audioCopy = [...xxxState];
    audioCopy[i].state = "stopped";
    setXxxState(audioCopy);

    const copy = { ...plyrProps2 };
    copy.source!.sources[0] = {
      ...copy.source!.sources[0],
      src: "",
    };
    setPlyrProps2State(copy);

    audioPlayer.current.plyr.stop();
  };

  return (
    <Container className="mx-0 lg:mx-auto py-20">
      <Typography variant="h2" className="text-secondary mb-10">
        Our <span className="text-primary">Success</span> Stories
      </Typography>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 place-items-center sm:gap-8">
        {xxxState.map((data, i) => {
          return (
            <div key={i} className="relative">
              <Image
                src={data.image}
                alt={data.image}
                height={300}
                width={300}
              />
              {data.state === "stopped" && (
                <div
                  className="bg-transparent text-transparent absolute top-0 left-0 flex flex-col items-center justify-center hover:bg-white/75 hover:text-secondary cursor-pointer w-full h-full transition-all duration-500 ease-in-out"
                  onClick={() => {
                    onPlayAudio(data, i);
                  }}
                >
                  <FontAwesomeIcon icon={faPlay} size="3x" />
                  <Typography variant="small" className="font-extrabold">
                    Click to listen
                  </Typography>
                </div>
              )}

              {data.state === "paused" && (
                <div
                  className="bg-white/75 text-secondary absolute top-0 left-0 flex flex-col items-center justify-center cursor-pointer w-full h-full"
                  onClick={() => {
                    onResumeAudio(data, i);
                  }}
                >
                  <FontAwesomeIcon icon={faPlay} size="3x" />
                  <Typography variant="small" className="font-extrabold">
                    Click to resume
                  </Typography>
                </div>
              )}

              {data.state === "playing" && (
                <div className="bg-white/75 text-secondary absolute top-0 left-0 flex flex-row items-center justify-center gap-5 cursor-pointer w-full h-full">
                  <div className="playing">
                    <span className="playing__bar playing__bar1"></span>
                    <span className="playing__bar playing__bar2"></span>
                    <span className="playing__bar playing__bar3"></span>
                  </div>
                  <FontAwesomeIcon
                    icon={faPause}
                    size="3x"
                    onClick={() => {
                      onPauseAudio(data, i);
                    }}
                  />
                  <FontAwesomeIcon
                    icon={faStop}
                    size="3x"
                    onClick={() => {
                      onStopAudio(data, i);
                    }}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
      {plyrProps2State && (
        <div className="absolute top-0 right-0 invisible">
          <Plyr {...plyrProps2State} ref={audioPlayer} />
        </div>
      )}
    </Container>
  );
}
