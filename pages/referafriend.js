import Layout from "../components/Layout";
import Container from "../components/Container";
import Banner from "../components/Banner";
import BottomContainer from "../components/BottomContainer";
import Footer from "../components/Footer";

export default function Unterseite() {
  return (
    <Layout>
      <Container>
        <Banner src="https://priwatt.de/wordpress/wp-content/uploads/2023/01/Head-banner-3.png" />
        <p>Liebe Kundin, lieber Kunde,</p>
        <br />
        <p>
          Du und Deine Stecker-Solaranlage leisten einen klasse Beitrag zur
          privaten Energiewende. Dafür wollen wir Dir heute etwas zurückgeben! .
        </p>
        <p>
          Als Dankeschön bekommst Du einen
          <strong>50 € Gutschein</strong> von uns.
        </p>
        <p>
          Nutze diesen gerne, um Deine Anlage zu erweitern oder Deinen Freunden,
          Nachbarn oder Deiner Familie eine Freude zu machen und sie auf dem Weg
          in ihre private Energiewende zu unterstützen.
        </p>

        <p>
          
          <strong>Dein Gutscheincode lautet:</strong> D50X23
        </p>
        <p>
        Wir wünschen Dir weiterhin viel Spaß bei der Erzeugung Deines eigenen Solarstroms.
Solltest Du Fragen zu Deiner Anlage haben, wende Dich gerne über das <a href="https://priwatt.de/kontakt/email/">Kontakformular</a> an unser Support-Team.

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
