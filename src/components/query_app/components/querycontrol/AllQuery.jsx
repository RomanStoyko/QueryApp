import QueryControl from './QueryControl'


function AllQuery(){

    return(
        <div className="container">
           
           <div className="container text-center">
            <div className="row">
                <div className="col">
                    <QueryControl  full={false}/>
                </div>
                <div className="col">
                    <QueryControl id={"HTsZ"} full={false}/>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <QueryControl id={"NoTsZ"} full={false}/>
                </div>
                <div className="col">
                    <QueryControl id={"ZhTsZ"} full={false}/>
                </div>
                </div>
            <div className="row">
                <div className="col">
                    <QueryControl id={"NaTsZ"} full={false}/>
                </div>
            </div>
            </div>
       
        </div>

    )
}

export default AllQuery