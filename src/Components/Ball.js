import React, { Component } from 'react';
import './Ball.css';

class Ball extends Component {
    constructor(props) {
        super(props)

        this.state = {
            message: '',
            
        }
        
        this.handleRandomizer = this.handleRandomizer.bind(this);
        this.handleShaker = this.handleShaker.bind(this);
    }

    handleRandomizer() {
        //1 Create array with messages
        let messages = [
            'Nothing',
            'It is certain',
            'It is decidedly so',
            'Without a doubt',
            'Yes, definitely',
            'You may rely on it',
            'As I see it, yes',
            'Outlook good',
            'Yes',
            'Signs point to yes',
            'Reply hazy try again',
            'Ask again later',
            'Better not tell you now',
            'Cannot predict now',
            'Concentrate and ask again',
            'Don\'t count on it',
            'My reply is no',
            'My sources say no',
            'Most likely',
            'Outlook not so good',
            'Very doubtful'
        ];

        //2 Create random number
        let random = Math.floor((Math.random() * 20) + 1);
        console.log(random)
        //3 Assign a random index from messages to the message in state.
        this.setState({
            message: messages[random],
            
        })
        
    }

    handleShaker () {
        
    }


    render() {
        return (
            <div>
                <section className='main-section'>
                    <h1 id='title'>MAGIC 8 BALL</h1>

                    <button onClick={this.handleRandomizer}>SHAKE</button>
                    <div className='mainBall'>
                        <div className='innerCircle'>
                            <div className='borderCircle'>
                                <div className='arrow-down'>
                                    <div className='messageBox'>
                                        <h6 className='message'>{this.state.message}</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Ball;