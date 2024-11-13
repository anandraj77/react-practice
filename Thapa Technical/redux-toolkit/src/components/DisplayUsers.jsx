import { MdDeleteForever } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"
import { deleteUser } from "../store/slices/UserSlice";

export const DisplayUsers = () => {

    const dispatch = useDispatch()

    const data = useSelector((state) => {
        return state.users;
    })

    console.log(data);

    const handleDelete = (index) => {
        dispatch(deleteUser(index))
    }

    return (
        <Wrapper>
            {
                data.map((curElem, index) => {
                    return (
                        <li key={index}>
                            {curElem}
                            <button className="btn-delete" onClick={() => handleDelete(index)}>
                                <MdDeleteForever className="delete-icon"/>
                            </button>
                        </li>
                    )
                })
            }
        </Wrapper>
    )
}

const Wrapper = styled.section`
 li{
    width:100%;
    padding: 10px;
    text-align: left;
    border-top: .1px solid;
    display: flex;
    align-items: center;
    justify-content: space-between;
 }
 .btn-delete{
    border: none;
    background: none;
 }
`