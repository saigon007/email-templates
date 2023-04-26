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
        <Banner src="https://priwatt.de/wordpress/wp-content/uploads/2022/09/falsche-email.png" />

        <p>Liebe Kundin, lieber Kunde,</p>
        <p>
          <strong>
            Du hast heute zwischen 14 Uhr und 16:30 Uhr eine Versandbestätigung
            oder sonstige E-Mail von uns erhalten?
          </strong>{" "}
          Diese kannst Du ignorieren.
        </p>
        <p>
          Die Nachricht(en) wurden irrtümlicherweise aufgrund eines Fehlers in
          unserem E-Mail Systems versendet.
        </p>
        <p>Bitte entschuldige die damit verbundene Verwirrung!</p>
        <p>Vielen Dank für Dein Verständnis!</p>

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
