import { styled } from "@/ui/config/theme";
import flags from './flags'

type FlagProps = {
    flag: keyof typeof flags;
    presence?: { x: number, y: number }
}

const Container = styled('div', {
    position: 'absolute'
})

const Flag = ({ flag, presence }: FlagProps) => {
    return (
        <Container style={{ left: presence?.x || 0, top: presence?.y || 0 }}>
            {flags[flag]}
        </Container>
    )
}

export default Flag