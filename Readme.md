## react-typewriting-animation

Source code at https://github.com/weianofsteel/react-typewriting-animation


# Installation
    
    npm install --save react-typewriting-animation

or

    yarn add react-typewriting-animation


# Usage

``` 
import React from 'react';
import Typewriter from 'react-typewriting-animation';

const Demo = () => {
    return(
        <React.Fragment>
            <Typewriter
                rotateSpeed={1500}
                typeSpeed={150}
                fontSize={'24px'}
                fontFamily={'Roboto'}
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
|  dataText       |  array               |  [ ]      | It's an array, put the sentences as elements.  |
|                 |                      |           | Each element should be string                  |
|  heading        |  string              |  ''       | Title of this animation.                       |
|  fontFamily     |  string              |  auto     | Defines font family for typewriting contents.  |
|  fontSize       |  string              |  '20px'   | Defines font size for typewriting contents.    |
|  color          |  string              |  'black'  | Defines color for typewriting contents.        |
|  rotateSpeed    |  number              |  500      | How long typewriting animation show a full     |
|                 |                      |           | element.                                       |
|  typeSpeed      |  number              |  150      | Speed of typewriting animation.                |