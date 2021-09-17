import React, {useState} from "react";
import {makeStyles} from '@material-ui/core/styles';

import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import SaveIcon from '@material-ui/icons/Save';
import CancelIcon from '@material-ui/icons/Cancel';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Box, Grid, TextField} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  margin: {
    // margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  root: {
    minWidth: 275,
    marginBottom: 10,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
}));

const Task = (props) => {
  const classes = useStyles();
  const [valueInput, setValueInput] = useState(props.task.text);
  const [flagInputDblClck, setFlagInputDblClck] = useState(false);
  const [flagInputEditBtn, setFlagInputEditBtn] = useState(false);

  const saveChange = (id) => {
    let obj = {
      _id: id,
      text: valueInput
    }
    props.thunkEditTask(obj);
  }
  const selectText = (e) => {
    e.target.select();
  }
  const changeCheckBox = (e, id) => {
    let obj = {
      _id: id,
      isCheck: e.target.checked
    }
    props.thunkEditTask(obj);
  }

  return (
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography className={classes.title}
                      color="textSecondary"
                      gutterBottom
          >
            Task
          </Typography>
        </CardContent>
        <Box display='flex'
             className='box'
        >
          <CardContent>
            <Typography variant="h5" component="h2">
              <Box display='flex'>
                <div className='check'>
                  <input type="checkbox"
                         onChange={
                           (e) =>
                               changeCheckBox(e, props.task._id)
                         }
                         checked={props.task.isCheck}
                         hidden={flagInputEditBtn ? true : false}
                  />
                </div>
                <Box>
                  {
                    !flagInputDblClck
                        ? <div className="task__text"
                               onDoubleClick={
                                 () => {
                                   setFlagInputDblClck(!flagInputDblClck);
                                 }
                               }
                        >
                          <p className={`${props.task.isCheck ? 'lineThrough' : ''}`}>
                            {props.task.text}
                          </p>
                        </div>
                        : <Box>
                          {flagInputEditBtn === false
                              ? <input
                                  // fullWidth
                                  style={{width: '100%'}}
                                  className='text-input'
                                  onFocus={
                                    (e) =>
                                        selectText(e)
                                  }
                                  onBlur={() => {
                                    setFlagInputDblClck(!flagInputDblClck)
                                    saveChange(props.task._id)
                                  }
                                  }
                                  onChange={
                                    (e) =>
                                        setValueInput(e.target.value)
                                  }
                                  value={valueInput}
                                  type="text"
                              />
                              : <input className='text-input'
                                       type="text"
                                       onChange={
                                         (e) =>
                                             setValueInput(e.target.value)
                                       }
                                       onFocus={
                                         (e) =>
                                             selectText(e)
                                       }
                                       value={valueInput}
                              />}
                        </Box>
                  }
                </Box>

              </Box>
            </Typography>
          </CardContent>
          <CardContent>
            {
              !flagInputDblClck
                  ? <Box display="flex"
                         justifyContent="center"
                         alignSelf='center'
                  >
                    <IconButton aria-label="edit"
                                className={classes.margin}
                                color="primary"
                                disabled={props.task.isCheck ? true : false}
                                onClick={() => {
                                  setFlagInputDblClck(!flagInputDblClck);
                                  setFlagInputEditBtn(!flagInputEditBtn);
                                  setValueInput(props.task.text)
                                }}
                    >
                      <EditIcon fontSize="large"/>
                    </IconButton>
                    <IconButton color="secondary"
                                aria-label="delete"
                                className={classes.margin}
                                onClick={() => props.thunkDeleteTask(props.task._id)}
                    >
                      <DeleteIcon fontSize="large"/>
                    </IconButton>
                  </Box>
                  : <Box>
                    <IconButton aria-label="cancel"
                                className={classes.margin}
                                onClick={() => {
                                  setFlagInputDblClck(!flagInputDblClck);
                                  setFlagInputEditBtn(!flagInputEditBtn);
                                  setValueInput('')
                                }}
                    >

                      <CancelIcon fontSize="large"/>
                    </IconButton>
                    <IconButton aria-label="save"
                                className={classes.margin}
                                onClick={() => {
                                  setFlagInputEditBtn(!flagInputEditBtn);
                                  setFlagInputDblClck(!flagInputDblClck);
                                  saveChange(props.task._id)
                                }}
                    >
                      <SaveIcon fontSize="large"/>
                    </IconButton>
                  </Box>
            }
          </CardContent>
        </Box>
      </Card>
  );
}

export default Task;
