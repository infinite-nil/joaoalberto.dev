import { useOthers, useSelf, useMyPresence } from "@liveblocks/react";
import { ReactNode } from "react";
import Box from "../box";
import Flag from "../flag";
import { Content, Header, Wrapper } from "./styles";

type PageProps = {
  children: ReactNode;
  header?: ReactNode;
};

const Page = ({ children, header }: PageProps) => {
  const users = useOthers().toArray();
  const [, updateMyPresence] = useMyPresence()

  console.log(users);

  return (
    <Wrapper
      onPointerMove={(event) =>
        updateMyPresence({
          cursor: {
            x: Math.round(event.clientX),
            y: Math.round(event.clientY),
          },
        })
      }
      onPointerLeave={() =>
        updateMyPresence({
          cursor: null,
        })
      }>
      <Header>
        <Box kind="content">{header}</Box>
      </Header>
      <Content>{children}</Content>
      {users.map(user => <Flag key={`user-${user.connectionId}`} flag={user.info.country} presence={{ x: user?.presence?.cursor?.x, y: user?.presence?.cursor?.y }} />)}
    </Wrapper>
  );
};

export default Page;
