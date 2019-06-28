import React, {Component} from "react";
import Menu from "../../components/menu";
import Video from "../../components/video";
import SubscribeButton from "../channel/SubscribeButton";
import {API_URL} from "../../util/consts";

class Channel extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Menu {...this.props}>
                <div>
                    <div id="wrapper">
                        <div className="single-channel-page" id="content-wrapper">
                            <div className="single-channel-image">
                                <img className="img-fluid"
                                     src={this.props.user ? this.props.user.background_image ? this.props.user.background_image : "/static/img/favicon.png" : "/static/img/channel_bg_default.webp"}/>
                                <div className="channel-profile">
                                    <img className="channel-profile-img"
                                         src={this.props.user ? this.props.user.avatar ? API_URL + this.props.user.avatar : "/static/img/user.png" : "/static/img/user.png"}/>
                                </div>
                            </div>
                            <div className="single-channel-nav">
                                <nav className="navbar navbar-expand-lg navbar-light">
                                    <a className="channel-brand"
                                       href="#">{this.props.user ? this.props.user.username || this.props.user.email.replace(/@.*$/, "") : null}<span
                                        data-placement="top"
                                        data-toggle="tooltip"
                                        data-original-title="Verified"><i
                                        className="fas fa-check-circle text-success"/></span></a>
                                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                            aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon"/>
                                    </button>
                                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                        <ul className="navbar-nav mr-auto">
                                            <li className="nav-item active">
                                                <a className="nav-link" href="#">Videos <span
                                                    className="sr-only">(current)</span></a>
                                            </li>
                                        </ul>
                                        <form className="form-inline my-2 my-lg-0">
                                            <SubscribeButton artist={this.props.user}/>
                                        </form>
                                    </div>
                                </nav>
                            </div>
                            <div className="container-fluid">
                                <div className="video-block section-padding">
                                    {
                                        (this.props.user && this.props.user.my_videos && this.props.user.my_videos.length > 0) ?
                                            <div className="row">
                                                {this.props.user.my_videos.map(v => <Video video={v} key={v.id}/>)}
                                            </div> :
                                            <div>
                                                <h6>This channel hasn't videos</h6>
                                            </div>
                                    }

                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </Menu>
        );
    }
}

export default Channel;
