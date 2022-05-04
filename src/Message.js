import { Card, CardContent, Typography } from "@mui/material";
import React, { forwardRef } from "react";
import "./message.css";

const Message = forwardRef(({ message, username }, ref) => {
  const isUser = username === message.username;
  return (
    <div ref={ref}>
      <Card className={`message ${isUser && "message__user"}`}>
        <CardContent>
          <Typography variant="h5" component="h2">
            {!isUser && `${message.username || "Unknown User"}  :`}{" "}
            {message.message}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
});

export default Message;
// import { Card, CardContent, Typography } from "@mui/material";
// import React, { forwardRef } from "react";
// import "./message.css";

// const Message = forwardRef(({ message, username }, ref) => {
//   const isUser = username === message.username;
//   return (
//     <div ref={ref}>
//       <Card className={`message ${isUser && "message__user"}`}>
//         <CardContent>
//           <Typography variant="h5" component="h2">
//             {!isUser && `${message.username || "Unknown User"}  :`}
//             {message.message}
//           </Typography>
//         </CardContent>
//       </Card>
//     </div>
//   );
// });

// export default Message;
