import React from 'react'
import AnimatedCursor from "react-animated-cursor"
const CustomCursor = () => {
    return (
        <AnimatedCursor
            innerSize={12}
            outerSize={40}
            color='238, 30, 64'
            outerAlpha={0.2}
            innerScale={0.7}
            outerStyle={{
                zIndex: 10000
            }}
            innerStyle={{
                zIndex: 10000
            }}
            outerScale={2}
            clickables={[
                'a',
                'span',
                'li',
                'img',
                'input[type="text"]',
                'input[type="email"]',
                'input[type="number"]',
                'input[type="submit"]',
                'input[type="image"]',
                'label[for]',
                'select',
                'textarea',
                'button',
                '.link'
            ]}
        />
    )
}

export default CustomCursor