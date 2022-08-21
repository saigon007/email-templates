import Logo from "../components/Logo";

export default function Container({ children }) {
  return (
    <div className="container">
      <Logo />
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
      `}</style>
    </div>
  );
}
