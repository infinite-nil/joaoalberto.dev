import { useIsClient } from "usehooks-ts";
import { Search } from "./components/search";
import { Handle } from "./components/handle";
import { MapContainer } from "./components/map";
import { BottomSheet } from "./components/bottom-sheet";
import { Items } from "./components/items";

function TableViewTransition() {
  const isClient = useIsClient();

  if (!isClient) return null;

  return (
    <MapContainer>
      <BottomSheet>
        <Handle />
        <Search />
        <Items />
      </BottomSheet>
    </MapContainer>
  );
}

export default TableViewTransition;
