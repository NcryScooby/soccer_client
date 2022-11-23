import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import api from "../../services/api";
import { Container } from "./style";

interface Team {
  id: number;
  team: string;
  tournament: string;
  country: string;
  continent: string;
}

const Teams = () => {
  const [teams, setTeams] = useState<any>([]);

  const getTeams = async () => {
    const response = await api.get("/teams");
    setTeams(response.data);
  };

  useEffect(() => {
    getTeams();
  }, []);

  return (
    <>
      <Header />
      <Container>
        {console.log(teams)}
        {teams.teams?.map((team: Team) => (
          <p key={team.id}>{team.team}</p>
        ))}
      </Container>
    </>
  );
};

export default Teams;
