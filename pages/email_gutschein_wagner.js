import Layout from "../components/Layout";
import Container from "../components/Container";
import Banner from "../components/Banner";
import BottomContainer from "../components/BottomContainer";
import Footer from "../components/Footer";

export default function Unterseite() {
  return (
    <Layout>
      <Container>
        <Banner src="https://priwatt.de/wordpress/wp-content/uploads/2023/04/Img-17.png" />
        <p>Liebe Kundin, lieber Kunde,</p>

        <p>
          <strong>
            vielen Dank, dass Du Deine Halterungsschienen überprüft und die
            richtigen Schienen verbaut hast!
          </strong>
        </p>
        <p>
          Als Entschädigung für die Umstände erhältst Du einen 50 € Gutschein
          für unseren Online-Shop. Du kannst ihn nach Belieben selbst einlösen,
          beispielsweise für eines unserer <a href="https://priwatt.de/zubehoer/energiemessung/">Energiemessgeräte</a>, oder einfach
          verschenken.
        </p>
        <p>
          <strong>Dein 50 € Rabattcode: SuYUf5K8</strong>
        </p>
    

        <p>
        Vielen Dank, dass Du mit Deiner Stecker-Solaranlage die Energiewende vorantreibst. Bei Rückfragen stehen wir Dir gerne zur Seite.
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

          ol li {
            margin-bottom: 20px;
            line-height: 24px;
          }

          ol {
            margin-top: 0;
          }
        `}</style>
      </Container>
      <Footer />
    </Layout>
  );
}
