import React from "react";
import VideoGrid from "./VideoGrid";

type Props = {};

const videoProps = [
  {
    title: "Video1",
    description:
      "GONZA ALGOetur adipisicing elit. Nobis excepturi illum maiores laborum enim non nulla voluptatem accusantium soluta ad facere aut, nesciunt delectus veniam! Quos quis tempore quaerat et!",
    url: "https://vimeo.com/799783404",
  },
  {
    title: "Video2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis excepturi illum maiores laborum enim non nulla voluptatem accusantium soluta ad facere aut, nesciunt delectus veniam! Quos quis tempore quaerat et!",
    url: "https://vimeo.com/799793512",
  },
  {
    title: "Video3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis excepturi illum maiores laborum enim non nulla voluptatem accusantium soluta ad facere aut, nesciunt delectus veniam! Quos quis tempore quaerat et!",
    url: "https://vimeo.com/799782953",
  },
  {
    title: "Video4",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis excepturi illum maiores laborum enim non nulla voluptatem accusantium soluta ad facere aut, nesciunt delectus veniam! Quos quis tempore quaerat et!",
    url: "https://vimeo.com/799783404",
  },
  {
    title: "Video5",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis excepturi illum maiores laborum enim non nulla voluptatem accusantium soluta ad facere aut, nesciunt delectus veniam! Quos quis tempore quaerat et!",
    url: "https://vimeo.com/799783404",
  },
  {
    title: "Video6",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis excepturi illum maiores laborum enim non nulla voluptatem accusantium soluta ad facere aut, nesciunt delectus veniam! Quos quis tempore quaerat et!",
    url: "https://vimeo.com/799783404",
  },
];

function ProjectsGrid({}: Props) {
  return (
    <div className="">
      <h2 className="ml-10 md:ml-0 text-gray-500 flex text-center justify-center font-semibold text-2xl tracking-[2rem]">
        Projects
      </h2>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-5">
        {videoProps.map((video) => (
          <VideoGrid key={video.description} video={video} />
        ))}
      </div>
    </div>
  );
}

export default ProjectsGrid;
