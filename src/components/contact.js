import React from "react"
import axios from 'axios';

class Contact extends React.Component {

    state = {
        name: "",
        message: ""
    };
    constructor(props) {
        super(props);
    
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const data = {
            name: this.state.name,
            message: this.state.message
        };
        axios
            .post("https://WillConley.dev/contact", data)
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
      }

    render() {
        return (
            <div className="section contact-me" class="w-8/12 h-72 md:h-64 sm:h-32 bg-gradient-to-br from-red-500 text-black flex items-center justify-left text-sm">
                <div class="flex flex-col w-6/12 border-2 p-4 ml-8">
                    <div class="flex text-xl pb-2">Contact Me: </div>
                    {/* Email form with section */}
                    
                    <form onSubmit={this.handleSubmit} class="flex flex-col space-y-3">
                        <input type="text" name="name" placeholder="Name" value={this.state.name} onChange={this.handleChange}/>
                        <textarea class="h-24 w-full" name="message" placeholder="Message" value={this.state.message} onChange={this.handleChange}/>
                        <button type="submit" class="border-2">Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Contact