import {Routes, Route}
    from "react-router";

function SearchResult() {
    return (
        <>
            <img className="rounded-pill " height="60px" src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*smveQn1098jmPCYDqEEJlA.png"/>
        <div className="row">
            <div className="col-2">
                <h2>Navigation</h2>
            </div>
            <div className="col-8">
                <input placeholder="Search "
                       className="form-control rounded-pill pl-5"/>
                <br/>
                <div className="list-group">
                    <li className="list-group-item">search1</li>
                    <li className="list-group-item">search2</li>
                </div>

            </div>
        </div>
        </>
    );
}

export default SearchResult