module.exports = {
    theme : {
        extends : {
            animation: {
                'move-horizontal': 'move-horizontal 5s linear infinite',
            },
            keyframe: {
                'move-horizontal': {
                    '0%': {transform: 'translateX(-100%'},
                    '50%': {transform: 'translateX(100%'},
                    '100%': {transform: 'translateX(-100%'},
                }
            }
        }
    }
}