export const Filter = ({onChangeInputParticipentsHandler}) => {
    return(
        <>
        <p>Sort participants</p>
      <label>
        by fullname<input onChange={(e) => onChangeInputParticipentsHandler(e, 'fullname')}></input>
      </label>
      <label>
        by email<input onChange={(e) => onChangeInputParticipentsHandler(e, 'email')}></input>
      </label>
        </>
    )
}