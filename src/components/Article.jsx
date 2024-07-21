import { useContext } from "react";
import { GlobalContext } from "../context";

const ArticleStatus = ({ isNew }) => {
  return isNew && <span> -- Baru!!!</span>;
};

const NewArticleStatus = () => {
  return <span> -- Baru !!!</span>;
};

function Article(props) {
  const user = useContext(GlobalContext);

  return (
    <>
      <h3>{props.title}</h3>
      <small>
        Date: {props.date}, tags: {props.tags.join(", ")}
        {/* {props.isNew ? " -- Baru!!!" : " Lama"} */}
        {/* {props.isNew && " -- Baru!!!"} */}
        <ArticleStatus isNew={props.isNew} />
        {props.isNew && <NewArticleStatus />}
      </small>
      <div>
        <small>ditulis oleh : {user.userName}</small>
      </div>
    </>
  );
}

export default Article;
