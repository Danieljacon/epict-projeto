import { Link } from "react-router-dom";

interface Props {
    title: string;
    date: string;
    author: string;
    image?: string;
    url?: string;
}

const LastNews = (props: Props) => {
  return (
    <Link className="flex flex-col cursor-pointer" to={`/news/${props.url}`}>
      <img
        src={props.image}
        alt={props.title}
        className="rounded-lg h-[124px]"
      />
      <h1 className="my-4 font-bold text-lg text-gray-700">
      {props.title}
      </h1>
      <div className="flex gap-2 text-xs text-gray-300">
        <span>{props.date}</span>
        <span>{props.author}</span>
      </div>
    </Link>
  );
};

export default LastNews;
