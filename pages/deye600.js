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
        <Banner src="https://priwatt.de/wordpress/wp-content/uploads/2022/08/wichtige-neuigkeiten.png" />
        <p>Liebe Kundin, lieber Kunde,</p>
        <p>
          <strong>Deine Entscheidung ist gefragt!</strong>
        </p>
        <p>
          Sicherlich wartest Du bereits gespannt auf Deine Stecker-Solaranlage,
          um in Deine private Energiewende starten zu können.
        </p>

        <p>
          Vor kurzem haben wir eine überraschende Nachricht erhalten: Dein
          bestellter Wechselrichter Deye Solar SUN600 gelangt nicht durch den
          Zoll und wird daher von uns durch den{" "}
          <strong>Bestseller-Wechselrichter Hoymiles HM-600</strong>{" "}
          ausgetauscht. Ist das ok für Dich?
        </p>
        <p>Du hast zwei Möglichkeiten:</p>
        <p>
          1. Wir tauschen Deinen Wechselrichter gegen unseren{" "}
          <strong>Bestseller Hoymiles HM-600</strong> aus.{" "}
          <strong>Der Tausch ist für Dich gratis</strong>.{" "}
        </p>

        <p>
          2. Du stornierst Deine Bestellung, was natürlich sehr schade wäre.
        </p>
        <p>
          <strong>Wichtig:</strong> Bitte antworte uns in jedem Fall auf diese E-Mail und teile
          uns mit, für welche Möglichkeit Du Dich entscheidest.
        </p>

        <p>
          <strong>
            Wir danken Dir vielmals für Deine Geduld und sind uns sicher: Sie
            wird sich auszahlen, sobald Du mit Deiner Stecker-Solaranlage das
            erste Mal eigenen Solarstrom produzierst!
          </strong>
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
