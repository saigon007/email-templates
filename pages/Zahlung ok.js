import Layout from "../components/Layout";
import ContainerOrderNr from "../components/ContainerOrderNr";
import Banner from "../components/Banner";
import BottomContainer from "../components/BottomContainer";
import Footer from "../components/Footer";

export default function Unterseite() {
  return (
    <Layout>
      <ContainerOrderNr>
        <Banner src="https://priwatt.de/wordpress/wp-content/uploads/2022/05/zahlung.png" />

        <p></p>
        <p>Hallo &#123;NAME&#125;,</p>

        <p>
          tolle Neuigkeiten:{" "}
          <strong>
            die Zahlung zu Deiner Bestellung &#123;INTERNET&#125; vom
            &#123;DATUM&#125; ist bei uns eingegangen.
          </strong>{" "}
          Vielen Dank! Im nächsten Schritt wird Deine Bestellung sorgfältig von
          unserem Team verpackt und an unseren Logistik-Partner übergeben.
        </p>

        <p>
          Sobald das geschehen ist, erhältst Du von uns eine Benachrichtigung
          und die Tracking-Nummern, mit denen Du Deine Sendungen verfolgen
          kannst.
        </p>

        <p>
          Das voraussichtliche Lieferdatum findest Du in Deiner vorangegangenen
          Auftragsbestätigung.
        </p>

        <p>
          <strong>Wichtig:</strong> Eventuell wird Dich Deine Lieferung in{" "}
          <strong>
            zwei Teilsendungen innerhalb des oben genannten Lieferzeitraums
          </strong>{" "}
          erreichen. Bitte warte mit Rückfragen zur Zustellung also bis zum
          angegebenen Lieferzeitpunkt.
        </p>

        <p>
          Du hast noch Fragen? Dann schaue gerne in unserem{" "}
          <a href="https://priwatt.de/blog/">Blog</a> , unseren{" "}
          <a href="https://priwatt.de/service/faq/">FAQ</a> oder{" "}
          <a href="https://priwatt.de/service/erklaer-videos/">Erklärvideos</a>,{" "}
          vorbei.
        </p>
        <p>
          Vielen Dank, dass Du gemeinsam mit uns die Energiewende vorantreibst!
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
      </ContainerOrderNr>
      <Footer />
    </Layout>
  );
}
