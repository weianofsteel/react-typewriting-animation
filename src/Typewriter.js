import React from 'react';

class Typewriter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            text: '',
            isDeleting: false,
            loopNum: 0,
            typingSpeed: 150,
            isCursor: true
        }

        this.handleType = this.handleType.bind(this);
        this.handleCursor = this.handleCursor.bind(this);
        this.timer = this.timer.bind(this);
    }
  
    componentDidMount() {
      this.handleType();
      this.handleCursor();
    }

    componentWillUnmount() {
        clearInterval(this.handleCursor);
    }

    handleCursor() {
        setInterval(()=>{this.timer();},500);
    }

    timer() {
        if(this.state.isCursor === true) {
            this.setState({isCursor: false});
        } else {
            this.setState({isCursor: true});
        }        
    }

  
    handleType() {
      const { dataText, rotateSpeed, typeSpeed } = this.props;
      const { isDeleting, loopNum, text, typingSpeed } = this.state;
      const i = loopNum % dataText.length;
      const fullText = dataText[i];
  
      this.setState({
        text: isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1),
        typingSpeed: isDeleting ? (typeSpeed?typeSpeed:150) : 150
      });
  
      if (!isDeleting && text === fullText) {     
        setTimeout(() => this.setState({ isDeleting: true }), (rotateSpeed?rotateSpeed:500));   
      } else if (isDeleting && text === '') {
        this.setState({
          isDeleting: false,
          loopNum: loopNum + 1
        });      
      }
  
      setTimeout(this.handleType, typingSpeed);
    };


  
    render() {    
      
        const {
            fontSize,
            color,
            fontFamily
        } = this.props;
      
        return (
            <div style={{fontSize:fontSize?fontSize:'20px', color:color?color:'black', fontFamily:fontFamily?fontFamily:auto}}>
                <span>{ this.state.text }</span>
                { this.state.isCursor === true ?
                    <span style={{borderLeft:'.1em solid black'}}></span>
                :<span>&nbsp;</span>}  
            </div>
        );
    }
}

export default Typewriter;