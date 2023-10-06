import { Container } from "@/ui/components/container";

const CrafLayout = ({ params }: { params: { slug: string } }) => {
  console.log("Params", params);

  return (
    <Container contentStyles="py-8">
      <h1>Craft 1</h1>
    </Container>
  );
};

export default CrafLayout;
