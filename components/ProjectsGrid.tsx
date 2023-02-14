import React from "react";
import VideoGrid from "./VideoGrid";

type Props = {};

const videoProps = [
  {
    title: "Video1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis excepturi illum maiores laborum enim non nulla voluptatem accusantium soluta ad facere aut, nesciunt delectus veniam! Quos quis tempore quaerat et!",
    url: "https://www.youtube.com/watch?v=HtReHGjxXfM&t=1s",
  },
  {
    title: "Video2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis excepturi illum maiores laborum enim non nulla voluptatem accusantium soluta ad facere aut, nesciunt delectus veniam! Quos quis tempore quaerat et!",
    url: "https://www.youtube.com/watch?v=evpGMuhGUL0",
  },
  {
    title: "Video3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis excepturi illum maiores laborum enim non nulla voluptatem accusantium soluta ad facere aut, nesciunt delectus veniam! Quos quis tempore quaerat et!",
    url: "https://www.youtube.com/watch?v=wfTxV9Eqn5c",
  },
  {
    title: "Video4",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis excepturi illum maiores laborum enim non nulla voluptatem accusantium soluta ad facere aut, nesciunt delectus veniam! Quos quis tempore quaerat et!",
    url: "https://www.youtube.com/watch?v=SLqtpO_uulA",
  },
  {
    title: "Video5",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis excepturi illum maiores laborum enim non nulla voluptatem accusantium soluta ad facere aut, nesciunt delectus veniam! Quos quis tempore quaerat et!",
    url: "https://www.youtube.com/watch?v=2M4-zGNPzVg",
  },
  {
    title: "Video6",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis excepturi illum maiores laborum enim non nulla voluptatem accusantium soluta ad facere aut, nesciunt delectus veniam! Quos quis tempore quaerat et!",
    url: "https://www.youtube.com/watch?v=9jcpHRBgMXg",
  },
];

function ProjectsGrid({}: Props) {
  return (
    <div className="">
      <h2 className="ml-10 md:ml-0 text-gray-500 flex text-center justify-center font-semibold text-2xl tracking-[2rem]">
        Projects
      </h2>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-10">
        {videoProps.map((video) => (
          <VideoGrid key={video.description} video={video} />
        ))}
      </div>
    </div>
  );
}

export default ProjectsGrid;
