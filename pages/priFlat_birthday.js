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
        <Banner src="https://priwatt.de/wordpress/wp-content/uploads/2023/06/spare100.png" />
        <p>Liebe Kundin, lieber Kunde,</p>
        <br />
        <p>
          wir haben tolle Neuigkeiten: Sichere Dir jetzt für{" "}
          <strong>100 € Rabatt auf Deine eigene Stecker-Solaranlage</strong>{" "}
          priFlat Duo von priwatt!
        </p>
        <p>
          Du hast ein Flachdach, einen Garten oder eine Terrasse und möchtest
          Deinen eigenen Solarstrom produzieren? Perfekt, dann ist das priFlat
          Duo Set ideal für Dich! Die Solaranlage kommt mit passgenauer
          Halterung zu Dir nach Hause und lässt sich schnell und einfach selbst
          installieren.
        </p>

        <p>
          Und es wird noch besser: Das Set ist Teil der neuen
          Balkonkraftwerk-Generation und auf 800 Watt upgradefähig! So bist Du
          perfekt gewappnet für die bevorstehende Erhöhung der maximalen
          Einspeiseleistung für Stecker-Solaranlagen!
        </p>
        <p>
          Deinen Gutscheincode PRIFLAT100 kannst Du ganz einfach im
          Bestellprozess angeben, um Dir noch heute Deine eigene
          Stecker-Solaranlage zum Vorteilspreis zu sicher.
        </p>
        <p>
          <Button href="https://priwatt.de/stecker-solaranlagen/flachdach/priflat-duo/SW10363.2">
            Hier gehts zum priFlat Duo!
          </Button>
        </p>

        <p>
          Unser Tipp für Dich: Nutze zudem unseren{" "}
          <strong>
            <a href="https://priwatt.de/service/anmeldeservice/">
              kostenlosen Anmeldeservice
            </a>
          </strong>
          . So wird nach dem Kauf auch die Registrierung Deiner Anlage zum
          Kinderspiel!
        </p>
        <p>
        Toll, dass Du gemeinsam mit uns die Energiewende gestaltest!
        </p>

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
