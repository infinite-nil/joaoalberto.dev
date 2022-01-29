import { RoomProvider } from "@liveblocks/react";
import Page from "@/ui/components/page";
import Title from "@/ui/components/title";

export default function Home() {
  return (
    <RoomProvider id="404">
      <Page
        header={
          <Title>
            Well well well, you are not supposed to be here. Go back before I
            call internet cop.
          </Title>
        }
      />
    </RoomProvider>
  );
}
