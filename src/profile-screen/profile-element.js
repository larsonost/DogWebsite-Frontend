function ProfileContent(){


    return (
        <>
            <div className="row">
                <div className="col-2">
                    <h2>Navigation</h2>
                </div>
                <div className="col-9">
                    <div className="row">
                        <div className="col-1">
                            <img className="rounded-circle" height="48px" src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=1380&t=st=1690920542~exp=1690921142~hmac=f177b21ddc44442c0e8a0ea60542d57025e03b7ddaeade9e8f6b1fc5a1dc1910"/>
                        </div>
                        <div className="col-11">
                            <h2>UserName/Detail</h2>
                            <ul className="nav nav-pills mb-2 mt-2">
                                <li className="nav-item">
                                    <a className="nav-link">Followers</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link">Following</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link">Edit Profile</a>
                                </li>
                            </ul>
                            <ul className="list-group">

                                <li>Content</li>
                                <li>Content</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}
export default ProfileContent