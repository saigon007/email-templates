export default function Button({
  children,
  href = "https://priwatt.de/service/anmeldeservice",
}) {
  return (
    <>
      <a href={href}>
        {children}
      </a>
      <style jsx>{`
        a {
          display: block;
          margin: auto;
          color: white;
          text-decoration: none;
          background: #3edc99;
          padding: 15px 25px;
          margin-bottom: 20px;
          width: fit-content;
          border-radius: 20px;
          font-weight: 500;
          font-size: 16px;
        }
      `}</style>
    </>
  );
}
