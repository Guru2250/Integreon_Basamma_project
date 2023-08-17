import React, { useState, useEffect } from "react";
import styled from "styled-components";
import SideNavbar from "./SideNavbar";
import PhNumberInput from "./PhNumberInput";
import { Link } from "react-router-dom";
import TableSelection from "./TableSelection";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { Select } from "antd";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAlt";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditNoteIcon from "@mui/icons-material/EditNote";

const TeamManagement = () => {
  const [user, setUser] = useState([]);
  const [isEdit, setIsEdit] = useState(0);
  const [editableId, setEditableId] = useState(null);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  

  const columns = [
    {
      dataIndex: "Action",
      key: "action",
      render: (_, __, index) => (page - 1) * 2 + index + 1,
    },
    { dataIndex: "id", title: "Sl no" },
    { dataIndex: "firstname", title: "Firstname" },
    { dataIndex: "lastname", title: "Lastname" },
    { dataIndex: "email", title: "Email" },
    { dataIndex: "dept", title: "Department" },
    { dataIndex: "role", title: "Role" },
    { dataIndex: "team", title: "Team" },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <>
          <StyledButton
            onClick={(e) => {
              e.preventDefault();
              setIsEdit(1);
              user.forEach((data, index) => {
                if (data.email === record.email) {
                  setEditableId(index);
                }
              });
              setFunction(record);
            }}
          >
            <StyledEditIcon />
          </StyledButton>
          <StyledButton
            onClick={(e) => {
              e.preventDefault();
              user.forEach((data, index) => {
                if (data.email === record.email) {
                  deleteItem(index);
                }
              });
            }}
          >
            <StyledDeleteIcon />
          </StyledButton>
        </>
      ),
    },
  ];
  const [slNo, setSlNo] = useState(0);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [dept, setDept] = useState("");
  const [role, setRole] = useState("");
  const [phNo, setPhNo] = useState("");
  const [team, setTeam] = useState("");
  const setFunction = (setValues) => {
    setSlNo(slNo + 1);
    setFirstname(setValues.firstname);
    setLastname(setValues.lastname);
    setEmail(setValues.email);
    setDept(setValues.dept);
    setRole(setValues.role);
    setPhNo(setValues.phNo);
    setTeam(setValues.team);
  };

  const details = {
    id: "",
    firstname: firstname,
    lastname: lastname,
    email: email,
    dept: dept,
    role: role,
    team: team,
  };
  const [searchData, setSearchData] = useState([]);

  //search 
  useEffect(() => {
    setSearchData(
      user.filter((data) => {
        return (
          data.firstname.toLowerCase().startsWith(search.toLowerCase()) ||
          data.lastname.toLowerCase().startsWith(search.toLowerCase()) ||
          data.email.toLowerCase().startsWith(search.toLowerCase()) ||
          data.dept.toLowerCase().startsWith(search.toLowerCase()) ||
          data.role.toLowerCase().startsWith(search.toLowerCase()) ||
          data.team.toLowerCase().startsWith(search.toLowerCase())
        );
      })
    );
  }, [search, user]);
  const deleteItem = (deleterIndex) => {
    const updatedItem = user.filter((_, index) => index !== deleterIndex);
    setUser(updatedItem);
    console.log(updatedItem);
  };

  //sort
  const onSorterChange=(selectedSorter) =>{
    const sortedDataSet = [...user]
    if(selectedSorter === 'firstname'){
      sortedDataSet.sort((a, b)=>a.firstname > b.firstname ? 1 : a.firstname === b.firstname ? 0 : -1);
    }else if(selectedSorter === 'dept'){
      sortedDataSet.sort((a, b)=>a.dept > b.dept?1: a.dept === b.dept?0:-1);
    }
    else if(selectedSorter === 'team'){
      sortedDataSet.sort((a, b)=>a.team > b.team?1: a.team === b.team?0:-1);
    }else if(selectedSorter === 'role'){
      sortedDataSet.sort((a, b)=>a.role> b.role?1: a.role === b.role?0:-1); 
    }
    setUser(sortedDataSet);
  } 
  return (
    <div>
      <Wrapper>
        <div className="sidebar_div">
          <SideNavbar />
        </div>
        <div className="page-content">
          <div className="para_div">
            <p className="para_text">
              <Link style={{ textDecoration: "none" }} to="">
                Team management
              </Link>
              <span style={{ margin: "0 10px" }}>{">"}</span>
              <Link style={{ textDecoration: "none" }} to="">
                Add Member
              </Link>
            </p>
          </div>
          <SubDiv>
            <div className="UpperDiv" style={{ height: "40vh" }}>
              <h3 style={{ margin: "10px" }}>Add Member</h3>
              <hr />
              <Form
                id="myForm"
                onSubmit={(e) => {
                  e.preventDefault();
                  if (!isEdit) {
                    setUser([...user, details]);
                    setFunction({
                      slNo: slNo + 1,
                      firstname: "",
                      lastname: "",
                      email: "",
                      dept: "",
                      role: "",
                      phNo: "91",
                      team: "",
                    });
                  } else {
                    const tempObject = {
                      slNo: slNo,
                      firstname: firstname,
                      lastname: lastname,
                      email: email,
                      dept: dept,
                      role: role,
                      phNo: phNo,
                      team: team,
                    };
                    const tempDataSet = [...user];
                    tempDataSet[editableId] = tempObject;
                    setUser(tempDataSet);
                    setFunction({
                      slNo: slNo,
                      firstname: "",
                      lastname: "",
                      email: "",
                      dept: "",
                      role: "",
                      phNo: "91",
                      team: "",
                    });
                    setIsEdit(!isEdit);
                  }
                }}
              >
                <div className="form_control">
                  <LabelInput>
                    <Inputs
                      type="text"
                      value={firstname}
                      required
                      placeholder="Denis"
                      onChange={(e) => {
                        setFirstname(e.target.value);
                      }}
                    />
                    <Label for="fname">First name</Label>
                  </LabelInput>
                  <LabelInput>
                    <Inputs
                      type="text"
                      value={lastname}
                      required
                      placeholder="Richie"
                      onChange={(e) => {
                        setLastname(e.target.value);
                      }}
                    />
                    <Label for="fname">Last Name</Label>
                  </LabelInput>
                  <LabelInput>
                    <Inputs
                      type="email"
                      value={email}
                      required
                      placeholder="Denis@gmail.com"
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                    <Label for="fname">Email</Label>
                  </LabelInput>
                  <LabelInput>
                    <SelectInput
                      name="select-department"
                      value={dept}
                      required
                      onChange={(e) => {
                        setDept(e.target.value);
                      }}
                    >
                      <option value="select DepartMen">
                        select DepartMent
                      </option>
                      <option value="Finance">Finance</option>
                      <option value="SAP">SAP</option>
                      <option value="Testing">Testing</option>
                      <option value="Developing">Developing</option>
                      <option value="Devops">Devops</option>
                      
                    </SelectInput>
                    <Label for="fname">Department/BU</Label>
                  </LabelInput>
                  <LabelInput>
                    <SelectInput
                      name="role"
                      required
                      value={role}
                      onChange={(e) => {
                        setRole(e.target.value);
                      }}
                    >
                      <option value="select Role">select Role</option>
                      <option value="Assigner">Assigner</option>
                      <option value="Designer">Designer</option>
                      <option value="Tester">Tester</option>
                      <option value="Analyst">Analyst</option>
                    </SelectInput>
                    <Label for="fname">Role</Label>
                  </LabelInput>
                  <LabelInput>
                    <PhNumberInput value={phNo} setPhNo={setPhNo} />
                    <Label for="fname">Phone Number</Label>
                  </LabelInput>
                  <LabelInput>
                    <SelectInput
                      name="team-name"
                      required
                      value={team}
                      onChange={(e) => {
                        setTeam(e.target.value);
                      }}
                    >
                      <option value="Team Name">Team Name</option>
                      <option value="Intelectual Property">
                        Intelectual Property
                      </option>
                      <option value="Family Law">Family Law</option>
                      <option value="Administration">Administration</option>
                    </SelectInput>
                    <Label for="fname">Team Name</Label>
                  </LabelInput>
                </div>
                <div
                  className="button-div"
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    marginRight: "50px",
                  }}
                >
                  <Button form="myForm">
                    {isEdit ? "Edit Member" : "Add Member"}
                  </Button>
                </div>
              </Form>
            </div>
            <hr />
            <br />
            <div className="LowerDiv" style={{ height: "40vh" }}>
              <Header>
                <h4>&nbsp;&nbsp;&nbsp;Member List</h4>
                <SearchDiv>
                  <Paper
                    size="small"
                    component="form"
                    sx={{
                      p: "0",
                      display: "flex",
                      alignItems: "center",
                      width: "300px",
                      borderRadius: "50px",
                      border: "1px solid white",
                      background: "transparent",
                    }}
                  >
                    <IconButton
                      type="button"
                      sx={{ p: "0" }}
                      aria-label="search"
                    >
                      <SearchIcon sx={{ color: "white" }} />
                    </IconButton>
                    <InputBase
                      sx={{
                        color: "white",
                        "& .MuiInputBase-input": {
                          padding: "0",
                        },
                        "& input::placeholder": {
                          color: "white",
                          opacity: "0.8",
                        },
                      }}
                      value={search}
                      onChange={(e) => {
                        setSearch(e.target.value);
                      }}
                      placeholder="Search from  member list"
                      inputProps={{ "aria-label": "search google maps" }}
                    />
                  </Paper>
                  <div>
                    <Select
                      placeholder="Sort By"
                      onChange={onSorterChange}
                      size="small"
                      style={{
                        width: "100px",
                        fontSize: "5px",
                        position: "absolute",
                        transform: "translateY(5px)",
                        opacity: "0",
                        zIndex: "1",
                      }}
                    >
                      <Select.Option value="firstname">Name</Select.Option>
                      <Select.Option value="dept">Department</Select.Option>
                      <Select.Option value="team">Team</Select.Option>
                      <Select.Option value="role">Role</Select.Option>
                    </Select>

                    <Paper component="form" sx={paperStyle}>
                      <IconButton
                        type="button"
                        sx={{
                          p: "5px 5px",
                          margin: "0",
                          fontSize: "14px",
                          borderRadius: "50px",
                          width: "90px",
                          height: "20px",
                        }}
                      >
                        <span style={{ color: "white" }}>Sort By</span>
                        <FilterAltOutlinedIcon
                          sx={{
                            color: "white",
                            fontSize: "20px",
                            padding: "0",
                          }}
                        />
                      </IconButton>
                    </Paper>
                  </div>
                  {/* <SortButton>
                    sort by
                    <FilterAltIcon />
                  </SortButton> */}
                </SearchDiv>
              </Header>
              <TableSelection
                columns={columns}
                user={searchData ? searchData : user}
                setPage={setPage}
              />
            </div>
          </SubDiv>
        </div>
      </Wrapper>
    </div>
  );
};

