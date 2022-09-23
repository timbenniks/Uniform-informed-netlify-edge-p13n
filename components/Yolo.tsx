const Yolo = (props: any) => {
  return (
    <div style={{ padding: "20px 100px", position: "sticky", top: 0 }}>
      <p style={{ fontSize: "100px", fontWeight: "bold" }}>{props.title}</p>
    </div>
  );
};

export default Yolo;
