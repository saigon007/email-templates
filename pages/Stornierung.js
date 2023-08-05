import Layout from "../components/Layout";
import Banner from "../components/Banner";
import BottomContainer from "../components/BottomContainer";
import Footer from "../components/Footer";
import ContainerOrderNr from "../components/ContainerOrderNr";

export default function Unterseite() {
  return (
    <Layout>
      <ContainerOrderNr>
        <br />
        <Banner src="https://priwatt.de/wordpress/wp-content/uploads/2022/08/Stornierungsbestatigung.png" />
        <br />
        <p>&#123;ANSCHREIBEN&#125;,</p>

        <p>
          Deine Bestellung{" "}
          <strong>&#123;BELEGNR&#125; vom &#123;DATUM&#125;</strong> wurde
          erfolgreich storniert.
        </p>

        <p>
          <strong>Du hast Deine Bestellung bereits bezahlt?</strong> Das Geld
          wird Dir automatisch auf die bei der Bestellung verwendete
          Bezahlmethode erstattet (z. B. Klarna oder Kreditkarte).
        </p>
        <p>
          <strong>Du hast per Vorkasse bezahlt?</strong> Um Dir das Geld zu
          erstatten, antworte bitte auf diese E-Mail mit der Angabe Deiner IBAN,
          solltest Du uns diese noch nicht mitgeteilt haben. Dann wird Dir der
          volle Betrag schnellstmöglich zurückerstattet. Die Erstattung kann bis
          zu 7 Tage dauern.
        </p>

        <p>
          Du möchtest Feedback, Kritik oder Vorschläge teilen? Dann antworte
          gerne direkt auf diese E-Mail und teile deine Anregungen mit uns. Wir
          arbeiten stetig daran, priwatt weiterzuentwickeln und nehmen daher
          Dein Feedback dankend entgegen.
        </p>
        <p>
          Wir hoffen, Dich schon bald erneut bei priwatt begrüßen zu dürfen, um
          gemeinsam die Energiewende voranzubringen!
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
