import { VideoGridT } from "@/types";
import React from "react";
import VideoGrid from "./VideoGrid";

interface Props {
  videoGrid: VideoGridT[];
}

function ProjectsGrid({ videoGrid }: Props) {
  return (
    <article className="">
      <h2 className="text-gray-500 text-center font-semibold text-2xl tracking-[2rem]">
        Projects
      </h2>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-5">
        {videoGrid.map((video) => (
          <VideoGrid key={video.slug.current} video={video} />
        ))}
      </div>
    </article>
  );
}

export default ProjectsGrid;
