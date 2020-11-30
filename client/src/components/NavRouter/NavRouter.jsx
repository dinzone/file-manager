import styled from "styled-components";

const ContainerDiv = styled.div`
    display:flex;
    flex-direction: row;
`;

const LinkDiv = styled.div`
    margin-right:0.2em;
    margin-left:0.2em;
    color:green;
    cursor:pointer;
    user-select:none;
    &:hover{
        color:#5bd45b;
        text-decoration:underline;
    }
`;

function NavRouter({ onPathClick, path }) {
    return (
        <ContainerDiv>
            {
                path.split('/').map((n) => (
                    <><LinkDiv key={`route_${n}`} onClick={() => onPathClick(n)}> {n} </LinkDiv><div> / </div></>
                ))
            }
        </ContainerDiv>
    )
};

export default NavRouter;