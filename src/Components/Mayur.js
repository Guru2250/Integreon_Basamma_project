
import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const Mayur = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    return (
      <div>
        <Button
          id="demo-positioned-button"
          aria-controls={open ? 'demo-positioned-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          dash
        </Button>
        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
  
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
      </div>
    );
}

export default Mayur
 // const [details,setDetails] = useState({firstname:"",lastname:"",email:"",dept:"",role:"",team:""})
  // const [temp,setTemp] = useState(null)
  // const setTempArray=(data)=>{
  //   setTemp(data)
  // }
  // const tableSubmit=()=>{
  //   temp.push(details)
  // }
  // const firstnameChange=(e)=>{
	// 	setDetails({...details,firstname:e.target.value})
	// }
  // const lastnameChange=(e)=>{
	// 	setDetails({...details,lastname:e.target.value})
	// }
  // const emailsChange=(e)=>{
	// 	setDetails({...details,email:e.target.value})
	// }
  // const deptChange=(e)=>{
	// 	setDetails({...details,dept:e.target.value})
	// }
  // const roleChange=(e)=>{
	// 	setDetails({...details,role:e.target.value})
	// }
  // const teamChange=(e)=>{
	// 	setDetails({...details,team:e.target.value})
	// }
  