import React, { Component } from 'react'

export default class Newsitem extends Component {

    render() {
        let { imageUrl, title, description, url } = this.props;
        return (
            <div>
                <div className="card  text-white lora" style={{ position: "relative" ,backgroundColor: "#1a1a1a"}}>
                    <img src={imageUrl} className="card-img-top" style={{ height: "15rem" }} alt="" />
                    <div className="card-body" style={{ height: "15rem" }}>
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text opacity-75">{description}...</p>
                        <a href={url} className="btn border border-1 border-white" style={{
                            position: "absolute",
                            bottom: "15px",
                            left: "15px",
                            right: "15px",
                            backgroundColor: "#000", 
                            color: "#fff"
                        }}>Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}
