import React from 'react';
import Lottie from 'lottie-react';

// Example Lottie animation data - you can replace this with your own JSON
const defaultAnimation = {
  "v": "5.5.7",
  "fr": 29.9700012207031,
  "ip": 0,
  "op": 180.00000733155,
  "w": 512,
  "h": 512,
  "nm": "Example Animation",
  "ddd": 0,
  "assets": [],
  "layers": [
    {
      "ddd": 0,
      "ind": 1,
      "ty": 4,
      "nm": "Shape Layer 1",
      "sr": 1,
      "ks": {
        "o": {"a": 0, "k": 100},
        "r": {"a": 0, "k": 0},
        "p": {"a": 0, "k": [256, 256, 0]},
        "a": {"a": 0, "k": [0, 0, 0]},
        "s": {"a": 0, "k": [100, 100, 100]}
      },
      "ao": 0,
      "shapes": [
        {
          "ty": "gr",
          "it": [
            {
              "d": 1,
              "ty": "el",
              "s": {"a": 0, "k": [100, 100]},
              "p": {"a": 0, "k": [0, 0]}
            },
            {
              "ty": "fl",
              "c": {"a": 0, "k": [1, 1, 1, 1]},
              "o": {"a": 0, "k": 100}
            }
          ],
          "nm": "Ellipse Path 1"
        }
      ]
    }
  ]
};

const LottieAnimation = ({ animationData = defaultAnimation, width = 200, height = 200 }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
      <Lottie
        animationData={animationData}
        style={{ width: width, height: height }}
        loop={true}
        autoplay={true}
      />
    </div>
  );
};

export default LottieAnimation; 