const Wrapper = styled.section`
  width: 100%;
  height: 90vh;
  display: flex;

  .sidebar_div {
    width: 4%;
    height: 90vh;
  }

  .page-content {
    width: 96%;
    height: 90vh;
    background-color: #f9f8fe;
  }

  .para_div {
    width: 96%;
    height: 4vh;
  }

  .para_text {
    padding: 0px 5px;
    font-size: 17px;
  }
  .form_control {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    /* grid-gap: 16px; */
    grid-row-gap: 15px;
    align-items: center;
    /* justify-items: center; */
    padding-top: 25px;
  }
`;

const SubDiv = styled.div`
  margin: 10px;
  padding: 0px 25px;
  border-radius: 5px;
  background-color: #ffffff;
`;

const Form = styled.form`
  /* display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-gap: 20px;
  align-items: center;
  justify-items: center;
  padding: 40px 0; */
`;

const Inputs = styled.input`
  height: 30px;
  width: 100%;
  padding: 0 10px;
  border: 1px solid #dedede;
  border-radius: 3px;
  gap: 1rem;
  outline: none;
`;

const LabelInput = styled.div`
  height: 35px;
  width: 90%;
  position: relative;
`;
const Label = styled.label`
  position: absolute;
  left: 10px;
  top: -10px;
  background-color: #ffffff;
  padding: 0 2px;
  z-index: 1;
  color: darkgray;
  font-size: 12px;
`;
const SelectInput = styled.select`
  height: 34px;
  width: 100%;
  border: 1px solid #dedede;
  border-radius: 3px;
  padding: 0 10px;
  outline: none;
`;
const Button = styled.button`
  padding: 8px 15px;
  background-color: #89d9d8;
  color: white;
  border: 1px solid #89d9d8;
  border-radius: 5px;
`;

const Header = styled.div`
  width: 100%;
  height: 6vh;
  background-color: #89d9d8;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
`;
const SearchDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
`;
// const SortButton = styled.button`
//   padding: 0px 10px;
//   background-color: #89d9d8;
//   color: white;
//   border: 1px solid white;
//   border-radius: 50px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;

const StyledButton = styled.button`
  border: none;
  background: none;
`;
const StyledDeleteIcon = styled(DeleteOutlineIcon)`
  color: red;
`;
const StyledEditIcon = styled(EditNoteIcon)`
  color: #93d5e9;
`;

const paperStyle = {
  display: "flex",
  backgroundColor: "transparent",
  alignItems: "center",
  justifyContent: "center",
  border: "1px solid white",
  borderRadius: "50px",
  width: "100%",
  height: "25px",
  boxShadow: "0",
};
export default TeamManagement;
