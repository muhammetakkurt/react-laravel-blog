import ReadMore from "./Icons/readMore";
import Profile from "./Profile";

const Article = ({ title, content }) => (
  <div className="flex flex-row justify-around mt-3">
    <Profile />
    <div className="ml-6 ">
      <h2 className="text-3xl">{title}</h2>
      <p>{content}</p>
      <span className="flex flex-row">
        Read more <ReadMore />
      </span>
    </div>
  </div>
);

export default Article;
