import Layout from "../components/Layout";
import Container from "../components/Container";
import Banner from "../components/Banner";
import BottomContainer from "../components/BottomContainer";
import Footer from "../components/Footer";
import Button from "../components/Button";

export default function Unterseite() {
  return (
    <Layout>
      <Container>
        <Banner src="https://priwatt.de/wordpress/wp-content/uploads/2023/02/Head-banner-4.png" />
        <p>Liebe Kundin, lieber Kunde,</p>
        <br />
        <p>
          heute ist Dein Glückstag: Feiere gemeinsam mit uns das Jubiläum
          unseres Onlineshops und sichere Dir Deine Wunsch-Stecker-Solaranlage{" "}
          <strong>priBasic Duo jetzt stark rabattiert für nur 589 €</strong>!
        </p>
        <p>
          <strong>
            Du heimwerkst gerne und möchtest Deinen eigenen Solarstrom
            produzieren? Perfekt
          </strong>
    , dann ist das priBasic Duo Set ideal für Dich. Die Anlage kommt ohne
          Halterung zu Dir nach Hause und bietet Dir so jede Menge kreativen
          Freiraum für die Befestigung des grünen Energielieferanten. 
          </p>
         <p> Und das
          Beste: Wenn Du heute bestellst, wird Deine Bestellung bereits morgen
          versendet.
        </p>
        <p>
          Klicke auf den folgenden Button und sichere Dir jetzt Deine
          Stecker-Solaranlage zum Jubiläumspreis:
        </p>
        <p>
          <Button href="https://priwatt.de/stecker-solaranlagen/basic/pribasic-duo-ohne-halterung/SW10289.1">
            Hier gehts zum priBasic Duo!
          </Button>
        </p>

        <p>Schnell sein lohnt sich, die Aktion geht nur bis zum 17.02.23.</p>
        <p>
          Unser Tipp für Dich: Nutze zudem unseren{" "}
          <a href="https://priwatt.de/service/anmeldeservice/">gratis Anmeldeservice</a>{" "}
          inklusive Anmeldegarantie. So wird nach dem Kauf auch die
          Registrierung Deiner Anlage zum Kinderspiel!
        </p>
        <p>Vielen Dank, dass Du gemeinsam mit uns die Energiewende vorantreibst!</p>

        <BottomContainer />
        <style jsx>{`
          p {
            font-size: 16px;
            line-height: 24px;
            padding-bottom: 20px;
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
