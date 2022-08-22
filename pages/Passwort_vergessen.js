import Layout from "../components/Layout";
import Container from "../components/Container";
import Banner from "../components/Banner";
import BottomContainer from "../components/BottomContainer";
import Footer from "../components/Footer";
import Button from "../components/Button";

export default function Passwort_vergessen() {
  return (
    <Layout>
      <Container>
        <Banner src="https://priwatt.de/wordpress/wp-content/uploads/2022/08/wichtige-neuigkeiten.png" />
        <p>Hallo &#123;First + surename&#125;,</p>
        <p>
          Du hast Dein Passwort vergessen? Das passiert den Besten! Klicke
          einfach auf den folgenden Button, um Dir schnell und sicher ein neues
          Passwort zu erstellen.
        </p>
        <Button href="https://priwatt.de/service/anmeldeservice">
          Hier klicken und Passwort ändern
        </Button>
        <p>
          Vielen Dank für Deine Geduld und toll, dass Du gemeinsam mit uns die
          Energiewende vorantreibst!
        </p>
        <BottomContainer />
        <style jsx>{`
          p {
            font-size: 16px;
            line-height: 24px;
            padding-bottom: 30px;
            margin: 0;
          }
          a {
            color: #3bdfac;
          }
        `}</style>
      </Container>
      <Footer />
    </Layout>
  );
}
