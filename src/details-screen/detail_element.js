import { Link} from "react-router-dom";
function DetailContent(){

    return (
        <>
            <div className="row">
                <div className="col-2">
                    <h2>Navigation</h2>
                </div>
                <div className="col-9">
                    <div className="row">
                        <div className="col-2">
                            <div>
                            <img className="rounded-pill" height="200px" width = "300px" src="https://hips.hearstapps.com/hmg-prod/images/small-dogs-toy-poodle-1563780396.jpg?crop=1xw:0.8491394606103619xh;center,top&resize=1200:*"/>
                            </div>
                            <div>
                                <br/>
                                {<Link className="list-group" to="/profile">Back to result</Link>}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-4">
                                <div className="list-group" >
                                    <br/>
                                    <div className="list-group-item">
                                        Google maps of item location 1
                                        Google maps of item location 2
                                        Google maps of item location 3
                                        Google maps of item location 4
                                        Google maps of item location 5
                                        Google maps of item location 6
                                        Google maps of item location 7
                                        Google maps of item location 8
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="list-group" >
                                    <br/>
                                    <div className="list-group-item">
                                        list of summerized results and links specific to that item 1
                                        list of summerized results and links specific to that item 2
                                        list of summerized results and links specific to that item 3
                                        list of summerized results and links specific to that item 4
                                        list of summerized results and links specific to that item 5
                                        list of summerized results and links specific to that item 6
                                        list of summerized results and links specific to that item 7
                                        list of summerized results and links specific to that item 8
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                        {/*<div className="col-9">*/}
                        {/*    <h2>UserName/Detail</h2>*/}
                        {/*    <ul className="nav nav-pills mb-2 mt-2">*/}
                        {/*        <li className="nav-item">*/}
                        {/*            <a className="nav-link">Followers</a>*/}
                        {/*        </li>*/}
                        {/*        <li className="nav-item"> */}
                        {/*            <a className="nav-link">Following</a>*/}
                        {/*        </li>*/}
                        {/*        <li className="nav-item">*/}
                        {/*            <a className="nav-link">Edit Profile</a>*/}
                        {/*        </li>*/}
                        {/*    </ul>*/}
                        {/*    <ul className="list-group">*/}

                        {/*        <li>Content</li>*/}
                        {/*        <li>Content</li>*/}
                        {/*    </ul>*/}
                        {/*</div>*/}
                    </div>
                </div>

        </>
    );
}
export default DetailContent