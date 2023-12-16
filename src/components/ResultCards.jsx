import {Link} from "react-router-dom";

const ResultCards = ({title,objectId,author}) => {
    return (
        <div className={"p-2 backdrop-blur bg-green-50 m-2 rounded-2xl"}>

          <Link  to={`/details/${objectId}`}>
             <h1>
                 {title}
             </h1>
              <span>
                  {author}
              </span>
          </Link>
        </div>
    );
};

export default ResultCards;