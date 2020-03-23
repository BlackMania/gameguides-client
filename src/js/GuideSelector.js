import lol from '../components/leagueoflegends/guide/GuideContainer'

const components = {
    lol
};

export default {
    functional: true,
    render(h, ctx)  {
        return h(components[ctx.props.game], ctx.data, ctx.children)
    }
}