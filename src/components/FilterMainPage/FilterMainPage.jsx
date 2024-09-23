export const Filter = ({onChangeInputHandler, event}) => {
  return (
    <>
      <p>Sort events</p>
      <label>
        by title<input onChange={(e) => onChangeInputHandler(e, 'name')}></input>
      </label>
      <label>
        by date<input onChange={(e) => onChangeInputHandler(e, 'date')}></input>
      </label>
      <label>
        by organizer<input onChange={(e) => onChangeInputHandler(e, 'organizer')}></input>
      </label>
    </>
  );
};
