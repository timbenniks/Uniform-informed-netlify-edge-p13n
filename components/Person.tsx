const Person = (props: any) => {
  const color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;

  return (
    <div
      style={{
        padding: "100px",
        background: color,
      }}
    >
      <p style={{ fontSize: "50px", fontWeight: "bold" }}>{props.name}</p>
      <img
        src={props.image}
        style={{ display: "block", width: "100%", height: "auto" }}
      />
    </div>
  );
};

export default Person;
