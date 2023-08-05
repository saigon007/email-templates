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
        <Banner src="https://priwatt.de/wordpress/wp-content/uploads/2023/06/Zustellung-erfolgt.png" />

        <p>Hallo #123;#123; recipient.name #125;#125;</p>

        <p>
          wir hoffen, dass Du mit Deinem Balkonkraftwerk bereits jede Menge
          Solarstrom produzieren und Stromkosten einsparen konntest! Es ist ein
          tolles Gefühl, den eigenen grünen Strom zu verbrauchen, oder?
        </p>
        <p>
          Gerne kannst Du uns dabei unterstützen, noch mehr Menschen von unseren
          Balkonkraftwerken zu begeistern, indem Du Deine Erfahrungen mit
          anderen Energiewende-Begeisterten teilst.{" "}
        </p>



        <p>
        Das geht schnell und ganz einfach mithilfe einer Bewertung! Klicke dafür gerne{" "}
          <a href="https://g.page/r/Ca0bJQUVDFXSEBM/review">hier, um eine Google Bewertung für uns abzugeben</a>
           oder{" "}
          <a href="hhttps://www.provenexpert.com/priwatt-gmbh/1pay/">hier, um uns auf ProvenExpert zu bewerten</a>.
        </p>

        <p>
        Vielen Dank für Deine Unterstützung!
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
