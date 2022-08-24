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
        <p>Hallo &#123;first + surename&#125;,</p>
        <p>
          als kleines Dankeschön für Deinen Einsatz für die Energiewende
          erhältst von uns einen 25 € priwatt Gutschein. Diesen kannst Du selbst
          für Deine nächste Bestellung nutzen oder verschenken.
        </p>
        <p>Dein Gutscheincode lautet: </p>
        <Button href="https://priwatt.de/">
          priwattTR25
        </Button>
        <p>
        Viel Spaß!
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
