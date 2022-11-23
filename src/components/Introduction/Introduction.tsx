import SoccerAnimation from "../../animations/SoccerAnimation";
import { Container } from "./style";

const Introduction = () => {
  return (
    <>
      <Container>
        <div>
          <h1>
            Your best <span>football</span> APP.
          </h1>
          <p>
            We are <span>REKTR</span>, a football application that came to make
            life easier for those looking for updated information.
          </p>
        </div>
        <SoccerAnimation />
      </Container>
    </>
  );
};

export default Introduction;
