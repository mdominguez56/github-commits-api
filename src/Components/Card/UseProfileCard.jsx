import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 400,
  },
});

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

  const classes = useStyles();

  return (
    <div>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={avatar}
            title="Github user Avatar"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              GitHub user: {login}
            </Typography>
            <Typography gutterBottom variant="h5" component="h3">
              Repository: {name}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Link href={userHtml} target="_blank" rel="noopener">
            Github user
          </Link>
          <Link href={repoHtml} target="_blank" rel="noopener">
            Repository link
          </Link>
        </CardActions>
      </Card>
    </div>
  );
}
