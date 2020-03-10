import lol from '../components/leagueoflegends/guides/GuidesList'

const components = {
    lol
};

export default {
    functional: true,
    render(h, ctx)  {
        return h(components[ctx.props.game], ctx.data, ctx.children)
    }
}