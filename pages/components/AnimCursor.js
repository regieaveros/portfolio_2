import dynamic from 'next/dynamic'

const AnimCursor = () => {

    const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
      ssr: false
    });

    return (
        <>
            <AnimatedCursor
                innerSize={12}
                outerSize={25}
                color='142, 155, 166'
                outerAlpha={0.2}
                innerScale={0.7}
                outerScale={2.5}
                clickables={[
                  'a',
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
        </>
    )
}

export default AnimCursor;