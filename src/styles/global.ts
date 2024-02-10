import { globalCss } from '@ignite-ui/react'

export const globalStyles = globalCss({
    '*': {
        boxSizingL: 'border-box',
        padding: 0,
        margin: 0,
    },

    body: {
        backgroundColor: '$gray900',
        color: '$gray100',
        '-webkit-font-smoothing': 'antialised',
    },
})