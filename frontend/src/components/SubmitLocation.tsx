export default function SubmitLocation(){
    return <>
    
    <div className="tab-pane fade" id="tab-03" role="tabpanel" aria-labelledby="tab-03-tab">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8351288872545!2d144.9556518!3d-37.8173306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e561db11!2sEnvato!5e0!3m2!1sen!2sin!4v1443621171568" style={{ border: 0, width: "100%", height: "250px" }}></iframe>
                    <form>
                      <div className="row mt-4">
                        <div className="mb-3 col-md-6">
                          <label className="form-label">Google Maps Address </label>
                          <input type="text" className="form-control" placeholder="Envato" />
                        </div>
                        <div className="mb-3 col-md-6">
                          <label className="form-label">Friendly Address </label>
                          <input type="text" className="form-control" placeholder="Envato market" />
                        </div>
                        <div className="mb-3 col-md-6">
                          <label className="form-label">Longitude </label>
                          <input type="text" className="form-control" placeholder="-102.243340" />
                        </div>
                        <div className="mb-3 col-md-6">
                          <label className="form-label">Latitude </label>
                          <input type="text" className="form-control" placeholder="21.852270" />
                        </div>
                        <div className="mb-3 col-md-12 select-border">
                          <label className="form-label">Regions</label>
                          <select className="form-control search-form-select">
                            <option value="value 01" selected>Los angeles</option>
                            <option value="value 02">Miami</option>
                          </select>
                        </div>
                      </div>
                    </form>
                  </div>
    
    </>
}