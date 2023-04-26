import Logo from "../components/Logo";
import OrderNr from "./OrderNr";

export default function ContainerOrderNr({
  children,
  varordernr = "# {BELEGNR}",
}) {
  return (
    <div className="container">
      <div className="header">
        <Logo />
        <OrderNr>{varordernr}</OrderNr>
      </div>
      {children}
      <style jsx>{`
        .container {
          padding: 50px 30px;
          background-color: white;
          margin: auto;
          border-radius: 30px;
          max-width: 600px;
          margin-bottom: 30px;
        }
        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
      `}</style>
    </div>
  );
}
