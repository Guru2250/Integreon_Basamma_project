import React from "react";
import { styled } from "styled-components";

const Table = () => {
  const columns = [
    { id: "id", name: "Sl no" },
    { id: "firstname", name: "Firstname" },
    { id: "lastname", name: "Lastname" },
    { id: "email", name: "Email" },
    { id: "dept", name: "Department" },
    { id: "role", name: "Role" },
    { id: "team", name: "Team" },
    { id: "action", name: "Action" },
  ];
	const rows=[
		{id:"1",
		firstname:"John",
		lastname:"Smith",
		email:"John@gmail.com",
		dept:"finance",
		role:"Designer",
		team:"Family law",
		action:"delete"
	},
	{id:"2",
		firstname:"John",
		lastname:"Smith",
		email:"John@gmail.com",
		dept:"finance",
		role:"Designer",
		team:"Family law",
		action:"delete"
	},
	{id:"3",
		firstname:"John",
		lastname:"Smith",
		email:"John@gmail.com",
		dept:"finance",
		role:"Designer",
		team:"Family law",
		action:"delete"
	}
	]
  return (
    <div>
      <Header>
        <h4>Member List</h4>
      </Header>
      <table height="30px" width="100%" border="2px solid #f3f3f3" rules="all">
        <thead>
          <tr>
            {columns.map((column) => {
              return <th key={column.id}>{column.name}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {rows.map((row,i)=>(<tr key={i}>{columns.map((column)=>(<td key={column.id}>{row[column.id]}</td>))}</tr>))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

const Header = styled.div`
  width: 100%;
  height: 5vh;
  background-color: #89d9d8;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
`;
// const deleteItem=(deleterIndex)=>{
//   const updatedItem=setUser.filter((_,index)=>index !==deleterIndex);
// }