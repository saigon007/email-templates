import Layout from "../components/Layout";
import Container from "../components/Container";
import Banner from "../components/Banner";
import BottomContainer from "../components/BottomContainer";
import Footer from "../components/Footer";

export default function Unterseite() {
  return (
    <Layout>
      <Container>
        <Banner src="https://priwatt.de/wordpress/wp-content/uploads/2023/07/Head-banner-32.png" />
        <p>Liebe Kundin, lieber Kunde,</p>
        <br />
        <p>
          Du hast Dein Balkonkraftwerk installiert und produzierst jetzt fleißig
          Deinen eigenen Sonnenstrom? Klasse, Du bist ein echtes Vorbild und
          leistest einen großartigen Beitrag zur privaten Energiewende. Dafür
          wollen wir Dir heute etwas zurückgeben!
        </p>
        <p>
          Als Dankeschön bekommst Du einen
          <strong>110 € Gutschein</strong> von uns.
        </p>
        <p>
          Nutze diesen gerne, um Deine Anlage zu erweitern oder Deinen
          FreundInnen, NachbarInnen oder Deiner Familie eine Freude zu machen!
          So unterstützt Du auch andere auf dem Weg in ihre private
          Energiewende.
        </p>

        <p>
          <strong>Dein Gutscheincode lautet:</strong> 28iE32C6
        </p>
        <p>
          Wir wünschen Dir weiterhin viel Spaß bei der Erzeugung Deines
          Solarstroms und freuen uns über Deine Weiterempfehlung!
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
