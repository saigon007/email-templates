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
        <Banner src="https://priwatt.de/wordpress/wp-content/uploads/2023/01/Head-banner-3.png" />
        <p>Liebe Kundin, lieber Kunde,</p>
        <br />
        <p>
          wir haben tolle Neuigkeiten für Dich: Deine Wunsch-Stecker-Solaranlage{" "}
          <strong>priLight ist zurück in unserem Onlineshop</strong>.
        </p>
        <p>
          Das Besondere an unserem neuen priLight: Die Module sind{" "}
          <strong>
            super flexibel, leicht und perfekt für eine Montage in über vier
            Metern Höhe geeignet
          </strong>
          , da in den Solarmodulen keine Glasschicht verbaut.
        </p>
        <p>
          Das Set kommt in einer Basic-Variante ohne Halterung zu Dir nach Hause
          und ist vielfältig anbringbar. Vorschläge zur Befestigung findest Du
          in unserer{" "}
          <a href="https://priwatt.de/wordpress/wp-content/uploads/2023/01/L_15_priwatt_Montageanleitungen-web_02.pdf">
            Montageanleitung
          </a>
          .
        </p>

        <p>
          Um zum Produkt zu gelangen und noch mehr über das priLight
          herauszufinden, klicke auf den nachfolgenden Button:
        </p>
        <br/>
        <p>
          <Button href="https://priwatt.de/stecker-solaranlagen/balkon/prilight-ohne-halterung/SW10159.1">
            Hier geht`s zum priLight!
          </Button>
        </p>
        <p>
          Sollte Dir dieser Button nicht angezeigt werden, klicke bitte{" "}
          <a href="https://priwatt.de/stecker-solaranlagen/balkon/prilight-ohne-halterung/SW10159.1">
            hier
          </a>
          .
        </p>

        <p>
          Du hast noch Fragen? Dann schaue gerne in unseren{" "}
          <a href="https://priwatt.de/service/erklaer-videos/">Erklärvideos</a>,{" "}
          <a href="https://priwatt.de/service/faq/">FAQ</a> oder auf unseren{" "}
          <a href="https://priwatt.de/blog/">Blog</a> vorbei.
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
