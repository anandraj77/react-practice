import { useDispatch } from "react-redux"
import styled from "styled-components"
import { clearAllAdmins } from "../store/actions"

const DeleteAllAdmins = () => {

  const dispatch = useDispatch()

  const handleClear = () => {
    dispatch(clearAllAdmins())
  }

  return (
    <Wrapper>
      <button className="clear-btn btn" onClick={handleClear}>Clear Users</button>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .clear-btn{
    text-transform: capitalize;
    background-color: #db338a;
    width: max-content;
    margin: 1.5rem auto;
  }
`

export default DeleteAllAdmins