import { VideoGridT } from "@/types";
import React from "react";
import VideoGrid from "./VideoGrid";

interface Props {
  videoGrid: VideoGridT[];
}

function ProjectsGrid({ videoGrid }: Props) {
  return (
    <div className="">
      <h2 className="ml-10 md:ml-0 text-gray-500 flex text-center justify-center font-semibold text-2xl tracking-[2rem]">
        Projects
      </h2>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-5">
        {videoGrid.map((video) => (
          <VideoGrid key={video.slug} video={video} />
        ))}
      </div>
    </div>
  );
}

export default ProjectsGrid;
