import GlobalStyles from "./styles/GlobalStyles";
import Router from "./Router";

const App = () => {
  // const [teams, setTeams] = useState<any>([]);

  // const getTeams = async () => {
  //   const response = await api.get("/teams");
  //   setTeams(response.data);
  // };

  // useEffect(() => {
  //   getTeams();
  // }, []);

  // <Header />
  // {teams.teams?.map((team: Team) => (
  //   <p key={team.id}>{team.team_name}</p>
  // ))}

  return (
    <>
      <Router />
      <GlobalStyles />
    </>
  );
};

export default App;
