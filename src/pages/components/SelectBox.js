 const SelectBox = ({ selectItems = [] }) => {
  return (
    <div className={"select-box select-box-primary font-ds mt-auto mb-3 text-4xl text-center" }>
      <ul>
        {
          selectItems.map((value, index) => {
            return (
              <li key={index} className="select-box-item" onClick={value.handler}>{value.text}</li>
            );
          })
        }
      </ul>
    </div>
  );
}

export default SelectBox;