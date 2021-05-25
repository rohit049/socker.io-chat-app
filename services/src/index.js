import socketIO from "socket.io";
import cors from "cors";

const PORT = 5000;

const io = socketIO(PORT, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("Connection established!");

  socket.on("newChatMessage", (data) => {
    io.emit("newChatMessage", data);
  });

  socket.on("disconnect", () => {
    console.log("Connection closed!");
  });
});
console.log(`Server listening on port ${PORT}`);
