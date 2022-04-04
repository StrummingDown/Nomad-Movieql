import { GraphQLServer } from "graphql-yoga";

const server = new GraphQLServer({});

server.start(() => console.log("서버 구동"));
