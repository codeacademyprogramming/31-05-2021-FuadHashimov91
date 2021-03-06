const SearchWeather = ({ setCity, getData}) => {
    return (
        <div className='col-12'>
            <div className="input-group d-flex justify-content-center mt-4" >
                <div className="form-outline ">
                    <input
                        required
                        onChange={(e) => setCity(e.target.value)}
                        type="search" id="form1" className="form-control" placeholder="Search"
                    />
                </div>
                <button
                    onClick={() => getData()}
                    type="button" className=" btn btn-primary">Serach
            </button>
            </div>
        </div>
    )
}
export default SearchWeather;