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
        <Banner src="https://priwatt.de/wordpress/wp-content/uploads/2023/02/Head-banner-5.png" />
        <p>Liebe Kundin, lieber Kunde,</p>
        <br />
        <p>
        heute ist Dein Glückstag: Feiere gemeinsam mit uns die Verlängerung unseres Shop-Jubiläums und hole Dir unsere beliebteste Stecker-Solaranlage{" "}
          <strong>priFlat Duo jetzt stark rabattiert für nur 699 €!</strong>
        </p>
        <p>
          <strong>
          Du hast ein Flachdach, einen Garten oder eine Terrasse, und möchtest Deinen eigenen Solarstrom produzieren? Perfekt
          </strong>
    , dann ist das priFlat Duo Set ideal für Dich. Die Anlage kommt mit passgenauer Halterung zu Dir nach Hause und lässt sich flexibel, schnell und einfach selbst installieren. 
          </p>
       
        <p>
        Klicke auf den folgenden Button und sichere Dir jetzt Deine Stecker-Solaranlage zum Jubiläums-Preis.
        </p>
        <p>
          <Button href="https://priwatt.de/stecker-solaranlagen/flachdach/priflat-duo/SW10302.1">
            Hier gehts zum priFlat Duo!
          </Button>
        </p>

        <p>Die Aktion geht bis zum 24.02.23.</p>
        <p>
          Unser Tipp für Dich: Nutze zudem unseren{" "}
          <strong><a href="https://priwatt.de/service/anmeldeservice/">kostenlosen Anmeldeservice</a></strong>. So wird nach dem Kauf auch die
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
