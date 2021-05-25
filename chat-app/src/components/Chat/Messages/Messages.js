import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";

const Messages = ({ messages }) => {
  const messageList = messages.flatMap((message, index) => [
    <ListItem alignItems="flex-start" key={index}>
      <ListItemAvatar>
        <Avatar alt="Hippity Hoppity" src="/static/images/avatar/1.jpg" />
      </ListItemAvatar>
      <ListItemText primary={message} />
    </ListItem>,
    <Divider component="li" key={"divider-" + index} variant="inset" />,
  ]);
  // .slice(0, -1);
  return <List>{messageList}</List>;
};

export default Messages;

// return (
//   <List>
//     {messages.map((message, index) => (
//       <ListItem alignItems="flex-start" key={index}>
//         <ListItemAvatar>
//           <Avatar alt="Hippity Hoppity" src="/static/images/avatar/1.jpg" />
//         </ListItemAvatar>
//         <ListItemText primary={message} />
//       </ListItem>
//     ))}
//     <Divider variant="inset" component="li" />
//   </List>
// );
