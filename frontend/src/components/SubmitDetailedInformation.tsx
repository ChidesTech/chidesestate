export default function SubmitDetailedInformation() {
    return <>
        <div className="tab-pane fade" id="tab-04" role="tabpanel" aria-labelledby="tab-04-tab">
            <form>
                <div className="row mt-4">
                    <div className="mb-3 col-md-6 select-border">
                        <label className="form-label">Building age</label>
                        <select className="form-control search-form-select">
                            <option value="value 01" selected>10 to 18 years</option>
                            <option value="value 02">10 to 18 years</option>
                        </select>
                    </div>
                    <div className="mb-3 col-md-6 select-border">
                        <label className="form-label">Bedrooms</label>
                        <select className="form-control search-form-select">
                            <option value="value 01" selected>1</option>
                            <option value="value 02">2</option>
                        </select>
                    </div>
                    <div className="mb-3 col-md-6 select-border">
                        <label className="form-label">Bathrooms</label>
                        <select className="form-control search-form-select">
                            <option value="value 01" selected>1</option>
                            <option value="value 02">2</option>
                        </select>
                    </div>
                    <div className="mb-3 col-md-6">
                        <label className="form-label">Parking </label>
                        <input type="text" className="form-control" placeholder="Parking" />
                    </div>
                    <div className="mb-3 col-md-6">
                        <label className="form-label">Cooling </label>
                        <input type="text" className="form-control" placeholder="Cooling" />
                    </div>
                    <div className="mb-3 col-md-6">
                        <label className="form-label">Heating </label>
                        <input type="text" className="form-control" placeholder="Heating" />
                    </div>
                    <div className="mb-3 col-md-6">
                        <label className="form-label">Sewer </label>
                        <input type="text" className="form-control" placeholder="Sewer" />
                    </div>
                    <div className="mb-3 col-md-6">
                        <label className="form-label">Water </label>
                        <input type="text" className="form-control" placeholder="Water" />
                    </div>
                    <div className="mb-3 col-md-6">
                        <label className="form-label">Exercise Room </label>
                        <input type="text" className="form-control" placeholder="Exercise Room" />
                    </div>
                    <div className="mb-3 col-md-6">
                        <label className="form-label">Storage Room </label>
                        <input type="text" className="form-control" placeholder="Storage Room" />
                    </div>
                </div>
            </form>
        </div></>
}