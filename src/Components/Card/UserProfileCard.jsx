import React, { useState, useEffect } from "react";
import styled from "styled-components";
import CardMedia from "@material-ui/core/CardMedia";
import Link from "@material-ui/core/Link";

export default function UserProfileCard() {
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

  function handleClick() {}

  return (
    <div>
      <CardContainer>
        <CardImg image={avatar} title="github-user-avatar" />
        <CardTextContainer>
          <SubTitleContainer>
            <SubTitle>My Github user</SubTitle>
            <Link href={userHtml} target="_blank" rel="noopener">
              {login}
            </Link>
          </SubTitleContainer>
          <SubTitleContainer>
            <SubTitle>This repository</SubTitle>
            <Link href={repoHtml} target="_blank" rel="noopener">
              {name}
            </Link>
          </SubTitleContainer>
        </CardTextContainer>
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
  background-color: #efeceb;
  @media (max-width: 769px) {
    margin-top: 30px;
  }
`;

const CardImg = styled(CardMedia)`
  width: 300px;
  height: 300px;
`;

const CardTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 125px;
`;

const SubTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SubTitle = styled.p`
  font-size: 20px;
  font-weight: 600;
  margin: 0;
`;
