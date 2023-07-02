export default function SubmitFloorPlan() {
    return <>
        <div className="tab-pane fade" id="tab-05" role="tabpanel" aria-labelledby="tab-05-tab">
            <form>
                <div className="row">
                    <div className="mb-3 col-md-6">
                        <label className="form-label">Browser file</label>
                        <div className="input-group file-upload">
                            <input type="file" className="form-control" id="customFile" />
                            <label className="input-group-text" htmlFor="customFile">Choose file</label>
                        </div>
                    </div>
                    <div className="mb-3 col-md-6">
                        <label className="form-label">Floorplan Title </label>
                        <input type="text" className="form-control" placeholder="Awesome family home" />
                    </div>
                    <div className="mb-3 col-md-12">
                        <label className="form-label">Area</label>
                        <input className="form-control" placeholder="Type (sq ft)" />
                    </div>
                    <div className="mb-3 col-md-12">
                        <label className="form-label">Description</label>
                        <textarea className="form-control" rows={4} placeholder="Description"></textarea>
                    </div>
                </div>
            </form>
            <a className="btn btn-primary mt-3" href="#"><i className="fas fa-plus-circle"></i> Upload floorplans</a>
        </div>
    </>
}