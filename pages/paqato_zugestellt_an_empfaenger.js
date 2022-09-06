import Layout from "../components/Layout";
import Container from "../components/Container";
import Banner from "../components/Banner";
import BottomContainer from "../components/BottomContainer";
import Footer from "../components/Footer";

export default function Unterseite() {
  return (
    <Layout>
      <Container>
        <Banner src="https://priwatt.de/wordpress/wp-content/uploads/2022/07/wunschprodukt.png" />
        <p>
          <strong>
            Deine priwatt Bestellung #123;#123; orderNumber #125;#125; wurde
            erfolgreich zugestellt!
          </strong>
        </p>
        <p>Hallo #123;#123; recipient.name #125;#125;</p>
        <p>Deine private Energiewende beginnt jetzt!</p>
        <p>
          Dein Paket von priwatt mit der Sendungsnummer #123;#123; trackingCode
          #125;#125 wurde heute erfolgreich Deiner angegebenen Adresse
          zugestellt.
        </p>
        <p>#123;#123; recipient #125;#125</p>

        <p>
          Vielen Dank für Deine Bestellung und Deinen Beitrag zur privaten
          Energiewende! Wir wünschen Dir viel Spaß mit Deiner
          Stecker-Solaranlage.{" "}
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
