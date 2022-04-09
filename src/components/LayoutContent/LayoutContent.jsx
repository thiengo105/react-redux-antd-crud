const LayoutContent = (props) => {
  return (
    <div style={{ backgroundColor: "#fff", marginLeft: 20, marginRight: 20, padding: 20 }}>
      {props.children}
    </div>
  )
}

export default LayoutContent;