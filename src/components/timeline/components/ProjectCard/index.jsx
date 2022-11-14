import React, { Component } from "react";
import Axios from "axios";
import baseURL from "../../../../api/Github";
import GithubCard from "./components/GithubCard";
import * as S from './style'

// console.log('api_key', process.env.REACT_APP_API_KEY)

class ProjectCards extends Component {
  Title = [];
  state = {
    repo: [],
    language: [],
  };

  async componentDidMount() {
    const api_key = import.meta.env.VITE_API_KEY

    const repo = [
      baseURL(`Find_Pokemon`),
      baseURL(`CD_Portfolio`),
      baseURL(`event-app`),
      baseURL(`pokedex`),
      baseURL(`interface`),
      baseURL(`Gamifica-Relatorio`),
    ];

    await Axios.get("https://github-lang-deploy.herokuapp.com/").then(
      async (res) => await this.setState({ language: res.data })
    );
    repo.map(
      async (url) =>
        await Axios.get(url, {
          headers: {
            Authorization: `token ${api_key}`,
          },
        }).then(async (res) => {
          await this.setState({
            repo: [...this.state.repo, res.data],
          });
        })
    );
  }
  render() {
    const { repo, language } = this.state;
    // repo.sort((a, b) =>
    //   a.stargazers_count > b.stargazers_count
    //     ? -1
    //     : b.stargazers_count > a.stargazers_count
    //       ? 1
    //       : 0
    // );
    return (
      <S.ProjectCardsContainer>
        {repo.map((data, key) => (
            <GithubCard repo={data} key={key} language={language} />
        ))}
      </S.ProjectCardsContainer>
    );
  }
}
export default ProjectCards;