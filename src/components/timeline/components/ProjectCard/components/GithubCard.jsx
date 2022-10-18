import React from "react";
import * as S from './style'

const GithubCard = ({ repo, language }) => {
  return (
    <S.ProjectCardWrapper>
      <h3>
        <a
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {repo.name}
        </a>
      </h3>
      <div>
        <p>{repo.description}</p>
      </div>
      <S.CardActions>
        {repo.language ? (
          <React.Fragment>
            <S.Dot
              style={{ backgroundColor: language[repo.language]["color"] }}
            />
            <span style={{ marginRight: "10px" }}>
              {repo.language}
            </span>
          </React.Fragment>
        ) : null}
      </S.CardActions>
    </S.ProjectCardWrapper>
  );
};

export default GithubCard;