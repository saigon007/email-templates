import Layout from "../components/Layout";
import Container from "../components/Container";
import Banner from "../components/Banner";
import BottomContainer from "../components/BottomContainer";
import Footer from "../components/Footer";

export default function Unterseite() {
  return (
    <Layout>
      <Container>
        <Banner src="https://priwatt.de/wordpress/wp-content/uploads/2023/05/Head-banner-12.png" />

        <p>Liebe Kundin, lieber Kunde,</p>
        <p>
          vielen Dank für Deine Kontaktanfrage. Unser Support-Team hat aufgrund
          der hohen Nachfrage aktuell alle Hände voll zu tun. Dadurch verzögert
          sich die Antwortzeit um einige Tage. Wir bitten Dich, dies zu
          entschuldigen und melden uns schnellstmöglich bei Dir zurück.
        </p>
        <p>
          Du möchtest wissen, wann Deine Lieferung eintrifft? Den Liefertermin
          findest Du in der Bestellbestätigung. Über Änderungen Deines
          Liefertermins informieren wir Dich per E-Mail.
        </p>

        <p>
          In der Zwischenzeit kannst Du gerne in unserem{" "}
          <a href="https://priwatt.de/blog/">Blog</a> stöbern, oder einen Blick
          in unsere{" "}
          <a href="https://priwatt.de/service/erklaer-videos/">Erklärvideos</a>,{" "}
          und den
          <a href="https://priwatt.de/service/faq/">FAQ-Bereich</a> werfen.
        </p>

        <p>Toll, dass Du gemeinsam mit uns die Energiewende vorantreibst!</p>

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
