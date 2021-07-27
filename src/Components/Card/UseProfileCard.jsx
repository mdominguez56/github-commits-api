import React, { useState, useEffect } from "react";
import styled from "styled-components";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import Link from "@material-ui/core/Link";

export default function UseProfileCard() {
  const [name, setName] = useState("");
  const [login, setLogin] = useState("");
  const [avatar, setAvatar] = useState("");
  const [userHtml, setUserHtml] = useState("");
  const [repoHtml, setRepoHtml] = useState("");

  useEffect(() => {
    fetch("https://api.github.com/repos/mdominguez56/github-commits-api")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const setData = ({ name, owner, html_url }) => {
    setName(name);
    setLogin(owner.login);
    setAvatar(owner.avatar_url);
    setUserHtml(owner.html_url);
    setRepoHtml(html_url);
  };

  return (
    <div>
      <CardContainer>
        <CardImg image={avatar} title="github-user-avatar" />
        <CardTextContainer>
          <SubTitleContainer>
            <SubTitle>GitHub user: </SubTitle> {login}
          </SubTitleContainer>
          <SubTitleContainer>
            <SubTitle>Repository: </SubTitle> {name}
          </SubTitleContainer>
        </CardTextContainer>
        <CardActions>
          <Link href={userHtml} target="_blank" rel="noopener">
            Github user
          </Link>
          <Link href={repoHtml} target="_blank" rel="noopener">
            Repository link
          </Link>
        </CardActions>
      </CardContainer>
    </div>
  );
}

const CardContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.07);
`;

const CardImg = styled(CardMedia)`
  width: 400px;
  height: 400px;
`;

const CardTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 125px;
`;

const SubTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const SubTitle = styled.h2`
  font-weight: 600;
  margin: 0;
`;
