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
    console.log('FLAG')
    console.log(flags)
    console.log(flag)
    console.log(flags[flag])
    return (
        <Container style={{ left: presence?.x || 0, top: presence?.y || 0 }} dangerouslySetInnerHTML={{ __html: flags[flag] }} />
    )
}

export default Flag