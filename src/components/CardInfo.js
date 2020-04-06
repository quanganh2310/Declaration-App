import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import { green } from '@material-ui/core/colors';
import { blue } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuButton from "./MenuButton.js"
import EditForm from "./EditForm.js"


const useStyles = makeStyles((theme) => ({
  root: {
      background: red,
      marginTop:20,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: green[500],
  },
  title: {
    color: red,
  },
}));

export default function CardInfo({firstname,
  lastname,
  student_id,
  sex,
  class_name,
  address,
  phone_number,
  email,
  question1,
  question2,
  question3,
  question4,
  handleDelete,
  startEditing,
  stopEditing,
  editIdx,
  handleSave,
  card_index
}) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  let renderRadio = (question,student_id,num) => {
    if (question === true) {
      return (
          <p>
            <label>
              <input class="with-gap" name={student_id+num} type="radio" 
              disabled="disabled" 
              checked />
              <span></span>
            </label>
          </p>
      );
    }
    else {
      return (
        <p>
         <label>
            <input class="with-gap" name={student_id+num} type="radio" 
            disabled="disabled" 

            />
            <span></span>
          </label>
        </p>
      );
    }
  };

  let renderCheckbox = (question,student_id,num) => {
    if (question === true) {
      return (
        <input class="with-gap" name={student_id+num}   type="checkbox" checked="checked" disabled="disabled" />
      );
    }
    else {
      return (
        <input class="with-gap" name={student_id+num}   type="checkbox" disabled="disabled" />
      );
    }
  };

  let renderContent = (firstname,lastname,student_id,sex,class_name,address,phone_number,email,question1,question2,question3,question4,handleDelete,startEditing,stopEditing,editIdx,handleExpandClick,handleSave,card_index) => {
    if(editIdx === card_index) {
      return (
        <EditForm
          key={student_id}
          firstname = {firstname}
          lastname = {lastname}
          student_id = {student_id}
          sex = {sex}
          class_name = {class_name}
          address = {address}
          phone_number = {phone_number}
          email = {email}
          question1a1 = {question1.a1}
          question1a2 = {question1.a2}
          question2a1 = {question2.a1}
          question2a2 = {question2.a2}
          question3a1 = {question3.a1}
          question3a2 = {question3.a2}
          question4a1 = {question4.a1}
          question4a2 = {question4.a2}
          question4a3 = {question4.a3}
          question4 = {question4}
          // question2 = {question2}
          // question3 = {question3}
          // question4 = {question4}
          stopEditing = {stopEditing}
          handleSave = {handleSave}
          card_index = {card_index}
        />
      );
    }
    else {
      return (
        <div>
              <h6>
                <div class="row">
                  <div class="col s1">
                    <i  class="material-icons prefix">account_circle</i>
                  </div>
                  <div class="col s4">
                    {firstname+" "+lastname}
                  </div>
                  <div class="col s4">Giới tính: &nbsp;&nbsp;&nbsp;&nbsp;{sex}</div>
                  <div align="right" >
                    <MenuButton handleDelete={handleDelete} startEditing={startEditing} handleExpandClick={handleExpandClick}></MenuButton>
                  </div>
                </div>
              </h6>
            
              <h6>
                <div class="row">
                  <div class="col s1">
                    <i  class="material-icons prefix">receipt</i>
                  </div>
                  <div class="col s4">
                    {class_name}
                  </div>
                  <div class="col s4">MSSV:&nbsp;&nbsp;&nbsp;&nbsp; {student_id}</div>
                </div>
              </h6>

              <h6>
                <div class="row">
                  <div class="col s1">
                    <i  class="material-icons prefix">home</i>
                  </div>
                  <div class="col s4">
                    {address}
                  </div>
                </div>
              </h6>

              <h6>
                <div class="row">
                  <div class="col s1">
                    <i  class="material-icons prefix">local_phone</i>
                  </div>
                  <div class="col s4">
                    {phone_number}
                  </div>
                  <div class="col s1">
                    <i  class="material-icons prefix">local_post_office</i>
                  </div>
                  <div class="col s4">
                    {email}
                  </div>
                </div>
              </h6>


              <table>
                <thead>
                  <tr>
                    <th width="170"></th>
                    <th width="30">Có</th>
                    <th width="30">Không</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td width="170"><h6>Có lưu trú, đi từ/qua vùng có Dịch (Trung Quốc, Anh, Mỹ, Đức Hà Nội, TP Hồ Chí Minh,...)</h6></td>
                    <td>
                      {renderRadio(question1.a1,student_id,1)}
                    </td>
                    <td>
                      {renderRadio(question1.a2,student_id,1)}
                    </td>
                  </tr>
                  <tr>
                    <td><h6>Có tiếp xúc với người bệnh hoặc nghi ngờ mắc bệnh COVID-19</h6></td>
                    <td>
                      {renderRadio(question2.a1,student_id,2)}
                    </td>
                    <td>
                      {renderRadio(question2.a2,student_id,2)}
                    </td>
                  </tr>
                  <tr>
                    <td><h6>Bạn có tiếp xúc với người từ nước có bệnh COVID-19</h6></td>
                    <td>
                     {renderRadio(question3.a1,student_id,3)}
                    
                    </td>
                    <td>
                    {renderRadio(question3.a2,student_id,3)}
                     
                    </td>
                  </tr>
                </tbody>
              </table>

              <div class="row">
                    <div class="input-field col s12"><h6>Bạn có thấy xuất hiện dấu hiệu:</h6>
                      <span class="helper-text" data-error="wrong" data-success="right">Trong vòng 14 ngày</span></div>
                    <br/><br/>
                    <div class="col s1"></div>
                    <div class="col s11" >  
                      <p>
                        <label>
                          {renderCheckbox(question4.a1,student_id,4)}
                          <span>Sốt</span>
                        </label>
                      </p> 
                      <p>
                        <label>
                        {renderCheckbox(question4.a2,student_id,4)}
                          <span>Ho</span>
                        </label>
                      </p>
                      <p>
                        <label>
                        {renderCheckbox(question4.a3,student_id,4)}
                          <span>Khó thở</span>
                        </label>
                      </p>
                    </div>
                  </div>
                  </div>
      );
    }
  }

  return (
    <div >
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {lastname[0]}
          </Avatar>
        }
        action={
          // <IconButton aria-label="settings">
          //   <MoreVertIcon />
          // </IconButton>
          <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
        }
        title={firstname+" "+lastname}
        subheader={student_id}
      >title</CardHeader>
      <CardMedia
      />
      {/* <CardContent>
      <div class="row"><div class="col s5">{name}</div>
        <div class="col s5">{class_name}</div>
        <div class="col s2">{student_id}</div></div>
        
      </CardContent> */}
      <CardActions disableSpacing>
        
        {/* <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton> */}
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          {renderContent(firstname,lastname,student_id,sex,class_name,address,phone_number,email,question1,question2,question3,question4,handleDelete,startEditing,stopEditing,editIdx,handleExpandClick,handleSave,card_index)}

        </CardContent>
      </Collapse>
    </Card>
    </div>
  );
}
