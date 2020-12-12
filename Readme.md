## react-typewriting-animation

Source code at https://github.com/weianofsteel/react-typewriting-animation


# Installation
    
    npm install --save react-typewriting-animation

or

    yarn add react-typewriting-animation


# Usage

``` 
import React from 'react';
import Typewriter from '../../component/Public/Typewriter';

const Demo = () => {
    return(
        <React.Fragment>
            <Typewriter
                rotateSpeed={1500}
                typeSpeed={150}
                fontSize={'24px'}
                color={'#6f6f6f'}
                heading={'Typewriter'}
                dataText={['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']}
            />  
        </React.Fragment>
    )
}

export default Demo;
```

# Props

|       Name      |         Type         |  Default  |                   Description                  |
|-----------------|----------------------|-----------|------------------------------------------------|
|  imgsrc         |  [img1, img2, img3]  |  [ ]      | It's an array, put the name of image you       |
|                 |  (array)             |           | imported as element.                           |
|  rotateBy       |  number              |  3        | How many seconds your carousel rotate.         |
|  width          |  string              |  '600px'  | Defines width for image in carousel            |
|  height         |  string              |  '500px'  | Defines height for image in carousel           |
|  navigateButton |  booling             |  null     | Radio navigate shows up when navigateButton    |
|                 |                      |           | set to true                                    |
|  controlButton  |  booling             |  null     | Control button shows up when controlButton     |
|                 |                      |           | set to true                                    |