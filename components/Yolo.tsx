const Yolo = (props: any) => {
  return (
    <div
      style={{
        padding: "0 100px",
        background: "rgba(255, 255, 255, 0.8)",
        position: "fixed",
        top: 0,
        width: "100%",
      }}
    >
      <p style={{ fontSize: "100px", fontWeight: "bold" }}>{props.title}</p>
    </div>
  );
};

export default Yolo;
