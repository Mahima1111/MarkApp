import React from 'react'

const Addstudent = () => {
  return (
    <div>


<div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-2">
                <div className="col col -12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">Name</label>
                    <input type="text" className="form-control"/>

                </div>
                <div className="col col -12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">Admno</label>
                    <input type="text" className="form-control"/>

                </div>
                <div className="col col -12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">CGPA</label>
                    <input type="text" className="form-control"/>

                </div>
                <div className="col col -12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button className="btn btn-success">SUBMIT</button>
                </div>
            </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default Addstudent